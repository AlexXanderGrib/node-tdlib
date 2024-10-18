[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchChatsNearby

# Type Alias: searchChatsNearby()

> **searchChatsNearby**: (`parameters`) => [`ChatsNearby`](ChatsNearby-1.md)

Returns a list of users and location-based supergroups nearby. The list of users nearby will be updated for 60 seconds after the request by the updates updateUsersNearby.

- The request must be sent again every 25 seconds with adjusted location to not miss new chats

## Parameters

• **parameters**: [`searchChatsNearby$Input`](searchChatsNearby$Input.md)

[searchChatsNearby$Input](searchChatsNearby$Input.md)

## Returns

[`ChatsNearby`](ChatsNearby-1.md)

[ChatsNearby](ChatsNearby-1.md)

## Defined in

dist/generated/types.d.ts:77268
