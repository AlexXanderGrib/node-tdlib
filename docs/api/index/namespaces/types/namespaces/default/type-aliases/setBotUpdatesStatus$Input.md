[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setBotUpdatesStatus$Input

# Type Alias: setBotUpdatesStatus$Input

> **setBotUpdatesStatus$Input**: `object`

Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"setBotUpdatesStatus"`

### error\_message?

> `readonly` `optional` **error\_message**: `string`

The last error message

### pending\_update\_count?

> `readonly` `optional` **pending\_update\_count**: [`int32`](int32-1.md)

The number of pending updates

## Defined in

dist/generated/types.d.ts:99630
