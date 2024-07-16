[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pollTypeQuiz

# Type Alias: pollTypeQuiz

> **pollTypeQuiz**: `object`

A poll in quiz mode, which has exactly one correct answer option and can be answered only once

## Type declaration

### \_

> **\_**: `"pollTypeQuiz"`

### correct\_option\_id

> **correct\_option\_id**: [`int32`](int32-1.md)

0-based identifier of the correct answer option; -1 for a yet unanswered poll

### explanation

> **explanation**: [`formattedText`](formattedText-1.md)

Text that is shown when the user chooses an incorrect answer or taps on the lamp icon; 0-200 characters with at most 2 line feeds; empty for a yet unanswered poll

## Defined in

dist/generated/types.d.ts:4649
