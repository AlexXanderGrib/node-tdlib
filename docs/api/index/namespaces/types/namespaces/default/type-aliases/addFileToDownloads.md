[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addFileToDownloads

# Type Alias: addFileToDownloads()

> **addFileToDownloads**: (`parameters`) => [`File`](File-1.md)

Adds a file from a message to the list of file downloads. Download progress and completion of the download will be notified through updateFile updates.

- If message database is used, the list of file downloads is persistent across application restarts. The downloading is independent of download using downloadFile, i.e. it continues if downloadFile is canceled or is used to download a part of the file

## Parameters

• **parameters**: [`addFileToDownloads$Input`](addFileToDownloads$Input.md)

[addFileToDownloads$Input](addFileToDownloads$Input.md)

## Returns

[`File`](File-1.md)

[File](File-1.md)

## Defined in

dist/generated/types.d.ts:91672
