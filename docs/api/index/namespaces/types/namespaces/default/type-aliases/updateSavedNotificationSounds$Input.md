[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateSavedNotificationSounds$Input

# Type Alias: updateSavedNotificationSounds$Input

> **updateSavedNotificationSounds$Input**: `object`

Version of [updateSavedNotificationSounds](updateSavedNotificationSounds.md) for method parameters.

The list of saved notification sounds was updated. This update may not be sent until information about a notification sound was requested for the first time

## Type declaration

### \_

> `readonly` **\_**: `"updateSavedNotificationSounds"`

### notification\_sound\_ids?

> `readonly` `optional` **notification\_sound\_ids**: [`vector$Input`](vector$Input.md)\<[`int64$Input`](int64$Input.md)\>

The new list of identifiers of saved notification sounds

## Defined in

dist/generated/types.d.ts:57904
