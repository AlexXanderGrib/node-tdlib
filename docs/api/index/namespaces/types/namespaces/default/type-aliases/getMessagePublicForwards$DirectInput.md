[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessagePublicForwards$DirectInput

# Type Alias: getMessagePublicForwards$DirectInput

> **getMessagePublicForwards$DirectInput**: `object`

Returns forwarded copies of a channel message to different public channels and public reposts as a story. Can be used only if messageProperties.can_get_statistics == true. For optimal performance, the number of returned messages and stories is chosen by TDLib

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier of the message

### limit?

> `readonly` `optional` **limit**: [`int32`](int32.md)

The maximum number of messages and stories to be returned; must be positive and can't be greater than 100. For optimal performance, the number of returned objects is chosen by TDLib and can be smaller than the specified limit

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

### offset?

> `readonly` `optional` **offset**: `string`

Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results

## Defined in

dist/generated/types.d.ts:101444
