[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / targetChatChosen$Input

# Type Alias: targetChatChosen$Input

> **targetChatChosen$Input**: `object`

Version of [targetChatChosen](targetChatChosen.md) for method parameters.

The chat needs to be chosen by the user among chats of the specified types

## Type declaration

### \_

> `readonly` **\_**: `"targetChatChosen"`

### allow\_bot\_chats?

> `readonly` `optional` **allow\_bot\_chats**: [`Bool$Input`](Bool$Input.md)

True, if private chats with other bots are allowed

### allow\_channel\_chats?

> `readonly` `optional` **allow\_channel\_chats**: [`Bool$Input`](Bool$Input.md)

True, if channel chats are allowed

### allow\_group\_chats?

> `readonly` `optional` **allow\_group\_chats**: [`Bool$Input`](Bool$Input.md)

True, if basic group and supergroup chats are allowed

### allow\_user\_chats?

> `readonly` `optional` **allow\_user\_chats**: [`Bool$Input`](Bool$Input.md)

True, if private chats with ordinary users are allowed

## Defined in

dist/generated/types.d.ts:47291
