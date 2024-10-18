[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventLogFilters

# Type Alias: chatEventLogFilters

> **chatEventLogFilters**: `object`

Represents a set of filters used to obtain a chat event log

## Type declaration

### \_

> **\_**: `"chatEventLogFilters"`

### forum\_changes

> **forum\_changes**: [`Bool`](Bool.md)

True, if forum-related actions need to be returned

### info\_changes

> **info\_changes**: [`Bool`](Bool.md)

True, if changes in chat information need to be returned

### invite\_link\_changes

> **invite\_link\_changes**: [`Bool`](Bool.md)

True, if changes to invite links need to be returned

### member\_invites

> **member\_invites**: [`Bool`](Bool.md)

True, if invited member events need to be returned

### member\_joins

> **member\_joins**: [`Bool`](Bool.md)

True, if members joining events need to be returned

### member\_leaves

> **member\_leaves**: [`Bool`](Bool.md)

True, if members leaving events need to be returned

### member\_promotions

> **member\_promotions**: [`Bool`](Bool.md)

True, if member promotion/demotion events need to be returned

### member\_restrictions

> **member\_restrictions**: [`Bool`](Bool.md)

True, if member restricted/unrestricted/banned/unbanned events need to be returned

### message\_deletions

> **message\_deletions**: [`Bool`](Bool.md)

True, if message deletions need to be returned

### message\_edits

> **message\_edits**: [`Bool`](Bool.md)

True, if message edits need to be returned

### message\_pins

> **message\_pins**: [`Bool`](Bool.md)

True, if pin/unpin events need to be returned

### setting\_changes

> **setting\_changes**: [`Bool`](Bool.md)

True, if changes in chat settings need to be returned

### video\_chat\_changes

> **video\_chat\_changes**: [`Bool`](Bool.md)

True, if video chat actions need to be returned

## Defined in

dist/generated/types.d.ts:42167
