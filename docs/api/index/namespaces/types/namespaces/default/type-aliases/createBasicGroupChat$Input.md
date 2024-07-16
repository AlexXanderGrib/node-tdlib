[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createBasicGroupChat$Input

# Type Alias: createBasicGroupChat$Input

> **createBasicGroupChat$Input**: `object`

Returns an existing chat corresponding to a known basic group

## Type declaration

### \_

> `readonly` **\_**: `"createBasicGroupChat"`

### basic\_group\_id?

> `readonly` `optional` **basic\_group\_id**: [`int53`](int53-1.md)

Basic group identifier

### force?

> `readonly` `optional` **force**: [`Bool$Input`](Bool$Input.md)

Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect

## Defined in

dist/generated/types.d.ts:84121
