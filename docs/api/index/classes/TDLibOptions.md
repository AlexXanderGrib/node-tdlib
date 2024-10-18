[**TDLib**](../../README.md) • **Docs**

***

[TDLib](../../modules.md) / [index](../README.md) / TDLibOptions

# Class: TDLibOptions

## See

https://core.telegram.org/tdlib/options

## Export

TDLibOptions

## Constructors

### new TDLibOptions()

> **new TDLibOptions**(`api`): [`TDLibOptions`](TDLibOptions.md)

Creates an instance of TDLibOptions.

#### Parameters

• **api**: [`$AsyncApi`](../namespaces/types/namespaces/default/classes/$AsyncApi.md)

#### Returns

[`TDLibOptions`](TDLibOptions.md)

#### Memberof

TDLibOptions

#### Defined in

dist/options.d.ts:152

## Properties

### \_api

> `private` `readonly` **\_api**: `any`

#### Defined in

dist/options.d.ts:146

## Methods

### assign()

> **assign**(`values`): `Promise`\<`void`\>

#### Parameters

• **values**: `OptionsWritable`

#### Returns

`Promise`\<`void`\>

#### Memberof

TDLibOptions

#### Defined in

dist/options.d.ts:187

***

### delete()

> **delete**(`key`): `Promise`\<`void`\>

#### Parameters

• **key**: `Keys`

#### Returns

`Promise`\<`void`\>

#### Memberof

TDLibOptions

#### Defined in

dist/options.d.ts:179

***

### get()

> **get**\<`T`\>(`key`): `Promise`\<`OptionsReadable`\[`T`\]\>

#### Type Parameters

• **T** *extends* `Keys`

#### Parameters

• **key**: `T`

#### Returns

`Promise`\<`OptionsReadable`\[`T`\]\>

{Promise<TelegramOptionsExtended[T]>}

#### Memberof

TDLibOptions

#### Defined in

dist/options.d.ts:161

***

### set()

> **set**\<`T`\>(`key`, `value`): `Promise`\<`void`\>

#### Type Parameters

• **T** *extends* `WritableKeys`

#### Parameters

• **key**: `T`

• **value**: `OptionsWritable`\[`T`\]

#### Returns

`Promise`\<`void`\>

{Promise<void>}

#### Memberof

TDLibOptions

#### Defined in

dist/options.d.ts:171

***

### ~~for()~~

> `static` **for**(`api`): [`TDLibOptions`](TDLibOptions.md)

#### Parameters

• **api**: [`$AsyncApi`](../namespaces/types/namespaces/default/classes/$AsyncApi.md)

#### Returns

[`TDLibOptions`](TDLibOptions.md)

{TDLibOptions}

#### Static

#### Memberof

TDLibOptions

#### Deprecated

Removed instance caching, use `new TDLibOptions()` instead

#### Defined in

dist/options.d.ts:145
