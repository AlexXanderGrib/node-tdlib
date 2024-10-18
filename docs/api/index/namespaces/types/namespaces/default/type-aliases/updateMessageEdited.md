[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageEdited

# Type Alias: updateMessageEdited

> **updateMessageEdited**: `object`

A message was edited. Changes in the message content will come in a separate updateMessageContent

## Type declaration

### \_

> **\_**: `"updateMessageEdited"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### edit\_date

> **edit\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message was edited

### message\_id

> **message\_id**: [`int53`](int53.md)

Message identifier

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

New message reply markup; may be null

## Defined in

dist/generated/types.d.ts:54455
