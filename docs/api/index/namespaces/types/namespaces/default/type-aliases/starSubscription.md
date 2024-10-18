[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starSubscription

# Type Alias: starSubscription

> **starSubscription**: `object`

Contains information about subscription to a channel chat paid in Telegram Stars

## Type declaration

### \_

> **\_**: `"starSubscription"`

### can\_reuse

> **can\_reuse**: [`Bool`](Bool.md)

True, if the subscription is active and the user can use the method reuseStarSubscription to join the subscribed chat again

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Identifier of the channel chat that is subscribed

### expiration\_date

> **expiration\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the subscription will expire or expired

### id

> **id**: `string`

Unique identifier of the subscription

### invite\_link

> **invite\_link**: `string`

The invite link that can be used to renew the subscription if it has been expired; may be empty, if the link isn't available anymore

### is\_canceled

> **is\_canceled**: [`Bool`](Bool.md)

True, if the subscription was canceled

### is\_expiring

> **is\_expiring**: [`Bool`](Bool.md)

True, if the subscription expires soon and there are no enough Telegram Stars on the user's balance to extend it

### pricing

> **pricing**: [`starSubscriptionPricing`](starSubscriptionPricing.md)

The subscription plan

## Defined in

dist/generated/types.d.ts:8003
