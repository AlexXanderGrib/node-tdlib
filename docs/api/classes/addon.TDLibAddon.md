[TDLib](../README.md) / [Modules](../modules.md) / [addon](../modules/addon.md) / TDLibAddon

# Class: TDLibAddon

[addon](../modules/addon.md).TDLibAddon

**`Export`**

**`Implements`**

## Implements

- [`TDLib`](../interfaces/index._internal_.TDLib.md)

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

• `Private` **new TDLibAddon**()

Creates an instance of TDLibAddon.

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

[TDLib](../interfaces/index._internal_.TDLib.md).[_isTDLib](../interfaces/index._internal_.TDLib.md#_istdlib)

#### Defined in

dist/addon/addon.d.ts:36

## Accessors

### name

• `get` **name**(): `string`

**`Memberof`**

TDLibAddon

#### Returns

`string`

#### Implementation of

[TDLib](../interfaces/index._internal_.TDLib.md).[name](../interfaces/index._internal_.TDLib.md#name)

#### Defined in

dist/addon/addon.d.ts:43

## Methods

### create

▸ **create**(): [`TDLibClient`](../modules/index._internal_.md#tdlibclient)

**`Memberof`**

TDLibAddon

#### Returns

[`TDLibClient`](../modules/index._internal_.md#tdlibclient)

{TDLibClient}

#### Implementation of

[TDLib](../interfaces/index._internal_.TDLib.md).[create](../interfaces/index._internal_.TDLib.md#create)

#### Defined in

dist/addon/addon.d.ts:50

___

### destroy

▸ **destroy**(`client`): `void`

**`Memberof`**

TDLibAddon

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |

#### Returns

`void`

#### Implementation of

[TDLib](../interfaces/index._internal_.TDLib.md).[destroy](../interfaces/index._internal_.TDLib.md#destroy)

#### Defined in

dist/addon/addon.d.ts:57

___

### execute

▸ **execute**(`client`, `json`): ``null`` \| `string`

**`Memberof`**

TDLibAddon

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | ``null`` \| [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |
| `json` | `string` |

#### Returns

``null`` \| `string`

{(string | null)}

#### Implementation of

[TDLib](../interfaces/index._internal_.TDLib.md).[execute](../interfaces/index._internal_.TDLib.md#execute)

#### Defined in

dist/addon/addon.d.ts:66

___

### receive

▸ **receive**(`client`, `timeout`): `Promise`<``null`` \| `string`\>

**`Memberof`**

TDLibAddon

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |
| `timeout` | `number` |

#### Returns

`Promise`<``null`` \| `string`\>

{(Promise<string | null>)}

#### Implementation of

[TDLib](../interfaces/index._internal_.TDLib.md).[receive](../interfaces/index._internal_.TDLib.md#receive)

#### Defined in

dist/addon/addon.d.ts:75

___

### send

▸ **send**(`client`, `json`): `void`

**`Memberof`**

TDLibAddon

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |
| `json` | `string` |

#### Returns

`void`

#### Implementation of

[TDLib](../interfaces/index._internal_.TDLib.md).[send](../interfaces/index._internal_.TDLib.md#send)

#### Defined in

dist/addon/addon.d.ts:83

___

### setLogFatalErrorCallback

▸ **setLogFatalErrorCallback**(`callback`): `void`

**`Memberof`**

TDLibAddon

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`errorMessage`: `string`) => `void` |

#### Returns

`void`

#### Implementation of

[TDLib](../interfaces/index._internal_.TDLib.md).[setLogFatalErrorCallback](../interfaces/index._internal_.TDLib.md#setlogfatalerrorcallback)

#### Defined in

dist/addon/addon.d.ts:90

___

### create

▸ `Static` **create**(`tdlibPath?`, `addonPath?`): `Promise`<[`TDLibAddon`](addon.TDLibAddon.md)\>

**`Static`**

**`Memberof`**

TDLibAddon

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tdlibPath?` | `string` | Resolves to prebuild TDLib for your platform |
| `addonPath?` | `string` |  |

#### Returns

`Promise`<[`TDLibAddon`](addon.TDLibAddon.md)\>

#### Defined in

dist/addon/addon.d.ts:29
