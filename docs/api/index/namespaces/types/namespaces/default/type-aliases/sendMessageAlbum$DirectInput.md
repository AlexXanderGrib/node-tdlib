[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendMessageAlbum$DirectInput

# Type Alias: sendMessageAlbum$DirectInput

> **sendMessageAlbum$DirectInput**: `object`

Sends 2-10 messages grouped together into an album. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Target chat

### input\_message\_contents?

> `readonly` `optional` **input\_message\_contents**: [`vector$Input`](vector$Input.md)\<[`InputMessageContent$Input`](InputMessageContent$Input.md)\>

Contents of messages to be sent. At most 10 messages can be added to an album. All messages must have the same value of show_caption_above_media

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

If not 0, the message thread identifier in which the messages will be sent

### options?

> `readonly` `optional` **options**: [`messageSendOptions$Input`](messageSendOptions$Input-1.md) \| `null`

Options to be used to send the messages; pass null to use default options

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message or story to be replied; pass null if none

## Defined in

dist/generated/types.d.ts:78185
