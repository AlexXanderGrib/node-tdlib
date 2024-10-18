[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageDocument$Input

# Type Alias: inputMessageDocument$Input

> **inputMessageDocument$Input**: `object`

Version of [inputMessageDocument](inputMessageDocument.md) for method parameters.

A document message (general file)

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageDocument"`

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md) \| `null`

Document caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### disable\_content\_type\_detection?

> `readonly` `optional` **disable\_content\_type\_detection**: [`Bool$Input`](Bool$Input.md)

Pass true to disable automatic file type detection and send the document as a file. Always true for files sent to secret chats

### document?

> `readonly` `optional` **document**: [`InputFile$Input`](InputFile$Input.md)

Document to be sent

### thumbnail?

> `readonly` `optional` **thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input.md) \| `null`

Document thumbnail; pass null to skip thumbnail uploading

## Defined in

dist/generated/types.d.ts:30353
