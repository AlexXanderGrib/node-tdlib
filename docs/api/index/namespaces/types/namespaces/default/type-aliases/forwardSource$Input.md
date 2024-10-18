[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forwardSource$Input

# Type Alias: forwardSource$Input

> **forwardSource$Input**: `object`

Version of [forwardSource](forwardSource.md) for method parameters.

Contains information about the last message from which a new message was forwarded last time

## Type declaration

### \_

> `readonly` **\_**: `"forwardSource"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message that was forwarded belonged; may be 0 if unknown

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message is sent; 0 if unknown

### is\_outgoing?

> `readonly` `optional` **is\_outgoing**: [`Bool$Input`](Bool$Input.md)

True, if the message that was forwarded is outgoing; always false if sender is unknown

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message; may be 0 if unknown

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of the sender of the message; may be null if unknown or the new message was forwarded not to Saved Messages

### sender\_name?

> `readonly` `optional` **sender\_name**: `string`

Name of the sender of the message if the sender is hidden by their privacy settings

## Defined in

dist/generated/types.d.ts:13009
