[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reorderBotActiveUsernames$DirectInput

# Type Alias: reorderBotActiveUsernames$DirectInput

> **reorderBotActiveUsernames$DirectInput**: `object`

Changes order of active usernames of a bot. Can be called only if userTypeBot.can_be_edited == true

## Type declaration

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

Identifier of the target bot

### usernames?

> `readonly` `optional` **usernames**: [`vector$Input`](vector$Input.md)\<`string`\>

The new order of active usernames. All currently active usernames must be specified

## Defined in

dist/generated/types.d.ts:95451
