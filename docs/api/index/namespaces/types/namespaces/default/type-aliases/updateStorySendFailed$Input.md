[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStorySendFailed$Input

# Type Alias: updateStorySendFailed$Input

> **updateStorySendFailed$Input**: `object`

Version of [updateStorySendFailed](updateStorySendFailed.md) for method parameters.

A story failed to send. If the story sending is canceled, then updateStoryDeleted will be received instead of this update

## Type declaration

### \_

> `readonly` **\_**: `"updateStorySendFailed"`

### error?

> `readonly` `optional` **error**: [`error$Input`](error$Input.md)

The cause of the story sending failure

### error\_type?

> `readonly` `optional` **error\_type**: [`CanSendStoryResult$Input`](CanSendStoryResult$Input.md) \| `null`

Type of the error; may be null if unknown

### story?

> `readonly` `optional` **story**: [`story$Input`](story$Input.md)

The failed to send story

## Defined in

dist/generated/types.d.ts:57570
