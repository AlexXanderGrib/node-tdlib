[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundFileDownloads$Input

# Type Alias: foundFileDownloads$Input

> **foundFileDownloads$Input**: `object`

Version of [foundFileDownloads](foundFileDownloads-1.md) for method parameters.

Contains a list of downloaded files, found by a search

## Type declaration

### \_

> `readonly` **\_**: `"foundFileDownloads"`

### files?

> `readonly` `optional` **files**: [`vector$Input`](vector$Input.md)\<[`fileDownload$Input`](fileDownload$Input-1.md)\>

The list of files

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### total\_counts?

> `readonly` `optional` **total\_counts**: [`downloadedFileCounts$Input`](downloadedFileCounts$Input-1.md)

Total number of suitable files, ignoring offset

## Defined in

dist/generated/types.d.ts:14798
