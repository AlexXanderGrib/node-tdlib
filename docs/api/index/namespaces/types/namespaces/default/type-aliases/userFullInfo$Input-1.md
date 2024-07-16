[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / userFullInfo$Input

# Type Alias: userFullInfo$Input

> **userFullInfo$Input**: `object`

Version of [userFullInfo](userFullInfo-1.md) for method parameters.

Contains full information about a user

## Type declaration

### \_

> `readonly` **\_**: `"userFullInfo"`

### bio?

> `readonly` `optional` **bio**: [`formattedText$Input`](formattedText$Input-1.md) \| `null`

A short user bio; may be null for bots

### birthdate?

> `readonly` `optional` **birthdate**: [`birthdate$Input`](birthdate$Input-1.md) \| `null`

Birthdate of the user; may be null if unknown

### block\_list?

> `readonly` `optional` **block\_list**: [`BlockList$Input`](BlockList$Input.md) \| `null`

Block list to which the user is added; may be null if none

### bot\_info?

> `readonly` `optional` **bot\_info**: [`botInfo$Input`](botInfo$Input-1.md) \| `null`

For bots, information about the bot; may be null if the user isn't a bot

### business\_info?

> `readonly` `optional` **business\_info**: [`businessInfo$Input`](businessInfo$Input-1.md) \| `null`

Information about business settings for Telegram Business accounts; may be null if none

### can\_be\_called?

> `readonly` `optional` **can\_be\_called**: [`Bool$Input`](Bool$Input.md)

True, if the user can be called

### group\_in\_common\_count?

> `readonly` `optional` **group\_in\_common\_count**: [`int32`](int32-1.md)

Number of group chats where both the other user and the current user are a member; 0 for the current user

### has\_posted\_to\_profile\_stories?

> `readonly` `optional` **has\_posted\_to\_profile\_stories**: [`Bool$Input`](Bool$Input.md)

True, if the user has posted to profile stories

### has\_private\_calls?

> `readonly` `optional` **has\_private\_calls**: [`Bool$Input`](Bool$Input.md)

True, if the user can't be called due to their privacy settings

### has\_private\_forwards?

> `readonly` `optional` **has\_private\_forwards**: [`Bool$Input`](Bool$Input.md)

True, if the user can't be linked in forwarded messages due to their privacy settings

### has\_restricted\_voice\_and\_video\_note\_messages?

> `readonly` `optional` **has\_restricted\_voice\_and\_video\_note\_messages**: [`Bool$Input`](Bool$Input.md)

True, if voice and video notes can't be sent or forwarded to the user

### has\_sponsored\_messages\_enabled?

> `readonly` `optional` **has\_sponsored\_messages\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if the user always enabled sponsored messages; known only for the current user

### need\_phone\_number\_privacy\_exception?

> `readonly` `optional` **need\_phone\_number\_privacy\_exception**: [`Bool$Input`](Bool$Input.md)

True, if the current user needs to explicitly allow to share their phone number with the user when the method addContact is used

### personal\_chat\_id?

> `readonly` `optional` **personal\_chat\_id**: [`int53`](int53-1.md)

Identifier of the personal chat of the user; 0 if none

### personal\_photo?

> `readonly` `optional` **personal\_photo**: [`chatPhoto$Input`](chatPhoto$Input-1.md) \| `null`

User profile photo set by the current user for the contact; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown.

- If non-null, then it is the same photo as in user.profile_photo and chat.photo. This photo isn't returned in the list of user photos

### photo?

> `readonly` `optional` **photo**: [`chatPhoto$Input`](chatPhoto$Input-1.md) \| `null`

User profile photo; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown.

- If non-null and personal_photo is null, then it is the same photo as in user.profile_photo and chat.photo

### premium\_gift\_options?

> `readonly` `optional` **premium\_gift\_options**: [`vector$Input`](vector$Input.md)\<[`premiumPaymentOption$Input`](premiumPaymentOption$Input-1.md)\>

The list of available options for gifting Telegram Premium to the user

### public\_photo?

> `readonly` `optional` **public\_photo**: [`chatPhoto$Input`](chatPhoto$Input-1.md) \| `null`

User profile photo visible if the main photo is hidden by privacy settings; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown.

- If non-null and both photo and personal_photo are null, then it is the same photo as in user.profile_photo and chat.photo. This photo isn't returned in the list of user photos

### set\_chat\_background?

> `readonly` `optional` **set\_chat\_background**: [`Bool$Input`](Bool$Input.md)

True, if the user set chat background for both chat users and it wasn't reverted yet

### supports\_video\_calls?

> `readonly` `optional` **supports\_video\_calls**: [`Bool$Input`](Bool$Input.md)

True, if a video call can be created with the user

## Defined in

dist/generated/types.d.ts:9697
