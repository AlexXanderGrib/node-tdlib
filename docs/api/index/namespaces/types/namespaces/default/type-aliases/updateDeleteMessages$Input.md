[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateDeleteMessages$Input

# Type Alias: updateDeleteMessages$Input

> **updateDeleteMessages$Input**: `object`

Version of [updateDeleteMessages](updateDeleteMessages.md) for method parameters.

Some messages were deleted

## Type declaration

### \_

> `readonly` **\_**: `"updateDeleteMessages"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### from\_cache?

> `readonly` `optional` **from\_cache**: [`Bool$Input`](Bool$Input.md)

True, if the messages are deleted only from the cache and can possibly be retrieved again in the future

### is\_permanent?

> `readonly` `optional` **is\_permanent**: [`Bool$Input`](Bool$Input.md)

True, if the messages are permanently deleted by a user (as opposed to just becoming inaccessible)

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of the deleted messages

## Defined in

dist/generated/types.d.ts:54905
