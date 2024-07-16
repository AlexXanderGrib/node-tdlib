[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setPollAnswer$DirectInput

# Type Alias: setPollAnswer$DirectInput

> **setPollAnswer$DirectInput**: `object`

Changes the user answer to a poll. A poll in quiz mode can be answered only once

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the poll belongs

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message containing the poll

### option\_ids?

> `readonly` `optional` **option\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32-1.md)\>

0-based identifiers of answer options, chosen by the user. User can choose more than 1 answer option only is the poll allows multiple answers

## Defined in

dist/generated/types.d.ts:82077
