[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleChatIsPinned

# Type Alias: toggleChatIsPinned()

> **toggleChatIsPinned**: (`parameters`) => [`Ok`](Ok-1.md)

Changes the pinned state of a chat. There can be up to getOption("pinned_chat_count_max")/getOption("pinned_archived_chat_count_max") pinned non-secret chats and the same number of secret chats in the main/archive chat list. The limit can be increased with Telegram Premium

## Parameters

• **parameters**: [`toggleChatIsPinned$Input`](toggleChatIsPinned$Input.md)

[toggleChatIsPinned$Input](toggleChatIsPinned$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:89353
