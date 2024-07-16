[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypePublicChat

# Type Alias: internalLinkTypePublicChat

> **internalLinkTypePublicChat**: `object`

The link is a link to a chat by its username. Call searchPublicChat with the given chat username to process the link

- If the chat is found, open its profile information screen or the chat itself.

- If draft text isn't empty and the chat is a private chat with a regular user, then put the draft text in the input field

## Type declaration

### \_

> **\_**: `"internalLinkTypePublicChat"`

### chat\_username

> **chat\_username**: `string`

Username of the chat

### draft\_text

> **draft\_text**: `string`

Draft text for message to send in the chat

## Defined in

dist/generated/types.d.ts:48241
