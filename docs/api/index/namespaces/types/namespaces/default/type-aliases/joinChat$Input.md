[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / joinChat$Input

# Type Alias: joinChat$Input

> **joinChat$Input**: `object`

Adds the current user as a new member to a chat. Private and secret chats can't be joined using this method. May return an error with a message "INVITE_REQUEST_SENT" if only a join request was created

## Type declaration

### \_

> `readonly` **\_**: `"joinChat"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

## Defined in

dist/generated/types.d.ts:86277
