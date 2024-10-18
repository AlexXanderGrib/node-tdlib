[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getCurrentState

# Type Alias: getCurrentState()

> **getCurrentState**: (`parameters`) => [`Updates`](Updates-1.md)

Returns all updates needed to restore current TDLib state, i.e. all actual updateAuthorizationState/updateUser/updateNewChat and others. This is especially useful if TDLib is run in a separate process. Can be called before initialization

## Parameters

• **parameters**: [`getCurrentState$Input`](getCurrentState$Input.md)

[getCurrentState$Input](getCurrentState$Input.md)

## Returns

[`Updates`](Updates-1.md)

[Updates](Updates-1.md)

## Defined in

dist/generated/types.d.ts:75807
