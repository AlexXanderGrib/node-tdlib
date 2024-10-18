[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editStory$DirectInput

# Type Alias: editStory$DirectInput

> **editStory$DirectInput**: `object`

Changes content and caption of a story. Can be called only if story.can_be_edited == true

## Type declaration

### areas?

> `readonly` `optional` **areas**: [`inputStoryAreas$Input`](inputStoryAreas$Input.md) \| `null`

New clickable rectangle areas to be shown on the story media; pass null to keep the current areas. Areas can't be edited if story content isn't changed

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md) \| `null`

New story caption; pass null to keep the current caption

### content?

> `readonly` `optional` **content**: [`InputStoryContent$Input`](InputStoryContent$Input.md) \| `null`

New content of the story; pass null to keep the current content

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

Identifier of the story to edit

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53.md)

Identifier of the chat that posted the story

## Defined in

dist/generated/types.d.ts:89683
