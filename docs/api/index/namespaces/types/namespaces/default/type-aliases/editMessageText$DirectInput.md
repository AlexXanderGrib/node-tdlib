[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageText$DirectInput

# Type Alias: editMessageText$DirectInput

> **editMessageText$DirectInput**: `object`

Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the server side

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The chat the message belongs to

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

New text content of the message. Must be of type inputMessageText

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message. Use messageProperties.can_be_edited to check whether the message can be edited

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none; for bots only

## Defined in

dist/generated/types.d.ts:80803
