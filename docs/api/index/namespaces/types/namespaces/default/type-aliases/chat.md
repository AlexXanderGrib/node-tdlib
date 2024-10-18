[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chat

# Type Alias: chat

> **chat**: `object`

A chat. (Can be a private chat, basic group, supergroup, or secret chat)

## Type declaration

### \_

> **\_**: `"chat"`

### accent\_color\_id

> **accent\_color\_id**: [`int32`](int32.md)

Identifier of the accent color for message sender name, and backgrounds of chat photo, reply header, and link preview

### action\_bar

> **action\_bar**: [`ChatActionBar`](ChatActionBar.md) \| `null`

Information about actions which must be possible to do through the chat action bar; may be null if none

### available\_reactions

> **available\_reactions**: [`ChatAvailableReactions`](ChatAvailableReactions.md)

Types of reaction, available in the chat

### background

> **background**: [`chatBackground`](chatBackground.md) \| `null`

Background set for the chat; may be null if none

### background\_custom\_emoji\_id

> **background\_custom\_emoji\_id**: [`int64`](int64.md)

Identifier of a custom emoji to be shown on the reply header and link preview background for messages sent by the chat; 0 if none

### block\_list

> **block\_list**: [`BlockList`](BlockList.md) \| `null`

Block list to which the chat is added; may be null if none

### business\_bot\_manage\_bar

> **business\_bot\_manage\_bar**: [`businessBotManageBar`](businessBotManageBar.md) \| `null`

Information about bar for managing a business bot in the chat; may be null if none

### can\_be\_deleted\_for\_all\_users

> **can\_be\_deleted\_for\_all\_users**: [`Bool`](Bool.md)

True, if the chat messages can be deleted for all users

### can\_be\_deleted\_only\_for\_self

> **can\_be\_deleted\_only\_for\_self**: [`Bool`](Bool.md)

True, if the chat messages can be deleted only for the current user while other users will continue to see the messages

### can\_be\_reported

> **can\_be\_reported**: [`Bool`](Bool.md)

True, if the chat can be reported to Telegram moderators through reportChat or reportChatPhoto

### chat\_lists

> **chat\_lists**: [`vector`](vector.md)\<[`ChatList`](ChatList.md)\>

Chat lists to which the chat belongs. A chat can have a non-zero position in a chat list even it doesn't belong to the chat list and have no position in a chat list even it belongs to the chat list

### client\_data

> **client\_data**: `string`

Application-specific data associated with the chat. (For example, the chat scroll position or local chat notification settings can be stored here.) Persistent if the message database is used

### default\_disable\_notification

> **default\_disable\_notification**: [`Bool`](Bool.md)

Default value of the disable_notification parameter, used when a message is sent to the chat

### draft\_message

> **draft\_message**: [`draftMessage`](draftMessage.md) \| `null`

A draft of a message in the chat; may be null if none

### emoji\_status

> **emoji\_status**: [`emojiStatus`](emojiStatus.md) \| `null`

Emoji status to be shown along with chat title; may be null

### has\_protected\_content

> **has\_protected\_content**: [`Bool`](Bool.md)

True, if chat content can't be saved locally, forwarded, or copied

### has\_scheduled\_messages

> **has\_scheduled\_messages**: [`Bool`](Bool.md)

True, if the chat has scheduled messages

### id

> **id**: [`int53`](int53.md)

Chat unique identifier

### is\_marked\_as\_unread

> **is\_marked\_as\_unread**: [`Bool`](Bool.md)

True, if the chat is marked as unread

### is\_translatable

> **is\_translatable**: [`Bool`](Bool.md)

True, if translation of all messages in the chat must be suggested to the user

### last\_message

> **last\_message**: [`message`](message.md) \| `null`

Last message in the chat; may be null if none or unknown

### last\_read\_inbox\_message\_id

> **last\_read\_inbox\_message\_id**: [`int53`](int53.md)

Identifier of the last read incoming message

### last\_read\_outbox\_message\_id

> **last\_read\_outbox\_message\_id**: [`int53`](int53.md)

Identifier of the last read outgoing message

### message\_auto\_delete\_time

> **message\_auto\_delete\_time**: [`int32`](int32.md)

Current message auto-delete or self-destruct timer setting for the chat, in seconds; 0 if disabled. Self-destruct timer in secret chats starts after the message or its content is viewed. Auto-delete timer in other chats starts from the send date

### message\_sender\_id

> **message\_sender\_id**: [`MessageSender`](MessageSender.md) \| `null`

Identifier of a user or chat that is selected to send messages in the chat; may be null if the user can't change message sender

### notification\_settings

> **notification\_settings**: [`chatNotificationSettings`](chatNotificationSettings.md)

Notification settings for the chat

### pending\_join\_requests

> **pending\_join\_requests**: [`chatJoinRequestsInfo`](chatJoinRequestsInfo.md) \| `null`

Information about pending join requests; may be null if none

### permissions

> **permissions**: [`chatPermissions`](chatPermissions.md)

Actions that non-administrator chat members are allowed to take in the chat

### photo

> **photo**: [`chatPhotoInfo`](chatPhotoInfo.md) \| `null`

Chat photo; may be null

### positions

> **positions**: [`vector`](vector.md)\<[`chatPosition`](chatPosition.md)\>

Positions of the chat in chat lists

### profile\_accent\_color\_id

> **profile\_accent\_color\_id**: [`int32`](int32.md)

Identifier of the profile accent color for the chat's profile; -1 if none

### profile\_background\_custom\_emoji\_id

> **profile\_background\_custom\_emoji\_id**: [`int64`](int64.md)

Identifier of a custom emoji to be shown on the background of the chat's profile; 0 if none

### reply\_markup\_message\_id

> **reply\_markup\_message\_id**: [`int53`](int53.md)

Identifier of the message from which reply markup needs to be used; 0 if there is no default custom reply markup in the chat

### theme\_name

> **theme\_name**: `string`

If non-empty, name of a theme, set for the chat

### title

> **title**: `string`

Chat title

### type

> **type**: [`ChatType`](ChatType.md)

Type of the chat

### unread\_count

> **unread\_count**: [`int32`](int32.md)

Number of unread messages in the chat

### unread\_mention\_count

> **unread\_mention\_count**: [`int32`](int32.md)

Number of unread messages with a mention/reply in the chat

### unread\_reaction\_count

> **unread\_reaction\_count**: [`int32`](int32.md)

Number of messages with unread reactions in the chat

### video\_chat

> **video\_chat**: [`videoChat`](videoChat.md)

Information about video chat of the chat

### view\_as\_topics

> **view\_as\_topics**: [`Bool`](Bool.md)

True, if the chat is a forum supergroup that must be shown in the "View as topics" mode, or Saved Messages chat that must be shown in the "View as chats"

## Defined in

dist/generated/types.d.ts:16879
