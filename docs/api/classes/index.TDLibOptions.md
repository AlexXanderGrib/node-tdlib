[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / TDLibOptions

# Class: TDLibOptions

[index](../modules/index.md).TDLibOptions

**`See`**

https://core.telegram.org/tdlib/options

**`Export`**

TDLibOptions

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

• **new TDLibOptions**(): [`TDLibOptions`](index.TDLibOptions.md)

Creates an instance of TDLibOptions.

#### Returns

[`TDLibOptions`](index.TDLibOptions.md)

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

▸ **assign**(`values`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `OptionsWritable` |

#### Returns

`Promise`\<`void`\>

**`Memberof`**

TDLibOptions

#### Defined in

dist/options.d.ts:187

___

### delete

▸ **delete**(`key`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `Keys` |

#### Returns

`Promise`\<`void`\>

**`Memberof`**

TDLibOptions

#### Defined in

dist/options.d.ts:180

___

### get

▸ **get**\<`T`\>(`key`): `Promise`\<`OptionsReadable`[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Keys` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |

#### Returns

`Promise`\<`OptionsReadable`[`T`]\>

{Promise<TelegramOptionsExtended[T]>}

**`Memberof`**

TDLibOptions

#### Defined in

dist/options.d.ts:163

___

### set

▸ **set**\<`T`\>(`key`, `value`): `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableKeys` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |
| `value` | `OptionsWritable`[`T`] |

#### Returns

`Promise`\<`void`\>

{Promise<void>}

**`Memberof`**

TDLibOptions

#### Defined in

dist/options.d.ts:173

___

### for

▸ **for**(`api`): [`TDLibOptions`](index.TDLibOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`$AsyncApi`](index.types.default._AsyncApi.md) |

#### Returns

[`TDLibOptions`](index.TDLibOptions.md)

{TDLibOptions}

**`Static`**

**`Memberof`**

TDLibOptions

#### Defined in

dist/options.d.ts:147
