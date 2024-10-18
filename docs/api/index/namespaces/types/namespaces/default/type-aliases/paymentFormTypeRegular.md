[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentFormTypeRegular

# Type Alias: paymentFormTypeRegular

> **paymentFormTypeRegular**: `object`

The payment form is for a regular payment

## Type declaration

### \_

> **\_**: `"paymentFormTypeRegular"`

### additional\_payment\_options

> **additional\_payment\_options**: [`vector`](vector.md)\<[`paymentOption`](paymentOption.md)\>

The list of additional payment options

### can\_save\_credentials

> **can\_save\_credentials**: [`Bool`](Bool.md)

True, if the user can choose to save credentials

### invoice

> **invoice**: [`invoice`](invoice.md)

Full information about the invoice

### need\_password

> **need\_password**: [`Bool`](Bool.md)

True, if the user will be able to save credentials, if sets up a 2-step verification password

### payment\_provider

> **payment\_provider**: [`PaymentProvider`](PaymentProvider.md)

Information about the payment provider

### payment\_provider\_user\_id

> **payment\_provider\_user\_id**: [`int53`](int53.md)

User identifier of the payment provider bot

### saved\_credentials

> **saved\_credentials**: [`vector`](vector.md)\<[`savedCredentials`](savedCredentials.md)\>

The list of saved payment credentials

### saved\_order\_info

> **saved\_order\_info**: [`orderInfo`](orderInfo.md) \| `null`

Saved server-side order information; may be null

## Defined in

dist/generated/types.d.ts:23819
