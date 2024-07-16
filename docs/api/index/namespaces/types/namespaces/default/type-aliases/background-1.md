[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / background

# Type Alias: background

> **background**: `object`

Describes a chat background

## Type declaration

### \_

> **\_**: `"background"`

### document

> **document**: [`document`](document-1.md) \| `null`

Document with the background; may be null. Null only for filled and chat theme backgrounds

### id

> **id**: [`int64`](int64-1.md)

Unique background identifier

### is\_dark

> **is\_dark**: [`Bool`](Bool.md)

True, if the background is dark and is recommended to be used with dark theme

### is\_default

> **is\_default**: [`Bool`](Bool.md)

True, if this is one of default backgrounds

### name

> **name**: `string`

Unique background name

### type

> **type**: [`BackgroundType`](BackgroundType.md)

Type of the background

## Defined in

dist/generated/types.d.ts:5883
