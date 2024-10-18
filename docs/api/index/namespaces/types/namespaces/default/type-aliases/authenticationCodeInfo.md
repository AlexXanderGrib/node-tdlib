[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authenticationCodeInfo

# Type Alias: authenticationCodeInfo

> **authenticationCodeInfo**: `object`

Information about the authentication code that was sent

## Type declaration

### \_

> **\_**: `"authenticationCodeInfo"`

### next\_type

> **next\_type**: [`AuthenticationCodeType`](AuthenticationCodeType.md) \| `null`

The way the next code will be sent to the user; may be null

### phone\_number

> **phone\_number**: `string`

A phone number that is being authenticated

### timeout

> **timeout**: [`int32`](int32.md)

Timeout before the code can be re-sent, in seconds

### type

> **type**: [`AuthenticationCodeType`](AuthenticationCodeType.md)

The way the code was sent to the user

## Defined in

dist/generated/types.d.ts:2829
