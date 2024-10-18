[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatPermissions$DirectInput

# Type Alias: setChatPermissions$DirectInput

> **setChatPermissions$DirectInput**: `object`

Changes the chat members permissions. Supported only for basic groups and supergroups. Requires can_restrict_members administrator right

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### permissions?

> `readonly` `optional` **permissions**: [`chatPermissions$Input`](chatPermissions$Input.md)

New non-administrator members permissions in the chat

## Defined in

dist/generated/types.d.ts:87732
