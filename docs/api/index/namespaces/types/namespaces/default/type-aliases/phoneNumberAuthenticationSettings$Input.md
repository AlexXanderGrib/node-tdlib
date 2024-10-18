[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / phoneNumberAuthenticationSettings$Input

# Type Alias: phoneNumberAuthenticationSettings$Input

> **phoneNumberAuthenticationSettings$Input**: `object`

Version of [phoneNumberAuthenticationSettings](phoneNumberAuthenticationSettings.md) for method parameters.

Contains settings for the authentication of the user's phone number

## Type declaration

### \_

> `readonly` **\_**: `"phoneNumberAuthenticationSettings"`

### allow\_flash\_call?

> `readonly` `optional` **allow\_flash\_call**: [`Bool$Input`](Bool$Input.md)

Pass true if the authentication code may be sent via a flash call to the specified phone number

### allow\_missed\_call?

> `readonly` `optional` **allow\_missed\_call**: [`Bool$Input`](Bool$Input.md)

Pass true if the authentication code may be sent via a missed call to the specified phone number

### allow\_sms\_retriever\_api?

> `readonly` `optional` **allow\_sms\_retriever\_api**: [`Bool$Input`](Bool$Input.md)

For official applications only. True, if the application can use Android SMS Retriever API (requires Google Play Services >= 10.2) to automatically receive the authentication code from the SMS. See https://developers.google.com/identity/sms-retriever/ for more details

### authentication\_tokens?

> `readonly` `optional` **authentication\_tokens**: [`vector$Input`](vector$Input.md)\<`string`\>

List of up to 20 authentication tokens, recently received in updateOption("authentication_token") in previously logged out sessions

### firebase\_authentication\_settings?

> `readonly` `optional` **firebase\_authentication\_settings**: [`FirebaseAuthenticationSettings$Input`](FirebaseAuthenticationSettings$Input.md) \| `null`

For official Android and iOS applications only; pass null otherwise. Settings for Firebase Authentication

### has\_unknown\_phone\_number?

> `readonly` `optional` **has\_unknown\_phone\_number**: [`Bool$Input`](Bool$Input.md)

Pass true if there is a SIM card in the current device, but it is not possible to check whether phone number matches

### is\_current\_phone\_number?

> `readonly` `optional` **is\_current\_phone\_number**: [`Bool$Input`](Bool$Input.md)

Pass true if the authenticated phone number is used on the current device

## Defined in

dist/generated/types.d.ts:37382
