[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatActionBarReportAddBlock

# Type Alias: chatActionBarReportAddBlock

> **chatActionBarReportAddBlock**: `object`

The chat is a private or secret chat, which can be reported using the method reportChat, or the other user can be blocked using the method setMessageSenderBlockList,

- or the other user can be added to the contact list using the method addContact. If the chat is a private chat with a user with an emoji status, then a notice about emoji status usage must be shown

## Type declaration

### \_

> **\_**: `"chatActionBarReportAddBlock"`

### can\_unarchive

> **can\_unarchive**: [`Bool`](Bool.md)

If true, the chat was automatically archived and can be moved back to the main chat list using addChatToList simultaneously with setting chat notification settings to default using setChatNotificationSettings

### distance

> **distance**: [`int32`](int32-1.md)

If non-negative, the current user was found by the other user through searchChatsNearby and this is the distance between the users

## Defined in

dist/generated/types.d.ts:16997
