[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatAction$Input

# Type Alias: updateChatAction$Input

> **updateChatAction$Input**: `object`

Version of [updateChatAction](updateChatAction.md) for method parameters.

A message sender activity in the chat has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatAction"`

### action?

> `readonly` `optional` **action**: [`ChatAction$Input`](ChatAction$Input.md)

The action

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

If not 0, the message thread identifier in which the action was performed

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of a message sender performing the action

## Defined in

dist/generated/types.d.ts:54959
