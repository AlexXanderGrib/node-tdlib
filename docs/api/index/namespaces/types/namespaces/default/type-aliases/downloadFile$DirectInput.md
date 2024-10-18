[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / downloadFile$DirectInput

# Type Alias: downloadFile$DirectInput

> **downloadFile$DirectInput**: `object`

Downloads a file from the cloud. Download progress and completion of the download will be notified through updateFile updates

## Type declaration

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32.md)

Identifier of the file to download

### limit?

> `readonly` `optional` **limit**: [`int53`](int53.md)

Number of bytes which need to be downloaded starting from the "offset" position before the download will automatically be canceled; use 0 to download without a limit

### offset?

> `readonly` `optional` **offset**: [`int53`](int53.md)

The starting position from which the file needs to be downloaded

### priority?

> `readonly` `optional` **priority**: [`int32`](int32.md)

Priority of the download (1-32). The higher the priority, the earlier the file will be downloaded. If the priorities of two files are equal, then the last one for which downloadFile/addFileToDownloads was called will be downloaded first

### synchronous?

> `readonly` `optional` **synchronous**: [`Bool$Input`](Bool$Input.md)

Pass true to return response only after the file download has succeeded, has failed, has been canceled, or a new downloadFile request with different offset/limit parameters was sent; pass false to return file state immediately, just after the download has been started

## Defined in

dist/generated/types.d.ts:91163
