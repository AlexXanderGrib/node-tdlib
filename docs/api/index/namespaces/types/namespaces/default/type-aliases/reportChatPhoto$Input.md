[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportChatPhoto$Input

# Type Alias: reportChatPhoto$Input

> **reportChatPhoto$Input**: `object`

Reports a chat photo to the Telegram moderators. A chat photo can be reported only if chat.can_be_reported

## Type declaration

### \_

> `readonly` **\_**: `"reportChatPhoto"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### file\_id?

> `readonly` `optional` **file\_id**: [`int32`](int32-1.md)

Identifier of the photo to report. Only full photos from chatPhoto can be reported

### reason?

> `readonly` `optional` **reason**: [`ReportReason$Input`](ReportReason$Input.md)

The reason for reporting the chat photo

### text?

> `readonly` `optional` **text**: `string`

Additional report details; 0-1024 characters

## Defined in

dist/generated/types.d.ts:98209
