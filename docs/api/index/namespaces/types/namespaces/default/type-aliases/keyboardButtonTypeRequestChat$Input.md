[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / keyboardButtonTypeRequestChat$Input

# Type Alias: keyboardButtonTypeRequestChat$Input

> **keyboardButtonTypeRequestChat$Input**: `object`

Version of [keyboardButtonTypeRequestChat](keyboardButtonTypeRequestChat.md) for method parameters.

A button that requests a chat to be shared by the current user; available only in private chats. Use the method shareChatWithBot to complete the request

## Type declaration

### \_

> `readonly` **\_**: `"keyboardButtonTypeRequestChat"`

### bot\_administrator\_rights?

> `readonly` `optional` **bot\_administrator\_rights**: [`chatAdministratorRights$Input`](chatAdministratorRights$Input-1.md) \| `null`

Expected bot administrator rights in the chat; may be null if they aren't restricted

### bot\_is\_member?

> `readonly` `optional` **bot\_is\_member**: [`Bool$Input`](Bool$Input.md)

True, if the bot must be a member of the chat; for basic group and supergroup chats only

### chat\_has\_username?

> `readonly` `optional` **chat\_has\_username**: [`Bool$Input`](Bool$Input.md)

True, if the chat must have a username; otherwise, the chat must not have a username. Ignored if restrict_chat_has_username is false

### chat\_is\_channel?

> `readonly` `optional` **chat\_is\_channel**: [`Bool$Input`](Bool$Input.md)

True, if the chat must be a channel; otherwise, a basic group or a supergroup chat is shared

### chat\_is\_created?

> `readonly` `optional` **chat\_is\_created**: [`Bool$Input`](Bool$Input.md)

True, if the chat must be created by the current user

### chat\_is\_forum?

> `readonly` `optional` **chat\_is\_forum**: [`Bool$Input`](Bool$Input.md)

True, if the chat must be a forum supergroup; otherwise, the chat must not be a forum supergroup. Ignored if restrict_chat_is_forum is false

### id?

> `readonly` `optional` **id**: [`int32`](int32-1.md)

Unique button identifier

### request\_photo?

> `readonly` `optional` **request\_photo**: [`Bool$Input`](Bool$Input.md)

Pass true to request photo of the chat; bots only

### request\_title?

> `readonly` `optional` **request\_title**: [`Bool$Input`](Bool$Input.md)

Pass true to request title of the chat; bots only

### request\_username?

> `readonly` `optional` **request\_username**: [`Bool$Input`](Bool$Input.md)

Pass true to request username of the chat; bots only

### restrict\_chat\_has\_username?

> `readonly` `optional` **restrict\_chat\_has\_username**: [`Bool$Input`](Bool$Input.md)

True, if the chat must or must not have a username

### restrict\_chat\_is\_forum?

> `readonly` `optional` **restrict\_chat\_is\_forum**: [`Bool$Input`](Bool$Input.md)

True, if the chat must or must not be a forum supergroup

### user\_administrator\_rights?

> `readonly` `optional` **user\_administrator\_rights**: [`chatAdministratorRights$Input`](chatAdministratorRights$Input-1.md) \| `null`

Expected user administrator rights in the chat; may be null if they aren't restricted

## Defined in

dist/generated/types.d.ts:17358
