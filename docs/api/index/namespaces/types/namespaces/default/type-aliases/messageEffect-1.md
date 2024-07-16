[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageEffect

# Type Alias: messageEffect

> **messageEffect**: `object`

Contains information about an effect added to a message

## Type declaration

### \_

> **\_**: `"messageEffect"`

### emoji

> **emoji**: `string`

Emoji corresponding to the effect that can be used if static icon isn't available

### id

> **id**: [`int64`](int64-1.md)

Unique identifier of the effect

### is\_premium

> **is\_premium**: [`Bool`](Bool.md)

True, if Telegram Premium subscription is required to use the effect

### static\_icon

> **static\_icon**: [`sticker`](sticker-1.md) \| `null`

Static icon for the effect in WEBP format; may be null if none

### type

> **type**: [`MessageEffectType`](MessageEffectType.md)

Type of the effect

## Defined in

dist/generated/types.d.ts:12895
