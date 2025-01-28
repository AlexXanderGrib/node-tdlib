[**TDLib Native**](README.md)

***

[TDLib Native](modules.md) / addon

# addon

## Classes

### TDLibAddon

Defined in: [addon/addon.ts:108](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L108)

#### Export

TDLibAddon

#### Implements

#### Implements

- `TDLib`

#### Constructors

##### new TDLibAddon()

> `private` **new TDLibAddon**(`_addon`): [`TDLibAddon`](addon.md#tdlibaddon)

Defined in: [addon/addon.ts:131](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L131)

Creates an instance of TDLibAddon.

###### Parameters

###### \_addon

`Addon`

###### Returns

[`TDLibAddon`](addon.md#tdlibaddon)

###### Memberof

TDLibAddon

#### Properties

##### \_addon

> `private` `readonly` **\_addon**: `Addon`

Defined in: [addon/addon.ts:131](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L131)

##### \_clients

> `private` `readonly` **\_clients**: `WeakMap`\<`TDLibClient`, `ClientMeta`\>

Defined in: [addon/addon.ts:134](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L134)

##### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

Defined in: [addon/addon.ts:133](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L133)

###### Implementation of

`TDLib._isTDLib`

##### \_queue

> `private` `readonly` **\_queue**: `ReceiveQueueEntry`[] = `[]`

Defined in: [addon/addon.ts:203](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L203)

##### \_thread

> `private` **\_thread**: `undefined` \| `Promise`\<`void`\>

Defined in: [addon/addon.ts:204](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L204)

#### Accessors

##### name

###### Get Signature

> **get** **name**(): `string`

Defined in: [addon/addon.ts:142](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L142)

###### Memberof

TDLibAddon

###### Returns

`string`

###### Implementation of

`TDLib.name`

#### Methods

##### \_getMeta()

> `private` **\_getMeta**(`client`): `ClientMeta`

Defined in: [addon/addon.ts:159](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L159)

###### Parameters

###### client

`TDLibClient`

###### Returns

`ClientMeta`

##### \_receive()

> `private` **\_receive**(): `Promise`\<`void`\>

Defined in: [addon/addon.ts:206](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L206)

###### Returns

`Promise`\<`void`\>

##### create()

> **create**(`timeout`): `TDLibClient`

Defined in: [addon/addon.ts:152](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L152)

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

Defined in: [addon/addon.ts:176](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L176)

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

Defined in: [addon/addon.ts:199](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L199)

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

Defined in: [addon/addon.ts:224](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L224)

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

Defined in: [addon/addon.ts:258](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L258)

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

Defined in: [addon/addon.ts:273](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L273)

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

> `static` **create**(`tdlibPath`?, `addonPath`?): `Promise`\<[`TDLibAddon`](addon.md#tdlibaddon)\>

Defined in: [addon/addon.ts:118](https://github.com/AlexXanderGrib/node-tdlib/blob/17c1bca716f6d31d603b4bce8ec8562a13018f91/src/addon/addon.ts#L118)

###### Parameters

###### tdlibPath?

`string`

Resolves to prebuild TDLib for your platform

###### addonPath?

`string`

###### Returns

`Promise`\<[`TDLibAddon`](addon.md#tdlibaddon)\>

###### Static

###### Memberof

TDLibAddon

## References

### default

Renames and re-exports [TDLibAddon](addon.md#tdlibaddon)
