[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / attachmentMenuBot

# Type Alias: attachmentMenuBot

> **attachmentMenuBot**: `object`

Represents a bot, which can be added to attachment or side menu

## Type declaration

### \_

> **\_**: `"attachmentMenuBot"`

### android\_icon

> **android\_icon**: [`file`](file-1.md) \| `null`

Icon for the bot in TGS format for the official Android app; may be null

### android\_side\_menu\_icon

> **android\_side\_menu\_icon**: [`file`](file-1.md) \| `null`

Icon for the bot in SVG format for the official Android app side menu; may be null

### bot\_user\_id

> **bot\_user\_id**: [`int53`](int53-1.md)

User identifier of the bot

### default\_icon

> **default\_icon**: [`file`](file-1.md) \| `null`

Default icon for the bot in SVG format; may be null

### icon\_color

> **icon\_color**: [`attachmentMenuBotColor`](attachmentMenuBotColor-1.md) \| `null`

Color to highlight selected icon of the bot if appropriate; may be null

### ios\_animated\_icon

> **ios\_animated\_icon**: [`file`](file-1.md) \| `null`

Icon for the bot in TGS format for the official iOS app; may be null

### ios\_side\_menu\_icon

> **ios\_side\_menu\_icon**: [`file`](file-1.md) \| `null`

Icon for the bot in PNG format for the official iOS app side menu; may be null

### ios\_static\_icon

> **ios\_static\_icon**: [`file`](file-1.md) \| `null`

Icon for the bot in SVG format for the official iOS app; may be null

### is\_added

> **is\_added**: [`Bool`](Bool.md)

True, if the bot was explicitly added by the user. If the bot isn't added, then on the first bot launch toggleBotIsAddedToAttachmentMenu must be called and the bot must be added or removed

### macos\_icon

> **macos\_icon**: [`file`](file-1.md) \| `null`

Icon for the bot in TGS format for the official native macOS app; may be null

### macos\_side\_menu\_icon

> **macos\_side\_menu\_icon**: [`file`](file-1.md) \| `null`

Icon for the bot in PNG format for the official macOS app side menu; may be null

### name

> **name**: `string`

Name for the bot in attachment menu

### name\_color

> **name\_color**: [`attachmentMenuBotColor`](attachmentMenuBotColor-1.md) \| `null`

Color to highlight selected name of the bot if appropriate; may be null

### request\_write\_access

> **request\_write\_access**: [`Bool`](Bool.md)

True, if the user must be asked for the permission to send messages to the bot

### show\_disclaimer\_in\_side\_menu

> **show\_disclaimer\_in\_side\_menu**: [`Bool`](Bool.md)

True, if a disclaimer, why the bot is shown in the side menu, is needed

### show\_in\_attachment\_menu

> **show\_in\_attachment\_menu**: [`Bool`](Bool.md)

True, if the bot must be shown in the attachment menu

### show\_in\_side\_menu

> **show\_in\_side\_menu**: [`Bool`](Bool.md)

True, if the bot must be shown in the side menu

### supports\_bot\_chats

> **supports\_bot\_chats**: [`Bool`](Bool.md)

True, if the bot supports opening from attachment menu in private chats with other bots

### supports\_channel\_chats

> **supports\_channel\_chats**: [`Bool`](Bool.md)

True, if the bot supports opening from attachment menu in channel chats

### supports\_group\_chats

> **supports\_group\_chats**: [`Bool`](Bool.md)

True, if the bot supports opening from attachment menu in basic group and supergroup chats

### supports\_self\_chat

> **supports\_self\_chat**: [`Bool`](Bool.md)

True, if the bot supports opening from attachment menu in the chat with the bot

### supports\_user\_chats

> **supports\_user\_chats**: [`Bool`](Bool.md)

True, if the bot supports opening from attachment menu in private chats with ordinary users

### web\_app\_placeholder

> **web\_app\_placeholder**: [`file`](file-1.md) \| `null`

Default placeholder for opened Web Apps in SVG format; may be null

## Defined in

dist/generated/types.d.ts:36727
