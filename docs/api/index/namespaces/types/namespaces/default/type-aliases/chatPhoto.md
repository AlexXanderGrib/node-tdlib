[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatPhoto

# Type Alias: chatPhoto

> **chatPhoto**: `object`

Describes a chat or user profile photo

## Type declaration

### \_

> **\_**: `"chatPhoto"`

### added\_date

> **added\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the photo has been added

### animation

> **animation**: [`animatedChatPhoto`](animatedChatPhoto.md) \| `null`

A big (up to 1280x1280) animated variant of the photo in MPEG4 format; may be null

### id

> **id**: [`int64`](int64.md)

Unique photo identifier

### minithumbnail

> **minithumbnail**: [`minithumbnail`](minithumbnail.md) \| `null`

Photo minithumbnail; may be null

### sizes

> **sizes**: [`vector`](vector.md)\<[`photoSize`](photoSize.md)\>

Available variants of the photo in JPEG format, in different size

### small\_animation

> **small\_animation**: [`animatedChatPhoto`](animatedChatPhoto.md) \| `null`

A small (160x160) animated variant of the photo in MPEG4 format; may be null even the big animation is available

### sticker

> **sticker**: [`chatPhotoSticker`](chatPhotoSticker.md) \| `null`

Sticker-based version of the chat photo; may be null

## Defined in

dist/generated/types.d.ts:7427
