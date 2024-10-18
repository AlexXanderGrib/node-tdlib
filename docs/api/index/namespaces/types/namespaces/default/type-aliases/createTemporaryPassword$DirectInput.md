[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createTemporaryPassword$DirectInput

# Type Alias: createTemporaryPassword$DirectInput

> **createTemporaryPassword$DirectInput**: `object`

Creates a new temporary password for processing payments

## Type declaration

### password?

> `readonly` `optional` **password**: `string`

The 2-step verification password of the current user

### valid\_for?

> `readonly` `optional` **valid\_for**: [`int32`](int32.md)

Time during which the temporary password will be valid, in seconds; must be between 60 and 86400

## Defined in

dist/generated/types.d.ts:76280
