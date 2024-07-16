[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateFileDownload

# Type Alias: updateFileDownload

> **updateFileDownload**: `object`

A file download was changed. This update is sent only after file download list is loaded for the first time

## Type declaration

### \_

> **\_**: `"updateFileDownload"`

### complete\_date

> **complete\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed

### counts

> **counts**: [`downloadedFileCounts`](downloadedFileCounts-1.md)

New number of being downloaded and recently downloaded files found

### file\_id

> **file\_id**: [`int32`](int32-1.md)

File identifier

### is\_paused

> **is\_paused**: [`Bool`](Bool.md)

True, if downloading of the file is paused

## Defined in

dist/generated/types.d.ts:55431
