[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateFileGenerationStart

# Type Alias: updateFileGenerationStart

> **updateFileGenerationStart**: `object`

The file generation process needs to be started by the application

## Type declaration

### \_

> **\_**: `"updateFileGenerationStart"`

### conversion

> **conversion**: `string`

String specifying the conversion applied to the original file. If conversion is "#url#" than original_path contains an HTTP/HTTPS URL of a file, which must be downloaded by the application

### destination\_path

> **destination\_path**: `string`

The path to a file that must be created and where the new file is generated

### generation\_id

> **generation\_id**: [`int64`](int64.md)

Unique identifier for the generation process

### original\_path

> **original\_path**: `string`

The path to a file from which a new file is generated; may be empty

## Defined in

dist/generated/types.d.ts:56891
