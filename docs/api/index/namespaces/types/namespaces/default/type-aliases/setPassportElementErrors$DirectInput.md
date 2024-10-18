[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setPassportElementErrors$DirectInput

# Type Alias: setPassportElementErrors$DirectInput

> **setPassportElementErrors$DirectInput**: `object`

Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not be able to resend the elements, until the errors are fixed

## Type declaration

### errors?

> `readonly` `optional` **errors**: [`vector$Input`](vector$Input.md)\<[`inputPassportElementError$Input`](inputPassportElementError$Input.md)\>

The errors

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53.md)

User identifier

## Defined in

dist/generated/types.d.ts:102152
