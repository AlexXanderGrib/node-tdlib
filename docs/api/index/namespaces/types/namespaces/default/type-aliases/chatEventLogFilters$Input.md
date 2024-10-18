[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventLogFilters$Input

# Type Alias: chatEventLogFilters$Input

> **chatEventLogFilters$Input**: `object`

Version of [chatEventLogFilters](chatEventLogFilters.md) for method parameters.

Represents a set of filters used to obtain a chat event log

## Type declaration

### \_

> `readonly` **\_**: `"chatEventLogFilters"`

### forum\_changes?

> `readonly` `optional` **forum\_changes**: [`Bool$Input`](Bool$Input.md)

True, if forum-related actions need to be returned

### info\_changes?

> `readonly` `optional` **info\_changes**: [`Bool$Input`](Bool$Input.md)

True, if changes in chat information need to be returned

### invite\_link\_changes?

> `readonly` `optional` **invite\_link\_changes**: [`Bool$Input`](Bool$Input.md)

True, if changes to invite links need to be returned

### member\_invites?

> `readonly` `optional` **member\_invites**: [`Bool$Input`](Bool$Input.md)

True, if invited member events need to be returned

### member\_joins?

> `readonly` `optional` **member\_joins**: [`Bool$Input`](Bool$Input.md)

True, if members joining events need to be returned

### member\_leaves?

> `readonly` `optional` **member\_leaves**: [`Bool$Input`](Bool$Input.md)

True, if members leaving events need to be returned

### member\_promotions?

> `readonly` `optional` **member\_promotions**: [`Bool$Input`](Bool$Input.md)

True, if member promotion/demotion events need to be returned

### member\_restrictions?

> `readonly` `optional` **member\_restrictions**: [`Bool$Input`](Bool$Input.md)

True, if member restricted/unrestricted/banned/unbanned events need to be returned

### message\_deletions?

> `readonly` `optional` **message\_deletions**: [`Bool$Input`](Bool$Input.md)

True, if message deletions need to be returned

### message\_edits?

> `readonly` `optional` **message\_edits**: [`Bool$Input`](Bool$Input.md)

True, if message edits need to be returned

### message\_pins?

> `readonly` `optional` **message\_pins**: [`Bool$Input`](Bool$Input.md)

True, if pin/unpin events need to be returned

### setting\_changes?

> `readonly` `optional` **setting\_changes**: [`Bool$Input`](Bool$Input.md)

True, if changes in chat settings need to be returned

### video\_chat\_changes?

> `readonly` `optional` **video\_chat\_changes**: [`Bool$Input`](Bool$Input.md)

True, if video chat actions need to be returned

## Defined in

dist/generated/types.d.ts:42240
