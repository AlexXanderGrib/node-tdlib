[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / assignGooglePlayTransaction$Input

# Type Alias: assignGooglePlayTransaction$Input

> **assignGooglePlayTransaction$Input**: `object`

Informs server about a purchase through Google Play. For official applications only

## Type declaration

### \_

> `readonly` **\_**: `"assignGooglePlayTransaction"`

### package\_name?

> `readonly` `optional` **package\_name**: `string`

Application package name

### purchase\_token?

> `readonly` `optional` **purchase\_token**: `string`

Google Play purchase token

### purpose?

> `readonly` `optional` **purpose**: [`StorePaymentPurpose$Input`](StorePaymentPurpose$Input.md)

Transaction purpose

### store\_product\_id?

> `readonly` `optional` **store\_product\_id**: `string`

Identifier of the purchased store product

## Defined in

dist/generated/types.d.ts:100872
