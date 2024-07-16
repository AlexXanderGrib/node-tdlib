[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatAvailableReactions$DirectInput

# Type Alias: setChatAvailableReactions$DirectInput

> **setChatAvailableReactions$DirectInput**: `object`

Changes reactions, available in a chat. Available for basic groups, supergroups, and channels. Requires can_change_info member right

## Type declaration

### available\_reactions?

> `readonly` `optional` **available\_reactions**: [`ChatAvailableReactions$Input`](ChatAvailableReactions$Input.md)

Reactions available in the chat. All explicitly specified emoji reactions must be active. In channel chats up to the chat's boost level custom emoji reactions can be explicitly specified

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat

## Defined in

dist/generated/types.d.ts:85899
