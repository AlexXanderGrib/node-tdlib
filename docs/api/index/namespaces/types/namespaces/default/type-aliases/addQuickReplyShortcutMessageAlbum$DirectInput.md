[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addQuickReplyShortcutMessageAlbum$DirectInput

# Type Alias: addQuickReplyShortcutMessageAlbum$DirectInput

> **addQuickReplyShortcutMessageAlbum$DirectInput**: `object`

Adds 2-10 messages grouped together into an album to a quick reply shortcut. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

## Type declaration

### input\_message\_contents?

> `readonly` `optional` **input\_message\_contents**: [`vector$Input`](vector$Input.md)\<[`InputMessageContent$Input`](InputMessageContent$Input.md)\>

Contents of messages to be sent. At most 10 messages can be added to an album. All messages must have the same value of show_caption_above_media

### reply\_to\_message\_id?

> `readonly` `optional` **reply\_to\_message\_id**: [`int53`](int53-1.md)

Identifier of a quick reply message in the same shortcut to be replied; pass 0 if none

### shortcut\_name?

> `readonly` `optional` **shortcut\_name**: `string`

Name of the target shortcut

## Defined in

dist/generated/types.d.ts:80480
