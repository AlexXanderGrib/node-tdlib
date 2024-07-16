[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sharedChat$Input

# Type Alias: sharedChat$Input

> **sharedChat$Input**: `object`

Version of [sharedChat](sharedChat-1.md) for method parameters.

Contains information about a chat shared with a bot

## Type declaration

### \_

> `readonly` **\_**: `"sharedChat"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input-1.md) \| `null`

Photo of the chat; for bots only; may be null

### title?

> `readonly` `optional` **title**: `string`

Title of the chat; for bots only

### username?

> `readonly` `optional` **username**: `string`

Username of the chat; for bots only

## Defined in

dist/generated/types.d.ts:18741
