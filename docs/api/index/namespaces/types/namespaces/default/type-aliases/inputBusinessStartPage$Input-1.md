[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputBusinessStartPage$Input

# Type Alias: inputBusinessStartPage$Input

> **inputBusinessStartPage$Input**: `object`

Version of [inputBusinessStartPage](inputBusinessStartPage-1.md) for method parameters.

Describes settings for a business account start page to set

## Type declaration

### \_

> `readonly` **\_**: `"inputBusinessStartPage"`

### message?

> `readonly` `optional` **message**: `string`

Message text of the start page; 0-getOption("business_start_page_message_length_max") characters

### sticker?

> `readonly` `optional` **sticker**: [`InputFile$Input`](InputFile$Input.md) \| `null`

Greeting sticker of the start page; pass null if none. The sticker must belong to a sticker set and must not be a custom emoji

### title?

> `readonly` `optional` **title**: `string`

Title text of the start page; 0-getOption("business_start_page_title_length_max") characters

## Defined in

dist/generated/types.d.ts:6892
