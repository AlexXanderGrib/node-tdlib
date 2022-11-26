[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / TDLib

# Interface: TDLib

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).TDLib

## Implemented by

- [`TDLibAddon`](../classes/addon.TDLibAddon.md)

## Table of contents

### Properties

- [name](index._internal_.TDLib.md#name)

### Methods

- [create](index._internal_.TDLib.md#create)
- [destroy](index._internal_.TDLib.md#destroy)
- [execute](index._internal_.TDLib.md#execute)
- [receive](index._internal_.TDLib.md#receive)
- [send](index._internal_.TDLib.md#send)
- [setLogFatalErrorCallback](index._internal_.TDLib.md#setlogfatalerrorcallback)

## Properties

### name

• `Readonly` **name**: `string`

#### Defined in

dist/cjs/shared/client.d.ts:4

## Methods

### create

▸ **create**(): typeof [`TDLibClient`](../modules/index._internal_.md#tdlibclient)

#### Returns

typeof [`TDLibClient`](../modules/index._internal_.md#tdlibclient)

#### Defined in

dist/cjs/shared/client.d.ts:5

___

### destroy

▸ **destroy**(`client`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | typeof [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |

#### Returns

`void`

#### Defined in

dist/cjs/shared/client.d.ts:6

___

### execute

▸ **execute**(`client`, `json`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | ``null`` \| typeof [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |
| `json` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

dist/cjs/shared/client.d.ts:7

___

### receive

▸ **receive**(`client`, `timeout`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | typeof [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |
| `timeout` | `number` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

dist/cjs/shared/client.d.ts:8

___

### send

▸ **send**(`client`, `json`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | typeof [`TDLibClient`](../modules/index._internal_.md#tdlibclient) |
| `json` | `string` |

#### Returns

`void`

#### Defined in

dist/cjs/shared/client.d.ts:9

___

### setLogFatalErrorCallback

▸ **setLogFatalErrorCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`errorMessage`: `string`) => `void` |

#### Returns

`void`

#### Defined in

dist/cjs/shared/client.d.ts:10
