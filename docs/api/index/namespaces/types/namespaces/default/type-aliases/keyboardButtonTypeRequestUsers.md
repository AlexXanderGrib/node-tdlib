[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / keyboardButtonTypeRequestUsers

# Type Alias: keyboardButtonTypeRequestUsers

> **keyboardButtonTypeRequestUsers**: `object`

A button that requests users to be shared by the current user; available only in private chats. Use the method shareUsersWithBot to complete the request

## Type declaration

### \_

> **\_**: `"keyboardButtonTypeRequestUsers"`

### id

> **id**: [`int32`](int32-1.md)

Unique button identifier

### max\_quantity

> **max\_quantity**: [`int32`](int32-1.md)

The maximum number of users to share

### request\_name

> **request\_name**: [`Bool`](Bool.md)

Pass true to request name of the users; bots only

### request\_photo

> **request\_photo**: [`Bool`](Bool.md)

Pass true to request photo of the users; bots only

### request\_username

> **request\_username**: [`Bool`](Bool.md)

Pass true to request username of the users; bots only

### restrict\_user\_is\_bot

> **restrict\_user\_is\_bot**: [`Bool`](Bool.md)

True, if the shared users must or must not be bots

### restrict\_user\_is\_premium

> **restrict\_user\_is\_premium**: [`Bool`](Bool.md)

True, if the shared users must or must not be Telegram Premium users

### user\_is\_bot

> **user\_is\_bot**: [`Bool`](Bool.md)

True, if the shared users must be bots; otherwise, the shared users must not be bots. Ignored if restrict_user_is_bot is false

### user\_is\_premium

> **user\_is\_premium**: [`Bool`](Bool.md)

True, if the shared users must be Telegram Premium users; otherwise, the shared users must not be Telegram Premium users. Ignored if restrict_user_is_premium is false

## Defined in

dist/generated/types.d.ts:17181
