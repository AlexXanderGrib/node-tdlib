[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateFileGenerationStart$Input

# Type Alias: updateFileGenerationStart$Input

> **updateFileGenerationStart$Input**: `object`

Version of [updateFileGenerationStart](updateFileGenerationStart.md) for method parameters.

The file generation process needs to be started by the application

## Type declaration

### \_

> `readonly` **\_**: `"updateFileGenerationStart"`

### conversion?

> `readonly` `optional` **conversion**: `string`

String specifying the conversion applied to the original file. If conversion is "#url#" than original_path contains an HTTP/HTTPS URL of a file, which must be downloaded by the application

### destination\_path?

> `readonly` `optional` **destination\_path**: `string`

The path to a file that must be created and where the new file is generated

### generation\_id?

> `readonly` `optional` **generation\_id**: [`int64$Input`](int64$Input.md)

Unique identifier for the generation process

### original\_path?

> `readonly` `optional` **original\_path**: `string`

The path to a file from which a new file is generated; may be empty

## Defined in

dist/generated/types.d.ts:56919
