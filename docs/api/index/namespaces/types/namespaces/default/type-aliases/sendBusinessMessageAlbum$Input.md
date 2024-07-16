[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendBusinessMessageAlbum$Input

# Type Alias: sendBusinessMessageAlbum$Input

> **sendBusinessMessageAlbum$Input**: `object`

Sends 2-10 messages grouped together into an album on behalf of a business account; for bots only. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

## Type declaration

### \_

> `readonly` **\_**: `"sendBusinessMessageAlbum"`

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which to send the request

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Target chat

### disable\_notification?

> `readonly` `optional` **disable\_notification**: [`Bool$Input`](Bool$Input.md)

Pass true to disable notification for the message

### effect\_id?

> `readonly` `optional` **effect\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the effect to apply to the message

### input\_message\_contents?

> `readonly` `optional` **input\_message\_contents**: [`vector$Input`](vector$Input.md)\<[`InputMessageContent$Input`](InputMessageContent$Input.md)\>

Contents of messages to be sent. At most 10 messages can be added to an album. All messages must have the same value of show_caption_above_media

### protect\_content?

> `readonly` `optional` **protect\_content**: [`Bool$Input`](Bool$Input.md)

Pass true if the content of the message must be protected from forwarding and saving

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message to be replied; pass null if none

## Defined in

dist/generated/types.d.ts:79598
