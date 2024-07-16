[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / callStateDiscarded$Input

# Type Alias: callStateDiscarded$Input

> **callStateDiscarded$Input**: `object`

Version of [callStateDiscarded](callStateDiscarded.md) for method parameters.

The call has ended successfully

## Type declaration

### \_

> `readonly` **\_**: `"callStateDiscarded"`

### need\_debug\_information?

> `readonly` `optional` **need\_debug\_information**: [`Bool$Input`](Bool$Input.md)

True, if the call debug information must be sent to the server

### need\_log?

> `readonly` `optional` **need\_log**: [`Bool$Input`](Bool$Input.md)

True, if the call log must be sent to the server

### need\_rating?

> `readonly` `optional` **need\_rating**: [`Bool$Input`](Bool$Input.md)

True, if the call rating must be sent to the server

### reason?

> `readonly` `optional` **reason**: [`CallDiscardReason$Input`](CallDiscardReason$Input.md)

The reason why the call has ended

## Defined in

dist/generated/types.d.ts:35007
