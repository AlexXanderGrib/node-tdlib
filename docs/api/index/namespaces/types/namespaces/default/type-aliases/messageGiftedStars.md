[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageGiftedStars

# Type Alias: messageGiftedStars

> **messageGiftedStars**: `object`

Telegram Stars were gifted to a user

## Type declaration

### \_

> **\_**: `"messageGiftedStars"`

### amount

> **amount**: [`int53`](int53.md)

The paid amount, in the smallest units of the currency

### cryptocurrency

> **cryptocurrency**: `string`

Cryptocurrency used to pay for the gift; may be empty if none

### cryptocurrency\_amount

> **cryptocurrency\_amount**: [`int64`](int64.md)

The paid amount, in the smallest units of the cryptocurrency; 0 if none

### currency

> **currency**: `string`

Currency for the paid amount

### gifter\_user\_id

> **gifter\_user\_id**: [`int53`](int53.md)

The identifier of a user that gifted Telegram Stars; 0 if the gift was anonymous or is outgoing

### receiver\_user\_id

> **receiver\_user\_id**: [`int53`](int53.md)

The identifier of a user that received Telegram Stars; 0 if the gift is incoming

### star\_count

> **star\_count**: [`int53`](int53.md)

Number of Telegram Stars that were gifted

### sticker

> **sticker**: [`sticker`](sticker.md) \| `null`

A sticker to be shown in the message; may be null if unknown

### transaction\_id

> **transaction\_id**: `string`

Identifier of the transaction for Telegram Stars purchase; for receiver only

## Defined in

dist/generated/types.d.ts:28967
