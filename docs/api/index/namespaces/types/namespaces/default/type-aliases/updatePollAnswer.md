[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updatePollAnswer

# Type Alias: updatePollAnswer

> **updatePollAnswer**: `object`

A user changed the answer to a poll; for bots only

## Type declaration

### \_

> **\_**: `"updatePollAnswer"`

### option\_ids

> **option\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

0-based identifiers of answer options, chosen by the user

### poll\_id

> **poll\_id**: [`int64`](int64-1.md)

Unique poll identifier

### voter\_id

> **voter\_id**: [`MessageSender`](MessageSender.md)

Identifier of the message sender that changed the answer to the poll

## Defined in

dist/generated/types.d.ts:57827
