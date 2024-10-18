[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setBusinessMessageIsPinned$Input

# Type Alias: setBusinessMessageIsPinned$Input

> **setBusinessMessageIsPinned$Input**: `object`

Pins or unpins a message sent on behalf of a business account; for bots only

## Type declaration

### \_

> `readonly` **\_**: `"setBusinessMessageIsPinned"`

### business\_connection\_id?

> `readonly` `optional` **business\_connection\_id**: `string`

Unique identifier of business connection on behalf of which the message was sent

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The chat the message belongs to

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

Pass true to pin the message, pass false to unpin it

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message

## Defined in

dist/generated/types.d.ts:82113
