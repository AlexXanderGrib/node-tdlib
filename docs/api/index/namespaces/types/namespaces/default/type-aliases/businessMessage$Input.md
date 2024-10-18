[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessMessage$Input

# Type Alias: businessMessage$Input

> **businessMessage$Input**: `object`

Version of [businessMessage](businessMessage.md) for method parameters.

Describes a message from a business account as received by a bot

## Type declaration

### \_

> `readonly` **\_**: `"businessMessage"`

### message?

> `readonly` `optional` **message**: [`message$Input`](message$Input.md)

The message

### reply\_to\_message?

> `readonly` `optional` **reply\_to\_message**: [`message$Input`](message$Input.md) \| `null`

Message that is replied by the message in the same chat; may be null if none

## Defined in

dist/generated/types.d.ts:14763
