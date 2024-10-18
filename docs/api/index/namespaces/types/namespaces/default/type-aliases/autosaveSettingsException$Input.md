[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / autosaveSettingsException$Input

# Type Alias: autosaveSettingsException$Input

> **autosaveSettingsException$Input**: `object`

Version of [autosaveSettingsException](autosaveSettingsException.md) for method parameters.

Contains autosave settings for a chat, which overrides default settings for the corresponding scope

## Type declaration

### \_

> `readonly` **\_**: `"autosaveSettingsException"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### settings?

> `readonly` `optional` **settings**: [`scopeAutosaveSettings$Input`](scopeAutosaveSettings$Input.md)

Autosave settings for the chat

## Defined in

dist/generated/types.d.ts:51501
