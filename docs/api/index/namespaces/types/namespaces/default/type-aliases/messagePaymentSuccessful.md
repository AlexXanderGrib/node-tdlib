[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePaymentSuccessful

# Type Alias: messagePaymentSuccessful

> **messagePaymentSuccessful**: `object`

A payment has been completed

## Type declaration

### \_

> **\_**: `"messagePaymentSuccessful"`

### currency

> **currency**: `string`

Currency for the price of the product

### invoice\_chat\_id

> **invoice\_chat\_id**: [`int53`](int53.md)

Identifier of the chat, containing the corresponding invoice message

### invoice\_message\_id

> **invoice\_message\_id**: [`int53`](int53.md)

Identifier of the message with the corresponding invoice; can be 0 or an identifier of a deleted message

### invoice\_name

> **invoice\_name**: `string`

Name of the invoice; may be empty if unknown

### is\_first\_recurring

> **is\_first\_recurring**: [`Bool`](Bool.md)

True, if this is the first recurring payment

### is\_recurring

> **is\_recurring**: [`Bool`](Bool.md)

True, if this is a recurring payment

### total\_amount

> **total\_amount**: [`int53`](int53.md)

Total price for the product, in the smallest units of the currency

## Defined in

dist/generated/types.d.ts:28261
