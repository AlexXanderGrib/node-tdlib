[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatStatistics$Input

# Type Alias: getChatStatistics$Input

> **getChatStatistics$Input**: `object`

Returns detailed statistics about a chat. Currently, this method can be used only for supergroups and channels. Can be used only if supergroupFullInfo.can_get_statistics == true

## Type declaration

### \_

> `readonly` **\_**: `"getChatStatistics"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### is\_dark?

> `readonly` `optional` **is\_dark**: [`Bool$Input`](Bool$Input.md)

Pass true if a dark theme is used by the application

## Defined in

dist/generated/types.d.ts:101332
