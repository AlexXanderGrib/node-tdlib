[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatDraftMessage$Input

# Type Alias: setChatDraftMessage$Input

> **setChatDraftMessage$Input**: `object`

Changes the draft message in a chat

## Type declaration

### \_

> `readonly` **\_**: `"setChatDraftMessage"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### draft\_message?

> `readonly` `optional` **draft\_message**: [`draftMessage$Input`](draftMessage$Input.md) \| `null`

New draft message; pass null to remove the draft. All files in draft message content must be of the type inputFileLocal. Media thumbnails and captions are ignored

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

If not 0, the message thread identifier in which the draft was changed

## Defined in

dist/generated/types.d.ts:87906
