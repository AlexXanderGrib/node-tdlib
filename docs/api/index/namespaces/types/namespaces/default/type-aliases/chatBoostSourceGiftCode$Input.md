[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostSourceGiftCode$Input

# Type Alias: chatBoostSourceGiftCode$Input

> **chatBoostSourceGiftCode$Input**: `object`

Version of [chatBoostSourceGiftCode](chatBoostSourceGiftCode.md) for method parameters.

The chat created a Telegram Premium gift code for a user

## Type declaration

### \_

> `readonly` **\_**: `"chatBoostSourceGiftCode"`

### gift\_code?

> `readonly` `optional` **gift\_code**: `string`

The created Telegram Premium gift code, which is known only if this is a gift code for the current user, or it has already been claimed

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of a user, for which the gift code was created

## Defined in

dist/generated/types.d.ts:34003
