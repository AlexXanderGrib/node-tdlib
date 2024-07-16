[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / groupCallParticipantVideoInfo$Input

# Type Alias: groupCallParticipantVideoInfo$Input

> **groupCallParticipantVideoInfo$Input**: `object`

Version of [groupCallParticipantVideoInfo](groupCallParticipantVideoInfo-1.md) for method parameters.

Contains information about a group call participant's video channel

## Type declaration

### \_

> `readonly` **\_**: `"groupCallParticipantVideoInfo"`

### endpoint\_id?

> `readonly` `optional` **endpoint\_id**: `string`

Video channel endpoint identifier

### is\_paused?

> `readonly` `optional` **is\_paused**: [`Bool$Input`](Bool$Input.md)

True, if the video is paused. This flag needs to be ignored, if new video frames are received

### source\_groups?

> `readonly` `optional` **source\_groups**: [`vector$Input`](vector$Input.md)\<[`groupCallVideoSourceGroup$Input`](groupCallVideoSourceGroup$Input-1.md)\>

List of synchronization source groups of the video

## Defined in

dist/generated/types.d.ts:35516
