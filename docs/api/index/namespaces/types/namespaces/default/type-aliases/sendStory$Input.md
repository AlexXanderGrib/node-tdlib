[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / sendStory$Input

# Type Alias: sendStory$Input

> **sendStory$Input**: `object`

Sends a new story to a chat; requires can_post_stories right for supergroup and channel chats. Returns a temporary story

## Type declaration

### \_

> `readonly` **\_**: `"sendStory"`

### active\_period?

> `readonly` `optional` **active\_period**: [`int32`](int32-1.md)

Period after which the story is moved to archive, in seconds; must be one of 6 * 3600, 12 * 3600, 86400, or 2 * 86400 for Telegram Premium users, and 86400 otherwise

### areas?

> `readonly` `optional` **areas**: [`inputStoryAreas$Input`](inputStoryAreas$Input-1.md) \| `null`

Clickable rectangle areas to be shown on the story media; pass null if none

### caption?

> `readonly` `optional` **caption**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

Story caption; pass null to use an empty caption; 0-getOption("story_caption_length_max") characters; can have entities only if getOption("can_use_text_entities_in_story_caption")

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53-1.md)

Identifier of the chat that will post the story

### content?

> `readonly` `optional` **content**: [`InputStoryContent$Input`](InputStoryContent$Input.md)

Content of the story

### from\_story\_full\_id?

> `readonly` `optional` **from\_story\_full\_id**: [`storyFullId$Input`](storyFullId$Input-1.md)

Full identifier of the original story, which content was used to create the story

### is\_posted\_to\_chat\_page?

> `readonly` `optional` **is\_posted\_to\_chat\_page**: [`Bool$Input`](Bool$Input.md)

Pass true to keep the story accessible after expiration

### privacy\_settings?

> `readonly` `optional` **privacy\_settings**: [`StoryPrivacySettings$Input`](StoryPrivacySettings$Input.md)

The privacy settings for the story; ignored for stories sent to supergroup and channel chats

### protect\_content?

> `readonly` `optional` **protect\_content**: [`Bool$Input`](Bool$Input.md)

Pass true if the content of the story must be protected from forwarding and screenshotting

## Defined in

dist/generated/types.d.ts:87217
