[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreviewOptions

# Type Alias: linkPreviewOptions

> **linkPreviewOptions**: `object`

Options to be used for generation of a link preview

## Type declaration

### \_

> **\_**: `"linkPreviewOptions"`

### force\_large\_media

> **force\_large\_media**: [`Bool`](Bool.md)

True, if shown media preview must be large; ignored in secret chats or if the URL isn't explicitly specified

### force\_small\_media

> **force\_small\_media**: [`Bool`](Bool.md)

True, if shown media preview must be small; ignored in secret chats or if the URL isn't explicitly specified

### is\_disabled

> **is\_disabled**: [`Bool`](Bool.md)

True, if link preview must be disabled

### show\_above\_text

> **show\_above\_text**: [`Bool`](Bool.md)

True, if link preview must be shown above message text; otherwise, the link preview will be shown below the message text; ignored in secret chats

### url

> **url**: `string`

URL to use for link preview. If empty, then the first URL found in the message text will be used

## Defined in

dist/generated/types.d.ts:18585
