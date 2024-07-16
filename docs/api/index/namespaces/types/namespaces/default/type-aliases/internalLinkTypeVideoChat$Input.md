[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeVideoChat$Input

# Type Alias: internalLinkTypeVideoChat$Input

> **internalLinkTypeVideoChat$Input**: `object`

Version of [internalLinkTypeVideoChat](internalLinkTypeVideoChat.md) for method parameters.

The link is a link to a video chat. Call searchPublicChat with the given chat username, and then joinGroupCall with the given invite hash to process the link

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeVideoChat"`

### chat\_username?

> `readonly` `optional` **chat\_username**: `string`

Username of the chat with the video chat

### invite\_hash?

> `readonly` `optional` **invite\_hash**: `string`

If non-empty, invite hash to be used to join the video chat without being muted by administrators

### is\_live\_stream?

> `readonly` `optional` **is\_live\_stream**: [`Bool$Input`](Bool$Input.md)

True, if the video chat is expected to be a live stream in a channel or a broadcast group

## Defined in

dist/generated/types.d.ts:48618
