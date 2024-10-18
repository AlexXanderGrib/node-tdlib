[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reorderBotMediaPreviews$Input

# Type Alias: reorderBotMediaPreviews$Input

> **reorderBotMediaPreviews$Input**: `object`

Changes order of media previews in the list of media previews of a bot

## Type declaration

### \_

> `readonly` **\_**: `"reorderBotMediaPreviews"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot. The bot must be owned and must have the main Web App

### file\_ids?

> `readonly` `optional` **file\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

File identifiers of the media in the new order

### language\_code?

> `readonly` `optional` **language\_code**: `string`

Language code of the media previews to reorder

## Defined in

dist/generated/types.d.ts:97936
