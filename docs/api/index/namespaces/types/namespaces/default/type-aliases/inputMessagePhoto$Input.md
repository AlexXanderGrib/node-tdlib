[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessagePhoto$Input

# Type Alias: inputMessagePhoto$Input

> **inputMessagePhoto$Input**: `object`

Version of [inputMessagePhoto](inputMessagePhoto.md) for method parameters.

A photo message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessagePhoto"`

### added\_sticker\_file\_ids?

> `readonly` `optional` **added\_sticker\_file\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

File identifiers of the stickers added to the photo, if applicable

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Photo caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### has\_spoiler?

> `readonly` `optional` **has\_spoiler**: [`Bool$Input`](Bool$Input.md)

True, if the photo preview must be covered by a spoiler animation; not supported in secret chats

### height?

> `readonly` `optional` **height**: [`int32`](int32-1.md)

Photo height

### photo?

> `readonly` `optional` **photo**: [`InputFile$Input`](InputFile$Input.md)

Photo to send. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20

### self\_destruct\_type?

> `readonly` `optional` **self\_destruct\_type**: [`MessageSelfDestructType$Input`](MessageSelfDestructType$Input.md) \| `null`

Photo self-destruct type; pass null if none; private chats only

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the photo; otherwise, the caption must be shown below the photo; not supported in secret chats

### thumbnail?

> `readonly` `optional` **thumbnail**: [`inputThumbnail$Input`](inputThumbnail$Input-1.md) \| `null`

Photo thumbnail to be sent; pass null to skip thumbnail uploading. The thumbnail is sent to the other party only in secret chats

### width?

> `readonly` `optional` **width**: [`int32`](int32-1.md)

Photo width

## Defined in

dist/generated/types.d.ts:29612
