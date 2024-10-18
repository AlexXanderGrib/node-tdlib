[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / requestQrCodeAuthentication$Input

# Type Alias: requestQrCodeAuthentication$Input

> **requestQrCodeAuthentication$Input**: `object`

Requests QR code authentication by scanning a QR code on another logged in device. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

## Type declaration

### \_

> `readonly` **\_**: `"requestQrCodeAuthentication"`

### other\_user\_ids?

> `readonly` `optional` **other\_user\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

List of user identifiers of other users currently using the application

## Defined in

dist/generated/types.d.ts:75401
