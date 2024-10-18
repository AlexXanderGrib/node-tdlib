[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatRevenueWithdrawalUrl$DirectInput

# Type Alias: getChatRevenueWithdrawalUrl$DirectInput

> **getChatRevenueWithdrawalUrl$DirectInput**: `object`

Returns a URL for chat revenue withdrawal; requires owner privileges in the chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true and getOption("can_withdraw_chat_revenue")

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### password?

> `readonly` `optional` **password**: `string`

The 2-step verification password of the current user

## Defined in

dist/generated/types.d.ts:101148
