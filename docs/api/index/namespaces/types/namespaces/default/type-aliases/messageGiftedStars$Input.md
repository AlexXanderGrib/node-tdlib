[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageGiftedStars$Input

# Type Alias: messageGiftedStars$Input

> **messageGiftedStars$Input**: `object`

Version of [messageGiftedStars](messageGiftedStars.md) for method parameters.

Telegram Stars were gifted to a user

## Type declaration

### \_

> `readonly` **\_**: `"messageGiftedStars"`

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

The identifier of a user that gifted Telegram Stars; 0 if the gift was anonymous or is outgoing

### receiver\_user\_id?

> `readonly` `optional` **receiver\_user\_id**: [`int53`](int53.md)

The identifier of a user that received Telegram Stars; 0 if the gift is incoming

### star\_count?

> `readonly` `optional` **star\_count**: [`int53`](int53.md)

Number of Telegram Stars that were gifted

### sticker?

> `readonly` `optional` **sticker**: [`sticker$Input`](sticker$Input.md) \| `null`

A sticker to be shown in the message; may be null if unknown

### transaction\_id?

> `readonly` `optional` **transaction\_id**: `string`

Identifier of the transaction for Telegram Stars purchase; for receiver only

## Defined in

dist/generated/types.d.ts:29020
