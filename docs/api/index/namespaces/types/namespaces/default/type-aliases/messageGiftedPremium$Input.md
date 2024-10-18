[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageGiftedPremium$Input

# Type Alias: messageGiftedPremium$Input

> **messageGiftedPremium$Input**: `object`

Version of [messageGiftedPremium](messageGiftedPremium.md) for method parameters.

Telegram Premium was gifted to a user

## Type declaration

### \_

> `readonly` **\_**: `"messageGiftedPremium"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53.md)

The paid amount, in the smallest units of the currency

### cryptocurrency?

> `readonly` `optional` **cryptocurrency**: `string`

Cryptocurrency used to pay for the gift; may be empty if none

### cryptocurrency\_amount?

> `readonly` `optional` **cryptocurrency\_amount**: [`int64$Input`](int64$Input.md)

The paid amount, in the smallest units of the cryptocurrency; 0 if none

### currency?

> `readonly` `optional` **currency**: `string`

Currency for the paid amount

### gifter\_user\_id?

> `readonly` `optional` **gifter\_user\_id**: [`int53`](int53.md)

The identifier of a user that gifted Telegram Premium; 0 if the gift was anonymous or is outgoing

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32.md)

Number of months the Telegram Premium subscription will be active

### receiver\_user\_id?

> `readonly` `optional` **receiver\_user\_id**: [`int53`](int53.md)

The identifier of a user that received Telegram Premium; 0 if the gift is incoming

### sticker?

> `readonly` `optional` **sticker**: [`sticker$Input`](sticker$Input.md) \| `null`

A sticker to be shown in the message; may be null if unknown

## Defined in

dist/generated/types.d.ts:28571
