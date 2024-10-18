[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storyPrivacySettingsContacts$Input

# Type Alias: storyPrivacySettingsContacts$Input

> **storyPrivacySettingsContacts$Input**: `object`

Version of [storyPrivacySettingsContacts](storyPrivacySettingsContacts.md) for method parameters.

The story can be viewed by all contacts except chosen users

## Type declaration

### \_

> `readonly` **\_**: `"storyPrivacySettingsContacts"`

### except\_user\_ids?

> `readonly` `optional` **except\_user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

User identifiers of the contacts that can't see the story; always unknown and empty for non-owned stories

## Defined in

dist/generated/types.d.ts:47456
