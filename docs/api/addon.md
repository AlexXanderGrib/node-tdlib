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

[addon/addon.ts:131](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L131)

#### Properties

##### \_addon

> `private` `readonly` **\_addon**: `Addon`

###### Defined in

[addon/addon.ts:131](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L131)

##### \_clients

> `private` `readonly` **\_clients**: `WeakMap`\<`TDLibClient`, `ClientMeta`\>

###### Defined in

[addon/addon.ts:134](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L134)

##### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

###### Implementation of

`TDLib._isTDLib`

###### Defined in

[addon/addon.ts:133](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L133)

##### \_queue

> `private` `readonly` **\_queue**: `ReceiveQueueEntry`[] = `[]`

###### Defined in

[addon/addon.ts:203](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L203)

##### \_thread

> `private` **\_thread**: `undefined` \| `Promise`\<`void`\>

###### Defined in

[addon/addon.ts:204](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L204)

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

[addon/addon.ts:142](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L142)

#### Methods

##### \_getMeta()

> `private` **\_getMeta**(`client`): `ClientMeta`

###### Parameters

• **client**: `TDLibClient`

###### Returns

`ClientMeta`

###### Defined in

[addon/addon.ts:159](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L159)

##### \_receive()

> `private` **\_receive**(): `Promise`\<`void`\>

###### Returns

`Promise`\<`void`\>

###### Defined in

[addon/addon.ts:206](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L206)

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

[addon/addon.ts:152](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L152)

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

[addon/addon.ts:176](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L176)

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

[addon/addon.ts:199](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L199)

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

[addon/addon.ts:224](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L224)

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

[addon/addon.ts:258](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L258)

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

[addon/addon.ts:273](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L273)

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

[addon/addon.ts:118](https://github.com/AlexXanderGrib/node-tdlib/blob/65543aa7cd818ab0d753d5d5050a5b1564b1ec6f/src/addon/addon.ts#L118)
