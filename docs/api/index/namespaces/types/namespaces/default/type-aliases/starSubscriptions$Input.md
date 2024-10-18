[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / starSubscriptions$Input

# Type Alias: starSubscriptions$Input

> **starSubscriptions$Input**: `object`

Version of [starSubscriptions](starSubscriptions.md) for method parameters.

Represents a list of Telegram Star subscriptions

## Type declaration

### \_

> `readonly` **\_**: `"starSubscriptions"`

### next\_offset?

> `readonly` `optional` **next\_offset**: `string`

The offset for the next request. If empty, then there are no more results

### required\_star\_count?

> `readonly` `optional` **required\_star\_count**: [`int53`](int53.md)

The number of Telegram Stars required to buy to extend subscriptions expiring soon

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53.md)

The amount of owned Telegram Stars

### subscriptions?

> `readonly` `optional` **subscriptions**: [`vector$Input`](vector$Input.md)\<[`starSubscription$Input`](starSubscription$Input.md)\>

List of subbscriptions for Telegram Stars

## Defined in

dist/generated/types.d.ts:8125
