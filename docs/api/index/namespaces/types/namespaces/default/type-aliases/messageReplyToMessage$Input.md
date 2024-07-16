[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageReplyToMessage$Input

# Type Alias: messageReplyToMessage$Input

> **messageReplyToMessage$Input**: `object`

Version of [messageReplyToMessage](messageReplyToMessage.md) for method parameters.

Describes a message replied by a given message

## Type declaration

### \_

> `readonly` **\_**: `"messageReplyToMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The identifier of the chat to which the message belongs; may be 0 if the replied message is in unknown chat

### content?

> `readonly` `optional` **content**: [`MessageContent$Input`](MessageContent$Input.md) \| `null`

Media content of the message if the message was from another chat or topic; may be null for messages from the same chat and messages without media.

- Can be only one of the following types: messageAnimation, messageAudio, messageContact, messageDice, messageDocument, messageGame, messageInvoice, messageLocation,

- messagePaidMedia, messagePhoto, messagePoll, messagePremiumGiveaway, messagePremiumGiveawayWinners, messageSticker, messageStory, messageText (for link preview),

- messageVenue, messageVideo, messageVideoNote, or messageVoiceNote

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

The identifier of the message; may be 0 if the replied message is in unknown chat

### origin?

> `readonly` `optional` **origin**: [`MessageOrigin$Input`](MessageOrigin$Input.md) \| `null`

Information about origin of the message if the message was from another chat or topic; may be null for messages from the same chat

### origin\_send\_date?

> `readonly` `optional` **origin\_send\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was sent if the message was from another chat or topic; 0 for messages from the same chat

### quote?

> `readonly` `optional` **quote**: [`textQuote$Input`](textQuote$Input-1.md) \| `null`

Chosen quote from the replied message; may be null if none

## Defined in

dist/generated/types.d.ts:13179
