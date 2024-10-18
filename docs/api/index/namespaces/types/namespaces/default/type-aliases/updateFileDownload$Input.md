[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateFileDownload$Input

# Type Alias: updateFileDownload$Input

> **updateFileDownload$Input**: `object`

Version of [updateFileDownload](updateFileDownload.md) for method parameters.

A file download was changed. This update is sent only after file download list is loaded for the first time

## Type declaration

### \_

> `readonly` **\_**: `"updateFileDownload"`

### complete\_date?

> `readonly` `optional` **complete\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed

### counts?

> `readonly` `optional` **counts**: [`downloadedFileCounts$Input`](downloadedFileCounts$Input.md)

New number of being downloaded and recently downloaded files found

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32.md)

File identifier

### is\_paused?

> `readonly` `optional` **is\_paused**: [`Bool$Input`](Bool$Input.md)

True, if downloading of the file is paused

## Defined in

dist/generated/types.d.ts:57075
