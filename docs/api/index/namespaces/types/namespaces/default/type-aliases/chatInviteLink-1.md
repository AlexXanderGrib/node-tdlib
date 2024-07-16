[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLink

# Type Alias: chatInviteLink

> **chatInviteLink**: `object`

Contains a chat invite link

## Type declaration

### \_

> **\_**: `"chatInviteLink"`

### creates\_join\_request

> **creates\_join\_request**: [`Bool`](Bool.md)

True, if the link only creates join request. If true, total number of joining members will be unlimited

### creator\_user\_id

> **creator\_user\_id**: [`int53`](int53-1.md)

User identifier of an administrator created the link

### date

> **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the link was created

### edit\_date

> **edit\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the link was last edited; 0 if never or unknown

### expiration\_date

> **expiration\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the link will expire; 0 if never

### invite\_link

> **invite\_link**: `string`

Chat invite link

### is\_primary

> **is\_primary**: [`Bool`](Bool.md)

True, if the link is primary. Primary invite link can't have name, expiration date, or usage limit. There is exactly one primary invite link for each administrator with can_invite_users right at a given time

### is\_revoked

> **is\_revoked**: [`Bool`](Bool.md)

True, if the link was revoked

### member\_count

> **member\_count**: [`int32`](int32-1.md)

Number of chat members, which joined the chat using the link

### member\_limit

> **member\_limit**: [`int32`](int32-1.md)

The maximum number of members, which can join the chat using the link simultaneously; 0 if not limited. Always 0 if the link requires approval

### name

> **name**: `string`

Name of the link

### pending\_join\_request\_count

> **pending\_join\_request\_count**: [`int32`](int32-1.md)

Number of pending join requests created using this link

## Defined in

dist/generated/types.d.ts:10467
