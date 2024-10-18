[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessages$DirectInput

# Type Alias: getMessages$DirectInput

> **getMessages$DirectInput**: `object`

Returns information about messages. If a message is not found, returns null on the corresponding position of the result

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat the messages belong to

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of the messages to get

## Defined in

dist/generated/types.d.ts:76778
