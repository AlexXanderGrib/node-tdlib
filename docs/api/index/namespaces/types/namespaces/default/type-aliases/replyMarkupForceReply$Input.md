[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / replyMarkupForceReply$Input

# Type Alias: replyMarkupForceReply$Input

> **replyMarkupForceReply$Input**: `object`

Version of [replyMarkupForceReply](replyMarkupForceReply.md) for method parameters.

Instructs application to force a reply to this message

## Type declaration

### \_

> `readonly` **\_**: `"replyMarkupForceReply"`

### input\_field\_placeholder?

> `readonly` `optional` **input\_field\_placeholder**: `string`

If non-empty, the placeholder to be shown in the input field when the reply is active; 0-64 characters

### is\_personal?

> `readonly` `optional` **is\_personal**: [`Bool$Input`](Bool$Input.md)

True, if a forced reply must automatically be shown to the current user. For outgoing messages, specify true to show the forced reply only for the mentioned users and for the target user of a reply

## Defined in

dist/generated/types.d.ts:18381
