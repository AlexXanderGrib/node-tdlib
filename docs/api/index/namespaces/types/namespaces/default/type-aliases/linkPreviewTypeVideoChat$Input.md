[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeVideoChat$Input

# Type Alias: linkPreviewTypeVideoChat$Input

> **linkPreviewTypeVideoChat$Input**: `object`

Version of [linkPreviewTypeVideoChat](linkPreviewTypeVideoChat.md) for method parameters.

The link is a link to a video chat

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeVideoChat"`

### is\_live\_stream?

> `readonly` `optional` **is\_live\_stream**: [`Bool$Input`](Bool$Input.md)

True, if the video chat is expected to be a live stream in a channel or a broadcast group

### photo?

> `readonly` `optional` **photo**: [`chatPhoto$Input`](chatPhoto$Input-1.md) \| `null`

Photo of the chat with the video chat; may be null if none

## Defined in

dist/generated/types.d.ts:21661
