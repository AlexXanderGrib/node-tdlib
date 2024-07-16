[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateAutosaveSettings$Input

# Type Alias: updateAutosaveSettings$Input

> **updateAutosaveSettings$Input**: `object`

Version of [updateAutosaveSettings](updateAutosaveSettings.md) for method parameters.

Autosave settings for some type of chats were updated

## Type declaration

### \_

> `readonly` **\_**: `"updateAutosaveSettings"`

### scope?

> `readonly` `optional` **scope**: [`AutosaveSettingsScope$Input`](AutosaveSettingsScope$Input.md)

Type of chats for which autosave settings were updated

### settings?

> `readonly` `optional` **settings**: [`scopeAutosaveSettings$Input`](scopeAutosaveSettings$Input-1.md) \| `null`

The new autosave settings; may be null if the settings are reset to default

## Defined in

dist/generated/types.d.ts:57095
