[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatAdministratorRights

# Type Alias: chatAdministratorRights

> **chatAdministratorRights**: `object`

Describes rights of the administrator

## Type declaration

### \_

> **\_**: `"chatAdministratorRights"`

### can\_change\_info

> **can\_change\_info**: [`Bool`](Bool.md)

True, if the administrator can change the chat title, photo, and other settings

### can\_delete\_messages

> **can\_delete\_messages**: [`Bool`](Bool.md)

True, if the administrator can delete messages of other users

### can\_delete\_stories

> **can\_delete\_stories**: [`Bool`](Bool.md)

True, if the administrator can delete stories posted by other users; applicable to supergroups and channels only

### can\_edit\_messages

> **can\_edit\_messages**: [`Bool`](Bool.md)

True, if the administrator can edit messages of other users and pin messages; applicable to channels only

### can\_edit\_stories

> **can\_edit\_stories**: [`Bool`](Bool.md)

True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access story archive; applicable to supergroups and channels only

### can\_invite\_users

> **can\_invite\_users**: [`Bool`](Bool.md)

True, if the administrator can invite new users to the chat

### can\_manage\_chat

> **can\_manage\_chat**: [`Bool`](Bool.md)

True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report supergroup spam messages and ignore slow mode. Implied by any other privilege; applicable to supergroups and channels only

### can\_manage\_topics

> **can\_manage\_topics**: [`Bool`](Bool.md)

True, if the administrator can create, rename, close, reopen, hide, and unhide forum topics; applicable to forum supergroups only

### can\_manage\_video\_chats

> **can\_manage\_video\_chats**: [`Bool`](Bool.md)

True, if the administrator can manage video chats

### can\_pin\_messages

> **can\_pin\_messages**: [`Bool`](Bool.md)

True, if the administrator can pin messages; applicable to basic groups and supergroups only

### can\_post\_messages

> **can\_post\_messages**: [`Bool`](Bool.md)

True, if the administrator can create channel posts or view channel statistics; applicable to channels only

### can\_post\_stories

> **can\_post\_stories**: [`Bool`](Bool.md)

True, if the administrator can create new chat stories, or edit and delete posted stories; applicable to supergroups and channels only

### can\_promote\_members

> **can\_promote\_members**: [`Bool`](Bool.md)

True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that were directly or indirectly promoted by them

### can\_restrict\_members

> **can\_restrict\_members**: [`Bool`](Bool.md)

True, if the administrator can restrict, ban, or unban chat members or view supergroup statistics; always true for channels

### is\_anonymous

> **is\_anonymous**: [`Bool`](Bool.md)

True, if the administrator isn't shown in the chat member list and sends messages anonymously; applicable to supergroups only

## Defined in

dist/generated/types.d.ts:7805
