[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deleteAccount

# Type Alias: deleteAccount()

> **deleteAccount**: (`parameters`) => [`Ok`](Ok-1.md)

Deletes the account of the current user, deleting all information associated with the user from the server. The phone number of the account can be used to create a new account.

- Can be called before authorization when the current authorization state is authorizationStateWaitPassword

## Parameters

• **parameters**: [`deleteAccount$Input`](deleteAccount$Input.md)

[deleteAccount$Input](deleteAccount$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:100853
