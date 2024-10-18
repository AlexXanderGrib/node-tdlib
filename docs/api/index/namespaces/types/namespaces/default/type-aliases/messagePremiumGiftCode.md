[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePremiumGiftCode

# Type Alias: messagePremiumGiftCode

> **messagePremiumGiftCode**: `object`

A Telegram Premium gift code was created for the user

## Type declaration

### \_

> **\_**: `"messagePremiumGiftCode"`

### amount

> **amount**: [`int53`](int53.md)

The paid amount, in the smallest units of the currency; 0 if unknown

### code

> **code**: `string`

The gift code

### creator\_id

> **creator\_id**: [`MessageSender`](MessageSender.md) \| `null`

Identifier of a chat or a user that created the gift code; may be null if unknown

### cryptocurrency

> **cryptocurrency**: `string`

Cryptocurrency used to pay for the gift; may be empty if none or unknown

### cryptocurrency\_amount

> **cryptocurrency\_amount**: [`int64`](int64.md)

The paid amount, in the smallest units of the cryptocurrency; 0 if unknown

### currency

> **currency**: `string`

Currency for the paid amount; empty if unknown

### is\_from\_giveaway

> **is\_from\_giveaway**: [`Bool`](Bool.md)

True, if the gift code was created for a giveaway

### is\_unclaimed

> **is\_unclaimed**: [`Bool`](Bool.md)

True, if the winner for the corresponding Telegram Premium subscription wasn't chosen

### month\_count

> **month\_count**: [`int32`](int32.md)

Number of months the Telegram Premium subscription will be active after code activation

### sticker

> **sticker**: [`sticker`](sticker.md) \| `null`

A sticker to be shown in the message; may be null if unknown

## Defined in

dist/generated/types.d.ts:28617
