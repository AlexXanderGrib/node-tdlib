[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportMessageReactions$Input

# Type Alias: reportMessageReactions$Input

> **reportMessageReactions$Input**: `object`

Reports reactions set on a message to the Telegram moderators. Reactions on a message can be reported only if messageProperties.can_report_reactions

## Type declaration

### \_

> `readonly` **\_**: `"reportMessageReactions"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Message identifier

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the sender, which added the reaction

## Defined in

dist/generated/types.d.ts:101046
