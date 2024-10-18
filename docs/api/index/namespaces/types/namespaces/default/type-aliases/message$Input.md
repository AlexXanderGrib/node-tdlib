[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / message$Input

# Type Alias: message$Input

> **message$Input**: `object`

Version of [message](message.md) for method parameters.

Describes a message

## Type declaration

### \_

> `readonly` **\_**: `"message"`

### author\_signature?

> `readonly` `optional` **author\_signature**: `string`

For channel posts and anonymous group messages, optional author signature

### auto\_delete\_in?

> `readonly` `optional` **auto\_delete\_in**: [`double`](double.md)

Time left before the message will be automatically deleted by message_auto_delete_time setting of the chat, in seconds; 0 if never

### can\_be\_saved?

> `readonly` `optional` **can\_be\_saved**: [`Bool$Input`](Bool$Input.md)

True, if content of the message can be saved locally or copied

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

Chat identifier

### contains\_unread\_mention?

> `readonly` `optional` **contains\_unread\_mention**: [`Bool$Input`](Bool$Input.md)

True, if the message contains an unread mention for the current user

### content?

> `readonly` `optional` **content**: [`MessageContent$Input`](MessageContent$Input.md)

Content of the message

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message was sent

### edit\_date?

> `readonly` `optional` **edit\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the message was last edited

### effect\_id?

> `readonly` `optional` **effect\_id**: [`int64$Input`](int64$Input.md)

Unique identifier of the effect added to the message; 0 if none

### fact\_check?

> `readonly` `optional` **fact\_check**: [`factCheck$Input`](factCheck$Input.md) \| `null`

Information about fact-check added to the message; may be null if none

### forward\_info?

> `readonly` `optional` **forward\_info**: [`messageForwardInfo$Input`](messageForwardInfo$Input.md) \| `null`

Information about the initial message sender; may be null if none or unknown

### has\_sensitive\_content?

> `readonly` `optional` **has\_sensitive\_content**: [`Bool$Input`](Bool$Input.md)

True, if media content of the message must be hidden with 18+ spoiler

### has\_timestamped\_media?

> `readonly` `optional` **has\_timestamped\_media**: [`Bool$Input`](Bool$Input.md)

True, if media timestamp entities refers to a media in this message as opposed to a media in the replied message

### id?

> `readonly` `optional` **id**: [`int53`](int53.md)

Message identifier; unique for the chat to which the message belongs

### import\_info?

> `readonly` `optional` **import\_info**: [`messageImportInfo$Input`](messageImportInfo$Input.md) \| `null`

Information about the initial message for messages created with importMessages; may be null if the message isn't imported

### interaction\_info?

> `readonly` `optional` **interaction\_info**: [`messageInteractionInfo$Input`](messageInteractionInfo$Input.md) \| `null`

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

> `readonly` `optional` **media\_album\_id**: [`int64$Input`](int64$Input.md)

Unique identifier of an album this message belongs to; 0 if none. Only audios, documents, photos and videos can be grouped together in albums

### message\_thread\_id?

> `readonly` `optional` **message\_thread\_id**: [`int53`](int53.md)

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

> `readonly` `optional` **saved\_messages\_topic\_id**: [`int53`](int53.md)

Identifier of the Saved Messages topic for the message; 0 for messages not from Saved Messages

### scheduling\_state?

> `readonly` `optional` **scheduling\_state**: [`MessageSchedulingState$Input`](MessageSchedulingState$Input.md) \| `null`

The scheduling state of the message; may be null if the message isn't scheduled

### self\_destruct\_in?

> `readonly` `optional` **self\_destruct\_in**: [`double`](double.md)

Time left before the message self-destruct timer expires, in seconds; 0 if self-destruction isn't scheduled yet

### self\_destruct\_type?

> `readonly` `optional` **self\_destruct\_type**: [`MessageSelfDestructType$Input`](MessageSelfDestructType$Input.md) \| `null`

The message's self-destruct type; may be null if none

### sender\_boost\_count?

> `readonly` `optional` **sender\_boost\_count**: [`int32`](int32.md)

Number of times the sender of the message boosted the supergroup at the time the message was sent; 0 if none or unknown. For messages sent by the current user, supergroupFullInfo.my_boost_count must be used instead

### sender\_business\_bot\_user\_id?

> `readonly` `optional` **sender\_business\_bot\_user\_id**: [`int53`](int53.md)

If non-zero, the user identifier of the business bot that sent this message

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md)

Identifier of the sender of the message

### sending\_state?

> `readonly` `optional` **sending\_state**: [`MessageSendingState$Input`](MessageSendingState$Input.md) \| `null`

The sending state of the message; may be null if the message isn't being sent and didn't fail to be sent

### unread\_reactions?

> `readonly` `optional` **unread\_reactions**: [`vector$Input`](vector$Input.md)\<[`unreadReaction$Input`](unreadReaction$Input.md)\>

Information about unread reactions added to the message

### via\_bot\_user\_id?

> `readonly` `optional` **via\_bot\_user\_id**: [`int53`](int53.md)

If non-zero, the user identifier of the inline bot through which this message was sent

## Defined in

dist/generated/types.d.ts:14291
