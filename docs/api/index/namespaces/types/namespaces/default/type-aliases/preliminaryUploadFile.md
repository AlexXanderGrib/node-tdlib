[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / preliminaryUploadFile

# Type Alias: preliminaryUploadFile()

> **preliminaryUploadFile**: (`parameters`) => [`File`](File-1.md)

Preliminary uploads a file to the cloud before sending it in a message, which can be useful for uploading of being recorded voice and video notes.

- In all other cases there is no need to preliminary upload a file. Updates updateFile will be used to notify about upload progress.

- The upload will not be completed until the file is sent in a message

## Parameters

• **parameters**: [`preliminaryUploadFile$Input`](preliminaryUploadFile$Input.md)

[preliminaryUploadFile$Input](preliminaryUploadFile$Input.md)

## Returns

[`File`](File-1.md)

[File](File-1.md)

## Defined in

dist/generated/types.d.ts:91370
