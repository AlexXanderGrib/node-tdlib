[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchChatMembers$Input

# Type Alias: searchChatMembers$Input

> **searchChatMembers$Input**: `object`

Searches for a specified query in the first name, last name and usernames of the members of a specified chat. Requires administrator rights if the chat is a channel

## Type declaration

### \_

> `readonly` **\_**: `"searchChatMembers"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### filter?

> `readonly` `optional` **filter**: [`ChatMembersFilter$Input`](ChatMembersFilter$Input.md) \| `null`

The type of users to search for; pass null to search among all chat members

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of users to be returned; up to 200

### query?

> `readonly` `optional` **query**: `string`

Query to search for

## Defined in

dist/generated/types.d.ts:86646
