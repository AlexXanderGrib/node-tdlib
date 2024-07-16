[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatMessageAutoDeleteTime$Input

# Type Alias: setChatMessageAutoDeleteTime$Input

> **setChatMessageAutoDeleteTime$Input**: `object`

Changes the message auto-delete or self-destruct (for secret chats) time in a chat. Requires change_info administrator right in basic groups, supergroups and channels

- Message auto-delete time can't be changed in a chat with the current user (Saved Messages) and the chat 777000 (Telegram).

## Type declaration

### \_

> `readonly` **\_**: `"setChatMessageAutoDeleteTime"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_auto\_delete\_time?

> `readonly` `optional` **message\_auto\_delete\_time**: [`int32`](int32-1.md)

New time value, in seconds; unless the chat is secret, it must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically

## Defined in

dist/generated/types.d.ts:85337
