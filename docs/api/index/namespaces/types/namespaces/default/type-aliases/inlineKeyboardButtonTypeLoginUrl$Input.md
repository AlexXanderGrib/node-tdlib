[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inlineKeyboardButtonTypeLoginUrl$Input

# Type Alias: inlineKeyboardButtonTypeLoginUrl$Input

> **inlineKeyboardButtonTypeLoginUrl$Input**: `object`

Version of [inlineKeyboardButtonTypeLoginUrl](inlineKeyboardButtonTypeLoginUrl.md) for method parameters.

A button that opens a specified URL and automatically authorize the current user by calling getLoginUrlInfo

## Type declaration

### \_

> `readonly` **\_**: `"inlineKeyboardButtonTypeLoginUrl"`

### forward\_text?

> `readonly` `optional` **forward\_text**: `string`

If non-empty, new text of the button in forwarded messages

### id?

> `readonly` `optional` **id**: [`int53`](int53-1.md)

Unique button identifier

### url?

> `readonly` `optional` **url**: `string`

An HTTP URL to pass to getLoginUrlInfo

## Defined in

dist/generated/types.d.ts:17534
