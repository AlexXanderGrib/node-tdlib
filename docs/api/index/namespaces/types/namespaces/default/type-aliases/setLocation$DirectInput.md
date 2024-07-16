[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setLocation$DirectInput

# Type Alias: setLocation$DirectInput

> **setLocation$DirectInput**: `object`

Changes the location of the current user. Needs to be called if getOption("is_location_visible") is true and location changes for more than 1 kilometer. Must not be called if the user has a business location

## Type declaration

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input-1.md)

The new location of the user

## Defined in

dist/generated/types.d.ts:94245
