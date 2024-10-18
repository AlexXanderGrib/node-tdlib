[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reorderChatFolders$DirectInput

# Type Alias: reorderChatFolders$DirectInput

> **reorderChatFolders$DirectInput**: `object`

Changes the order of chat folders

## Type declaration

### chat\_folder\_ids?

> `readonly` `optional` **chat\_folder\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

Identifiers of chat folders in the new correct order

### main\_chat\_list\_position?

> `readonly` `optional` **main\_chat\_list\_position**: [`int32`](int32.md)

Position of the main chat list among chat folders, 0-based. Can be non-zero only for Premium users

## Defined in

dist/generated/types.d.ts:86986
