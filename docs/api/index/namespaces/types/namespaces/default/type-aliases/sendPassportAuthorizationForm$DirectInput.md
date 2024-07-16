[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendPassportAuthorizationForm$DirectInput

# Type Alias: sendPassportAuthorizationForm$DirectInput

> **sendPassportAuthorizationForm$DirectInput**: `object`

Sends a Telegram Passport authorization form, effectively sharing data with the service. This method must be called after getPassportAuthorizationFormAvailableElements if some previously available elements are going to be reused

## Type declaration

### authorization\_form\_id?

> `readonly` `optional` **authorization\_form\_id**: [`int32`](int32-1.md)

Authorization form identifier

### types?

> `readonly` `optional` **types**: [`vector$Input`](vector$Input.md)\<[`PassportElementType$Input`](PassportElementType$Input.md)\>

Types of Telegram Passport elements chosen by user to complete the authorization form

## Defined in

dist/generated/types.d.ts:99608
