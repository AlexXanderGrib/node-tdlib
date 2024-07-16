[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / user

# Type Alias: user

> **user**: `object`

Represents a user

## Type declaration

### \_

> **\_**: `"user"`

### accent\_color\_id

> **accent\_color\_id**: [`int32`](int32-1.md)

Identifier of the accent color for name, and backgrounds of profile photo, reply header, and link preview. For Telegram Premium users only

### added\_to\_attachment\_menu

> **added\_to\_attachment\_menu**: [`Bool`](Bool.md)

True, if the user added the current bot to attachment menu; only available to bots

### background\_custom\_emoji\_id

> **background\_custom\_emoji\_id**: [`int64`](int64-1.md)

Identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none. For Telegram Premium users only

### emoji\_status

> **emoji\_status**: [`emojiStatus`](emojiStatus-1.md) \| `null`

Emoji status to be shown instead of the default Telegram Premium badge; may be null. For Telegram Premium users only

### first\_name

> **first\_name**: `string`

First name of the user

### has\_active\_stories

> **has\_active\_stories**: [`Bool`](Bool.md)

True, if the user has non-expired stories available to the current user

### has\_unread\_active\_stories

> **has\_unread\_active\_stories**: [`Bool`](Bool.md)

True, if the user has unread non-expired stories available to the current user

### have\_access

> **have\_access**: [`Bool`](Bool.md)

If false, the user is inaccessible, and the only information known about the user is inside this class. Identifier of the user can't be passed to any method

### id

> **id**: [`int53`](int53-1.md)

User identifier

### is\_close\_friend

> **is\_close\_friend**: [`Bool`](Bool.md)

The user is a close friend of the current user; implies that the user is a contact

### is\_contact

> **is\_contact**: [`Bool`](Bool.md)

The user is a contact of the current user

### is\_fake

> **is\_fake**: [`Bool`](Bool.md)

True, if many users reported this user as a fake account

### is\_mutual\_contact

> **is\_mutual\_contact**: [`Bool`](Bool.md)

The user is a contact of the current user and the current user is a contact of the user

### is\_premium

> **is\_premium**: [`Bool`](Bool.md)

True, if the user is a Telegram Premium user

### is\_scam

> **is\_scam**: [`Bool`](Bool.md)

True, if many users reported this user as a scam

### is\_support

> **is\_support**: [`Bool`](Bool.md)

True, if the user is Telegram support account

### is\_verified

> **is\_verified**: [`Bool`](Bool.md)

True, if the user is verified

### language\_code

> **language\_code**: `string`

IETF language tag of the user's language; only available to bots

### last\_name

> **last\_name**: `string`

Last name of the user

### phone\_number

> **phone\_number**: `string`

Phone number of the user

### profile\_accent\_color\_id

> **profile\_accent\_color\_id**: [`int32`](int32-1.md)

Identifier of the accent color for the user's profile; -1 if none. For Telegram Premium users only

### profile\_background\_custom\_emoji\_id

> **profile\_background\_custom\_emoji\_id**: [`int64`](int64-1.md)

Identifier of a custom emoji to be shown on the background of the user's profile; 0 if none. For Telegram Premium users only

### profile\_photo

> **profile\_photo**: [`profilePhoto`](profilePhoto-1.md) \| `null`

Profile photo of the user; may be null

### restriction\_reason

> **restriction\_reason**: `string`

If non-empty, it contains a human-readable description of the reason why access to this user must be restricted

### restricts\_new\_chats

> **restricts\_new\_chats**: [`Bool`](Bool.md)

True, if the user may restrict new chats with non-contacts. Use canSendMessageToUser to check whether the current user can message the user or try to create a chat with them

### status

> **status**: [`UserStatus`](UserStatus.md)

Current online status of the user

### type

> **type**: [`UserType`](UserType.md)

Type of the user

### usernames

> **usernames**: [`usernames`](usernames-1.md) \| `null`

Usernames of the user; may be null

## Defined in

dist/generated/types.d.ts:9155
