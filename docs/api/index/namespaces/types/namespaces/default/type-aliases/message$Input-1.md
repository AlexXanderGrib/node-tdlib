[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / message$Input

# Type Alias: message$Input

> **message$Input**: `object`

Version of [message](message-1.md) for method parameters.

Describes a message

## Type declaration

### \_

> `readonly` **\_**: `"message"`

### author\_signature?

> `readonly` `optional` **author\_signature**: `string`

For channel posts and anonymous group messages, optional author signature

### auto\_delete\_in?

> `readonly` `optional` **auto\_delete\_in**: [`double`](double-1.md)

Time left before the message will be automatically deleted by message_auto_delete_time setting of the chat, in seconds; 0 if never

### can\_be\_deleted\_for\_all\_users?

> `readonly` `optional` **can\_be\_deleted\_for\_all\_users**: [`Bool$Input`](Bool$Input.md)

True, if the message can be deleted for all users

### can\_be\_deleted\_only\_for\_self?

> `readonly` `optional` **can\_be\_deleted\_only\_for\_self**: [`Bool$Input`](Bool$Input.md)

True, if the message can be deleted only for the current user while other users will continue to see it

### can\_be\_edited?

> `readonly` `optional` **can\_be\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the message can be edited. For live location and poll messages this fields shows whether editMessageLiveLocation or stopPoll can be used with this message by the application

### can\_be\_forwarded?

> `readonly` `optional` **can\_be\_forwarded**: [`Bool$Input`](Bool$Input.md)

True, if the message can be forwarded

### can\_be\_replied\_in\_another\_chat?

> `readonly` `optional` **can\_be\_replied\_in\_another\_chat**: [`Bool$Input`](Bool$Input.md)

True, if the message can be replied in another chat or topic

### can\_be\_saved?

> `readonly` `optional` **can\_be\_saved**: [`Bool$Input`](Bool$Input.md)

True, if content of the message can be saved locally or copied

### can\_get\_added\_reactions?

> `readonly` `optional` **can\_get\_added\_reactions**: [`Bool$Input`](Bool$Input.md)

True, if the list of added reactions is available through getMessageAddedReactions

### can\_get\_media\_timestamp\_links?

> `readonly` `optional` **can\_get\_media\_timestamp\_links**: [`Bool$Input`](Bool$Input.md)

True, if media timestamp links can be generated for media timestamp entities in the message text, caption or link preview description through getMessageLink

### can\_get\_message\_thread?

> `readonly` `optional` **can\_get\_message\_thread**: [`Bool$Input`](Bool$Input.md)

True, if information about the message thread is available through getMessageThread and getMessageThreadHistory

### can\_get\_read\_date?

> `readonly` `optional` **can\_get\_read\_date**: [`Bool$Input`](Bool$Input.md)

True, if read date of the message can be received through getMessageReadDate

### can\_get\_statistics?

> `readonly` `optional` **can\_get\_statistics**: [`Bool$Input`](Bool$Input.md)

True, if the message statistics are available through getMessageStatistics

### can\_get\_viewers?

> `readonly` `optional` **can\_get\_viewers**: [`Bool$Input`](Bool$Input.md)

True, if chat members already viewed the message can be received through getMessageViewers

### can\_report\_reactions?

> `readonly` `optional` **can\_report\_reactions**: [`Bool$Input`](Bool$Input.md)

True, if reactions on the message can be reported through reportMessageReactions

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Chat identifier

### contains\_unread\_mention?

> `readonly` `optional` **contains\_unread\_mention**: [`Bool$Input`](Bool$Input.md)

True, if the message contains an unread mention for the current user

### content?

> `readonly` `optional` **content**: [`MessageContent$Input`](MessageContent$Input.md)

Content of the message

### date?

> `readonly` `optional` **date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was sent

### edit\_date?

> `readonly` `optional` **edit\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the message was last edited

### effect\_id?

> `readonly` `optional` **effect\_id**: [`int64$Input`](int64$Input-1.md)

Unique identifier of the effect added to the message; 0 if none

### fact\_check?

> `readonly` `optional` **fact\_check**: [`factCheck$Input`](factCheck$Input-1.md) \| `null`

Information about fact-check added to the message; may be null if none

### forward\_info?

> `readonly` `optional` **forward\_info**: [`messageForwardInfo$Input`](messageForwardInfo$Input-1.md) \| `null`

Information about the initial message sender; may be null if none or unknown

### has\_timestamped\_media?

> `readonly` `optional` **has\_timestamped\_media**: [`Bool$Input`](Bool$Input.md)

True, if media timestamp entities refers to a media in this message as opposed to a media in the replied message

### id?

> `readonly` `optional` **id**: [`int53`](int53-1.md)

Message identifier; unique for the chat to which the message belongs

### import\_info?

> `readonly` `optional` **import\_info**: [`messageImportInfo$Input`](messageImportInfo$Input-1.md) \| `null`

Information about the initial message for messages created with importMessages; may be null if the message isn't imported

### interaction\_info?

> `readonly` `optional` **interaction\_info**: [`messageInteractionInfo$Input`](messageInteractionInfo$Input-1.md) \| `null`

Information about interactions with the message; may be null if none

### is\_channel\_post?

> `readonly` `optional` **is\_channel\_post**: [`Bool$Input`](Bool$Input.md)

True, if the message is a channel post. All messages to channels are channel posts, all other messages are not channel posts

### is\_from\_offline?

> `readonly` `optional` **is\_from\_offline**: [`Bool$Input`](Bool$Input.md)

True, if the message was sent because of a scheduled action by the message sender, for example, as away, or greeting service message

### is\_outgoing?

> `readonly` `optional` **is\_outgoing**: [`Bool$Input`](Bool$Input.md)

True, if the message is outgoing

### is\_pinned?

> `readonly` `optional` **is\_pinned**: [`Bool$Input`](Bool$Input.md)

True, if the message is pinned

### is\_topic\_message?

> `readonly` `optional` **is\_topic\_message**: [`Bool$Input`](Bool$Input.md)

True, if the message is a forum topic message

### media\_album\_id?

> `readonly` `optional` **media\_album\_id**: [`int64$Input`](int64$Input-1.md)

Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53-1.md)

If non-zero, the identifier of the message thread the message belongs to; unique within the chat to which the message belongs

### reply\_markup?

> `readonly` `optional` **reply\_markup**: [`ReplyMarkup$Input`](ReplyMarkup$Input.md) \| `null`

Reply markup for the message; may be null if none

### reply\_to?

> `readonly` `optional` **reply\_to**: [`MessageReplyTo$Input`](MessageReplyTo$Input.md) \| `null`

Information about the message or the story this message is replying to; may be null if none

### restriction\_reason?

> `readonly` `optional` **restriction\_reason**: `string`

If non-empty, contains a human-readable description of the reason why access to this message must be restricted

### saved\_messages\_topic\_id?

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53-1.md)

Identifier of the Saved Messages topic for the message; 0 for messages not from Saved Messages

### scheduling\_state?

> `readonly` `optional` **scheduling\_state**: [`MessageSchedulingState$Input`](MessageSchedulingState$Input.md) \| `null`

The scheduling state of the message; may be null if the message isn't scheduled

### self\_destruct\_in?

> `readonly` `optional` **self\_destruct\_in**: [`double`](double-1.md)

Time left before the message self-destruct timer expires, in seconds; 0 if self-destruction isn't scheduled yet

### self\_destruct\_type?

> `readonly` `optional` **self\_destruct\_type**: [`MessageSelfDestructType$Input`](MessageSelfDestructType$Input.md) \| `null`

The message's self-destruct type; may be null if none

### sender\_boost\_count?

> `readonly` `optional` **sender\_boost\_count**: [`int32`](int32-1.md)

Number of times the sender of the message boosted the supergroup at the time the message was sent; 0 if none or unknown. For messages sent by the current user, supergroupFullInfo.my_boost_count must be used instead

### sender\_business\_bot\_user\_id?

> `readonly` `optional` **sender\_business\_bot\_user\_id**: [`int53`](int53-1.md)

If non-zero, the user identifier of the business bot that sent this message

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the sender of the message

### sending\_state?

> `readonly` `optional` **sending\_state**: [`MessageSendingState$Input`](MessageSendingState$Input.md) \| `null`

The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent

### unread\_reactions?

> `readonly` `optional` **unread\_reactions**: [`vector$Input`](vector$Input.md)\<[`unreadReaction$Input`](unreadReaction$Input-1.md)\>

Information about unread reactions added to the message

### via\_bot\_user\_id?

> `readonly` `optional` **via\_bot\_user\_id**: [`int53`](int53-1.md)

If non-zero, the user identifier of the inline bot through which this message was sent

## Defined in

dist/generated/types.d.ts:13644
