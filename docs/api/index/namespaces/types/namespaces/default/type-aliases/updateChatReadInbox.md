[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatReadInbox

# Type Alias: updateChatReadInbox

> **updateChatReadInbox**: `object`

Incoming messages were read or the number of unread messages has been changed

## Type declaration

### \_

> **\_**: `"updateChatReadInbox"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### last\_read\_inbox\_message\_id

> **last\_read\_inbox\_message\_id**: [`int53`](int53-1.md)

Identifier of the last read incoming message

### unread\_count

> **unread\_count**: [`int32`](int32-1.md)

The number of unread messages left in the chat

## Defined in

dist/generated/types.d.ts:53527
