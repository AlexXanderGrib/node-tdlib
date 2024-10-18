[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatJoinRequest$Input

# Type Alias: chatJoinRequest$Input

> **chatJoinRequest$Input**: `object`

Version of [chatJoinRequest](chatJoinRequest.md) for method parameters.

Describes a user that sent a join request and waits for administrator approval

## Type declaration

### \_

> `readonly` **\_**: `"chatJoinRequest"`

### bio?

> `readonly` `optional` **bio**: `string`

A short bio of the user

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the user sent the join request

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

User identifier

## Defined in

dist/generated/types.d.ts:11584
