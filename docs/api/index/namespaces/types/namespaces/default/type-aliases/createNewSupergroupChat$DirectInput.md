[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createNewSupergroupChat$DirectInput

# Type Alias: createNewSupergroupChat$DirectInput

> **createNewSupergroupChat$DirectInput**: `object`

Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created chat

## Type declaration

### description?

> `readonly` `optional` **description**: `string`

Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created chat

### for\_import?

> `readonly` `optional` **for\_import**: [`Bool$Input`](Bool$Input.md)

Pass true to create a supergroup for importing messages using importMessages

### is\_channel?

> `readonly` `optional` **is\_channel**: [`Bool$Input`](Bool$Input.md)

Pass true to create a channel chat; ignored if a forum is created

### is\_forum?

> `readonly` `optional` **is\_forum**: [`Bool$Input`](Bool$Input.md)

Pass true to create a forum supergroup chat

### location?

> `readonly` `optional` **location**: [`chatLocation$Input`](chatLocation$Input-1.md) \| `null`

Chat location if a location-based supergroup is being created; pass null to create an ordinary supergroup chat

### message\_auto\_delete\_time?

> `readonly` `optional` **message\_auto\_delete\_time**: [`int32`](int32-1.md)

Message auto-delete time value, in seconds; must be from 0 up to 365 * 86400 and be divisible by 86400. If 0, then messages aren't deleted automatically

### title?

> `readonly` `optional` **title**: `string`

Title of the new chat; 1-128 characters

## Defined in

dist/generated/types.d.ts:84314
