[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getForumTopics$Input

# Type Alias: getForumTopics$Input

> **getForumTopics$Input**: `object`

Returns found forum topics in a forum chat. This is a temporary method for getting information about topic list from the server

## Type declaration

### \_

> `readonly` **\_**: `"getForumTopics"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the forum chat

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of forum topics to be returned; up to 100. For optimal performance, the number of returned forum topics is chosen by TDLib and can be smaller than the specified limit

### offset\_date?

> `readonly` `optional` **offset\_date**: [`int32`](int32-1.md)

The date starting from which the results need to be fetched. Use 0 or any date in the future to get results from the last topic

### offset\_message\_id?

> `readonly` `optional` **offset\_message\_id**: [`int53`](int53-1.md)

The message identifier of the last message in the last found topic, or 0 for the first request

### offset\_message\_thread\_id?

> `readonly` `optional` **offset\_message\_thread\_id**: [`int53`](int53-1.md)

The message thread identifier of the last found topic, or 0 for the first request

### query?

> `readonly` `optional` **query**: `string`

Query to search for in the forum topic's name

## Defined in

dist/generated/types.d.ts:80816
