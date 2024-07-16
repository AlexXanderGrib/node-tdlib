[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStoryStealthMode$Input

# Type Alias: updateStoryStealthMode$Input

> **updateStoryStealthMode$Input**: `object`

Version of [updateStoryStealthMode](updateStoryStealthMode.md) for method parameters.

Story stealth mode settings have changed

## Type declaration

### \_

> `readonly` **\_**: `"updateStoryStealthMode"`

### active\_until\_date?

> `readonly` `optional` **active\_until\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) until stealth mode is active; 0 if it is disabled

### cooldown\_until\_date?

> `readonly` `optional` **cooldown\_until\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when stealth mode can be enabled again; 0 if there is no active cooldown

## Defined in

dist/generated/types.d.ts:56051
