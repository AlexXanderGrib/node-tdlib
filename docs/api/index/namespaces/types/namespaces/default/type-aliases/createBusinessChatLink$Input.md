[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createBusinessChatLink$Input

# Type Alias: createBusinessChatLink$Input

> **createBusinessChatLink$Input**: `object`

Creates a business chat link for the current account. Requires Telegram Business subscription. There can be up to getOption("business_chat_link_count_max") links created. Returns the created link

## Type declaration

### \_

> `readonly` **\_**: `"createBusinessChatLink"`

### link\_info?

> `readonly` `optional` **link\_info**: [`inputBusinessChatLink$Input`](inputBusinessChatLink$Input.md)

Information about the link to create

## Defined in

dist/generated/types.d.ts:97243
