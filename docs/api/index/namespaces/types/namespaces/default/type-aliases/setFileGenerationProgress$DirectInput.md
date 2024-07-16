[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setFileGenerationProgress$DirectInput

# Type Alias: setFileGenerationProgress$DirectInput

> **setFileGenerationProgress$DirectInput**: `object`

Informs TDLib on a file generation progress

## Type declaration

### expected\_size?

> `readonly` `optional` **expected\_size**: [`int53`](int53-1.md)

Expected size of the generated file, in bytes; 0 if unknown

### generation\_id?

> `readonly` `optional` **generation\_id**: [`int64$Input`](int64$Input-1.md)

The identifier of the generation process

### local\_prefix\_size?

> `readonly` `optional` **local\_prefix\_size**: [`int53`](int53-1.md)

The number of bytes already generated

## Defined in

dist/generated/types.d.ts:89096
