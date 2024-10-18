[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessagePoll

# Type Alias: inputMessagePoll

> **inputMessagePoll**: `object`

A message with a poll. Polls can't be sent to secret chats. Polls can be sent only to a private chat with a bot

## Type declaration

### \_

> **\_**: `"inputMessagePoll"`

### close\_date

> **close\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the poll will automatically be closed; for bots only

### is\_anonymous

> **is\_anonymous**: [`Bool`](Bool.md)

True, if the poll voters are anonymous. Non-anonymous polls can't be sent or forwarded to channels

### is\_closed

> **is\_closed**: [`Bool`](Bool.md)

True, if the poll needs to be sent already closed; for bots only

### open\_period

> **open\_period**: [`int32`](int32.md)

Amount of time the poll will be active after creation, in seconds; for bots only

### options

> **options**: [`vector`](vector.md)\<[`formattedText`](formattedText.md)\>

List of poll answer options, 2-10 strings 1-100 characters each. Only custom emoji entities are allowed to be added and only by Premium users

### question

> **question**: [`formattedText`](formattedText.md)

Poll question; 1-255 characters (up to 300 characters for bots). Only custom emoji entities are allowed to be added and only by Premium users

### type

> **type**: [`PollType`](PollType.md)

Type of the poll

## Defined in

dist/generated/types.d.ts:31167
