[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / autosaveSettings$Input

# Type Alias: autosaveSettings$Input

> **autosaveSettings$Input**: `object`

Version of [autosaveSettings](autosaveSettings-1.md) for method parameters.

Describes autosave settings

## Type declaration

### \_

> `readonly` **\_**: `"autosaveSettings"`

### channel\_settings?

> `readonly` `optional` **channel\_settings**: [`scopeAutosaveSettings$Input`](scopeAutosaveSettings$Input-1.md)

Default autosave settings for channel chats

### exceptions?

> `readonly` `optional` **exceptions**: [`vector$Input`](vector$Input.md)\<[`autosaveSettingsException$Input`](autosaveSettingsException$Input-1.md)\>

Autosave settings for specific chats

### group\_settings?

> `readonly` `optional` **group\_settings**: [`scopeAutosaveSettings$Input`](scopeAutosaveSettings$Input-1.md)

Default autosave settings for basic group and supergroup chats

### private\_chat\_settings?

> `readonly` `optional` **private\_chat\_settings**: [`scopeAutosaveSettings$Input`](scopeAutosaveSettings$Input-1.md)

Default autosave settings for private chats

## Defined in

dist/generated/types.d.ts:49961
