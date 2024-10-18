[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / getGroupCallInviteLink$DirectInput

# Type Alias: getGroupCallInviteLink$DirectInput

> **getGroupCallInviteLink$DirectInput**: `object`

Returns invite link to a video chat in a public chat

## Type declaration

### can\_self\_unmute?

> `readonly` `optional` **can\_self\_unmute**: [`Bool$Input`](Bool$Input.md)

Pass true if the invite link needs to contain an invite hash, passing which to joinGroupCall would allow the invited user to unmute themselves. Requires groupCall.can_be_managed group call flag

### group\_call\_id?

> `readonly` `optional` **group\_call\_id**: [`int32`](int32.md)

Group call identifier

## Defined in

dist/generated/types.d.ts:93812
