[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / premiumGiftCodeInfo$Input

# Type Alias: premiumGiftCodeInfo$Input

> **premiumGiftCodeInfo$Input**: `object`

Version of [premiumGiftCodeInfo](premiumGiftCodeInfo-1.md) for method parameters.

Contains information about a Telegram Premium gift code

## Type declaration

### \_

> `readonly` **\_**: `"premiumGiftCodeInfo"`

### creation\_date?

> `readonly` `optional` **creation\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the code was created

### creator\_id?

> `readonly` `optional` **creator\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of a chat or a user that created the gift code; may be null if unknown. If null and the code is from messagePremiumGiftCode message, then creator_id from the message can be used

### giveaway\_message\_id?

> `readonly` `optional` **giveaway\_message\_id**: [`int53`](int53-1.md)

Identifier of the corresponding giveaway message in the creator_id chat; can be 0 or an identifier of a deleted message

### is\_from\_giveaway?

> `readonly` `optional` **is\_from\_giveaway**: [`Bool$Input`](Bool$Input.md)

True, if the gift code was created for a giveaway

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active after code activation

### use\_date?

> `readonly` `optional` **use\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the code was activated; 0 if none

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of a user for which the code was created; 0 if none

## Defined in

dist/generated/types.d.ts:8216
