[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageLinkInfo

# Type Alias: messageLinkInfo

> **messageLinkInfo**: `object`

Contains information about a link to a message or a forum topic in a chat

## Type declaration

### \_

> **\_**: `"messageLinkInfo"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

If found, identifier of the chat to which the link points, 0 otherwise

### for\_album

> **for\_album**: [`Bool`](Bool.md)

True, if the whole media album to which the message belongs is linked

### is\_public

> **is\_public**: [`Bool`](Bool.md)

True, if the link is a public link for a message or a forum topic in a chat

### media\_timestamp

> **media\_timestamp**: [`int32`](int32.md)

Timestamp from which the video/audio/video note/voice note/story playing must start, in seconds; 0 if not specified. The media can be in the message content or in its link preview

### message

> **message**: [`message`](message.md) \| `null`

If found, the linked message; may be null

### message\_thread\_id

> **message\_thread\_id**: [`int53`](int53.md)

If found, identifier of the message thread in which to open the message, or a forum topic to open if the message is missing

## Defined in

dist/generated/types.d.ts:50323
