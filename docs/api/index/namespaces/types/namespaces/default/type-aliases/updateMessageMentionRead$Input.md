[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageMentionRead$Input

# Type Alias: updateMessageMentionRead$Input

> **updateMessageMentionRead$Input**: `object`

Version of [updateMessageMentionRead](updateMessageMentionRead.md) for method parameters.

A message with an unread mention was read

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageMentionRead"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

### unread\_mention\_count?

> `readonly` `optional` **unread\_mention\_count**: [`int32`](int32.md)

The new number of unread mention messages left in the chat

## Defined in

dist/generated/types.d.ts:54654
