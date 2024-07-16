[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumPaymentOption$Input

# Type Alias: premiumPaymentOption$Input

> **premiumPaymentOption$Input**: `object`

Version of [premiumPaymentOption](premiumPaymentOption-1.md) for method parameters.

Describes an option for buying Telegram Premium to a user

## Type declaration

### \_

> `readonly` **\_**: `"premiumPaymentOption"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53-1.md)

The amount to pay, in the smallest units of the currency

### currency?

> `readonly` `optional` **currency**: `string`

ISO 4217 currency code for Telegram Premium subscription payment

### discount\_percentage?

> `readonly` `optional` **discount\_percentage**: [`int32`](int32-1.md)

The discount associated with this option, as a percentage

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active

### payment\_link?

> `readonly` `optional` **payment\_link**: [`InternalLinkType$Input`](InternalLinkType$Input.md) \| `null`

An internal link to be opened for buying Telegram Premium to the user if store payment isn't possible; may be null if direct payment isn't available

### store\_product\_id?

> `readonly` `optional` **store\_product\_id**: `string`

Identifier of the store product associated with the option

## Defined in

dist/generated/types.d.ts:7985
