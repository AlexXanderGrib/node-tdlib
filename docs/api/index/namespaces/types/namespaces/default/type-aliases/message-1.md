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

> **auto\_delete\_in**: [`double`](double-1.md)

Time left before the message will be automatically deleted by message_auto_delete_time setting of the chat, in seconds; 0 if never

### can\_be\_deleted\_for\_all\_users

> **can\_be\_deleted\_for\_all\_users**: [`Bool`](Bool.md)

True, if the message can be deleted for all users

### can\_be\_deleted\_only\_for\_self

> **can\_be\_deleted\_only\_for\_self**: [`Bool`](Bool.md)

True, if the message can be deleted only for the current user while other users will continue to see it

### can\_be\_edited

> **can\_be\_edited**: [`Bool`](Bool.md)

True, if the message can be edited. For live location and poll messages this fields shows whether editMessageLiveLocation or stopPoll can be used with this message by the application

### can\_be\_forwarded

> **can\_be\_forwarded**: [`Bool`](Bool.md)

True, if the message can be forwarded

### can\_be\_replied\_in\_another\_chat

> **can\_be\_replied\_in\_another\_chat**: [`Bool`](Bool.md)

True, if the message can be replied in another chat or topic

### can\_be\_saved

> **can\_be\_saved**: [`Bool`](Bool.md)

True, if content of the message can be saved locally or copied

### can\_get\_added\_reactions

> **can\_get\_added\_reactions**: [`Bool`](Bool.md)

True, if the list of added reactions is available through getMessageAddedReactions

### can\_get\_media\_timestamp\_links

> **can\_get\_media\_timestamp\_links**: [`Bool`](Bool.md)

True, if media timestamp links can be generated for media timestamp entities in the message text, caption or link preview description through getMessageLink

### can\_get\_message\_thread

> **can\_get\_message\_thread**: [`Bool`](Bool.md)

True, if information about the message thread is available through getMessageThread and getMessageThreadHistory

### can\_get\_read\_date

> **can\_get\_read\_date**: [`Bool`](Bool.md)

True, if read date of the message can be received through getMessageReadDate

### can\_get\_statistics

> **can\_get\_statistics**: [`Bool`](Bool.md)

True, if the message statistics are available through getMessageStatistics

### can\_get\_viewers

> **can\_get\_viewers**: [`Bool`](Bool.md)

True, if chat members already viewed the message can be received through getMessageViewers

### can\_report\_reactions

> **can\_report\_reactions**: [`Bool`](Bool.md)

True, if reactions on the message can be reported through reportMessageReactions

### chat\_id

> **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### contains\_unread\_mention

> **contains\_unread\_mention**: [`Bool`](Bool.md)

True, if the message contains an unread mention for the current user

### content

> **content**: [`MessageContent`](MessageContent.md)

Content of the message

### date

> **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was sent

### edit\_date

> **edit\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was last edited

### effect\_id

> **effect\_id**: [`int64`](int64-1.md)

Unique identifier of the effect added to the message; 0 if none

### fact\_check

> **fact\_check**: [`factCheck`](factCheck-1.md) \| `null`

Information about fact-check added to the message; may be null if none

### forward\_info

> **forward\_info**: [`messageForwardInfo`](messageForwardInfo-1.md) \| `null`

Information about the initial message sender; may be null if none or unknown

### has\_timestamped\_media

> **has\_timestamped\_media**: [`Bool`](Bool.md)

True, if media timestamp entities refers to a media in this message as opposed to a media in the replied message

### id

> **id**: [`int53`](int53-1.md)

Message identifier; unique for the chat to which the message belongs

### import\_info

> **import\_info**: [`messageImportInfo`](messageImportInfo-1.md) \| `null`

Information about the initial message for messages created with importMessages; may be null if the message isn't imported

### interaction\_info

> **interaction\_info**: [`messageInteractionInfo`](messageInteractionInfo-1.md) \| `null`

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

> **media\_album\_id**: [`int64`](int64-1.md)

Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums

### message\_thread\_id

> **message\_thread\_id**: [`int53`](int53-1.md)

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

> **saved\_messages\_topic\_id**: [`int53`](int53-1.md)

Identifier of the Saved Messages topic for the message; 0 for messages not from Saved Messages

### scheduling\_state

> **scheduling\_state**: [`MessageSchedulingState`](MessageSchedulingState.md) \| `null`

The scheduling state of the message; may be null if the message isn't scheduled

### self\_destruct\_in

> **self\_destruct\_in**: [`double`](double-1.md)

Time left before the message self-destruct timer expires, in seconds; 0 if self-destruction isn't scheduled yet

### self\_destruct\_type

> **self\_destruct\_type**: [`MessageSelfDestructType`](MessageSelfDestructType.md) \| `null`

The message's self-destruct type; may be null if none

### sender\_boost\_count

> **sender\_boost\_count**: [`int32`](int32-1.md)

Number of times the sender of the message boosted the supergroup at the time the message was sent; 0 if none or unknown. For messages sent by the current user, supergroupFullInfo.my_boost_count must be used instead

### sender\_business\_bot\_user\_id

> **sender\_business\_bot\_user\_id**: [`int53`](int53-1.md)

If non-zero, the user identifier of the business bot that sent this message

### sender\_id

> **sender\_id**: [`MessageSender`](MessageSender.md)

Identifier of the sender of the message

### sending\_state

> **sending\_state**: [`MessageSendingState`](MessageSendingState.md) \| `null`

The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent

### unread\_reactions

> **unread\_reactions**: [`vector`](vector.md)\<[`unreadReaction`](unreadReaction-1.md)\>

Information about unread reactions added to the message

### via\_bot\_user\_id

> **via\_bot\_user\_id**: [`int53`](int53-1.md)

If non-zero, the user identifier of the inline bot through which this message was sent

## Defined in

dist/generated/types.d.ts:13401
