[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / togglePaidMessageReactionIsAnonymous$Input

# Type Alias: togglePaidMessageReactionIsAnonymous$Input

> **togglePaidMessageReactionIsAnonymous$Input**: `object`

Changes whether the paid message reaction of the user to a message is anonymous. The message must have paid reaction added by the user

## Type declaration

### \_

> `readonly` **\_**: `"togglePaidMessageReactionIsAnonymous"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of the chat to which the message belongs

### is\_anonymous?

> `readonly` `optional` **is\_anonymous**: [`Bool$Input`](Bool$Input.md)

Pass true to make paid reaction of the user on the message anonymous; pass false to make the user's profile visible among top reactors

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

## Defined in

dist/generated/types.d.ts:83523
