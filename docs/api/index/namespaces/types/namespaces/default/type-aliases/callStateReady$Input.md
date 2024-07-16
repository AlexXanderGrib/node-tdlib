[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / callStateReady$Input

# Type Alias: callStateReady$Input

> **callStateReady$Input**: `object`

Version of [callStateReady](callStateReady.md) for method parameters.

The call is ready to use

## Type declaration

### \_

> `readonly` **\_**: `"callStateReady"`

### allow\_p2p?

> `readonly` `optional` **allow\_p2p**: [`Bool$Input`](Bool$Input.md)

True, if peer-to-peer connection is allowed by users privacy settings

### config?

> `readonly` `optional` **config**: `string`

A JSON-encoded call config

### custom\_parameters?

> `readonly` `optional` **custom\_parameters**: `string`

Custom JSON-encoded call parameters to be passed to tgcalls

### emojis?

> `readonly` `optional` **emojis**: [`vector$Input`](vector$Input.md)\<`string`\>

Encryption key fingerprint represented as 4 emoji

### encryption\_key?

> `readonly` `optional` **encryption\_key**: [`bytes$Input`](bytes$Input-1.md)

Call encryption key

### protocol?

> `readonly` `optional` **protocol**: [`callProtocol$Input`](callProtocol$Input-1.md)

Call protocols supported by the other call participant

### servers?

> `readonly` `optional` **servers**: [`vector$Input`](vector$Input.md)\<[`callServer$Input`](callServer$Input-1.md)\>

List of available call servers

## Defined in

dist/generated/types.d.ts:34924
