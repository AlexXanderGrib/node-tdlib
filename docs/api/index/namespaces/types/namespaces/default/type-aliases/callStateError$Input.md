[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / callStateError$Input

# Type Alias: callStateError$Input

> **callStateError$Input**: `object`

Version of [callStateError](callStateError.md) for method parameters.

The call has ended with an error

## Type declaration

### \_

> `readonly` **\_**: `"callStateError"`

### error?

> `readonly` `optional` **error**: [`error$Input`](error$Input.md)

Error. An error with the code 4005000 will be returned if an outgoing call is missed because of an expired timeout

## Defined in

dist/generated/types.d.ts:36416
