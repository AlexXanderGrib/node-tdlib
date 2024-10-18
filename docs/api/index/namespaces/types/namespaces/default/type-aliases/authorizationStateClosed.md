[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / authorizationStateClosed

# Type Alias: authorizationStateClosed

> **authorizationStateClosed**: `object`

TDLib client is in its final state. All databases are closed and all resources are released. No other updates will be received after this. All queries will be responded to

- with error code 500. To continue working, one must create a new instance of the TDLib client

## Type declaration

### \_

> **\_**: `"authorizationStateClosed"`

## Defined in

dist/generated/types.d.ts:3477
