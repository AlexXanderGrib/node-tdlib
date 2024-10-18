[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeUserPhoneNumber$Input

# Type Alias: internalLinkTypeUserPhoneNumber$Input

> **internalLinkTypeUserPhoneNumber$Input**: `object`

Version of [internalLinkTypeUserPhoneNumber](internalLinkTypeUserPhoneNumber.md) for method parameters.

The link is a link to a user by its phone number. Call searchUserByPhoneNumber with the given phone number to process the link.

- If the user is found, then call createPrivateChat and open user's profile information screen or the chat itself. If draft text isn't empty, then put the draft text in the input field

## Type declaration

### \_

> `readonly` **\_**: `"internalLinkTypeUserPhoneNumber"`

### draft\_text?

> `readonly` `optional` **draft\_text**: `string`

Draft text for message to send in the chat

### open\_profile?

> `readonly` `optional` **open\_profile**: [`Bool$Input`](Bool$Input.md)

True, if user's profile information screen must be opened; otherwise, the chat itself must be opened

### phone\_number?

> `readonly` `optional` **phone\_number**: `string`

Phone number of the user

## Defined in

dist/generated/types.d.ts:50130
