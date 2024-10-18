[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateAttachmentMenuBots$Input

# Type Alias: updateAttachmentMenuBots$Input

> **updateAttachmentMenuBots$Input**: `object`

Version of [updateAttachmentMenuBots](updateAttachmentMenuBots.md) for method parameters.

The list of bots added to attachment or side menu has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateAttachmentMenuBots"`

### bots?

> `readonly` `optional` **bots**: [`vector$Input`](vector$Input.md)\<[`attachmentMenuBot$Input`](attachmentMenuBot$Input.md)\>

The new list of bots. The bots must not be shown on scheduled messages screen

## Defined in

dist/generated/types.d.ts:58208
