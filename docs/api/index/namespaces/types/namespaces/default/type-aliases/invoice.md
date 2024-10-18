[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / invoice

# Type Alias: invoice

> **invoice**: `object`

Product invoice

## Type declaration

### \_

> **\_**: `"invoice"`

### currency

> **currency**: `string`

ISO 4217 currency code

### is\_flexible

> **is\_flexible**: [`Bool`](Bool.md)

True, if the total price depends on the shipping method

### is\_test

> **is\_test**: [`Bool`](Bool.md)

True, if the payment is a test payment

### max\_tip\_amount

> **max\_tip\_amount**: [`int53`](int53.md)

The maximum allowed amount of tip in the smallest units of the currency

### need\_email\_address

> **need\_email\_address**: [`Bool`](Bool.md)

True, if the user's email address is needed for payment

### need\_name

> **need\_name**: [`Bool`](Bool.md)

True, if the user's name is needed for payment

### need\_phone\_number

> **need\_phone\_number**: [`Bool`](Bool.md)

True, if the user's phone number is needed for payment

### need\_shipping\_address

> **need\_shipping\_address**: [`Bool`](Bool.md)

True, if the user's shipping address is needed for payment

### price\_parts

> **price\_parts**: [`vector`](vector.md)\<[`labeledPricePart`](labeledPricePart.md)\>

A list of objects used to calculate the total price of the product

### recurring\_payment\_terms\_of\_service\_url

> **recurring\_payment\_terms\_of\_service\_url**: `string`

An HTTP URL with terms of service for recurring payments. If non-empty, the invoice payment will result in recurring payments and the user must accept the terms of service before allowed to pay

### send\_email\_address\_to\_provider

> **send\_email\_address\_to\_provider**: [`Bool`](Bool.md)

True, if the user's email address will be sent to the provider

### send\_phone\_number\_to\_provider

> **send\_phone\_number\_to\_provider**: [`Bool`](Bool.md)

True, if the user's phone number will be sent to the provider

### suggested\_tip\_amounts

> **suggested\_tip\_amounts**: [`vector`](vector.md)\<[`int53`](int53.md)\>

Suggested amounts of tip in the smallest units of the currency

### terms\_of\_service\_url

> **terms\_of\_service\_url**: `string`

An HTTP URL with terms of service for non-recurring payments. If non-empty, then the user must accept the terms of service before allowed to pay

## Defined in

dist/generated/types.d.ts:23281
