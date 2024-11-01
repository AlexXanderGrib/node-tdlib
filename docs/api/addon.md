[**TDLib Native**](README.md) • **Docs**

***

[TDLib Native](modules.md) / addon

# addon

## References

### default

Renames and re-exports [TDLibAddon](addon.md#tdlibaddon)

## Classes

### TDLibAddon

#### Export

TDLibAddon

#### Implements

#### Implements

- `TDLib`

#### Constructors

##### new TDLibAddon()

> `private` **new TDLibAddon**(`_addon`): [`TDLibAddon`](addon.md#tdlibaddon)

Creates an instance of TDLibAddon.

###### Parameters

• **\_addon**: `Addon`

###### Returns

[`TDLibAddon`](addon.md#tdlibaddon)

###### Memberof

TDLibAddon

###### Defined in

[addon/addon.ts:127](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L127)

#### Properties

##### \_addon

> `private` `readonly` **\_addon**: `Addon`

###### Defined in

[addon/addon.ts:127](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L127)

##### \_clients

> `private` `readonly` **\_clients**: `WeakMap`\<`TDLibClient`, `ClientMeta`\>

###### Defined in

[addon/addon.ts:130](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L130)

##### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

###### Implementation of

`TDLib._isTDLib`

###### Defined in

[addon/addon.ts:129](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L129)

##### \_queue

> `private` `readonly` **\_queue**: `ReceiveQueueEntry`[] = `[]`

###### Defined in

[addon/addon.ts:199](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L199)

##### \_thread

> `private` **\_thread**: `undefined` \| `Promise`\<`void`\>

###### Defined in

[addon/addon.ts:200](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L200)

#### Accessors

##### name

> `get` **name**(): `string`

###### Memberof

TDLibAddon

###### Returns

`string`

###### Implementation of

`TDLib.name`

###### Defined in

[addon/addon.ts:138](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L138)

#### Methods

##### \_getMeta()

> `private` **\_getMeta**(`client`): `ClientMeta`

###### Parameters

• **client**: `TDLibClient`

###### Returns

`ClientMeta`

###### Defined in

[addon/addon.ts:155](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L155)

##### \_receive()

> `private` **\_receive**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Defined in

[addon/addon.ts:202](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L202)

##### create()

> **create**(`timeout`): `TDLibClient`

###### Parameters

• **timeout**: `number`

###### Returns

`TDLibClient`

{TDLibClient}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.create`

###### Defined in

[addon/addon.ts:148](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L148)

##### destroy()

> **destroy**(`client`): `Promise`\<`void`\>

###### Parameters

• **client**: `TDLibClient`

###### Returns

`Promise`\<`void`\>

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.destroy`

###### Defined in

[addon/addon.ts:172](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L172)

##### execute()

> **execute**(`client`, `json`): `null` \| `string`

###### Parameters

• **client**: `null` \| `TDLibClient`

• **json**: `string`

###### Returns

`null` \| `string`

{(string | null)}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.execute`

###### Defined in

[addon/addon.ts:195](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L195)

##### receive()

> **receive**(`client`): `Promise`\<`null` \| `string`\>

###### Parameters

• **client**: `TDLibClient`

###### Returns

`Promise`\<`null` \| `string`\>

{(Promise<string | null>)}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.receive`

###### Defined in

[addon/addon.ts:220](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L220)

##### send()

> **send**(`client`, `json`): `void`

###### Parameters

• **client**: `TDLibClient`

• **json**: `string`

###### Returns

`void`

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.send`

###### Defined in

[addon/addon.ts:254](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L254)

##### setLogMessageCallback()

> **setLogMessageCallback**(`level`, `callback`): `void`

###### Parameters

• **level**: `number`

• **callback**: `null` \| (`errorMessage`) => `void`

###### Returns

`void`

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.setLogMessageCallback`

###### Defined in

[addon/addon.ts:269](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L269)

##### create()

> `static` **create**(`tdlibPath`?, `addonPath`?): `Promise`\<[`TDLibAddon`](addon.md#tdlibaddon)\>

###### Parameters

• **tdlibPath?**: `string`

Resolves to prebuild TDLib for your platform

• **addonPath?**: `string`

###### Returns

`Promise`\<[`TDLibAddon`](addon.md#tdlibaddon)\>

###### Static

###### Memberof

TDLibAddon

###### Defined in

[addon/addon.ts:114](https://github.com/AlexXanderGrib/node-tdlib/blob/76b011dde3ab6fee7c80638743cf47548247799a/src/addon/addon.ts#L114)
