# Native addon audit

The default TDLib source remains `AlexXanderGrib/prebuilt-tdlib`. The pinned release
is `0.1.8.67-42e6a52`, TDLib 1.8.67 at commit
`42e6a5259551178d1dab54a22ad96d14bd906e20`. Platform package metadata and generated
TypeScript bindings use the same commit.

## Reliability changes

- Use one shared modern receive thread for public clients across Node workers.
  Poll TDLib in waits of at most 100 ms, preserving independent client timeouts.
  Close clients and drain their final closed updates before completing destruction.
  Low-level legacy receive threads still join before destroying legacy clients.
- Keep receive workers alive until both their JavaScript owner and their
  thread-safe function have finalized. Clean up clients and threads when a Node
  worker environment terminates, including when the modern receiver is unreferenced.
- Settle outstanding receive promises when explicitly destroying a client, reject
  duplicate receives, and reject use of destroyed clients. The TypeScript adapter
  marks destruction immediately and allows independent clients to receive concurrently.
- Associate each public client with its Node environment and deliver through one
  thread-safe function per environment. Worker termination closes only its clients.
  The retained raw modern receiver and log callback each have one environment owner;
  a raw receiver cannot compete with the managed public dispatcher.
- Resolve all dynamic library symbols before publishing any pointers; failed loads
  close their handles and allow retries. Repeating a load of the same path succeeds.
  Serialize JavaScript entry points across environments so unloading cannot race
  with native calls or resource creation.
- Reject unloading while clients, workers, or log callbacks are active. After modern
  client IDs have been created, keep TDLib loaded for the rest of the process:
  TDLib owns a process-wide manager and native schedulers whose lifetime extends
  beyond individual client closure. Client closure does not prove library unloading
  is safe.
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

Legacy receive responses use one reusable native string rather than a temporary string
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
client memory usage. The managed receive path copies TDLib-owned data once for
safe transfer between threads, then moves it into client queues. Public clients
share one addon receive thread. Legacy low-level clients retain per-client threads.

Managed response queues default to 256 messages and 8 MiB per client, configurable
through `TDLibAddon.create(path, addonPath, options)`. An oversized response can
satisfy an already waiting consumer intact; an oversized buffered response or
excess backlog closes that client and rejects receives and outstanding high-level
API requests with an explicit overflow error. Other clients continue working.
JSON is never truncated and updates are never silently dropped from a live client.
These bounds cover addon buffering, not TDLib's own internal queues, databases,
network resources, or JavaScript objects already delivered to applications.
A paused client can overflow because the shared receiver continues draining TDLib.

Reproduce the current measurement with:

```sh
npm run build:gyp
node test/addon-memory.cjs
# Compare another compiled addon:
node test/addon-memory.cjs /absolute/path/to/td.node
```

## Validation

`npm run test:addon` builds the public adapter and runs 23 native regression tests
against a deterministic C ABI fixture. The fixture aborts on receive/destroy races
and simultaneous modern receive calls. Coverage includes failed loads/retries,
validation, 2 MiB responses, timeouts, garbage collection, callback floods and
exceptions, CommonJS/ESM resolution, modern-only libraries, nested/escaped JSON
routing, response order, queue limits, delayed final closure, high-level request
rejection, simultaneous workers, sibling termination, and receiver recreation.

All 23 tests passed with AddressSanitizer and UndefinedBehaviorSanitizer on the
addon. `RTLD_DEEPBIND` was disabled in the test build because it bypasses sanitizer
interposition, and leak detection was disabled for the uninstrumented Node
executable. No sanitizer errors were reported; ThreadSanitizer was not run.

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

## Modern JSON API and worker architecture

The public `TDLibAddon` now uses `td_create_client_id`, `td_send`, `td_receive`,
and `td_execute`. The
[JSON interface contract](https://github.com/tdlib/td/blob/42e6a5259551178d1dab54a22ad96d14bd906e20/td/telegram/td_json_client.h)
allows sends from any thread but permits only one concurrent receive caller.
The old `td_json_client_*` interface is scheduled for removal in TDLib 2.0.0.
The dynamic loader requires modern symbols and treats legacy symbols as optional.
A modern-only fixture validates that legacy removal does not break the adapter;
this is not a claim to have tested an unreleased TDLib 2.0 binary.

One native dispatcher receives all modern clients' responses and routes them by
TDLib's top-level `@client_id`. A scanner inspects trusted TDLib-produced JSON
without building a second parsed object; nested `@extra` fields and escaped
strings cannot impersonate routing IDs or authorization closure events.
Per-client queues preserve event order and apply the limits described above.
The public `Client` removes `@client_id` after routing, preserving existing API
result and update shapes. Raw adapter JSON retains TDLib's transport envelope.

Each Node environment owns its client handles, promise deferreds, and one
thread-safe function with a single coalesced wake-up slot. The receiver transfers
owned strings, never JavaScript values, across environments. A shared deadline
queue tracks independent receive timeouts without scanning all clients on each
received message. The dispatcher sleeps when no clients remain and joins when
its last environment exits; a later environment can start a fresh receiver.
Active managed clients keep their owning event loop alive until closure.

`destroy()` sends `close`, rejects a pending receive promptly, and resolves only
after `updateAuthorizationState` reports `authorizationStateClosed`. An `ok`
response to `close` is not enough. Environment cleanup sends close for all its
clients and lets the shared receiver drain closure even after JavaScript is gone.
It does not close sibling environments' clients. Worker termination therefore
can wait for TDLib's database/network shutdown; it is not a guaranteed immediate
kill. Prefer `await client.destroy()` before stopping a worker.

Native entry points retain the loader mutex to serialize loading and calls.
The shared receive thread and managed environment cleanup do not acquire it,
so closure can drain while cleanup waits. Logging remains process-wide with
one callback owner; configure it centrally. The raw `tdn_*` receiver remains for
advanced compatibility, but cannot be used alongside the managed dispatcher.
Legacy low-level exports are retained when the loaded library provides them.
Applications using the public API need no JavaScript broker or message-port
routing layer.

### Multiple bots with independent auth

Create `TDLibAddon` and `Client` inside each worker. Native libraries and C++
globals are shared by the process; JavaScript objects and handles belong to their
creating environment. Do not transfer native handles between workers. Use a
distinct database directory for every active auth, with separate file directories
as the simplest layout. Different bot tokens authenticate different clients with
`checkAuthenticationBotToken` (or `Authenticator.token`). They can share the same
application `api_id` and `api_hash`. A worker can also own several clients.
See the [README worker example](../README.md#worker-threads).

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
The shared modern JSON manager provides the backend used by this wrapper.

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
complete 50 version requests and 50 authorization-state requests, then close
cleanly (400 responses). The termination mode terminates one worker and verifies
that its three siblings complete another 50 requests each (550 responses total).
The raw mode keeps the compatibility receiver in the parent and routes events
to four workers (200 tagged responses). All three modes passed against TDLib
1.8.67 on Linux x64/Node 24.21.0. They validate concurrency, routing, isolation
of sibling teardown, and shutdown. Multiple real bot logins were not tested.
CI runs all modes against the pinned binary.

```sh
npm run build:gyp
npm run build:dist
# Set TDLIB_PATH to the downloaded shared library if optional packages are absent.
node test/worker-threads.cjs public
node test/worker-threads.cjs termination
node test/worker-threads.cjs raw
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
