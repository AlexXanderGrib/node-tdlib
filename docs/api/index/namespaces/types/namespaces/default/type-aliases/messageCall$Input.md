[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageCall$Input

# Type Alias: messageCall$Input

> **messageCall$Input**: `object`

Version of [messageCall](messageCall.md) for method parameters.

A message with information about an ended call

## Type declaration

### \_

> `readonly` **\_**: `"messageCall"`

### discard\_reason?

> `readonly` `optional` **discard\_reason**: [`CallDiscardReason$Input`](CallDiscardReason$Input.md)

Reason why the call was discarded

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

Call duration, in seconds

### is\_video?

> `readonly` `optional` **is\_video**: [`Bool$Input`](Bool$Input.md)

True, if the call was a video call

## Defined in

dist/generated/types.d.ts:26728
