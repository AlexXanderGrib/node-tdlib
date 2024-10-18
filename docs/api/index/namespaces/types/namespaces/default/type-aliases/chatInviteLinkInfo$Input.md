[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLinkInfo$Input

# Type Alias: chatInviteLinkInfo$Input

> **chatInviteLinkInfo$Input**: `object`

Version of [chatInviteLinkInfo](chatInviteLinkInfo.md) for method parameters.

Contains information about a chat invite link

## Type declaration

### \_

> `readonly` **\_**: `"chatInviteLinkInfo"`

### accent\_color\_id?

> `readonly` `optional` **accent\_color\_id**: [`int32`](int32.md)

Identifier of the accent color for chat title and background of chat photo

### accessible\_for?

> `readonly` `optional` **accessible\_for**: [`int32`](int32.md)

If non-zero, the amount of time for which read access to the chat will remain available, in seconds

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier of the invite link; 0 if the user has no access to the chat before joining

### creates\_join\_request?

> `readonly` `optional` **creates\_join\_request**: [`Bool$Input`](Bool$Input.md)

True, if the link only creates join request

### description?

> `readonly` `optional` **description**: `string`

Contains information about a chat invite link

### is\_fake?

> `readonly` `optional` **is\_fake**: [`Bool$Input`](Bool$Input.md)

True, if many users reported this chat as a fake account

### is\_public?

> `readonly` `optional` **is\_public**: [`Bool$Input`](Bool$Input.md)

True, if the chat is a public supergroup or channel, i.e. it has a username or it is a location-based supergroup

### is\_scam?

> `readonly` `optional` **is\_scam**: [`Bool$Input`](Bool$Input.md)

True, if many users reported this chat as a scam

### is\_verified?

> `readonly` `optional` **is\_verified**: [`Bool$Input`](Bool$Input.md)

True, if the chat is verified

### member\_count?

> `readonly` `optional` **member\_count**: [`int32`](int32.md)

Number of members in the chat

### member\_user\_ids?

> `readonly` `optional` **member\_user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

User identifiers of some chat members that may be known to the current user

### photo?

> `readonly` `optional` **photo**: [`chatPhotoInfo$Input`](chatPhotoInfo$Input.md) \| `null`

Chat photo; may be null

### subscription\_info?

> `readonly` `optional` **subscription\_info**: [`chatInviteLinkSubscriptionInfo$Input`](chatInviteLinkSubscriptionInfo$Input.md) \| `null`

Information about subscription plan that must be paid by the user to use the link; may be null if the link doesn't require subscription

### title?

> `readonly` `optional` **title**: `string`

Title of the chat

### type?

> `readonly` `optional` **type**: [`InviteLinkChatType$Input`](InviteLinkChatType$Input.md)

Type of the chat

## Defined in

dist/generated/types.d.ts:11480
