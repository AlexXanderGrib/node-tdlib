[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundFileDownloads

# Type Alias: foundFileDownloads

> **foundFileDownloads**: `object`

Contains a list of downloaded files, found by a search

## Type declaration

### \_

> **\_**: `"foundFileDownloads"`

### files

> **files**: [`vector`](vector.md)\<[`fileDownload`](fileDownload-1.md)\>

The list of files

### next\_offset

> **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### total\_counts

> **total\_counts**: [`downloadedFileCounts`](downloadedFileCounts-1.md)

Total number of suitable files, ignoring offset

## Defined in

dist/generated/types.d.ts:14775
