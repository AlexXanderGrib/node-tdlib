[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getInternalLink$Input

# Type Alias: getInternalLink$Input

> **getInternalLink$Input**: `object`

Returns an HTTPS or a tg: link with the given type. Can be called before authorization

## Type declaration

### \_

> `readonly` **\_**: `"getInternalLink"`

### is\_http?

> `readonly` `optional` **is\_http**: [`Bool$Input`](Bool$Input.md)

Pass true to create an HTTPS link (only available for some link types); pass false to create a tg: link

### type?

> `readonly` `optional` **type**: [`InternalLinkType$Input`](InternalLinkType$Input.md)

Expected type of the link

## Defined in

dist/generated/types.d.ts:83819
