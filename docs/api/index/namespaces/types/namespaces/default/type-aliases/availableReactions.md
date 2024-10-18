[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / availableReactions

# Type Alias: availableReactions

> **availableReactions**: `object`

Represents a list of reactions that can be added to a message

## Type declaration

### \_

> **\_**: `"availableReactions"`

### allow\_custom\_emoji

> **allow\_custom\_emoji**: [`Bool`](Bool.md)

True, if any custom emoji reaction can be added by Telegram Premium subscribers

### are\_tags

> **are\_tags**: [`Bool`](Bool.md)

True, if the reactions will be tags and the message can be found by them

### popular\_reactions

> **popular\_reactions**: [`vector`](vector.md)\<[`availableReaction`](availableReaction.md)\>

List of popular reactions

### recent\_reactions

> **recent\_reactions**: [`vector`](vector.md)\<[`availableReaction`](availableReaction.md)\>

List of recently used reactions

### top\_reactions

> **top\_reactions**: [`vector`](vector.md)\<[`availableReaction`](availableReaction.md)\>

List of reactions to be shown at the top

### unavailability\_reason

> **unavailability\_reason**: [`ReactionUnavailabilityReason`](ReactionUnavailabilityReason.md) \| `null`

The reason why the current user can't add reactions to the message, despite some other users can; may be null if none

## Defined in

dist/generated/types.d.ts:37555
