[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchChatsNearby$Input

# Type Alias: searchChatsNearby$Input

> **searchChatsNearby$Input**: `object`

Returns a list of users and location-based supergroups nearby. The list of users nearby will be updated for 60 seconds after the request by the updates updateUsersNearby.

- The request must be sent again every 25 seconds with adjusted location to not miss new chats

## Type declaration

### \_

> `readonly` **\_**: `"searchChatsNearby"`

### location?

> `readonly` `optional` **location**: [`location$Input`](location$Input-1.md)

Current user location

## Defined in

dist/generated/types.d.ts:75214