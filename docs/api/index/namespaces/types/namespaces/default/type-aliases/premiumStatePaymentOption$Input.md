[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumStatePaymentOption$Input

# Type Alias: premiumStatePaymentOption$Input

> **premiumStatePaymentOption$Input**: `object`

Version of [premiumStatePaymentOption](premiumStatePaymentOption.md) for method parameters.

Describes an option for buying or upgrading Telegram Premium for self

## Type declaration

### \_

> `readonly` **\_**: `"premiumStatePaymentOption"`

### is\_current?

> `readonly` `optional` **is\_current**: [`Bool$Input`](Bool$Input.md)

True, if this is the currently used Telegram Premium subscription option

### is\_upgrade?

> `readonly` `optional` **is\_upgrade**: [`Bool$Input`](Bool$Input.md)

True, if the payment option can be used to upgrade the existing Telegram Premium subscription

### last\_transaction\_id?

> `readonly` `optional` **last\_transaction\_id**: `string`

Identifier of the last in-store transaction for the currently used option

### payment\_option?

> `readonly` `optional` **payment\_option**: [`premiumPaymentOption$Input`](premiumPaymentOption$Input.md)

Information about the payment option

## Defined in

dist/generated/types.d.ts:8297
