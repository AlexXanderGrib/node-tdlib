[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputIdentityDocument$Input

# Type Alias: inputIdentityDocument$Input

> **inputIdentityDocument$Input**: `object`

Version of [inputIdentityDocument](inputIdentityDocument-1.md) for method parameters.

An identity document to be saved to Telegram Passport

## Type declaration

### \_

> `readonly` **\_**: `"inputIdentityDocument"`

### expiration\_date?

> `readonly` `optional` **expiration\_date**: [`date$Input`](date$Input-1.md) \| `null`

Document expiration date; pass null if not applicable

### front\_side?

> `readonly` `optional` **front\_side**: [`InputFile$Input`](InputFile$Input.md)

Front side of the document

### number?

> `readonly` `optional` **number**: `string`

Document number; 1-24 characters

### reverse\_side?

> `readonly` `optional` **reverse\_side**: [`InputFile$Input`](InputFile$Input.md) \| `null`

Reverse side of the document; only for driver license and identity card; pass null otherwise

### selfie?

> `readonly` `optional` **selfie**: [`InputFile$Input`](InputFile$Input.md) \| `null`

Selfie with the document; pass null if unavailable

### translation?

> `readonly` `optional` **translation**: [`vector$Input`](vector$Input.md)\<[`InputFile$Input`](InputFile$Input.md)\>

List of files containing a certified English translation of the document

## Defined in

dist/generated/types.d.ts:24237
