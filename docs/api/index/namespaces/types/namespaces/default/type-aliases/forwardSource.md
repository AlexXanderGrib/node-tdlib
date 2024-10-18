[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forwardSource

# Type Alias: forwardSource

> **forwardSource**: `object`

Contains information about the last message from which a new message was forwarded last time

## Type declaration

### \_

> **\_**: `"forwardSource"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message that was forwarded belonged; may be 0 if unknown

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message is sent; 0 if unknown

### is\_outgoing

> **is\_outgoing**: [`Bool`](Bool.md)

True, if the message that was forwarded is outgoing; always false if sender is unknown

### message\_id

> **message\_id**: [`int53`](int53.md)

Identifier of the message; may be 0 if unknown

### sender\_id

> **sender\_id**: [`MessageSender`](MessageSender.md) \| `null`

Identifier of the sender of the message; may be null if unknown or the new message was forwarded not to Saved Messages

### sender\_name

> **sender\_name**: `string`

Name of the sender of the message if the sender is hidden by their privacy settings

## Defined in

dist/generated/types.d.ts:12971
