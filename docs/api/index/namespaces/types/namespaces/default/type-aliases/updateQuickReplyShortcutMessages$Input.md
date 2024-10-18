[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateQuickReplyShortcutMessages$Input

# Type Alias: updateQuickReplyShortcutMessages$Input

> **updateQuickReplyShortcutMessages$Input**: `object`

Version of [updateQuickReplyShortcutMessages](updateQuickReplyShortcutMessages.md) for method parameters.

The list of quick reply shortcut messages has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateQuickReplyShortcutMessages"`

### messages?

> `readonly` `optional` **messages**: [`vector$Input`](vector$Input.md)\<[`quickReplyMessage$Input`](quickReplyMessage$Input.md)\>

The new list of quick reply messages for the shortcut in order from the first to the last sent

### shortcut\_id?

> `readonly` `optional` **shortcut\_id**: [`int32`](int32.md)

The identifier of the shortcut

## Defined in

dist/generated/types.d.ts:56199
