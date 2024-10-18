[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / message

# Type Alias: message

> **message**: `object`

Describes a message

## Type declaration

### \_

> **\_**: `"message"`

### author\_signature

> **author\_signature**: `string`

For channel posts and anonymous group messages, optional author signature

### auto\_delete\_in

> **auto\_delete\_in**: [`double`](double.md)

Time left before the message will be automatically deleted by message_auto_delete_time setting of the chat, in seconds; 0 if never

### can\_be\_saved

> **can\_be\_saved**: [`Bool`](Bool.md)

True, if content of the message can be saved locally or copied

### chat\_id

> **chat\_id**: [`int53`](int53.md)

Chat identifier

### contains\_unread\_mention

> **contains\_unread\_mention**: [`Bool`](Bool.md)

True, if the message contains an unread mention for the current user

### content

> **content**: [`MessageContent`](MessageContent.md)

Content of the message

### date

> **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message was sent

### edit\_date

> **edit\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message was last edited

### effect\_id

> **effect\_id**: [`int64`](int64.md)

Unique identifier of the effect added to the message; 0 if none

### fact\_check

> **fact\_check**: [`factCheck`](factCheck.md) \| `null`

Information about fact-check added to the message; may be null if none

### forward\_info

> **forward\_info**: [`messageForwardInfo`](messageForwardInfo.md) \| `null`

Information about the initial message sender; may be null if none or unknown

### has\_sensitive\_content

> **has\_sensitive\_content**: [`Bool`](Bool.md)

True, if media content of the message must be hidden with 18+ spoiler

### has\_timestamped\_media

> **has\_timestamped\_media**: [`Bool`](Bool.md)

True, if media timestamp entities refers to a media in this message as opposed to a media in the replied message

### id

> **id**: [`int53`](int53.md)

Message identifier; unique for the chat to which the message belongs

### import\_info

> **import\_info**: [`messageImportInfo`](messageImportInfo.md) \| `null`

Information about the initial message for messages created with importMessages; may be null if the message isn't imported

### interaction\_info

> **interaction\_info**: [`messageInteractionInfo`](messageInteractionInfo.md) \| `null`

Information about interactions with the message; may be null if none

### is\_channel\_post

> **is\_channel\_post**: [`Bool`](Bool.md)

True, if the message is a channel post. All messages to channels are channel posts, all other messages are not channel posts

### is\_from\_offline

> **is\_from\_offline**: [`Bool`](Bool.md)

True, if the message was sent because of a scheduled action by the message sender, for example, as away, or greeting service message

### is\_outgoing

> **is\_outgoing**: [`Bool`](Bool.md)

True, if the message is outgoing

### is\_pinned

> **is\_pinned**: [`Bool`](Bool.md)

True, if the message is pinned

### is\_topic\_message

> **is\_topic\_message**: [`Bool`](Bool.md)

True, if the message is a forum topic message

### media\_album\_id

> **media\_album\_id**: [`int64`](int64.md)

Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums

### message\_thread\_id

> **message\_thread\_id**: [`int53`](int53.md)

If non-zero, the identifier of the message thread the message belongs to; unique within the chat to which the message belongs

### reply\_markup

> **reply\_markup**: [`ReplyMarkup`](ReplyMarkup.md) \| `null`

Reply markup for the message; may be null if none

### reply\_to

> **reply\_to**: [`MessageReplyTo`](MessageReplyTo.md) \| `null`

Information about the message or the story this message is replying to; may be null if none

### restriction\_reason

> **restriction\_reason**: `string`

If non-empty, contains a human-readable description of the reason why access to this message must be restricted

### saved\_messages\_topic\_id

> **saved\_messages\_topic\_id**: [`int53`](int53.md)

Identifier of the Saved Messages topic for the message; 0 for messages not from Saved Messages

### scheduling\_state

> **scheduling\_state**: [`MessageSchedulingState`](MessageSchedulingState.md) \| `null`

The scheduling state of the message; may be null if the message isn't scheduled

### self\_destruct\_in

> **self\_destruct\_in**: [`double`](double.md)

Time left before the message self-destruct timer expires, in seconds; 0 if self-destruction isn't scheduled yet

### self\_destruct\_type

> **self\_destruct\_type**: [`MessageSelfDestructType`](MessageSelfDestructType.md) \| `null`

The message's self-destruct type; may be null if none

### sender\_boost\_count

> **sender\_boost\_count**: [`int32`](int32.md)

Number of times the sender of the message boosted the supergroup at the time the message was sent; 0 if none or unknown. For messages sent by the current user, supergroupFullInfo.my_boost_count must be used instead

### sender\_business\_bot\_user\_id

> **sender\_business\_bot\_user\_id**: [`int53`](int53.md)

If non-zero, the user identifier of the business bot that sent this message

### sender\_id

> **sender\_id**: [`MessageSender`](MessageSender.md)

Identifier of the sender of the message

### sending\_state

> **sending\_state**: [`MessageSendingState`](MessageSendingState.md) \| `null`

The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent

### unread\_reactions

> **unread\_reactions**: [`vector`](vector.md)\<[`unreadReaction`](unreadReaction.md)\>

Information about unread reactions added to the message

### via\_bot\_user\_id

> **via\_bot\_user\_id**: [`int53`](int53.md)

If non-zero, the user identifier of the inline bot through which this message was sent

## Defined in

dist/generated/types.d.ts:14103
