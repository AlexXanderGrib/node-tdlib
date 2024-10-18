[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / finishFileGeneration$Input

# Type Alias: finishFileGeneration$Input

> **finishFileGeneration$Input**: `object`

Finishes the file generation

## Type declaration

### \_

> `readonly` **\_**: `"finishFileGeneration"`

### error?

> `readonly` `optional` **error**: [`error$Input`](error$Input.md) \| `null`

If passed, the file generation has failed and must be terminated; pass null if the file generation succeeded

### generation\_id?

> `readonly` `optional` **generation\_id**: [`int64$Input`](int64$Input.md)

The identifier of the generation process

## Defined in

dist/generated/types.d.ts:91498
