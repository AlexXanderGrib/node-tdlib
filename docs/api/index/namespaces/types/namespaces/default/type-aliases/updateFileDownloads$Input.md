[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateFileDownloads$Input

# Type Alias: updateFileDownloads$Input

> **updateFileDownloads$Input**: `object`

Version of [updateFileDownloads](updateFileDownloads.md) for method parameters.

The state of the file download list has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateFileDownloads"`

### downloaded\_size?

> `readonly` `optional` **downloaded\_size**: [`int53`](int53.md)

Total downloaded size of files in the file download list, in bytes

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Total number of files in the file download list

### total\_size?

> `readonly` `optional` **total\_size**: [`int53`](int53.md)

Total size of files in the file download list, in bytes

## Defined in

dist/generated/types.d.ts:56992
