[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getMessageEmbeddingCode$DirectInput

# Type Alias: getMessageEmbeddingCode$DirectInput

> **getMessageEmbeddingCode$DirectInput**: `object`

Returns an HTML code for embedding the message. Available only for messages in supergroups and channels with a username

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the message belongs

### for\_album?

> `readonly` `optional` **for\_album**: [`Bool$Input`](Bool$Input.md)

Pass true to return an HTML code for embedding of the whole media album

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

## Defined in

dist/generated/types.d.ts:77747
