[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / location$Input

# Type Alias: location$Input

> **location$Input**: `object`

Version of [location](location-1.md) for method parameters.

Describes a location on planet Earth

## Type declaration

### \_

> `readonly` **\_**: `"location"`

### horizontal\_accuracy?

> `readonly` `optional` **horizontal\_accuracy**: [`double`](double-1.md)

The estimated horizontal accuracy of the location, in meters; as defined by the sender. 0 if unknown

### latitude?

> `readonly` `optional` **latitude**: [`double`](double-1.md)

Latitude of the location in degrees; as defined by the sender

### longitude?

> `readonly` `optional` **longitude**: [`double`](double-1.md)

Longitude of the location, in degrees; as defined by the sender

## Defined in

dist/generated/types.d.ts:5526
