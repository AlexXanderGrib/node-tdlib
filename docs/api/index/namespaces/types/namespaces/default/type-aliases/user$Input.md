[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / user$Input

# Type Alias: user$Input

> **user$Input**: `object`

Version of [user](user.md) for method parameters.

Represents a user

## Type declaration

### \_

> `readonly` **\_**: `"user"`

### accent\_color\_id?

> `readonly` `optional` **accent\_color\_id**: [`int32`](int32.md)

Identifier of the accent color for name, and backgrounds of profile photo, reply header, and link preview. For Telegram Premium users only

### added\_to\_attachment\_menu?

> `readonly` `optional` **added\_to\_attachment\_menu**: [`Bool$Input`](Bool$Input.md)

True, if the user added the current bot to attachment menu; only available to bots

### background\_custom\_emoji\_id?

> `readonly` `optional` **background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Identifier of a custom emoji to be shown on the reply header and link preview background; 0 if none. For Telegram Premium users only

### emoji\_status?

> `readonly` `optional` **emoji\_status**: [`emojiStatus$Input`](emojiStatus$Input.md) \| `null`

Emoji status to be shown instead of the default Telegram Premium badge; may be null. For Telegram Premium users only

### first\_name?

> `readonly` `optional` **first\_name**: `string`

First name of the user

### has\_active\_stories?

> `readonly` `optional` **has\_active\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the user has non-expired stories available to the current user

### has\_unread\_active\_stories?

> `readonly` `optional` **has\_unread\_active\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the user has unread non-expired stories available to the current user

### have\_access?

> `readonly` `optional` **have\_access**: [`Bool$Input`](Bool$Input.md)

If false, the user is inaccessible, and the only information known about the user is inside this class. Identifier of the user can't be passed to any method

### id?

> `readonly` `optional` **id**: [`int53`](int53.md)

User identifier

### is\_close\_friend?

> `readonly` `optional` **is\_close\_friend**: [`Bool$Input`](Bool$Input.md)

The user is a close friend of the current user; implies that the user is a contact

### is\_contact?

> `readonly` `optional` **is\_contact**: [`Bool$Input`](Bool$Input.md)

The user is a contact of the current user

### is\_fake?

> `readonly` `optional` **is\_fake**: [`Bool$Input`](Bool$Input.md)

True, if many users reported this user as a fake account

### is\_mutual\_contact?

> `readonly` `optional` **is\_mutual\_contact**: [`Bool$Input`](Bool$Input.md)

The user is a contact of the current user and the current user is a contact of the user

### is\_premium?

> `readonly` `optional` **is\_premium**: [`Bool$Input`](Bool$Input.md)

True, if the user is a Telegram Premium user

### is\_scam?

> `readonly` `optional` **is\_scam**: [`Bool$Input`](Bool$Input.md)

True, if many users reported this user as a scam

### is\_support?

> `readonly` `optional` **is\_support**: [`Bool$Input`](Bool$Input.md)

True, if the user is Telegram support account

### is\_verified?

> `readonly` `optional` **is\_verified**: [`Bool$Input`](Bool$Input.md)

True, if the user is verified

### language\_code?

> `readonly` `optional` **language\_code**: `string`

IETF language tag of the user's language; only available to bots

### last\_name?

> `readonly` `optional` **last\_name**: `string`

Last name of the user

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

Phone number of the user

### profile\_accent\_color\_id?

> `readonly` `optional` **profile\_accent\_color\_id**: [`int32`](int32.md)

Identifier of the accent color for the user's profile; -1 if none. For Telegram Premium users only

### profile\_background\_custom\_emoji\_id?

> `readonly` `optional` **profile\_background\_custom\_emoji\_id**: [`int64$Input`](int64$Input.md)

Identifier of a custom emoji to be shown on the background of the user's profile; 0 if none. For Telegram Premium users only

### profile\_photo?

> `readonly` `optional` **profile\_photo**: [`profilePhoto$Input`](profilePhoto$Input.md) \| `null`

Profile photo of the user; may be null

### restriction\_reason?

> `readonly` `optional` **restriction\_reason**: `string`

If non-empty, it contains a human-readable description of the reason why access to this user must be restricted

### restricts\_new\_chats?

> `readonly` `optional` **restricts\_new\_chats**: [`Bool$Input`](Bool$Input.md)

True, if the user may restrict new chats with non-contacts. Use canSendMessageToUser to check whether the current user can message the user or try to create a chat with them

### status?

> `readonly` `optional` **status**: [`UserStatus$Input`](UserStatus$Input.md)

Current online status of the user

### type?

> `readonly` `optional` **type**: [`UserType$Input`](UserType$Input.md)

Type of the user

### usernames?

> `readonly` `optional` **usernames**: [`usernames$Input`](usernames$Input.md) \| `null`

Usernames of the user; may be null

## Defined in

dist/generated/types.d.ts:9739
