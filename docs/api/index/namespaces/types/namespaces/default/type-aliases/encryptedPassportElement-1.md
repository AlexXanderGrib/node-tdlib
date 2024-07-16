[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / encryptedPassportElement

# Type Alias: encryptedPassportElement

> **encryptedPassportElement**: `object`

Contains information about an encrypted Telegram Passport element; for bots only

## Type declaration

### \_

> **\_**: `"encryptedPassportElement"`

### data

> **data**: [`bytes`](bytes-1.md)

Encrypted JSON-encoded data about the user

### files

> **files**: [`vector`](vector.md)\<[`datedFile`](datedFile-1.md)\>

List of attached files

### front\_side

> **front\_side**: [`datedFile`](datedFile-1.md)

The front side of an identity document

### hash

> **hash**: `string`

Hash of the entire element

### reverse\_side

> **reverse\_side**: [`datedFile`](datedFile-1.md) \| `null`

The reverse side of an identity document; may be null

### selfie

> **selfie**: [`datedFile`](datedFile-1.md) \| `null`

Selfie with the document; may be null

### translation

> **translation**: [`vector`](vector.md)\<[`datedFile`](datedFile-1.md)\>

List of files containing a certified English translation of the document

### type

> **type**: [`PassportElementType`](PassportElementType.md)

Type of Telegram Passport element

### value

> **value**: `string`

Unencrypted data, phone number or email address

## Defined in

dist/generated/types.d.ts:25389
