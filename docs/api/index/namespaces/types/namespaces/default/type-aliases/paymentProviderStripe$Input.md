[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / paymentProviderStripe$Input

# Type Alias: paymentProviderStripe$Input

> **paymentProviderStripe$Input**: `object`

Version of [paymentProviderStripe](paymentProviderStripe.md) for method parameters.

Stripe payment provider

## Type declaration

### \_

> `readonly` **\_**: `"paymentProviderStripe"`

### need\_cardholder\_name?

> `readonly` `optional` **need\_cardholder\_name**: [`Bool$Input`](Bool$Input.md)

True, if the cardholder name must be provided

### need\_country?

> `readonly` `optional` **need\_country**: [`Bool$Input`](Bool$Input.md)

True, if the user country must be provided

### need\_postal\_code?

> `readonly` `optional` **need\_postal\_code**: [`Bool$Input`](Bool$Input.md)

True, if the user ZIP/postal code must be provided

### publishable\_key?

> `readonly` `optional` **publishable\_key**: `string`

Stripe API publishable key

## Defined in

dist/generated/types.d.ts:22975
