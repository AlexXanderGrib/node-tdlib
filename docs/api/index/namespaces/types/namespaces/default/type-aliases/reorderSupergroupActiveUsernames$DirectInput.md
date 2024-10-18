[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reorderSupergroupActiveUsernames$DirectInput

# Type Alias: reorderSupergroupActiveUsernames$DirectInput

> **reorderSupergroupActiveUsernames$DirectInput**: `object`

Changes order of active usernames of a supergroup or channel, requires owner privileges in the supergroup or channel

## Type declaration

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Identifier of the supergroup or channel

### usernames?

> `readonly` `optional` **usernames**: [`vector$Input`](vector$Input.md)\<`string`\>

The new order of active usernames. All currently active usernames must be specified

## Defined in

dist/generated/types.d.ts:98806
