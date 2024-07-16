[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / internalLinkTypeUserToken

# Type Alias: internalLinkTypeUserToken

> **internalLinkTypeUserToken**: `object`

The link is a link to a user by a temporary token. Call searchUserByToken with the given token to process the link.

- If the user is found, then call createPrivateChat and open the chat

## Type declaration

### \_

> **\_**: `"internalLinkTypeUserToken"`

### token

> **token**: `string`

The token

## Defined in

dist/generated/types.d.ts:48569
