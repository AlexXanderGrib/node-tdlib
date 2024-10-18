[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / poll$Input

# Type Alias: poll$Input

> **poll$Input**: `object`

Version of [poll](poll.md) for method parameters.

Describes a poll

## Type declaration

### \_

> `readonly` **\_**: `"poll"`

### close\_date?

> `readonly` `optional` **close\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the poll will automatically be closed

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input.md)

Unique poll identifier

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

True, if the poll is anonymous

### is\_closed?

> `readonly` `optional` **is\_closed**: [`Bool$Input`](Bool$Input.md)

True, if the poll is closed

### open\_period?

> `readonly` `optional` **open\_period**: [`int32`](int32.md)

Amount of time the poll will be active after creation, in seconds

### options?

> `readonly` `optional` **options**: [`vector$Input`](vector$Input.md)\<[`pollOption$Input`](pollOption$Input.md)\>

List of poll answer options

### question?

> `readonly` `optional` **question**: [`formattedText$Input`](formattedText$Input.md)

Poll question; 1-300 characters. Only custom emoji entities are allowed

### recent\_voter\_ids?

> `readonly` `optional` **recent\_voter\_ids**: [`vector$Input`](vector$Input.md)\<[`MessageSender$Input`](MessageSender$Input.md)\>

Identifiers of recent voters, if the poll is non-anonymous

### total\_voter\_count?

> `readonly` `optional` **total\_voter\_count**: [`int32`](int32.md)

Total number of voters, participating in the poll

### type?

> `readonly` `optional` **type**: [`PollType$Input`](PollType$Input.md)

Type of the poll

## Defined in

dist/generated/types.d.ts:5873
