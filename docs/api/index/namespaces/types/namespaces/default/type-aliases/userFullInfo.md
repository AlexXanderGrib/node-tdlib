[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / userFullInfo

# Type Alias: userFullInfo

> **userFullInfo**: `object`

Contains full information about a user

## Type declaration

### \_

> **\_**: `"userFullInfo"`

### bio

> **bio**: [`formattedText`](formattedText.md) \| `null`

A short user bio; may be null for bots

### birthdate

> **birthdate**: [`birthdate`](birthdate.md) \| `null`

Birthdate of the user; may be null if unknown

### block\_list

> **block\_list**: [`BlockList`](BlockList.md) \| `null`

Block list to which the user is added; may be null if none

### bot\_info

> **bot\_info**: [`botInfo`](botInfo.md) \| `null`

For bots, information about the bot; may be null if the user isn't a bot

### business\_info

> **business\_info**: [`businessInfo`](businessInfo.md) \| `null`

Information about business settings for Telegram Business accounts; may be null if none

### can\_be\_called

> **can\_be\_called**: [`Bool`](Bool.md)

True, if the user can be called

### group\_in\_common\_count

> **group\_in\_common\_count**: [`int32`](int32.md)

Number of group chats where both the other user and the current user are a member; 0 for the current user

### has\_posted\_to\_profile\_stories

> **has\_posted\_to\_profile\_stories**: [`Bool`](Bool.md)

True, if the user has posted to profile stories

### has\_private\_calls

> **has\_private\_calls**: [`Bool`](Bool.md)

True, if the user can't be called due to their privacy settings

### has\_private\_forwards

> **has\_private\_forwards**: [`Bool`](Bool.md)

True, if the user can't be linked in forwarded messages due to their privacy settings

### has\_restricted\_voice\_and\_video\_note\_messages

> **has\_restricted\_voice\_and\_video\_note\_messages**: [`Bool`](Bool.md)

True, if voice and video notes can't be sent or forwarded to the user

### has\_sponsored\_messages\_enabled

> **has\_sponsored\_messages\_enabled**: [`Bool`](Bool.md)

True, if the user always enabled sponsored messages; known only for the current user

### need\_phone\_number\_privacy\_exception

> **need\_phone\_number\_privacy\_exception**: [`Bool`](Bool.md)

True, if the current user needs to explicitly allow to share their phone number with the user when the method addContact is used

### personal\_chat\_id

> **personal\_chat\_id**: [`int53`](int53.md)

Identifier of the personal chat of the user; 0 if none

### personal\_photo

> **personal\_photo**: [`chatPhoto`](chatPhoto.md) \| `null`

User profile photo set by the current user for the contact; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown.

- If non-null, then it is the same photo as in user.profile_photo and chat.photo. This photo isn't returned in the list of user photos

### photo

> **photo**: [`chatPhoto`](chatPhoto.md) \| `null`

User profile photo; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown.

- If non-null and personal_photo is null, then it is the same photo as in user.profile_photo and chat.photo

### premium\_gift\_options

> **premium\_gift\_options**: [`vector`](vector.md)\<[`premiumPaymentOption`](premiumPaymentOption.md)\>

The list of available options for gifting Telegram Premium to the user

### public\_photo

> **public\_photo**: [`chatPhoto`](chatPhoto.md) \| `null`

User profile photo visible if the main photo is hidden by privacy settings; may be null. If null and user.profile_photo is null, then the photo is empty; otherwise, it is unknown.

- If non-null and both photo and personal_photo are null, then it is the same photo as in user.profile_photo and chat.photo. This photo isn't returned in the list of user photos

### set\_chat\_background

> **set\_chat\_background**: [`Bool`](Bool.md)

True, if the user set chat background for both chat users and it wasn't reverted yet

### supports\_video\_calls

> **supports\_video\_calls**: [`Bool`](Bool.md)

True, if a video call can be created with the user

## Defined in

dist/generated/types.d.ts:10039
