[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / stopBusinessPoll$DirectInput

# Type Alias: stopBusinessPoll$DirectInput

> **stopBusinessPoll$DirectInput**: `object`

Stops a poll sent on behalf of a business account; for bots only

## Type declaration

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which the message with the poll was sent

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message containing the poll

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

The new message reply markup; pass null if none

## Defined in

dist/generated/types.d.ts:80090
