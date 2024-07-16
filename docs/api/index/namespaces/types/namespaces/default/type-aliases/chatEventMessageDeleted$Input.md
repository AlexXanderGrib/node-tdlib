[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatEventMessageDeleted$Input

# Type Alias: chatEventMessageDeleted$Input

> **chatEventMessageDeleted$Input**: `object`

Version of [chatEventMessageDeleted](chatEventMessageDeleted.md) for method parameters.

A message was deleted

## Type declaration

### \_

> `readonly` **\_**: `"chatEventMessageDeleted"`

### can\_report\_anti\_spam\_false\_positive?

> `readonly` `optional` **can\_report\_anti\_spam\_false\_positive**: [`Bool$Input`](Bool$Input.md)

True, if the message deletion can be reported via reportSupergroupAntiSpamFalsePositive

### message?

> `readonly` `optional` **message**: [`message$Input`](message$Input-1.md)

Deleted message

## Defined in

dist/generated/types.d.ts:39241
