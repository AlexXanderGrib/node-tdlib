[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / writeGeneratedFilePart$Input

# Type Alias: writeGeneratedFilePart$Input

> **writeGeneratedFilePart$Input**: `object`

Writes a part of a generated file. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct write to the destination file

## Type declaration

### \_

> `readonly` **\_**: `"writeGeneratedFilePart"`

### data?

> `readonly` `optional` **data**: [`bytes$Input`](bytes$Input-1.md)

The data to write

### generation\_id?

> `readonly` `optional` **generation\_id**: [`int64$Input`](int64$Input-1.md)

The identifier of the generation process

### offset?

> `readonly` `optional` **offset**: [`int53`](int53-1.md)

The offset from which to write the data to the file

## Defined in

dist/generated/types.d.ts:89027
