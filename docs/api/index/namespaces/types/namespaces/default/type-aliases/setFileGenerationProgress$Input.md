[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setFileGenerationProgress$Input

# Type Alias: setFileGenerationProgress$Input

> **setFileGenerationProgress$Input**: `object`

Informs TDLib on a file generation progress

## Type declaration

### \_

> `readonly` **\_**: `"setFileGenerationProgress"`

### expected\_size?

> `readonly` `optional` **expected\_size**: [`int53`](int53.md)

Expected size of the generated file, in bytes; 0 if unknown

### generation\_id?

> `readonly` `optional` **generation\_id**: [`int64$Input`](int64$Input.md)

The identifier of the generation process

### local\_prefix\_size?

> `readonly` `optional` **local\_prefix\_size**: [`int53`](int53.md)

The number of bytes already generated

## Defined in

dist/generated/types.d.ts:91450
