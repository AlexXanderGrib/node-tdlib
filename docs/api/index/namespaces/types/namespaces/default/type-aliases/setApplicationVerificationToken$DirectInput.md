[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setApplicationVerificationToken$DirectInput

# Type Alias: setApplicationVerificationToken$DirectInput

> **setApplicationVerificationToken$DirectInput**: `object`

Application verification has been completed. Can be called before authorization

## Type declaration

### token?

> `readonly` `optional` **token**: `string`

Play Integrity API token for the Android application, or secret from push notification for the iOS application;

- pass an empty string to abort verification and receive error VERIFICATION_FAILED for the request

### verification\_id?

> `readonly` `optional` **verification\_id**: [`int53`](int53-1.md)

Unique identifier for the verification process as received from updateApplicationVerificationRequired

## Defined in

dist/generated/types.d.ts:89539
