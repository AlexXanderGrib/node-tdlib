[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / userTypeBot$Input

# Type Alias: userTypeBot$Input

> **userTypeBot$Input**: `object`

Version of [userTypeBot](userTypeBot.md) for method parameters.

A bot (see https://core.telegram.org/bots)

## Type declaration

### \_

> `readonly` **\_**: `"userTypeBot"`

### can\_be\_added\_to\_attachment\_menu?

> `readonly` `optional` **can\_be\_added\_to\_attachment\_menu**: [`Bool$Input`](Bool$Input.md)

True, if the bot can be added to attachment or side menu

### can\_be\_edited?

> `readonly` `optional` **can\_be\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the bot is owned by the current user and can be edited using the methods toggleBotUsernameIsActive, reorderBotActiveUsernames, setBotProfilePhoto, setBotName, setBotInfoDescription, and setBotInfoShortDescription

### can\_connect\_to\_business?

> `readonly` `optional` **can\_connect\_to\_business**: [`Bool$Input`](Bool$Input.md)

True, if the bot supports connection to Telegram Business accounts

### can\_join\_groups?

> `readonly` `optional` **can\_join\_groups**: [`Bool$Input`](Bool$Input.md)

True, if the bot can be invited to basic group and supergroup chats

### can\_read\_all\_group\_messages?

> `readonly` `optional` **can\_read\_all\_group\_messages**: [`Bool$Input`](Bool$Input.md)

True, if the bot can read all messages in basic group or supergroup chats and not just those addressed to the bot. In private and channel chats a bot can always read all messages

### inline\_query\_placeholder?

> `readonly` `optional` **inline\_query\_placeholder**: `string`

Placeholder for inline queries (displayed on the application input field)

### is\_inline?

> `readonly` `optional` **is\_inline**: [`Bool$Input`](Bool$Input.md)

True, if the bot supports inline queries

### need\_location?

> `readonly` `optional` **need\_location**: [`Bool$Input`](Bool$Input.md)

True, if the location of the user is expected to be sent with every inline query to this bot

## Defined in

dist/generated/types.d.ts:6229
