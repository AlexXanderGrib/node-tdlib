[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessConnection

# Type Alias: businessConnection

> **businessConnection**: `object`

Describes a connection of the bot with a business account

## Type declaration

### \_

> **\_**: `"businessConnection"`

### can\_reply

> **can\_reply**: [`Bool`](Bool.md)

True, if the bot can send messages to the connected user; false otherwise

### date

> **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the connection was established

### id

> **id**: `string`

Unique identifier of the connection

### is\_enabled

> **is\_enabled**: [`Bool`](Bool.md)

True, if the connection is enabled; false otherwise

### user\_chat\_id

> **user\_chat\_id**: [`int53`](int53-1.md)

Chat identifier of the private chat with the user

### user\_id

> **user\_id**: [`int53`](int53-1.md)

Identifier of the business user that created the connection

## Defined in

dist/generated/types.d.ts:36619
