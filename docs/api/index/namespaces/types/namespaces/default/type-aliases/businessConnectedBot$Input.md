[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessConnectedBot$Input

# Type Alias: businessConnectedBot$Input

> **businessConnectedBot$Input**: `object`

Version of [businessConnectedBot](businessConnectedBot.md) for method parameters.

Describes a bot connected to a business account

## Type declaration

### \_

> `readonly` **\_**: `"businessConnectedBot"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53.md)

User identifier of the bot

### can\_reply?

> `readonly` `optional` **can\_reply**: [`Bool$Input`](Bool$Input.md)

True, if the bot can send messages to the private chats; false otherwise

### recipients?

> `readonly` `optional` **recipients**: [`businessRecipients$Input`](businessRecipients$Input.md)

Private chats that will be accessible to the bot

## Defined in

dist/generated/types.d.ts:6870
