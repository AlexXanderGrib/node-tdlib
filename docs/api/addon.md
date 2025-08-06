[**TDLib Native**](README.md)

***

[TDLib Native](modules.md) / addon

# addon

## Classes

### TDLibAddon

Defined in: [addon/addon.ts:85](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L85)

#### Export

TDLibAddon

#### Implements

#### Implements

- `TDLib`

#### Constructors

##### Constructor

> `private` **new TDLibAddon**(`_addon`): [`TDLibAddon`](#tdlibaddon)

Defined in: [addon/addon.ts:108](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L108)

Creates an instance of TDLibAddon.

###### Parameters

###### \_addon

[`NativeExports`](#nativeexports)

###### Returns

[`TDLibAddon`](#tdlibaddon)

###### Memberof

TDLibAddon

#### Properties

##### \_addon

> `private` `readonly` **\_addon**: [`NativeExports`](#nativeexports)

Defined in: [addon/addon.ts:108](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L108)

##### \_clients

> `private` `readonly` **\_clients**: `WeakMap`\<`TDLibClient`, `ClientMeta`\>

Defined in: [addon/addon.ts:111](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L111)

##### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

Defined in: [addon/addon.ts:110](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L110)

###### Implementation of

`TDLib._isTDLib`

##### \_queue

> `private` `readonly` **\_queue**: `ReceiveQueueEntry`[] = `[]`

Defined in: [addon/addon.ts:180](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L180)

##### \_thread

> `private` **\_thread**: `undefined` \| `Promise`\<`void`\>

Defined in: [addon/addon.ts:181](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L181)

#### Accessors

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [addon/addon.ts:119](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L119)

###### Memberof

TDLibAddon

###### Returns

`string`

###### Implementation of

`TDLib.name`

#### Methods

##### \_getMeta()

> `private` **\_getMeta**(`client`): `ClientMeta`

Defined in: [addon/addon.ts:136](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L136)

###### Parameters

###### client

`TDLibClient`

###### Returns

`ClientMeta`

##### \_receive()

> `private` **\_receive**(): `Promise`\<`void`\>

Defined in: [addon/addon.ts:183](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L183)

###### Returns

`Promise`\<`void`\>

##### create()

> **create**(`timeout`): `TDLibClient`

Defined in: [addon/addon.ts:129](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L129)

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

Defined in: [addon/addon.ts:153](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L153)

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

Defined in: [addon/addon.ts:176](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L176)

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

Defined in: [addon/addon.ts:201](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L201)

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

Defined in: [addon/addon.ts:235](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L235)

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

Defined in: [addon/addon.ts:250](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L250)

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

> `static` **create**(`tdlibPath?`, `addonPath?`): `Promise`\<[`TDLibAddon`](#tdlibaddon)\>

Defined in: [addon/addon.ts:95](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/addon.ts#L95)

###### Parameters

###### tdlibPath?

`string`

Resolves to prebuild TDLib for your platform

###### addonPath?

`string`

###### Returns

`Promise`\<[`TDLibAddon`](#tdlibaddon)\>

###### Static

###### Memberof

TDLibAddon

## Type Aliases

### NativeExports

> **NativeExports** = `object`

Defined in: [addon/native-exports.ts:3](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L3)

#### Methods

##### load\_tdjson()

> **load\_tdjson**(`path`): `void`

Defined in: [addon/native-exports.ts:20](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L20)

###### Parameters

###### path

`string`

###### Returns

`void`

##### td\_create\_client\_id()

> **td\_create\_client\_id**(): `TDLibClient`

Defined in: [addon/native-exports.ts:13](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L13)

###### Returns

`TDLibClient`

##### td\_execute()

> **td\_execute**(`json`): `string`

Defined in: [addon/native-exports.ts:16](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L16)

###### Parameters

###### json

`string`

###### Returns

`string`

##### td\_json\_client\_create()

> **td\_json\_client\_create**(`timeoutSec`): `TDLibClient`

Defined in: [addon/native-exports.ts:4](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L4)

###### Parameters

###### timeoutSec

`number`

###### Returns

`TDLibClient`

##### td\_json\_client\_destroy()

> **td\_json\_client\_destroy**(`client`): `void`

Defined in: [addon/native-exports.ts:8](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L8)

###### Parameters

###### client

`TDLibClient`

###### Returns

`void`

##### td\_json\_client\_execute()

> **td\_json\_client\_execute**(`client`, `json`): `null` \| `string`

Defined in: [addon/native-exports.ts:7](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L7)

###### Parameters

###### client

`null` | `TDLibClient`

###### json

`string`

###### Returns

`null` \| `string`

##### td\_json\_client\_receive()

> **td\_json\_client\_receive**(`client`): `Promise`\<`null` \| `string`\>

Defined in: [addon/native-exports.ts:6](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L6)

###### Parameters

###### client

`TDLibClient`

###### Returns

`Promise`\<`null` \| `string`\>

##### td\_json\_client\_send()

> **td\_json\_client\_send**(`client`, `json`): `void`

Defined in: [addon/native-exports.ts:5](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L5)

###### Parameters

###### client

`TDLibClient`

###### json

`string`

###### Returns

`void`

##### td\_receive()

> **td\_receive**(): `Promise`\<`null` \| `string`\>

Defined in: [addon/native-exports.ts:15](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L15)

###### Returns

`Promise`\<`null` \| `string`\>

##### td\_send()

> **td\_send**(`client`, `json`): `void`

Defined in: [addon/native-exports.ts:14](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L14)

###### Parameters

###### client

`TDLibClient`

###### json

`string`

###### Returns

`void`

##### td\_set\_log\_message\_callback()

> **td\_set\_log\_message\_callback**(`level`, `callback`): `void`

Defined in: [addon/native-exports.ts:9](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L9)

###### Parameters

###### level

`number`

###### callback

`null` | (`errorMessage`) => `void`

###### Returns

`void`

##### tdn\_init()

> **tdn\_init**(`timeoutSec`): `void`

Defined in: [addon/native-exports.ts:17](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L17)

###### Parameters

###### timeoutSec

`number`

###### Returns

`void`

##### tdn\_ref()

> **tdn\_ref**(): `void`

Defined in: [addon/native-exports.ts:18](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L18)

###### Returns

`void`

##### tdn\_unref()

> **tdn\_unref**(): `void`

Defined in: [addon/native-exports.ts:19](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/addon/native-exports.ts#L19)

###### Returns

`void`

## References

### default

Renames and re-exports [TDLibAddon](#tdlibaddon)
