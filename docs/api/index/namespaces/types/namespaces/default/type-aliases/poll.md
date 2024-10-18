[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / poll

# Type Alias: poll

> **poll**: `object`

Describes a poll

## Type declaration

### \_

> **\_**: `"poll"`

### close\_date

> **close\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the poll will automatically be closed

### id

> **id**: [`int64`](int64.md)

Unique poll identifier

### is\_anonymous

> **is\_anonymous**: [`Bool`](Bool.md)

True, if the poll is anonymous

### is\_closed

> **is\_closed**: [`Bool`](Bool.md)

True, if the poll is closed

### open\_period

> **open\_period**: [`int32`](int32.md)

Amount of time the poll will be active after creation, in seconds

### options

> **options**: [`vector`](vector.md)\<[`pollOption`](pollOption.md)\>

List of poll answer options

### question

> **question**: [`formattedText`](formattedText.md)

Poll question; 1-300 characters. Only custom emoji entities are allowed

### recent\_voter\_ids

> **recent\_voter\_ids**: [`vector`](vector.md)\<[`MessageSender`](MessageSender.md)\>

Identifiers of recent voters, if the poll is non-anonymous

### total\_voter\_count

> **total\_voter\_count**: [`int32`](int32.md)

Total number of voters, participating in the poll

### type

> **type**: [`PollType`](PollType.md)

Type of the poll

## Defined in

dist/generated/types.d.ts:5815
