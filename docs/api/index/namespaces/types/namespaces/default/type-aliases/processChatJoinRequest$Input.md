[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / processChatJoinRequest$Input

# Type Alias: processChatJoinRequest$Input

> **processChatJoinRequest$Input**: `object`

Handles a pending join request in a chat

## Type declaration

### \_

> `readonly` **\_**: `"processChatJoinRequest"`

### approve?

> `readonly` `optional` **approve**: [`Bool$Input`](Bool$Input.md)

Pass true to approve the request; pass false to decline it

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of the user that sent the request

## Defined in

dist/generated/types.d.ts:90287
