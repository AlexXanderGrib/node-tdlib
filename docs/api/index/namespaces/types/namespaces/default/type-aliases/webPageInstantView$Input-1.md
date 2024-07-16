[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / webPageInstantView$Input

# Type Alias: webPageInstantView$Input

> **webPageInstantView$Input**: `object`

Version of [webPageInstantView](webPageInstantView-1.md) for method parameters.

Describes an instant view page for a web page

## Type declaration

### \_

> `readonly` **\_**: `"webPageInstantView"`

### feedback\_link?

> `readonly` `optional` **feedback\_link**: [`InternalLinkType$Input`](InternalLinkType$Input.md)

An internal link to be opened to leave feedback about the instant view

### is\_full?

> `readonly` `optional` **is\_full**: [`Bool$Input`](Bool$Input.md)

True, if the instant view contains the full page. A network request might be needed to get the full instant view

### is\_rtl?

> `readonly` `optional` **is\_rtl**: [`Bool$Input`](Bool$Input.md)

True, if the instant view must be shown from right to left

### page\_blocks?

> `readonly` `optional` **page\_blocks**: [`vector$Input`](vector$Input.md)\<[`PageBlock$Input`](PageBlock$Input.md)\>

Content of the instant view page

### version?

> `readonly` `optional` **version**: [`int32`](int32-1.md)

Version of the instant view; currently, can be 1 or 2

### view\_count?

> `readonly` `optional` **view\_count**: [`int32`](int32-1.md)

Number of the instant view views; 0 if unknown

## Defined in

dist/generated/types.d.ts:20763
