[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageEffect$Input

# Type Alias: messageEffect$Input

> **messageEffect$Input**: `object`

Version of [messageEffect](messageEffect.md) for method parameters.

Contains information about an effect added to a message

## Type declaration

### \_

> `readonly` **\_**: `"messageEffect"`

### emoji?

> `readonly` `optional` **emoji**: `string`

Emoji corresponding to the effect that can be used if static icon isn't available

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique identifier of the effect

### is\_premium?

> `readonly` `optional` **is\_premium**: [`Bool$Input`](Bool$Input.md)

True, if Telegram Premium subscription is required to use the effect

### static\_icon?

> `readonly` `optional` **static\_icon**: [`sticker$Input`](sticker$Input.md) \| `null`

Static icon for the effect in WEBP format; may be null if none

### type?

> `readonly` `optional` **type**: [`MessageEffectType$Input`](MessageEffectType$Input.md)

Type of the effect

## Defined in

dist/generated/types.d.ts:13630
