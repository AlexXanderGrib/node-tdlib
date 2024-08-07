[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportChat$Input

# Type Alias: reportChat$Input

> **reportChat$Input**: `object`

Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if chat.can_be_reported

## Type declaration

### \_

> `readonly` **\_**: `"reportChat"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of reported messages; may be empty to report the whole chat

### reason?

> `readonly` `optional` **reason**: [`ReportReason$Input`](ReportReason$Input.md)

The reason for reporting the chat

### text?

> `readonly` `optional` **text**: `string`

Additional report details; 0-1024 characters

## Defined in

dist/generated/types.d.ts:98151
