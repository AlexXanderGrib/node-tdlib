[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeBotAddToChannel

# Type Alias: internalLinkTypeBotAddToChannel

> **internalLinkTypeBotAddToChannel**: `object`

The link is a link to a Telegram bot, which is supposed to be added to a channel chat as an administrator. Call searchPublicChat with the given bot username and check that the user is a bot,

- ask the current user to select a channel chat to add the bot to as an administrator. Then, call getChatMember to receive the current bot rights in the chat and if the bot already is an administrator,

- check that the current user can edit its administrator rights and combine received rights with the requested administrator rights. Then, show confirmation box to the user, and call setChatMemberStatus with the chosen chat and confirmed rights

## Type declaration

### \_

> **\_**: `"internalLinkTypeBotAddToChannel"`

### administrator\_rights

> **administrator\_rights**: [`chatAdministratorRights`](chatAdministratorRights.md)

Expected administrator rights for the bot

### bot\_username

> **bot\_username**: `string`

Username of the bot

## Defined in

dist/generated/types.d.ts:48997
