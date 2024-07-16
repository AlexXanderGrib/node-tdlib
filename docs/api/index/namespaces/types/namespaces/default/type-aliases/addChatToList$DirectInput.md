[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addChatToList$DirectInput

# Type Alias: addChatToList$DirectInput

> **addChatToList$DirectInput**: `object`

Adds a chat to a chat list. A chat can't be simultaneously in Main and Archive chat lists, so it is automatically removed from another one if needed

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### chat\_list?

> `readonly` `optional` **chat\_list**: [`ChatList$Input`](ChatList$Input.md)

The chat list. Use getChatListsToAddChat to get suitable chat lists

## Defined in

dist/generated/types.d.ts:84461
