[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageAnimation$Input

# Type Alias: inputMessageAnimation$Input

> **inputMessageAnimation$Input**: `object`

Version of [inputMessageAnimation](inputMessageAnimation.md) for method parameters.

An animation message (GIF-style).

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageAnimation"`

### added\_sticker\_file\_ids?

> `readonly` `optional` **added\_sticker\_file\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

File identifiers of the stickers added to the animation, if applicable

### animation?

> `readonly` `optional` **animation**: [`InputFile$Input`](InputFile$Input.md)

Animation file to be sent

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md) \| `null`

Animation caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration?

> `readonly` `optional` **duration**: [`int32`](int32.md)

Duration of the animation, in seconds

### has\_spoiler?

> `readonly` `optional` **has\_spoiler**: [`Bool$Input`](Bool$Input.md)

True, if the animation preview must be covered by a spoiler animation; not supported in secret chats

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Height of the animation; may be replaced by the server

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the animation; otherwise, the caption must be shown below the animation; not supported in secret chats

### thumbnail?

> `readonly` `optional` **thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input.md) \| `null`

Animation thumbnail; pass null to skip thumbnail uploading

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Width of the animation; may be replaced by the server

## Defined in

dist/generated/types.d.ts:30200
