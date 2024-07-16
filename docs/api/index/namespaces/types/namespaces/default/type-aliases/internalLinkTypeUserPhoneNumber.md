[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeUserPhoneNumber

# Type Alias: internalLinkTypeUserPhoneNumber

> **internalLinkTypeUserPhoneNumber**: `object`

The link is a link to a user by its phone number. Call searchUserByPhoneNumber with the given phone number to process the link.

- If the user is found, then call createPrivateChat and open the chat. If draft text isn't empty, then put the draft text in the input field

## Type declaration

### \_

> **\_**: `"internalLinkTypeUserPhoneNumber"`

### draft\_text

> **draft\_text**: `string`

Draft text for message to send in the chat

### phone\_number

> **phone\_number**: `string`

Phone number of the user

## Defined in

dist/generated/types.d.ts:48531
