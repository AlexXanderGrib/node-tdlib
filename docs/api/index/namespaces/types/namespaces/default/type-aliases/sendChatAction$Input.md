[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendChatAction$Input

# Type Alias: sendChatAction$Input

> **sendChatAction$Input**: `object`

Sends a notification about user activity in a chat

## Type declaration

### \_

> `readonly` **\_**: `"sendChatAction"`

### action?

> `readonly` `optional` **action**: [`ChatAction$Input`](ChatAction$Input.md) \| `null`

The action description; pass null to cancel the currently active action

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which to send the request; for bots only

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

If not 0, the message thread identifier in which the action was performed

## Defined in

dist/generated/types.d.ts:85858
