[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / emojiCategory$Input

# Type Alias: emojiCategory$Input

> **emojiCategory$Input**: `object`

Version of [emojiCategory](emojiCategory.md) for method parameters.

Describes an emoji category

## Type declaration

### \_

> `readonly` **\_**: `"emojiCategory"`

### icon?

> `readonly` `optional` **icon**: [`sticker$Input`](sticker$Input.md)

Custom emoji sticker, which represents icon of the category

### is\_greeting?

> `readonly` `optional` **is\_greeting**: [`Bool$Input`](Bool$Input.md)

True, if the category must be shown first when choosing a sticker for the start page

### name?

> `readonly` `optional` **name**: `string`

Name of the category

### source?

> `readonly` `optional` **source**: [`EmojiCategorySource$Input`](EmojiCategorySource$Input.md)

Source of stickers for the emoji category

## Defined in

dist/generated/types.d.ts:32821
