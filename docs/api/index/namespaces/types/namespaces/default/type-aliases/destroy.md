[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / destroy

# Type Alias: destroy()

> **destroy**: (`parameters`) => [`Ok`](Ok-1.md)

Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in the list of all active sessions. All local data will be destroyed.

- After the destruction completes updateAuthorizationState with authorizationStateClosed will be sent. Can be called before authorization

## Parameters

• **parameters**: [`destroy$Input`](destroy$Input.md)

[destroy$Input](destroy$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:75762
