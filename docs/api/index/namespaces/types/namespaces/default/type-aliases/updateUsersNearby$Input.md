[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateUsersNearby$Input

# Type Alias: updateUsersNearby$Input

> **updateUsersNearby$Input**: `object`

Version of [updateUsersNearby](updateUsersNearby.md) for method parameters.

The list of users nearby has changed. The update is guaranteed to be sent only 60 seconds after a successful searchChatsNearby request

## Type declaration

### \_

> `readonly` **\_**: `"updateUsersNearby"`

### users\_nearby?

> `readonly` `optional` **users\_nearby**: [`vector$Input`](vector$Input.md)\<[`chatNearby$Input`](chatNearby$Input.md)\>

The new list of users nearby

## Defined in

dist/generated/types.d.ts:58160
