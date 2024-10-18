[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authenticationCodeInfo$Input

# Type Alias: authenticationCodeInfo$Input

> **authenticationCodeInfo$Input**: `object`

Version of [authenticationCodeInfo](authenticationCodeInfo.md) for method parameters.

Information about the authentication code that was sent

## Type declaration

### \_

> `readonly` **\_**: `"authenticationCodeInfo"`

### next\_type?

> `readonly` `optional` **next\_type**: [`AuthenticationCodeType$Input`](AuthenticationCodeType$Input.md) \| `null`

The way the next code will be sent to the user; may be null

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

A phone number that is being authenticated

### timeout?

> `readonly` `optional` **timeout**: [`int32`](int32.md)

Timeout before the code can be re-sent, in seconds

### type?

> `readonly` `optional` **type**: [`AuthenticationCodeType$Input`](AuthenticationCodeType$Input.md)

The way the code was sent to the user

## Defined in

dist/generated/types.d.ts:2857
