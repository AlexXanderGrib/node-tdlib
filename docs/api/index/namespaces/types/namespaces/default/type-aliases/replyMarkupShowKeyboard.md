[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / replyMarkupShowKeyboard

# Type Alias: replyMarkupShowKeyboard

> **replyMarkupShowKeyboard**: `object`

Contains a custom keyboard layout to quickly reply to bots

## Type declaration

### \_

> **\_**: `"replyMarkupShowKeyboard"`

### input\_field\_placeholder

> **input\_field\_placeholder**: `string`

If non-empty, the placeholder to be shown in the input field when the keyboard is active; 0-64 characters

### is\_persistent

> **is\_persistent**: [`Bool`](Bool.md)

True, if the keyboard is supposed to always be shown when the ordinary keyboard is hidden

### is\_personal

> **is\_personal**: [`Bool`](Bool.md)

True, if the keyboard must automatically be shown to the current user. For outgoing messages, specify true to show the keyboard only for the mentioned users and for the target user of a reply

### one\_time

> **one\_time**: [`Bool`](Bool.md)

True, if the application needs to hide the keyboard after use

### resize\_keyboard

> **resize\_keyboard**: [`Bool`](Bool.md)

True, if the application needs to resize the keyboard vertically

### rows

> **rows**: [`vector`](vector.md)\<[`vector`](vector.md)\<[`keyboardButton`](keyboardButton-1.md)\>\>

A list of rows of bot keyboard buttons

## Defined in

dist/generated/types.d.ts:17805
