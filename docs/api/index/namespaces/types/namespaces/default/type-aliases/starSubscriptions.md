[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starSubscriptions

# Type Alias: starSubscriptions

> **starSubscriptions**: `object`

Represents a list of Telegram Star subscriptions

## Type declaration

### \_

> **\_**: `"starSubscriptions"`

### next\_offset

> **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### required\_star\_count

> **required\_star\_count**: [`int53`](int53.md)

The number of Telegram Stars required to buy to extend subscriptions expiring soon

### star\_count

> **star\_count**: [`int53`](int53.md)

The amount of owned Telegram Stars

### subscriptions

> **subscriptions**: [`vector`](vector.md)\<[`starSubscription`](starSubscription.md)\>

List of subbscriptions for Telegram Stars

## Defined in

dist/generated/types.d.ts:8097
