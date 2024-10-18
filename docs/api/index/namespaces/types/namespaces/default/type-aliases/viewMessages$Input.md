[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / viewMessages$Input

# Type Alias: viewMessages$Input

> **viewMessages$Input**: `object`

Informs TDLib that messages are being viewed by the user. Sponsored messages must be marked as viewed only when the entire text of the message is shown on the screen (excluding the button).

- Many useful activities depend on whether the messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view counter, removing deleted messages in supergroups and channels)

## Type declaration

### \_

> `readonly` **\_**: `"viewMessages"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### force\_read?

> `readonly` `optional` **force\_read**: [`Bool$Input`](Bool$Input.md)

Pass true to mark as read the specified messages even the chat is closed

### message\_ids?

> `readonly` `optional` **message\_ids**: [`vector$Input`](vector$Input.md)\<[`int53`](int53.md)\>

The identifiers of the messages being viewed

### source?

> `readonly` `optional` **source**: [`MessageSource$Input`](MessageSource$Input.md) \| `null`

Source of the message view; pass null to guess the source based on chat open state

## Defined in

dist/generated/types.d.ts:85974
