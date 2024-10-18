[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallParticipantVideoInfo

# Type Alias: groupCallParticipantVideoInfo

> **groupCallParticipantVideoInfo**: `object`

Contains information about a group call participant's video channel

## Type declaration

### \_

> **\_**: `"groupCallParticipantVideoInfo"`

### endpoint\_id

> **endpoint\_id**: `string`

Video channel endpoint identifier

### is\_paused

> **is\_paused**: [`Bool`](Bool.md)

True, if the video is paused. This flag needs to be ignored, if new video frames are received

### source\_groups

> **source\_groups**: [`vector`](vector.md)\<[`groupCallVideoSourceGroup`](groupCallVideoSourceGroup.md)\>

List of synchronization source groups of the video

## Defined in

dist/generated/types.d.ts:36863
