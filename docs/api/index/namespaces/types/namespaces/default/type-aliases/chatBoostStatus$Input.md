[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostStatus$Input

# Type Alias: chatBoostStatus$Input

> **chatBoostStatus$Input**: `object`

Version of [chatBoostStatus](chatBoostStatus.md) for method parameters.

Describes current boost status of a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatBoostStatus"`

### applied\_slot\_ids?

> `readonly` `optional` **applied\_slot\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

Identifiers of boost slots of the current user applied to the chat

### boost\_count?

> `readonly` `optional` **boost\_count**: [`int32`](int32.md)

The number of boosts received by the chat

### boost\_url?

> `readonly` `optional` **boost\_url**: `string`

An HTTP URL, which can be used to boost the chat

### current\_level\_boost\_count?

> `readonly` `optional` **current\_level\_boost\_count**: [`int32`](int32.md)

The number of boosts added to reach the current level

### gift\_code\_boost\_count?

> `readonly` `optional` **gift\_code\_boost\_count**: [`int32`](int32.md)

The number of boosts received by the chat from created Telegram Premium gift codes and giveaways; always 0 if the current user isn't an administrator in the chat

### level?

> `readonly` `optional` **level**: [`int32`](int32.md)

Current boost level of the chat

### next\_level\_boost\_count?

> `readonly` `optional` **next\_level\_boost\_count**: [`int32`](int32.md)

The number of boosts needed to reach the next level; 0 if the next level isn't available

### premium\_member\_count?

> `readonly` `optional` **premium\_member\_count**: [`int32`](int32.md)

Approximate number of Telegram Premium subscribers joined the chat; always 0 if the current user isn't an administrator in the chat

### premium\_member\_percentage?

> `readonly` `optional` **premium\_member\_percentage**: [`double`](double.md)

A percentage of Telegram Premium subscribers joined the chat; always 0 if the current user isn't an administrator in the chat

### prepaid\_giveaways?

> `readonly` `optional` **prepaid\_giveaways**: [`vector$Input`](vector$Input.md)\<[`prepaidPremiumGiveaway$Input`](prepaidPremiumGiveaway$Input.md)\>

The list of prepaid giveaways available for the chat; only for chat administrators

## Defined in

dist/generated/types.d.ts:35579
