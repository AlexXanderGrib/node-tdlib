[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / validateOrderInfo$DirectInput

# Type Alias: validateOrderInfo$DirectInput

> **validateOrderInfo$DirectInput**: `object`

Validates the order information provided by a user and returns the available shipping options for a flexible invoice

## Type declaration

### allow\_save?

> `readonly` `optional` **allow\_save**: [`Bool$Input`](Bool$Input.md)

Pass true to save the order information

### input\_invoice?

> `readonly` `optional` **input\_invoice**: [`InputInvoice$Input`](InputInvoice$Input.md)

The invoice

### order\_info?

> `readonly` `optional` **order\_info**: [`orderInfo$Input`](orderInfo$Input-1.md) \| `null`

The order information, provided by the user; pass null if empty

## Defined in

dist/generated/types.d.ts:96821
