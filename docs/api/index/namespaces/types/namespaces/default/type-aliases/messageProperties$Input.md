[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageProperties$Input

# Type Alias: messageProperties$Input

> **messageProperties$Input**: `object`

Version of [messageProperties](messageProperties.md) for method parameters.

Contains properties of a message and describes actions that can be done with the message right now

## Type declaration

### \_

> `readonly` **\_**: `"messageProperties"`

### can\_be\_deleted\_for\_all\_users?

> `readonly` `optional` **can\_be\_deleted\_for\_all\_users**: [`Bool$Input`](Bool$Input.md)

True, if the message can be deleted for all users using the method deleteMessages with revoke == true

### can\_be\_deleted\_only\_for\_self?

> `readonly` `optional` **can\_be\_deleted\_only\_for\_self**: [`Bool$Input`](Bool$Input.md)

True, if the message can be deleted only for the current user while other users will continue to see it using the method deleteMessages with revoke == false

### can\_be\_edited?

> `readonly` `optional` **can\_be\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the message can be edited using the methods editMessageText, editMessageMedia, editMessageCaption, or editMessageReplyMarkup.

- For live location and poll messages this fields shows whether editMessageLiveLocation or stopPoll can be used with this message

### can\_be\_forwarded?

> `readonly` `optional` **can\_be\_forwarded**: [`Bool$Input`](Bool$Input.md)

True, if the message can be forwarded using inputMessageForwarded or forwardMessages

### can\_be\_paid?

> `readonly` `optional` **can\_be\_paid**: [`Bool$Input`](Bool$Input.md)

True, if the message can be paid using inputInvoiceMessage

### can\_be\_pinned?

> `readonly` `optional` **can\_be\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message can be pinned or unpinned in the chat using pinChatMessage or unpinChatMessage

### can\_be\_replied?

> `readonly` `optional` **can\_be\_replied**: [`Bool$Input`](Bool$Input.md)

True, if the message can be replied in the same chat and forum topic using inputMessageReplyToMessage

### can\_be\_replied\_in\_another\_chat?

> `readonly` `optional` **can\_be\_replied\_in\_another\_chat**: [`Bool$Input`](Bool$Input.md)

True, if the message can be replied in another chat or forum topic using inputMessageReplyToExternalMessage

### can\_be\_saved?

> `readonly` `optional` **can\_be\_saved**: [`Bool$Input`](Bool$Input.md)

True, if content of the message can be saved locally or copied using inputMessageForwarded or forwardMessages with copy options

### can\_be\_shared\_in\_story?

> `readonly` `optional` **can\_be\_shared\_in\_story**: [`Bool$Input`](Bool$Input.md)

True, if the message can be shared in a story using inputStoryAreaTypeMessage

### can\_edit\_scheduling\_state?

> `readonly` `optional` **can\_edit\_scheduling\_state**: [`Bool$Input`](Bool$Input.md)

True, if scheduling state of the message can be edited

### can\_get\_embedding\_code?

> `readonly` `optional` **can\_get\_embedding\_code**: [`Bool$Input`](Bool$Input.md)

True, if code for message embedding can be received using getMessageEmbeddingCode

### can\_get\_link?

> `readonly` `optional` **can\_get\_link**: [`Bool$Input`](Bool$Input.md)

True, if a link can be generated for the message using getMessageLink

### can\_get\_media\_timestamp\_links?

> `readonly` `optional` **can\_get\_media\_timestamp\_links**: [`Bool$Input`](Bool$Input.md)

True, if media timestamp links can be generated for media timestamp entities in the message text, caption or link preview description using getMessageLink

### can\_get\_message\_thread?

> `readonly` `optional` **can\_get\_message\_thread**: [`Bool$Input`](Bool$Input.md)

True, if information about the message thread is available through getMessageThread and getMessageThreadHistory

### can\_get\_read\_date?

> `readonly` `optional` **can\_get\_read\_date**: [`Bool$Input`](Bool$Input.md)

True, if read date of the message can be received through getMessageReadDate

### can\_get\_statistics?

> `readonly` `optional` **can\_get\_statistics**: [`Bool$Input`](Bool$Input.md)

True, if message statistics are available through getMessageStatistics and message forwards can be received using getMessagePublicForwards

### can\_get\_viewers?

> `readonly` `optional` **can\_get\_viewers**: [`Bool$Input`](Bool$Input.md)

True, if chat members already viewed the message can be received through getMessageViewers

### can\_recognize\_speech?

> `readonly` `optional` **can\_recognize\_speech**: [`Bool$Input`](Bool$Input.md)

True, if speech can be recognized for the message through recognizeSpeech

### can\_report\_chat?

> `readonly` `optional` **can\_report\_chat**: [`Bool$Input`](Bool$Input.md)

True, if the message can be reported using reportChat

### can\_report\_reactions?

> `readonly` `optional` **can\_report\_reactions**: [`Bool$Input`](Bool$Input.md)

True, if reactions on the message can be reported through reportMessageReactions

### can\_report\_supergroup\_spam?

> `readonly` `optional` **can\_report\_supergroup\_spam**: [`Bool$Input`](Bool$Input.md)

True, if the message can be reported using reportSupergroupSpam

### can\_set\_fact\_check?

> `readonly` `optional` **can\_set\_fact\_check**: [`Bool$Input`](Bool$Input.md)

True, if fact check for the message can be changed through setMessageFactCheck

### need\_show\_statistics?

> `readonly` `optional` **need\_show\_statistics**: [`Bool$Input`](Bool$Input.md)

True, if message statistics must be available from context menu of the message

## Defined in

dist/generated/types.d.ts:31469
