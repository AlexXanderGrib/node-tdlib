[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEvent$Input

# Type Alias: chatEvent$Input

> **chatEvent$Input**: `object`

Version of [chatEvent](chatEvent-1.md) for method parameters.

Represents a chat event

## Type declaration

### \_

> `readonly` **\_**: `"chatEvent"`

### action?

> `readonly` `optional` **action**: [`ChatEventAction$Input`](ChatEventAction$Input.md)

The action

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the event happened

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

Chat event identifier

### member\_id?

> `readonly` `optional` **member\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the user or chat who performed the action

## Defined in

dist/generated/types.d.ts:40723
