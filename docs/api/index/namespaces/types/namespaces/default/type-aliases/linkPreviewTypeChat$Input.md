[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewTypeChat$Input

# Type Alias: linkPreviewTypeChat$Input

> **linkPreviewTypeChat$Input**: `object`

Version of [linkPreviewTypeChat](linkPreviewTypeChat.md) for method parameters.

The link is a link to a chat

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewTypeChat"`

### creates\_join\_request?

> `readonly` `optional` **creates\_join\_request**: [`Bool$Input`](Bool$Input.md)

True, if the link only creates join request

### photo?

> `readonly` `optional` **photo**: [`chatPhoto$Input`](chatPhoto$Input.md) \| `null`

Photo of the chat; may be null

### type?

> `readonly` `optional` **type**: [`InviteLinkChatType$Input`](InviteLinkChatType$Input.md)

Type of the chat

## Defined in

dist/generated/types.d.ts:21754
