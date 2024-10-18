[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatSparseMessagePositions

# Type Alias: getChatSparseMessagePositions()

> **getChatSparseMessagePositions**: (`parameters`) => [`MessagePositions`](MessagePositions-1.md)

Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id).

- Cannot be used in secret chats or with searchMessagesFilterFailedToSend filter without an enabled message database

## Parameters

• **parameters**: [`getChatSparseMessagePositions$Input`](getChatSparseMessagePositions$Input.md)

[getChatSparseMessagePositions$Input](getChatSparseMessagePositions$Input.md)

## Returns

[`MessagePositions`](MessagePositions-1.md)

[MessagePositions](MessagePositions-1.md)

## Defined in

dist/generated/types.d.ts:79261
