[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMemberStatusAdministrator$Input

# Type Alias: chatMemberStatusAdministrator$Input

> **chatMemberStatusAdministrator$Input**: `object`

Version of [chatMemberStatusAdministrator](chatMemberStatusAdministrator.md) for method parameters.

The user is a member of the chat and has some additional privileges. In basic groups, administrators can edit and delete messages sent by others, add new members, ban unprivileged members, and manage video chats.

- In supergroups and channels, there are more detailed options for administrator privileges

## Type declaration

### \_

> `readonly` **\_**: `"chatMemberStatusAdministrator"`

### can\_be\_edited?

> `readonly` `optional` **can\_be\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the current user can edit the administrator privileges for the called user

### custom\_title?

> `readonly` `optional` **custom\_title**: `string`

A custom title of the administrator; 0-16 characters without emoji; applicable to supergroups only

### rights?

> `readonly` `optional` **rights**: [`chatAdministratorRights$Input`](chatAdministratorRights$Input.md)

Rights of the administrator

## Defined in

dist/generated/types.d.ts:10472
