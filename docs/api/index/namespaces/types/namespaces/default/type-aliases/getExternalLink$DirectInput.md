[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getExternalLink$DirectInput

# Type Alias: getExternalLink$DirectInput

> **getExternalLink$DirectInput**: `object`

Returns an HTTP URL which can be used to automatically authorize the current user on a website after clicking an HTTP link. Use the method getExternalLinkInfo to find whether a prior user confirmation is needed

## Type declaration

### allow\_write\_access?

> `readonly` `optional` **allow\_write\_access**: [`Bool$Input`](Bool$Input.md)

Pass true if the current user allowed the bot, returned in getExternalLinkInfo, to send them messages

### link?

> `readonly` `optional` **link**: `string`

The HTTP link

## Defined in

dist/generated/types.d.ts:86228
