[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputBusinessStartPage

# Type Alias: inputBusinessStartPage

> **inputBusinessStartPage**: `object`

Describes settings for a business account start page to set

## Type declaration

### \_

> **\_**: `"inputBusinessStartPage"`

### message

> **message**: `string`

Message text of the start page; 0-getOption("business_start_page_message_length_max") characters

### sticker

> **sticker**: [`InputFile`](InputFile.md) \| `null`

Greeting sticker of the start page; pass null if none. The sticker must belong to a sticker set and must not be a custom emoji

### title

> **title**: `string`

Title text of the start page; 0-getOption("business_start_page_title_length_max") characters

## Defined in

dist/generated/types.d.ts:6935
