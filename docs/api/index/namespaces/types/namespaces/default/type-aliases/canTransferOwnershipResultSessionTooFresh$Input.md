[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / canTransferOwnershipResultSessionTooFresh$Input

# Type Alias: canTransferOwnershipResultSessionTooFresh$Input

> **canTransferOwnershipResultSessionTooFresh$Input**: `object`

Version of [canTransferOwnershipResultSessionTooFresh](canTransferOwnershipResultSessionTooFresh.md) for method parameters.

The session was created recently, user needs to wait

## Type declaration

### \_

> `readonly` **\_**: `"canTransferOwnershipResultSessionTooFresh"`

### retry\_after?

> `readonly` `optional` **retry\_after**: [`int32`](int32-1.md)

Time left before the session can be used to transfer ownership of a chat, in seconds

## Defined in

dist/generated/types.d.ts:43860
