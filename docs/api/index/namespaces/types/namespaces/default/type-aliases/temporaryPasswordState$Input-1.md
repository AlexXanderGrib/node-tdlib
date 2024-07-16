[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / temporaryPasswordState$Input

# Type Alias: temporaryPasswordState$Input

> **temporaryPasswordState$Input**: `object`

Version of [temporaryPasswordState](temporaryPasswordState-1.md) for method parameters.

Returns information about the availability of a temporary password, which can be used for payments

## Type declaration

### \_

> `readonly` **\_**: `"temporaryPasswordState"`

### has\_password?

> `readonly` `optional` **has\_password**: [`Bool$Input`](Bool$Input.md)

True, if a temporary password is available

### valid\_for?

> `readonly` `optional` **valid\_for**: [`int32`](int32-1.md)

Time left before the temporary password expires, in seconds

## Defined in

dist/generated/types.d.ts:3631
