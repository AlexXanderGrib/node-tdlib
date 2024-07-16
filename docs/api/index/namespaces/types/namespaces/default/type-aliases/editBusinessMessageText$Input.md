[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editBusinessMessageText$Input

# Type Alias: editBusinessMessageText$Input

> **editBusinessMessageText$Input**: `object`

Edits the text of a text or game message sent on behalf of a business account; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"editBusinessMessageText"`

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which the message was sent

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The chat the message belongs to

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

New text content of the message. Must be of type inputMessageText

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

## Defined in

dist/generated/types.d.ts:79690
