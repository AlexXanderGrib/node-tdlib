[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageFactCheck$Input

# Type Alias: updateMessageFactCheck$Input

> **updateMessageFactCheck$Input**: `object`

Version of [updateMessageFactCheck](updateMessageFactCheck.md) for method parameters.

A fact-check added to a message was changed

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageFactCheck"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### fact\_check?

> `readonly` `optional` **fact\_check**: [`factCheck$Input`](factCheck$Input-1.md)

The new fact-check

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

## Defined in

dist/generated/types.d.ts:53136
