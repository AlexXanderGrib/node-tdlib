[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateFileRemovedFromDownloads$Input

# Type Alias: updateFileRemovedFromDownloads$Input

> **updateFileRemovedFromDownloads$Input**: `object`

Version of [updateFileRemovedFromDownloads](updateFileRemovedFromDownloads.md) for method parameters.

A file was removed from the file download list. This update is sent only after file download list is loaded for the first time

## Type declaration

### \_

> `readonly` **\_**: `"updateFileRemovedFromDownloads"`

### counts?

> `readonly` `optional` **counts**: [`downloadedFileCounts$Input`](downloadedFileCounts$Input-1.md)

New number of being downloaded and recently downloaded files found

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32-1.md)

File identifier

## Defined in

dist/generated/types.d.ts:55503
