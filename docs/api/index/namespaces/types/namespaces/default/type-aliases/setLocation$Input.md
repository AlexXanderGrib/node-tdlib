[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setLocation$Input

# Type Alias: setLocation$Input

> **setLocation$Input**: `object`

Changes the location of the current user. Needs to be called if getOption("is_location_visible") is true and location changes for more than 1 kilometer. Must not be called if the user has a business location

## Type declaration

### \_

> `readonly` **\_**: `"setLocation"`

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input.md)

The new location of the user

## Defined in

dist/generated/types.d.ts:96731
