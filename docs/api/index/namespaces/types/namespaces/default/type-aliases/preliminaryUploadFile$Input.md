[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / preliminaryUploadFile$Input

# Type Alias: preliminaryUploadFile$Input

> **preliminaryUploadFile$Input**: `object`

Preliminary uploads a file to the cloud before sending it in a message, which can be useful for uploading of being recorded voice and video notes.

- In all other cases there is no need to preliminary upload a file. Updates updateFile will be used to notify about upload progress.

- The upload will not be completed until the file is sent in a message

## Type declaration

### \_

> `readonly` **\_**: `"preliminaryUploadFile"`

### file?

> `readonly` `optional` **file**: [`InputFile$Input`](InputFile$Input.md)

File to upload

### file\_type?

> `readonly` `optional` **file\_type**: [`FileType$Input`](FileType$Input.md) \| `null`

File type; pass null if unknown

### priority?

> `readonly` `optional` **priority**: [`int32`](int32-1.md)

Priority of the upload (1-32). The higher the priority, the earlier the file will be uploaded. If the priorities of two files are equal, then the first one for which preliminaryUploadFile was called will be uploaded first

## Defined in

dist/generated/types.d.ts:88943
