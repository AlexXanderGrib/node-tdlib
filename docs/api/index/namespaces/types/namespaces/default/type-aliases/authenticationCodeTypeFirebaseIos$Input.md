[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authenticationCodeTypeFirebaseIos$Input

# Type Alias: authenticationCodeTypeFirebaseIos$Input

> **authenticationCodeTypeFirebaseIos$Input**: `object`

Version of [authenticationCodeTypeFirebaseIos](authenticationCodeTypeFirebaseIos.md) for method parameters.

A digit-only authentication code is delivered via Firebase Authentication to the official iOS application

## Type declaration

### \_

> `readonly` **\_**: `"authenticationCodeTypeFirebaseIos"`

### length?

> `readonly` `optional` **length**: [`int32`](int32.md)

Length of the code

### push\_timeout?

> `readonly` `optional` **push\_timeout**: [`int32`](int32.md)

Time after the next authentication method is supposed to be used if verification push notification isn't received, in seconds

### receipt?

> `readonly` `optional` **receipt**: `string`

Receipt of successful application token validation to compare with receipt from push notification

## Defined in

dist/generated/types.d.ts:2808
