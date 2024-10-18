[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starRevenueStatus$Input

# Type Alias: starRevenueStatus$Input

> **starRevenueStatus$Input**: `object`

Version of [starRevenueStatus](starRevenueStatus.md) for method parameters.

Contains information about Telegram Stars earned by a bot or a chat

## Type declaration

### \_

> `readonly` **\_**: `"starRevenueStatus"`

### available\_count?

> `readonly` `optional` **available\_count**: [`int53`](int53.md)

The number of Telegram Stars that are available for withdrawal

### current\_count?

> `readonly` `optional` **current\_count**: [`int53`](int53.md)

The number of Telegram Stars that aren't withdrawn yet

### next\_withdrawal\_in?

> `readonly` `optional` **next\_withdrawal\_in**: [`int32`](int32.md)

Time left before the next withdrawal can be started, in seconds; 0 if withdrawal can be started now

### total\_count?

> `readonly` `optional` **total\_count**: [`int53`](int53.md)

Total number of Telegram Stars earned

### withdrawal\_enabled?

> `readonly` `optional` **withdrawal\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if Telegram Stars can be withdrawn now or later

## Defined in

dist/generated/types.d.ts:53880
