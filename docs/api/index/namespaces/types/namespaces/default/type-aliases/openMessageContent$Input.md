[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / openMessageContent$Input

# Type Alias: openMessageContent$Input

> **openMessageContent$Input**: `object`

Informs TDLib that the message content has been opened (e.g., the user has opened a photo, video, document, location or venue, or has listened to an audio file or voice note message).

- An updateMessageContentOpened update will be generated if something has changed

## Type declaration

### \_

> `readonly` **\_**: `"openMessageContent"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier of the message

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message with the opened content

## Defined in

dist/generated/types.d.ts:83739
