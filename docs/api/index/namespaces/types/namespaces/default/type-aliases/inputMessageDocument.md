[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageDocument

# Type Alias: inputMessageDocument

> **inputMessageDocument**: `object`

A document message (general file)

## Type declaration

### \_

> **\_**: `"inputMessageDocument"`

### caption

> **caption**: [`formattedText`](formattedText-1.md) \| `null`

Document caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### disable\_content\_type\_detection

> **disable\_content\_type\_detection**: [`Bool`](Bool.md)

Pass true to disable automatic file type detection and send the document as a file. Always true for files sent to secret chats

### document

> **document**: [`InputFile`](InputFile.md)

Document to be sent

### thumbnail

> **thumbnail**: [`inputThumbnail`](inputThumbnail-1.md) \| `null`

Document thumbnail; pass null to skip thumbnail uploading

## Defined in

dist/generated/types.d.ts:29451
