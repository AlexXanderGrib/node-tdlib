[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMemberStatusRestricted$Input

# Type Alias: chatMemberStatusRestricted$Input

> **chatMemberStatusRestricted$Input**: `object`

Version of [chatMemberStatusRestricted](chatMemberStatusRestricted.md) for method parameters.

The user is under certain restrictions in the chat. Not supported in basic groups and channels

## Type declaration

### \_

> `readonly` **\_**: `"chatMemberStatusRestricted"`

### is\_member?

> `readonly` `optional` **is\_member**: [`Bool$Input`](Bool$Input.md)

True, if the user is a member of the chat

### permissions?

> `readonly` `optional` **permissions**: [`chatPermissions$Input`](chatPermissions$Input-1.md)

User permissions in the chat

### restricted\_until\_date?

> `readonly` `optional` **restricted\_until\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when restrictions will be lifted from the user; 0 if never. If the user is restricted for more than 366 days or for less than 30 seconds from the current time, the user is considered to be restricted forever

## Defined in

dist/generated/types.d.ts:10040
