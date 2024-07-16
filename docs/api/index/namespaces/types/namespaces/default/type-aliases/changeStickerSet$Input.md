[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / changeStickerSet$Input

# Type Alias: changeStickerSet$Input

> **changeStickerSet$Input**: `object`

Installs/uninstalls or activates/archives a sticker set

## Type declaration

### \_

> `readonly` **\_**: `"changeStickerSet"`

### is\_archived?

> `readonly` `optional` **is\_archived**: [`Bool$Input`](Bool$Input.md)

The new value of is_archived. A sticker set can't be installed and archived simultaneously

### is\_installed?

> `readonly` `optional` **is\_installed**: [`Bool$Input`](Bool$Input.md)

The new value of is_installed

### set\_id?

> `readonly` `optional` **set\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the sticker set

## Defined in

dist/generated/types.d.ts:93012
