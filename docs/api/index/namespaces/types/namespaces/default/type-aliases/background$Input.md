[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / background$Input

# Type Alias: background$Input

> **background$Input**: `object`

Version of [background](background.md) for method parameters.

Describes a chat background

## Type declaration

### \_

> `readonly` **\_**: `"background"`

### document?

> `readonly` `optional` **document**: [`document$Input`](document$Input.md) \| `null`

Document with the background; may be null. Null only for filled and chat theme backgrounds

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique background identifier

### is\_dark?

> `readonly` `optional` **is\_dark**: [`Bool$Input`](Bool$Input.md)

True, if the background is dark and is recommended to be used with dark theme

### is\_default?

> `readonly` `optional` **is\_default**: [`Bool$Input`](Bool$Input.md)

True, if this is one of default backgrounds

### name?

> `readonly` `optional` **name**: `string`

Unique background name

### type?

> `readonly` `optional` **type**: [`BackgroundType$Input`](BackgroundType$Input.md)

Type of the background

## Defined in

dist/generated/types.d.ts:5967
