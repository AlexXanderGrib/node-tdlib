[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentForm$Input

# Type Alias: paymentForm$Input

> **paymentForm$Input**: `object`

Version of [paymentForm](paymentForm.md) for method parameters.

Contains information about an invoice payment form

## Type declaration

### \_

> `readonly` **\_**: `"paymentForm"`

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

The payment form identifier

### product\_info?

> `readonly` `optional` **product\_info**: [`productInfo$Input`](productInfo$Input.md)

Information about the product

### seller\_bot\_user\_id?

> `readonly` `optional` **seller\_bot\_user\_id**: [`int53`](int53.md)

User identifier of the seller bot

### type?

> `readonly` `optional` **type**: [`PaymentFormType$Input`](PaymentFormType$Input.md)

Type of the payment form

## Defined in

dist/generated/types.d.ts:23965
