[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageReplyMarkup$DirectInput

# Type Alias: editMessageReplyMarkup$DirectInput

> **editMessageReplyMarkup$DirectInput**: `object`

Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server side.

- Can be used only if message.can_be_edited == true

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

## Defined in

dist/generated/types.d.ts:79099
