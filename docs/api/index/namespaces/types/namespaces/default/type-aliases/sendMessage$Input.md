[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendMessage$Input

# Type Alias: sendMessage$Input

> **sendMessage$Input**: `object`

Sends a message. Returns the sent message

## Type declaration

### \_

> `readonly` **\_**: `"sendMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Target chat

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

If not 0, the message thread identifier in which the message will be sent

### options?

> `readonly` `optional` **options**: [`messageSendOptions$Input`](messageSendOptions$Input.md) \| `null`

Options to be used to send the message; pass null to use default options

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

Markup for replying to the message; pass null if none; for bots only

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message or story to be replied; pass null if none

## Defined in

dist/generated/types.d.ts:80081
