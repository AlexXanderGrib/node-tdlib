[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / fileDownload$Input

# Type Alias: fileDownload$Input

> **fileDownload$Input**: `object`

Version of [fileDownload](fileDownload.md) for method parameters.

Describes a file added to file download list

## Type declaration

### \_

> `readonly` **\_**: `"fileDownload"`

### add\_date?

> `readonly` `optional` **add\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the file was added to the download list

### complete\_date?

> `readonly` `optional` **complete\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the file downloading was completed; 0 if the file downloading isn't completed

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32.md)

File identifier

### is\_paused?

> `readonly` `optional` **is\_paused**: [`Bool$Input`](Bool$Input.md)

True, if downloading of the file is paused

### message?

> `readonly` `optional` **message**: [`message$Input`](message$Input.md)

The message with the file

## Defined in

dist/generated/types.d.ts:15292
