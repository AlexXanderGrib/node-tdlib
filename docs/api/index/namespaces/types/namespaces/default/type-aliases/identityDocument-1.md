[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / identityDocument

# Type Alias: identityDocument

> **identityDocument**: `object`

An identity document

## Type declaration

### \_

> **\_**: `"identityDocument"`

### expiration\_date

> **expiration\_date**: [`date`](date-1.md) \| `null`

Document expiration date; may be null if not applicable

### front\_side

> **front\_side**: [`datedFile`](datedFile-1.md)

Front side of the document

### number

> **number**: `string`

Document number; 1-24 characters

### reverse\_side

> **reverse\_side**: [`datedFile`](datedFile-1.md) \| `null`

Reverse side of the document; only for driver license and identity card; may be null

### selfie

> **selfie**: [`datedFile`](datedFile-1.md) \| `null`

Selfie with the document; may be null

### translation

> **translation**: [`vector`](vector.md)\<[`datedFile`](datedFile-1.md)\>

List of files containing a certified English translation of the document

## Defined in

dist/generated/types.d.ts:24125
