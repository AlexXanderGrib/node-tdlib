[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewOptions$Input

# Type Alias: linkPreviewOptions$Input

> **linkPreviewOptions$Input**: `object`

Version of [linkPreviewOptions](linkPreviewOptions.md) for method parameters.

Options to be used for generation of a link preview

## Type declaration

### \_

> `readonly` **\_**: `"linkPreviewOptions"`

### force\_large\_media?

> `readonly` `optional` **force\_large\_media**: [`Bool$Input`](Bool$Input.md)

True, if shown media preview must be large; ignored in secret chats or if the URL isn't explicitly specified

### force\_small\_media?

> `readonly` `optional` **force\_small\_media**: [`Bool$Input`](Bool$Input.md)

True, if shown media preview must be small; ignored in secret chats or if the URL isn't explicitly specified

### is\_disabled?

> `readonly` `optional` **is\_disabled**: [`Bool$Input`](Bool$Input.md)

True, if link preview must be disabled

### show\_above\_text?

> `readonly` `optional` **show\_above\_text**: [`Bool$Input`](Bool$Input.md)

True, if link preview must be shown above message text; otherwise, the link preview will be shown below the message text; ignored in secret chats

### url?

> `readonly` `optional` **url**: `string`

URL to use for link preview. If empty, then the first URL found in the message text will be used

## Defined in

dist/generated/types.d.ts:19244
