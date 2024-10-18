[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / logStreamFile

# Type Alias: logStreamFile

> **logStreamFile**: `object`

The log is written to a file

## Type declaration

### \_

> **\_**: `"logStreamFile"`

### max\_file\_size

> **max\_file\_size**: [`int53`](int53.md)

The maximum size of the file to where the internal TDLib log is written before the file will automatically be rotated, in bytes

### path

> **path**: `string`

Path to the file to where the internal TDLib log will be written

### redirect\_stderr

> **redirect\_stderr**: [`Bool`](Bool.md)

Pass true to additionally redirect stderr to the log file. Ignored on Windows

## Defined in

dist/generated/types.d.ts:59859
