[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / joinGroupCall$DirectInput

# Type Alias: joinGroupCall$DirectInput

> **joinGroupCall$DirectInput**: `object`

Joins an active group call. Returns join response payload for tgcalls

## Type declaration

### audio\_source\_id?

> `readonly` `optional` **audio\_source\_id**: [`int32`](int32.md)

Caller audio channel synchronization source identifier; received from tgcalls

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Group call identifier

### invite\_hash?

> `readonly` `optional` **invite\_hash**: `string`

If non-empty, invite hash to be used to join the group call without being muted by administrators

### is\_muted?

> `readonly` `optional` **is\_muted**: [`Bool$Input`](Bool$Input.md)

Pass true to join the call with muted microphone

### is\_my\_video\_enabled?

> `readonly` `optional` **is\_my\_video\_enabled**: [`Bool$Input`](Bool$Input.md)

Pass true if the user's video is enabled

### participant\_id?

> `readonly` `optional` **participant\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of a group call participant, which will be used to join the call; pass null to join as self; video chats only

### payload?

> `readonly` `optional` **payload**: `string`

Group call join payload; received from tgcalls

## Defined in

dist/generated/types.d.ts:93521
