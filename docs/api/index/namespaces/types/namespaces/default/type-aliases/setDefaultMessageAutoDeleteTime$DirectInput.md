[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setDefaultMessageAutoDeleteTime$DirectInput

# Type Alias: setDefaultMessageAutoDeleteTime$DirectInput

> **setDefaultMessageAutoDeleteTime$DirectInput**: `object`

Changes the default message auto-delete time for new chats

## Type declaration

### message\_auto\_delete\_time?

> `readonly` `optional` **message\_auto\_delete\_time**: [`messageAutoDeleteTime$Input`](messageAutoDeleteTime$Input-1.md)

New default message auto-delete time; must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically

## Defined in

dist/generated/types.d.ts:98089
