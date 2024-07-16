[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starRevenueStatus

# Type Alias: starRevenueStatus

> **starRevenueStatus**: `object`

Contains information about Telegram stars earned by a bot or a chat

## Type declaration

### \_

> **\_**: `"starRevenueStatus"`

### available\_count

> **available\_count**: [`int53`](int53-1.md)

The number of Telegram stars that are available for withdrawal

### current\_count

> **current\_count**: [`int53`](int53-1.md)

The number of Telegram stars that aren't withdrawn yet

### next\_withdrawal\_in

> **next\_withdrawal\_in**: [`int32`](int32-1.md)

Time left before the next withdrawal can be started, in seconds; 0 if withdrawal can be started now

### total\_count

> **total\_count**: [`int53`](int53-1.md)

Total number of the stars earned

### withdrawal\_enabled

> **withdrawal\_enabled**: [`Bool`](Bool.md)

True, if Telegram stars can be withdrawn now or later

## Defined in

dist/generated/types.d.ts:52231
