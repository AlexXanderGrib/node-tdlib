[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventMemberPromoted$Input

# Type Alias: chatEventMemberPromoted$Input

> **chatEventMemberPromoted$Input**: `object`

Version of [chatEventMemberPromoted](chatEventMemberPromoted.md) for method parameters.

A chat member has gained/lost administrator status, or the list of their administrator privileges has changed

## Type declaration

### \_

> `readonly` **\_**: `"chatEventMemberPromoted"`

### new\_status?

> `readonly` `optional` **new\_status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

New status of the chat member

### old\_status?

> `readonly` `optional` **old\_status**: [`ChatMemberStatus$Input`](ChatMemberStatus$Input.md)

Previous status of the chat member

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Affected chat member user identifier

## Defined in

dist/generated/types.d.ts:39482
