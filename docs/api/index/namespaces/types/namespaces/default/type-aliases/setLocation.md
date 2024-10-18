[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setLocation

# Type Alias: setLocation()

> **setLocation**: (`parameters`) => [`Ok`](Ok-1.md)

Changes the location of the current user. Needs to be called if getOption("is_location_visible") is true and location changes for more than 1 kilometer. Must not be called if the user has a business location

## Parameters

• **parameters**: [`setLocation$Input`](setLocation$Input.md)

[setLocation$Input](setLocation$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:96755
