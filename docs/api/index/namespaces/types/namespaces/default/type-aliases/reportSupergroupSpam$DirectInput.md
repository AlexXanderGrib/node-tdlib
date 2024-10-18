[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / reportSupergroupSpam$DirectInput

# Type Alias: reportSupergroupSpam$DirectInput

> **reportSupergroupSpam$DirectInput**: `object`

Reports messages in a supergroup as spam; requires administrator rights in the supergroup

## Type declaration

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

Identifiers of messages to report. Use messageProperties.can_be_reported to check whether the message can be reported

### supergroup\_id?

> `readonly` `optional` **supergroup\_id**: [`int53`](int53.md)

Supergroup identifier

## Defined in

dist/generated/types.d.ts:99300
