[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateApplicationVerificationRequired$Input

# Type Alias: updateApplicationVerificationRequired$Input

> **updateApplicationVerificationRequired$Input**: `object`

Version of [updateApplicationVerificationRequired](updateApplicationVerificationRequired.md) for method parameters.

A request can't be completed unless application verification is performed; for official mobile applications only.

- The method setApplicationVerificationToken must be called once the verification is completed or failed

## Type declaration

### \_

> `readonly` **\_**: `"updateApplicationVerificationRequired"`

### cloud\_project\_number?

> `readonly` `optional` **cloud\_project\_number**: [`int64$Input`](int64$Input-1.md)

Cloud project number to pass to the Play Integrity API on Android

### nonce?

> `readonly` `optional` **nonce**: `string`

Unique base64url-encoded nonce for the classic Play Integrity verification (https://developer.android.com/google/play/integrity/classic) for Android,

- or a unique string to compare with verify_nonce field from a push notification for iOS

### verification\_id?

> `readonly` `optional` **verification\_id**: [`int53`](int53-1.md)

Unique identifier for the verification process

## Defined in

dist/generated/types.d.ts:55548
