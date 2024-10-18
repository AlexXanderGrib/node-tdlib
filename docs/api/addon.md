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

[addon/addon.ts:117](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L117)

#### Properties

##### \_addon

> `private` `readonly` **\_addon**: `Addon`

###### Defined in

[addon/addon.ts:117](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L117)

##### \_destroyed

> `private` **\_destroyed**: `boolean` = `false`

###### Defined in

[addon/addon.ts:110](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L110)

##### \_isTDLib

> `readonly` **\_isTDLib**: `true` = `true`

###### Implementation of

`TDLib._isTDLib`

###### Defined in

[addon/addon.ts:118](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L118)

##### \_receivePromise

> `private` **\_receivePromise**: `undefined` \| `Promise`\<`null` \| `string`\>

###### Defined in

[addon/addon.ts:164](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L164)

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

[addon/addon.ts:126](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L126)

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

[addon/addon.ts:136](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L136)

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

[addon/addon.ts:147](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L147)

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

[addon/addon.ts:160](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L160)

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

[addon/addon.ts:174](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L174)

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

[addon/addon.ts:199](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L199)

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

[addon/addon.ts:210](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L210)

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

[addon/addon.ts:102](https://github.com/AlexXanderGrib/node-tdlib/blob/859348a5415c3b5927e971eb043cc739aa681992/src/addon/addon.ts#L102)
