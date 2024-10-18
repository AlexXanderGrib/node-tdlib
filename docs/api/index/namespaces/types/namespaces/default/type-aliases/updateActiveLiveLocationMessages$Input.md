[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateActiveLiveLocationMessages$Input

# Type Alias: updateActiveLiveLocationMessages$Input

> **updateActiveLiveLocationMessages$Input**: `object`

Version of [updateActiveLiveLocationMessages](updateActiveLiveLocationMessages.md) for method parameters.

The list of messages with active live location that need to be updated by the application has changed. The list is persistent across application restarts only if the message database is used

## Type declaration

### \_

> `readonly` **\_**: `"updateActiveLiveLocationMessages"`

### messages?

> `readonly` `optional` **messages**: [`vector$Input`](vector$Input.md)\<[`message$Input`](message$Input.md)\>

The list of messages with active live locations

## Defined in

dist/generated/types.d.ts:58372
