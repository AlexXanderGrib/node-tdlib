[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / botInfo$Input

# Type Alias: botInfo$Input

> **botInfo$Input**: `object`

Version of [botInfo](botInfo-1.md) for method parameters.

Contains information about a bot

## Type declaration

### \_

> `readonly` **\_**: `"botInfo"`

### animation?

> `readonly` `optional` **animation**: [`animation$Input`](animation$Input-1.md) \| `null`

Animation shown in the chat with the bot if the chat is empty; may be null

### commands?

> `readonly` `optional` **commands**: [`vector$Input`](vector$Input.md)\<[`botCommand$Input`](botCommand$Input-1.md)\>

List of the bot commands

### default\_channel\_administrator\_rights?

> `readonly` `optional` **default\_channel\_administrator\_rights**: [`chatAdministratorRights$Input`](chatAdministratorRights$Input-1.md) \| `null`

Default administrator rights for adding the bot to channels; may be null

### default\_group\_administrator\_rights?

> `readonly` `optional` **default\_group\_administrator\_rights**: [`chatAdministratorRights$Input`](chatAdministratorRights$Input-1.md) \| `null`

Default administrator rights for adding the bot to basic group and supergroup chats; may be null

### description?

> `readonly` `optional` **description**: `string`

Contains information about a bot

### edit\_commands\_link?

> `readonly` `optional` **edit\_commands\_link**: [`InternalLinkType$Input`](InternalLinkType$Input.md) \| `null`

The internal link, which can be used to edit bot commands; may be null

### edit\_description\_link?

> `readonly` `optional` **edit\_description\_link**: [`InternalLinkType$Input`](InternalLinkType$Input.md) \| `null`

The internal link, which can be used to edit bot description; may be null

### edit\_description\_media\_link?

> `readonly` `optional` **edit\_description\_media\_link**: [`InternalLinkType$Input`](InternalLinkType$Input.md) \| `null`

The internal link, which can be used to edit the photo or animation shown in the chat with the bot if the chat is empty; may be null

### edit\_settings\_link?

> `readonly` `optional` **edit\_settings\_link**: [`InternalLinkType$Input`](InternalLinkType$Input.md) \| `null`

The internal link, which can be used to edit bot settings; may be null

### menu\_button?

> `readonly` `optional` **menu\_button**: [`botMenuButton$Input`](botMenuButton$Input-1.md) \| `null`

Information about a button to show instead of the bot commands menu button; may be null if ordinary bot commands menu must be shown

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input-1.md) \| `null`

Photo shown in the chat with the bot if the chat is empty; may be null

### short\_description?

> `readonly` `optional` **short\_description**: `string`

The text that is shown on the bot's profile page and is sent together with the link when users share the bot

## Defined in

dist/generated/types.d.ts:9517
