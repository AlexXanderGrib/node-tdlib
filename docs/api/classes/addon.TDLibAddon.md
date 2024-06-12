[TDLib](../README.md) / [Modules](../modules.md) / [addon](../modules/addon.md) / TDLibAddon

# Class: TDLibAddon

[addon](../modules/addon.md).TDLibAddon

**`Export`**

TDLibAddon

**`Implements`**

## Implements

- `TDLib`

## Table of contents

### Constructors

- [constructor](addon.TDLibAddon.md#constructor)

### Properties

- [\_addon](addon.TDLibAddon.md#_addon)
- [\_isTDLib](addon.TDLibAddon.md#_istdlib)

### Accessors

- [name](addon.TDLibAddon.md#name)

### Methods

- [create](addon.TDLibAddon.md#create)
- [destroy](addon.TDLibAddon.md#destroy)
- [execute](addon.TDLibAddon.md#execute)
- [receive](addon.TDLibAddon.md#receive)
- [send](addon.TDLibAddon.md#send)
- [setLogFatalErrorCallback](addon.TDLibAddon.md#setlogfatalerrorcallback)
- [create](addon.TDLibAddon.md#create-1)

## Constructors

### constructor

• **new TDLibAddon**(): [`TDLibAddon`](addon.TDLibAddon.md)

Creates an instance of TDLibAddon.

#### Returns

[`TDLibAddon`](addon.TDLibAddon.md)

**`Memberof`**

TDLibAddon

#### Defined in

dist/addon/addon.d.ts:35

## Properties

### \_addon

• `Private` `Readonly` **\_addon**: `any`

#### Defined in

dist/addon/addon.d.ts:19

___

### \_isTDLib

• `Readonly` **\_isTDLib**: ``true``

#### Implementation of

TDLib.\_isTDLib

#### Defined in

dist/addon/addon.d.ts:36

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

**`Memberof`**

TDLibAddon

#### Implementation of

TDLib.name

#### Defined in

dist/addon/addon.d.ts:43

## Methods

### create

▸ **create**(): `TDLibClient`

#### Returns

`TDLibClient`

{TDLibClient}

**`Memberof`**

TDLibAddon

#### Implementation of

TDLib.create

#### Defined in

dist/addon/addon.d.ts:50

___

### destroy

▸ **destroy**(`client`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `TDLibClient` |

#### Returns

`void`

**`Memberof`**

TDLibAddon

#### Implementation of

TDLib.destroy

#### Defined in

dist/addon/addon.d.ts:57

___

### execute

▸ **execute**(`client`, `json`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | ``null`` \| `TDLibClient` |
| `json` | `string` |

#### Returns

``null`` \| `string`

{(string | null)}

**`Memberof`**

TDLibAddon

#### Implementation of

TDLib.execute

#### Defined in

dist/addon/addon.d.ts:66

___

### receive

▸ **receive**(`client`, `timeout`): `Promise`\<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `TDLibClient` |
| `timeout` | `number` |

#### Returns

`Promise`\<``null`` \| `string`\>

{(Promise<string | null>)}

**`Memberof`**

TDLibAddon

#### Implementation of

TDLib.receive

#### Defined in

dist/addon/addon.d.ts:75

___

### send

▸ **send**(`client`, `json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `TDLibClient` |
| `json` | `string` |

#### Returns

`void`

**`Memberof`**

TDLibAddon

#### Implementation of

TDLib.send

#### Defined in

dist/addon/addon.d.ts:83

___

### setLogFatalErrorCallback

▸ **setLogFatalErrorCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`errorMessage`: `string`) => `void` |

#### Returns

`void`

**`Memberof`**

TDLibAddon

#### Implementation of

TDLib.setLogFatalErrorCallback

#### Defined in

dist/addon/addon.d.ts:90

___

### create

▸ **create**(`tdlibPath?`, `addonPath?`): `Promise`\<[`TDLibAddon`](addon.TDLibAddon.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tdlibPath?` | `string` | Resolves to prebuild TDLib for your platform |
| `addonPath?` | `string` |  |

#### Returns

`Promise`\<[`TDLibAddon`](addon.TDLibAddon.md)\>

**`Static`**

**`Memberof`**

TDLibAddon

#### Defined in

dist/addon/addon.d.ts:29
