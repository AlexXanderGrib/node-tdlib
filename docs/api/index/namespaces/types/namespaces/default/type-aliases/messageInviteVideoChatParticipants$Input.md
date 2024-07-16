[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageInviteVideoChatParticipants$Input

# Type Alias: messageInviteVideoChatParticipants$Input

> **messageInviteVideoChatParticipants$Input**: `object`

Version of [messageInviteVideoChatParticipants](messageInviteVideoChatParticipants.md) for method parameters.

A message with information about an invitation to a video chat

## Type declaration

### \_

> `readonly` **\_**: `"messageInviteVideoChatParticipants"`

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32-1.md)

Identifier of the video chat. The video chat can be received through the method getGroupCall

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Invited user identifiers

## Defined in

dist/generated/types.d.ts:26849
