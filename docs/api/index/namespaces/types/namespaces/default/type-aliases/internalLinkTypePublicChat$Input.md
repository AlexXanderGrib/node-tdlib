[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypePublicChat$Input

# Type Alias: internalLinkTypePublicChat$Input

> **internalLinkTypePublicChat$Input**: `object`

Version of [internalLinkTypePublicChat](internalLinkTypePublicChat.md) for method parameters.

The link is a link to a chat by its username. Call searchPublicChat with the given chat username to process the link

- If the chat is found, open its profile information screen or the chat itself.

- If draft text isn't empty and the chat is a private chat with a regular user, then put the draft text in the input field

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypePublicChat"`

### chat\_username?

> `readonly` `optional` **chat\_username**: `string`

Username of the chat

### draft\_text?

> `readonly` `optional` **draft\_text**: `string`

Draft text for message to send in the chat

### open\_profile?

> `readonly` `optional` **open\_profile**: [`Bool$Input`](Bool$Input.md)

True, if chat profile information screen must be opened; otherwise, the chat itself must be opened

## Defined in

dist/generated/types.d.ts:49888
