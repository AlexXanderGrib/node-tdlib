[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChats$DirectInput

# Type Alias: getChats$DirectInput

> **getChats$DirectInput**: `object`

Returns an ordered list of chats from the beginning of a chat list. For informational purposes only. Use loadChats and updates processing instead to maintain chat lists in a consistent state

## Type declaration

### chat\_list?

> `readonly` `optional` **chat\_list**: [`ChatList$Input`](ChatList$Input.md) \| `null`

The chat list in which to return chats; pass null to get chats from the main chat list

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of chats to be returned

## Defined in

dist/generated/types.d.ts:75052
