[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendInlineQueryResultMessage$Input

# Type Alias: sendInlineQueryResultMessage$Input

> **sendInlineQueryResultMessage$Input**: `object`

Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message

## Type declaration

### \_

> `readonly` **\_**: `"sendInlineQueryResultMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Target chat

### hide\_via\_bot?

> `readonly` `optional` **hide\_via\_bot**: [`Bool$Input`](Bool$Input.md)

Pass true to hide the bot, via which the message is sent. Can be used only for bots getOption("animation_search_bot_username"), getOption("photo_search_bot_username"), and getOption("venue_search_bot_username")

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

If not 0, the message thread identifier in which the message will be sent

### options?

> `readonly` `optional` **options**: [`messageSendOptions$Input`](messageSendOptions$Input.md) \| `null`

Options to be used to send the message; pass null to use default options

### query\_id?

> `readonly` `optional` **query\_id**: [`int64$Input`](int64$Input.md)

Identifier of the inline query

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message or story to be replied; pass null if none

### result\_id?

> `readonly` `optional` **result\_id**: `string`

Identifier of the inline query result

## Defined in

dist/generated/types.d.ts:80287
