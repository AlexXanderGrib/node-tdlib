[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSupergroupJoinToSendMessages$Input

# Type Alias: toggleSupergroupJoinToSendMessages$Input

> **toggleSupergroupJoinToSendMessages$Input**: `object`

Toggles whether joining is mandatory to send messages to a discussion supergroup; requires can_restrict_members administrator right

## Type declaration

### \_

> `readonly` **\_**: `"toggleSupergroupJoinToSendMessages"`

### join\_to\_send\_messages?

> `readonly` `optional` **join\_to\_send\_messages**: [`Bool$Input`](Bool$Input.md)

New value of join_to_send_messages

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Identifier of the supergroup that isn't a broadcast group

## Defined in

dist/generated/types.d.ts:98990
