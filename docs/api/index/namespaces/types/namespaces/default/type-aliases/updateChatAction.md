[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatAction

# Type Alias: updateChatAction

> **updateChatAction**: `object`

A message sender activity in the chat has changed

## Type declaration

### \_

> **\_**: `"updateChatAction"`

### action

> **action**: [`ChatAction`](ChatAction.md)

The action

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_thread\_id

> **message\_thread\_id**: [`int53`](int53.md)

If not 0, the message thread identifier in which the action was performed

### sender\_id

> **sender\_id**: [`MessageSender`](MessageSender.md)

Identifier of a message sender performing the action

## Defined in

dist/generated/types.d.ts:56547
