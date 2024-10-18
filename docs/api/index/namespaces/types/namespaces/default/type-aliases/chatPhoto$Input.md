[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatPhoto$Input

# Type Alias: chatPhoto$Input

> **chatPhoto$Input**: `object`

Version of [chatPhoto](chatPhoto.md) for method parameters.

Describes a chat or user profile photo

## Type declaration

### \_

> `readonly` **\_**: `"chatPhoto"`

### added\_date?

> `readonly` `optional` **added\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the photo has been added

### animation?

> `readonly` `optional` **animation**: [`animatedChatPhoto$Input`](animatedChatPhoto$Input.md) \| `null`

A big (up to 1280x1280) animated variant of the photo in MPEG4 format; may be null

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique photo identifier

### minithumbnail?

> `readonly` `optional` **minithumbnail**: [`minithumbnail$Input`](minithumbnail$Input.md) \| `null`

Photo minithumbnail; may be null

### sizes?

> `readonly` `optional` **sizes**: [`vector$Input`](vector$Input.md)\<[`photoSize$Input`](photoSize$Input.md)\>

Available variants of the photo in JPEG format, in different size

### small\_animation?

> `readonly` `optional` **small\_animation**: [`animatedChatPhoto$Input`](animatedChatPhoto$Input.md) \| `null`

A small (160x160) animated variant of the photo in MPEG4 format; may be null even the big animation is available

### sticker?

> `readonly` `optional` **sticker**: [`chatPhotoSticker$Input`](chatPhotoSticker$Input.md) \| `null`

Sticker-based version of the chat photo; may be null

## Defined in

dist/generated/types.d.ts:7470
