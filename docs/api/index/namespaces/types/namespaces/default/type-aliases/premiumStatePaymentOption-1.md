[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumStatePaymentOption

# Type Alias: premiumStatePaymentOption

> **premiumStatePaymentOption**: `object`

Describes an option for buying or upgrading Telegram Premium for self

## Type declaration

### \_

> **\_**: `"premiumStatePaymentOption"`

### is\_current

> **is\_current**: [`Bool`](Bool.md)

True, if this is the currently used Telegram Premium subscription option

### is\_upgrade

> **is\_upgrade**: [`Bool`](Bool.md)

True, if the payment option can be used to upgrade the existing Telegram Premium subscription

### last\_transaction\_id

> **last\_transaction\_id**: `string`

Identifier of the last in-store transaction for the currently used option

### payment\_option

> **payment\_option**: [`premiumPaymentOption`](premiumPaymentOption-1.md)

Information about the payment option

## Defined in

dist/generated/types.d.ts:8021
