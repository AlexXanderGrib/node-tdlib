[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatBlockList$Input

# Type Alias: updateChatBlockList$Input

> **updateChatBlockList$Input**: `object`

Version of [updateChatBlockList](updateChatBlockList.md) for method parameters.

A chat was blocked or unblocked

## Type declaration

### \_

> `readonly` **\_**: `"updateChatBlockList"`

### block\_list?

> `readonly` `optional` **block\_list**: [`BlockList$Input`](BlockList$Input.md) \| `null`

Block list to which the chat is added; may be null if none

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

## Defined in

dist/generated/types.d.ts:55929
