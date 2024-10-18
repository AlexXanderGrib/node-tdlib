[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessagePublicForwards

# Type Alias: getMessagePublicForwards()

> **getMessagePublicForwards**: (`parameters`) => [`PublicForwards`](PublicForwards-1.md)

Returns forwarded copies of a channel message to different public channels and public reposts as a story. Can be used only if messageProperties.can_get_statistics == true. For optimal performance, the number of returned messages and stories is chosen by TDLib

## Parameters

• **parameters**: [`getMessagePublicForwards$Input`](getMessagePublicForwards$Input.md)

[getMessagePublicForwards$Input](getMessagePublicForwards$Input.md)

## Returns

[`PublicForwards`](PublicForwards-1.md)

[PublicForwards](PublicForwards-1.md)

## Defined in

dist/generated/types.d.ts:101472
