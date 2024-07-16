[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentResult$Input

# Type Alias: paymentResult$Input

> **paymentResult$Input**: `object`

Version of [paymentResult](paymentResult-1.md) for method parameters.

Contains the result of a payment request

## Type declaration

### \_

> `readonly` **\_**: `"paymentResult"`

### success?

> `readonly` `optional` **success**: [`Bool$Input`](Bool$Input.md)

True, if the payment request was successful; otherwise, the verification_url will be non-empty

### verification\_url?

> `readonly` `optional` **verification\_url**: `string`

URL for additional payment credentials verification

## Defined in

dist/generated/types.d.ts:23283
