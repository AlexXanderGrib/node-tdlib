[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreview

# Type Alias: linkPreview

> **linkPreview**: `object`

Describes a link preview

## Type declaration

### \_

> **\_**: `"linkPreview"`

### description

> **description**: [`formattedText`](formattedText-1.md)

Describes a link preview

### display\_url

> **display\_url**: `string`

URL to display

### has\_large\_media

> **has\_large\_media**: [`Bool`](Bool.md)

True, if size of media in the preview can be changed

### instant\_view\_version

> **instant\_view\_version**: [`int32`](int32-1.md)

Version of instant view (currently, can be 1 or 2) for the web page; 0 if none

### show\_above\_text

> **show\_above\_text**: [`Bool`](Bool.md)

True, if the link preview must be shown above message text; otherwise, the link preview must be shown below the message text

### show\_large\_media

> **show\_large\_media**: [`Bool`](Bool.md)

True, if large media preview must be shown; otherwise, the media preview must be shown small and only the first frame must be shown for videos

### site\_name

> **site\_name**: `string`

Short name of the site (e.g., Google Docs, App Store)

### skip\_confirmation

> **skip\_confirmation**: [`Bool`](Bool.md)

True, if there is no need to show an ordinary open URL confirmation, when opening the URL from the preview, because the URL is shown in the message text in clear

### title

> **title**: `string`

Title of the content

### type

> **type**: [`LinkPreviewType`](LinkPreviewType.md)

Type of the link preview

### url

> **url**: `string`

Original URL of the link

## Defined in

dist/generated/types.d.ts:21749
