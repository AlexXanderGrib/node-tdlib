[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageReadDate$Input

# Type Alias: getMessageReadDate$Input

> **getMessageReadDate$Input**: `object`

Returns read date of a recent outgoing message in a private chat. The method can be called if message.can_get_read_date == true and the message is read

## Type declaration

### \_

> `readonly` **\_**: `"getMessageReadDate"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

## Defined in

dist/generated/types.d.ts:74850
