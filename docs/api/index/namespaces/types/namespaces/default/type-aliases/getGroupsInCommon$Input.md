[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getGroupsInCommon$Input

# Type Alias: getGroupsInCommon$Input

> **getGroupsInCommon$Input**: `object`

Returns a list of common group chats with a given user. Chats are sorted by their type and creation date

## Type declaration

### \_

> `readonly` **\_**: `"getGroupsInCommon"`

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of chats to be returned; up to 100

### offset\_chat\_id?

> `readonly` `optional` **offset\_chat\_id**: [`int53`](int53-1.md)

Chat identifier starting from which to return chats; use 0 for the first request

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

User identifier

## Defined in

dist/generated/types.d.ts:76003
