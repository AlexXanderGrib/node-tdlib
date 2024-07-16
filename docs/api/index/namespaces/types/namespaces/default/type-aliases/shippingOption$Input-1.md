[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / shippingOption$Input

# Type Alias: shippingOption$Input

> **shippingOption$Input**: `object`

Version of [shippingOption](shippingOption-1.md) for method parameters.

One shipping option

## Type declaration

### \_

> `readonly` **\_**: `"shippingOption"`

### id?

> `readonly` `optional` **id**: `string`

Shipping option identifier

### price\_parts?

> `readonly` `optional` **price\_parts**: [`vector$Input`](vector$Input.md)\<[`labeledPricePart$Input`](labeledPricePart$Input-1.md)\>

A list of objects used to calculate the total shipping costs

### title?

> `readonly` `optional` **title**: `string`

Option title

## Defined in

dist/generated/types.d.ts:22752
