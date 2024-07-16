[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / registerDevice$DirectInput

# Type Alias: registerDevice$DirectInput

> **registerDevice$DirectInput**: `object`

Registers the currently used device for receiving push notifications. Returns a globally unique identifier of the push notification subscription

## Type declaration

### device\_token?

> `readonly` `optional` **device\_token**: [`DeviceToken$Input`](DeviceToken$Input.md)

Device token

### other\_user\_ids?

> `readonly` `optional` **other\_user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

List of user identifiers of other users currently using the application

## Defined in

dist/generated/types.d.ts:97623
