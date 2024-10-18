[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateNewChat$Input

# Type Alias: updateNewChat$Input

> **updateNewChat$Input**: `object`

Version of [updateNewChat](updateNewChat.md) for method parameters.

A new chat has been loaded/created. This update is guaranteed to come before the chat identifier is returned to the application. The chat field changes will be reported through separate updates

## Type declaration

### \_

> `readonly` **\_**: `"updateNewChat"`

### chat?

> `readonly` `optional` **chat**: [`chat$Input`](chat$Input.md)

The chat

## Defined in

dist/generated/types.d.ts:54820
