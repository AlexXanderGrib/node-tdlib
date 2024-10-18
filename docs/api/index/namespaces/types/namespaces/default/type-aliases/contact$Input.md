[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / contact$Input

# Type Alias: contact$Input

> **contact$Input**: `object`

Version of [contact](contact.md) for method parameters.

Describes a user contact

## Type declaration

### \_

> `readonly` **\_**: `"contact"`

### first\_name?

> `readonly` `optional` **first\_name**: `string`

First name of the user; 1-255 characters in length

### last\_name?

> `readonly` `optional` **last\_name**: `string`

Last name of the user

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

Phone number of the user

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

Identifier of the user, if known; 0 otherwise

### vcard?

> `readonly` `optional` **vcard**: `string`

Additional data about the user in a form of vCard; 0-2048 bytes in length

## Defined in

dist/generated/types.d.ts:5518
