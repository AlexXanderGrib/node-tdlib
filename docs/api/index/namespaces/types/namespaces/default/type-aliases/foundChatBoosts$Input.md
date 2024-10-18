[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / foundChatBoosts$Input

# Type Alias: foundChatBoosts$Input

> **foundChatBoosts$Input**: `object`

Version of [foundChatBoosts](foundChatBoosts.md) for method parameters.

Contains a list of boosts applied to a chat

## Type declaration

### \_

> `readonly` **\_**: `"foundChatBoosts"`

### boosts?

> `readonly` `optional` **boosts**: [`vector$Input`](vector$Input.md)\<[`chatBoost$Input`](chatBoost$Input.md)\>

List of boosts

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Total number of boosts applied to the chat

## Defined in

dist/generated/types.d.ts:35722
