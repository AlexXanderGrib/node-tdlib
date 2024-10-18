[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setOption$DirectInput

# Type Alias: setOption$DirectInput

> **setOption$DirectInput**: `object`

Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only writable options can be set. Can be called before authorization

## Type declaration

### name?

> `readonly` `optional` **name**: `string`

The name of the option

### value?

> `readonly` `optional` **value**: [`OptionValue$Input`](OptionValue$Input.md) \| `null`

The new value of the option; pass null to reset option value to a default value

## Defined in

dist/generated/types.d.ts:100746
