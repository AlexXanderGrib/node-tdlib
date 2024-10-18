[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pageBlockTableCell$Input

# Type Alias: pageBlockTableCell$Input

> **pageBlockTableCell$Input**: `object`

Version of [pageBlockTableCell](pageBlockTableCell.md) for method parameters.

Represents a cell of a table

## Type declaration

### \_

> `readonly` **\_**: `"pageBlockTableCell"`

### align?

> `readonly` `optional` **align**: [`PageBlockHorizontalAlignment$Input`](PageBlockHorizontalAlignment$Input.md)

Horizontal cell content alignment

### colspan?

> `readonly` `optional` **colspan**: [`int32`](int32.md)

The number of columns the cell spans

### is\_header?

> `readonly` `optional` **is\_header**: [`Bool$Input`](Bool$Input.md)

True, if it is a header cell

### rowspan?

> `readonly` `optional` **rowspan**: [`int32`](int32.md)

The number of rows the cell spans

### text?

> `readonly` `optional` **text**: [`RichText$Input`](RichText$Input.md) \| `null`

Cell text; may be null. If the text is null, then the cell must be invisible

### valign?

> `readonly` `optional` **valign**: [`PageBlockVerticalAlignment$Input`](PageBlockVerticalAlignment$Input.md)

Vertical cell content alignment

## Defined in

dist/generated/types.d.ts:20155
