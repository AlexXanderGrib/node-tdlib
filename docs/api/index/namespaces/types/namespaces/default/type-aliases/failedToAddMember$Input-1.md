[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / failedToAddMember$Input

# Type Alias: failedToAddMember$Input

> **failedToAddMember$Input**: `object`

Version of [failedToAddMember](failedToAddMember-1.md) for method parameters.

Contains information about a user that has failed to be added to a chat

## Type declaration

### \_

> `readonly` **\_**: `"failedToAddMember"`

### premium\_required\_to\_send\_messages?

> `readonly` `optional` **premium\_required\_to\_send\_messages**: [`Bool$Input`](Bool$Input.md)

True, if subscription to Telegram Premium is required to send the user chat invite link

### premium\_would\_allow\_invite?

> `readonly` `optional` **premium\_would\_allow\_invite**: [`Bool$Input`](Bool$Input.md)

True, if subscription to Telegram Premium would have allowed to add the user to the chat

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

User identifier

## Defined in

dist/generated/types.d.ts:16768
