[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / encryptedCredentials$Input

# Type Alias: encryptedCredentials$Input

> **encryptedCredentials$Input**: `object`

Version of [encryptedCredentials](encryptedCredentials-1.md) for method parameters.

Contains encrypted Telegram Passport data credentials

## Type declaration

### \_

> `readonly` **\_**: `"encryptedCredentials"`

### data?

> `readonly` `optional` **data**: [`bytes$Input`](bytes$Input-1.md)

The encrypted credentials

### hash?

> `readonly` `optional` **hash**: [`bytes$Input`](bytes$Input-1.md)

The decrypted data hash

### secret?

> `readonly` `optional` **secret**: [`bytes$Input`](bytes$Input-1.md)

Secret for data decryption, encrypted with the service's public key

## Defined in

dist/generated/types.d.ts:25368
