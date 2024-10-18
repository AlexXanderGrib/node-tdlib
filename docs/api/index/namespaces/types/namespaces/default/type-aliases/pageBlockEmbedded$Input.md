[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockEmbedded$Input

# Type Alias: pageBlockEmbedded$Input

> **pageBlockEmbedded$Input**: `object`

Version of [pageBlockEmbedded](pageBlockEmbedded.md) for method parameters.

An embedded web page

## Type declaration

### \_

> `readonly` **\_**: `"pageBlockEmbedded"`

### allow\_scrolling?

> `readonly` `optional` **allow\_scrolling**: [`Bool$Input`](Bool$Input.md)

True, if scrolling needs to be allowed

### caption?

> `readonly` `optional` **caption**: [`pageBlockCaption$Input`](pageBlockCaption$Input.md)

Block caption

### height?

> `readonly` `optional` **height**: [`int32`](int32.md)

Block height; 0 if unknown

### html?

> `readonly` `optional` **html**: `string`

HTML-markup of the embedded page

### is\_full\_width?

> `readonly` `optional` **is\_full\_width**: [`Bool$Input`](Bool$Input.md)

True, if the block must be full width

### poster\_photo?

> `readonly` `optional` **poster\_photo**: [`photo$Input`](photo$Input.md) \| `null`

Poster photo, if available; may be null

### url?

> `readonly` `optional` **url**: `string`

URL of the embedded page, if available

### width?

> `readonly` `optional` **width**: [`int32`](int32.md)

Block width; 0 if unknown

## Defined in

dist/generated/types.d.ts:20913
