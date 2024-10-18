[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addFileToDownloads$DirectInput

# Type Alias: addFileToDownloads$DirectInput

> **addFileToDownloads$DirectInput**: `object`

Adds a file from a message to the list of file downloads. Download progress and completion of the download will be notified through updateFile updates.

- If message database is used, the list of file downloads is persistent across application restarts. The downloading is independent of download using downloadFile, i.e. it continues if downloadFile is canceled or is used to download a part of the file

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier of the message with the file

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32.md)

Identifier of the file to download

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

### priority?

> `readonly` `optional` **priority**: [`int32`](int32.md)

Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first

## Defined in

dist/generated/types.d.ts:91642
