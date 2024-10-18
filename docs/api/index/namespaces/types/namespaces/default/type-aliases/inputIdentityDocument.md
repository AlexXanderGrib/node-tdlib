[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputIdentityDocument

# Type Alias: inputIdentityDocument

> **inputIdentityDocument**: `object`

An identity document to be saved to Telegram Passport

## Type declaration

### \_

> **\_**: `"inputIdentityDocument"`

### expiration\_date

> **expiration\_date**: [`date`](date.md) \| `null`

Document expiration date; pass null if not applicable

### front\_side

> **front\_side**: [`InputFile`](InputFile.md)

Front side of the document

### number

> **number**: `string`

Document number; 1-24 characters

### reverse\_side

> **reverse\_side**: [`InputFile`](InputFile.md) \| `null`

Reverse side of the document; only for driver license and identity card; pass null otherwise

### selfie

> **selfie**: [`InputFile`](InputFile.md) \| `null`

Selfie with the document; pass null if unavailable

### translation

> **translation**: [`vector`](vector.md)\<[`InputFile`](InputFile.md)\>

List of files containing a certified English translation of the document

## Defined in

dist/generated/types.d.ts:24959
