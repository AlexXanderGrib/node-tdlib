[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateSuggestedActions$Input

# Type Alias: updateSuggestedActions$Input

> **updateSuggestedActions$Input**: `object`

Version of [updateSuggestedActions](updateSuggestedActions.md) for method parameters.

The list of suggested to the user actions has changed

## Type declaration

### \_

> `readonly` **\_**: `"updateSuggestedActions"`

### added\_actions?

> `readonly` `optional` **added\_actions**: [`vector$Input`](vector$Input.md)\<[`SuggestedAction$Input`](SuggestedAction$Input.md)\>

Added suggested actions

### removed\_actions?

> `readonly` `optional` **removed\_actions**: [`vector$Input`](vector$Input.md)\<[`SuggestedAction$Input`](SuggestedAction$Input.md)\>

Removed suggested actions

## Defined in

dist/generated/types.d.ts:57009
