[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / archiveChatListSettings

# Type Alias: archiveChatListSettings

> **archiveChatListSettings**: `object`

Contains settings for automatic moving of chats to and from the Archive chat lists

## Type declaration

### \_

> **\_**: `"archiveChatListSettings"`

### archive\_and\_mute\_new\_chats\_from\_unknown\_users

> **archive\_and\_mute\_new\_chats\_from\_unknown\_users**: [`Bool`](Bool.md)

True, if new chats from non-contacts will be automatically archived and muted. Can be set to true only if the option "can_archive_and_mute_new_chats_from_unknown_users" is true

### keep\_chats\_from\_folders\_archived

> **keep\_chats\_from\_folders\_archived**: [`Bool`](Bool.md)

True, if unmuted chats, that are always included or pinned in a folder, will be kept in the Archive chat list when they get a new message. Ignored if keep_unmuted_chats_archived == true

### keep\_unmuted\_chats\_archived

> **keep\_unmuted\_chats\_archived**: [`Bool`](Bool.md)

True, if unmuted chats will be kept in the Archive chat list when they get a new message

## Defined in

dist/generated/types.d.ts:15841
