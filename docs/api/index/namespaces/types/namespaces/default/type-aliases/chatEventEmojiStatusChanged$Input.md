[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventEmojiStatusChanged$Input

# Type Alias: chatEventEmojiStatusChanged$Input

> **chatEventEmojiStatusChanged$Input**: `object`

Version of [chatEventEmojiStatusChanged](chatEventEmojiStatusChanged.md) for method parameters.

The chat emoji status was changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventEmojiStatusChanged"`

### new\_emoji\_status?

> `readonly` `optional` **new\_emoji\_status**: [`emojiStatus$Input`](emojiStatus$Input-1.md) \| `null`

New emoji status; may be null if none

### old\_emoji\_status?

> `readonly` `optional` **old\_emoji\_status**: [`emojiStatus$Input`](emojiStatus$Input-1.md) \| `null`

Previous emoji status; may be null if none

## Defined in

dist/generated/types.d.ts:39667
