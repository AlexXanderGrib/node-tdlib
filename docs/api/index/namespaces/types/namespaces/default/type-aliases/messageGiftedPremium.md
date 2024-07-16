[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageGiftedPremium

# Type Alias: messageGiftedPremium

> **messageGiftedPremium**: `object`

Telegram Premium was gifted to the user

## Type declaration

### \_

> **\_**: `"messageGiftedPremium"`

### amount

> **amount**: [`int53`](int53-1.md)

The paid amount, in the smallest units of the currency

### cryptocurrency

> **cryptocurrency**: `string`

Cryptocurrency used to pay for the gift; may be empty if none

### cryptocurrency\_amount

> **cryptocurrency\_amount**: [`int64`](int64-1.md)

The paid amount, in the smallest units of the cryptocurrency; 0 if none

### currency

> **currency**: `string`

Currency for the paid amount

### gifter\_user\_id

> **gifter\_user\_id**: [`int53`](int53-1.md)

The identifier of a user that gifted Telegram Premium; 0 if the gift was anonymous

### month\_count

> **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active

### sticker

> **sticker**: [`sticker`](sticker-1.md) \| `null`

A sticker to be shown in the message; may be null if unknown

## Defined in

dist/generated/types.d.ts:27763
