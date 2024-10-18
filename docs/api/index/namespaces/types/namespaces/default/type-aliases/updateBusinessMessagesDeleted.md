[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateBusinessMessagesDeleted

# Type Alias: updateBusinessMessagesDeleted

> **updateBusinessMessagesDeleted**: `object`

Messages in a business account were deleted; for bots only

## Type declaration

### \_

> **\_**: `"updateBusinessMessagesDeleted"`

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Identifier of a chat in the business account in which messages were deleted

### connection\_id

> **connection\_id**: `string`

Unique identifier of the business connection

### message\_ids

> **message\_ids**: [`vector`](vector.md)\<[`int53`](int53.md)\>

Unique message identifiers of the deleted messages

## Defined in

dist/generated/types.d.ts:58843
