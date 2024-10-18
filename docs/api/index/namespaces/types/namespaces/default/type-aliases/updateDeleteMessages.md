[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateDeleteMessages

# Type Alias: updateDeleteMessages

> **updateDeleteMessages**: `object`

Some messages were deleted

## Type declaration

### \_

> **\_**: `"updateDeleteMessages"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### from\_cache

> **from\_cache**: [`Bool`](Bool.md)

True, if the messages are deleted only from the cache and can possibly be retrieved again in the future

### is\_permanent

> **is\_permanent**: [`Bool`](Bool.md)

True, if the messages are permanently deleted by a user (as opposed to just becoming inaccessible)

### message\_ids

> **message\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

Identifiers of the deleted messages

## Defined in

dist/generated/types.d.ts:56493
