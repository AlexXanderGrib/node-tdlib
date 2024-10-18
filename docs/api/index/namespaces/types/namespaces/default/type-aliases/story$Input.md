[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / story$Input

# Type Alias: story$Input

> **story$Input**: `object`

Version of [story](story.md) for method parameters.

Represents a story

## Type declaration

### \_

> `readonly` **\_**: `"story"`

### areas?

> `readonly` `optional` **areas**: [`vector$Input`](vector$Input.md)\<[`storyArea$Input`](storyArea$Input.md)\>

Clickable areas to be shown on the story content

### can\_be\_deleted?

> `readonly` `optional` **can\_be\_deleted**: [`Bool$Input`](Bool$Input.md)

True, if the story can be deleted

### can\_be\_edited?

> `readonly` `optional` **can\_be\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the story can be edited

### can\_be\_forwarded?

> `readonly` `optional` **can\_be\_forwarded**: [`Bool$Input`](Bool$Input.md)

True, if the story can be forwarded as a message. Otherwise, screenshots and saving of the story content must be also forbidden

### can\_be\_replied?

> `readonly` `optional` **can\_be\_replied**: [`Bool$Input`](Bool$Input.md)

True, if the story can be replied in the chat with the story sender

### can\_get\_interactions?

> `readonly` `optional` **can\_get\_interactions**: [`Bool$Input`](Bool$Input.md)

True, if interactions with the story can be received through getStoryInteractions

### can\_get\_statistics?

> `readonly` `optional` **can\_get\_statistics**: [`Bool$Input`](Bool$Input.md)

True, if the story statistics are available through getStoryStatistics

### can\_toggle\_is\_posted\_to\_chat\_page?

> `readonly` `optional` **can\_toggle\_is\_posted\_to\_chat\_page**: [`Bool$Input`](Bool$Input.md)

True, if the story's is_posted_to_chat_page value can be changed

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input.md)

Caption of the story

### chosen\_reaction\_type?

> `readonly` `optional` **chosen\_reaction\_type**: [`ReactionType$Input`](ReactionType$Input.md) \| `null`

Type of the chosen reaction; may be null if none

### content?

> `readonly` `optional` **content**: [`StoryContent$Input`](StoryContent$Input.md)

Content of the story

### date?

> `readonly` `optional` **date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the story was published

### has\_expired\_viewers?

> `readonly` `optional` **has\_expired\_viewers**: [`Bool$Input`](Bool$Input.md)

True, if users viewed the story can't be received, because the story has expired more than getOption("story_viewers_expiration_delay") seconds ago

### id?

> `readonly` `optional` **id**: [`int32`](int32.md)

Unique story identifier among stories of the given sender

### interaction\_info?

> `readonly` `optional` **interaction\_info**: [`storyInteractionInfo$Input`](storyInteractionInfo$Input.md) \| `null`

Information about interactions with the story; may be null if the story isn't owned or there were no interactions

### is\_being\_edited?

> `readonly` `optional` **is\_being\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the story is being edited by the current user

### is\_being\_sent?

> `readonly` `optional` **is\_being\_sent**: [`Bool$Input`](Bool$Input.md)

True, if the story is being sent by the current user

### is\_edited?

> `readonly` `optional` **is\_edited**: [`Bool$Input`](Bool$Input.md)

True, if the story was edited

### is\_posted\_to\_chat\_page?

> `readonly` `optional` **is\_posted\_to\_chat\_page**: [`Bool$Input`](Bool$Input.md)

True, if the story is saved in the sender's profile and will be available there after expiration

### is\_visible\_only\_for\_self?

> `readonly` `optional` **is\_visible\_only\_for\_self**: [`Bool$Input`](Bool$Input.md)

True, if the story is visible only for the current user

### privacy\_settings?

> `readonly` `optional` **privacy\_settings**: [`StoryPrivacySettings$Input`](StoryPrivacySettings$Input.md)

Privacy rules affecting story visibility; may be approximate for non-owned stories

### repost\_info?

> `readonly` `optional` **repost\_info**: [`storyRepostInfo$Input`](storyRepostInfo$Input.md) \| `null`

Information about the original story; may be null if the story wasn't reposted

### sender\_chat\_id?

> `readonly` `optional` **sender\_chat\_id**: [`int53`](int53.md)

Identifier of the chat that posted the story

### sender\_id?

> `readonly` `optional` **sender\_id**: [`MessageSender$Input`](MessageSender$Input.md) \| `null`

Identifier of the sender of the story; may be null if the story is posted on behalf of the sender_chat_id

## Defined in

dist/generated/types.d.ts:34195
