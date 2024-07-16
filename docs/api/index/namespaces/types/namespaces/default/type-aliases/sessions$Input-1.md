[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sessions$Input

# Type Alias: sessions$Input

> **sessions$Input**: `object`

Version of [sessions](sessions-1.md) for method parameters.

Contains a list of sessions

## Type declaration

### \_

> `readonly` **\_**: `"sessions"`

### inactive\_session\_ttl\_days?

> `readonly` `optional` **inactive\_session\_ttl\_days**: [`int32`](int32-1.md)

Number of days of inactivity before sessions will automatically be terminated; 1-366 days

### sessions?

> `readonly` `optional` **sessions**: [`vector$Input`](vector$Input.md)\<[`session$Input`](session$Input-1.md)\>

List of sessions

## Defined in

dist/generated/types.d.ts:46911
