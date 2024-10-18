[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageUsersShared$Input

# Type Alias: messageUsersShared$Input

> **messageUsersShared$Input**: `object`

Version of [messageUsersShared](messageUsersShared.md) for method parameters.

The current user shared users, which were requested by the bot

## Type declaration

### \_

> `readonly` **\_**: `"messageUsersShared"`

### button\_id?

> `readonly` `optional` **button\_id**: [`int32`](int32.md)

Identifier of the keyboard button with the request

### users?

> `readonly` `optional` **users**: [`vector$Input`](vector$Input.md)\<[`sharedUser$Input`](sharedUser$Input.md)\>

The shared users

## Defined in

dist/generated/types.d.ts:29103
