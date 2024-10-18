[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostStatus

# Type Alias: chatBoostStatus

> **chatBoostStatus**: `object`

Describes current boost status of a chat

## Type declaration

### \_

> **\_**: `"chatBoostStatus"`

### applied\_slot\_ids

> **applied\_slot\_ids**: [`vector`](vector.md)\<[`int32`](int32.md)\>

Identifiers of boost slots of the current user applied to the chat

### boost\_count

> **boost\_count**: [`int32`](int32.md)

The number of boosts received by the chat

### boost\_url

> **boost\_url**: `string`

An HTTP URL, which can be used to boost the chat

### current\_level\_boost\_count

> **current\_level\_boost\_count**: [`int32`](int32.md)

The number of boosts added to reach the current level

### gift\_code\_boost\_count

> **gift\_code\_boost\_count**: [`int32`](int32.md)

The number of boosts received by the chat from created Telegram Premium gift codes and giveaways; always 0 if the current user isn't an administrator in the chat

### level

> **level**: [`int32`](int32.md)

Current boost level of the chat

### next\_level\_boost\_count

> **next\_level\_boost\_count**: [`int32`](int32.md)

The number of boosts needed to reach the next level; 0 if the next level isn't available

### premium\_member\_count

> **premium\_member\_count**: [`int32`](int32.md)

Approximate number of Telegram Premium subscribers joined the chat; always 0 if the current user isn't an administrator in the chat

### premium\_member\_percentage

> **premium\_member\_percentage**: [`double`](double.md)

A percentage of Telegram Premium subscribers joined the chat; always 0 if the current user isn't an administrator in the chat

### prepaid\_giveaways

> **prepaid\_giveaways**: [`vector`](vector.md)\<[`prepaidPremiumGiveaway`](prepaidPremiumGiveaway.md)\>

The list of prepaid giveaways available for the chat; only for chat administrators

## Defined in

dist/generated/types.d.ts:35521
