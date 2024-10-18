[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateSavedMessagesTags$Input

# Type Alias: updateSavedMessagesTags$Input

> **updateSavedMessagesTags$Input**: `object`

Version of [updateSavedMessagesTags](updateSavedMessagesTags.md) for method parameters.

Tags used in Saved Messages or a Saved Messages topic have changed

## Type declaration

### \_

> `readonly` **\_**: `"updateSavedMessagesTags"`

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53.md)

Identifier of Saved Messages topic which tags were changed; 0 if tags for the whole chat has changed

### tags?

> `readonly` `optional` **tags**: [`savedMessagesTags$Input`](savedMessagesTags$Input.md)

The new tags

## Defined in

dist/generated/types.d.ts:58343
