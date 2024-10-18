[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteMessages$Input

# Type Alias: deleteMessages$Input

> **deleteMessages$Input**: `object`

Deletes messages

## Type declaration

### \_

> `readonly` **\_**: `"deleteMessages"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of the messages to be deleted. Use messageProperties.can_be_deleted_only_for_self and messageProperties.can_be_deleted_for_all_users to get suitable messages

### revoke?

> `readonly` `optional` **revoke**: [`Bool$Input`](Bool$Input.md)

Pass true to delete messages for all chat members. Always true for supergroups, channels and secret chats

## Defined in

dist/generated/types.d.ts:80633
