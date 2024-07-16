[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / textEntity$Input

# Type Alias: textEntity$Input

> **textEntity$Input**: `object`

Version of [textEntity](textEntity-1.md) for method parameters.

Represents a part of the text that needs to be formatted in some unusual way

## Type declaration

### \_

> `readonly` **\_**: `"textEntity"`

### length?

> `readonly` `optional` **length**: [`int32`](int32-1.md)

Length of the entity, in UTF-16 code units

### offset?

> `readonly` `optional` **offset**: [`int32`](int32-1.md)

Offset of the entity, in UTF-16 code units

### type?

> `readonly` `optional` **type**: [`TextEntityType$Input`](TextEntityType$Input.md)

Type of the entity

## Defined in

dist/generated/types.d.ts:3014
