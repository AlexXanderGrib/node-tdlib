[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatActionBarJoinRequest$Input

# Type Alias: chatActionBarJoinRequest$Input

> **chatActionBarJoinRequest$Input**: `object`

Version of [chatActionBarJoinRequest](chatActionBarJoinRequest.md) for method parameters.

The chat is a private chat with an administrator of a chat to which the user sent join request

## Type declaration

### \_

> `readonly` **\_**: `"chatActionBarJoinRequest"`

### is\_channel?

> `readonly` `optional` **is\_channel**: [`Bool$Input`](Bool$Input.md)

True, if the join request was sent to a channel chat

### request\_date?

> `readonly` `optional` **request\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the join request was sent

### title?

> `readonly` `optional` **title**: `string`

Title of the chat to which the join request was sent

## Defined in

dist/generated/types.d.ts:17084
