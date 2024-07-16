[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatPermissions$Input

# Type Alias: setChatPermissions$Input

> **setChatPermissions$Input**: `object`

Changes the chat members permissions. Supported only for basic groups and supergroups. Requires can_restrict_members administrator right

## Type declaration

### \_

> `readonly` **\_**: `"setChatPermissions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### permissions?

> `readonly` `optional` **permissions**: [`chatPermissions$Input`](chatPermissions$Input-1.md)

New non-administrator members permissions in the chat

## Defined in

dist/generated/types.d.ts:85417
