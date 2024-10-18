[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateStoryStealthMode

# Type Alias: updateStoryStealthMode

> **updateStoryStealthMode**: `object`

Story stealth mode settings have changed

## Type declaration

### \_

> **\_**: `"updateStoryStealthMode"`

### active\_until\_date

> **active\_until\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) until stealth mode is active; 0 if it is disabled

### cooldown\_until\_date

> **cooldown\_until\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when stealth mode can be enabled again; 0 if there is no active cooldown

## Defined in

dist/generated/types.d.ts:57649
