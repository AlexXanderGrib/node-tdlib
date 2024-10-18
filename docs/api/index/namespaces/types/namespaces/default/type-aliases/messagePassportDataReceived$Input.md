[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messagePassportDataReceived$Input

# Type Alias: messagePassportDataReceived$Input

> **messagePassportDataReceived$Input**: `object`

Version of [messagePassportDataReceived](messagePassportDataReceived.md) for method parameters.

Telegram Passport data has been received; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"messagePassportDataReceived"`

### credentials?

> `readonly` `optional` **credentials**: [`encryptedCredentials$Input`](encryptedCredentials$Input.md)

Encrypted data credentials

### elements?

> `readonly` `optional` **elements**: [`vector$Input`](vector$Input.md)\<[`encryptedPassportElement$Input`](encryptedPassportElement$Input.md)\>

List of received Telegram Passport elements

## Defined in

dist/generated/types.d.ts:29277
