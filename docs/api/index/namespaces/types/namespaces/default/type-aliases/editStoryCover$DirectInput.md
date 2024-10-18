[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editStoryCover$DirectInput

# Type Alias: editStoryCover$DirectInput

> **editStoryCover$DirectInput**: `object`

Changes cover of a video story. Can be called only if story.can_be_edited == true and the story isn't being edited now

## Type declaration

### cover\_frame\_timestamp?

> `readonly` `optional` **cover\_frame\_timestamp**: [`double`](double.md)

New timestamp of the frame, which will be used as video thumbnail

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

Identifier of the story to edit

### story\_sender\_chat\_id?

> `readonly` `optional` **story\_sender\_chat\_id**: [`int53`](int53.md)

Identifier of the chat that posted the story

## Defined in

dist/generated/types.d.ts:89741
