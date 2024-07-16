[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatBoostLinkInfo$Input

# Type Alias: chatBoostLinkInfo$Input

> **chatBoostLinkInfo$Input**: `object`

Version of [chatBoostLinkInfo](chatBoostLinkInfo-1.md) for method parameters.

Contains information about a link to boost a chat

## Type declaration

### \_

> `readonly` **\_**: `"chatBoostLinkInfo"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the link points; 0 if the chat isn't found

### is\_public?

> `readonly` `optional` **is\_public**: [`Bool$Input`](Bool$Input.md)

True, if the link will work for non-members of the chat

## Defined in

dist/generated/types.d.ts:48865
