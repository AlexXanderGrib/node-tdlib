[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / venue$Input

# Type Alias: venue$Input

> **venue$Input**: `object`

Version of [venue](venue.md) for method parameters.

Describes a venue

## Type declaration

### \_

> `readonly` **\_**: `"venue"`

### address?

> `readonly` `optional` **address**: `string`

Venue address; as defined by the sender

### id?

> `readonly` `optional` **id**: `string`

Identifier of the venue in the provider database; as defined by the sender

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input.md)

Venue location; as defined by the sender

### provider?

> `readonly` `optional` **provider**: `string`

Provider of the venue database; as defined by the sender. Currently, only "foursquare" and "gplaces" (Google Places) need to be supported

### title?

> `readonly` `optional` **title**: `string`

Venue name; as defined by the sender

### type?

> `readonly` `optional` **type**: `string`

Type of the venue in the provider database; as defined by the sender

## Defined in

dist/generated/types.d.ts:5631
