[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / requestQrCodeAuthentication

# Type Alias: requestQrCodeAuthentication()

> **requestQrCodeAuthentication**: (`parameters`) => [`Ok`](Ok-1.md)

Requests QR code authentication by scanning a QR code on another logged in device. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

## Parameters

• **parameters**: [`requestQrCodeAuthentication$Input`](requestQrCodeAuthentication$Input.md)

[requestQrCodeAuthentication$Input](requestQrCodeAuthentication$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:75429
