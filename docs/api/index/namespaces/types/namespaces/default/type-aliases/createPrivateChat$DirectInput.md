[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createPrivateChat$DirectInput

# Type Alias: createPrivateChat$DirectInput

> **createPrivateChat$DirectInput**: `object`

Returns an existing chat corresponding to a given user

## Type declaration

### force?

> `readonly` `optional` **force**: [`Bool$Input`](Bool$Input.md)

Pass true to create the chat without a network request. In this case all information about the chat except its type, title and photo can be incorrect

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

User identifier

## Defined in

dist/generated/types.d.ts:84099
