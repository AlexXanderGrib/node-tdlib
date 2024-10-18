[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatReplyMarkup$Input

# Type Alias: updateChatReplyMarkup$Input

> **updateChatReplyMarkup$Input**: `object`

Version of [updateChatReplyMarkup](updateChatReplyMarkup.md) for method parameters.

The default chat reply markup was changed. Can occur because new messages with reply markup were received or because an old reply markup was hidden by the user

## Type declaration

### \_

> `readonly` **\_**: `"updateChatReplyMarkup"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### reply\_markup\_message\_id?

> `readonly` `optional` **reply\_markup\_message\_id**: [`int53`](int53.md)

Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the chat

## Defined in

dist/generated/types.d.ts:55555
