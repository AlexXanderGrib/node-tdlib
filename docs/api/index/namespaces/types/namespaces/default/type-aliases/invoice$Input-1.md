[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / invoice$Input

# Type Alias: invoice$Input

> **invoice$Input**: `object`

Version of [invoice](invoice-1.md) for method parameters.

Product invoice

## Type declaration

### \_

> `readonly` **\_**: `"invoice"`

### currency?

> `readonly` `optional` **currency**: `string`

ISO 4217 currency code

### is\_flexible?

> `readonly` `optional` **is\_flexible**: [`Bool$Input`](Bool$Input.md)

True, if the total price depends on the shipping method

### is\_test?

> `readonly` `optional` **is\_test**: [`Bool$Input`](Bool$Input.md)

True, if the payment is a test payment

### max\_tip\_amount?

> `readonly` `optional` **max\_tip\_amount**: [`int53`](int53-1.md)

The maximum allowed amount of tip in the smallest units of the currency

### need\_email\_address?

> `readonly` `optional` **need\_email\_address**: [`Bool$Input`](Bool$Input.md)

True, if the user's email address is needed for payment

### need\_name?

> `readonly` `optional` **need\_name**: [`Bool$Input`](Bool$Input.md)

True, if the user's name is needed for payment

### need\_phone\_number?

> `readonly` `optional` **need\_phone\_number**: [`Bool$Input`](Bool$Input.md)

True, if the user's phone number is needed for payment

### need\_shipping\_address?

> `readonly` `optional` **need\_shipping\_address**: [`Bool$Input`](Bool$Input.md)

True, if the user's shipping address is needed for payment

### price\_parts?

> `readonly` `optional` **price\_parts**: [`vector$Input`](vector$Input.md)\<[`labeledPricePart$Input`](labeledPricePart$Input-1.md)\>

A list of objects used to calculate the total price of the product

### recurring\_payment\_terms\_of\_service\_url?

> `readonly` `optional` **recurring\_payment\_terms\_of\_service\_url**: `string`

An HTTP URL with terms of service for recurring payments. If non-empty, the invoice payment will result in recurring payments and the user must accept the terms of service before allowed to pay

### send\_email\_address\_to\_provider?

> `readonly` `optional` **send\_email\_address\_to\_provider**: [`Bool$Input`](Bool$Input.md)

True, if the user's email address will be sent to the provider

### send\_phone\_number\_to\_provider?

> `readonly` `optional` **send\_phone\_number\_to\_provider**: [`Bool$Input`](Bool$Input.md)

True, if the user's phone number will be sent to the provider

### suggested\_tip\_amounts?

> `readonly` `optional` **suggested\_tip\_amounts**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Suggested amounts of tip in the smallest units of the currency

### terms\_of\_service\_url?

> `readonly` `optional` **terms\_of\_service\_url**: `string`

An HTTP URL with terms of service for non-recurring payments. If non-empty, then the user must accept the terms of service before allowed to pay

## Defined in

dist/generated/types.d.ts:22599
