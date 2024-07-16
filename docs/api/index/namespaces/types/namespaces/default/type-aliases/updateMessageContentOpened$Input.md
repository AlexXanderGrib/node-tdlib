[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateMessageContentOpened$Input

# Type Alias: updateMessageContentOpened$Input

> **updateMessageContentOpened$Input**: `object`

Version of [updateMessageContentOpened](updateMessageContentOpened.md) for method parameters.

The message content was opened. Updates voice note messages to "listened", video note messages to "viewed" and starts the self-destruct timer

## Type declaration

### \_

> `readonly` **\_**: `"updateMessageContentOpened"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Message identifier

## Defined in

dist/generated/types.d.ts:52999
