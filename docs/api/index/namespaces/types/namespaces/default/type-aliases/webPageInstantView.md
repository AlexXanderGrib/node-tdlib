[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / webPageInstantView

# Type Alias: webPageInstantView

> **webPageInstantView**: `object`

Describes an instant view page for a web page

## Type declaration

### \_

> **\_**: `"webPageInstantView"`

### feedback\_link

> **feedback\_link**: [`InternalLinkType`](InternalLinkType.md)

An internal link to be opened to leave feedback about the instant view

### is\_full

> **is\_full**: [`Bool`](Bool.md)

True, if the instant view contains the full page. A network request might be needed to get the full instant view

### is\_rtl

> **is\_rtl**: [`Bool`](Bool.md)

True, if the instant view must be shown from right to left

### page\_blocks

> **page\_blocks**: [`vector`](vector.md)\<[`PageBlock`](PageBlock.md)\>

Content of the instant view page

### version

> **version**: [`int32`](int32.md)

Version of the instant view; currently, can be 1 or 2

### view\_count

> **view\_count**: [`int32`](int32.md)

Number of the instant view views; 0 if unknown

## Defined in

dist/generated/types.d.ts:21351
