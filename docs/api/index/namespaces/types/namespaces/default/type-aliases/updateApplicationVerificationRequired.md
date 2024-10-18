[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateApplicationVerificationRequired

# Type Alias: updateApplicationVerificationRequired

> **updateApplicationVerificationRequired**: `object`

A request can't be completed unless application verification is performed; for official mobile applications only.

- The method setApplicationVerificationToken must be called once the verification is completed or failed

## Type declaration

### \_

> **\_**: `"updateApplicationVerificationRequired"`

### cloud\_project\_number

> **cloud\_project\_number**: [`int64`](int64.md)

Cloud project number to pass to the Play Integrity API on Android

### nonce

> **nonce**: `string`

Unique base64url-encoded nonce for the classic Play Integrity verification (https://developer.android.com/google/play/integrity/classic) for Android,

- or a unique string to compare with verify_nonce field from a push notification for iOS

### verification\_id

> **verification\_id**: [`int53`](int53.md)

Unique identifier for the verification process

## Defined in

dist/generated/types.d.ts:57137
