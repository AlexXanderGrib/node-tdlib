[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendAuthenticationFirebaseSms$DirectInput

# Type Alias: sendAuthenticationFirebaseSms$DirectInput

> **sendAuthenticationFirebaseSms$DirectInput**: `object`

Sends Firebase Authentication SMS to the phone number of the user. Works only when the current authorization state is authorizationStateWaitCode and the server returned code of the type authenticationCodeTypeFirebaseAndroid or authenticationCodeTypeFirebaseIos

## Type declaration

### token?

> `readonly` `optional` **token**: `string`

Play Integrity API or SafetyNet Attestation API token for the Android application, or secret from push notification for the iOS application

## Defined in

dist/generated/types.d.ts:73648
