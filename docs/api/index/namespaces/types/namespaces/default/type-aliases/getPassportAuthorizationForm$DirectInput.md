[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getPassportAuthorizationForm$DirectInput

# Type Alias: getPassportAuthorizationForm$DirectInput

> **getPassportAuthorizationForm$DirectInput**: `object`

Returns a Telegram Passport authorization form for sharing data with a service

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

User identifier of the service's bot

### nonce?

> `readonly` `optional` **nonce**: `string`

Unique request identifier provided by the service

### public\_key?

> `readonly` `optional` **public\_key**: `string`

Service's public key

### scope?

> `readonly` `optional` **scope**: `string`

Telegram Passport element types requested by the service

## Defined in

dist/generated/types.d.ts:99522
