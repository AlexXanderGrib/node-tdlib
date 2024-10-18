[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starRevenueStatus

# Type Alias: starRevenueStatus

> **starRevenueStatus**: `object`

Contains information about Telegram Stars earned by a bot or a chat

## Type declaration

### \_

> **\_**: `"starRevenueStatus"`

### available\_count

> **available\_count**: [`int53`](int53.md)

The number of Telegram Stars that are available for withdrawal

### current\_count

> **current\_count**: [`int53`](int53.md)

The number of Telegram Stars that aren't withdrawn yet

### next\_withdrawal\_in

> **next\_withdrawal\_in**: [`int32`](int32.md)

Time left before the next withdrawal can be started, in seconds; 0 if withdrawal can be started now

### total\_count

> **total\_count**: [`int53`](int53.md)

Total number of Telegram Stars earned

### withdrawal\_enabled

> **withdrawal\_enabled**: [`Bool`](Bool.md)

True, if Telegram Stars can be withdrawn now or later

## Defined in

dist/generated/types.d.ts:53847
