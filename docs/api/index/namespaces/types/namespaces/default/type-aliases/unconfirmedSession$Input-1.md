[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / unconfirmedSession$Input

# Type Alias: unconfirmedSession$Input

> **unconfirmedSession$Input**: `object`

Version of [unconfirmedSession](unconfirmedSession-1.md) for method parameters.

Contains information about an unconfirmed session

## Type declaration

### \_

> `readonly` **\_**: `"unconfirmedSession"`

### device\_model?

> `readonly` `optional` **device\_model**: `string`

Model of the device that was used for the session creation, as provided by the application

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

Session identifier

### location?

> `readonly` `optional` **location**: `string`

A human-readable description of the location from which the session was created, based on the IP address

### log\_in\_date?

> `readonly` `optional` **log\_in\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the user has logged in

## Defined in

dist/generated/types.d.ts:46955
