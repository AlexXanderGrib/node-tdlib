[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageCopyOptions$Input

# Type Alias: messageCopyOptions$Input

> **messageCopyOptions$Input**: `object`

Version of [messageCopyOptions](messageCopyOptions-1.md) for method parameters.

Options to be used when a message content is copied without reference to the original sender. Service messages, messages with messageInvoice, messagePaidMedia, messagePremiumGiveaway, or messagePremiumGiveawayWinners content can't be copied

## Type declaration

### \_

> `readonly` **\_**: `"messageCopyOptions"`

### new\_caption?

> `readonly` `optional` **new\_caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

New message caption; pass null to copy message without caption. Ignored if replace_caption is false

### new\_show\_caption\_above\_media?

> `readonly` `optional` **new\_show\_caption\_above\_media**: [`Bool$Input`](Bool$Input.md)

True, if new caption must be shown above the animation; otherwise, new caption must be shown below the animation; not supported in secret chats. Ignored if replace_caption is false

### replace\_caption?

> `readonly` `optional` **replace\_caption**: [`Bool$Input`](Bool$Input.md)

True, if media caption of the message copy needs to be replaced. Ignored if send_copy is false

### send\_copy?

> `readonly` `optional` **send\_copy**: [`Bool$Input`](Bool$Input.md)

True, if content of the message needs to be copied without reference to the original sender. Always true if the message is forwarded to a secret chat or is local

## Defined in

dist/generated/types.d.ts:29199
