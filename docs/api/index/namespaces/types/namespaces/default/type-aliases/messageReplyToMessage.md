[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageReplyToMessage

# Type Alias: messageReplyToMessage

> **messageReplyToMessage**: `object`

Describes a message replied by a given message

## Type declaration

### \_

> **\_**: `"messageReplyToMessage"`

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

The identifier of the chat to which the message belongs; may be 0 if the replied message is in unknown chat

### content

> **content**: [`MessageContent`](MessageContent.md) \| `null`

Media content of the message if the message was from another chat or topic; may be null for messages from the same chat and messages without media.

- Can be only one of the following types: messageAnimation, messageAudio, messageContact, messageDice, messageDocument, messageGame, messageInvoice, messageLocation,

- messagePaidMedia, messagePhoto, messagePoll, messagePremiumGiveaway, messagePremiumGiveawayWinners, messageSticker, messageStory, messageText (for link preview),

- messageVenue, messageVideo, messageVideoNote, or messageVoiceNote

### message\_id

> **message\_id**: [`int53`](int53-1.md)

The identifier of the message; may be 0 if the replied message is in unknown chat

### origin

> **origin**: [`MessageOrigin`](MessageOrigin.md) \| `null`

Information about origin of the message if the message was from another chat or topic; may be null for messages from the same chat

### origin\_send\_date

> **origin\_send\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was sent if the message was from another chat or topic; 0 for messages from the same chat

### quote

> **quote**: [`textQuote`](textQuote-1.md) \| `null`

Chosen quote from the replied message; may be null if none

## Defined in

dist/generated/types.d.ts:13135
