[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getRemoteFile

# Type Alias: getRemoteFile()

> **getRemoteFile**: (`parameters`) => [`File`](File-1.md)

Returns information about a file by its remote identifier; this is an offline request. Can be used to register a URL as a file for further uploading, or sending as a message. Even the request succeeds, the file can be used only if it is still accessible to the user.

- For example, if the file is from a message, then the message must be not deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the application

## Parameters

• **parameters**: [`getRemoteFile$Input`](getRemoteFile$Input.md)

[getRemoteFile$Input](getRemoteFile$Input.md)

## Returns

[`File`](File-1.md)

[File](File-1.md)

## Defined in

dist/generated/types.d.ts:77020
