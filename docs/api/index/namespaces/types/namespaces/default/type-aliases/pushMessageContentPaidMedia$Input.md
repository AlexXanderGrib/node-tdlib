[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentPaidMedia$Input

# Type Alias: pushMessageContentPaidMedia$Input

> **pushMessageContentPaidMedia$Input**: `object`

Version of [pushMessageContentPaidMedia](pushMessageContentPaidMedia.md) for method parameters.

A message with paid media

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentPaidMedia"`

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53.md)

Number of Telegram Stars needed to buy access to the media in the message; 0 for pinned message

## Defined in

dist/generated/types.d.ts:45995
