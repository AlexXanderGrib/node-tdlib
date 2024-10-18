[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLinkMembers$Input

# Type Alias: chatInviteLinkMembers$Input

> **chatInviteLinkMembers$Input**: `object`

Version of [chatInviteLinkMembers](chatInviteLinkMembers.md) for method parameters.

Contains a list of chat members joined a chat via an invite link

## Type declaration

### \_

> `readonly` **\_**: `"chatInviteLinkMembers"`

### members?

> `readonly` `optional` **members**: [`vector$Input`](vector$Input.md)\<[`chatInviteLinkMember$Input`](chatInviteLinkMember$Input.md)\>

List of chat members, joined a chat via an invite link

### total\_count?

> `readonly` `optional` **total\_count**: [`int32`](int32.md)

Approximate total number of chat members found

## Defined in

dist/generated/types.d.ts:11295
