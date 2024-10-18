[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setMessageFactCheck$DirectInput

# Type Alias: setMessageFactCheck$DirectInput

> **setMessageFactCheck$DirectInput**: `object`

Changes the fact-check of a message. Can be only used if messageProperties.can_set_fact_check == true

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The channel chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input.md) \| `null`

New text of the fact-check; 0-getOption("fact_check_length_max") characters; pass null to remove it. Only Bold, Italic, and TextUrl entities with https://t.me/ links are supported

## Defined in

dist/generated/types.d.ts:81462
