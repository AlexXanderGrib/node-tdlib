[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateBusinessMessagesDeleted$Input

# Type Alias: updateBusinessMessagesDeleted$Input

> **updateBusinessMessagesDeleted$Input**: `object`

Version of [updateBusinessMessagesDeleted](updateBusinessMessagesDeleted.md) for method parameters.

Messages in a business account were deleted; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"updateBusinessMessagesDeleted"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of a chat in the business account in which messages were deleted

### connection\_id?

> `readonly` `optional` **connection\_id**: `string`

Unique identifier of the business connection

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Unique message identifiers of the deleted messages

## Defined in

dist/generated/types.d.ts:58866
