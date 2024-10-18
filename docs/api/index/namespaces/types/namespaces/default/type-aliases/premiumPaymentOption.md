[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumPaymentOption

# Type Alias: premiumPaymentOption

> **premiumPaymentOption**: `object`

Describes an option for buying Telegram Premium to a user

## Type declaration

### \_

> **\_**: `"premiumPaymentOption"`

### amount

> **amount**: [`int53`](int53.md)

The amount to pay, in the smallest units of the currency

### currency

> **currency**: `string`

ISO 4217 currency code for Telegram Premium subscription payment

### discount\_percentage

> **discount\_percentage**: [`int32`](int32.md)

The discount associated with this option, as a percentage

### month\_count

> **month\_count**: [`int32`](int32.md)

Number of months the Telegram Premium subscription will be active

### payment\_link

> **payment\_link**: [`InternalLinkType`](InternalLinkType.md) \| `null`

An internal link to be opened for buying Telegram Premium to the user if store payment isn't possible; may be null if direct payment isn't available

### store\_product\_id

> **store\_product\_id**: `string`

Identifier of the store product associated with the option

## Defined in

dist/generated/types.d.ts:8195
