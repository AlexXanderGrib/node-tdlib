[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / file

# Type Alias: file

> **file**: `object`

Represents a file

## Type declaration

### \_

> **\_**: `"file"`

### expected\_size

> **expected\_size**: [`int53`](int53-1.md)

Approximate file size in bytes in case the exact file size is unknown. Can be used to show download/upload progress

### id

> **id**: [`int32`](int32-1.md)

Unique file identifier

### local

> **local**: [`localFile`](localFile-1.md)

Information about the local copy of the file

### remote

> **remote**: [`remoteFile`](remoteFile-1.md)

Information about the remote copy of the file

### size

> **size**: [`int53`](int53-1.md)

File size, in bytes; 0 if unknown

## Defined in

dist/generated/types.d.ts:3817
