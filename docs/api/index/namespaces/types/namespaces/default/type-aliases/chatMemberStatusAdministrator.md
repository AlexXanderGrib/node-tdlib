[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMemberStatusAdministrator

# Type Alias: chatMemberStatusAdministrator

> **chatMemberStatusAdministrator**: `object`

The user is a member of the chat and has some additional privileges. In basic groups, administrators can edit and delete messages sent by others, add new members, ban unprivileged members, and manage video chats.

- In supergroups and channels, there are more detailed options for administrator privileges

## Type declaration

### \_

> **\_**: `"chatMemberStatusAdministrator"`

### can\_be\_edited

> **can\_be\_edited**: [`Bool`](Bool.md)

True, if the current user can edit the administrator privileges for the called user

### custom\_title

> **custom\_title**: `string`

A custom title of the administrator; 0-16 characters without emoji; applicable to supergroups only

### rights

> **rights**: [`chatAdministratorRights`](chatAdministratorRights-1.md)

Rights of the administrator

## Defined in

dist/generated/types.d.ts:9957
