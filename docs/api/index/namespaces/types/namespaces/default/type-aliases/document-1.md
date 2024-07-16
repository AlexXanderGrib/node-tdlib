[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / document

# Type Alias: document

> **document**: `object`

Describes a document of any type

## Type declaration

### \_

> **\_**: `"document"`

### document

> **document**: [`file`](file-1.md)

File containing the document

### file\_name

> **file\_name**: `string`

Original name of the file; as defined by the sender

### mime\_type

> **mime\_type**: `string`

MIME type of the file; as defined by the sender

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail-1.md) \| `null`

Document minithumbnail; may be null

### thumbnail

> **thumbnail**: [`thumbnail`](thumbnail-1.md) \| `null`

Document thumbnail in JPEG or PNG format (PNG will be used only for background patterns); as defined by the sender; may be null

## Defined in

dist/generated/types.d.ts:4891
