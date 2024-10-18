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

[addon/addon.ts:105](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L105)

#### Properties

##### \_addon

> `private` `readonly` **\_addon**: `Addon`

###### Defined in

[addon/addon.ts:105](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L105)

##### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

###### Implementation of

`TDLib._isTDLib`

###### Defined in

[addon/addon.ts:106](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L106)

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

[addon/addon.ts:114](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L114)

#### Methods

##### create()

> **create**(): `TDLibClient`

###### Returns

`TDLibClient`

{TDLibClient}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.create`

###### Defined in

[addon/addon.ts:124](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L124)

##### destroy()

> **destroy**(`client`): `void`

###### Parameters

• **client**: `TDLibClient`

###### Returns

`void`

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.destroy`

###### Defined in

[addon/addon.ts:135](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L135)

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

[addon/addon.ts:147](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L147)

##### receive()

> **receive**(`client`, `timeout`): `Promise`\<`null` \| `string`\>

###### Parameters

• **client**: `TDLibClient`

• **timeout**: `number`

###### Returns

`Promise`\<`null` \| `string`\>

{(Promise<string | null>)}

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.receive`

###### Defined in

[addon/addon.ts:159](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L159)

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

[addon/addon.ts:177](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L177)

##### setLogFatalErrorCallback()

> **setLogFatalErrorCallback**(`callback`): `void`

###### Parameters

• **callback**: `null` \| (`errorMessage`) => `void`

###### Returns

`void`

###### Memberof

TDLibAddon

###### Implementation of

`TDLib.setLogFatalErrorCallback`

###### Defined in

[addon/addon.ts:188](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L188)

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

[addon/addon.ts:92](https://github.com/AlexXanderGrib/node-tdlib/blob/dde3fa316c78cce4c52612c221106a72f9a4c4f2/src/addon/addon.ts#L92)
