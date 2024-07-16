[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockChatLink$Input

# Type Alias: pageBlockChatLink$Input

> **pageBlockChatLink$Input**: `object`

Version of [pageBlockChatLink](pageBlockChatLink.md) for method parameters.

A link to a chat

## Type declaration

### \_

> `readonly` **\_**: `"pageBlockChatLink"`

### accent\_color\_id?

> `readonly` `optional` **accent\_color\_id**: [`int32`](int32-1.md)

Identifier of the accent color for chat title and background of chat photo

### photo?

> `readonly` `optional` **photo**: [`chatPhotoInfo$Input`](chatPhotoInfo$Input-1.md) \| `null`

Chat photo; may be null

### title?

> `readonly` `optional` **title**: `string`

Chat title

### username?

> `readonly` `optional` **username**: `string`

Chat username by which all other information about the chat can be resolved

## Defined in

dist/generated/types.d.ts:20503
