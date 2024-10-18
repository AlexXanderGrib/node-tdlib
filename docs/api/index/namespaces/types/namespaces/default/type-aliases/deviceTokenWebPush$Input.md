[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / deviceTokenWebPush$Input

# Type Alias: deviceTokenWebPush$Input

> **deviceTokenWebPush$Input**: `object`

Version of [deviceTokenWebPush](deviceTokenWebPush.md) for method parameters.

A token for web Push API

## Type declaration

### \_

> `readonly` **\_**: `"deviceTokenWebPush"`

### auth\_base64url?

> `readonly` `optional` **auth\_base64url**: `string`

Base64url-encoded authentication secret

### endpoint?

> `readonly` `optional` **endpoint**: `string`

Absolute URL exposed by the push service where the application server can send push messages; may be empty to deregister a device

### p256dh\_base64url?

> `readonly` `optional` **p256dh\_base64url**: `string`

Base64url-encoded P-256 elliptic curve Diffie-Hellman public key

## Defined in

dist/generated/types.d.ts:44606
