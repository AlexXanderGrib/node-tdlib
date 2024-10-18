[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / stopPoll$Input

# Type Alias: stopPoll$Input

> **stopPoll$Input**: `object`

Stops a poll

## Type declaration

### \_

> `readonly` **\_**: `"stopPoll"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the poll belongs

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message containing the poll. Use messageProperties.can_be_edited to check whether the poll can be stopped

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none; for bots only

## Defined in

dist/generated/types.d.ts:84365
