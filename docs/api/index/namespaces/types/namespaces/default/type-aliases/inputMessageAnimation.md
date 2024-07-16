[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageAnimation

# Type Alias: inputMessageAnimation

> **inputMessageAnimation**: `object`

An animation message (GIF-style).

## Type declaration

### \_

> **\_**: `"inputMessageAnimation"`

### added\_sticker\_file\_ids

> **added\_sticker\_file\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

File identifiers of the stickers added to the animation, if applicable

### animation

> **animation**: [`InputFile`](InputFile.md)

Animation file to be sent

### caption

> **caption**: [`formattedText`](formattedText-1.md) \| `null`

Animation caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration

> **duration**: [`int32`](int32-1.md)

Duration of the animation, in seconds

### has\_spoiler

> **has\_spoiler**: [`Bool`](Bool.md)

True, if the animation preview must be covered by a spoiler animation; not supported in secret chats

### height

> **height**: [`int32`](int32-1.md)

Height of the animation; may be replaced by the server

### show\_caption\_above\_media

> **show\_caption\_above\_media**: [`Bool`](Bool.md)

True, if the caption must be shown above the animation; otherwise, the caption must be shown below the animation; not supported in secret chats

### thumbnail

> **thumbnail**: [`inputThumbnail`](inputThumbnail-1.md) \| `null`

Animation thumbnail; pass null to skip thumbnail uploading

### width

> **width**: [`int32`](int32-1.md)

Width of the animation; may be replaced by the server

## Defined in

dist/generated/types.d.ts:29273
