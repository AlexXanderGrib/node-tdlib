[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setSupergroupUsername$Input

# Type Alias: setSupergroupUsername$Input

> **setSupergroupUsername$Input**: `object`

Changes the editable username of a supergroup or channel, requires owner privileges in the supergroup or channel

## Type declaration

### \_

> `readonly` **\_**: `"setSupergroupUsername"`

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53-1.md)

Identifier of the supergroup or channel

### username?

> `readonly` `optional` **username**: `string`

New value of the username. Use an empty string to remove the username. The username can't be completely removed if there is another active or disabled username

## Defined in

dist/generated/types.d.ts:95901
