[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentFormTypeRegular$Input

# Type Alias: paymentFormTypeRegular$Input

> **paymentFormTypeRegular$Input**: `object`

Version of [paymentFormTypeRegular](paymentFormTypeRegular.md) for method parameters.

The payment form is for a regular payment

## Type declaration

### \_

> `readonly` **\_**: `"paymentFormTypeRegular"`

### additional\_payment\_options?

> `readonly` `optional` **additional\_payment\_options**: [`vector$Input`](vector$Input.md)\<[`paymentOption$Input`](paymentOption$Input-1.md)\>

The list of additional payment options

### can\_save\_credentials?

> `readonly` `optional` **can\_save\_credentials**: [`Bool$Input`](Bool$Input.md)

True, if the user can choose to save credentials

### invoice?

> `readonly` `optional` **invoice**: [`invoice$Input`](invoice$Input-1.md)

Full information about the invoice

### need\_password?

> `readonly` `optional` **need\_password**: [`Bool$Input`](Bool$Input.md)

True, if the user will be able to save credentials, if sets up a 2-step verification password

### payment\_provider?

> `readonly` `optional` **payment\_provider**: [`PaymentProvider$Input`](PaymentProvider$Input.md)

Information about the payment provider

### payment\_provider\_user\_id?

> `readonly` `optional` **payment\_provider\_user\_id**: [`int53`](int53-1.md)

User identifier of the payment provider bot

### saved\_credentials?

> `readonly` `optional` **saved\_credentials**: [`vector$Input`](vector$Input.md)\<[`savedCredentials$Input`](savedCredentials$Input-1.md)\>

The list of saved payment credentials

### saved\_order\_info?

> `readonly` `optional` **saved\_order\_info**: [`orderInfo$Input`](orderInfo$Input-1.md) \| `null`

Saved server-side order information; may be null

## Defined in

dist/generated/types.d.ts:23107
