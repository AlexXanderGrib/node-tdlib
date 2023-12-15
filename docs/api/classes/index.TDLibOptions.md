[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / TDLibOptions

# Class: TDLibOptions

[index](../modules/index.md).TDLibOptions

**`See`**

https://core.telegram.org/tdlib/options

**`Export`**

## Table of contents

### Constructors

- [constructor](index.TDLibOptions.md#constructor)

### Properties

- [\_api](index.TDLibOptions.md#_api)
- [\_instanceCache](index.TDLibOptions.md#_instancecache)

### Methods

- [assign](index.TDLibOptions.md#assign)
- [delete](index.TDLibOptions.md#delete)
- [get](index.TDLibOptions.md#get)
- [set](index.TDLibOptions.md#set)
- [for](index.TDLibOptions.md#for)

## Constructors

### constructor

• `Private` **new TDLibOptions**()

Creates an instance of TDLibOptions.

**`Memberof`**

TDLibOptions

#### Defined in

dist/options.d.ts:154

## Properties

### \_api

• `Private` `Readonly` **\_api**: `any`

#### Defined in

dist/options.d.ts:148

___

### \_instanceCache

▪ `Static` `Private` `Readonly` **\_instanceCache**: `any`

#### Defined in

dist/options.d.ts:138

## Methods

### assign

▸ **assign**(`values`): `Promise`<`void`\>

**`Memberof`**

TDLibOptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`OptionsWritable`](../modules/index._internal_.md#optionswritable) |

#### Returns

`Promise`<`void`\>

#### Defined in

dist/options.d.ts:187

___

### delete

▸ **delete**(`key`): `Promise`<`void`\>

**`Memberof`**

TDLibOptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Keys`](../modules/index._internal_.md#keys) |

#### Returns

`Promise`<`void`\>

#### Defined in

dist/options.d.ts:180

___

### get

▸ **get**<`T`\>(`key`): `Promise`<[`OptionsReadable`](../modules/index._internal_.md#optionsreadable)[`T`]\>

**`Memberof`**

TDLibOptions

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Keys`](../modules/index._internal_.md#keys) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |

#### Returns

`Promise`<[`OptionsReadable`](../modules/index._internal_.md#optionsreadable)[`T`]\>

{Promise<TelegramOptionsExtended[T]>}

#### Defined in

dist/options.d.ts:163

___

### set

▸ **set**<`T`\>(`key`, `value`): `Promise`<`void`\>

**`Memberof`**

TDLibOptions

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableKeys`](../modules/index._internal_.md#writablekeys) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |
| `value` | [`OptionsWritable`](../modules/index._internal_.md#optionswritable)[`T`] |

#### Returns

`Promise`<`void`\>

{Promise<void>}

#### Defined in

dist/options.d.ts:173

___

### for

▸ `Static` **for**(`api`): [`TDLibOptions`](index.TDLibOptions.md)

**`Static`**

**`Memberof`**

TDLibOptions

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`$AsyncApi`](index.types.default._AsyncApi.md) |

#### Returns

[`TDLibOptions`](index.TDLibOptions.md)

{TDLibOptions}

#### Defined in

dist/options.d.ts:147
