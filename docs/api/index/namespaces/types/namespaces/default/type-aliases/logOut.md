[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / logOut

# Type Alias: logOut()

> **logOut**: (`parameters`) => [`Ok`](Ok-1.md)

Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent

## Parameters

• **parameters**: [`logOut$Input`](logOut$Input.md)

[logOut$Input](logOut$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:75722
