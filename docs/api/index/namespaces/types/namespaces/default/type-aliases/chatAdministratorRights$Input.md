[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatAdministratorRights$Input

# Type Alias: chatAdministratorRights$Input

> **chatAdministratorRights$Input**: `object`

Version of [chatAdministratorRights](chatAdministratorRights.md) for method parameters.

Describes rights of the administrator

## Type declaration

### \_

> `readonly` **\_**: `"chatAdministratorRights"`

### can\_change\_info?

> `readonly` `optional` **can\_change\_info**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can change the chat title, photo, and other settings

### can\_delete\_messages?

> `readonly` `optional` **can\_delete\_messages**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can delete messages of other users

### can\_delete\_stories?

> `readonly` `optional` **can\_delete\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can delete stories posted by other users; applicable to supergroups and channels only

### can\_edit\_messages?

> `readonly` `optional` **can\_edit\_messages**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can edit messages of other users and pin messages; applicable to channels only

### can\_edit\_stories?

> `readonly` `optional` **can\_edit\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access story archive; applicable to supergroups and channels only

### can\_invite\_users?

> `readonly` `optional` **can\_invite\_users**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can invite new users to the chat

### can\_manage\_chat?

> `readonly` `optional` **can\_manage\_chat**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report supergroup spam messages and ignore slow mode. Implied by any other privilege; applicable to supergroups and channels only

### can\_manage\_topics?

> `readonly` `optional` **can\_manage\_topics**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can create, rename, close, reopen, hide, and unhide forum topics; applicable to forum supergroups only

### can\_manage\_video\_chats?

> `readonly` `optional` **can\_manage\_video\_chats**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can manage video chats

### can\_pin\_messages?

> `readonly` `optional` **can\_pin\_messages**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can pin messages; applicable to basic groups and supergroups only

### can\_post\_messages?

> `readonly` `optional` **can\_post\_messages**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can create channel posts or view channel statistics; applicable to channels only

### can\_post\_stories?

> `readonly` `optional` **can\_post\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can create new chat stories, or edit and delete posted stories; applicable to supergroups and channels only

### can\_promote\_members?

> `readonly` `optional` **can\_promote\_members**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that were directly or indirectly promoted by them

### can\_restrict\_members?

> `readonly` `optional` **can\_restrict\_members**: [`Bool$Input`](Bool$Input.md)

True, if the administrator can restrict, ban, or unban chat members or view supergroup statistics; always true for channels

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

True, if the administrator isn't shown in the chat member list and sends messages anonymously; applicable to supergroups only

## Defined in

dist/generated/types.d.ts:7888
