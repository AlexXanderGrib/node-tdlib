[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchSavedMessages$Input

# Type Alias: searchSavedMessages$Input

> **searchSavedMessages$Input**: `object`

Searches for messages tagged by the given reaction and with the given words in the Saved Messages chat; for Telegram Premium users only.

- Returns the results in reverse chronological order, i.e. in order of decreasing message_id

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

## Type declaration

### \_

> `readonly` **\_**: `"searchSavedMessages"`

### from\_message\_id?

> `readonly` `optional` **from\_message\_id**: [`int53`](int53-1.md)

Identifier of the message starting from which messages must be fetched; use 0 to get results from the last message

### limit?

> `readonly` `optional` **limit**: [`int32`](int32-1.md)

The maximum number of messages to be returned; must be positive and can't be greater than 100. If the offset is negative, the limit must be greater than -offset.

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

### offset?

> `readonly` `optional` **offset**: [`int32`](int32-1.md)

Specify 0 to get results from exactly the message from_message_id or a negative offset to get the specified message and some newer messages

### query?

> `readonly` `optional` **query**: `string`

Query to search for

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53-1.md)

If not 0, only messages in the specified Saved Messages topic will be considered; pass 0 to consider all messages

### tag?

> `readonly` `optional` **tag**: [`ReactionType$Input`](ReactionType$Input.md) \| `null`

Tag to search for; pass null to return all suitable messages

## Defined in

dist/generated/types.d.ts:76589
