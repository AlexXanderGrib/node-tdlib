[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getRepliedMessage

# Type Alias: getRepliedMessage()

> **getRepliedMessage**: (`parameters`) => [`Message`](Message-1.md)

Returns information about a non-bundled message that is replied by a given message. Also, returns the pinned message, the game message, the invoice message,

- the message with a previously set same background, the giveaway message, and the topic creation message for messages of the types

- messagePinMessage, messageGameScore, messagePaymentSuccessful, messageChatSetBackground, messagePremiumGiveawayCompleted and topic messages without non-bundled replied message respectively

## Parameters

• **parameters**: [`getRepliedMessage$Input`](getRepliedMessage$Input.md)

[getRepliedMessage$Input](getRepliedMessage$Input.md)

## Returns

[`Message`](Message-1.md)

[Message](Message-1.md)

## Defined in

dist/generated/types.d.ts:76682
