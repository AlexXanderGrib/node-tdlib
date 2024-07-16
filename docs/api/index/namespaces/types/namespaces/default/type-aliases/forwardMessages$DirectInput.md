[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / forwardMessages$DirectInput

# Type Alias: forwardMessages$DirectInput

> **forwardMessages$DirectInput**: `object`

Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in message_ids. If a message can't be forwarded, null will be returned instead of the message

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which to forward messages

### from\_chat\_id?

> `readonly` `optional` **from\_chat\_id**: [`int53`](int53-1.md)

Identifier of the chat from which to forward messages

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the messages to forward. Message identifiers must be in a strictly increasing order. At most 100 messages can be forwarded simultaneously. A message can be forwarded only if message.can_be_forwarded

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

If not 0, the message thread identifier in which the message will be sent; for forum threads only

### options?

> `readonly` `optional` **options**: [`messageSendOptions$Input`](messageSendOptions$Input-1.md) \| `null`

Options to be used to send the messages; pass null to use default options

### remove\_caption?

> `readonly` `optional` **remove\_caption**: [`Bool$Input`](Bool$Input.md)

Pass true to remove media captions of message copies. Ignored if send_copy is false

### send\_copy?

> `readonly` `optional` **send\_copy**: [`Bool$Input`](Bool$Input.md)

Pass true to copy content of the messages without reference to the original sender. Always true if the messages are forwarded to a secret chat or are local

## Defined in

dist/generated/types.d.ts:78407
