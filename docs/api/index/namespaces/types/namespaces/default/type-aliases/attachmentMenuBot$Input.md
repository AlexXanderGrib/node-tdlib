[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / attachmentMenuBot$Input

# Type Alias: attachmentMenuBot$Input

> **attachmentMenuBot$Input**: `object`

Version of [attachmentMenuBot](attachmentMenuBot.md) for method parameters.

Represents a bot, which can be added to attachment or side menu

## Type declaration

### \_

> `readonly` **\_**: `"attachmentMenuBot"`

### android\_icon?

> `readonly` `optional` **android\_icon**: [`file$Input`](file$Input.md) \| `null`

Icon for the bot in TGS format for the official Android app; may be null

### android\_side\_menu\_icon?

> `readonly` `optional` **android\_side\_menu\_icon**: [`file$Input`](file$Input.md) \| `null`

Icon for the bot in SVG format for the official Android app side menu; may be null

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

User identifier of the bot

### default\_icon?

> `readonly` `optional` **default\_icon**: [`file$Input`](file$Input.md) \| `null`

Default icon for the bot in SVG format; may be null

### icon\_color?

> `readonly` `optional` **icon\_color**: [`attachmentMenuBotColor$Input`](attachmentMenuBotColor$Input.md) \| `null`

Color to highlight selected icon of the bot if appropriate; may be null

### ios\_animated\_icon?

> `readonly` `optional` **ios\_animated\_icon**: [`file$Input`](file$Input.md) \| `null`

Icon for the bot in TGS format for the official iOS app; may be null

### ios\_side\_menu\_icon?

> `readonly` `optional` **ios\_side\_menu\_icon**: [`file$Input`](file$Input.md) \| `null`

Icon for the bot in PNG format for the official iOS app side menu; may be null

### ios\_static\_icon?

> `readonly` `optional` **ios\_static\_icon**: [`file$Input`](file$Input.md) \| `null`

Icon for the bot in SVG format for the official iOS app; may be null

### is\_added?

> `readonly` `optional` **is\_added**: [`Bool$Input`](Bool$Input.md)

True, if the bot was explicitly added by the user. If the bot isn't added, then on the first bot launch toggleBotIsAddedToAttachmentMenu must be called and the bot must be added or removed

### macos\_icon?

> `readonly` `optional` **macos\_icon**: [`file$Input`](file$Input.md) \| `null`

Icon for the bot in TGS format for the official native macOS app; may be null

### macos\_side\_menu\_icon?

> `readonly` `optional` **macos\_side\_menu\_icon**: [`file$Input`](file$Input.md) \| `null`

Icon for the bot in PNG format for the official macOS app side menu; may be null

### name?

> `readonly` `optional` **name**: `string`

Name for the bot in attachment menu

### name\_color?

> `readonly` `optional` **name\_color**: [`attachmentMenuBotColor$Input`](attachmentMenuBotColor$Input.md) \| `null`

Color to highlight selected name of the bot if appropriate; may be null

### request\_write\_access?

> `readonly` `optional` **request\_write\_access**: [`Bool$Input`](Bool$Input.md)

True, if the user must be asked for the permission to send messages to the bot

### show\_disclaimer\_in\_side\_menu?

> `readonly` `optional` **show\_disclaimer\_in\_side\_menu**: [`Bool$Input`](Bool$Input.md)

True, if a disclaimer, why the bot is shown in the side menu, is needed

### show\_in\_attachment\_menu?

> `readonly` `optional` **show\_in\_attachment\_menu**: [`Bool$Input`](Bool$Input.md)

True, if the bot must be shown in the attachment menu

### show\_in\_side\_menu?

> `readonly` `optional` **show\_in\_side\_menu**: [`Bool$Input`](Bool$Input.md)

True, if the bot must be shown in the side menu

### supports\_bot\_chats?

> `readonly` `optional` **supports\_bot\_chats**: [`Bool$Input`](Bool$Input.md)

True, if the bot supports opening from attachment menu in private chats with other bots

### supports\_channel\_chats?

> `readonly` `optional` **supports\_channel\_chats**: [`Bool$Input`](Bool$Input.md)

True, if the bot supports opening from attachment menu in channel chats

### supports\_group\_chats?

> `readonly` `optional` **supports\_group\_chats**: [`Bool$Input`](Bool$Input.md)

True, if the bot supports opening from attachment menu in basic group and supergroup chats

### supports\_self\_chat?

> `readonly` `optional` **supports\_self\_chat**: [`Bool$Input`](Bool$Input.md)

True, if the bot supports opening from attachment menu in the chat with the bot

### supports\_user\_chats?

> `readonly` `optional` **supports\_user\_chats**: [`Bool$Input`](Bool$Input.md)

True, if the bot supports opening from attachment menu in private chats with ordinary users

### web\_app\_placeholder?

> `readonly` `optional` **web\_app\_placeholder**: [`file$Input`](file$Input.md) \| `null`

Default placeholder for opened Web Apps in SVG format; may be null

## Defined in

dist/generated/types.d.ts:38220
