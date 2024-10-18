[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pushMessageContentPoll$Input

# Type Alias: pushMessageContentPoll$Input

> **pushMessageContentPoll$Input**: `object`

Version of [pushMessageContentPoll](pushMessageContentPoll.md) for method parameters.

A message with a poll

## Type declaration

### \_

> `readonly` **\_**: `"pushMessageContentPoll"`

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is a pinned message with the specified content

### is\_regular?

> `readonly` `optional` **is\_regular**: [`Bool$Input`](Bool$Input.md)

True, if the poll is regular and not in quiz mode

### question?

> `readonly` `optional` **question**: `string`

Poll question

## Defined in

dist/generated/types.d.ts:46088
