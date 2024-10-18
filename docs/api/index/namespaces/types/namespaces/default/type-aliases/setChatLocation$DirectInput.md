[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setChatLocation$DirectInput

# Type Alias: setChatLocation$DirectInput

> **setChatLocation$DirectInput**: `object`

Changes the location of a chat. Available only for some location-based supergroups, use supergroupFullInfo.can_set_location to check whether the method is allowed to use

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### location?

> `readonly` `optional` **location**: [`chatLocation$Input`](chatLocation$Input.md)

New location for the chat; must be valid and not null

## Defined in

dist/generated/types.d.ts:88354
