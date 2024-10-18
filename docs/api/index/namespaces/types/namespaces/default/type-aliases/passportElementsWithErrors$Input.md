[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / passportElementsWithErrors$Input

# Type Alias: passportElementsWithErrors$Input

> **passportElementsWithErrors$Input**: `object`

Version of [passportElementsWithErrors](passportElementsWithErrors.md) for method parameters.

Contains information about a Telegram Passport elements and corresponding errors

## Type declaration

### \_

> `readonly` **\_**: `"passportElementsWithErrors"`

### elements?

> `readonly` `optional` **elements**: [`vector$Input`](vector$Input.md)\<[`PassportElement$Input`](PassportElement$Input.md)\>

Telegram Passport elements

### errors?

> `readonly` `optional` **errors**: [`vector$Input`](vector$Input.md)\<[`passportElementError$Input`](passportElementError$Input.md)\>

Errors in the elements that are already available

## Defined in

dist/generated/types.d.ts:26089
