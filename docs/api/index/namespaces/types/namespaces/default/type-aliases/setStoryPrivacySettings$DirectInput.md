[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setStoryPrivacySettings$DirectInput

# Type Alias: setStoryPrivacySettings$DirectInput

> **setStoryPrivacySettings$DirectInput**: `object`

Changes privacy settings of a story. The method can be called only for stories posted on behalf of the current user and if story.can_be_edited == true

## Type declaration

### privacy\_settings?

> `readonly` `optional` **privacy\_settings**: [`StoryPrivacySettings$Input`](StoryPrivacySettings$Input.md)

The new privacy settigs for the story

### story\_id?

> `readonly` `optional` **story\_id**: [`int32`](int32.md)

Identifier of the story

## Defined in

dist/generated/types.d.ts:89784
