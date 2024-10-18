[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportStory$Input

# Type Alias: reportStory$Input

> **reportStory$Input**: `object`

Reports a story to the Telegram moderators

## Type declaration

### \_

> `readonly` **\_**: `"reportStory"`

### reason?

> `readonly` `optional` **reason**: [`ReportReason$Input`](ReportReason$Input.md)

The reason for reporting the story

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

The identifier of the story to report

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53.md)

The identifier of the sender of the story to report

### text?

> `readonly` `optional` **text**: `string`

Additional report details; 0-1024 characters

## Defined in

dist/generated/types.d.ts:90491
