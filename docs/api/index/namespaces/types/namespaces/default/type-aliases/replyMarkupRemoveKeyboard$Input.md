[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / replyMarkupRemoveKeyboard$Input

# Type Alias: replyMarkupRemoveKeyboard$Input

> **replyMarkupRemoveKeyboard$Input**: `object`

Version of [replyMarkupRemoveKeyboard](replyMarkupRemoveKeyboard.md) for method parameters.

Instructs application to remove the keyboard once this message has been received. This kind of keyboard can't be received in an incoming message; instead, updateChatReplyMarkup with message_id == 0 will be sent

## Type declaration

### \_

> `readonly` **\_**: `"replyMarkupRemoveKeyboard"`

### is\_personal?

> `readonly` `optional` **is\_personal**: [`Bool$Input`](Bool$Input.md)

True, if the keyboard is removed only for the mentioned users or the target user of a reply

## Defined in

dist/generated/types.d.ts:17760
