[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateAvailableMessageEffects$Input

# Type Alias: updateAvailableMessageEffects$Input

> **updateAvailableMessageEffects$Input**: `object`

Version of [updateAvailableMessageEffects](updateAvailableMessageEffects.md) for method parameters.

The list of available message effects has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateAvailableMessageEffects"`

### reaction\_effect\_ids?

> `readonly` `optional` **reaction\_effect\_ids**: [`vector$Input`](vector$Input.md)\<[`int64$Input`](int64$Input-1.md)\>

The new list of available message effects from emoji reactions

### sticker\_effect\_ids?

> `readonly` `optional` **sticker\_effect\_ids**: [`vector$Input`](vector$Input.md)\<[`int64$Input`](int64$Input-1.md)\>

The new list of available message effects from Premium stickers

## Defined in

dist/generated/types.d.ts:56669
