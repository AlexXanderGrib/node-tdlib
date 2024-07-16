[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / answerCallbackQuery$Input

# Type Alias: answerCallbackQuery$Input

> **answerCallbackQuery$Input**: `object`

Sets the result of a callback query; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"answerCallbackQuery"`

### cache\_time?

> `readonly` `optional` **cache\_time**: [`int32`](int32-1.md)

Time during which the result of the query can be cached, in seconds

### callback\_query\_id?

> `readonly` `optional` **callback\_query\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the callback query

### show\_alert?

> `readonly` `optional` **show\_alert**: [`Bool$Input`](Bool$Input.md)

Pass true to show an alert to the user instead of a toast notification

### text?

> `readonly` `optional` **text**: `string`

Text of the answer

### url?

> `readonly` `optional` **url**: `string`

URL to be opened

## Defined in

dist/generated/types.d.ts:83135
