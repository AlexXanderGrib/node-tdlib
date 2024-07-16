[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / termsOfService$Input

# Type Alias: termsOfService$Input

> **termsOfService$Input**: `object`

Version of [termsOfService](termsOfService-1.md) for method parameters.

Contains Telegram terms of service

## Type declaration

### \_

> `readonly` **\_**: `"termsOfService"`

### min\_user\_age?

> `readonly` `optional` **min\_user\_age**: [`int32`](int32-1.md)

The minimum age of a user to be able to accept the terms; 0 if age isn't restricted

### show\_popup?

> `readonly` `optional` **show\_popup**: [`Bool$Input`](Bool$Input.md)

True, if a blocking popup with terms of service must be shown to the user

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Text of the terms of service

## Defined in

dist/generated/types.d.ts:3120
