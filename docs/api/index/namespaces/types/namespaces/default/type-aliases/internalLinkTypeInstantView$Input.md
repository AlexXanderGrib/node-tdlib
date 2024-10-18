[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeInstantView$Input

# Type Alias: internalLinkTypeInstantView$Input

> **internalLinkTypeInstantView$Input**: `object`

Version of [internalLinkTypeInstantView](internalLinkTypeInstantView.md) for method parameters.

The link must be opened in an Instant View. Call getWebPageInstantView with the given URL to process the link.

- If Instant View is found, then show it, otherwise, open the fallback URL in an external browser

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeInstantView"`

### fallback\_url?

> `readonly` `optional` **fallback\_url**: `string`

An URL to open if getWebPageInstantView fails

### url?

> `readonly` `optional` **url**: `string`

URL to be passed to getWebPageInstantView

## Defined in

dist/generated/types.d.ts:49413
