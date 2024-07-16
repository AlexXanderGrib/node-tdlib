[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallRecentSpeaker$Input

# Type Alias: groupCallRecentSpeaker$Input

> **groupCallRecentSpeaker$Input**: `object`

Version of [groupCallRecentSpeaker](groupCallRecentSpeaker-1.md) for method parameters.

Describes a recently speaking participant in a group call

## Type declaration

### \_

> `readonly` **\_**: `"groupCallRecentSpeaker"`

### is\_speaking?

> `readonly` `optional` **is\_speaking**: [`Bool$Input`](Bool$Input.md)

True, is the user has spoken recently

### participant\_id?

> `readonly` `optional` **participant\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Group call participant identifier

## Defined in

dist/generated/types.d.ts:35219
