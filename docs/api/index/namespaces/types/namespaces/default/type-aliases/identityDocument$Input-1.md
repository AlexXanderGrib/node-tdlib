[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / identityDocument$Input

# Type Alias: identityDocument$Input

> **identityDocument$Input**: `object`

Version of [identityDocument](identityDocument-1.md) for method parameters.

An identity document

## Type declaration

### \_

> `readonly` **\_**: `"identityDocument"`

### expiration\_date?

> `readonly` `optional` **expiration\_date**: [`date$Input`](date$Input-1.md) \| `null`

Document expiration date; may be null if not applicable

### front\_side?

> `readonly` `optional` **front\_side**: [`datedFile$Input`](datedFile$Input-1.md)

Front side of the document

### number?

> `readonly` `optional` **number**: `string`

Document number; 1-24 characters

### reverse\_side?

> `readonly` `optional` **reverse\_side**: [`datedFile$Input`](datedFile$Input-1.md) \| `null`

Reverse side of the document; only for driver license and identity card; may be null

### selfie?

> `readonly` `optional` **selfie**: [`datedFile$Input`](datedFile$Input-1.md) \| `null`

Selfie with the document; may be null

### translation?

> `readonly` `optional` **translation**: [`vector$Input`](vector$Input.md)\<[`datedFile$Input`](datedFile$Input-1.md)\>

List of files containing a certified English translation of the document

## Defined in

dist/generated/types.d.ts:24163
