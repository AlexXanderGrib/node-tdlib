[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getPaymentForm$DirectInput

# Type Alias: getPaymentForm$DirectInput

> **getPaymentForm$DirectInput**: `object`

Returns an invoice payment form. This method must be called when the user presses inline button of the type inlineKeyboardButtonTypeBuy, or wants to buy access to media in a messagePaidMedia message

## Type declaration

### input\_invoice?

> `readonly` `optional` **input\_invoice**: [`InputInvoice$Input`](InputInvoice$Input.md)

The invoice

### theme?

> `readonly` `optional` **theme**: [`themeParameters$Input`](themeParameters$Input-1.md) \| `null`

Preferred payment form theme; pass null to use the default theme

## Defined in

dist/generated/types.d.ts:96778
