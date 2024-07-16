[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / document$Input

# Type Alias: document$Input

> **document$Input**: `object`

Version of [document](document-1.md) for method parameters.

Describes a document of any type

## Type declaration

### \_

> `readonly` **\_**: `"document"`

### document?

> `readonly` `optional` **document**: [`file$Input`](file$Input-1.md)

File containing the document

### file\_name?

> `readonly` `optional` **file\_name**: `string`

Original name of the file; as defined by the sender

### mime\_type?

> `readonly` `optional` **mime\_type**: `string`

MIME type of the file; as defined by the sender

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input-1.md) \| `null`

Document minithumbnail; may be null

### thumbnail?

> `readonly` `optional` **thumbnail**: [`thumbnail$Input`](thumbnail$Input-1.md) \| `null`

Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns); as defined by the sender; may be null

## Defined in

dist/generated/types.d.ts:4924
