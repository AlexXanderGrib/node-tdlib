[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportChat$DirectInput

# Type Alias: reportChat$DirectInput

> **reportChat$DirectInput**: `object`

Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if chat.can_be_reported

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of reported messages; may be empty to report the whole chat. Use messageProperties.can_be_reported to check whether the message can be reported

### reason?

> `readonly` `optional` **reason**: [`ReportReason$Input`](ReportReason$Input.md)

The reason for reporting the chat

### text?

> `readonly` `optional` **text**: `string`

Additional report details; 0-1024 characters

## Defined in

dist/generated/types.d.ts:100956
