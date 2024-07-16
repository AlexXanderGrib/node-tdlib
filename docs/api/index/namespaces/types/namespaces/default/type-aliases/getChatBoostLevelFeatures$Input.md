[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getChatBoostLevelFeatures$Input

# Type Alias: getChatBoostLevelFeatures$Input

> **getChatBoostLevelFeatures$Input**: `object`

Returns the list of features available on the specific chat boost level; this is an offline request

## Type declaration

### \_

> `readonly` **\_**: `"getChatBoostLevelFeatures"`

### is\_channel?

> `readonly` `optional` **is\_channel**: [`Bool$Input`](Bool$Input.md)

Pass true to get the list of features for channels; pass false to get the list of features for supergroups

### level?

> `readonly` `optional` **level**: [`int32`](int32-1.md)

Chat boost level

## Defined in

dist/generated/types.d.ts:88261
