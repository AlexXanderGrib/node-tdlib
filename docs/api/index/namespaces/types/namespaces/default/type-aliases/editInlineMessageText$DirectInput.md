[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editInlineMessageText$DirectInput

# Type Alias: editInlineMessageText$DirectInput

> **editInlineMessageText$DirectInput**: `object`

Edits the text of an inline text or game message sent via a bot; for bots only

## Type declaration

### inline\_message\_id?

> `readonly` `optional` **inline\_message\_id**: `string`

Inline message identifier

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

New text content of the message. Must be of type inputMessageText

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

## Defined in

dist/generated/types.d.ts:81140
