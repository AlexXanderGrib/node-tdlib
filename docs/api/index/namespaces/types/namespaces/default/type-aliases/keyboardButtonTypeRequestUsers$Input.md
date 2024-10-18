[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / keyboardButtonTypeRequestUsers$Input

# Type Alias: keyboardButtonTypeRequestUsers$Input

> **keyboardButtonTypeRequestUsers$Input**: `object`

Version of [keyboardButtonTypeRequestUsers](keyboardButtonTypeRequestUsers.md) for method parameters.

A button that requests users to be shared by the current user; available only in private chats. Use the method shareUsersWithBot to complete the request

## Type declaration

### \_

> `readonly` **\_**: `"keyboardButtonTypeRequestUsers"`

### id?

> `readonly` `optional` **id**: [`int32`](int32.md)

Unique button identifier

### max\_quantity?

> `readonly` `optional` **max\_quantity**: [`int32`](int32.md)

The maximum number of users to share

### request\_name?

> `readonly` `optional` **request\_name**: [`Bool$Input`](Bool$Input.md)

Pass true to request name of the users; bots only

### request\_photo?

> `readonly` `optional` **request\_photo**: [`Bool$Input`](Bool$Input.md)

Pass true to request photo of the users; bots only

### request\_username?

> `readonly` `optional` **request\_username**: [`Bool$Input`](Bool$Input.md)

Pass true to request username of the users; bots only

### restrict\_user\_is\_bot?

> `readonly` `optional` **restrict\_user\_is\_bot**: [`Bool$Input`](Bool$Input.md)

True, if the shared users must or must not be bots

### restrict\_user\_is\_premium?

> `readonly` `optional` **restrict\_user\_is\_premium**: [`Bool$Input`](Bool$Input.md)

True, if the shared users must or must not be Telegram Premium users

### user\_is\_bot?

> `readonly` `optional` **user\_is\_bot**: [`Bool$Input`](Bool$Input.md)

True, if the shared users must be bots; otherwise, the shared users must not be bots. Ignored if restrict_user_is_bot is false

### user\_is\_premium?

> `readonly` `optional` **user\_is\_premium**: [`Bool$Input`](Bool$Input.md)

True, if the shared users must be Telegram Premium users; otherwise, the shared users must not be Telegram Premium users. Ignored if restrict_user_is_premium is false

## Defined in

dist/generated/types.d.ts:17826
