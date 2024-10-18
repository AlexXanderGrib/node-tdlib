[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventMemberRestricted

# Type Alias: chatEventMemberRestricted

> **chatEventMemberRestricted**: `object`

A chat member was restricted/unrestricted or banned/unbanned, or the list of their restrictions has changed

## Type declaration

### \_

> **\_**: `"chatEventMemberRestricted"`

### member\_id

> **member\_id**: [`MessageSender`](MessageSender.md)

Affected chat member identifier

### new\_status

> **new\_status**: [`ChatMemberStatus`](ChatMemberStatus.md)

New status of the chat member

### old\_status

> **old\_status**: [`ChatMemberStatus`](ChatMemberStatus.md)

Previous status of the chat member

## Defined in

dist/generated/types.d.ts:40873
