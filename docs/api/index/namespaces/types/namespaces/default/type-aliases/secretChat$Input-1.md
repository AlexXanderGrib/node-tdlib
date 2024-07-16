[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / secretChat$Input

# Type Alias: secretChat$Input

> **secretChat$Input**: `object`

Version of [secretChat](secretChat-1.md) for method parameters.

Represents a secret chat

## Type declaration

### \_

> `readonly` **\_**: `"secretChat"`

### id?

> `readonly` `optional` **id**: [`int32`](int32-1.md)

Secret chat identifier

### is\_outbound?

> `readonly` `optional` **is\_outbound**: [`Bool$Input`](Bool$Input.md)

True, if the chat was created by the current user; false otherwise

### key\_hash?

> `readonly` `optional` **key\_hash**: [`bytes$Input`](bytes$Input-1.md)

Hash of the currently used key for comparison with the hash of the chat partner's key. This is a string of 36 little-endian bytes, which must be split into groups of 2 bits, each denoting a pixel of one of 4 colors FFFFFF, D5E6F3, 2D5775, and 2F99C9.

- The pixels must be used to make a 12x12 square image filled from left to right, top to bottom. Alternatively, the first 32 bytes of the hash can be converted to the hexadecimal format and printed as 32 2-digit hex numbers

### layer?

> `readonly` `optional` **layer**: [`int32`](int32-1.md)

Secret chat layer; determines features supported by the chat partner's application. Nested text entities and underline and strikethrough entities are supported if the layer >= 101,

- files bigger than 2000MB are supported if the layer >= 143, spoiler and custom emoji text entities are supported if the layer >= 144

### state?

> `readonly` `optional` **state**: [`SecretChatState$Input`](SecretChatState$Input.md)

State of the secret chat

### user\_id?

> `readonly` `optional` **user\_id**: [`int53`](int53-1.md)

Identifier of the chat partner

## Defined in

dist/generated/types.d.ts:11923
