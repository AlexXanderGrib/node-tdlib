[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatFolderInviteLinkInfo$Input

# Type Alias: chatFolderInviteLinkInfo$Input

> **chatFolderInviteLinkInfo$Input**: `object`

Version of [chatFolderInviteLinkInfo](chatFolderInviteLinkInfo-1.md) for method parameters.

Contains information about an invite link to a chat folder

## Type declaration

### \_

> `readonly` **\_**: `"chatFolderInviteLinkInfo"`

### added\_chat\_ids?

> `readonly` `optional` **added\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the chats from the link, which are added to the folder already

### chat\_folder\_info?

> `readonly` `optional` **chat\_folder\_info**: [`chatFolderInfo$Input`](chatFolderInfo$Input-1.md)

Basic information about the chat folder; chat folder identifier will be 0 if the user didn't have the chat folder yet

### missing\_chat\_ids?

> `readonly` `optional` **missing\_chat\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the chats from the link, which aren't added to the folder yet

## Defined in

dist/generated/types.d.ts:15762
