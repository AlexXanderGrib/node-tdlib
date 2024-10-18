[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageLocation$Input

# Type Alias: inputMessageLocation$Input

> **inputMessageLocation$Input**: `object`

Version of [inputMessageLocation](inputMessageLocation.md) for method parameters.

A message with a location

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageLocation"`

### heading?

> `readonly` `optional` **heading**: [`int32`](int32.md)

For live locations, a direction in which the location moves, in degrees; 1-360. Pass 0 if unknown

### live\_period?

> `readonly` `optional` **live\_period**: [`int32`](int32.md)

Period for which the location can be updated, in seconds; must be between 60 and 86400 for a temporary live location, 0x7FFFFFFF for permanent live location, and 0 otherwise

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input.md)

Location to be sent

### proximity\_alert\_radius?

> `readonly` `optional` **proximity\_alert\_radius**: [`int32`](int32.md)

For live locations, a maximum distance to another chat member for proximity alerts, in meters (0-100000). Pass 0 if the notification is disabled. Can't be enabled in channels and Saved Messages

## Defined in

dist/generated/types.d.ts:30881
