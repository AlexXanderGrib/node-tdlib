[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / phoneNumberInfo

# Type Alias: phoneNumberInfo

> **phoneNumberInfo**: `object`

Contains information about a phone number

## Type declaration

### \_

> **\_**: `"phoneNumberInfo"`

### country

> **country**: [`countryInfo`](countryInfo-1.md) \| `null`

Information about the country to which the phone number belongs; may be null

### country\_calling\_code

> **country\_calling\_code**: `string`

The part of the phone number denoting country calling code or its part

### formatted\_phone\_number

> **formatted\_phone\_number**: `string`

The phone number without country calling code formatted accordingly to local rules. Expected digits are returned as '-', but even more digits might be entered by the user

### is\_anonymous

> **is\_anonymous**: [`Bool`](Bool.md)

True, if the phone number was bought at https://fragment.com and isn't tied to a SIM card. Information about the phone number can be received using getCollectibleItemInfo

## Defined in

dist/generated/types.d.ts:21961
