[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / logStreamFile$Input

# Type Alias: logStreamFile$Input

> **logStreamFile$Input**: `object`

Version of [logStreamFile](logStreamFile.md) for method parameters.

The log is written to a file

## Type declaration

### \_

> `readonly` **\_**: `"logStreamFile"`

### max\_file\_size?

> `readonly` `optional` **max\_file\_size**: [`int53`](int53.md)

The maximum size of the file to where the internal TDLib log is written before the file will automatically be rotated, in bytes

### path?

> `readonly` `optional` **path**: `string`

Path to the file to where the internal TDLib log will be written

### redirect\_stderr?

> `readonly` `optional` **redirect\_stderr**: [`Bool$Input`](Bool$Input.md)

Pass true to additionally redirect stderr to the log file. Ignored on Windows

## Defined in

dist/generated/types.d.ts:59882
