[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / boostChat$Input

# Type Alias: boostChat$Input

> **boostChat$Input**: `object`

Boosts a chat and returns the list of available chat boost slots for the current user after the boost

## Type declaration

### \_

> `readonly` **\_**: `"boostChat"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat

### slot\_ids?

> `readonly` `optional` **slot\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

Identifiers of boost slots of the current user from which to apply boosts to the chat

## Defined in

dist/generated/types.d.ts:90747
