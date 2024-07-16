[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStarWithdrawalUrl$Input

# Type Alias: getStarWithdrawalUrl$Input

> **getStarWithdrawalUrl$Input**: `object`

Returns a URL for Telegram star withdrawal

## Type declaration

### \_

> `readonly` **\_**: `"getStarWithdrawalUrl"`

### owner\_id?

> `readonly` `optional` **owner\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the owner of the Telegram stars; can be identifier of an owned bot, or identifier of an owned channel chat

### password?

> `readonly` `optional` **password**: `string`

The 2-step verification password of the current user

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53-1.md)

The number of Telegram stars to withdraw. Must be at least getOption("star_withdrawal_count_min")

## Defined in

dist/generated/types.d.ts:98477
