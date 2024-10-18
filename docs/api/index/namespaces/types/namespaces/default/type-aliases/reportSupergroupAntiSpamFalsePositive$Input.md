[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportSupergroupAntiSpamFalsePositive$Input

# Type Alias: reportSupergroupAntiSpamFalsePositive$Input

> **reportSupergroupAntiSpamFalsePositive$Input**: `object`

Reports a false deletion of a message by aggressive anti-spam checks; requires administrator rights in the supergroup. Can be called only for messages from chatEventMessageDeleted with can_report_anti_spam_false_positive == true

## Type declaration

### \_

> `readonly` **\_**: `"reportSupergroupAntiSpamFalsePositive"`

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the erroneously deleted message from chatEventMessageDeleted

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Supergroup identifier

## Defined in

dist/generated/types.d.ts:99322
