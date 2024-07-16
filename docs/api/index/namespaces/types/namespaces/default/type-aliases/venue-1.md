[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / venue

# Type Alias: venue

> **venue**: `object`

Describes a venue

## Type declaration

### \_

> **\_**: `"venue"`

### address

> **address**: `string`

Venue address; as defined by the sender

### id

> **id**: `string`

Identifier of the venue in the provider database; as defined by the sender

### location

> **location**: [`location`](location-1.md)

Venue location; as defined by the sender

### provider

> **provider**: `string`

Provider of the venue database; as defined by the sender. Currently, only "foursquare" and "gplaces" (Google Places) need to be supported

### title

> **title**: `string`

Venue name; as defined by the sender

### type

> **type**: `string`

Type of the venue in the provider database; as defined by the sender

## Defined in

dist/generated/types.d.ts:5547
