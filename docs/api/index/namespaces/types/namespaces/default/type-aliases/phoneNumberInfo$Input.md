[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / phoneNumberInfo$Input

# Type Alias: phoneNumberInfo$Input

> **phoneNumberInfo$Input**: `object`

Version of [phoneNumberInfo](phoneNumberInfo.md) for method parameters.

Contains information about a phone number

## Type declaration

### \_

> `readonly` **\_**: `"phoneNumberInfo"`

### country?

> `readonly` `optional` **country**: [`countryInfo$Input`](countryInfo$Input.md) \| `null`

Information about the country to which the phone number belongs; may be null

### country\_calling\_code?

> `readonly` `optional` **country\_calling\_code**: `string`

The part of the phone number denoting country calling code or its part

### formatted\_phone\_number?

> `readonly` `optional` **formatted\_phone\_number**: `string`

The phone number without country calling code formatted accordingly to local rules. Expected digits are returned as '-', but even more digits might be entered by the user

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

True, if the phone number was bought at https://fragment.com and isn't tied to a SIM card. Information about the phone number can be received using getCollectibleItemInfo

## Defined in

dist/generated/types.d.ts:22749
