[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sponsoredMessages$Input

# Type Alias: sponsoredMessages$Input

> **sponsoredMessages$Input**: `object`

Version of [sponsoredMessages](sponsoredMessages.md) for method parameters.

Contains a list of sponsored messages

## Type declaration

### \_

> `readonly` **\_**: `"sponsoredMessages"`

### messages?

> `readonly` `optional` **messages**: [`vector$Input`](vector$Input.md)\<[`sponsoredMessage$Input`](sponsoredMessage$Input.md)\>

List of sponsored messages

### messages\_between?

> `readonly` `optional` **messages\_between**: [`int32`](int32.md)

The minimum number of messages between shown sponsored messages, or 0 if only one sponsored message must be shown after all ordinary messages

## Defined in

dist/generated/types.d.ts:15119
