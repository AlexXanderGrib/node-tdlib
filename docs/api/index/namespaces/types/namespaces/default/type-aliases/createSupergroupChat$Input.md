[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createSupergroupChat$Input

# Type Alias: createSupergroupChat$Input

> **createSupergroupChat$Input**: `object`

Returns an existing chat corresponding to a known supergroup or channel

## Type declaration

### \_

> `readonly` **\_**: `"createSupergroupChat"`

### force?

> `readonly` `optional` **force**: [`Bool$Input`](Bool$Input.md)

Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53-1.md)

Supergroup or channel identifier

## Defined in

dist/generated/types.d.ts:84159
