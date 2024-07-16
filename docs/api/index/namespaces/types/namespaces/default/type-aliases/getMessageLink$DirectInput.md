[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageLink$DirectInput

# Type Alias: getMessageLink$DirectInput

> **getMessageLink$DirectInput**: `object`

Returns an HTTPS link to a message in a chat. Available only for already sent messages in supergroups and channels, or if message.can_get_media_timestamp_links and a media timestamp link is generated. This is an offline request

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the message belongs

### for\_album?

> `readonly` `optional` **for\_album**: [`Bool$Input`](Bool$Input.md)

Pass true to create a link for the whole media album

### in\_message\_thread?

> `readonly` `optional` **in\_message\_thread**: [`Bool$Input`](Bool$Input.md)

Pass true to create a link to the message as a channel post comment, in a message thread, or a forum topic

### media\_timestamp?

> `readonly` `optional` **media\_timestamp**: [`int32`](int32-1.md)

If not 0, timestamp from which the video/audio/video note/voice note/story playing must start, in seconds. The media can be in the message content or in its link preview

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

## Defined in

dist/generated/types.d.ts:77689
