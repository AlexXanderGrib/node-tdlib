[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatFolders$Input

# Type Alias: updateChatFolders$Input

> **updateChatFolders$Input**: `object`

Version of [updateChatFolders](updateChatFolders.md) for method parameters.

The list of chat folders or a chat folder has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateChatFolders"`

### are\_tags\_enabled?

> `readonly` `optional` **are\_tags\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if folder tags are enabled

### chat\_folders?

> `readonly` `optional` **chat\_folders**: [`vector$Input`](vector$Input.md)\<[`chatFolderInfo$Input`](chatFolderInfo$Input.md)\>

The new list of chat folders

### main\_chat\_list\_position?

> `readonly` `optional` **main\_chat\_list\_position**: [`int32`](int32.md)

Position of the main chat list among chat folders, 0-based

## Defined in

dist/generated/types.d.ts:56002
