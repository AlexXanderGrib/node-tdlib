[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sharedUser$Input

# Type Alias: sharedUser$Input

> **sharedUser$Input**: `object`

Version of [sharedUser](sharedUser-1.md) for method parameters.

Contains information about a user shared with a bot

## Type declaration

### \_

> `readonly` **\_**: `"sharedUser"`

### first\_name?

> `readonly` `optional` **first\_name**: `string`

First name of the user; for bots only

### last\_name?

> `readonly` `optional` **last\_name**: `string`

Last name of the user; for bots only

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input-1.md) \| `null`

Profile photo of the user; for bots only; may be null

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

User identifier

### username?

> `readonly` `optional` **username**: `string`

Username of the user; for bots only

## Defined in

dist/generated/types.d.ts:18682
