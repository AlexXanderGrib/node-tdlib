[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessConnection$Input

# Type Alias: businessConnection$Input

> **businessConnection$Input**: `object`

Version of [businessConnection](businessConnection-1.md) for method parameters.

Describes a connection of the bot with a business account

## Type declaration

### \_

> `readonly` **\_**: `"businessConnection"`

### can\_reply?

> `readonly` `optional` **can\_reply**: [`Bool$Input`](Bool$Input.md)

True, if the bot can send messages to the connected user; false otherwise

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the connection was established

### id?

> `readonly` `optional` **id**: `string`

Unique identifier of the connection

### is\_enabled?

> `readonly` `optional` **is\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if the connection is enabled; false otherwise

### user\_chat\_id?

> `readonly` `optional` **user\_chat\_id**: [`int53`](int53-1.md)

Chat identifier of the private chat with the user

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of the business user that created the connection

## Defined in

dist/generated/types.d.ts:36657
