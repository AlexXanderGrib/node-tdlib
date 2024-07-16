[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentForm$Input

# Type Alias: paymentForm$Input

> **paymentForm$Input**: `object`

Version of [paymentForm](paymentForm-1.md) for method parameters.

Contains information about an invoice payment form

## Type declaration

### \_

> `readonly` **\_**: `"paymentForm"`

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

The payment form identifier

### product\_info?

> `readonly` `optional` **product\_info**: [`productInfo$Input`](productInfo$Input-1.md)

Information about the product

### seller\_bot\_user\_id?

> `readonly` `optional` **seller\_bot\_user\_id**: [`int53`](int53-1.md)

User identifier of the seller bot

### type?

> `readonly` `optional` **type**: [`PaymentFormType$Input`](PaymentFormType$Input.md)

Type of the payment form

## Defined in

dist/generated/types.d.ts:23205
