[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getStoryPublicForwards

# Type Alias: getStoryPublicForwards()

> **getStoryPublicForwards**: (`parameters`) => [`PublicForwards`](PublicForwards-1.md)

Returns forwards of a story as a message to public chats and reposts by public channels. Can be used only if the story is posted on behalf of the current user or story.can_get_statistics == true.

- For optimal performance, the number of returned messages and stories is chosen by TDLib

## Parameters

• **parameters**: [`getStoryPublicForwards$Input`](getStoryPublicForwards$Input.md)

[getStoryPublicForwards$Input](getStoryPublicForwards$Input.md)

## Returns

[`PublicForwards`](PublicForwards-1.md)

[PublicForwards](PublicForwards-1.md)

## Defined in

dist/generated/types.d.ts:90632
