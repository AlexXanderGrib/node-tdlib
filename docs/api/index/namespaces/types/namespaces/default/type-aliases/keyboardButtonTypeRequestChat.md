[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / keyboardButtonTypeRequestChat

# Type Alias: keyboardButtonTypeRequestChat

> **keyboardButtonTypeRequestChat**: `object`

A button that requests a chat to be shared by the current user; available only in private chats. Use the method shareChatWithBot to complete the request

## Type declaration

### \_

> **\_**: `"keyboardButtonTypeRequestChat"`

### bot\_administrator\_rights

> **bot\_administrator\_rights**: [`chatAdministratorRights`](chatAdministratorRights.md) \| `null`

Expected bot administrator rights in the chat; may be null if they aren't restricted

### bot\_is\_member

> **bot\_is\_member**: [`Bool`](Bool.md)

True, if the bot must be a member of the chat; for basic group and supergroup chats only

### chat\_has\_username

> **chat\_has\_username**: [`Bool`](Bool.md)

True, if the chat must have a username; otherwise, the chat must not have a username. Ignored if restrict_chat_has_username is false

### chat\_is\_channel

> **chat\_is\_channel**: [`Bool`](Bool.md)

True, if the chat must be a channel; otherwise, a basic group or a supergroup chat is shared

### chat\_is\_created

> **chat\_is\_created**: [`Bool`](Bool.md)

True, if the chat must be created by the current user

### chat\_is\_forum

> **chat\_is\_forum**: [`Bool`](Bool.md)

True, if the chat must be a forum supergroup; otherwise, the chat must not be a forum supergroup. Ignored if restrict_chat_is_forum is false

### id

> **id**: [`int32`](int32.md)

Unique button identifier

### request\_photo

> **request\_photo**: [`Bool`](Bool.md)

Pass true to request photo of the chat; bots only

### request\_title

> **request\_title**: [`Bool`](Bool.md)

Pass true to request title of the chat; bots only

### request\_username

> **request\_username**: [`Bool`](Bool.md)

Pass true to request username of the chat; bots only

### restrict\_chat\_has\_username

> **restrict\_chat\_has\_username**: [`Bool`](Bool.md)

True, if the chat must or must not have a username

### restrict\_chat\_is\_forum

> **restrict\_chat\_is\_forum**: [`Bool`](Bool.md)

True, if the chat must or must not be a forum supergroup

### user\_administrator\_rights

> **user\_administrator\_rights**: [`chatAdministratorRights`](chatAdministratorRights.md) \| `null`

Expected user administrator rights in the chat; may be null if they aren't restricted

## Defined in

dist/generated/types.d.ts:17877
