[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatSlowModeDelay$DirectInput

# Type Alias: setChatSlowModeDelay$DirectInput

> **setChatSlowModeDelay$DirectInput**: `object`

Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members right

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### slow\_mode\_delay?

> `readonly` `optional` **slow\_mode\_delay**: [`int32`](int32.md)

New slow mode delay for the chat, in seconds; must be one of 0, 10, 30, 60, 300, 900, 3600

## Defined in

dist/generated/types.d.ts:88392
