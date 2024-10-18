[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / replyMarkupShowKeyboard$Input

# Type Alias: replyMarkupShowKeyboard$Input

> **replyMarkupShowKeyboard$Input**: `object`

Version of [replyMarkupShowKeyboard](replyMarkupShowKeyboard.md) for method parameters.

Contains a custom keyboard layout to quickly reply to bots

## Type declaration

### \_

> `readonly` **\_**: `"replyMarkupShowKeyboard"`

### input\_field\_placeholder?

> `readonly` `optional` **input\_field\_placeholder**: `string`

If non-empty, the placeholder to be shown in the input field when the keyboard is active; 0-64 characters

### is\_persistent?

> `readonly` `optional` **is\_persistent**: [`Bool$Input`](Bool$Input.md)

True, if the keyboard is supposed to always be shown when the ordinary keyboard is hidden

### is\_personal?

> `readonly` `optional` **is\_personal**: [`Bool$Input`](Bool$Input.md)

True, if the keyboard must automatically be shown to the current user. For outgoing messages, specify true to show the keyboard only for the mentioned users and for the target user of a reply

### one\_time?

> `readonly` `optional` **one\_time**: [`Bool$Input`](Bool$Input.md)

True, if the application needs to hide the keyboard after use

### resize\_keyboard?

> `readonly` `optional` **resize\_keyboard**: [`Bool$Input`](Bool$Input.md)

True, if the application needs to resize the keyboard vertically

### rows?

> `readonly` `optional` **rows**: [`vector$Input`](vector$Input.md)\<[`vector$Input`](vector$Input.md)\<[`keyboardButton$Input`](keyboardButton$Input.md)\>\>

A list of rows of bot keyboard buttons

## Defined in

dist/generated/types.d.ts:18435
