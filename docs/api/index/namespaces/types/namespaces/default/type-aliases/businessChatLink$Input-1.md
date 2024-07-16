[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessChatLink$Input

# Type Alias: businessChatLink$Input

> **businessChatLink$Input**: `object`

Version of [businessChatLink](businessChatLink-1.md) for method parameters.

Contains information about a business chat link

## Type declaration

### \_

> `readonly` **\_**: `"businessChatLink"`

### link?

> `readonly` `optional` **link**: `string`

The HTTPS link

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Message draft text that will be added to the input field

### title?

> `readonly` `optional` **title**: `string`

Link title

### view\_count?

> `readonly` `optional` **view\_count**: [`int32`](int32-1.md)

Number of times the link was used

## Defined in

dist/generated/types.d.ts:7107
