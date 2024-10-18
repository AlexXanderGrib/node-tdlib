[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatDraftMessage$Input

# Type Alias: updateChatDraftMessage$Input

> **updateChatDraftMessage$Input**: `object`

Version of [updateChatDraftMessage](updateChatDraftMessage.md) for method parameters.

A chat draft has changed. Be aware that the update may come in the currently opened chat but with old content of the draft. If the user has changed the content of the draft, this update mustn't be applied

## Type declaration

### \_

> `readonly` **\_**: `"updateChatDraftMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### draft\_message?

> `readonly` `optional` **draft\_message**: [`draftMessage$Input`](draftMessage$Input.md) \| `null`

The new draft message; may be null if none

### positions?

> `readonly` `optional` **positions**: [`vector$Input`](vector$Input.md)\<[`chatPosition$Input`](chatPosition$Input.md)\>

The new chat positions in the chat lists

## Defined in

dist/generated/types.d.ts:55346
