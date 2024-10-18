[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / createVideoChat$DirectInput

# Type Alias: createVideoChat$DirectInput

> **createVideoChat$DirectInput**: `object`

Creates a video chat (a group call bound to a chat). Available only for basic groups, supergroups and channels; requires can_manage_video_chats administrator right

## Type declaration

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Identifier of a chat in which the video chat will be created

### is\_rtmp\_stream?

> `readonly` `optional` **is\_rtmp\_stream**: [`Bool$Input`](Bool$Input.md)

Pass true to create an RTMP stream instead of an ordinary video chat; requires owner privileges

### start\_date?

> `readonly` `optional` **start\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the group call is supposed to be started by an administrator; 0 to start the video chat immediately. The date must be at least 10 seconds and at most 8 days in the future

### title?

> `readonly` `optional` **title**: `string`

Group call title; if empty, chat title will be used

## Defined in

dist/generated/types.d.ts:93298
