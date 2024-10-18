[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportChatSponsoredMessage$Input

# Type Alias: reportChatSponsoredMessage$Input

> **reportChatSponsoredMessage$Input**: `object`

Reports a sponsored message to Telegram moderators

## Type declaration

### \_

> `readonly` **\_**: `"reportChatSponsoredMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier of the sponsored message

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the sponsored message

### option\_id?

> `readonly` `optional` **option\_id**: [`bytes$Input`](bytes$Input.md)

Option identifier chosen by the user; leave empty for the initial request

## Defined in

dist/generated/types.d.ts:79543
