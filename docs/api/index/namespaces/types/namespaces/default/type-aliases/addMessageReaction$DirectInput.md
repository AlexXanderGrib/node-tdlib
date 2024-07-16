[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addMessageReaction$DirectInput

# Type Alias: addMessageReaction$DirectInput

> **addMessageReaction$DirectInput**: `object`

Adds a reaction or a tag to a message. Use getMessageAvailableReactions to receive the list of available reactions for the message

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat to which the message belongs

### is\_big?

> `readonly` `optional` **is\_big**: [`Bool$Input`](Bool$Input.md)

Pass true if the reaction is added with a big animation

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53-1.md)

Identifier of the message

### reaction\_type?

> `readonly` `optional` **reaction\_type**: [`ReactionType$Input`](ReactionType$Input.md)

Type of the reaction to add

### update\_recent\_reactions?

> `readonly` `optional` **update\_recent\_reactions**: [`Bool$Input`](Bool$Input.md)

Pass true if the reaction needs to be added to recent reactions; tags are never added to the list of recent reactions

## Defined in

dist/generated/types.d.ts:81293
