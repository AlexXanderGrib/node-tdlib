[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addChatMembers$DirectInput

# Type Alias: addChatMembers$DirectInput

> **addChatMembers$DirectInput**: `object`

Adds multiple new members to a chat; requires can_invite_users member right. Currently, this method is only available for supergroups and channels.

- This method can't be used to join a chat. Members can't be added to a channel if it has more than 200 members. Returns information about members that weren't added

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the users to be added to the chat. The maximum number of added users is 20 for supergroups and 100 for channels

## Defined in

dist/generated/types.d.ts:86401
