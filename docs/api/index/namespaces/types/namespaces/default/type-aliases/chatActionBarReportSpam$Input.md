[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatActionBarReportSpam$Input

# Type Alias: chatActionBarReportSpam$Input

> **chatActionBarReportSpam$Input**: `object`

Version of [chatActionBarReportSpam](chatActionBarReportSpam.md) for method parameters.

The chat can be reported as spam using the method reportChat with the reason reportReasonSpam. If the chat is a private chat with a user with an emoji status, then a notice about emoji status usage must be shown

## Type declaration

### \_

> `readonly` **\_**: `"chatActionBarReportSpam"`

### can\_unarchive?

> `readonly` `optional` **can\_unarchive**: [`Bool$Input`](Bool$Input.md)

If true, the chat was automatically archived and can be moved back to the main chat list using addChatToList simultaneously with setting chat notification settings to default using setChatNotificationSettings

## Defined in

dist/generated/types.d.ts:16956
