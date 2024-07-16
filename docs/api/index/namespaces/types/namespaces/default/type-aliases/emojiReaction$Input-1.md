[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / emojiReaction$Input

# Type Alias: emojiReaction$Input

> **emojiReaction$Input**: `object`

Version of [emojiReaction](emojiReaction-1.md) for method parameters.

Contains information about an emoji reaction

## Type declaration

### \_

> `readonly` **\_**: `"emojiReaction"`

### activate\_animation?

> `readonly` `optional` **activate\_animation**: [`sticker$Input`](sticker$Input-1.md)

Activate animation for the reaction

### appear\_animation?

> `readonly` `optional` **appear\_animation**: [`sticker$Input`](sticker$Input-1.md)

Appear animation for the reaction

### around\_animation?

> `readonly` `optional` **around\_animation**: [`sticker$Input`](sticker$Input-1.md) \| `null`

Around animation for the reaction; may be null

### center\_animation?

> `readonly` `optional` **center\_animation**: [`sticker$Input`](sticker$Input-1.md) \| `null`

Center animation for the reaction; may be null

### effect\_animation?

> `readonly` `optional` **effect\_animation**: [`sticker$Input`](sticker$Input-1.md)

Effect animation for the reaction

### emoji?

> `readonly` `optional` **emoji**: `string`

Text representation of the reaction

### is\_active?

> `readonly` `optional` **is\_active**: [`Bool$Input`](Bool$Input.md)

True, if the reaction can be added to new messages and enabled in chats

### select\_animation?

> `readonly` `optional` **select\_animation**: [`sticker$Input`](sticker$Input-1.md)

Select animation for the reaction

### static\_icon?

> `readonly` `optional` **static\_icon**: [`sticker$Input`](sticker$Input-1.md)

Static icon for the reaction

### title?

> `readonly` `optional` **title**: `string`

Reaction title

## Defined in

dist/generated/types.d.ts:36317
