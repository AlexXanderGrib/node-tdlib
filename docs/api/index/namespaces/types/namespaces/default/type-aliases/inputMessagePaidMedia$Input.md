[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessagePaidMedia$Input

# Type Alias: inputMessagePaidMedia$Input

> **inputMessagePaidMedia$Input**: `object`

Version of [inputMessagePaidMedia](inputMessagePaidMedia.md) for method parameters.

A message with paid media; can be used only in channel chats with supergroupFullInfo.has_paid_media_allowed

## Type declaration

### \_

> `readonly` **\_**: `"inputMessagePaidMedia"`

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Message caption; pass null to use an empty caption; 0-getOption("message_caption_length_max") characters

### paid\_media?

> `readonly` `optional` **paid\_media**: [`vector$Input`](vector$Input.md)\<[`inputPaidMedia$Input`](inputPaidMedia$Input-1.md)\>

The content of the paid media

### show\_caption\_above\_media?

> `readonly` `optional` **show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if the caption must be shown above the video; otherwise, the caption must be shown below the video; not supported in secret chats

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53-1.md)

The number of stars that must be paid to see the media; 1-getOption("paid_media_message_star_count_max")

## Defined in

dist/generated/types.d.ts:29533
