[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / availableReactions$Input

# Type Alias: availableReactions$Input

> **availableReactions$Input**: `object`

Version of [availableReactions](availableReactions.md) for method parameters.

Represents a list of reactions that can be added to a message

## Type declaration

### \_

> `readonly` **\_**: `"availableReactions"`

### allow\_custom\_emoji?

> `readonly` `optional` **allow\_custom\_emoji**: [`Bool$Input`](Bool$Input.md)

True, if any custom emoji reaction can be added by Telegram Premium subscribers

### are\_tags?

> `readonly` `optional` **are\_tags**: [`Bool$Input`](Bool$Input.md)

True, if the reactions will be tags and the message can be found by them

### popular\_reactions?

> `readonly` `optional` **popular\_reactions**: [`vector$Input`](vector$Input.md)\<[`availableReaction$Input`](availableReaction$Input.md)\>

List of popular reactions

### recent\_reactions?

> `readonly` `optional` **recent\_reactions**: [`vector$Input`](vector$Input.md)\<[`availableReaction$Input`](availableReaction$Input.md)\>

List of recently used reactions

### top\_reactions?

> `readonly` `optional` **top\_reactions**: [`vector$Input`](vector$Input.md)\<[`availableReaction$Input`](availableReaction$Input.md)\>

List of reactions to be shown at the top

### unavailability\_reason?

> `readonly` `optional` **unavailability\_reason**: [`ReactionUnavailabilityReason$Input`](ReactionUnavailabilityReason$Input.md) \| `null`

The reason why the current user can't add reactions to the message, despite some other users can; may be null if none

## Defined in

dist/generated/types.d.ts:37593
