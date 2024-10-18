[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateFileAddedToDownloads$Input

# Type Alias: updateFileAddedToDownloads$Input

> **updateFileAddedToDownloads$Input**: `object`

Version of [updateFileAddedToDownloads](updateFileAddedToDownloads.md) for method parameters.

A file was added to the file download list. This update is sent only after file download list is loaded for the first time

## Type declaration

### \_

> `readonly` **\_**: `"updateFileAddedToDownloads"`

### counts?

> `readonly` `optional` **counts**: [`downloadedFileCounts$Input`](downloadedFileCounts$Input.md)

New number of being downloaded and recently downloaded files found

### file\_download?

> `readonly` `optional` **file\_download**: [`fileDownload$Input`](fileDownload$Input.md)

The added file download

## Defined in

dist/generated/types.d.ts:57031
