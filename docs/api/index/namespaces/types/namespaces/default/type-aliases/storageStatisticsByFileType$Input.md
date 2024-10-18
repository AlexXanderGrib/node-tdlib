[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storageStatisticsByFileType$Input

# Type Alias: storageStatisticsByFileType$Input

> **storageStatisticsByFileType$Input**: `object`

Version of [storageStatisticsByFileType](storageStatisticsByFileType.md) for method parameters.

Contains the storage usage statistics for a specific file type

## Type declaration

### \_

> `readonly` **\_**: `"storageStatisticsByFileType"`

### count?

> `readonly` `optional` **count**: [`int32`](int32.md)

Total number of files

### file\_type?

> `readonly` `optional` **file\_type**: [`FileType$Input`](FileType$Input.md)

File type

### size?

> `readonly` `optional` **size**: [`int53`](int53.md)

Total size of the files, in bytes

## Defined in

dist/generated/types.d.ts:50806
