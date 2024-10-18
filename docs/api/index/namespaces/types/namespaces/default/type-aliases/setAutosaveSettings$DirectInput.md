[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setAutosaveSettings$DirectInput

# Type Alias: setAutosaveSettings$DirectInput

> **setAutosaveSettings$DirectInput**: `object`

Sets autosave settings for the given scope. The method is guaranteed to work only after at least one call to getAutosaveSettings

## Type declaration

### scope?

> `readonly` `optional` **scope**: [`AutosaveSettingsScope$Input`](AutosaveSettingsScope$Input.md)

Autosave settings scope

### settings?

> `readonly` `optional` **settings**: [`scopeAutosaveSettings$Input`](scopeAutosaveSettings$Input.md) \| `null`

New autosave settings for the scope; pass null to set autosave settings to default

## Defined in

dist/generated/types.d.ts:101937
