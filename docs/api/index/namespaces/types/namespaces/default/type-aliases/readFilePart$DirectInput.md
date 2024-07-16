[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / readFilePart$DirectInput

# Type Alias: readFilePart$DirectInput

> **readFilePart$DirectInput**: `object`

Reads a part of a file from the TDLib file cache and returns read bytes. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct read from the file

## Type declaration

### count?

> `readonly` `optional` **count**: [`int53`](int53-1.md)

Number of bytes to read. An error will be returned if there are not enough bytes available in the file from the specified position. Pass 0 to read all available data from the specified position

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32-1.md)

Identifier of the file. The file must be located in the TDLib file cache

### offset?

> `readonly` `optional` **offset**: [`int53`](int53-1.md)

The offset from which to read the file

## Defined in

dist/generated/types.d.ts:89182
