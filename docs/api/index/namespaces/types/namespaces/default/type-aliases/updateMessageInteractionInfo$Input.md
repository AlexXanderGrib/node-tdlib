[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageInteractionInfo$Input

# Type Alias: updateMessageInteractionInfo$Input

> **updateMessageInteractionInfo$Input**: `object`

Version of [updateMessageInteractionInfo](updateMessageInteractionInfo.md) for method parameters.

The information about interactions with a message has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageInteractionInfo"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### interaction\_info?

> `readonly` `optional` **interaction\_info**: [`messageInteractionInfo$Input`](messageInteractionInfo$Input-1.md) \| `null`

New information about interactions with the message; may be null

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

## Defined in

dist/generated/types.d.ts:52960
