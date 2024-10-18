[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateChatDraftMessage

# Type Alias: updateChatDraftMessage

> **updateChatDraftMessage**: `object`

A chat draft has changed. Be aware that the update may come in the currently opened chat but with old content of the draft. If the user has changed the content of the draft, this update mustn't be applied

## Type declaration

### \_

> **\_**: `"updateChatDraftMessage"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### draft\_message

> **draft\_message**: [`draftMessage`](draftMessage.md) \| `null`

The new draft message; may be null if none

### positions

> **positions**: [`vector`](vector.md)\<[`chatPosition`](chatPosition.md)\>

The new chat positions in the chat lists

## Defined in

dist/generated/types.d.ts:55323
