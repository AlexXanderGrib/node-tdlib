[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / finishFileGeneration$DirectInput

# Type Alias: finishFileGeneration$DirectInput

> **finishFileGeneration$DirectInput**: `object`

Finishes the file generation

## Type declaration

### error?

> `readonly` `optional` **error**: [`error$Input`](error$Input-1.md) \| `null`

If passed, the file generation has failed and must be terminated; pass null if the file generation succeeded

### generation\_id?

> `readonly` `optional` **generation\_id**: [`int64$Input`](int64$Input-1.md)

The identifier of the generation process

## Defined in

dist/generated/types.d.ts:89139
