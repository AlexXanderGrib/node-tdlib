[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputFileRemote

# Type Alias: inputFileRemote

> **inputFileRemote**: `object`

A file defined by its remote identifier. The remote identifier is guaranteed to be usable only if the corresponding file is still accessible to the user and known to TDLib.

- For example, if the file is from a message, then the message must be not deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the application

## Type declaration

### \_

> **\_**: `"inputFileRemote"`

### id

> **id**: `string`

Remote file identifier

## Defined in

dist/generated/types.d.ts:3953
