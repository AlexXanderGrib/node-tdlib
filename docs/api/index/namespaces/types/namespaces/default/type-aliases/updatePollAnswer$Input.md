[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updatePollAnswer$Input

# Type Alias: updatePollAnswer$Input

> **updatePollAnswer$Input**: `object`

Version of [updatePollAnswer](updatePollAnswer.md) for method parameters.

A user changed the answer to a poll; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updatePollAnswer"`

### option\_ids?

> `readonly` `optional` **option\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

0-based identifiers of answer options, chosen by the user

### poll\_id?

> `readonly` `optional` **poll\_id**: [`int64$Input`](int64$Input.md)

Unique poll identifier

### voter\_id?

> `readonly` `optional` **voter\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the message sender that changed the answer to the poll

## Defined in

dist/generated/types.d.ts:59490
