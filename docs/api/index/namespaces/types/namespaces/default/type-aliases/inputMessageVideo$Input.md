[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageVideo$Input

# Type Alias: inputMessageVideo$Input

> **inputMessageVideo$Input**: `object`

Version of [inputMessageVideo](inputMessageVideo.md) for method parameters.

A video message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageVideo"`

### added\_sticker\_file\_ids?

> `readonly` `optional` **added\_sticker\_file\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

File identifiers of the stickers added to the video, if applicable

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Video caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

Duration of the video, in seconds

### has\_spoiler?

> `readonly` `optional` **has\_spoiler**: [`Bool$Input`](Bool$Input.md)

True, if the video preview must be covered by a spoiler animation; not supported in secret chats

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Video height

### self\_destruct\_type?

> `readonly` `optional` **self\_destruct\_type**: [`MessageSelfDestructType$Input`](MessageSelfDestructType$Input.md) \| `null`

Video self-destruct type; pass null if none; private chats only

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the video; otherwise, the caption must be shown below the video; not supported in secret chats

### supports\_streaming?

> `readonly` `optional` **supports\_streaming**: [`Bool$Input`](Bool$Input.md)

True, if the video is supposed to be streamed

### thumbnail?

> `readonly` `optional` **thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input-1.md) \| `null`

Video thumbnail; pass null to skip thumbnail uploading

### video?

> `readonly` `optional` **video**: [`InputFile$Input`](InputFile$Input.md)

Video to be sent

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Video width

## Defined in

dist/generated/types.d.ts:29790
