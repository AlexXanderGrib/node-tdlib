[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / cancelDownloadFile$DirectInput

# Type Alias: cancelDownloadFile$DirectInput

> **cancelDownloadFile$DirectInput**: `object`

Stops the downloading of a file. If a file has already been downloaded, does nothing

## Type declaration

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32-1.md)

Identifier of a file to stop downloading

### only\_if\_pending?

> `readonly` `optional` **only\_if\_pending**: [`Bool$Input`](Bool$Input.md)

Pass true to stop downloading only if it hasn't been started, i.e. request hasn't been sent to server

## Defined in

dist/generated/types.d.ts:88879
