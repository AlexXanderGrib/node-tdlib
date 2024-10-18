[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / answerShippingQuery$DirectInput

# Type Alias: answerShippingQuery$DirectInput

> **answerShippingQuery$DirectInput**: `object`

Sets the result of a shipping query; for bots only

## Type declaration

### error\_message?

> `readonly` `optional` **error\_message**: `string`

An error message, empty on success

### shipping\_options?

> `readonly` `optional` **shipping\_options**: [`vector$Input`](vector$Input.md)\<[`shippingOption$Input`](shippingOption$Input.md)\>

Available shipping options

### shipping\_query\_id?

> `readonly` `optional` **shipping\_query\_id**: [`int64$Input`](int64$Input.md)

Identifier of the shipping query

## Defined in

dist/generated/types.d.ts:85523
