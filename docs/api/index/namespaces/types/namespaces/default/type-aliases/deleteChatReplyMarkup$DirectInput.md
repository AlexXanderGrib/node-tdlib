[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteChatReplyMarkup$DirectInput

# Type Alias: deleteChatReplyMarkup$DirectInput

> **deleteChatReplyMarkup$DirectInput**: `object`

Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a replyMarkupForceReply reply markup has been used. An updateChatReplyMarkup update will be sent if the reply markup is changed

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

The message identifier of the used keyboard

## Defined in

dist/generated/types.d.ts:83537
