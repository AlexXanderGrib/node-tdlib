[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authenticationCodeTypeMissedCall

# Type Alias: authenticationCodeTypeMissedCall

> **authenticationCodeTypeMissedCall**: `object`

An authentication code is delivered by an immediately canceled call to the specified phone number. The last digits of the phone number that calls are the code that must be entered manually by the user

## Type declaration

### \_

> **\_**: `"authenticationCodeTypeMissedCall"`

### length

> **length**: [`int32`](int32.md)

Number of digits in the code, excluding the prefix

### phone\_number\_prefix

> **phone\_number\_prefix**: `string`

Prefix of the phone number from which the call will be made

## Defined in

dist/generated/types.d.ts:2683
