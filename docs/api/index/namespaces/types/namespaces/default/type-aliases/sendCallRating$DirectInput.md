[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendCallRating$DirectInput

# Type Alias: sendCallRating$DirectInput

> **sendCallRating$DirectInput**: `object`

Sends a call rating

## Type declaration

### call\_id?

> `readonly` `optional` **call\_id**: [`int32`](int32-1.md)

Call identifier

### comment?

> `readonly` `optional` **comment**: `string`

An optional user comment if the rating is less than 5

### problems?

> `readonly` `optional` **problems**: [`vector$Input`](vector$Input.md)\<[`CallProblem$Input`](CallProblem$Input.md)\>

List of the exact types of problems with the call, specified by the user

### rating?

> `readonly` `optional` **rating**: [`int32`](int32-1.md)

Call rating; 1-5

## Defined in

dist/generated/types.d.ts:90601
