[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / encryptedPassportElement$Input

# Type Alias: encryptedPassportElement$Input

> **encryptedPassportElement$Input**: `object`

Version of [encryptedPassportElement](encryptedPassportElement.md) for method parameters.

Contains information about an encrypted Telegram Passport element; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"encryptedPassportElement"`

### data?

> `readonly` `optional` **data**: [`bytes$Input`](bytes$Input.md)

Encrypted JSON-encoded data about the user

### files?

> `readonly` `optional` **files**: [`vector$Input`](vector$Input.md)\<[`datedFile$Input`](datedFile$Input.md)\>

List of attached files

### front\_side?

> `readonly` `optional` **front\_side**: [`datedFile$Input`](datedFile$Input.md)

The front side of an identity document

### hash?

> `readonly` `optional` **hash**: `string`

Hash of the entire element

### reverse\_side?

> `readonly` `optional` **reverse\_side**: [`datedFile$Input`](datedFile$Input.md) \| `null`

The reverse side of an identity document; may be null

### selfie?

> `readonly` `optional` **selfie**: [`datedFile$Input`](datedFile$Input.md) \| `null`

Selfie with the document; may be null

### translation?

> `readonly` `optional` **translation**: [`vector$Input`](vector$Input.md)\<[`datedFile$Input`](datedFile$Input.md)\>

List of files containing a certified English translation of the document

### type?

> `readonly` `optional` **type**: [`PassportElementType$Input`](PassportElementType$Input.md)

Type of Telegram Passport element

### value?

> `readonly` `optional` **value**: `string`

Unencrypted data, phone number or email address

## Defined in

dist/generated/types.d.ts:26202
