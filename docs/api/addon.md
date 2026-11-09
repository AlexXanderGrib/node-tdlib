[**TDLib Native**](README.md)

***

[TDLib Native](modules.md) / addon

# addon

## Classes

### TDLibAddon

Defined in: [addon/addon.ts:58](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L58)

#### Export

TDLibAddon

#### Implements

#### Implements

- `TDLib`

#### Constructors

##### Constructor

> `private` **new TDLibAddon**(`_addon`, `_options`): [`TDLibAddon`](#tdlibaddon)

Defined in: [addon/addon.ts:86](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L86)

Creates an instance of TDLibAddon.

###### Parameters

###### \_addon

[`NativeExports`](#nativeexports)

###### \_options

[`TDLibAddonOptions`](#tdlibaddonoptions)

###### Returns

[`TDLibAddon`](#tdlibaddon)

###### Memberof

TDLibAddon

#### Properties

##### \_addon

> `private` `readonly` **\_addon**: [`NativeExports`](#nativeexports)

Defined in: [addon/addon.ts:87](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L87)

##### \_clients

> `private` `readonly` **\_clients**: `WeakMap`\<`TDLibClient`, `ClientMeta`\>

Defined in: [addon/addon.ts:92](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L92)

##### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

Defined in: [addon/addon.ts:91](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L91)

###### Implementation of

`TDLib._isTDLib`

##### \_options

> `private` `readonly` **\_options**: [`TDLibAddonOptions`](#tdlibaddonoptions)

Defined in: [addon/addon.ts:88](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L88)

#### Accessors

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [addon/addon.ts:100](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L100)

###### Memberof

TDLibAddon

###### Returns

`string`

###### Implementation of

`TDLib.name`

#### Methods

##### \_getMeta()

> `private` **\_getMeta**(`client`): `ClientMeta`

Defined in: [addon/addon.ts:121](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L121)

###### Parameters

###### client

`TDLibClient`

###### Returns

`ClientMeta`

##### create()

> **create**(`timeout`): `TDLibClient`

Defined in: [addon/addon.ts:110](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L110)

###### Parameters

###### timeout

`number`

###### Returns

`TDLibClient`

{TDLibClient}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.create`

##### destroy()

> **destroy**(`client`): `Promise`\<`void`\>

Defined in: [addon/addon.ts:138](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L138)

###### Parameters

###### client

`TDLibClient`

###### Returns

`Promise`\<`void`\>

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.destroy`

##### execute()

> **execute**(`client`, `json`): `null` \| `string`

Defined in: [addon/addon.ts:156](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L156)

###### Parameters

###### client

`null` | `TDLibClient`

###### json

`string`

###### Returns

`null` \| `string`

{(string | null)}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.execute`

##### receive()

> **receive**(`client`): `Promise`\<`null` \| `string`\>

Defined in: [addon/addon.ts:170](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L170)

###### Parameters

###### client

`TDLibClient`

###### Returns

`Promise`\<`null` \| `string`\>

{(Promise<string | null>)}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.receive`

##### send()

> **send**(`client`, `json`): `void`

Defined in: [addon/addon.ts:188](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L188)

###### Parameters

###### client

`TDLibClient`

###### json

`string`

###### Returns

`void`

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.send`

##### setLogMessageCallback()

> **setLogMessageCallback**(`level`, `callback`): `void`

Defined in: [addon/addon.ts:203](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L203)

###### Parameters

###### level

`number`

###### callback

`null` | (`errorMessage`) => `void`

###### Returns

`void`

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.setLogMessageCallback`

##### create()

> `static` **create**(`tdlibPath?`, `addonPath?`, `options?`): `Promise`\<[`TDLibAddon`](#tdlibaddon)\>

Defined in: [addon/addon.ts:69](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L69)

###### Parameters

###### tdlibPath?

`string`

Resolves to prebuild TDLib for your platform

###### addonPath?

`string`

###### options?

[`TDLibAddonOptions`](#tdlibaddonoptions) = `{}`

Per-client response queue limits

###### Returns

`Promise`\<[`TDLibAddon`](#tdlibaddon)\>

###### Static

###### Memberof

TDLibAddon

## Type Aliases

### NativeExports

> **NativeExports** = `object`

Defined in: [addon/native-exports.ts:3](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L3)

#### Methods

##### get\_loading\_mode()

> **get\_loading\_mode**(): `"dynamic"`

Defined in: [addon/native-exports.ts:32](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L32)

###### Returns

`"dynamic"`

##### is\_td\_loaded()

> **is\_td\_loaded**(): `boolean`

Defined in: [addon/native-exports.ts:31](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L31)

###### Returns

`boolean`

##### load\_tdjson()

> **load\_tdjson**(`path`): `boolean`

Defined in: [addon/native-exports.ts:29](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L29)

###### Parameters

###### path

`string`

###### Returns

`boolean`

##### load\_tdjson\_dynamic()

> **load\_tdjson\_dynamic**(`path`): `boolean`

Defined in: [addon/native-exports.ts:30](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L30)

###### Parameters

###### path

`string`

###### Returns

`boolean`

##### td\_client\_create()

> **td\_client\_create**(`timeoutSec`, `maxQueuedResponses?`, `maxQueuedBytes?`): `TDLibClient`

Defined in: [addon/native-exports.ts:4](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L4)

###### Parameters

###### timeoutSec

`number`

###### maxQueuedResponses?

`number`

###### maxQueuedBytes?

`number`

###### Returns

`TDLibClient`

##### td\_client\_destroy()

> **td\_client\_destroy**(`client`): `Promise`\<`void`\>

Defined in: [addon/native-exports.ts:12](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L12)

###### Parameters

###### client

`TDLibClient`

###### Returns

`Promise`\<`void`\>

##### td\_client\_execute()

> **td\_client\_execute**(`client`, `json`): `null` \| `string`

Defined in: [addon/native-exports.ts:11](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L11)

###### Parameters

###### client

`null` | `TDLibClient`

###### json

`string`

###### Returns

`null` \| `string`

##### td\_client\_receive()

> **td\_client\_receive**(`client`): `Promise`\<`null` \| `string`\>

Defined in: [addon/native-exports.ts:10](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L10)

###### Parameters

###### client

`TDLibClient`

###### Returns

`Promise`\<`null` \| `string`\>

##### td\_client\_send()

> **td\_client\_send**(`client`, `json`): `void`

Defined in: [addon/native-exports.ts:9](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L9)

###### Parameters

###### client

`TDLibClient`

###### json

`string`

###### Returns

`void`

##### td\_create\_client\_id()

> **td\_create\_client\_id**(): `number`

Defined in: [addon/native-exports.ts:22](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L22)

###### Returns

`number`

##### td\_execute()

> **td\_execute**(`json`): `null` \| `string`

Defined in: [addon/native-exports.ts:25](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L25)

###### Parameters

###### json

`string`

###### Returns

`null` \| `string`

##### td\_json\_client\_create()

> **td\_json\_client\_create**(`timeoutSec`): `TDLibClient`

Defined in: [addon/native-exports.ts:13](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L13)

###### Parameters

###### timeoutSec

`number`

###### Returns

`TDLibClient`

##### td\_json\_client\_destroy()

> **td\_json\_client\_destroy**(`client`): `void`

Defined in: [addon/native-exports.ts:17](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L17)

###### Parameters

###### client

`TDLibClient`

###### Returns

`void`

##### td\_json\_client\_execute()

> **td\_json\_client\_execute**(`client`, `json`): `null` \| `string`

Defined in: [addon/native-exports.ts:16](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L16)

###### Parameters

###### client

`null` | `TDLibClient`

###### json

`string`

###### Returns

`null` \| `string`

##### td\_json\_client\_receive()

> **td\_json\_client\_receive**(`client`): `Promise`\<`null` \| `string`\>

Defined in: [addon/native-exports.ts:15](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L15)

###### Parameters

###### client

`TDLibClient`

###### Returns

`Promise`\<`null` \| `string`\>

##### td\_json\_client\_send()

> **td\_json\_client\_send**(`client`, `json`): `void`

Defined in: [addon/native-exports.ts:14](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L14)

###### Parameters

###### client

`TDLibClient`

###### json

`string`

###### Returns

`void`

##### td\_receive()

> **td\_receive**(): `Promise`\<`null` \| `string`\>

Defined in: [addon/native-exports.ts:24](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L24)

###### Returns

`Promise`\<`null` \| `string`\>

##### td\_send()

> **td\_send**(`client`, `json`): `void`

Defined in: [addon/native-exports.ts:23](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L23)

###### Parameters

###### client

`number`

###### json

`string`

###### Returns

`void`

##### td\_set\_log\_message\_callback()

> **td\_set\_log\_message\_callback**(`level`, `callback`): `void`

Defined in: [addon/native-exports.ts:18](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L18)

###### Parameters

###### level

`number`

###### callback

`null` | (`verbosityLevel`, `errorMessage`) => `void`

###### Returns

`void`

##### tdn\_init()

> **tdn\_init**(`timeoutSec`): `void`

Defined in: [addon/native-exports.ts:26](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L26)

###### Parameters

###### timeoutSec

`number`

###### Returns

`void`

##### tdn\_ref()

> **tdn\_ref**(): `void`

Defined in: [addon/native-exports.ts:27](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L27)

###### Returns

`void`

##### tdn\_unref()

> **tdn\_unref**(): `void`

Defined in: [addon/native-exports.ts:28](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L28)

###### Returns

`void`

##### unload\_tdjson()

> **unload\_tdjson**(): `void`

Defined in: [addon/native-exports.ts:33](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/native-exports.ts#L33)

###### Returns

`void`

***

### TDLibAddonOptions

> **TDLibAddonOptions** = `object`

Defined in: [addon/addon.ts:44](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L44)

#### Properties

##### maxQueuedBytes?

> `optional` **maxQueuedBytes**: `number`

Defined in: [addon/addon.ts:48](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L48)

Maximum buffered JSON bytes per client. Default: 8 MiB.

##### maxQueuedResponses?

> `optional` **maxQueuedResponses**: `number`

Defined in: [addon/addon.ts:46](https://github.com/AlexXanderGrib/node-tdlib/blob/4c7052a83eab928b6a39f7df6439e0a1fac674de/src/addon/addon.ts#L46)

Maximum buffered responses per client. Overflow closes that client. Default: 256.

## References

### default

Renames and re-exports [TDLibAddon](#tdlibaddon)
