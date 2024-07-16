[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateAutosaveSettings

# Type Alias: updateAutosaveSettings

> **updateAutosaveSettings**: `object`

Autosave settings for some type of chats were updated

## Type declaration

### \_

> **\_**: `"updateAutosaveSettings"`

### scope

> **scope**: [`AutosaveSettingsScope`](AutosaveSettingsScope.md)

Type of chats for which autosave settings were updated

### settings

> **settings**: [`scopeAutosaveSettings`](scopeAutosaveSettings-1.md) \| `null`

The new autosave settings; may be null if the settings are reset to default

## Defined in

dist/generated/types.d.ts:57077
