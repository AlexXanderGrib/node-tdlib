[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoost$Input

# Type Alias: chatBoost$Input

> **chatBoost$Input**: `object`

Version of [chatBoost](chatBoost.md) for method parameters.

Describes a boost applied to a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatBoost"`

### count?

> `readonly` `optional` **count**: [`int32`](int32.md)

The number of identical boosts applied

### expiration\_date?

> `readonly` `optional` **expiration\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the boost will expire

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the boost

### source?

> `readonly` `optional` **source**: [`ChatBoostSource$Input`](ChatBoostSource$Input.md)

Source of the boost

### start\_date?

> `readonly` `optional` **start\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the chat was boosted

## Defined in

dist/generated/types.d.ts:35668
