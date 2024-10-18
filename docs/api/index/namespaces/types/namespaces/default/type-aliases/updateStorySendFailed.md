[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStorySendFailed

# Type Alias: updateStorySendFailed

> **updateStorySendFailed**: `object`

A story failed to send. If the story sending is canceled, then updateStoryDeleted will be received instead of this update

## Type declaration

### \_

> **\_**: `"updateStorySendFailed"`

### error

> **error**: [`error`](error.md)

The cause of the story sending failure

### error\_type

> **error\_type**: [`CanSendStoryResult`](CanSendStoryResult.md) \| `null`

Type of the error; may be null if unknown

### story

> **story**: [`story`](story.md)

The failed to send story

## Defined in

dist/generated/types.d.ts:57547
