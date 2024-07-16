[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / searchUserByPhoneNumber$DirectInput

# Type Alias: searchUserByPhoneNumber$DirectInput

> **searchUserByPhoneNumber$DirectInput**: `object`

Searches a user by their phone number. Returns a 404 error if the user can't be found

## Type declaration

### only\_local?

> `readonly` `optional` **only\_local**: [`Bool$Input`](Bool$Input.md)

Pass true to get only locally available information without sending network requests

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

Phone number to search for

## Defined in

dist/generated/types.d.ts:92411
