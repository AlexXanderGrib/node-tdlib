[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / orderInfo$Input

# Type Alias: orderInfo$Input

> **orderInfo$Input**: `object`

Version of [orderInfo](orderInfo-1.md) for method parameters.

Order information

## Type declaration

### \_

> `readonly` **\_**: `"orderInfo"`

### email\_address?

> `readonly` `optional` **email\_address**: `string`

Email address of the user

### name?

> `readonly` `optional` **name**: `string`

Name of the user

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

Phone number of the user

### shipping\_address?

> `readonly` `optional` **shipping\_address**: [`address$Input`](address$Input-1.md) \| `null`

Shipping address for this order; may be null

## Defined in

dist/generated/types.d.ts:22703
