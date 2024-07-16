[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chat$Input

# Type Alias: chat$Input

> **chat$Input**: `object`

Version of [chat](chat-1.md) for method parameters.

A chat. (Can be a private chat, basic group, supergroup, or secret chat)

## Type declaration

### \_

> `readonly` **\_**: `"chat"`

### accent\_color\_id?

> `readonly` `optional` **accent\_color\_id**: [`int32`](int32-1.md)

Identifier of the accent color for message sender name, and backgrounds of chat photo, reply header, and link preview

### action\_bar?

> `readonly` `optional` **action\_bar**: [`ChatActionBar$Input`](ChatActionBar$Input.md) \| `null`

Information about actions which must be possible to do through the chat action bar; may be null if none

### available\_reactions?

> `readonly` `optional` **available\_reactions**: [`ChatAvailableReactions$Input`](ChatAvailableReactions$Input.md)

Types of reaction, available in the chat

### background?

> `readonly` `optional` **background**: [`chatBackground$Input`](chatBackground$Input-1.md) \| `null`

Background set for the chat; may be null if none

### background\_custom\_emoji\_id?

> `readonly` `optional` **background\_custom\_emoji\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of a custom emoji to be shown on the reply header and link preview background for messages sent by the chat; 0 if none

### block\_list?

> `readonly` `optional` **block\_list**: [`BlockList$Input`](BlockList$Input.md) \| `null`

Block list to which the chat is added; may be null if none

### business\_bot\_manage\_bar?

> `readonly` `optional` **business\_bot\_manage\_bar**: [`businessBotManageBar$Input`](businessBotManageBar$Input-1.md) \| `null`

Information about bar for managing a business bot in the chat; may be null if none

### can\_be\_deleted\_for\_all\_users?

> `readonly` `optional` **can\_be\_deleted\_for\_all\_users**: [`Bool$Input`](Bool$Input.md)

True, if the chat messages can be deleted for all users

### can\_be\_deleted\_only\_for\_self?

> `readonly` `optional` **can\_be\_deleted\_only\_for\_self**: [`Bool$Input`](Bool$Input.md)

True, if the chat messages can be deleted only for the current user while other users will continue to see the messages

### can\_be\_reported?

> `readonly` `optional` **can\_be\_reported**: [`Bool$Input`](Bool$Input.md)

True, if the chat can be reported to Telegram moderators through reportChat or reportChatPhoto

### chat\_lists?

> `readonly` `optional` **chat\_lists**: [`vector$Input`](vector$Input.md)\<[`ChatList$Input`](ChatList$Input.md)\>

Chat lists to which the chat belongs. A chat can have a non-zero position in a chat list even it doesn't belong to the chat list and have no position in a chat list even it belongs to the chat list

### client\_data?

> `readonly` `optional` **client\_data**: `string`

Application-specific data associated with the chat. (For example, the chat scroll position or local chat notification settings can be stored here.) Persistent if the message database is used

### default\_disable\_notification?

> `readonly` `optional` **default\_disable\_notification**: [`Bool$Input`](Bool$Input.md)

Default value of the disable_notification parameter, used when a message is sent to the chat

### draft\_message?

> `readonly` `optional` **draft\_message**: [`draftMessage$Input`](draftMessage$Input-1.md) \| `null`

A draft of a message in the chat; may be null if none

### emoji\_status?

> `readonly` `optional` **emoji\_status**: [`emojiStatus$Input`](emojiStatus$Input-1.md) \| `null`

Emoji status to be shown along with chat title; may be null

### has\_protected\_content?

> `readonly` `optional` **has\_protected\_content**: [`Bool$Input`](Bool$Input.md)

True, if chat content can't be saved locally, forwarded, or copied

### has\_scheduled\_messages?

> `readonly` `optional` **has\_scheduled\_messages**: [`Bool$Input`](Bool$Input.md)

True, if the chat has scheduled messages

### id?

> `readonly` `optional` **id**: [`int53`](int53-1.md)

Chat unique identifier

### is\_marked\_as\_unread?

> `readonly` `optional` **is\_marked\_as\_unread**: [`Bool$Input`](Bool$Input.md)

True, if the chat is marked as unread

### is\_translatable?

> `readonly` `optional` **is\_translatable**: [`Bool$Input`](Bool$Input.md)

True, if translation of all messages in the chat must be suggested to the user

### last\_message?

> `readonly` `optional` **last\_message**: [`message$Input`](message$Input-1.md) \| `null`

Last message in the chat; may be null if none or unknown

### last\_read\_inbox\_message\_id?

> `readonly` `optional` **last\_read\_inbox\_message\_id**: [`int53`](int53-1.md)

Identifier of the last read incoming message

### last\_read\_outbox\_message\_id?

> `readonly` `optional` **last\_read\_outbox\_message\_id**: [`int53`](int53-1.md)

Identifier of the last read outgoing message

### message\_auto\_delete\_time?

> `readonly` `optional` **message\_auto\_delete\_time**: [`int32`](int32-1.md)

Current message auto-delete or self-destruct timer setting for the chat, in seconds; 0 if disabled. Self-destruct timer in secret chats starts after the message or its content is viewed. Auto-delete timer in other chats starts from the send date

### message\_sender\_id?

> `readonly` `optional` **message\_sender\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of a user or chat that is selected to send messages in the chat; may be null if the user can't change message sender

### notification\_settings?

> `readonly` `optional` **notification\_settings**: [`chatNotificationSettings$Input`](chatNotificationSettings$Input-1.md)

Notification settings for the chat

### pending\_join\_requests?

> `readonly` `optional` **pending\_join\_requests**: [`chatJoinRequestsInfo$Input`](chatJoinRequestsInfo$Input-1.md) \| `null`

Information about pending join requests; may be null if none

### permissions?

> `readonly` `optional` **permissions**: [`chatPermissions$Input`](chatPermissions$Input-1.md)

Actions that non-administrator chat members are allowed to take in the chat

### photo?

> `readonly` `optional` **photo**: [`chatPhotoInfo$Input`](chatPhotoInfo$Input-1.md) \| `null`

Chat photo; may be null

### positions?

> `readonly` `optional` **positions**: [`vector$Input`](vector$Input.md)\<[`chatPosition$Input`](chatPosition$Input-1.md)\>

Positions of the chat in chat lists

### profile\_accent\_color\_id?

> `readonly` `optional` **profile\_accent\_color\_id**: [`int32`](int32-1.md)

Identifier of the profile accent color for the chat's profile; -1 if none

### profile\_background\_custom\_emoji\_id?

> `readonly` `optional` **profile\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of a custom emoji to be shown on the background of the chat's profile; 0 if none

### reply\_markup\_message\_id?

> `readonly` `optional` **reply\_markup\_message\_id**: [`int53`](int53-1.md)

Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the chat

### theme\_name?

> `readonly` `optional` **theme\_name**: `string`

If non-empty, name of a theme, set for the chat

### title?

> `readonly` `optional` **title**: `string`

Chat title

### type?

> `readonly` `optional` **type**: [`ChatType$Input`](ChatType$Input.md)

Type of the chat

### unread\_count?

> `readonly` `optional` **unread\_count**: [`int32`](int32-1.md)

Number of unread messages in the chat

### unread\_mention\_count?

> `readonly` `optional` **unread\_mention\_count**: [`int32`](int32-1.md)

Number of unread messages with a mention/reply in the chat

### unread\_reaction\_count?

> `readonly` `optional` **unread\_reaction\_count**: [`int32`](int32-1.md)

Number of messages with unread reactions in the chat

### video\_chat?

> `readonly` `optional` **video\_chat**: [`videoChat$Input`](videoChat$Input-1.md)

Information about video chat of the chat

### view\_as\_topics?

> `readonly` `optional` **view\_as\_topics**: [`Bool$Input`](Bool$Input.md)

True, if the chat is a forum supergroup that must be shown in the "View as topics" mode, or Saved Messages chat that must be shown in the "View as chats"

## Defined in

dist/generated/types.d.ts:16500
