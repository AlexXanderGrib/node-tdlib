[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatMemberStatusCreator$Input

# Type Alias: chatMemberStatusCreator$Input

> **chatMemberStatusCreator$Input**: `object`

Version of [chatMemberStatusCreator](chatMemberStatusCreator.md) for method parameters.

The user is the owner of the chat and has all the administrator privileges

## Type declaration

### \_

> `readonly` **\_**: `"chatMemberStatusCreator"`

### custom\_title?

> `readonly` `optional` **custom\_title**: `string`

A custom title of the owner; 0-16 characters without emoji; applicable to supergroups only

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

True, if the creator isn't shown in the chat member list and sends messages anonymously; applicable to supergroups only

### is\_member?

> `readonly` `optional` **is\_member**: [`Bool$Input`](Bool$Input.md)

True, if the user is a member of the chat

## Defined in

dist/generated/types.d.ts:9934
