[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendBusinessMessage$Input

# Type Alias: sendBusinessMessage$Input

> **sendBusinessMessage$Input**: `object`

Sends a message on behalf of a business account; for bots only. Returns the message after it was sent

## Type declaration

### \_

> `readonly` **\_**: `"sendBusinessMessage"`

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which to send the request

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Target chat

### disable\_notification?

> `readonly` `optional` **disable\_notification**: [`Bool$Input`](Bool$Input.md)

Pass true to disable notification for the message

### effect\_id?

> `readonly` `optional` **effect\_id**: [`int64$Input`](int64$Input-1.md)

Identifier of the effect to apply to the message

### input\_message\_content?

> `readonly` `optional` **input\_message\_content**: [`InputMessageContent$Input`](InputMessageContent$Input.md)

The content of the message to be sent

### protect\_content?

> `readonly` `optional` **protect\_content**: [`Bool$Input`](Bool$Input.md)

Pass true if the content of the message must be protected from forwarding and saving

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

Markup for replying to the message; pass null if none

### reply\_to?

> `readonly` `optional` **reply\_to**: [`InputMessageReplyTo$Input`](InputMessageReplyTo$Input.md) \| `null`

Information about the message to be replied; pass null if none

## Defined in

dist/generated/types.d.ts:79498
