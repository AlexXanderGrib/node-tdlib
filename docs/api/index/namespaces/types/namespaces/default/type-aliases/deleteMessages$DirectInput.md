[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteMessages$DirectInput

# Type Alias: deleteMessages$DirectInput

> **deleteMessages$DirectInput**: `object`

Deletes messages

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the messages to be deleted

### revoke?

> `readonly` `optional` **revoke**: [`Bool$Input`](Bool$Input.md)

Pass true to delete messages for all chat members. Always true for supergroups, channels and secret chats

## Defined in

dist/generated/types.d.ts:78645
