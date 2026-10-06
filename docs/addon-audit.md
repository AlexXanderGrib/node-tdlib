# Native addon audit

The default TDLib source remains `AlexXanderGrib/prebuilt-tdlib`. The pinned release
is `0.1.8.67-42e6a52`, TDLib 1.8.67 at commit
`42e6a5259551178d1dab54a22ad96d14bd906e20`. Platform package metadata and generated
TypeScript bindings use the same commit.

## Reliability changes

- Join receive threads before destroying clients. Poll TDLib in waits of at most
  100 ms while preserving the caller's total timeout; shutdown can interrupt long
  waits. TDLib's own client destruction can take additional time.
- Keep receive workers alive until both their JavaScript owner and their
  thread-safe function have finalized. Clean up clients and threads when a Node
  worker environment terminates, including when the modern receiver is unreferenced.
- Settle outstanding receive promises when explicitly destroying a client, reject
  duplicate receives, and reject use of destroyed clients. The TypeScript adapter
  marks destruction immediately and allows independent clients to receive concurrently.
- Associate modern receivers and log callbacks with their owning Node environment.
  Only one environment can own the process-wide modern receiver or log callback.
- Resolve all dynamic library symbols before publishing any pointers; failed loads
  close their handles and allow retries. Repeating a load of the same path succeeds.
  Serialize JavaScript entry points across environments so unloading cannot race
  with native calls or resource creation.
- Reject unloading while clients, workers, or log callbacks are active. After modern
  client IDs have been created, keep TDLib loaded for the rest of the process:
  the modern API does not expose client destruction or a reliable way to prove that
  every client has finished closing across environment teardown.
- Validate finite timeouts and integer IDs/log levels before converting them to
  C integers. Reject embedded NUL characters in requests and library paths.
- Enable C++ exceptions consistently so thread/allocation failures reach JavaScript.
  Use status-returning N-API in asynchronous callbacks, where worker termination
  can forbid JavaScript even before the environment pointer becomes null.
- Give Windows loader errors thread-local storage and change only the calling
  thread's error mode.
- Resolve the default binary dispatcher through its CommonJS entry point. Its
  forwarded `module.exports` does not reliably provide named exports to Node's
  dynamic `import()`. Verify default resolution from both built adapter formats.

## Memory changes and tradeoffs

Receive responses use one reusable native string rather than a temporary string
plus a separately allocated character array. Timeout notifications and deferred
promise bookkeeping need no separate C++ payload allocation. Buffers larger than
64 KiB are released after delivery. Synchronous responses go directly into a
JavaScript string. JSON is never truncated; the previous 1 MiB limit could corrupt
valid large responses.

Log delivery has a queue of 256 messages, with at most 16 KiB of text per message
(about 4 MiB of queued text, plus allocation/queue overhead). Excess log messages
are dropped without blocking TDLib; long log messages are truncated. Failed enqueue
attempts free their payload immediately. These limits apply to diagnostic logs only.

A synthetic burst of 10,000 messages of 32 KiB, measured before JavaScript drained
the queue on Linux x64 with Node 24.21.0, grew RSS by about **313 MiB before** and
**4 MiB after**. This measures log backlogs; it is not a claim about ordinary TDLib
client memory usage. The receive path still copies data owned by TDLib once for
safe transfer between threads, and each client still has a receive thread.

Reproduce the current measurement with:

```sh
npm run build:gyp
node test/addon-memory.cjs
# Compare another compiled addon:
node test/addon-memory.cjs /absolute/path/to/td.node
```

## Validation

`npm run test:addon` builds the public adapter and runs 15 native regression tests
against a deterministic C ABI fixture. The fixture aborts on receive/destroy races
and simultaneous receive calls. Tests cover failed loads/retries, validation,
2 MiB responses through both receive APIs, long-wait cancellation, garbage
collection, callback floods/replacement/exceptions, Node worker termination,
modern environment ownership, and public adapter lifecycle behavior.
Both CommonJS and ESM adapters also resolve a default CommonJS binary dispatcher.
Three simultaneous Node workers also keep client responses separate and continue
operating after a sibling is terminated with a receive pending.

All 13 tests also passed with AddressSanitizer and UndefinedBehaviorSanitizer on
the addon. For that run, `RTLD_DEEPBIND` was disabled in the test build because it
bypasses sanitizer interposition, and leak detection was disabled for the
uninstrumented Node executable. No sanitizer errors were reported.

The 15 serialization/utility tests passed against the downloaded TDLib 1.8.67
Linux glibc binary. Type checking, linting, native compilation, and distribution
builds passed. Telegram authentication is a separate test requiring live credentials;
it was not part of the final validation run. Windows, macOS, and other CPU/libc
combinations were not executed locally.

## Dynamic loading

The addon loads shared TDLib libraries exclusively. Static build options,
compile-time symbol bindings, and the `load_tdjson_static` export have been
removed. `load_tdjson` and its `load_tdjson_dynamic` alias remain supported;
`get_loading_mode()` returns `"dynamic"` for compatibility. Dynamic loading was
exercised with the actual TDLib 1.8.67 Linux x64 glibc library, so TDLib can be
upgraded independently of the addon.

## Modern JSON API migration assessment

TDLib's [JSON interface header](https://github.com/tdlib/td/blob/master/td/telegram/td_json_client.h)
documents `td_create_client_id`, `td_send`, `td_receive`, and `td_execute` as the
main interface. It says the old `td_json_client_*` interface will be removed in
TDLib 2.0.0. The [implementation](https://github.com/tdlib/td/blob/master/td/telegram/ClientJson.cpp)
uses a process-wide client manager and adds `@client_id` to received events.
Requests, responses, and `@extra` keep the same JSON encoding.

The addon already exports the modern functions and has a process-wide receiver;
the public `TDLibAddon` adapter still uses the legacy interface. Migrating that
adapter is recommended, especially for multiple accounts. One shared receive
thread would replace the current receive thread per client, reducing addon thread
and buffer overhead. No RAM saving from that migration has been measured yet.
TDLib's own client/database memory remains separate.

Migration requires a single receive dispatcher that preserves each client's event
order and routes events by `@client_id`. Per-client buffering must have an explicit
policy for paused consumers: preserve updates without unbounded memory growth.
The adapter must send `close` and continue receiving until
`updateAuthorizationState` reports `authorizationStateClosed`; modern clients are
destroyed automatically, so there is no `td_destroy` equivalent. Multiple adapter
instances must share the dispatcher, and Node worker environments need an explicit
ownership/routing policy because simultaneous `td_receive` calls are forbidden.
Existing application-facing client handles can remain opaque objects containing
an internal numeric TDLib ID. The migration is assessed here, not implemented.

A smoke test against the real TDLib 1.8.67 library created two modern clients,
received version responses with matching `@client_id` and `@extra`, then sent
`close` to both and received `authorizationStateClosed` for each. This confirms
the native API works; it does not validate a public adapter migration.

## Multiple bots in Node worker threads

Worker threads are feasible with independent TDLib client instances. A worker is
an independent JavaScript environment, but native libraries and C++ globals live
in the shared process. Creating a client in each worker gives separate auth and
update streams, not a separate copy of TDLib or its global logging configuration.
Create the public adapter and `Client` inside the worker; do not transfer native
client handles between JavaScript environments. Use a distinct database directory
for every active auth, with separate file directories as the simplest layout.
Different bot tokens authenticate different clients through
`checkAuthenticationBotToken`. Distinct clients may use the same application
`api_id` and `api_hash`.

The current public adapter uses the legacy API, which has a receive stream per
client. Each client has its own addon receive thread and environment-bound
thread-safe function. Environment cleanup joins and destroys only that
environment's legacy clients. A global recursive mutex protects library loading,
unloading, and synchronous native entry points. TDLib's background actor threads
still run concurrently, but synchronous executes or slow client destruction can
hold that mutex and delay calls from other workers. Logging is process-wide and
the addon permits only one environment to own its callback. Configure logging
centrally; do not install independent callbacks in every bot worker.

For the modern API, the
[TDLib JSON contract](https://github.com/tdlib/td/blob/42e6a5259551178d1dab54a22ad96d14bd906e20/td/telegram/td_json_client.h)
allows sending from any thread but requires one receive caller at a time. All
clients' events share that receive stream. A mutex around several per-worker
receive loops would prevent overlapping calls but would not ensure that the
correct worker receives each client's event. Our addon currently restricts
`tdn_init` and modern client creation to one owning environment. `td_send` can
be called from other environments using an assigned client ID. An independent
modern `TDLibAddon.create()` in every worker is not implemented.

The recommended migration keeps the modern receive thread shared and gives
each worker its own client and API facade. Start with a dedicated broker worker
that owns IDs, continually drains `td_receive`, and routes events by `@client_id`
over message ports. Bot workers run auth and business logic; commands can be
forwarded through the broker or sent directly using the assigned ID. This adds
message passing and serialization overhead. An eventual native dispatcher could
deliver through a thread-safe function per environment, avoiding a JavaScript
broker hop, but it needs explicit client ownership and safe environment teardown.
Both designs need per-client ordering, byte/count limits for buffered events, and
an explicit policy for slow consumers; port queues alone do not provide a bound.

When a bot worker exits, the modern dispatcher must close its clients and keep
receiving until `authorizationStateClosed`, even though there is no worker left
to receive those events. Terminating the receive owner without replacing it or
closing every client can leave clients and responses alive. Use graceful close
before worker termination. Existing legacy termination cleanup is validated;
automatic modern client closure on environment termination is not implemented.

### What Telegram's Bot API server does

Reviewed source snapshots: TDLib `42e6a5259551178d1dab54a22ad96d14bd906e20`
and Telegram Bot API `e3e9dd8e5b3d7ab8537cd5a10dc31d5ffa8f82d1`. The latter's
TDLib submodule points to `bc9c263e2bfee06aaab41e82db51a103376030bc`.
The checkouts are under `.cache/threading-research/`.

The Bot API server creates one bot `Client` actor per token and one
[TDLib `ClientActor` with a callback per bot](https://github.com/tdlib/telegram-bot-api/blob/e3e9dd8e5b3d7ab8537cd5a10dc31d5ffa8f82d1/telegram-bot-api/Client.cpp#L8614).
Callbacks schedule messages back to the owning bot actor. Each bot gets its own
database/file directories and authenticates with its own token. It does not use
the JSON receive functions. The server
[configures shared scheduler threads](https://github.com/tdlib/telegram-bot-api/blob/e3e9dd8e5b3d7ab8537cd5a10dc31d5ffa8f82d1/telegram-bot-api/ClientParameters.h#L61):
12 scheduler threads in this snapshot, with `ClientManager` and bot `Client`
actors assigned to scheduler 4. Thus a bot is an actor, not a dedicated OS thread.
This is evidence for multiple authenticated clients in one process; reproducing
its actor backend would require much more than switching JSON function names.
The shared modern JSON manager is sufficient for this wrapper's proposed design.

### Resource implications and validation

[TDLib's threaded client implementation](https://github.com/tdlib/td/blob/42e6a5259551178d1dab54a22ad96d14bd906e20/td/telegram/Client.cpp#L350)
already pools native schedulers. Legacy clients share a static `MultiImplPool`;
the modern singleton manager owns a separate pool of the same kind. Each
`MultiImpl` creates three scheduler workers plus one thread
running its main scheduler. Pool sizing depends on hardware concurrency and the
platform. Additional database/network threads can exist. Removing addon receive
threads is a narrower saving than replacing all TDLib threads with one thread.
Every Node worker also adds a JavaScript isolate and heap, so one worker per bot
can cost more RAM than grouping lightweight bots in a worker. Workers are useful
when JavaScript processing needs parallel CPU execution or independent event loops.
[Node worker resource limits](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html#new-workerfilename-options)
limit the JS engine, not native TDLib allocations. Native faults and process-wide
out-of-memory failures are shared; use separate processes when process isolation
is a requirement.

`test/worker-threads.cjs` exercises the actual shared library without credentials
or database initialization. Four workers using the public `Client` API each
completed 50 version requests and 50 authorization-state requests, then received
the closed state and destroyed their clients. The modern mode used one receiver
in the parent and routed events to four workers; each worker sent 50 tagged
requests and received only its client's responses in order, then closed cleanly.
Both modes passed against TDLib 1.8.67 on Linux x64/Node 24.21.0. These validate
concurrency, routing, and shutdown; multiple real bot logins were not tested.
CI runs both modes against the pinned binary.

```sh
npm run build:gyp
npm run build:dist
# Set TDLIB_PATH to the downloaded shared library if optional packages are absent.
node test/worker-threads.cjs legacy
node test/worker-threads.cjs modern
```

## Binary package publication

At upgrade time, the GitHub release assets were available but the matching
`@tdlib-native/tdjson` npm packages were not published. Publish the generated
platform packages and dispatcher before releasing the wrapper, then regenerate
`package-lock.json` to capture their registry metadata and integrity hashes.
The lockfile records the generated release metadata and expected npm tarball URLs;
registry integrity hashes are unavailable until publication. Clean installs can
skip the missing optional binaries. Local tests and CI download the pinned GitHub
binary directly, so they can verify the upgrade before publication. Generated `download.sh` files support the existing
binary package publishing workflow and fail on unsuccessful HTTP responses.

For a local checkout before publication, install the generated dispatcher and
platform package after downloading the current platform's binary. For Linux x64
glibc, link only those generated packages into the local dependency directory:

```sh
npm ci
node scripts/test-binary-module.js
mkdir -p node_modules/@tdlib-native
ln -s ../../packages/tdjson node_modules/@tdlib-native/tdjson
ln -s ../../packages/tdjson-linux-x64-glibc node_modules/@tdlib-native/tdjson-linux-x64-glibc
```

A subsequent clean install removes these development links. Published consumers
will resolve the exact version from npm once the binary packages are available.
