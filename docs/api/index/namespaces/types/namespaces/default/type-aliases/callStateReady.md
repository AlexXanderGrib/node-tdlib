[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / callStateReady

# Type Alias: callStateReady

> **callStateReady**: `object`

The call is ready to use

## Type declaration

### \_

> **\_**: `"callStateReady"`

### allow\_p2p

> **allow\_p2p**: [`Bool`](Bool.md)

True, if peer-to-peer connection is allowed by users privacy settings

### config

> **config**: `string`

A JSON-encoded call config

### custom\_parameters

> **custom\_parameters**: `string`

Custom JSON-encoded call parameters to be passed to tgcalls

### emojis

> **emojis**: [`vector`](vector.md)\<`string`\>

Encryption key fingerprint represented as 4 emoji

### encryption\_key

> **encryption\_key**: [`bytes`](bytes.md)

Call encryption key

### protocol

> **protocol**: [`callProtocol`](callProtocol.md)

Call protocols supported by the other call participant

### servers

> **servers**: [`vector`](vector.md)\<[`callServer`](callServer.md)\>

List of available call servers

## Defined in

dist/generated/types.d.ts:36251
