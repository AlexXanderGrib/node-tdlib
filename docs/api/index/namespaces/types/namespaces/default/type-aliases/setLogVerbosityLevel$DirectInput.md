[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setLogVerbosityLevel$DirectInput

# Type Alias: setLogVerbosityLevel$DirectInput

> **setLogVerbosityLevel$DirectInput**: `object`

Sets the verbosity level of the internal logging of TDLib. Can be called synchronously

## Type declaration

### new\_verbosity\_level?

> `readonly` `optional` **new\_verbosity\_level**: [`int32`](int32.md)

New value of the verbosity level for logging. Value 0 corresponds to fatal errors, value 1 corresponds to errors, value 2 corresponds to warnings and debug warnings,

- value 3 corresponds to informational, value 4 corresponds to debug, value 5 corresponds to verbose debug, value greater than 5 and up to 1023 can be used to enable even more logging

## Defined in

dist/generated/types.d.ts:104637
