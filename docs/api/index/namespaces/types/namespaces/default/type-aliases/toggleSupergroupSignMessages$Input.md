[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / toggleSupergroupSignMessages$Input

# Type Alias: toggleSupergroupSignMessages$Input

> **toggleSupergroupSignMessages$Input**: `object`

Toggles whether sender signature or link to the account is added to sent messages in a channel; requires can_change_info member right

## Type declaration

### \_

> `readonly` **\_**: `"toggleSupergroupSignMessages"`

### show\_message\_sender?

> `readonly` `optional` **show\_message\_sender**: [`Bool$Input`](Bool$Input.md)

New value of show_message_sender

### sign\_messages?

> `readonly` `optional` **sign\_messages**: [`Bool$Input`](Bool$Input.md)

New value of sign_messages

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Identifier of the channel

## Defined in

dist/generated/types.d.ts:98942
