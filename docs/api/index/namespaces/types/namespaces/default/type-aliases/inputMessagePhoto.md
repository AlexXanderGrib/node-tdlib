[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessagePhoto

# Type Alias: inputMessagePhoto

> **inputMessagePhoto**: `object`

A photo message

## Type declaration

### \_

> **\_**: `"inputMessagePhoto"`

### added\_sticker\_file\_ids

> **added\_sticker\_file\_ids**: [`vector`](vector.md)\<[`int32`](int32.md)\>

File identifiers of the stickers added to the photo, if applicable

### caption

> **caption**: [`formattedText`](formattedText.md) \| `null`

Photo caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### has\_spoiler

> **has\_spoiler**: [`Bool`](Bool.md)

True, if the photo preview must be covered by a spoiler animation; not supported in secret chats

### height

> **height**: [`int32`](int32.md)

Photo height

### photo

> **photo**: [`InputFile`](InputFile.md)

Photo to send. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20

### self\_destruct\_type

> **self\_destruct\_type**: [`MessageSelfDestructType`](MessageSelfDestructType.md) \| `null`

Photo self-destruct type; pass null if none; private chats only

### show\_caption\_above\_media

> **show\_caption\_above\_media**: [`Bool`](Bool.md)

True, if the caption must be shown above the photo; otherwise, the caption must be shown below the photo; not supported in secret chats

### thumbnail

> **thumbnail**: [`inputThumbnail`](inputThumbnail.md) \| `null`

Photo thumbnail to be sent; pass null to skip thumbnail uploading. The thumbnail is sent to the other party only in secret chats

### width

> **width**: [`int32`](int32.md)

Photo width

## Defined in

dist/generated/types.d.ts:30433
