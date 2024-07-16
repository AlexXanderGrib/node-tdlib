[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / canSendMessageToUser$Input

# Type Alias: canSendMessageToUser$Input

> **canSendMessageToUser$Input**: `object`

Check whether the current user can message another user or try to create a chat with them

## Type declaration

### \_

> `readonly` **\_**: `"canSendMessageToUser"`

### only\_local?

> `readonly` `optional` **only\_local**: [`Bool$Input`](Bool$Input.md)

Pass true to get only locally available information without sending network requests

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of the other user

## Defined in

dist/generated/types.d.ts:97885
