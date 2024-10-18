[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageStatistics$Input

# Type Alias: getMessageStatistics$Input

> **getMessageStatistics$Input**: `object`

Returns detailed statistics about a message. Can be used only if messageProperties.can_get_statistics == true

## Type declaration

### \_

> `readonly` **\_**: `"getMessageStatistics"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### is\_dark?

> `readonly` `optional` **is\_dark**: [`Bool$Input`](Bool$Input.md)

Pass true if a dark theme is used by the application

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

## Defined in

dist/generated/types.d.ts:101370
