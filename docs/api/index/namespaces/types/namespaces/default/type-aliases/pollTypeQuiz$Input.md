[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pollTypeQuiz$Input

# Type Alias: pollTypeQuiz$Input

> **pollTypeQuiz$Input**: `object`

Version of [pollTypeQuiz](pollTypeQuiz.md) for method parameters.

A poll in quiz mode, which has exactly one correct answer option and can be answered only once

## Type declaration

### \_

> `readonly` **\_**: `"pollTypeQuiz"`

### correct\_option\_id?

> `readonly` `optional` **correct\_option\_id**: [`int32`](int32.md)

0-based identifier of the correct answer option; -1 for a yet unanswered poll

### explanation?

> `readonly` `optional` **explanation**: [`formattedText$Input`](formattedText$Input.md)

Text that is shown when the user chooses an incorrect answer or taps on the lamp icon; 0-200 characters with at most 2 line feeds; empty for a yet unanswered poll

## Defined in

dist/generated/types.d.ts:4713
