[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inviteGroupCallParticipants$DirectInput

# Type Alias: inviteGroupCallParticipants$DirectInput

> **inviteGroupCallParticipants$DirectInput**: `object`

Invites users to an active group call. Sends a service message of type messageInviteVideoChatParticipants for video chats

## Type declaration

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Group call identifier

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

User identifiers. At most 10 users can be invited simultaneously

## Defined in

dist/generated/types.d.ts:91277
