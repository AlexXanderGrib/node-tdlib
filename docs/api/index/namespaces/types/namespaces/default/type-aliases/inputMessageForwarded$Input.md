[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputMessageForwarded$Input

# Type Alias: inputMessageForwarded$Input

> **inputMessageForwarded$Input**: `object`

Version of [inputMessageForwarded](inputMessageForwarded.md) for method parameters.

A forwarded message

## Type declaration

### \_

> `readonly` **\_**: `"inputMessageForwarded"`

### copy\_options?

> `readonly` `optional` **copy\_options**: [`messageCopyOptions$Input`](messageCopyOptions$Input-1.md) \| `null`

Options to be used to copy content of the message without reference to the original sender; pass null to forward the message as usual

### from\_chat\_id?

> `readonly` `optional` **from\_chat\_id**: [`int53`](int53-1.md)

Identifier for the chat this forwarded message came from

### in\_game\_share?

> `readonly` `optional` **in\_game\_share**: [`Bool$Input`](Bool$Input.md)

True, if a game message is being shared from a launched game; applies only to game messages

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message to forward. A message can be forwarded only if message.can_be_forwarded

## Defined in

dist/generated/types.d.ts:30439
