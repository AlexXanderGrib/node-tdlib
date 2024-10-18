[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getPollVoters$DirectInput

# Type Alias: getPollVoters$DirectInput

> **getPollVoters$DirectInput**: `object`

Returns message senders voted for the specified option in a non-anonymous polls. For optimal performance, the number of returned users is chosen by TDLib

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the poll belongs

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of voters to be returned; must be positive and can't be greater than 50. For optimal performance, the number of returned voters is chosen by TDLib and can be smaller than the specified limit, even if the end of the voter list has not been reached

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message containing the poll

### offset?

> `readonly` `optional` **offset**: [`int32`](int32.md)

Number of voters to skip in the result; must be non-negative

### option\_id?

> `readonly` `optional` **option\_id**: [`int32`](int32.md)

0-based identifier of the answer option

## Defined in

dist/generated/types.d.ts:84328
