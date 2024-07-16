[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventMemberRestricted$Input

# Type Alias: chatEventMemberRestricted$Input

> **chatEventMemberRestricted$Input**: `object`

Version of [chatEventMemberRestricted](chatEventMemberRestricted.md) for method parameters.

A chat member was restricted/unrestricted or banned/unbanned, or the list of their restrictions has changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventMemberRestricted"`

### member\_id?

> `readonly` `optional` **member\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Affected chat member identifier

### new\_status?

> `readonly` `optional` **new\_status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

New status of the chat member

### old\_status?

> `readonly` `optional` **old\_status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

Previous status of the chat member

## Defined in

dist/generated/types.d.ts:39526
