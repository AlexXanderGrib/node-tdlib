[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / destroy$Input

# Type Alias: destroy$Input

> **destroy$Input**: `object`

Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in the list of all active sessions. All local data will be destroyed.

- After the destruction completes updateAuthorizationState with authorizationStateClosed will be sent. Can be called before authorization

## Type declaration

### \_

> `readonly` **\_**: `"destroy"`

## Defined in

dist/generated/types.d.ts:75745
