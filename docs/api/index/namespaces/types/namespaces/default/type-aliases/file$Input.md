[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / file$Input

# Type Alias: file$Input

> **file$Input**: `object`

Version of [file](file.md) for method parameters.

Represents a file

## Type declaration

### \_

> `readonly` **\_**: `"file"`

### expected\_size?

> `readonly` `optional` **expected\_size**: [`int53`](int53.md)

Approximate file size in bytes in case the exact file size is unknown. Can be used to show download/upload progress

### id?

> `readonly` `optional` **id**: [`int32`](int32.md)

Unique file identifier

### local?

> `readonly` `optional` **local**: [`localFile$Input`](localFile$Input.md)

Information about the local copy of the file

### remote?

> `readonly` `optional` **remote**: [`remoteFile$Input`](remoteFile$Input.md)

Information about the remote copy of the file

### size?

> `readonly` `optional` **size**: [`int53`](int53.md)

File size, in bytes; 0 if unknown

## Defined in

dist/generated/types.d.ts:3896
