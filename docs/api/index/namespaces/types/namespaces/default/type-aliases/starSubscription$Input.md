[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starSubscription$Input

# Type Alias: starSubscription$Input

> **starSubscription$Input**: `object`

Version of [starSubscription](starSubscription.md) for method parameters.

Contains information about subscription to a channel chat paid in Telegram Stars

## Type declaration

### \_

> `readonly` **\_**: `"starSubscription"`

### can\_reuse?

> `readonly` `optional` **can\_reuse**: [`Bool$Input`](Bool$Input.md)

True, if the subscription is active and the user can use the method reuseStarSubscription to join the subscribed chat again

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the channel chat that is subscribed

### expiration\_date?

> `readonly` `optional` **expiration\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the subscription will expire or expired

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the subscription

### invite\_link?

> `readonly` `optional` **invite\_link**: `string`

The invite link that can be used to renew the subscription if it has been expired; may be empty, if the link isn't available anymore

### is\_canceled?

> `readonly` `optional` **is\_canceled**: [`Bool$Input`](Bool$Input.md)

True, if the subscription was canceled

### is\_expiring?

> `readonly` `optional` **is\_expiring**: [`Bool$Input`](Bool$Input.md)

True, if the subscription expires soon and there are no enough Telegram Stars on the user's balance to extend it

### pricing?

> `readonly` `optional` **pricing**: [`starSubscriptionPricing$Input`](starSubscriptionPricing$Input.md)

The subscription plan

## Defined in

dist/generated/types.d.ts:8051
