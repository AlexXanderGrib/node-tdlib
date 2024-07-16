[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageEdited$Input

# Type Alias: updateMessageEdited$Input

> **updateMessageEdited$Input**: `object`

Version of [updateMessageEdited](updateMessageEdited.md) for method parameters.

A message was edited. Changes in the message content will come in a separate updateMessageContent

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageEdited"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### edit\_date?

> `readonly` `optional` **edit\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was edited

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

New message reply markup; may be null

## Defined in

dist/generated/types.d.ts:52867
