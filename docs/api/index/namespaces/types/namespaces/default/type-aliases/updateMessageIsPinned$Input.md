[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageIsPinned$Input

# Type Alias: updateMessageIsPinned$Input

> **updateMessageIsPinned$Input**: `object`

Version of [updateMessageIsPinned](updateMessageIsPinned.md) for method parameters.

The message pinned state was changed

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageIsPinned"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is pinned

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

The message identifier

## Defined in

dist/generated/types.d.ts:52916
