[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inviteGroupCallParticipants$Input

# Type Alias: inviteGroupCallParticipants$Input

> **inviteGroupCallParticipants$Input**: `object`

Invites users to an active group call. Sends a service message of type messageInviteVideoChatParticipants for video chats

## Type declaration

### \_

> `readonly` **\_**: `"inviteGroupCallParticipants"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Group call identifier

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

User identifiers. At most 10 users can be invited simultaneously

## Defined in

dist/generated/types.d.ts:93758
