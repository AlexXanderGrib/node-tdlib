[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputFileGenerated

# Type Alias: inputFileGenerated

> **inputFileGenerated**: `object`

A file generated by the application

## Type declaration

### \_

> **\_**: `"inputFileGenerated"`

### conversion

> **conversion**: `string`

String specifying the conversion applied to the original file; must be persistent across application restarts. Conversions beginning with '#' are reserved for internal TDLib usage

### expected\_size

> **expected\_size**: [`int53`](int53-1.md)

Expected size of the generated file, in bytes; 0 if unknown

### original\_path

> **original\_path**: `string`

Local path to a file from which the file is generated; may be empty if there is no such file

## Defined in

dist/generated/types.d.ts:3957
