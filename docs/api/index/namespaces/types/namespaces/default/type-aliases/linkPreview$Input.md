[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / linkPreview$Input

# Type Alias: linkPreview$Input

> **linkPreview$Input**: `object`

Version of [linkPreview](linkPreview.md) for method parameters.

Describes a link preview

## Type declaration

### \_

> `readonly` **\_**: `"linkPreview"`

### description?

> `readonly` `optional` **description**: [`formattedText$Input`](formattedText$Input.md)

Describes a link preview

### display\_url?

> `readonly` `optional` **display\_url**: `string`

URL to display

### has\_large\_media?

> `readonly` `optional` **has\_large\_media**: [`Bool$Input`](Bool$Input.md)

True, if size of media in the preview can be changed

### instant\_view\_version?

> `readonly` `optional` **instant\_view\_version**: [`int32`](int32.md)

Version of instant view (currently, can be 1 or 2) for the web page; 0 if none

### show\_above\_text?

> `readonly` `optional` **show\_above\_text**: [`Bool$Input`](Bool$Input.md)

True, if the link preview must be shown above message text; otherwise, the link preview must be shown below the message text

### show\_large\_media?

> `readonly` `optional` **show\_large\_media**: [`Bool$Input`](Bool$Input.md)

True, if large media preview must be shown; otherwise, the media preview must be shown small and only the first frame must be shown for videos

### show\_media\_above\_description?

> `readonly` `optional` **show\_media\_above\_description**: [`Bool$Input`](Bool$Input.md)

True, if media must be shown above link preview description; otherwise, the media must be shown below the description

### site\_name?

> `readonly` `optional` **site\_name**: `string`

Short name of the site (e.g., Google Docs, App Store)

### skip\_confirmation?

> `readonly` `optional` **skip\_confirmation**: [`Bool$Input`](Bool$Input.md)

True, if there is no need to show an ordinary open URL confirmation, when opening the URL from the preview, because the URL is shown in the message text in clear

### title?

> `readonly` `optional` **title**: `string`

Title of the content

### type?

> `readonly` `optional` **type**: [`LinkPreviewType$Input`](LinkPreviewType$Input.md)

Type of the link preview

### url?

> `readonly` `optional` **url**: `string`

Original URL of the link

## Defined in

dist/generated/types.d.ts:22567
