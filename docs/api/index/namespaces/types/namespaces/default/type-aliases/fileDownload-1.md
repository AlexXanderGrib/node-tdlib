[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / fileDownload

# Type Alias: fileDownload

> **fileDownload**: `object`

Describes a file added to file download list

## Type declaration

### \_

> **\_**: `"fileDownload"`

### add\_date

> **add\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the file was added to the download list

### complete\_date

> **complete\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed

### file\_id

> **file\_id**: [`int32`](int32-1.md)

File identifier

### is\_paused

> **is\_paused**: [`Bool`](Bool.md)

True, if downloading of the file is paused

### message

> **message**: [`message`](message-1.md)

The message with the file

## Defined in

dist/generated/types.d.ts:14667
