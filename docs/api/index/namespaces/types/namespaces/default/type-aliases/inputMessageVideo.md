[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageVideo

# Type Alias: inputMessageVideo

> **inputMessageVideo**: `object`

A video message

## Type declaration

### \_

> **\_**: `"inputMessageVideo"`

### added\_sticker\_file\_ids

> **added\_sticker\_file\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

File identifiers of the stickers added to the video, if applicable

### caption

> **caption**: [`formattedText`](formattedText-1.md) \| `null`

Video caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### duration

> **duration**: [`int32`](int32-1.md)

Duration of the video, in seconds

### has\_spoiler

> **has\_spoiler**: [`Bool`](Bool.md)

True, if the video preview must be covered by a spoiler animation; not supported in secret chats

### height

> **height**: [`int32`](int32-1.md)

Video height

### self\_destruct\_type

> **self\_destruct\_type**: [`MessageSelfDestructType`](MessageSelfDestructType.md) \| `null`

Video self-destruct type; pass null if none; private chats only

### show\_caption\_above\_media

> **show\_caption\_above\_media**: [`Bool`](Bool.md)

True, if the caption must be shown above the video; otherwise, the caption must be shown below the video; not supported in secret chats

### supports\_streaming

> **supports\_streaming**: [`Bool`](Bool.md)

True, if the video is supposed to be streamed

### thumbnail

> **thumbnail**: [`inputThumbnail`](inputThumbnail-1.md) \| `null`

Video thumbnail; pass null to skip thumbnail uploading

### video

> **video**: [`InputFile`](InputFile.md)

Video to be sent

### width

> **width**: [`int32`](int32-1.md)

Video width

## Defined in

dist/generated/types.d.ts:29727
