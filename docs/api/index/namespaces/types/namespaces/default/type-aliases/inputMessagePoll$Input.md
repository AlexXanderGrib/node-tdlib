[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessagePoll$Input

# Type Alias: inputMessagePoll$Input

> **inputMessagePoll$Input**: `object`

Version of [inputMessagePoll](inputMessagePoll.md) for method parameters.

A message with a poll. Polls can't be sent to secret chats. Polls can be sent only to a private chat with a bot

## Type declaration

### \_

> `readonly` **\_**: `"inputMessagePoll"`

### close\_date?

> `readonly` `optional` **close\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the poll will automatically be closed; for bots only

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded to channels

### is\_closed?

> `readonly` `optional` **is\_closed**: [`Bool$Input`](Bool$Input.md)

True, if the poll needs to be sent already closed; for bots only

### open\_period?

> `readonly` `optional` **open\_period**: [`int32`](int32-1.md)

Amount of time the poll will be active after creation, in seconds; for bots only

### options?

> `readonly` `optional` **options**: [`vector$Input`](vector$Input.md)\<[`formattedText$Input`](formattedText$Input-1.md)\>

List of poll answer options, 2-10 strings 1-100 characters each. Only custom emoji entities are allowed to be added and only by Premium users

### question?

> `readonly` `optional` **question**: [`formattedText$Input`](formattedText$Input-1.md)

Poll question; 1-255 characters (up to 300 characters for bots). Only custom emoji entities are allowed to be added and only by Premium users

### type?

> `readonly` `optional` **type**: [`PollType$Input`](PollType$Input.md)

Type of the poll

## Defined in

dist/generated/types.d.ts:30336
