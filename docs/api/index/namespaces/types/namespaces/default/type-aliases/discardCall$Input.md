[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / discardCall$Input

# Type Alias: discardCall$Input

> **discardCall$Input**: `object`

Discards a call

## Type declaration

### \_

> `readonly` **\_**: `"discardCall"`

### call\_id?

> `readonly` `optional` **call\_id**: [`int32`](int32-1.md)

Call identifier

### connection\_id?

> `readonly` `optional` **connection\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the connection used during the call

### duration?

> `readonly` `optional` **duration**: [`int32`](int32-1.md)

The call duration, in seconds

### is\_disconnected?

> `readonly` `optional` **is\_disconnected**: [`Bool$Input`](Bool$Input.md)

Pass true if the user was disconnected

### is\_video?

> `readonly` `optional` **is\_video**: [`Bool$Input`](Bool$Input.md)

Pass true if the call was a video call

## Defined in

dist/generated/types.d.ts:90507
