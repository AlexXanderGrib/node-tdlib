[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getRemoteFile$DirectInput

# Type Alias: getRemoteFile$DirectInput

> **getRemoteFile$DirectInput**: `object`

Returns information about a file by its remote identifier; this is an offline request. Can be used to register a URL as a file for further uploading, or sending as a message. Even the request succeeds, the file can be used only if it is still accessible to the user.

- For example, if the file is from a message, then the message must be not deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the application

## Type declaration

### file\_type?

> `readonly` `optional` **file\_type**: [`FileType$Input`](FileType$Input.md) \| `null`

File type; pass null if unknown

### remote\_file\_id?

> `readonly` `optional` **remote\_file\_id**: `string`

Remote identifier of the file to get

## Defined in

dist/generated/types.d.ts:77000
