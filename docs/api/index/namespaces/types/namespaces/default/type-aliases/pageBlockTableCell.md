[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockTableCell

# Type Alias: pageBlockTableCell

> **pageBlockTableCell**: `object`

Represents a cell of a table

## Type declaration

### \_

> **\_**: `"pageBlockTableCell"`

### align

> **align**: [`PageBlockHorizontalAlignment`](PageBlockHorizontalAlignment.md)

Horizontal cell content alignment

### colspan

> **colspan**: [`int32`](int32.md)

The number of columns the cell spans

### is\_header

> **is\_header**: [`Bool`](Bool.md)

True, if it is a header cell

### rowspan

> **rowspan**: [`int32`](int32.md)

The number of rows the cell spans

### text

> **text**: [`RichText`](RichText.md) \| `null`

Cell text; may be null. If the text is null, then the cell must be invisible

### valign

> **valign**: [`PageBlockVerticalAlignment`](PageBlockVerticalAlignment.md)

Vertical cell content alignment

## Defined in

dist/generated/types.d.ts:20117
