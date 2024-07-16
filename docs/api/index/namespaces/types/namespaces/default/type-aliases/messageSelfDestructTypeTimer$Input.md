[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageSelfDestructTypeTimer$Input

# Type Alias: messageSelfDestructTypeTimer$Input

> **messageSelfDestructTypeTimer$Input**: `object`

Version of [messageSelfDestructTypeTimer](messageSelfDestructTypeTimer.md) for method parameters.

The message will be self-destructed in the specified time after its content was opened

## Type declaration

### \_

> `readonly` **\_**: `"messageSelfDestructTypeTimer"`

### self\_destruct\_time?

> `readonly` `optional` **self\_destruct\_time**: [`int32`](int32-1.md)

The message's self-destruct time, in seconds; must be between 0 and 60 in private chats

## Defined in

dist/generated/types.d.ts:29052
