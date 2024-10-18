[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / processChatFolderNewChats$Input

# Type Alias: processChatFolderNewChats$Input

> **processChatFolderNewChats$Input**: `object`

Process new chats added to a shareable chat folder by its owner

## Type declaration

### \_

> `readonly` **\_**: `"processChatFolderNewChats"`

### added\_chat\_ids?

> `readonly` `optional` **added\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of the new chats, which are added to the chat folder. The chats are automatically joined if they aren't joined yet

### chat\_folder\_id?

> `readonly` `optional` **chat\_folder\_id**: [`int32`](int32.md)

Chat folder identifier

## Defined in

dist/generated/types.d.ts:87375
