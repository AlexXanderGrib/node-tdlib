[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMemberStatusRestricted

# Type Alias: chatMemberStatusRestricted

> **chatMemberStatusRestricted**: `object`

The user is under certain restrictions in the chat. Not supported in basic groups and channels

## Type declaration

### \_

> **\_**: `"chatMemberStatusRestricted"`

### is\_member

> **is\_member**: [`Bool`](Bool.md)

True, if the user is a member of the chat

### permissions

> **permissions**: [`chatPermissions`](chatPermissions.md)

User permissions in the chat

### restricted\_until\_date

> **restricted\_until\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when restrictions will be lifted from the user; 0 if never. If the user is restricted for more than 366 days or for less than 30 seconds from the current time, the user is considered to be restricted forever

## Defined in

dist/generated/types.d.ts:10517
