[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createNewBasicGroupChat$DirectInput

# Type Alias: createNewBasicGroupChat$DirectInput

> **createNewBasicGroupChat$DirectInput**: `object`

Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns information about the newly created chat

## Type declaration

### message\_auto\_delete\_time?

> `readonly` `optional` **message\_auto\_delete\_time**: [`int32`](int32-1.md)

Message auto-delete time value, in seconds; must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically

### title?

> `readonly` `optional` **title**: `string`

Title of the new basic group; 1-128 characters

### user\_ids?

> `readonly` `optional` **user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53-1.md)\>

Identifiers of users to be added to the basic group; may be empty to create a basic group without other members

## Defined in

dist/generated/types.d.ts:84246
