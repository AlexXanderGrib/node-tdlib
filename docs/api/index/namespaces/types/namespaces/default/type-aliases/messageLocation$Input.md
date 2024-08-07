[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageLocation$Input

# Type Alias: messageLocation$Input

> **messageLocation$Input**: `object`

Version of [messageLocation](messageLocation.md) for method parameters.

A message with a location

## Type declaration

### \_

> `readonly` **\_**: `"messageLocation"`

### expires\_in?

> `readonly` `optional` **expires\_in**: [`int32`](int32-1.md)

Left time for which the location can be updated, in seconds. If 0, then the location can't be updated anymore. The update updateMessageContent is not sent when this field changes

### heading?

> `readonly` `optional` **heading**: [`int32`](int32-1.md)

For live locations, a direction in which the location moves, in degrees; 1-360. If 0 the direction is unknown

### live\_period?

> `readonly` `optional` **live\_period**: [`int32`](int32-1.md)

Time relative to the message send date, for which the location can be updated, in seconds; if 0x7FFFFFFF, then location can be updated forever

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input-1.md)

The location description

### proximity\_alert\_radius?

> `readonly` `optional` **proximity\_alert\_radius**: [`int32`](int32-1.md)

For live locations, a maximum distance to another chat member for proximity alerts, in meters (0-100000). 0 if the notification is disabled. Available only to the message sender

## Defined in

dist/generated/types.d.ts:26332
