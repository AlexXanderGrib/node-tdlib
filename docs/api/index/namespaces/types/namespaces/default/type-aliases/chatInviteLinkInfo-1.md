[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLinkInfo

# Type Alias: chatInviteLinkInfo

> **chatInviteLinkInfo**: `object`

Contains information about a chat invite link

## Type declaration

### \_

> **\_**: `"chatInviteLinkInfo"`

### accent\_color\_id

> **accent\_color\_id**: [`int32`](int32-1.md)

Identifier of the accent color for chat title and background of chat photo

### accessible\_for

> **accessible\_for**: [`int32`](int32-1.md)

If non-zero, the amount of time for which read access to the chat will remain available, in seconds

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Chat identifier of the invite link; 0 if the user has no access to the chat before joining

### creates\_join\_request

> **creates\_join\_request**: [`Bool`](Bool.md)

True, if the link only creates join request

### description

> **description**: `string`

Contains information about a chat invite link

### is\_fake

> **is\_fake**: [`Bool`](Bool.md)

True, if many users reported this chat as a fake account

### is\_public

> **is\_public**: [`Bool`](Bool.md)

True, if the chat is a public supergroup or channel, i.e. it has a username or it is a location-based supergroup

### is\_scam

> **is\_scam**: [`Bool`](Bool.md)

True, if many users reported this chat as a scam

### is\_verified

> **is\_verified**: [`Bool`](Bool.md)

True, if the chat is verified

### member\_count

> **member\_count**: [`int32`](int32-1.md)

Number of members in the chat

### member\_user\_ids

> **member\_user\_ids**: [`vector`](vector.md)\<[`int53`](int53-1.md)\>

User identifiers of some chat members that may be known to the current user

### photo

> **photo**: [`chatPhotoInfo`](chatPhotoInfo-1.md) \| `null`

Chat photo; may be null

### title

> **title**: `string`

Title of the chat

### type

> **type**: [`InviteLinkChatType`](InviteLinkChatType.md)

Type of the chat

## Defined in

dist/generated/types.d.ts:10833
