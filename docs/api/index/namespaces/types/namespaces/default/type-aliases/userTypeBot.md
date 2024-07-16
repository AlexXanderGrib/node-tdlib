[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / userTypeBot

# Type Alias: userTypeBot

> **userTypeBot**: `object`

A bot (see https://core.telegram.org/bots)

## Type declaration

### \_

> **\_**: `"userTypeBot"`

### can\_be\_added\_to\_attachment\_menu

> **can\_be\_added\_to\_attachment\_menu**: [`Bool`](Bool.md)

True, if the bot can be added to attachment or side menu

### can\_be\_edited

> **can\_be\_edited**: [`Bool`](Bool.md)

True, if the bot is owned by the current user and can be edited using the methods toggleBotUsernameIsActive, reorderBotActiveUsernames, setBotProfilePhoto, setBotName, setBotInfoDescription, and setBotInfoShortDescription

### can\_connect\_to\_business

> **can\_connect\_to\_business**: [`Bool`](Bool.md)

True, if the bot supports connection to Telegram Business accounts

### can\_join\_groups

> **can\_join\_groups**: [`Bool`](Bool.md)

True, if the bot can be invited to basic group and supergroup chats

### can\_read\_all\_group\_messages

> **can\_read\_all\_group\_messages**: [`Bool`](Bool.md)

True, if the bot can read all messages in basic group or supergroup chats and not just those addressed to the bot. In private and channel chats a bot can always read all messages

### inline\_query\_placeholder

> **inline\_query\_placeholder**: `string`

Placeholder for inline queries (displayed on the application input field)

### is\_inline

> **is\_inline**: [`Bool`](Bool.md)

True, if the bot supports inline queries

### need\_location

> **need\_location**: [`Bool`](Bool.md)

True, if the location of the user is expected to be sent with every inline query to this bot

## Defined in

dist/generated/types.d.ts:6181
