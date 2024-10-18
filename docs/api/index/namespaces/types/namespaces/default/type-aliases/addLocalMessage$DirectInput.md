[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addLocalMessage$DirectInput

# Type Alias: addLocalMessage$DirectInput

> **addLocalMessage$DirectInput**: `object`

Adds a local message to a chat. The message is persistent across application restarts only if the message database is used. Returns the added message

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Target chat

### disable\_notification?

> `readonly` `optional` **disable\_notification**: [`Bool$Input`](Bool$Input.md)

Pass true to disable notification for the message

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be added

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message or story to be replied; pass null if none

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the sender of the message

## Defined in

dist/generated/types.d.ts:80596
