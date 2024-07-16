[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePremiumGiftCode$Input

# Type Alias: messagePremiumGiftCode$Input

> **messagePremiumGiftCode$Input**: `object`

Version of [messagePremiumGiftCode](messagePremiumGiftCode.md) for method parameters.

A Telegram Premium gift code was created for the user

## Type declaration

### \_

> `readonly` **\_**: `"messagePremiumGiftCode"`

### amount?

> `readonly` `optional` **amount**: [`int53`](int53-1.md)

The paid amount, in the smallest units of the currency; 0 if unknown

### code?

> `readonly` `optional` **code**: `string`

The gift code

### creator\_id?

> `readonly` `optional` **creator\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of a chat or a user that created the gift code; may be null if unknown

### cryptocurrency?

> `readonly` `optional` **cryptocurrency**: `string`

Cryptocurrency used to pay for the gift; may be empty if none or unknown

### cryptocurrency\_amount?

> `readonly` `optional` **cryptocurrency\_amount**: [`int64$Input`](int64$Input-1.md)

The paid amount, in the smallest units of the cryptocurrency; 0 if unknown

### currency?

> `readonly` `optional` **currency**: `string`

Currency for the paid amount; empty if unknown

### is\_from\_giveaway?

> `readonly` `optional` **is\_from\_giveaway**: [`Bool$Input`](Bool$Input.md)

True, if the gift code was created for a giveaway

### is\_unclaimed?

> `readonly` `optional` **is\_unclaimed**: [`Bool$Input`](Bool$Input.md)

True, if the winner for the corresponding Telegram Premium subscription wasn't chosen

### month\_count?

> `readonly` `optional` **month\_count**: [`int32`](int32-1.md)

Number of months the Telegram Premium subscription will be active after code activation

### sticker?

> `readonly` `optional` **sticker**: [`sticker$Input`](sticker$Input-1.md) \| `null`

A sticker to be shown in the message; may be null if unknown

## Defined in

dist/generated/types.d.ts:27905
