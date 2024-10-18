[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteBotMediaPreviews$DirectInput

# Type Alias: deleteBotMediaPreviews$DirectInput

> **deleteBotMediaPreviews$DirectInput**: `object`

Delete media previews from the list of media previews of a bot

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

Identifier of the target bot. The bot must be owned and must have the main Web App

### file\_ids?

> `readonly` `optional` **file\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

File identifiers of the media to delete

### language\_code?

> `readonly` `optional` **language\_code**: `string`

Language code of the media previews to delete

## Defined in

dist/generated/types.d.ts:98005
