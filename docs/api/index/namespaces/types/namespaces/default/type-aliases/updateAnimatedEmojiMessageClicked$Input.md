[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateAnimatedEmojiMessageClicked$Input

# Type Alias: updateAnimatedEmojiMessageClicked$Input

> **updateAnimatedEmojiMessageClicked$Input**: `object`

Version of [updateAnimatedEmojiMessageClicked](updateAnimatedEmojiMessageClicked.md) for method parameters.

Some animated emoji message was clicked and a big animated sticker must be played if the message is visible on the screen. chatActionWatchingAnimations with the text of the message needs to be sent if the sticker is played

## Type declaration

### \_

> `readonly` **\_**: `"updateAnimatedEmojiMessageClicked"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

### sticker?

> `readonly` `optional` **sticker**: [`sticker$Input`](sticker$Input-1.md)

The animated sticker to be played

## Defined in

dist/generated/types.d.ts:56936
