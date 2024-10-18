[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getRepliedMessage$Input

# Type Alias: getRepliedMessage$Input

> **getRepliedMessage$Input**: `object`

Returns information about a non-bundled message that is replied by a given message. Also, returns the pinned message, the game message, the invoice message,

- the message with a previously set same background, the giveaway message, and the topic creation message for messages of the types

- messagePinMessage, messageGameScore, messagePaymentSuccessful, messageChatSetBackground, messagePremiumGiveawayCompleted and topic messages without non-bundled replied message respectively

## Type declaration

### \_

> `readonly` **\_**: `"getRepliedMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the reply message

## Defined in

dist/generated/types.d.ts:76640
