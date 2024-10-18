[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / firebaseDeviceVerificationParametersPlayIntegrity$Input

# Type Alias: firebaseDeviceVerificationParametersPlayIntegrity$Input

> **firebaseDeviceVerificationParametersPlayIntegrity$Input**: `object`

Version of [firebaseDeviceVerificationParametersPlayIntegrity](firebaseDeviceVerificationParametersPlayIntegrity.md) for method parameters.

Device verification must be performed with the classic Play Integrity verification (https://developer.android.com/google/play/integrity/classic)

## Type declaration

### \_

> `readonly` **\_**: `"firebaseDeviceVerificationParametersPlayIntegrity"`

### cloud\_project\_number?

> `readonly` `optional` **cloud\_project\_number**: [`int64$Input`](int64$Input.md)

Cloud project number to pass to the Play Integrity API

### nonce?

> `readonly` `optional` **nonce**: `string`

Base64url-encoded nonce to pass to the Play Integrity API

## Defined in

dist/generated/types.d.ts:3535
