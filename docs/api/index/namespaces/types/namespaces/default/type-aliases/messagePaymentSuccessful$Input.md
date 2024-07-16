[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePaymentSuccessful$Input

# Type Alias: messagePaymentSuccessful$Input

> **messagePaymentSuccessful$Input**: `object`

Version of [messagePaymentSuccessful](messagePaymentSuccessful.md) for method parameters.

A payment has been completed

## Type declaration

### \_

> `readonly` **\_**: `"messagePaymentSuccessful"`

### currency?

> `readonly` `optional` **currency**: `string`

Currency for the price of the product

### invoice\_chat\_id?

> `readonly` `optional` **invoice\_chat\_id**: [`int53`](int53-1.md)

Identifier of the chat, containing the corresponding invoice message

### invoice\_message\_id?

> `readonly` `optional` **invoice\_message\_id**: [`int53`](int53-1.md)

Identifier of the message with the corresponding invoice; can be 0 or an identifier of a deleted message

### invoice\_name?

> `readonly` `optional` **invoice\_name**: `string`

Name of the invoice; may be empty if unknown

### is\_first\_recurring?

> `readonly` `optional` **is\_first\_recurring**: [`Bool$Input`](Bool$Input.md)

True, if this is the first recurring payment

### is\_recurring?

> `readonly` `optional` **is\_recurring**: [`Bool$Input`](Bool$Input.md)

True, if this is a recurring payment

### total\_amount?

> `readonly` `optional` **total\_amount**: [`int53`](int53-1.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:27544
