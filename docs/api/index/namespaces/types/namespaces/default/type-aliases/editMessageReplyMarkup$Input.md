[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageReplyMarkup$Input

# Type Alias: editMessageReplyMarkup$Input

> **editMessageReplyMarkup$Input**: `object`

Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server side

## Type declaration

### \_

> `readonly` **\_**: `"editMessageReplyMarkup"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message. Use messageProperties.can_be_edited to check whether the message can be edited

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

## Defined in

dist/generated/types.d.ts:81071
