[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteChatBackground$DirectInput

# Type Alias: deleteChatBackground$DirectInput

> **deleteChatBackground$DirectInput**: `object`

Deletes background in a specific chat

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### restore\_previous?

> `readonly` `optional` **restore\_previous**: [`Bool$Input`](Bool$Input.md)

Pass true to restore previously set background. Can be used only in private and secret chats with non-deleted users if userFullInfo.set_chat_background == true.

- Supposed to be used from messageChatSetBackground messages with the currently set background that was set for both sides by the other user

## Defined in

dist/generated/types.d.ts:85545
