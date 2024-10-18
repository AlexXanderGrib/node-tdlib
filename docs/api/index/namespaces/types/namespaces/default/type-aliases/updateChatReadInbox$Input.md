[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatReadInbox$Input

# Type Alias: updateChatReadInbox$Input

> **updateChatReadInbox$Input**: `object`

Version of [updateChatReadInbox](updateChatReadInbox.md) for method parameters.

Incoming messages were read or the number of unread messages has been changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatReadInbox"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### last\_read\_inbox\_message\_id?

> `readonly` `optional` **last\_read\_inbox\_message\_id**: [`int53`](int53.md)

Identifier of the last read incoming message

### unread\_count?

> `readonly` `optional` **unread\_count**: [`int32`](int32.md)

The number of unread messages left in the chat

## Defined in

dist/generated/types.d.ts:55166
