[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / error

# Type Alias: error

> **error**: `object`

An object of this type can be returned on every function call, in case of an error

## Type declaration

### \_

> **\_**: `"error"`

### code

> **code**: [`int32`](int32-1.md)

Error code; subject to future changes. If the error code is 406, the error message must not be processed in any way and must not be displayed to the user

### message

> **message**: `string`

Error message; subject to future changes

## Defined in

dist/generated/types.d.ts:2445
