[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / validatedOrderInfo$Input

# Type Alias: validatedOrderInfo$Input

> **validatedOrderInfo$Input**: `object`

Version of [validatedOrderInfo](validatedOrderInfo.md) for method parameters.

Contains a temporary identifier of validated order information, which is stored for one hour, and the available shipping options

## Type declaration

### \_

> `readonly` **\_**: `"validatedOrderInfo"`

### order\_info\_id?

> `readonly` `optional` **order\_info\_id**: `string`

Temporary identifier of the order information

### shipping\_options?

> `readonly` `optional` **shipping\_options**: [`vector$Input`](vector$Input.md)\<[`shippingOption$Input`](shippingOption$Input.md)\>

Available shipping options

## Defined in

dist/generated/types.d.ts:24009
