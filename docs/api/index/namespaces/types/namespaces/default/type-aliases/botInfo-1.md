[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / botInfo

# Type Alias: botInfo

> **botInfo**: `object`

Contains information about a bot

## Type declaration

### \_

> **\_**: `"botInfo"`

### animation

> **animation**: [`animation`](animation-1.md) \| `null`

Animation shown in the chat with the bot if the chat is empty; may be null

### commands

> **commands**: [`vector`](vector.md)\<[`botCommand`](botCommand-1.md)\>

List of the bot commands

### default\_channel\_administrator\_rights

> **default\_channel\_administrator\_rights**: [`chatAdministratorRights`](chatAdministratorRights-1.md) \| `null`

Default administrator rights for adding the bot to channels; may be null

### default\_group\_administrator\_rights

> **default\_group\_administrator\_rights**: [`chatAdministratorRights`](chatAdministratorRights-1.md) \| `null`

Default administrator rights for adding the bot to basic group and supergroup chats; may be null

### description

> **description**: `string`

Contains information about a bot

### edit\_commands\_link

> **edit\_commands\_link**: [`InternalLinkType`](InternalLinkType.md) \| `null`

The internal link, which can be used to edit bot commands; may be null

### edit\_description\_link

> **edit\_description\_link**: [`InternalLinkType`](InternalLinkType.md) \| `null`

The internal link, which can be used to edit bot description; may be null

### edit\_description\_media\_link

> **edit\_description\_media\_link**: [`InternalLinkType`](InternalLinkType.md) \| `null`

The internal link, which can be used to edit the photo or animation shown in the chat with the bot if the chat is empty; may be null

### edit\_settings\_link

> **edit\_settings\_link**: [`InternalLinkType`](InternalLinkType.md) \| `null`

The internal link, which can be used to edit bot settings; may be null

### menu\_button

> **menu\_button**: [`botMenuButton`](botMenuButton-1.md) \| `null`

Information about a button to show instead of the bot commands menu button; may be null if ordinary bot commands menu must be shown

### photo

> **photo**: [`photo`](photo-1.md) \| `null`

Photo shown in the chat with the bot if the chat is empty; may be null

### short\_description

> **short\_description**: `string`

The text that is shown on the bot's profile page and is sent together with the link when users share the bot

## Defined in

dist/generated/types.d.ts:9449
