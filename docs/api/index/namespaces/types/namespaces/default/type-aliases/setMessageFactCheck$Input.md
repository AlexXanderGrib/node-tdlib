[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setMessageFactCheck$Input

# Type Alias: setMessageFactCheck$Input

> **setMessageFactCheck$Input**: `object`

Changes the fact-check of a message. Can be only used if getOption("can_edit_fact_check") == true

## Type declaration

### \_

> `readonly` **\_**: `"setMessageFactCheck"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

The channel chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message. The message must be one of the following types: messageAnimation, messageAudio, messageDocument, messagePhoto, messageText, messageVideo

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

New text of the fact-check; 0-getOption("fact_check_length_max") characters; pass null to remove it. Only Bold, Italic, and TextUrl entities with https://t.me/ links are supported

## Defined in

dist/generated/types.d.ts:79450
