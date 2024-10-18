[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / autoDownloadSettingsPresets$Input

# Type Alias: autoDownloadSettingsPresets$Input

> **autoDownloadSettingsPresets$Input**: `object`

Version of [autoDownloadSettingsPresets](autoDownloadSettingsPresets.md) for method parameters.

Contains auto-download settings presets for the current user

## Type declaration

### \_

> `readonly` **\_**: `"autoDownloadSettingsPresets"`

### high?

> `readonly` `optional` **high**: [`autoDownloadSettings$Input`](autoDownloadSettings$Input.md)

Preset with highest settings; supposed to be used by default when connected on Wi-Fi

### low?

> `readonly` `optional` **low**: [`autoDownloadSettings$Input`](autoDownloadSettings$Input.md)

Preset with lowest settings; supposed to be used by default when roaming

### medium?

> `readonly` `optional` **medium**: [`autoDownloadSettings$Input`](autoDownloadSettings$Input.md)

Preset with medium settings; supposed to be used by default when using mobile data

## Defined in

dist/generated/types.d.ts:51352
