[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / call$Input

# Type Alias: call$Input

> **call$Input**: `object`

Version of [call](call.md) for method parameters.

Describes a call

## Type declaration

### \_

> `readonly` **\_**: `"call"`

### id?

> `readonly` `optional` **id**: [`int32`](int32.md)

Call identifier, not persistent

### is\_outgoing?

> `readonly` `optional` **is\_outgoing**: [`Bool$Input`](Bool$Input.md)

True, if the call is outgoing

### is\_video?

> `readonly` `optional` **is\_video**: [`Bool$Input`](Bool$Input.md)

True, if the call is a video call

### state?

> `readonly` `optional` **state**: [`CallState$Input`](CallState$Input.md)

Call state

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

User identifier of the other call participant

## Defined in

dist/generated/types.d.ts:37260
