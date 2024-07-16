[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / $AsyncApi

# Class: $AsyncApi

Convenience class for API calls

## Constructors

### new $AsyncApi()

> **new $AsyncApi**(`client`): [`$AsyncApi`]($AsyncApi.md)

Constructs [$AsyncApi]($AsyncApi.md)

#### Parameters

• **client**

• **client.invoke**

#### Returns

[`$AsyncApi`]($AsyncApi.md)

#### Defined in

dist/generated/types.d.ts:67384

## Properties

### client

> `private` `readonly` **client**: `any`

#### Defined in

dist/generated/types.d.ts:67378

## Methods

### acceptCall()

> **acceptCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Accepts an incoming call

#### Parameters

• **parameters**: [`acceptCall$DirectInput`](../type-aliases/acceptCall$DirectInput.md)

[acceptCall$Input](../type-aliases/acceptCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70408

***

### acceptTermsOfService()

> **acceptTermsOfService**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Accepts Telegram terms of services

#### Parameters

• **parameters**: [`acceptTermsOfService$DirectInput`](../type-aliases/acceptTermsOfService$DirectInput.md)

[acceptTermsOfService$Input](../type-aliases/acceptTermsOfService$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72540

***

### activateStoryStealthMode()

> **activateStoryStealthMode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Activates stealth mode for stories, which hides all views of stories from the current user in the last "story_stealth_mode_past_period" seconds

- and for the next "story_stealth_mode_future_period" seconds; for Telegram Premium users only

#### Parameters

• **parameters**: [`activateStoryStealthMode$DirectInput`](../type-aliases/activateStoryStealthMode$DirectInput.md)

[activateStoryStealthMode$Input](../type-aliases/activateStoryStealthMode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69999

***

### addChatFolderByInviteLink()

> **addChatFolderByInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a chat folder by an invite link

#### Parameters

• **parameters**: [`addChatFolderByInviteLink$DirectInput`](../type-aliases/addChatFolderByInviteLink$DirectInput.md)

[addChatFolderByInviteLink$Input](../type-aliases/addChatFolderByInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69437

***

### addChatMember()

> **addChatMember**(`parameters`): `Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers-1.md)\>

Adds a new member to a chat; requires can_invite_users member right. Members can't be added to private or secret chats. Returns information about members that weren't added

#### Parameters

• **parameters**: [`addChatMember$DirectInput`](../type-aliases/addChatMember$DirectInput.md)

[addChatMember$Input](../type-aliases/addChatMember$Input.md)

#### Returns

`Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers-1.md)\>

Promise<[FailedToAddMembers](../type-aliases/FailedToAddMembers.md)>

#### Defined in

dist/generated/types.d.ts:69677

***

### addChatMembers()

> **addChatMembers**(`parameters`): `Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers-1.md)\>

Adds multiple new members to a chat; requires can_invite_users member right. Currently, this method is only available for supergroups and channels.

- This method can't be used to join a chat. Members can't be added to a channel if it has more than 200 members. Returns information about members that weren't added

#### Parameters

• **parameters**: [`addChatMembers$DirectInput`](../type-aliases/addChatMembers$DirectInput.md)

[addChatMembers$Input](../type-aliases/addChatMembers$Input.md)

#### Returns

`Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers-1.md)\>

Promise<[FailedToAddMembers](../type-aliases/FailedToAddMembers.md)>

#### Defined in

dist/generated/types.d.ts:69686

***

### addChatToList()

> **addChatToList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a chat to a chat list. A chat can't be simultaneously in Main and Archive chat lists, so it is automatically removed from another one if needed

#### Parameters

• **parameters**: [`addChatToList$DirectInput`](../type-aliases/addChatToList$DirectInput.md)

[addChatToList$Input](../type-aliases/addChatToList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69318

***

### addContact()

> **addContact**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a user to the contact list or edits an existing contact by their user identifier

#### Parameters

• **parameters**: [`addContact$DirectInput`](../type-aliases/addContact$DirectInput.md)

[addContact$Input](../type-aliases/addContact$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70681

***

### addCustomServerLanguagePack()

> **addCustomServerLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a custom server language pack to the list of installed language packs in current localization target. Can be called before authorization

#### Parameters

• **parameters**: [`addCustomServerLanguagePack$DirectInput`](../type-aliases/addCustomServerLanguagePack$DirectInput.md)

[addCustomServerLanguagePack$Input](../type-aliases/addCustomServerLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71841

***

### addFavoriteSticker()

> **addFavoriteSticker**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first.

- Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to favorite stickers

#### Parameters

• **parameters**: [`addFavoriteSticker$DirectInput`](../type-aliases/addFavoriteSticker$DirectInput.md)

[addFavoriteSticker$Input](../type-aliases/addFavoriteSticker$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70939

***

### addFileToDownloads()

> **addFileToDownloads**(`parameters`): `Promise`\<[`file`](../type-aliases/file-1.md)\>

Adds a file from a message to the list of file downloads. Download progress and completion of the download will be notified through updateFile updates.

- If message database is used, the list of file downloads is persistent across application restarts. The downloading is independent of download using downloadFile, i.e. it continues if downloadFile is canceled or is used to download a part of the file

#### Parameters

• **parameters**: [`addFileToDownloads$DirectInput`](../type-aliases/addFileToDownloads$DirectInput.md)

[addFileToDownloads$Input](../type-aliases/addFileToDownloads$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file-1.md)\>

Promise<[File](../type-aliases/File.md)>

#### Defined in

dist/generated/types.d.ts:70224

***

### addLocalMessage()

> **addLocalMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Adds a local message to a chat. The message is persistent across application restarts only if the message database is used. Returns the added message

#### Parameters

• **parameters**: [`addLocalMessage$DirectInput`](../type-aliases/addLocalMessage$DirectInput.md)

[addLocalMessage$Input](../type-aliases/addLocalMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68416

***

### addLogMessage()

> **addLogMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a message to TDLib internal log. Can be called synchronously

#### Parameters

• **parameters**: [`addLogMessage$DirectInput`](../type-aliases/addLogMessage$DirectInput.md)

[addLogMessage$Input](../type-aliases/addLogMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72743

***

### addMessageReaction()

> **addMessageReaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a reaction or a tag to a message. Use getMessageAvailableReactions to receive the list of available reactions for the message

#### Parameters

• **parameters**: [`addMessageReaction$DirectInput`](../type-aliases/addMessageReaction$DirectInput.md)

[addMessageReaction$Input](../type-aliases/addMessageReaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68804

***

### addNetworkStatistics()

> **addNetworkStatistics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds the specified data to data usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`addNetworkStatistics$DirectInput`](../type-aliases/addNetworkStatistics$DirectInput.md)

[addNetworkStatistics$Input](../type-aliases/addNetworkStatistics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72155

***

### addProxy()

> **addProxy**(`parameters`): `Promise`\<[`proxy`](../type-aliases/proxy-1.md)\>

Adds a proxy server for network requests. Can be called before authorization

#### Parameters

• **parameters**: [`addProxy$DirectInput`](../type-aliases/addProxy$DirectInput.md)

[addProxy$Input](../type-aliases/addProxy$Input.md)

#### Returns

`Promise`\<[`proxy`](../type-aliases/proxy-1.md)\>

Promise<[Proxy](../type-aliases/Proxy.md)>

#### Defined in

dist/generated/types.d.ts:72638

***

### addQuickReplyShortcutInlineQueryResultMessage()

> **addQuickReplyShortcutInlineQueryResultMessage**(`parameters`): `Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage-1.md)\>

Adds a message to a quick reply shortcut via inline bot. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created.

- The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message

#### Parameters

• **parameters**: [`addQuickReplyShortcutInlineQueryResultMessage$DirectInput`](../type-aliases/addQuickReplyShortcutInlineQueryResultMessage$DirectInput.md)

[addQuickReplyShortcutInlineQueryResultMessage$Input](../type-aliases/addQuickReplyShortcutInlineQueryResultMessage$Input.md)

#### Returns

`Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage-1.md)\>

Promise<[QuickReplyMessage](../type-aliases/QuickReplyMessage.md)>

#### Defined in

dist/generated/types.d.ts:68658

***

### addQuickReplyShortcutMessage()

> **addQuickReplyShortcutMessage**(`parameters`): `Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage-1.md)\>

Adds a message to a quick reply shortcut. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created.

- The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message

#### Parameters

• **parameters**: [`addQuickReplyShortcutMessage$DirectInput`](../type-aliases/addQuickReplyShortcutMessage$DirectInput.md)

[addQuickReplyShortcutMessage$Input](../type-aliases/addQuickReplyShortcutMessage$Input.md)

#### Returns

`Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage-1.md)\>

Promise<[QuickReplyMessage](../type-aliases/QuickReplyMessage.md)>

#### Defined in

dist/generated/types.d.ts:68649

***

### addQuickReplyShortcutMessageAlbum()

> **addQuickReplyShortcutMessageAlbum**(`parameters`): `Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages-1.md)\>

Adds 2-10 messages grouped together into an album to a quick reply shortcut. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

#### Parameters

• **parameters**: [`addQuickReplyShortcutMessageAlbum$DirectInput`](../type-aliases/addQuickReplyShortcutMessageAlbum$DirectInput.md)

[addQuickReplyShortcutMessageAlbum$Input](../type-aliases/addQuickReplyShortcutMessageAlbum$Input.md)

#### Returns

`Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages-1.md)\>

Promise<[QuickReplyMessages](../type-aliases/QuickReplyMessages.md)>

#### Defined in

dist/generated/types.d.ts:68667

***

### addRecentSticker()

> **addRecentSticker**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first.

- Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to recent stickers

#### Parameters

• **parameters**: [`addRecentSticker$DirectInput`](../type-aliases/addRecentSticker$DirectInput.md)

[addRecentSticker$Input](../type-aliases/addRecentSticker$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70909

***

### addRecentlyFoundChat()

> **addRecentlyFoundChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a chat to the list of recently found chats. The chat is added to the beginning of the list. If the chat is already in the list, it will be removed from the list first

#### Parameters

• **parameters**: [`addRecentlyFoundChat$DirectInput`](../type-aliases/addRecentlyFoundChat$DirectInput.md)

[addRecentlyFoundChat$Input](../type-aliases/addRecentlyFoundChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67935

***

### addSavedAnimation()

> **addSavedAnimation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list. If the animation was already in the list, it is removed first.

- Only non-secret video animations with MIME type "video/mp4" can be added to the list

#### Parameters

• **parameters**: [`addSavedAnimation$DirectInput`](../type-aliases/addSavedAnimation$DirectInput.md)

[addSavedAnimation$Input](../type-aliases/addSavedAnimation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71032

***

### addSavedNotificationSound()

> **addSavedNotificationSound**(`parameters`): `Promise`\<[`notificationSound`](../type-aliases/notificationSound-1.md)\>

Adds a new notification sound to the list of saved notification sounds. The new notification sound is added to the top of the list. If it is already in the list, its position isn't changed

#### Parameters

• **parameters**: [`addSavedNotificationSound$DirectInput`](../type-aliases/addSavedNotificationSound$DirectInput.md)

[addSavedNotificationSound$Input](../type-aliases/addSavedNotificationSound$Input.md)

#### Returns

`Promise`\<[`notificationSound`](../type-aliases/notificationSound-1.md)\>

Promise<[NotificationSound](../type-aliases/NotificationSound.md)>

#### Defined in

dist/generated/types.d.ts:69767

***

### addStickerToSet()

> **addStickerToSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds a new sticker to a set

#### Parameters

• **parameters**: [`addStickerToSet$DirectInput`](../type-aliases/addStickerToSet$DirectInput.md)

[addStickerToSet$Input](../type-aliases/addStickerToSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72330

***

### allowBotToSendMessages()

> **allowBotToSendMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Allows the specified bot to send messages to the user

#### Parameters

• **parameters**: [`allowBotToSendMessages$DirectInput`](../type-aliases/allowBotToSendMessages$DirectInput.md)

[allowBotToSendMessages$Input](../type-aliases/allowBotToSendMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71389

***

### answerCallbackQuery()

> **answerCallbackQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the result of a callback query; for bots only

#### Parameters

• **parameters**: [`answerCallbackQuery$DirectInput`](../type-aliases/answerCallbackQuery$DirectInput.md)

[answerCallbackQuery$Input](../type-aliases/answerCallbackQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69097

***

### answerCustomQuery()

> **answerCustomQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Answers a custom query; for bots only

#### Parameters

• **parameters**: [`answerCustomQuery$DirectInput`](../type-aliases/answerCustomQuery$DirectInput.md)

[answerCustomQuery$Input](../type-aliases/answerCustomQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72561

***

### answerInlineQuery()

> **answerInlineQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the result of an inline query; for bots only

#### Parameters

• **parameters**: [`answerInlineQuery$DirectInput`](../type-aliases/answerInlineQuery$DirectInput.md)

[answerInlineQuery$Input](../type-aliases/answerInlineQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69032

***

### answerPreCheckoutQuery()

> **answerPreCheckoutQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the result of a pre-checkout query; for bots only

#### Parameters

• **parameters**: [`answerPreCheckoutQuery$DirectInput`](../type-aliases/answerPreCheckoutQuery$DirectInput.md)

[answerPreCheckoutQuery$Input](../type-aliases/answerPreCheckoutQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69111

***

### answerShippingQuery()

> **answerShippingQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the result of a shipping query; for bots only

#### Parameters

• **parameters**: [`answerShippingQuery$DirectInput`](../type-aliases/answerShippingQuery$DirectInput.md)

[answerShippingQuery$Input](../type-aliases/answerShippingQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69104

***

### answerWebAppQuery()

> **answerWebAppQuery**(`parameters`): `Promise`\<[`sentWebAppMessage`](../type-aliases/sentWebAppMessage-1.md)\>

Sets the result of interaction with a Web App and sends corresponding message on behalf of the user to the chat from which the query originated; for bots only

#### Parameters

• **parameters**: [`answerWebAppQuery$DirectInput`](../type-aliases/answerWebAppQuery$DirectInput.md)

[answerWebAppQuery$Input](../type-aliases/answerWebAppQuery$Input.md)

#### Returns

`Promise`\<[`sentWebAppMessage`](../type-aliases/sentWebAppMessage-1.md)\>

Promise<[SentWebAppMessage](../type-aliases/SentWebAppMessage.md)>

#### Defined in

dist/generated/types.d.ts:69083

***

### applyPremiumGiftCode()

> **applyPremiumGiftCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Applies a Telegram Premium gift code

#### Parameters

• **parameters**: [`applyPremiumGiftCode$DirectInput`](../type-aliases/applyPremiumGiftCode$DirectInput.md)

[applyPremiumGiftCode$Input](../type-aliases/applyPremiumGiftCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72477

***

### assignAppStoreTransaction()

> **assignAppStoreTransaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs server about a purchase through App Store. For official applications only

#### Parameters

• **parameters**: [`assignAppStoreTransaction$DirectInput`](../type-aliases/assignAppStoreTransaction$DirectInput.md)

[assignAppStoreTransaction$Input](../type-aliases/assignAppStoreTransaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72519

***

### assignGooglePlayTransaction()

> **assignGooglePlayTransaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs server about a purchase through Google Play. For official applications only

#### Parameters

• **parameters**: [`assignGooglePlayTransaction$DirectInput`](../type-aliases/assignGooglePlayTransaction$DirectInput.md)

[assignGooglePlayTransaction$Input](../type-aliases/assignGooglePlayTransaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72526

***

### banChatMember()

> **banChatMember**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Bans a member in a chat; requires can_restrict_members administrator right. Members can't be banned in private or secret chats. In supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first

#### Parameters

• **parameters**: [`banChatMember$DirectInput`](../type-aliases/banChatMember$DirectInput.md)

[banChatMember$Input](../type-aliases/banChatMember$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69704

***

### blockMessageSenderFromReplies()

> **blockMessageSenderFromReplies**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Blocks an original sender of a message in the Replies chat

#### Parameters

• **parameters**: [`blockMessageSenderFromReplies$DirectInput`](../type-aliases/blockMessageSenderFromReplies$DirectInput.md)

[blockMessageSenderFromReplies$Input](../type-aliases/blockMessageSenderFromReplies$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70667

***

### boostChat()

> **boostChat**(`parameters`): `Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots-1.md)\>

Boosts a chat and returns the list of available chat boost slots for the current user after the boost

#### Parameters

• **parameters**: [`boostChat$DirectInput`](../type-aliases/boostChat$DirectInput.md)

[boostChat$Input](../type-aliases/boostChat$Input.md)

#### Returns

`Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots-1.md)\>

Promise<[ChatBoostSlots](../type-aliases/ChatBoostSlots.md)>

#### Defined in

dist/generated/types.d.ts:70043

***

### canBotSendMessages()

> **canBotSendMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks whether the specified bot can send messages to the user. Returns a 404 error if can't and the access can be granted by call to allowBotToSendMessages

#### Parameters

• **parameters**: [`canBotSendMessages$DirectInput`](../type-aliases/canBotSendMessages$DirectInput.md)

[canBotSendMessages$Input](../type-aliases/canBotSendMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71382

***

### canPurchaseFromStore()

> **canPurchaseFromStore**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks whether an in-store purchase is possible. Must be called before any in-store purchase

#### Parameters

• **parameters**: [`canPurchaseFromStore$DirectInput`](../type-aliases/canPurchaseFromStore$DirectInput.md)

[canPurchaseFromStore$Input](../type-aliases/canPurchaseFromStore$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72512

***

### canSendMessageToUser()

> **canSendMessageToUser**(`parameters`): `Promise`\<[`CanSendMessageToUserResult`](../type-aliases/CanSendMessageToUserResult.md)\>

Check whether the current user can message another user or try to create a chat with them

#### Parameters

• **parameters**: [`canSendMessageToUser$DirectInput`](../type-aliases/canSendMessageToUser$DirectInput.md)

[canSendMessageToUser$Input](../type-aliases/canSendMessageToUser$Input.md)

#### Returns

`Promise`\<[`CanSendMessageToUserResult`](../type-aliases/CanSendMessageToUserResult.md)\>

Promise<[CanSendMessageToUserResult](../type-aliases/CanSendMessageToUserResult.md)>

#### Defined in

dist/generated/types.d.ts:71948

***

### canSendStory()

> **canSendStory**(`parameters`): `Promise`\<[`CanSendStoryResult`](../type-aliases/CanSendStoryResult.md)\>

Checks whether the current user can send a story on behalf of a chat; requires can_post_stories right for supergroup and channel chats

#### Parameters

• **parameters**: [`canSendStory$DirectInput`](../type-aliases/canSendStory$DirectInput.md)

[canSendStory$Input](../type-aliases/canSendStory$Input.md)

#### Returns

`Promise`\<[`CanSendStoryResult`](../type-aliases/CanSendStoryResult.md)\>

Promise<[CanSendStoryResult](../type-aliases/CanSendStoryResult.md)>

#### Defined in

dist/generated/types.d.ts:69851

***

### canTransferOwnership()

> **canTransferOwnership**(`parameters`): `Promise`\<[`CanTransferOwnershipResult`](../type-aliases/CanTransferOwnershipResult.md)\>

Checks whether the current session can be used to transfer a chat ownership to another user

#### Parameters

• **parameters**: [`canTransferOwnership$DirectInput`](../type-aliases/canTransferOwnership$DirectInput.md)

[canTransferOwnership$Input](../type-aliases/canTransferOwnership$Input.md)

#### Returns

`Promise`\<[`CanTransferOwnershipResult`](../type-aliases/CanTransferOwnershipResult.md)\>

Promise<[CanTransferOwnershipResult](../type-aliases/CanTransferOwnershipResult.md)>

#### Defined in

dist/generated/types.d.ts:69711

***

### cancelDownloadFile()

> **cancelDownloadFile**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Stops the downloading of a file. If a file has already been downloaded, does nothing

#### Parameters

• **parameters**: [`cancelDownloadFile$DirectInput`](../type-aliases/cancelDownloadFile$DirectInput.md)

[cancelDownloadFile$Input](../type-aliases/cancelDownloadFile$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70155

***

### cancelPasswordReset()

> **cancelPasswordReset**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Cancels reset of 2-step verification password. The method can be called if passwordState.pending_reset_date > 0

#### Parameters

• **parameters**: [`cancelPasswordReset$DirectInput`](../type-aliases/cancelPasswordReset$DirectInput.md)

[cancelPasswordReset$Input](../type-aliases/cancelPasswordReset$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67666

***

### cancelPreliminaryUploadFile()

> **cancelPreliminaryUploadFile**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Stops the preliminary uploading of a file. Supported only for files uploaded by using preliminaryUploadFile. For other files the behavior is undefined

#### Parameters

• **parameters**: [`cancelPreliminaryUploadFile$DirectInput`](../type-aliases/cancelPreliminaryUploadFile$DirectInput.md)

[cancelPreliminaryUploadFile$Input](../type-aliases/cancelPreliminaryUploadFile$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70180

***

### cancelRecoveryEmailAddressVerification()

> **cancelRecoveryEmailAddressVerification**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Cancels verification of the 2-step verification recovery email address

#### Parameters

• **parameters**: [`cancelRecoveryEmailAddressVerification$DirectInput`](../type-aliases/cancelRecoveryEmailAddressVerification$DirectInput.md)

[cancelRecoveryEmailAddressVerification$Input](../type-aliases/cancelRecoveryEmailAddressVerification$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Promise<[PasswordState](../type-aliases/PasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67631

***

### changeImportedContacts()

> **changeImportedContacts**(`parameters`): `Promise`\<[`importedContacts`](../type-aliases/importedContacts-1.md)\>

Changes imported contacts using the list of contacts saved on the device. Imports newly added contacts and, if at least the file database is enabled, deletes recently deleted contacts.

- Query result depends on the result of the previous query, so only one query is possible at the same time

#### Parameters

• **parameters**: [`changeImportedContacts$DirectInput`](../type-aliases/changeImportedContacts$DirectInput.md)

[changeImportedContacts$Input](../type-aliases/changeImportedContacts$Input.md)

#### Returns

`Promise`\<[`importedContacts`](../type-aliases/importedContacts-1.md)\>

Promise<[ImportedContacts](../type-aliases/ImportedContacts.md)>

#### Defined in

dist/generated/types.d.ts:70725

***

### changeStickerSet()

> **changeStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Installs/uninstalls or activates/archives a sticker set

#### Parameters

• **parameters**: [`changeStickerSet$DirectInput`](../type-aliases/changeStickerSet$DirectInput.md)

[changeStickerSet$Input](../type-aliases/changeStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70879

***

### checkAuthenticationBotToken()

> **checkAuthenticationBotToken**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks the authentication token of a bot; to log in as a bot. Works only when the current authorization state is authorizationStateWaitPhoneNumber. Can be used instead of setAuthenticationPhoneNumber and checkAuthenticationCode to log in

#### Parameters

• **parameters**: [`checkAuthenticationBotToken$DirectInput`](../type-aliases/checkAuthenticationBotToken$DirectInput.md)

[checkAuthenticationBotToken$Input](../type-aliases/checkAuthenticationBotToken$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67513

***

### checkAuthenticationCode()

> **checkAuthenticationCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks the authentication code. Works only when the current authorization state is authorizationStateWaitCode

#### Parameters

• **parameters**: [`checkAuthenticationCode$DirectInput`](../type-aliases/checkAuthenticationCode$DirectInput.md)

[checkAuthenticationCode$Input](../type-aliases/checkAuthenticationCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67439

***

### checkAuthenticationEmailCode()

> **checkAuthenticationEmailCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks the authentication of an email address. Works only when the current authorization state is authorizationStateWaitEmailCode

#### Parameters

• **parameters**: [`checkAuthenticationEmailCode$DirectInput`](../type-aliases/checkAuthenticationEmailCode$DirectInput.md)

[checkAuthenticationEmailCode$Input](../type-aliases/checkAuthenticationEmailCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67432

***

### checkAuthenticationPassword()

> **checkAuthenticationPassword**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks the 2-step verification password for correctness. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`checkAuthenticationPassword$DirectInput`](../type-aliases/checkAuthenticationPassword$DirectInput.md)

[checkAuthenticationPassword$Input](../type-aliases/checkAuthenticationPassword$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67471

***

### checkAuthenticationPasswordRecoveryCode()

> **checkAuthenticationPasswordRecoveryCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks whether a 2-step verification password recovery code sent to an email address is valid. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`checkAuthenticationPasswordRecoveryCode$DirectInput`](../type-aliases/checkAuthenticationPasswordRecoveryCode$DirectInput.md)

[checkAuthenticationPasswordRecoveryCode$Input](../type-aliases/checkAuthenticationPasswordRecoveryCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67485

***

### checkChatFolderInviteLink()

> **checkChatFolderInviteLink**(`parameters`): `Promise`\<[`chatFolderInviteLinkInfo`](../type-aliases/chatFolderInviteLinkInfo-1.md)\>

Checks the validity of an invite link for a chat folder and returns information about the corresponding chat folder

#### Parameters

• **parameters**: [`checkChatFolderInviteLink$DirectInput`](../type-aliases/checkChatFolderInviteLink$DirectInput.md)

[checkChatFolderInviteLink$Input](../type-aliases/checkChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLinkInfo`](../type-aliases/chatFolderInviteLinkInfo-1.md)\>

Promise<[ChatFolderInviteLinkInfo](../type-aliases/ChatFolderInviteLinkInfo.md)>

#### Defined in

dist/generated/types.d.ts:69430

***

### checkChatInviteLink()

> **checkChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLinkInfo`](../type-aliases/chatInviteLinkInfo-1.md)\>

Checks the validity of an invite link for a chat and returns information about the corresponding chat

#### Parameters

• **parameters**: [`checkChatInviteLink$DirectInput`](../type-aliases/checkChatInviteLink$DirectInput.md)

[checkChatInviteLink$Input](../type-aliases/checkChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLinkInfo`](../type-aliases/chatInviteLinkInfo-1.md)\>

Promise<[ChatInviteLinkInfo](../type-aliases/ChatInviteLinkInfo.md)>

#### Defined in

dist/generated/types.d.ts:70366

***

### checkChatUsername()

> **checkChatUsername**(`parameters`): `Promise`\<[`CheckChatUsernameResult`](../type-aliases/CheckChatUsernameResult.md)\>

Checks whether a username can be set for a chat

#### Parameters

• **parameters**: [`checkChatUsername$DirectInput`](../type-aliases/checkChatUsername$DirectInput.md)

[checkChatUsername$Input](../type-aliases/checkChatUsername$Input.md)

#### Returns

`Promise`\<[`CheckChatUsernameResult`](../type-aliases/CheckChatUsernameResult.md)\>

Promise<[CheckChatUsernameResult](../type-aliases/CheckChatUsernameResult.md)>

#### Defined in

dist/generated/types.d.ts:67963

***

### checkCreatedPublicChatsLimit()

> **checkCreatedPublicChatsLimit**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks whether the maximum number of owned public chats has been reached. Returns corresponding error if the limit was reached. The limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`checkCreatedPublicChatsLimit$DirectInput`](../type-aliases/checkCreatedPublicChatsLimit$DirectInput.md)

[checkCreatedPublicChatsLimit$Input](../type-aliases/checkCreatedPublicChatsLimit$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67977

***

### checkEmailAddressVerificationCode()

> **checkEmailAddressVerificationCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks the email address verification code for Telegram Passport

#### Parameters

• **parameters**: [`checkEmailAddressVerificationCode$DirectInput`](../type-aliases/checkEmailAddressVerificationCode$DirectInput.md)

[checkEmailAddressVerificationCode$Input](../type-aliases/checkEmailAddressVerificationCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72267

***

### checkLoginEmailAddressCode()

> **checkLoginEmailAddressCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks the login email address authentication

#### Parameters

• **parameters**: [`checkLoginEmailAddressCode$DirectInput`](../type-aliases/checkLoginEmailAddressCode$DirectInput.md)

[checkLoginEmailAddressCode$Input](../type-aliases/checkLoginEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67594

***

### checkPasswordRecoveryCode()

> **checkPasswordRecoveryCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks whether a 2-step verification password recovery code sent to an email address is valid

#### Parameters

• **parameters**: [`checkPasswordRecoveryCode$DirectInput`](../type-aliases/checkPasswordRecoveryCode$DirectInput.md)

[checkPasswordRecoveryCode$Input](../type-aliases/checkPasswordRecoveryCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67645

***

### checkPhoneNumberCode()

> **checkPhoneNumberCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Check the authentication code and completes the request for which the code was sent if appropriate

#### Parameters

• **parameters**: [`checkPhoneNumberCode$DirectInput`](../type-aliases/checkPhoneNumberCode$DirectInput.md)

[checkPhoneNumberCode$Input](../type-aliases/checkPhoneNumberCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71242

***

### checkPremiumGiftCode()

> **checkPremiumGiftCode**(`parameters`): `Promise`\<[`premiumGiftCodeInfo`](../type-aliases/premiumGiftCodeInfo-1.md)\>

Return information about a Telegram Premium gift code

#### Parameters

• **parameters**: [`checkPremiumGiftCode$DirectInput`](../type-aliases/checkPremiumGiftCode$DirectInput.md)

[checkPremiumGiftCode$Input](../type-aliases/checkPremiumGiftCode$Input.md)

#### Returns

`Promise`\<[`premiumGiftCodeInfo`](../type-aliases/premiumGiftCodeInfo-1.md)\>

Promise<[PremiumGiftCodeInfo](../type-aliases/PremiumGiftCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:72470

***

### checkQuickReplyShortcutName()

> **checkQuickReplyShortcutName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Checks validness of a name for a quick reply shortcut. Can be called synchronously

#### Parameters

• **parameters**: [`checkQuickReplyShortcutName$DirectInput`](../type-aliases/checkQuickReplyShortcutName$DirectInput.md)

[checkQuickReplyShortcutName$Input](../type-aliases/checkQuickReplyShortcutName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68598

***

### checkRecoveryEmailAddressCode()

> **checkRecoveryEmailAddressCode**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Checks the 2-step verification recovery email address verification code

#### Parameters

• **parameters**: [`checkRecoveryEmailAddressCode$DirectInput`](../type-aliases/checkRecoveryEmailAddressCode$DirectInput.md)

[checkRecoveryEmailAddressCode$Input](../type-aliases/checkRecoveryEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Promise<[PasswordState](../type-aliases/PasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67617

***

### checkStickerSetName()

> **checkStickerSetName**(`parameters`): `Promise`\<[`CheckStickerSetNameResult`](../type-aliases/CheckStickerSetNameResult.md)\>

Checks whether a name can be used for a new sticker set

#### Parameters

• **parameters**: [`checkStickerSetName$DirectInput`](../type-aliases/checkStickerSetName$DirectInput.md)

[checkStickerSetName$Input](../type-aliases/checkStickerSetName$Input.md)

#### Returns

`Promise`\<[`CheckStickerSetNameResult`](../type-aliases/CheckStickerSetNameResult.md)\>

Promise<[CheckStickerSetNameResult](../type-aliases/CheckStickerSetNameResult.md)>

#### Defined in

dist/generated/types.d.ts:72316

***

### cleanFileName()

> **cleanFileName**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`cleanFileName$DirectInput`](../type-aliases/cleanFileName$DirectInput.md)

[cleanFileName$Input](../type-aliases/cleanFileName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:68918

***

### clearAllDraftMessages()

> **clearAllDraftMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears message drafts in all chats

#### Parameters

• **parameters**: [`clearAllDraftMessages$DirectInput`](../type-aliases/clearAllDraftMessages$DirectInput.md)

[clearAllDraftMessages$Input](../type-aliases/clearAllDraftMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69746

***

### clearAutosaveSettingsExceptions()

> **clearAutosaveSettingsExceptions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears the list of all autosave settings exceptions. The method is guaranteed to work only after at least one call to getAutosaveSettings

#### Parameters

• **parameters**: [`clearAutosaveSettingsExceptions$DirectInput`](../type-aliases/clearAutosaveSettingsExceptions$DirectInput.md)

[clearAutosaveSettingsExceptions$Input](../type-aliases/clearAutosaveSettingsExceptions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72197

***

### clearImportedContacts()

> **clearImportedContacts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears all imported contacts, contact list remains unchanged

#### Parameters

• **parameters**: [`clearImportedContacts$DirectInput`](../type-aliases/clearImportedContacts$DirectInput.md)

[clearImportedContacts$Input](../type-aliases/clearImportedContacts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70732

***

### clearRecentEmojiStatuses()

> **clearRecentEmojiStatuses**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears the list of recently used emoji statuses for self status

#### Parameters

• **parameters**: [`clearRecentEmojiStatuses$DirectInput`](../type-aliases/clearRecentEmojiStatuses$DirectInput.md)

[clearRecentEmojiStatuses$Input](../type-aliases/clearRecentEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70113

***

### clearRecentReactions()

> **clearRecentReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears the list of recently used reactions

#### Parameters

• **parameters**: [`clearRecentReactions$DirectInput`](../type-aliases/clearRecentReactions$DirectInput.md)

[clearRecentReactions$Input](../type-aliases/clearRecentReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68797

***

### clearRecentStickers()

> **clearRecentStickers**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears the list of recently used stickers

#### Parameters

• **parameters**: [`clearRecentStickers$DirectInput`](../type-aliases/clearRecentStickers$DirectInput.md)

[clearRecentStickers$Input](../type-aliases/clearRecentStickers$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70923

***

### clearRecentlyFoundChats()

> **clearRecentlyFoundChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears the list of recently found chats

#### Parameters

• **parameters**: [`clearRecentlyFoundChats$DirectInput`](../type-aliases/clearRecentlyFoundChats$DirectInput.md)

[clearRecentlyFoundChats$Input](../type-aliases/clearRecentlyFoundChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67949

***

### clearSearchedForTags()

> **clearSearchedForTags**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Clears the list of recently searched for hashtags or cashtags

#### Parameters

• **parameters**: [`clearSearchedForTags$DirectInput`](../type-aliases/clearSearchedForTags$DirectInput.md)

[clearSearchedForTags$Input](../type-aliases/clearSearchedForTags$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68191

***

### clickAnimatedEmojiMessage()

> **clickAnimatedEmojiMessage**(`parameters`): `Promise`\<[`sticker`](../type-aliases/sticker-1.md)\>

Informs TDLib that a message with an animated emoji was clicked by the user. Returns a big animated sticker to be played or a 404 error if usual animation needs to be played

#### Parameters

• **parameters**: [`clickAnimatedEmojiMessage$DirectInput`](../type-aliases/clickAnimatedEmojiMessage$DirectInput.md)

[clickAnimatedEmojiMessage$Input](../type-aliases/clickAnimatedEmojiMessage$Input.md)

#### Returns

`Promise`\<[`sticker`](../type-aliases/sticker-1.md)\>

Promise<[Sticker](../type-aliases/Sticker.md)>

#### Defined in

dist/generated/types.d.ts:69192

***

### clickChatSponsoredMessage()

> **clickChatSponsoredMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that the user opened the sponsored chat via the button, the name, the photo, or a mention in the sponsored message

#### Parameters

• **parameters**: [`clickChatSponsoredMessage$DirectInput`](../type-aliases/clickChatSponsoredMessage$DirectInput.md)

[clickChatSponsoredMessage$Input](../type-aliases/clickChatSponsoredMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68270

***

### clickPremiumSubscriptionButton()

> **clickPremiumSubscriptionButton**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that the user clicked Premium subscription button on the Premium features screen

#### Parameters

• **parameters**: [`clickPremiumSubscriptionButton$DirectInput`](../type-aliases/clickPremiumSubscriptionButton$DirectInput.md)

[clickPremiumSubscriptionButton$Input](../type-aliases/clickPremiumSubscriptionButton$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72449

***

### close()

> **close**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Closes the TDLib instance. All databases will be flushed to disk and properly closed. After the close completes, updateAuthorizationState with authorizationStateClosed will be sent. Can be called before initialization

#### Parameters

• **parameters**: [`close$DirectInput`](../type-aliases/close$DirectInput.md)

[close$Input](../type-aliases/close$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67527

***

### closeChat()

> **closeChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that the chat is closed by the user. Many useful activities depend on the chat being opened or closed

#### Parameters

• **parameters**: [`closeChat$DirectInput`](../type-aliases/closeChat$DirectInput.md)

[closeChat$Input](../type-aliases/closeChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69167

***

### closeSecretChat()

> **closeSecretChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Closes a secret chat, effectively transferring its state to secretChatStateClosed

#### Parameters

• **parameters**: [`closeSecretChat$DirectInput`](../type-aliases/closeSecretChat$DirectInput.md)

[closeSecretChat$Input](../type-aliases/closeSecretChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71671

***

### closeStory()

> **closeStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that a story is closed by the user

#### Parameters

• **parameters**: [`closeStory$DirectInput`](../type-aliases/closeStory$DirectInput.md)

[closeStory$Input](../type-aliases/closeStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69955

***

### closeWebApp()

> **closeWebApp**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that a previously opened Web App was closed

#### Parameters

• **parameters**: [`closeWebApp$DirectInput`](../type-aliases/closeWebApp$DirectInput.md)

[closeWebApp$Input](../type-aliases/closeWebApp$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69076

***

### confirmQrCodeAuthentication()

> **confirmQrCodeAuthentication**(`parameters`): `Promise`\<[`session`](../type-aliases/session-1.md)\>

Confirms QR code authentication on another device. Returns created session on success

#### Parameters

• **parameters**: [`confirmQrCodeAuthentication$DirectInput`](../type-aliases/confirmQrCodeAuthentication$DirectInput.md)

[confirmQrCodeAuthentication$Input](../type-aliases/confirmQrCodeAuthentication$Input.md)

#### Returns

`Promise`\<[`session`](../type-aliases/session-1.md)\>

Promise<[Session](../type-aliases/Session.md)>

#### Defined in

dist/generated/types.d.ts:67543

***

### confirmSession()

> **confirmSession**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Confirms an unconfirmed session of the current user from another device

#### Parameters

• **parameters**: [`confirmSession$DirectInput`](../type-aliases/confirmSession$DirectInput.md)

[confirmSession$Input](../type-aliases/confirmSession$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71487

***

### createBasicGroupChat()

> **createBasicGroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Returns an existing chat corresponding to a known basic group

#### Parameters

• **parameters**: [`createBasicGroupChat$DirectInput`](../type-aliases/createBasicGroupChat$DirectInput.md)

[createBasicGroupChat$Input](../type-aliases/createBasicGroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:69262

***

### createBusinessChatLink()

> **createBusinessChatLink**(`parameters`): `Promise`\<[`businessChatLink`](../type-aliases/businessChatLink-1.md)\>

Creates a business chat link for the current account. Requires Telegram Business subscription. There can be up to getOption("business_chat_link_count_max") links created. Returns the created link

#### Parameters

• **parameters**: [`createBusinessChatLink$DirectInput`](../type-aliases/createBusinessChatLink$DirectInput.md)

[createBusinessChatLink$Input](../type-aliases/createBusinessChatLink$Input.md)

#### Returns

`Promise`\<[`businessChatLink`](../type-aliases/businessChatLink-1.md)\>

Promise<[BusinessChatLink](../type-aliases/BusinessChatLink.md)>

#### Defined in

dist/generated/types.d.ts:71291

***

### createCall()

> **createCall**(`parameters`): `Promise`\<[`callId`](../type-aliases/callId-1.md)\>

Creates a new call

#### Parameters

• **parameters**: [`createCall$DirectInput`](../type-aliases/createCall$DirectInput.md)

[createCall$Input](../type-aliases/createCall$Input.md)

#### Returns

`Promise`\<[`callId`](../type-aliases/callId-1.md)\>

Promise<[CallId](../type-aliases/CallId.md)>

#### Defined in

dist/generated/types.d.ts:70401

***

### createChatFolder()

> **createChatFolder**(`parameters`): `Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo-1.md)\>

Creates new chat folder. Returns information about the created chat folder. There can be up to getOption("chat_folder_count_max") chat folders, but the limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`createChatFolder$DirectInput`](../type-aliases/createChatFolder$DirectInput.md)

[createChatFolder$Input](../type-aliases/createChatFolder$Input.md)

#### Returns

`Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo-1.md)\>

Promise<[ChatFolderInfo](../type-aliases/ChatFolderInfo.md)>

#### Defined in

dist/generated/types.d.ts:69332

***

### createChatFolderInviteLink()

> **createChatFolderInviteLink**(`parameters`): `Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink-1.md)\>

Creates a new invite link for a chat folder. A link can be created for a chat folder if it has only pinned and included chats

#### Parameters

• **parameters**: [`createChatFolderInviteLink$DirectInput`](../type-aliases/createChatFolderInviteLink$DirectInput.md)

[createChatFolderInviteLink$Input](../type-aliases/createChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink-1.md)\>

Promise<[ChatFolderInviteLink](../type-aliases/ChatFolderInviteLink.md)>

#### Defined in

dist/generated/types.d.ts:69402

***

### createChatInviteLink()

> **createChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Creates a new invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat

#### Parameters

• **parameters**: [`createChatInviteLink$DirectInput`](../type-aliases/createChatInviteLink$DirectInput.md)

[createChatInviteLink$Input](../type-aliases/createChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink.md)>

#### Defined in

dist/generated/types.d.ts:70301

***

### createForumTopic()

> **createForumTopic**(`parameters`): `Promise`\<[`forumTopicInfo`](../type-aliases/forumTopicInfo-1.md)\>

Creates a topic in a forum supergroup chat; requires can_manage_topics administrator or can_create_topics member right in the supergroup

#### Parameters

• **parameters**: [`createForumTopic$DirectInput`](../type-aliases/createForumTopic$DirectInput.md)

[createForumTopic$Input](../type-aliases/createForumTopic$Input.md)

#### Returns

`Promise`\<[`forumTopicInfo`](../type-aliases/forumTopicInfo-1.md)\>

Promise<[ForumTopicInfo](../type-aliases/ForumTopicInfo.md)>

#### Defined in

dist/generated/types.d.ts:68699

***

### createInvoiceLink()

> **createInvoiceLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Creates a link for the given invoice; for bots only

#### Parameters

• **parameters**: [`createInvoiceLink$DirectInput`](../type-aliases/createInvoiceLink$DirectInput.md)

[createInvoiceLink$Input](../type-aliases/createInvoiceLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:71741

***

### createNewBasicGroupChat()

> **createNewBasicGroupChat**(`parameters`): `Promise`\<[`createdBasicGroupChat`](../type-aliases/createdBasicGroupChat-1.md)\>

Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns information about the newly created chat

#### Parameters

• **parameters**: [`createNewBasicGroupChat$DirectInput`](../type-aliases/createNewBasicGroupChat$DirectInput.md)

[createNewBasicGroupChat$Input](../type-aliases/createNewBasicGroupChat$Input.md)

#### Returns

`Promise`\<[`createdBasicGroupChat`](../type-aliases/createdBasicGroupChat-1.md)\>

Promise<[CreatedBasicGroupChat](../type-aliases/CreatedBasicGroupChat.md)>

#### Defined in

dist/generated/types.d.ts:69283

***

### createNewSecretChat()

> **createNewSecretChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Creates a new secret chat. Returns the newly created chat

#### Parameters

• **parameters**: [`createNewSecretChat$DirectInput`](../type-aliases/createNewSecretChat$DirectInput.md)

[createNewSecretChat$Input](../type-aliases/createNewSecretChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:69297

***

### createNewStickerSet()

> **createNewStickerSet**(`parameters`): `Promise`\<[`stickerSet`](../type-aliases/stickerSet-1.md)\>

Creates a new sticker set. Returns the newly created sticker set

#### Parameters

• **parameters**: [`createNewStickerSet$DirectInput`](../type-aliases/createNewStickerSet$DirectInput.md)

[createNewStickerSet$Input](../type-aliases/createNewStickerSet$Input.md)

#### Returns

`Promise`\<[`stickerSet`](../type-aliases/stickerSet-1.md)\>

Promise<[StickerSet](../type-aliases/StickerSet.md)>

#### Defined in

dist/generated/types.d.ts:72323

***

### createNewSupergroupChat()

> **createNewSupergroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created chat

#### Parameters

• **parameters**: [`createNewSupergroupChat$DirectInput`](../type-aliases/createNewSupergroupChat$DirectInput.md)

[createNewSupergroupChat$Input](../type-aliases/createNewSupergroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:69290

***

### createPrivateChat()

> **createPrivateChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Returns an existing chat corresponding to a given user

#### Parameters

• **parameters**: [`createPrivateChat$DirectInput`](../type-aliases/createPrivateChat$DirectInput.md)

[createPrivateChat$Input](../type-aliases/createPrivateChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:69255

***

### createSecretChat()

> **createSecretChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Returns an existing chat corresponding to a known secret chat

#### Parameters

• **parameters**: [`createSecretChat$DirectInput`](../type-aliases/createSecretChat$DirectInput.md)

[createSecretChat$Input](../type-aliases/createSecretChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:69276

***

### createSupergroupChat()

> **createSupergroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Returns an existing chat corresponding to a known supergroup or channel

#### Parameters

• **parameters**: [`createSupergroupChat$DirectInput`](../type-aliases/createSupergroupChat$DirectInput.md)

[createSupergroupChat$Input](../type-aliases/createSupergroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:69269

***

### createTemporaryPassword()

> **createTemporaryPassword**(`parameters`): `Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState-1.md)\>

Creates a new temporary password for processing payments

#### Parameters

• **parameters**: [`createTemporaryPassword$DirectInput`](../type-aliases/createTemporaryPassword$DirectInput.md)

[createTemporaryPassword$Input](../type-aliases/createTemporaryPassword$Input.md)

#### Returns

`Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState-1.md)\>

Promise<[TemporaryPasswordState](../type-aliases/TemporaryPasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67673

***

### createVideoChat()

> **createVideoChat**(`parameters`): `Promise`\<[`groupCallId`](../type-aliases/groupCallId-1.md)\>

Creates a video chat (a group call bound to a chat). Available only for basic groups, supergroups and channels; requires can_manage_video_chats administrator right

#### Parameters

• **parameters**: [`createVideoChat$DirectInput`](../type-aliases/createVideoChat$DirectInput.md)

[createVideoChat$Input](../type-aliases/createVideoChat$Input.md)

#### Returns

`Promise`\<[`groupCallId`](../type-aliases/groupCallId-1.md)\>

Promise<[GroupCallId](../type-aliases/GroupCallId.md)>

#### Defined in

dist/generated/types.d.ts:70464

***

### deleteAccount()

> **deleteAccount**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes the account of the current user, deleting all information associated with the user from the server. The phone number of the account can be used to create a new account.

- Can be called before authorization when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`deleteAccount$DirectInput`](../type-aliases/deleteAccount$DirectInput.md)

[deleteAccount$Input](../type-aliases/deleteAccount$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71985

***

### deleteAllCallMessages()

> **deleteAllCallMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all call messages

#### Parameters

• **parameters**: [`deleteAllCallMessages$DirectInput`](../type-aliases/deleteAllCallMessages$DirectInput.md)

[deleteAllCallMessages$Input](../type-aliases/deleteAllCallMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68198

***

### deleteAllRevokedChatInviteLinks()

> **deleteAllRevokedChatInviteLinks**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all revoked chat invite links created by a given chat administrator. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`deleteAllRevokedChatInviteLinks$DirectInput`](../type-aliases/deleteAllRevokedChatInviteLinks$DirectInput.md)

[deleteAllRevokedChatInviteLinks$Input](../type-aliases/deleteAllRevokedChatInviteLinks$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70359

***

### deleteBusinessChatLink()

> **deleteBusinessChatLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes a business chat link of the current account

#### Parameters

• **parameters**: [`deleteBusinessChatLink$DirectInput`](../type-aliases/deleteBusinessChatLink$DirectInput.md)

[deleteBusinessChatLink$Input](../type-aliases/deleteBusinessChatLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71305

***

### deleteBusinessConnectedBot()

> **deleteBusinessConnectedBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes the business bot that is connected to the current user account

#### Parameters

• **parameters**: [`deleteBusinessConnectedBot$DirectInput`](../type-aliases/deleteBusinessConnectedBot$DirectInput.md)

[deleteBusinessConnectedBot$Input](../type-aliases/deleteBusinessConnectedBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71263

***

### deleteChat()

> **deleteChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes a chat along with all messages in the corresponding chat for all chat members. For group chats this will release the usernames and remove all members.

- Use the field chat.can_be_deleted_for_all_users to find whether the method can be applied to the chat

#### Parameters

• **parameters**: [`deleteChat$DirectInput`](../type-aliases/deleteChat$DirectInput.md)

[deleteChat$Input](../type-aliases/deleteChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68090

***

### deleteChatBackground()

> **deleteChatBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes background in a specific chat

#### Parameters

• **parameters**: [`deleteChatBackground$DirectInput`](../type-aliases/deleteChatBackground$DirectInput.md)

[deleteChatBackground$Input](../type-aliases/deleteChatBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69530

***

### deleteChatFolder()

> **deleteChatFolder**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes existing chat folder

#### Parameters

• **parameters**: [`deleteChatFolder$DirectInput`](../type-aliases/deleteChatFolder$DirectInput.md)

[deleteChatFolder$Input](../type-aliases/deleteChatFolder$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69346

***

### deleteChatFolderInviteLink()

> **deleteChatFolderInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes an invite link for a chat folder

#### Parameters

• **parameters**: [`deleteChatFolderInviteLink$DirectInput`](../type-aliases/deleteChatFolderInviteLink$DirectInput.md)

[deleteChatFolderInviteLink$Input](../type-aliases/deleteChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69423

***

### deleteChatHistory()

> **deleteChatHistory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all messages in the chat. Use chat.can_be_deleted_only_for_self and chat.can_be_deleted_for_all_users fields to find whether and how the method can be applied to the chat

#### Parameters

• **parameters**: [`deleteChatHistory$DirectInput`](../type-aliases/deleteChatHistory$DirectInput.md)

[deleteChatHistory$Input](../type-aliases/deleteChatHistory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68081

***

### deleteChatMessagesByDate()

> **deleteChatMessagesByDate**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all messages between the specified dates in a chat. Supported only for private chats and basic groups. Messages sent in the last 30 seconds will not be deleted

#### Parameters

• **parameters**: [`deleteChatMessagesByDate$DirectInput`](../type-aliases/deleteChatMessagesByDate$DirectInput.md)

[deleteChatMessagesByDate$Input](../type-aliases/deleteChatMessagesByDate$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68437

***

### deleteChatMessagesBySender()

> **deleteChatMessagesBySender**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all messages sent by the specified message sender in a chat. Supported only for supergroups; requires can_delete_messages administrator privileges

#### Parameters

• **parameters**: [`deleteChatMessagesBySender$DirectInput`](../type-aliases/deleteChatMessagesBySender$DirectInput.md)

[deleteChatMessagesBySender$Input](../type-aliases/deleteChatMessagesBySender$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68430

***

### deleteChatReplyMarkup()

> **deleteChatReplyMarkup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a replyMarkupForceReply reply markup has been used. An updateChatReplyMarkup update will be sent if the reply markup is changed

#### Parameters

• **parameters**: [`deleteChatReplyMarkup$DirectInput`](../type-aliases/deleteChatReplyMarkup$DirectInput.md)

[deleteChatReplyMarkup$Input](../type-aliases/deleteChatReplyMarkup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69146

***

### deleteCommands()

> **deleteCommands**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes commands supported by the bot for the given user scope and language; for bots only

#### Parameters

• **parameters**: [`deleteCommands$DirectInput`](../type-aliases/deleteCommands$DirectInput.md)

[deleteCommands$Input](../type-aliases/deleteCommands$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71340

***

### deleteDefaultBackground()

> **deleteDefaultBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes default background for chats

#### Parameters

• **parameters**: [`deleteDefaultBackground$DirectInput`](../type-aliases/deleteDefaultBackground$DirectInput.md)

[deleteDefaultBackground$Input](../type-aliases/deleteDefaultBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71783

***

### deleteFile()

> **deleteFile**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes a file from the TDLib file cache

#### Parameters

• **parameters**: [`deleteFile$DirectInput`](../type-aliases/deleteFile$DirectInput.md)

[deleteFile$Input](../type-aliases/deleteFile$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70215

***

### deleteForumTopic()

> **deleteForumTopic**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all messages in a forum topic; requires can_delete_messages administrator right in the supergroup unless the user is creator of the topic, the topic has no messages from other users and has at most 11 messages

#### Parameters

• **parameters**: [`deleteForumTopic$DirectInput`](../type-aliases/deleteForumTopic$DirectInput.md)

[deleteForumTopic$Input](../type-aliases/deleteForumTopic$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68769

***

### deleteLanguagePack()

> **deleteLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all information about a language pack in the current localization target. The language pack which is currently in use (including base language pack) or is being synchronized can't be deleted.

- Can be called before authorization

#### Parameters

• **parameters**: [`deleteLanguagePack$DirectInput`](../type-aliases/deleteLanguagePack$DirectInput.md)

[deleteLanguagePack$Input](../type-aliases/deleteLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71871

***

### deleteMessages()

> **deleteMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes messages

#### Parameters

• **parameters**: [`deleteMessages$DirectInput`](../type-aliases/deleteMessages$DirectInput.md)

[deleteMessages$Input](../type-aliases/deleteMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68423

***

### deletePassportElement()

> **deletePassportElement**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes a Telegram Passport element

#### Parameters

• **parameters**: [`deletePassportElement$DirectInput`](../type-aliases/deletePassportElement$DirectInput.md)

[deletePassportElement$Input](../type-aliases/deletePassportElement$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72232

***

### deleteProfilePhoto()

> **deleteProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes a profile photo

#### Parameters

• **parameters**: [`deleteProfilePhoto$DirectInput`](../type-aliases/deleteProfilePhoto$DirectInput.md)

[deleteProfilePhoto$Input](../type-aliases/deleteProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71088

***

### deleteQuickReplyShortcut()

> **deleteQuickReplyShortcut**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes a quick reply shortcut

#### Parameters

• **parameters**: [`deleteQuickReplyShortcut$DirectInput`](../type-aliases/deleteQuickReplyShortcut$DirectInput.md)

[deleteQuickReplyShortcut$Input](../type-aliases/deleteQuickReplyShortcut$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68619

***

### deleteQuickReplyShortcutMessages()

> **deleteQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes specified quick reply messages

#### Parameters

• **parameters**: [`deleteQuickReplyShortcutMessages$DirectInput`](../type-aliases/deleteQuickReplyShortcutMessages$DirectInput.md)

[deleteQuickReplyShortcutMessages$Input](../type-aliases/deleteQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68640

***

### deleteRevokedChatInviteLink()

> **deleteRevokedChatInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes revoked chat invite links. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`deleteRevokedChatInviteLink$DirectInput`](../type-aliases/deleteRevokedChatInviteLink$DirectInput.md)

[deleteRevokedChatInviteLink$Input](../type-aliases/deleteRevokedChatInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70352

***

### deleteSavedCredentials()

> **deleteSavedCredentials**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes saved credentials for all payment provider bots

#### Parameters

• **parameters**: [`deleteSavedCredentials$DirectInput`](../type-aliases/deleteSavedCredentials$DirectInput.md)

[deleteSavedCredentials$Input](../type-aliases/deleteSavedCredentials$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71734

***

### deleteSavedMessagesTopicHistory()

> **deleteSavedMessagesTopicHistory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all messages in a Saved Messages topic

#### Parameters

• **parameters**: [`deleteSavedMessagesTopicHistory$DirectInput`](../type-aliases/deleteSavedMessagesTopicHistory$DirectInput.md)

[deleteSavedMessagesTopicHistory$Input](../type-aliases/deleteSavedMessagesTopicHistory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68028

***

### deleteSavedMessagesTopicMessagesByDate()

> **deleteSavedMessagesTopicMessagesByDate**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes all messages between the specified dates in a Saved Messages topic. Messages sent in the last 30 seconds will not be deleted

#### Parameters

• **parameters**: [`deleteSavedMessagesTopicMessagesByDate$DirectInput`](../type-aliases/deleteSavedMessagesTopicMessagesByDate$DirectInput.md)

[deleteSavedMessagesTopicMessagesByDate$Input](../type-aliases/deleteSavedMessagesTopicMessagesByDate$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68035

***

### deleteSavedOrderInfo()

> **deleteSavedOrderInfo**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes saved order information

#### Parameters

• **parameters**: [`deleteSavedOrderInfo$DirectInput`](../type-aliases/deleteSavedOrderInfo$DirectInput.md)

[deleteSavedOrderInfo$Input](../type-aliases/deleteSavedOrderInfo$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71727

***

### deleteStickerSet()

> **deleteStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Completely deletes a sticker set

#### Parameters

• **parameters**: [`deleteStickerSet$DirectInput`](../type-aliases/deleteStickerSet$DirectInput.md)

[deleteStickerSet$Input](../type-aliases/deleteStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72365

***

### deleteStory()

> **deleteStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Deletes a previously sent story. Can be called only if story.can_be_deleted == true

#### Parameters

• **parameters**: [`deleteStory$DirectInput`](../type-aliases/deleteStory$DirectInput.md)

[deleteStory$Input](../type-aliases/deleteStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69886

***

### destroy()

> **destroy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in the list of all active sessions. All local data will be destroyed.

- After the destruction completes updateAuthorizationState with authorizationStateClosed will be sent. Can be called before authorization

#### Parameters

• **parameters**: [`destroy$DirectInput`](../type-aliases/destroy$DirectInput.md)

[destroy$Input](../type-aliases/destroy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67536

***

### disableAllSupergroupUsernames()

> **disableAllSupergroupUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Disables all active non-editable usernames of a supergroup or channel, requires owner privileges in the supergroup or channel

#### Parameters

• **parameters**: [`disableAllSupergroupUsernames$DirectInput`](../type-aliases/disableAllSupergroupUsernames$DirectInput.md)

[disableAllSupergroupUsernames$Input](../type-aliases/disableAllSupergroupUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71552

***

### disableProxy()

> **disableProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Disables the currently enabled proxy. Can be called before authorization

#### Parameters

• **parameters**: [`disableProxy$DirectInput`](../type-aliases/disableProxy$DirectInput.md)

[disableProxy$Input](../type-aliases/disableProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72659

***

### discardCall()

> **discardCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Discards a call

#### Parameters

• **parameters**: [`discardCall$DirectInput`](../type-aliases/discardCall$DirectInput.md)

[discardCall$Input](../type-aliases/discardCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70422

***

### disconnectAllWebsites()

> **disconnectAllWebsites**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Disconnects all websites from the current user's Telegram account

#### Parameters

• **parameters**: [`disconnectAllWebsites$DirectInput`](../type-aliases/disconnectAllWebsites$DirectInput.md)

[disconnectAllWebsites$Input](../type-aliases/disconnectAllWebsites$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71529

***

### disconnectWebsite()

> **disconnectWebsite**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Disconnects website from the current user's Telegram account

#### Parameters

• **parameters**: [`disconnectWebsite$DirectInput`](../type-aliases/disconnectWebsite$DirectInput.md)

[disconnectWebsite$Input](../type-aliases/disconnectWebsite$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71522

***

### downloadFile()

> **downloadFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file-1.md)\>

Downloads a file from the cloud. Download progress and completion of the download will be notified through updateFile updates

#### Parameters

• **parameters**: [`downloadFile$DirectInput`](../type-aliases/downloadFile$DirectInput.md)

[downloadFile$Input](../type-aliases/downloadFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file-1.md)\>

Promise<[File](../type-aliases/File.md)>

#### Defined in

dist/generated/types.d.ts:70141

***

### editBusinessChatLink()

> **editBusinessChatLink**(`parameters`): `Promise`\<[`businessChatLink`](../type-aliases/businessChatLink-1.md)\>

Edits a business chat link of the current account. Requires Telegram Business subscription. Returns the edited link

#### Parameters

• **parameters**: [`editBusinessChatLink$DirectInput`](../type-aliases/editBusinessChatLink$DirectInput.md)

[editBusinessChatLink$Input](../type-aliases/editBusinessChatLink$Input.md)

#### Returns

`Promise`\<[`businessChatLink`](../type-aliases/businessChatLink-1.md)\>

Promise<[BusinessChatLink](../type-aliases/BusinessChatLink.md)>

#### Defined in

dist/generated/types.d.ts:71298

***

### editBusinessMessageCaption()

> **editBusinessMessageCaption**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Edits the caption of a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageCaption$DirectInput`](../type-aliases/editBusinessMessageCaption$DirectInput.md)

[editBusinessMessageCaption$Input](../type-aliases/editBusinessMessageCaption$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage.md)>

#### Defined in

dist/generated/types.d.ts:68577

***

### editBusinessMessageLiveLocation()

> **editBusinessMessageLiveLocation**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Edits the content of a live location in a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageLiveLocation$DirectInput`](../type-aliases/editBusinessMessageLiveLocation$DirectInput.md)

[editBusinessMessageLiveLocation$Input](../type-aliases/editBusinessMessageLiveLocation$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage.md)>

#### Defined in

dist/generated/types.d.ts:68563

***

### editBusinessMessageMedia()

> **editBusinessMessageMedia**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Edits the content of a message with an animation, an audio, a document, a photo or a video in a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageMedia$DirectInput`](../type-aliases/editBusinessMessageMedia$DirectInput.md)

[editBusinessMessageMedia$Input](../type-aliases/editBusinessMessageMedia$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage.md)>

#### Defined in

dist/generated/types.d.ts:68570

***

### editBusinessMessageReplyMarkup()

> **editBusinessMessageReplyMarkup**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Edits the reply markup of a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageReplyMarkup$DirectInput`](../type-aliases/editBusinessMessageReplyMarkup$DirectInput.md)

[editBusinessMessageReplyMarkup$Input](../type-aliases/editBusinessMessageReplyMarkup$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage.md)>

#### Defined in

dist/generated/types.d.ts:68584

***

### editBusinessMessageText()

> **editBusinessMessageText**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Edits the text of a text or game message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageText$DirectInput`](../type-aliases/editBusinessMessageText$DirectInput.md)

[editBusinessMessageText$Input](../type-aliases/editBusinessMessageText$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage.md)>

#### Defined in

dist/generated/types.d.ts:68556

***

### editChatFolder()

> **editChatFolder**(`parameters`): `Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo-1.md)\>

Edits existing chat folder. Returns information about the edited chat folder

#### Parameters

• **parameters**: [`editChatFolder$DirectInput`](../type-aliases/editChatFolder$DirectInput.md)

[editChatFolder$Input](../type-aliases/editChatFolder$Input.md)

#### Returns

`Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo-1.md)\>

Promise<[ChatFolderInfo](../type-aliases/ChatFolderInfo.md)>

#### Defined in

dist/generated/types.d.ts:69339

***

### editChatFolderInviteLink()

> **editChatFolderInviteLink**(`parameters`): `Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink-1.md)\>

Edits an invite link for a chat folder

#### Parameters

• **parameters**: [`editChatFolderInviteLink$DirectInput`](../type-aliases/editChatFolderInviteLink$DirectInput.md)

[editChatFolderInviteLink$Input](../type-aliases/editChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink-1.md)\>

Promise<[ChatFolderInviteLink](../type-aliases/ChatFolderInviteLink.md)>

#### Defined in

dist/generated/types.d.ts:69416

***

### editChatInviteLink()

> **editChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Edits a non-primary invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`editChatInviteLink$DirectInput`](../type-aliases/editChatInviteLink$DirectInput.md)

[editChatInviteLink$Input](../type-aliases/editChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink.md)>

#### Defined in

dist/generated/types.d.ts:70308

***

### editCustomLanguagePackInfo()

> **editCustomLanguagePackInfo**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits information about a custom local language pack in the current localization target. Can be called before authorization

#### Parameters

• **parameters**: [`editCustomLanguagePackInfo$DirectInput`](../type-aliases/editCustomLanguagePackInfo$DirectInput.md)

[editCustomLanguagePackInfo$Input](../type-aliases/editCustomLanguagePackInfo$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71855

***

### editForumTopic()

> **editForumTopic**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits title and icon of a topic in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic

#### Parameters

• **parameters**: [`editForumTopic$DirectInput`](../type-aliases/editForumTopic$DirectInput.md)

[editForumTopic$Input](../type-aliases/editForumTopic$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68706

***

### editInlineMessageCaption()

> **editInlineMessageCaption**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits the caption of an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageCaption$DirectInput`](../type-aliases/editInlineMessageCaption$DirectInput.md)

[editInlineMessageCaption$Input](../type-aliases/editInlineMessageCaption$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68512

***

### editInlineMessageLiveLocation()

> **editInlineMessageLiveLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits the content of a live location in an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageLiveLocation$DirectInput`](../type-aliases/editInlineMessageLiveLocation$DirectInput.md)

[editInlineMessageLiveLocation$Input](../type-aliases/editInlineMessageLiveLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68498

***

### editInlineMessageMedia()

> **editInlineMessageMedia**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits the content of a message with an animation, an audio, a document, a photo or a video in an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageMedia$DirectInput`](../type-aliases/editInlineMessageMedia$DirectInput.md)

[editInlineMessageMedia$Input](../type-aliases/editInlineMessageMedia$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68505

***

### editInlineMessageReplyMarkup()

> **editInlineMessageReplyMarkup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits the reply markup of an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageReplyMarkup$DirectInput`](../type-aliases/editInlineMessageReplyMarkup$DirectInput.md)

[editInlineMessageReplyMarkup$Input](../type-aliases/editInlineMessageReplyMarkup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68519

***

### editInlineMessageText()

> **editInlineMessageText**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits the text of an inline text or game message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageText$DirectInput`](../type-aliases/editInlineMessageText$DirectInput.md)

[editInlineMessageText$Input](../type-aliases/editInlineMessageText$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68491

***

### editMessageCaption()

> **editMessageCaption**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Edits the message content caption. Returns the edited message after the edit is completed on the server side.

- Can be used only if message.can_be_edited == true

#### Parameters

• **parameters**: [`editMessageCaption$DirectInput`](../type-aliases/editMessageCaption$DirectInput.md)

[editMessageCaption$Input](../type-aliases/editMessageCaption$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68475

***

### editMessageLiveLocation()

> **editMessageLiveLocation**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live location.

- Returns the edited message after the edit is completed on the server side. Can be used only if message.can_be_edited == true

#### Parameters

• **parameters**: [`editMessageLiveLocation$DirectInput`](../type-aliases/editMessageLiveLocation$DirectInput.md)

[editMessageLiveLocation$Input](../type-aliases/editMessageLiveLocation$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68455

***

### editMessageMedia()

> **editMessageMedia**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Edits the content of a message with an animation, an audio, a document, a photo or a video, including message caption. If only the caption needs to be edited, use editMessageCaption instead.

- The media can't be edited if the message was set to self-destruct or to a self-destructing media. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa.

- Returns the edited message after the edit is completed on the server side. Can be used only if message.can_be_edited == true

#### Parameters

• **parameters**: [`editMessageMedia$DirectInput`](../type-aliases/editMessageMedia$DirectInput.md)

[editMessageMedia$Input](../type-aliases/editMessageMedia$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68466

***

### editMessageReplyMarkup()

> **editMessageReplyMarkup**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server side.

- Can be used only if message.can_be_edited == true

#### Parameters

• **parameters**: [`editMessageReplyMarkup$DirectInput`](../type-aliases/editMessageReplyMarkup$DirectInput.md)

[editMessageReplyMarkup$Input](../type-aliases/editMessageReplyMarkup$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68484

***

### editMessageSchedulingState()

> **editMessageSchedulingState**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded together with the message will be also changed

#### Parameters

• **parameters**: [`editMessageSchedulingState$DirectInput`](../type-aliases/editMessageSchedulingState$DirectInput.md)

[editMessageSchedulingState$Input](../type-aliases/editMessageSchedulingState$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68526

***

### editMessageText()

> **editMessageText**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the server side.

- Can be used only if message.can_be_edited == true

#### Parameters

• **parameters**: [`editMessageText$DirectInput`](../type-aliases/editMessageText$DirectInput.md)

[editMessageText$Input](../type-aliases/editMessageText$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68446

***

### editProxy()

> **editProxy**(`parameters`): `Promise`\<[`proxy`](../type-aliases/proxy-1.md)\>

Edits an existing proxy server for network requests. Can be called before authorization

#### Parameters

• **parameters**: [`editProxy$DirectInput`](../type-aliases/editProxy$DirectInput.md)

[editProxy$Input](../type-aliases/editProxy$Input.md)

#### Returns

`Promise`\<[`proxy`](../type-aliases/proxy-1.md)\>

Promise<[Proxy](../type-aliases/Proxy.md)>

#### Defined in

dist/generated/types.d.ts:72645

***

### editQuickReplyMessage()

> **editQuickReplyMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Asynchronously edits the text, media or caption of a quick reply message. Use quickReplyMessage.can_be_edited to check whether a message can be edited.

- Text message can be edited only to a text message. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa

#### Parameters

• **parameters**: [`editQuickReplyMessage$DirectInput`](../type-aliases/editQuickReplyMessage$DirectInput.md)

[editQuickReplyMessage$Input](../type-aliases/editQuickReplyMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68685

***

### editStory()

> **editStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes content and caption of a story. Can be called only if story.can_be_edited == true

#### Parameters

• **parameters**: [`editStory$DirectInput`](../type-aliases/editStory$DirectInput.md)

[editStory$Input](../type-aliases/editStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69865

***

### enableProxy()

> **enableProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization

#### Parameters

• **parameters**: [`enableProxy$DirectInput`](../type-aliases/enableProxy$DirectInput.md)

[enableProxy$Input](../type-aliases/enableProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72652

***

### endGroupCall()

> **endGroupCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Ends a group call. Requires groupCall.can_be_managed

#### Parameters

• **parameters**: [`endGroupCall$DirectInput`](../type-aliases/endGroupCall$DirectInput.md)

[endGroupCall$Input](../type-aliases/endGroupCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70639

***

### endGroupCallRecording()

> **endGroupCallRecording**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Ends recording of an active group call. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`endGroupCallRecording$DirectInput`](../type-aliases/endGroupCallRecording$DirectInput.md)

[endGroupCallRecording$Input](../type-aliases/endGroupCallRecording$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70576

***

### endGroupCallScreenSharing()

> **endGroupCallScreenSharing**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Ends screen sharing in a joined group call

#### Parameters

• **parameters**: [`endGroupCallScreenSharing$DirectInput`](../type-aliases/endGroupCallScreenSharing$DirectInput.md)

[endGroupCallScreenSharing$Input](../type-aliases/endGroupCallScreenSharing$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70527

***

### finishFileGeneration()

> **finishFileGeneration**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Finishes the file generation

#### Parameters

• **parameters**: [`finishFileGeneration$DirectInput`](../type-aliases/finishFileGeneration$DirectInput.md)

[finishFileGeneration$Input](../type-aliases/finishFileGeneration$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70201

***

### forwardMessages()

> **forwardMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in message_ids. If a message can't be forwarded, null will be returned instead of the message

#### Parameters

• **parameters**: [`forwardMessages$DirectInput`](../type-aliases/forwardMessages$DirectInput.md)

[forwardMessages$Input](../type-aliases/forwardMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68393

***

### getAccountTtl()

> **getAccountTtl**(`parameters`): `Promise`\<[`accountTtl`](../type-aliases/accountTtl-1.md)\>

Returns the period of inactivity after which the account of the current user will automatically be deleted

#### Parameters

• **parameters**: [`getAccountTtl$DirectInput`](../type-aliases/getAccountTtl$DirectInput.md)

[getAccountTtl$Input](../type-aliases/getAccountTtl$Input.md)

#### Returns

`Promise`\<[`accountTtl`](../type-aliases/accountTtl-1.md)\>

Promise<[AccountTtl](../type-aliases/AccountTtl.md)>

#### Defined in

dist/generated/types.d.ts:71976

***

### getActiveLiveLocationMessages()

> **getActiveLiveLocationMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Returns all active live locations that need to be updated by the application. The list is persistent across application restarts only if the message database is used

#### Parameters

• **parameters**: [`getActiveLiveLocationMessages$DirectInput`](../type-aliases/getActiveLiveLocationMessages$DirectInput.md)

[getActiveLiveLocationMessages$Input](../type-aliases/getActiveLiveLocationMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68212

***

### getActiveSessions()

> **getActiveSessions**(`parameters`): `Promise`\<[`sessions`](../type-aliases/sessions-1.md)\>

Returns all active sessions of the current user

#### Parameters

• **parameters**: [`getActiveSessions$DirectInput`](../type-aliases/getActiveSessions$DirectInput.md)

[getActiveSessions$Input](../type-aliases/getActiveSessions$Input.md)

#### Returns

`Promise`\<[`sessions`](../type-aliases/sessions-1.md)\>

Promise<[Sessions](../type-aliases/Sessions.md)>

#### Defined in

dist/generated/types.d.ts:71466

***

### getAllPassportElements()

> **getAllPassportElements**(`parameters`): `Promise`\<[`passportElements`](../type-aliases/passportElements-1.md)\>

Returns all available Telegram Passport elements

#### Parameters

• **parameters**: [`getAllPassportElements$DirectInput`](../type-aliases/getAllPassportElements$DirectInput.md)

[getAllPassportElements$Input](../type-aliases/getAllPassportElements$Input.md)

#### Returns

`Promise`\<[`passportElements`](../type-aliases/passportElements-1.md)\>

Promise<[PassportElements](../type-aliases/PassportElements.md)>

#### Defined in

dist/generated/types.d.ts:72218

***

### getAllStickerEmojis()

> **getAllStickerEmojis**(`parameters`): `Promise`\<[`emojis`](../type-aliases/emojis-1.md)\>

Returns unique emoji that correspond to stickers to be found by the getStickers(sticker_type, query, 1000000, chat_id)

#### Parameters

• **parameters**: [`getAllStickerEmojis$DirectInput`](../type-aliases/getAllStickerEmojis$DirectInput.md)

[getAllStickerEmojis$Input](../type-aliases/getAllStickerEmojis$Input.md)

#### Returns

`Promise`\<[`emojis`](../type-aliases/emojis-1.md)\>

Promise<[Emojis](../type-aliases/Emojis.md)>

#### Defined in

dist/generated/types.d.ts:70795

***

### getAnimatedEmoji()

> **getAnimatedEmoji**(`parameters`): `Promise`\<[`animatedEmoji`](../type-aliases/animatedEmoji-1.md)\>

Returns an animated emoji corresponding to a given emoji. Returns a 404 error if the emoji has no animated emoji

#### Parameters

• **parameters**: [`getAnimatedEmoji$DirectInput`](../type-aliases/getAnimatedEmoji$DirectInput.md)

[getAnimatedEmoji$Input](../type-aliases/getAnimatedEmoji$Input.md)

#### Returns

`Promise`\<[`animatedEmoji`](../type-aliases/animatedEmoji-1.md)\>

Promise<[AnimatedEmoji](../type-aliases/AnimatedEmoji.md)>

#### Defined in

dist/generated/types.d.ts:70981

***

### getApplicationConfig()

> **getApplicationConfig**(`parameters`): `Promise`\<[`JsonValue`](../type-aliases/JsonValue.md)\>

Returns application config, provided by the server. Can be called before authorization

#### Parameters

• **parameters**: [`getApplicationConfig$DirectInput`](../type-aliases/getApplicationConfig$DirectInput.md)

[getApplicationConfig$Input](../type-aliases/getApplicationConfig$Input.md)

#### Returns

`Promise`\<[`JsonValue`](../type-aliases/JsonValue.md)\>

Promise<[JsonValue](../type-aliases/JsonValue.md)>

#### Defined in

dist/generated/types.d.ts:72617

***

### getApplicationDownloadLink()

> **getApplicationDownloadLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns the link for downloading official Telegram application to be used when the current user invites friends to Telegram

#### Parameters

• **parameters**: [`getApplicationDownloadLink$DirectInput`](../type-aliases/getApplicationDownloadLink$DirectInput.md)

[getApplicationDownloadLink$Input](../type-aliases/getApplicationDownloadLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:72631

***

### getArchiveChatListSettings()

> **getArchiveChatListSettings**(`parameters`): `Promise`\<[`archiveChatListSettings`](../type-aliases/archiveChatListSettings-1.md)\>

Returns settings for automatic moving of chats to and from the Archive chat lists

#### Parameters

• **parameters**: [`getArchiveChatListSettings$DirectInput`](../type-aliases/getArchiveChatListSettings$DirectInput.md)

[getArchiveChatListSettings$Input](../type-aliases/getArchiveChatListSettings$Input.md)

#### Returns

`Promise`\<[`archiveChatListSettings`](../type-aliases/archiveChatListSettings-1.md)\>

Promise<[ArchiveChatListSettings](../type-aliases/ArchiveChatListSettings.md)>

#### Defined in

dist/generated/types.d.ts:69458

***

### getArchivedStickerSets()

> **getArchivedStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Returns a list of archived sticker sets

#### Parameters

• **parameters**: [`getArchivedStickerSets$DirectInput`](../type-aliases/getArchivedStickerSets$DirectInput.md)

[getArchivedStickerSets$Input](../type-aliases/getArchivedStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Promise<[StickerSets](../type-aliases/StickerSets.md)>

#### Defined in

dist/generated/types.d.ts:70830

***

### getAttachedStickerSets()

> **getAttachedStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Returns a list of sticker sets attached to a file, including regular, mask, and emoji sticker sets. Currently, only animations, photos, and videos can have attached sticker sets

#### Parameters

• **parameters**: [`getAttachedStickerSets$DirectInput`](../type-aliases/getAttachedStickerSets$DirectInput.md)

[getAttachedStickerSets$Input](../type-aliases/getAttachedStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Promise<[StickerSets](../type-aliases/StickerSets.md)>

#### Defined in

dist/generated/types.d.ts:70844

***

### getAttachmentMenuBot()

> **getAttachmentMenuBot**(`parameters`): `Promise`\<[`attachmentMenuBot`](../type-aliases/attachmentMenuBot-1.md)\>

Returns information about a bot that can be added to attachment or side menu

#### Parameters

• **parameters**: [`getAttachmentMenuBot$DirectInput`](../type-aliases/getAttachmentMenuBot$DirectInput.md)

[getAttachmentMenuBot$Input](../type-aliases/getAttachmentMenuBot$Input.md)

#### Returns

`Promise`\<[`attachmentMenuBot`](../type-aliases/attachmentMenuBot-1.md)\>

Promise<[AttachmentMenuBot](../type-aliases/AttachmentMenuBot.md)>

#### Defined in

dist/generated/types.d.ts:70078

***

### getAuthorizationState()

> **getAuthorizationState**(`parameters`): `Promise`\<[`AuthorizationState`](../type-aliases/AuthorizationState.md)\>

Returns the current authorization state; this is an offline request. For informational purposes only. Use updateAuthorizationState instead to maintain the current authorization state. Can be called before initialization

#### Parameters

• **parameters**: [`getAuthorizationState$DirectInput`](../type-aliases/getAuthorizationState$DirectInput.md)

[getAuthorizationState$Input](../type-aliases/getAuthorizationState$Input.md)

#### Returns

`Promise`\<[`AuthorizationState`](../type-aliases/AuthorizationState.md)\>

Promise<[AuthorizationState](../type-aliases/AuthorizationState.md)>

#### Defined in

dist/generated/types.d.ts:67393

***

### getAutoDownloadSettingsPresets()

> **getAutoDownloadSettingsPresets**(`parameters`): `Promise`\<[`autoDownloadSettingsPresets`](../type-aliases/autoDownloadSettingsPresets-1.md)\>

Returns auto-download settings presets for the current user

#### Parameters

• **parameters**: [`getAutoDownloadSettingsPresets$DirectInput`](../type-aliases/getAutoDownloadSettingsPresets$DirectInput.md)

[getAutoDownloadSettingsPresets$Input](../type-aliases/getAutoDownloadSettingsPresets$Input.md)

#### Returns

`Promise`\<[`autoDownloadSettingsPresets`](../type-aliases/autoDownloadSettingsPresets-1.md)\>

Promise<[AutoDownloadSettingsPresets](../type-aliases/AutoDownloadSettingsPresets.md)>

#### Defined in

dist/generated/types.d.ts:72169

***

### getAutosaveSettings()

> **getAutosaveSettings**(`parameters`): `Promise`\<[`autosaveSettings`](../type-aliases/autosaveSettings-1.md)\>

Returns autosave settings for the current user

#### Parameters

• **parameters**: [`getAutosaveSettings$DirectInput`](../type-aliases/getAutosaveSettings$DirectInput.md)

[getAutosaveSettings$Input](../type-aliases/getAutosaveSettings$Input.md)

#### Returns

`Promise`\<[`autosaveSettings`](../type-aliases/autosaveSettings-1.md)\>

Promise<[AutosaveSettings](../type-aliases/AutosaveSettings.md)>

#### Defined in

dist/generated/types.d.ts:72183

***

### getAvailableChatBoostSlots()

> **getAvailableChatBoostSlots**(`parameters`): `Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots-1.md)\>

Returns the list of available chat boost slots for the current user

#### Parameters

• **parameters**: [`getAvailableChatBoostSlots$DirectInput`](../type-aliases/getAvailableChatBoostSlots$DirectInput.md)

[getAvailableChatBoostSlots$Input](../type-aliases/getAvailableChatBoostSlots$Input.md)

#### Returns

`Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots-1.md)\>

Promise<[ChatBoostSlots](../type-aliases/ChatBoostSlots.md)>

#### Defined in

dist/generated/types.d.ts:70029

***

### getBackgroundUrl()

> **getBackgroundUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Constructs a persistent HTTP URL for a background

#### Parameters

• **parameters**: [`getBackgroundUrl$DirectInput`](../type-aliases/getBackgroundUrl$DirectInput.md)

[getBackgroundUrl$Input](../type-aliases/getBackgroundUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:71762

***

### getBankCardInfo()

> **getBankCardInfo**(`parameters`): `Promise`\<[`bankCardInfo`](../type-aliases/bankCardInfo-1.md)\>

Returns information about a bank card

#### Parameters

• **parameters**: [`getBankCardInfo$DirectInput`](../type-aliases/getBankCardInfo$DirectInput.md)

[getBankCardInfo$Input](../type-aliases/getBankCardInfo$Input.md)

#### Returns

`Promise`\<[`bankCardInfo`](../type-aliases/bankCardInfo-1.md)\>

Promise<[BankCardInfo](../type-aliases/BankCardInfo.md)>

#### Defined in

dist/generated/types.d.ts:72204

***

### getBasicGroup()

> **getBasicGroup**(`parameters`): `Promise`\<[`basicGroup`](../type-aliases/basicGroup-1.md)\>

Returns information about a basic group by its identifier. This is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getBasicGroup$DirectInput`](../type-aliases/getBasicGroup$DirectInput.md)

[getBasicGroup$Input](../type-aliases/getBasicGroup$Input.md)

#### Returns

`Promise`\<[`basicGroup`](../type-aliases/basicGroup-1.md)\>

Promise<[BasicGroup](../type-aliases/BasicGroup.md)>

#### Defined in

dist/generated/types.d.ts:67708

***

### getBasicGroupFullInfo()

> **getBasicGroupFullInfo**(`parameters`): `Promise`\<[`basicGroupFullInfo`](../type-aliases/basicGroupFullInfo-1.md)\>

Returns full information about a basic group by its identifier

#### Parameters

• **parameters**: [`getBasicGroupFullInfo$DirectInput`](../type-aliases/getBasicGroupFullInfo$DirectInput.md)

[getBasicGroupFullInfo$Input](../type-aliases/getBasicGroupFullInfo$Input.md)

#### Returns

`Promise`\<[`basicGroupFullInfo`](../type-aliases/basicGroupFullInfo-1.md)\>

Promise<[BasicGroupFullInfo](../type-aliases/BasicGroupFullInfo.md)>

#### Defined in

dist/generated/types.d.ts:67715

***

### getBlockedMessageSenders()

> **getBlockedMessageSenders**(`parameters`): `Promise`\<[`messageSenders`](../type-aliases/messageSenders-1.md)\>

Returns users and chats that were blocked by the current user

#### Parameters

• **parameters**: [`getBlockedMessageSenders$DirectInput`](../type-aliases/getBlockedMessageSenders$DirectInput.md)

[getBlockedMessageSenders$Input](../type-aliases/getBlockedMessageSenders$Input.md)

#### Returns

`Promise`\<[`messageSenders`](../type-aliases/messageSenders-1.md)\>

Promise<[MessageSenders](../type-aliases/MessageSenders.md)>

#### Defined in

dist/generated/types.d.ts:70674

***

### getBotInfoDescription()

> **getBotInfoDescription**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns the text shown in the chat with a bot if the chat is empty in the given language. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`getBotInfoDescription$DirectInput`](../type-aliases/getBotInfoDescription$DirectInput.md)

[getBotInfoDescription$Input](../type-aliases/getBotInfoDescription$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:71445

***

### getBotInfoShortDescription()

> **getBotInfoShortDescription**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns the text shown on a bot's profile page and sent together with the link when users share the bot in the given language. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`getBotInfoShortDescription$DirectInput`](../type-aliases/getBotInfoShortDescription$DirectInput.md)

[getBotInfoShortDescription$Input](../type-aliases/getBotInfoShortDescription$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:71459

***

### getBotName()

> **getBotName**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns the name of a bot in the given language. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`getBotName$DirectInput`](../type-aliases/getBotName$DirectInput.md)

[getBotName$Input](../type-aliases/getBotName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:71410

***

### getBusinessChatLinkInfo()

> **getBusinessChatLinkInfo**(`parameters`): `Promise`\<[`businessChatLinkInfo`](../type-aliases/businessChatLinkInfo-1.md)\>

Returns information about a business chat link

#### Parameters

• **parameters**: [`getBusinessChatLinkInfo$DirectInput`](../type-aliases/getBusinessChatLinkInfo$DirectInput.md)

[getBusinessChatLinkInfo$Input](../type-aliases/getBusinessChatLinkInfo$Input.md)

#### Returns

`Promise`\<[`businessChatLinkInfo`](../type-aliases/businessChatLinkInfo-1.md)\>

Promise<[BusinessChatLinkInfo](../type-aliases/BusinessChatLinkInfo.md)>

#### Defined in

dist/generated/types.d.ts:71312

***

### getBusinessChatLinks()

> **getBusinessChatLinks**(`parameters`): `Promise`\<[`businessChatLinks`](../type-aliases/businessChatLinks-1.md)\>

Returns business chat links created for the current account

#### Parameters

• **parameters**: [`getBusinessChatLinks$DirectInput`](../type-aliases/getBusinessChatLinks$DirectInput.md)

[getBusinessChatLinks$Input](../type-aliases/getBusinessChatLinks$Input.md)

#### Returns

`Promise`\<[`businessChatLinks`](../type-aliases/businessChatLinks-1.md)\>

Promise<[BusinessChatLinks](../type-aliases/BusinessChatLinks.md)>

#### Defined in

dist/generated/types.d.ts:71284

***

### getBusinessConnectedBot()

> **getBusinessConnectedBot**(`parameters`): `Promise`\<[`businessConnectedBot`](../type-aliases/businessConnectedBot-1.md)\>

Returns the business bot that is connected to the current user account. Returns a 404 error if there is no connected bot

#### Parameters

• **parameters**: [`getBusinessConnectedBot$DirectInput`](../type-aliases/getBusinessConnectedBot$DirectInput.md)

[getBusinessConnectedBot$Input](../type-aliases/getBusinessConnectedBot$Input.md)

#### Returns

`Promise`\<[`businessConnectedBot`](../type-aliases/businessConnectedBot-1.md)\>

Promise<[BusinessConnectedBot](../type-aliases/BusinessConnectedBot.md)>

#### Defined in

dist/generated/types.d.ts:71249

***

### getBusinessConnection()

> **getBusinessConnection**(`parameters`): `Promise`\<[`businessConnection`](../type-aliases/businessConnection-1.md)\>

Returns information about a business connection by its identifier; for bots only

#### Parameters

• **parameters**: [`getBusinessConnection$DirectInput`](../type-aliases/getBusinessConnection$DirectInput.md)

[getBusinessConnection$Input](../type-aliases/getBusinessConnection$Input.md)

#### Returns

`Promise`\<[`businessConnection`](../type-aliases/businessConnection-1.md)\>

Promise<[BusinessConnection](../type-aliases/BusinessConnection.md)>

#### Defined in

dist/generated/types.d.ts:68988

***

### getBusinessFeatures()

> **getBusinessFeatures**(`parameters`): `Promise`\<[`businessFeatures`](../type-aliases/businessFeatures-1.md)\>

Returns information about features, available to Business users

#### Parameters

• **parameters**: [`getBusinessFeatures$DirectInput`](../type-aliases/getBusinessFeatures$DirectInput.md)

[getBusinessFeatures$Input](../type-aliases/getBusinessFeatures$Input.md)

#### Returns

`Promise`\<[`businessFeatures`](../type-aliases/businessFeatures-1.md)\>

Promise<[BusinessFeatures](../type-aliases/BusinessFeatures.md)>

#### Defined in

dist/generated/types.d.ts:72533

***

### getCallbackQueryAnswer()

> **getCallbackQueryAnswer**(`parameters`): `Promise`\<[`callbackQueryAnswer`](../type-aliases/callbackQueryAnswer-1.md)\>

Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires

#### Parameters

• **parameters**: [`getCallbackQueryAnswer$DirectInput`](../type-aliases/getCallbackQueryAnswer$DirectInput.md)

[getCallbackQueryAnswer$Input](../type-aliases/getCallbackQueryAnswer$Input.md)

#### Returns

`Promise`\<[`callbackQueryAnswer`](../type-aliases/callbackQueryAnswer-1.md)\>

Promise<[CallbackQueryAnswer](../type-aliases/CallbackQueryAnswer.md)>

#### Defined in

dist/generated/types.d.ts:69090

***

### getCallbackQueryMessage()

> **getCallbackQueryMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Returns information about a message with the callback button that originated a callback query; for bots only

#### Parameters

• **parameters**: [`getCallbackQueryMessage$DirectInput`](../type-aliases/getCallbackQueryMessage$DirectInput.md)

[getCallbackQueryMessage$Input](../type-aliases/getCallbackQueryMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:67782

***

### getChat()

> **getChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Returns information about a chat by its identifier; this is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getChat$DirectInput`](../type-aliases/getChat$DirectInput.md)

[getChat$Input](../type-aliases/getChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:67743

***

### getChatActiveStories()

> **getChatActiveStories**(`parameters`): `Promise`\<[`chatActiveStories`](../type-aliases/chatActiveStories-1.md)\>

Returns the list of active stories posted by the given chat

#### Parameters

• **parameters**: [`getChatActiveStories$DirectInput`](../type-aliases/getChatActiveStories$DirectInput.md)

[getChatActiveStories$Input](../type-aliases/getChatActiveStories$Input.md)

#### Returns

`Promise`\<[`chatActiveStories`](../type-aliases/chatActiveStories-1.md)\>

Promise<[ChatActiveStories](../type-aliases/ChatActiveStories.md)>

#### Defined in

dist/generated/types.d.ts:69916

***

### getChatAdministrators()

> **getChatAdministrators**(`parameters`): `Promise`\<[`chatAdministrators`](../type-aliases/chatAdministrators-1.md)\>

Returns a list of administrators of the chat with their custom titles

#### Parameters

• **parameters**: [`getChatAdministrators$DirectInput`](../type-aliases/getChatAdministrators$DirectInput.md)

[getChatAdministrators$Input](../type-aliases/getChatAdministrators$Input.md)

#### Returns

`Promise`\<[`chatAdministrators`](../type-aliases/chatAdministrators-1.md)\>

Promise<[ChatAdministrators](../type-aliases/ChatAdministrators.md)>

#### Defined in

dist/generated/types.d.ts:69739

***

### getChatArchivedStories()

> **getChatArchivedStories**(`parameters`): `Promise`\<[`stories`](../type-aliases/stories-1.md)\>

Returns the list of all stories posted by the given chat; requires can_edit_stories right in the chat.

- The stories are returned in a reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

#### Parameters

• **parameters**: [`getChatArchivedStories$DirectInput`](../type-aliases/getChatArchivedStories$DirectInput.md)

[getChatArchivedStories$Input](../type-aliases/getChatArchivedStories$Input.md)

#### Returns

`Promise`\<[`stories`](../type-aliases/stories-1.md)\>

Promise<[Stories](../type-aliases/Stories.md)>

#### Defined in

dist/generated/types.d.ts:69934

***

### getChatAvailableMessageSenders()

> **getChatAvailableMessageSenders**(`parameters`): `Promise`\<[`chatMessageSenders`](../type-aliases/chatMessageSenders-1.md)\>

Returns the list of message sender identifiers, which can be used to send messages in a chat

#### Parameters

• **parameters**: [`getChatAvailableMessageSenders$DirectInput`](../type-aliases/getChatAvailableMessageSenders$DirectInput.md)

[getChatAvailableMessageSenders$Input](../type-aliases/getChatAvailableMessageSenders$Input.md)

#### Returns

`Promise`\<[`chatMessageSenders`](../type-aliases/chatMessageSenders-1.md)\>

Promise<[ChatMessageSenders](../type-aliases/ChatMessageSenders.md)>

#### Defined in

dist/generated/types.d.ts:68347

***

### getChatBoostFeatures()

> **getChatBoostFeatures**(`parameters`): `Promise`\<[`chatBoostFeatures`](../type-aliases/chatBoostFeatures-1.md)\>

Returns the list of features available for different chat boost levels; this is an offline request

#### Parameters

• **parameters**: [`getChatBoostFeatures$DirectInput`](../type-aliases/getChatBoostFeatures$DirectInput.md)

[getChatBoostFeatures$Input](../type-aliases/getChatBoostFeatures$Input.md)

#### Returns

`Promise`\<[`chatBoostFeatures`](../type-aliases/chatBoostFeatures-1.md)\>

Promise<[ChatBoostFeatures](../type-aliases/ChatBoostFeatures.md)>

#### Defined in

dist/generated/types.d.ts:70022

***

### getChatBoostLevelFeatures()

> **getChatBoostLevelFeatures**(`parameters`): `Promise`\<[`chatBoostLevelFeatures`](../type-aliases/chatBoostLevelFeatures-1.md)\>

Returns the list of features available on the specific chat boost level; this is an offline request

#### Parameters

• **parameters**: [`getChatBoostLevelFeatures$DirectInput`](../type-aliases/getChatBoostLevelFeatures$DirectInput.md)

[getChatBoostLevelFeatures$Input](../type-aliases/getChatBoostLevelFeatures$Input.md)

#### Returns

`Promise`\<[`chatBoostLevelFeatures`](../type-aliases/chatBoostLevelFeatures-1.md)\>

Promise<[ChatBoostLevelFeatures](../type-aliases/ChatBoostLevelFeatures.md)>

#### Defined in

dist/generated/types.d.ts:70015

***

### getChatBoostLink()

> **getChatBoostLink**(`parameters`): `Promise`\<[`chatBoostLink`](../type-aliases/chatBoostLink-1.md)\>

Returns an HTTPS link to boost the specified supergroup or channel chat

#### Parameters

• **parameters**: [`getChatBoostLink$DirectInput`](../type-aliases/getChatBoostLink$DirectInput.md)

[getChatBoostLink$Input](../type-aliases/getChatBoostLink$Input.md)

#### Returns

`Promise`\<[`chatBoostLink`](../type-aliases/chatBoostLink-1.md)\>

Promise<[ChatBoostLink](../type-aliases/ChatBoostLink.md)>

#### Defined in

dist/generated/types.d.ts:70050

***

### getChatBoostLinkInfo()

> **getChatBoostLinkInfo**(`parameters`): `Promise`\<[`chatBoostLinkInfo`](../type-aliases/chatBoostLinkInfo-1.md)\>

Returns information about a link to boost a chat. Can be called for any internal link of the type internalLinkTypeChatBoost

#### Parameters

• **parameters**: [`getChatBoostLinkInfo$DirectInput`](../type-aliases/getChatBoostLinkInfo$DirectInput.md)

[getChatBoostLinkInfo$Input](../type-aliases/getChatBoostLinkInfo$Input.md)

#### Returns

`Promise`\<[`chatBoostLinkInfo`](../type-aliases/chatBoostLinkInfo-1.md)\>

Promise<[ChatBoostLinkInfo](../type-aliases/ChatBoostLinkInfo.md)>

#### Defined in

dist/generated/types.d.ts:70057

***

### getChatBoostStatus()

> **getChatBoostStatus**(`parameters`): `Promise`\<[`chatBoostStatus`](../type-aliases/chatBoostStatus-1.md)\>

Returns the current boost status for a supergroup or a channel chat

#### Parameters

• **parameters**: [`getChatBoostStatus$DirectInput`](../type-aliases/getChatBoostStatus$DirectInput.md)

[getChatBoostStatus$Input](../type-aliases/getChatBoostStatus$Input.md)

#### Returns

`Promise`\<[`chatBoostStatus`](../type-aliases/chatBoostStatus-1.md)\>

Promise<[ChatBoostStatus](../type-aliases/ChatBoostStatus.md)>

#### Defined in

dist/generated/types.d.ts:70036

***

### getChatBoosts()

> **getChatBoosts**(`parameters`): `Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts-1.md)\>

Returns the list of boosts applied to a chat; requires administrator rights in the chat

#### Parameters

• **parameters**: [`getChatBoosts$DirectInput`](../type-aliases/getChatBoosts$DirectInput.md)

[getChatBoosts$Input](../type-aliases/getChatBoosts$Input.md)

#### Returns

`Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts-1.md)\>

Promise<[FoundChatBoosts](../type-aliases/FoundChatBoosts.md)>

#### Defined in

dist/generated/types.d.ts:70064

***

### getChatEventLog()

> **getChatEventLog**(`parameters`): `Promise`\<[`chatEvents`](../type-aliases/chatEvents-1.md)\>

Returns a list of service actions taken by chat members and administrators in the last 48 hours. Available only for supergroups and channels. Requires administrator rights. Returns results in reverse chronological order (i.e., in order of decreasing event_id)

#### Parameters

• **parameters**: [`getChatEventLog$DirectInput`](../type-aliases/getChatEventLog$DirectInput.md)

[getChatEventLog$Input](../type-aliases/getChatEventLog$Input.md)

#### Returns

`Promise`\<[`chatEvents`](../type-aliases/chatEvents-1.md)\>

Promise<[ChatEvents](../type-aliases/ChatEvents.md)>

#### Defined in

dist/generated/types.d.ts:71678

***

### getChatFolder()

> **getChatFolder**(`parameters`): `Promise`\<[`chatFolder`](../type-aliases/chatFolder-1.md)\>

Returns information about a chat folder by its identifier

#### Parameters

• **parameters**: [`getChatFolder$DirectInput`](../type-aliases/getChatFolder$DirectInput.md)

[getChatFolder$Input](../type-aliases/getChatFolder$Input.md)

#### Returns

`Promise`\<[`chatFolder`](../type-aliases/chatFolder-1.md)\>

Promise<[ChatFolder](../type-aliases/ChatFolder.md)>

#### Defined in

dist/generated/types.d.ts:69325

***

### getChatFolderChatCount()

> **getChatFolderChatCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count-1.md)\>

Returns approximate number of chats in a being created chat folder. Main and archive chat lists must be fully preloaded for this function to work correctly

#### Parameters

• **parameters**: [`getChatFolderChatCount$DirectInput`](../type-aliases/getChatFolderChatCount$DirectInput.md)

[getChatFolderChatCount$Input](../type-aliases/getChatFolderChatCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count-1.md)\>

Promise<[Count](../type-aliases/Count.md)>

#### Defined in

dist/generated/types.d.ts:69360

***

### getChatFolderChatsToLeave()

> **getChatFolderChatsToLeave**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns identifiers of pinned or always included chats from a chat folder, which are suggested to be left when the chat folder is deleted

#### Parameters

• **parameters**: [`getChatFolderChatsToLeave$DirectInput`](../type-aliases/getChatFolderChatsToLeave$DirectInput.md)

[getChatFolderChatsToLeave$Input](../type-aliases/getChatFolderChatsToLeave$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:69353

***

### getChatFolderDefaultIconName()

> **getChatFolderDefaultIconName**(`parameters`): `Promise`\<[`chatFolderIcon`](../type-aliases/chatFolderIcon-1.md)\>

Returns default icon name for a folder. Can be called synchronously

#### Parameters

• **parameters**: [`getChatFolderDefaultIconName$DirectInput`](../type-aliases/getChatFolderDefaultIconName$DirectInput.md)

[getChatFolderDefaultIconName$Input](../type-aliases/getChatFolderDefaultIconName$Input.md)

#### Returns

`Promise`\<[`chatFolderIcon`](../type-aliases/chatFolderIcon-1.md)\>

Promise<[ChatFolderIcon](../type-aliases/ChatFolderIcon.md)>

#### Defined in

dist/generated/types.d.ts:69388

***

### getChatFolderInviteLinks()

> **getChatFolderInviteLinks**(`parameters`): `Promise`\<[`chatFolderInviteLinks`](../type-aliases/chatFolderInviteLinks-1.md)\>

Returns invite links created by the current user for a shareable chat folder

#### Parameters

• **parameters**: [`getChatFolderInviteLinks$DirectInput`](../type-aliases/getChatFolderInviteLinks$DirectInput.md)

[getChatFolderInviteLinks$Input](../type-aliases/getChatFolderInviteLinks$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLinks`](../type-aliases/chatFolderInviteLinks-1.md)\>

Promise<[ChatFolderInviteLinks](../type-aliases/ChatFolderInviteLinks.md)>

#### Defined in

dist/generated/types.d.ts:69409

***

### getChatFolderNewChats()

> **getChatFolderNewChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns new chats added to a shareable chat folder by its owner. The method must be called at most once in getOption("chat_folder_new_chats_update_period") for the given chat folder

#### Parameters

• **parameters**: [`getChatFolderNewChats$DirectInput`](../type-aliases/getChatFolderNewChats$DirectInput.md)

[getChatFolderNewChats$Input](../type-aliases/getChatFolderNewChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:69444

***

### getChatHistory()

> **getChatHistory**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Returns messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of decreasing message_id).

- For optimal performance, the number of returned messages is chosen by TDLib. This is an offline request if only_local is true

#### Parameters

• **parameters**: [`getChatHistory$DirectInput`](../type-aliases/getChatHistory$DirectInput.md)

[getChatHistory$Input](../type-aliases/getChatHistory$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68065

***

### getChatInviteLink()

> **getChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Returns information about an invite link. Requires administrator privileges and can_invite_users right in the chat to get own links and owner privileges to get other links

#### Parameters

• **parameters**: [`getChatInviteLink$DirectInput`](../type-aliases/getChatInviteLink$DirectInput.md)

[getChatInviteLink$Input](../type-aliases/getChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink.md)>

#### Defined in

dist/generated/types.d.ts:70315

***

### getChatInviteLinkCounts()

> **getChatInviteLinkCounts**(`parameters`): `Promise`\<[`chatInviteLinkCounts`](../type-aliases/chatInviteLinkCounts-1.md)\>

Returns the list of chat administrators with number of their invite links. Requires owner privileges in the chat

#### Parameters

• **parameters**: [`getChatInviteLinkCounts$DirectInput`](../type-aliases/getChatInviteLinkCounts$DirectInput.md)

[getChatInviteLinkCounts$Input](../type-aliases/getChatInviteLinkCounts$Input.md)

#### Returns

`Promise`\<[`chatInviteLinkCounts`](../type-aliases/chatInviteLinkCounts-1.md)\>

Promise<[ChatInviteLinkCounts](../type-aliases/ChatInviteLinkCounts.md)>

#### Defined in

dist/generated/types.d.ts:70322

***

### getChatInviteLinkMembers()

> **getChatInviteLinkMembers**(`parameters`): `Promise`\<[`chatInviteLinkMembers`](../type-aliases/chatInviteLinkMembers-1.md)\>

Returns chat members joined a chat via an invite link. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`getChatInviteLinkMembers$DirectInput`](../type-aliases/getChatInviteLinkMembers$DirectInput.md)

[getChatInviteLinkMembers$Input](../type-aliases/getChatInviteLinkMembers$Input.md)

#### Returns

`Promise`\<[`chatInviteLinkMembers`](../type-aliases/chatInviteLinkMembers-1.md)\>

Promise<[ChatInviteLinkMembers](../type-aliases/ChatInviteLinkMembers.md)>

#### Defined in

dist/generated/types.d.ts:70336

***

### getChatInviteLinks()

> **getChatInviteLinks**(`parameters`): `Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks-1.md)\>

Returns invite links for a chat created by specified administrator. Requires administrator privileges and can_invite_users right in the chat to get own links and owner privileges to get other links

#### Parameters

• **parameters**: [`getChatInviteLinks$DirectInput`](../type-aliases/getChatInviteLinks$DirectInput.md)

[getChatInviteLinks$Input](../type-aliases/getChatInviteLinks$Input.md)

#### Returns

`Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks-1.md)\>

Promise<[ChatInviteLinks](../type-aliases/ChatInviteLinks.md)>

#### Defined in

dist/generated/types.d.ts:70329

***

### getChatJoinRequests()

> **getChatJoinRequests**(`parameters`): `Promise`\<[`chatJoinRequests`](../type-aliases/chatJoinRequests-1.md)\>

Returns pending join requests in a chat

#### Parameters

• **parameters**: [`getChatJoinRequests$DirectInput`](../type-aliases/getChatJoinRequests$DirectInput.md)

[getChatJoinRequests$Input](../type-aliases/getChatJoinRequests$Input.md)

#### Returns

`Promise`\<[`chatJoinRequests`](../type-aliases/chatJoinRequests-1.md)\>

Promise<[ChatJoinRequests](../type-aliases/ChatJoinRequests.md)>

#### Defined in

dist/generated/types.d.ts:70380

***

### getChatListsToAddChat()

> **getChatListsToAddChat**(`parameters`): `Promise`\<[`chatLists`](../type-aliases/chatLists-1.md)\>

Returns chat lists to which the chat can be added. This is an offline request

#### Parameters

• **parameters**: [`getChatListsToAddChat$DirectInput`](../type-aliases/getChatListsToAddChat$DirectInput.md)

[getChatListsToAddChat$Input](../type-aliases/getChatListsToAddChat$Input.md)

#### Returns

`Promise`\<[`chatLists`](../type-aliases/chatLists-1.md)\>

Promise<[ChatLists](../type-aliases/ChatLists.md)>

#### Defined in

dist/generated/types.d.ts:69311

***

### getChatMember()

> **getChatMember**(`parameters`): `Promise`\<[`chatMember`](../type-aliases/chatMember-1.md)\>

Returns information about a single member of a chat

#### Parameters

• **parameters**: [`getChatMember$DirectInput`](../type-aliases/getChatMember$DirectInput.md)

[getChatMember$Input](../type-aliases/getChatMember$Input.md)

#### Returns

`Promise`\<[`chatMember`](../type-aliases/chatMember-1.md)\>

Promise<[ChatMember](../type-aliases/ChatMember.md)>

#### Defined in

dist/generated/types.d.ts:69725

***

### getChatMessageByDate()

> **getChatMessageByDate**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Returns the last message sent in a chat no later than the specified date

#### Parameters

• **parameters**: [`getChatMessageByDate$DirectInput`](../type-aliases/getChatMessageByDate$DirectInput.md)

[getChatMessageByDate$Input](../type-aliases/getChatMessageByDate$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68219

***

### getChatMessageCalendar()

> **getChatMessageCalendar**(`parameters`): `Promise`\<[`messageCalendar`](../type-aliases/messageCalendar-1.md)\>

Returns information about the next messages of the specified type in the chat split by days. Returns the results in reverse chronological order. Can return partial result for the last returned day. Behavior of this method depends on the value of the option "utc_time_offset"

#### Parameters

• **parameters**: [`getChatMessageCalendar$DirectInput`](../type-aliases/getChatMessageCalendar$DirectInput.md)

[getChatMessageCalendar$Input](../type-aliases/getChatMessageCalendar$Input.md)

#### Returns

`Promise`\<[`messageCalendar`](../type-aliases/messageCalendar-1.md)\>

Promise<[MessageCalendar](../type-aliases/MessageCalendar.md)>

#### Defined in

dist/generated/types.d.ts:68235

***

### getChatMessageCount()

> **getChatMessageCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count-1.md)\>

Returns approximate number of messages of the specified type in the chat

#### Parameters

• **parameters**: [`getChatMessageCount$DirectInput`](../type-aliases/getChatMessageCount$DirectInput.md)

[getChatMessageCount$Input](../type-aliases/getChatMessageCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count-1.md)\>

Promise<[Count](../type-aliases/Count.md)>

#### Defined in

dist/generated/types.d.ts:68242

***

### getChatMessagePosition()

> **getChatMessagePosition**(`parameters`): `Promise`\<[`count`](../type-aliases/count-1.md)\>

Returns approximate 1-based position of a message among messages, which can be found by the specified filter in the chat. Cannot be used in secret chats

#### Parameters

• **parameters**: [`getChatMessagePosition$DirectInput`](../type-aliases/getChatMessagePosition$DirectInput.md)

[getChatMessagePosition$Input](../type-aliases/getChatMessagePosition$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count-1.md)\>

Promise<[Count](../type-aliases/Count.md)>

#### Defined in

dist/generated/types.d.ts:68249

***

### getChatNotificationSettingsExceptions()

> **getChatNotificationSettingsExceptions**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns the list of chats with non-default notification settings for new messages

#### Parameters

• **parameters**: [`getChatNotificationSettingsExceptions$DirectInput`](../type-aliases/getChatNotificationSettingsExceptions$DirectInput.md)

[getChatNotificationSettingsExceptions$Input](../type-aliases/getChatNotificationSettingsExceptions$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:69781

***

### getChatPinnedMessage()

> **getChatPinnedMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Returns information about a newest pinned message in the chat

#### Parameters

• **parameters**: [`getChatPinnedMessage$DirectInput`](../type-aliases/getChatPinnedMessage$DirectInput.md)

[getChatPinnedMessage$Input](../type-aliases/getChatPinnedMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:67775

***

### getChatPostedToChatPageStories()

> **getChatPostedToChatPageStories**(`parameters`): `Promise`\<[`stories`](../type-aliases/stories-1.md)\>

Returns the list of stories that posted by the given chat to its chat page. If from_story_id == 0, then pinned stories are returned first.

- Then, stories are returned in a reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

#### Parameters

• **parameters**: [`getChatPostedToChatPageStories$DirectInput`](../type-aliases/getChatPostedToChatPageStories$DirectInput.md)

[getChatPostedToChatPageStories$Input](../type-aliases/getChatPostedToChatPageStories$Input.md)

#### Returns

`Promise`\<[`stories`](../type-aliases/stories-1.md)\>

Promise<[Stories](../type-aliases/Stories.md)>

#### Defined in

dist/generated/types.d.ts:69925

***

### getChatRevenueStatistics()

> **getChatRevenueStatistics**(`parameters`): `Promise`\<[`chatRevenueStatistics`](../type-aliases/chatRevenueStatistics-1.md)\>

Returns detailed revenue statistics about a chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true

#### Parameters

• **parameters**: [`getChatRevenueStatistics$DirectInput`](../type-aliases/getChatRevenueStatistics$DirectInput.md)

[getChatRevenueStatistics$Input](../type-aliases/getChatRevenueStatistics$Input.md)

#### Returns

`Promise`\<[`chatRevenueStatistics`](../type-aliases/chatRevenueStatistics-1.md)\>

Promise<[ChatRevenueStatistics](../type-aliases/ChatRevenueStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72034

***

### getChatRevenueTransactions()

> **getChatRevenueTransactions**(`parameters`): `Promise`\<[`chatRevenueTransactions`](../type-aliases/chatRevenueTransactions-1.md)\>

Returns the list of revenue transactions for a chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true

#### Parameters

• **parameters**: [`getChatRevenueTransactions$DirectInput`](../type-aliases/getChatRevenueTransactions$DirectInput.md)

[getChatRevenueTransactions$Input](../type-aliases/getChatRevenueTransactions$Input.md)

#### Returns

`Promise`\<[`chatRevenueTransactions`](../type-aliases/chatRevenueTransactions-1.md)\>

Promise<[ChatRevenueTransactions](../type-aliases/ChatRevenueTransactions.md)>

#### Defined in

dist/generated/types.d.ts:72048

***

### getChatRevenueWithdrawalUrl()

> **getChatRevenueWithdrawalUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns a URL for chat revenue withdrawal; requires owner privileges in the chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true and getOption("can_withdraw_chat_revenue")

#### Parameters

• **parameters**: [`getChatRevenueWithdrawalUrl$DirectInput`](../type-aliases/getChatRevenueWithdrawalUrl$DirectInput.md)

[getChatRevenueWithdrawalUrl$Input](../type-aliases/getChatRevenueWithdrawalUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:72041

***

### getChatScheduledMessages()

> **getChatScheduledMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Returns all scheduled messages in a chat. The messages are returned in a reverse chronological order (i.e., in order of decreasing message_id)

#### Parameters

• **parameters**: [`getChatScheduledMessages$DirectInput`](../type-aliases/getChatScheduledMessages$DirectInput.md)

[getChatScheduledMessages$Input](../type-aliases/getChatScheduledMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68256

***

### getChatSimilarChatCount()

> **getChatSimilarChatCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count-1.md)\>

Returns approximate number of chats similar to the given chat

#### Parameters

• **parameters**: [`getChatSimilarChatCount$DirectInput`](../type-aliases/getChatSimilarChatCount$DirectInput.md)

[getChatSimilarChatCount$Input](../type-aliases/getChatSimilarChatCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count-1.md)\>

Promise<[Count](../type-aliases/Count.md)>

#### Defined in

dist/generated/types.d.ts:67900

***

### getChatSimilarChats()

> **getChatSimilarChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of chats similar to the given chat

#### Parameters

• **parameters**: [`getChatSimilarChats$DirectInput`](../type-aliases/getChatSimilarChats$DirectInput.md)

[getChatSimilarChats$Input](../type-aliases/getChatSimilarChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67893

***

### getChatSparseMessagePositions()

> **getChatSparseMessagePositions**(`parameters`): `Promise`\<[`messagePositions`](../type-aliases/messagePositions-1.md)\>

Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id).

- Cannot be used in secret chats or with searchMessagesFilterFailedToSend filter without an enabled message database

#### Parameters

• **parameters**: [`getChatSparseMessagePositions$DirectInput`](../type-aliases/getChatSparseMessagePositions$DirectInput.md)

[getChatSparseMessagePositions$Input](../type-aliases/getChatSparseMessagePositions$Input.md)

#### Returns

`Promise`\<[`messagePositions`](../type-aliases/messagePositions-1.md)\>

Promise<[MessagePositions](../type-aliases/MessagePositions.md)>

#### Defined in

dist/generated/types.d.ts:68228

***

### getChatSponsoredMessages()

> **getChatSponsoredMessages**(`parameters`): `Promise`\<[`sponsoredMessages`](../type-aliases/sponsoredMessages-1.md)\>

Returns sponsored messages to be shown in a chat; for channel chats only

#### Parameters

• **parameters**: [`getChatSponsoredMessages$DirectInput`](../type-aliases/getChatSponsoredMessages$DirectInput.md)

[getChatSponsoredMessages$Input](../type-aliases/getChatSponsoredMessages$Input.md)

#### Returns

`Promise`\<[`sponsoredMessages`](../type-aliases/sponsoredMessages-1.md)\>

Promise<[SponsoredMessages](../type-aliases/SponsoredMessages.md)>

#### Defined in

dist/generated/types.d.ts:68263

***

### getChatStatistics()

> **getChatStatistics**(`parameters`): `Promise`\<[`ChatStatistics`](../type-aliases/ChatStatistics.md)\>

Returns detailed statistics about a chat. Currently, this method can be used only for supergroups and channels. Can be used only if supergroupFullInfo.can_get_statistics == true

#### Parameters

• **parameters**: [`getChatStatistics$DirectInput`](../type-aliases/getChatStatistics$DirectInput.md)

[getChatStatistics$Input](../type-aliases/getChatStatistics$Input.md)

#### Returns

`Promise`\<[`ChatStatistics`](../type-aliases/ChatStatistics.md)\>

Promise<[ChatStatistics](../type-aliases/ChatStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72076

***

### getChatStoryInteractions()

> **getChatStoryInteractions**(`parameters`): `Promise`\<[`storyInteractions`](../type-aliases/storyInteractions-1.md)\>

Returns interactions with a story posted in a chat. Can be used only if story is posted on behalf of a chat and the user is an administrator in the chat

#### Parameters

• **parameters**: [`getChatStoryInteractions$DirectInput`](../type-aliases/getChatStoryInteractions$DirectInput.md)

[getChatStoryInteractions$Input](../type-aliases/getChatStoryInteractions$Input.md)

#### Returns

`Promise`\<[`storyInteractions`](../type-aliases/storyInteractions-1.md)\>

Promise<[StoryInteractions](../type-aliases/StoryInteractions.md)>

#### Defined in

dist/generated/types.d.ts:69983

***

### getChats()

> **getChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns an ordered list of chats from the beginning of a chat list. For informational purposes only. Use loadChats and updates processing instead to maintain chat lists in a consistent state

#### Parameters

• **parameters**: [`getChats$DirectInput`](../type-aliases/getChats$DirectInput.md)

[getChats$Input](../type-aliases/getChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67840

***

### getChatsForChatFolderInviteLink()

> **getChatsForChatFolderInviteLink**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns identifiers of chats from a chat folder, suitable for adding to a chat folder invite link

#### Parameters

• **parameters**: [`getChatsForChatFolderInviteLink$DirectInput`](../type-aliases/getChatsForChatFolderInviteLink$DirectInput.md)

[getChatsForChatFolderInviteLink$Input](../type-aliases/getChatsForChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:69395

***

### getChatsToSendStories()

> **getChatsToSendStories**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns supergroup and channel chats in which the current user has the right to post stories. The chats must be rechecked with canSendStory before actually trying to post a story there

#### Parameters

• **parameters**: [`getChatsToSendStories$DirectInput`](../type-aliases/getChatsToSendStories$DirectInput.md)

[getChatsToSendStories$Input](../type-aliases/getChatsToSendStories$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:69844

***

### getCloseFriends()

> **getCloseFriends**(`parameters`): `Promise`\<[`users`](../type-aliases/users-1.md)\>

Returns all close friends of the current user

#### Parameters

• **parameters**: [`getCloseFriends$DirectInput`](../type-aliases/getCloseFriends$DirectInput.md)

[getCloseFriends$Input](../type-aliases/getCloseFriends$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users-1.md)\>

Promise<[Users](../type-aliases/Users.md)>

#### Defined in

dist/generated/types.d.ts:70746

***

### getCollectibleItemInfo()

> **getCollectibleItemInfo**(`parameters`): `Promise`\<[`collectibleItemInfo`](../type-aliases/collectibleItemInfo-1.md)\>

Returns information about a given collectible item that was purchased at https://fragment.com

#### Parameters

• **parameters**: [`getCollectibleItemInfo$DirectInput`](../type-aliases/getCollectibleItemInfo$DirectInput.md)

[getCollectibleItemInfo$Input](../type-aliases/getCollectibleItemInfo$Input.md)

#### Returns

`Promise`\<[`collectibleItemInfo`](../type-aliases/collectibleItemInfo-1.md)\>

Promise<[CollectibleItemInfo](../type-aliases/CollectibleItemInfo.md)>

#### Defined in

dist/generated/types.d.ts:72603

***

### getCommands()

> **getCommands**(`parameters`): `Promise`\<[`botCommands`](../type-aliases/botCommands-1.md)\>

Returns the list of commands supported by the bot for the given user scope and language; for bots only

#### Parameters

• **parameters**: [`getCommands$DirectInput`](../type-aliases/getCommands$DirectInput.md)

[getCommands$Input](../type-aliases/getCommands$Input.md)

#### Returns

`Promise`\<[`botCommands`](../type-aliases/botCommands-1.md)\>

Promise<[BotCommands](../type-aliases/BotCommands.md)>

#### Defined in

dist/generated/types.d.ts:71347

***

### getConnectedWebsites()

> **getConnectedWebsites**(`parameters`): `Promise`\<[`connectedWebsites`](../type-aliases/connectedWebsites-1.md)\>

Returns all website where the current user used Telegram to log in

#### Parameters

• **parameters**: [`getConnectedWebsites$DirectInput`](../type-aliases/getConnectedWebsites$DirectInput.md)

[getConnectedWebsites$Input](../type-aliases/getConnectedWebsites$Input.md)

#### Returns

`Promise`\<[`connectedWebsites`](../type-aliases/connectedWebsites-1.md)\>

Promise<[ConnectedWebsites](../type-aliases/ConnectedWebsites.md)>

#### Defined in

dist/generated/types.d.ts:71515

***

### getContacts()

> **getContacts**(`parameters`): `Promise`\<[`users`](../type-aliases/users-1.md)\>

Returns all contacts of the user

#### Parameters

• **parameters**: [`getContacts$DirectInput`](../type-aliases/getContacts$DirectInput.md)

[getContacts$Input](../type-aliases/getContacts$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users-1.md)\>

Promise<[Users](../type-aliases/Users.md)>

#### Defined in

dist/generated/types.d.ts:70695

***

### getCountries()

> **getCountries**(`parameters`): `Promise`\<[`countries`](../type-aliases/countries-1.md)\>

Returns information about existing countries. Can be called before authorization

#### Parameters

• **parameters**: [`getCountries$DirectInput`](../type-aliases/getCountries$DirectInput.md)

[getCountries$Input](../type-aliases/getCountries$Input.md)

#### Returns

`Promise`\<[`countries`](../type-aliases/countries-1.md)\>

Promise<[Countries](../type-aliases/Countries.md)>

#### Defined in

dist/generated/types.d.ts:72575

***

### getCountryCode()

> **getCountryCode**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Uses the current IP address to find the current country. Returns two-letter ISO 3166-1 alpha-2 country code. Can be called before authorization

#### Parameters

• **parameters**: [`getCountryCode$DirectInput`](../type-aliases/getCountryCode$DirectInput.md)

[getCountryCode$Input](../type-aliases/getCountryCode$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:72582

***

### getCountryFlagEmoji()

> **getCountryFlagEmoji**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns an emoji for the given country. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getCountryFlagEmoji$DirectInput`](../type-aliases/getCountryFlagEmoji$DirectInput.md)

[getCountryFlagEmoji$Input](../type-aliases/getCountryFlagEmoji$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:68897

***

### getCreatedPublicChats()

> **getCreatedPublicChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of public chats of the specified type, owned by the user

#### Parameters

• **parameters**: [`getCreatedPublicChats$DirectInput`](../type-aliases/getCreatedPublicChats$DirectInput.md)

[getCreatedPublicChats$Input](../type-aliases/getCreatedPublicChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67970

***

### getCurrentState()

> **getCurrentState**(`parameters`): `Promise`\<[`updates`](../type-aliases/updates-1.md)\>

Returns all updates needed to restore current TDLib state, i.e. all actual updateAuthorizationState/updateUser/updateNewChat and others. This is especially useful if TDLib is run in a separate process. Can be called before initialization

#### Parameters

• **parameters**: [`getCurrentState$DirectInput`](../type-aliases/getCurrentState$DirectInput.md)

[getCurrentState$Input](../type-aliases/getCurrentState$Input.md)

#### Returns

`Promise`\<[`updates`](../type-aliases/updates-1.md)\>

Promise<[Updates](../type-aliases/Updates.md)>

#### Defined in

dist/generated/types.d.ts:67550

***

### getCustomEmojiReactionAnimations()

> **getCustomEmojiReactionAnimations**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns TGS stickers with generic animations for custom emoji reactions

#### Parameters

• **parameters**: [`getCustomEmojiReactionAnimations$DirectInput`](../type-aliases/getCustomEmojiReactionAnimations$DirectInput.md)

[getCustomEmojiReactionAnimations$Input](../type-aliases/getCustomEmojiReactionAnimations$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:68783

***

### getCustomEmojiStickers()

> **getCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns the list of custom emoji stickers by their identifiers. Stickers are returned in arbitrary order. Only found stickers are returned

#### Parameters

• **parameters**: [`getCustomEmojiStickers$DirectInput`](../type-aliases/getCustomEmojiStickers$DirectInput.md)

[getCustomEmojiStickers$Input](../type-aliases/getCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70995

***

### getDatabaseStatistics()

> **getDatabaseStatistics**(`parameters`): `Promise`\<[`databaseStatistics`](../type-aliases/databaseStatistics-1.md)\>

Returns database statistics

#### Parameters

• **parameters**: [`getDatabaseStatistics$DirectInput`](../type-aliases/getDatabaseStatistics$DirectInput.md)

[getDatabaseStatistics$Input](../type-aliases/getDatabaseStatistics$Input.md)

#### Returns

`Promise`\<[`databaseStatistics`](../type-aliases/databaseStatistics-1.md)\>

Promise<[DatabaseStatistics](../type-aliases/DatabaseStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72125

***

### getDeepLinkInfo()

> **getDeepLinkInfo**(`parameters`): `Promise`\<[`deepLinkInfo`](../type-aliases/deepLinkInfo-1.md)\>

Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature" or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links. Can be called before authorization

#### Parameters

• **parameters**: [`getDeepLinkInfo$DirectInput`](../type-aliases/getDeepLinkInfo$DirectInput.md)

[getDeepLinkInfo$Input](../type-aliases/getDeepLinkInfo$Input.md)

#### Returns

`Promise`\<[`deepLinkInfo`](../type-aliases/deepLinkInfo-1.md)\>

Promise<[DeepLinkInfo](../type-aliases/DeepLinkInfo.md)>

#### Defined in

dist/generated/types.d.ts:72610

***

### getDefaultBackgroundCustomEmojiStickers()

> **getDefaultBackgroundCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns default list of custom emoji stickers for reply background

#### Parameters

• **parameters**: [`getDefaultBackgroundCustomEmojiStickers$DirectInput`](../type-aliases/getDefaultBackgroundCustomEmojiStickers$DirectInput.md)

[getDefaultBackgroundCustomEmojiStickers$Input](../type-aliases/getDefaultBackgroundCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:71016

***

### getDefaultChatEmojiStatuses()

> **getDefaultChatEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Returns default emoji statuses for chats

#### Parameters

• **parameters**: [`getDefaultChatEmojiStatuses$DirectInput`](../type-aliases/getDefaultChatEmojiStatuses$DirectInput.md)

[getDefaultChatEmojiStatuses$Input](../type-aliases/getDefaultChatEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses.md)>

#### Defined in

dist/generated/types.d.ts:70127

***

### getDefaultChatPhotoCustomEmojiStickers()

> **getDefaultChatPhotoCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns default list of custom emoji stickers for placing on a chat photo

#### Parameters

• **parameters**: [`getDefaultChatPhotoCustomEmojiStickers$DirectInput`](../type-aliases/getDefaultChatPhotoCustomEmojiStickers$DirectInput.md)

[getDefaultChatPhotoCustomEmojiStickers$Input](../type-aliases/getDefaultChatPhotoCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:71002

***

### getDefaultEmojiStatuses()

> **getDefaultEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Returns default emoji statuses for self status

#### Parameters

• **parameters**: [`getDefaultEmojiStatuses$DirectInput`](../type-aliases/getDefaultEmojiStatuses$DirectInput.md)

[getDefaultEmojiStatuses$Input](../type-aliases/getDefaultEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses.md)>

#### Defined in

dist/generated/types.d.ts:70106

***

### getDefaultMessageAutoDeleteTime()

> **getDefaultMessageAutoDeleteTime**(`parameters`): `Promise`\<[`messageAutoDeleteTime`](../type-aliases/messageAutoDeleteTime-1.md)\>

Returns default message auto-delete time setting for new chats

#### Parameters

• **parameters**: [`getDefaultMessageAutoDeleteTime$DirectInput`](../type-aliases/getDefaultMessageAutoDeleteTime$DirectInput.md)

[getDefaultMessageAutoDeleteTime$Input](../type-aliases/getDefaultMessageAutoDeleteTime$Input.md)

#### Returns

`Promise`\<[`messageAutoDeleteTime`](../type-aliases/messageAutoDeleteTime-1.md)\>

Promise<[MessageAutoDeleteTime](../type-aliases/MessageAutoDeleteTime.md)>

#### Defined in

dist/generated/types.d.ts:71999

***

### getDefaultProfilePhotoCustomEmojiStickers()

> **getDefaultProfilePhotoCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns default list of custom emoji stickers for placing on a profile photo

#### Parameters

• **parameters**: [`getDefaultProfilePhotoCustomEmojiStickers$DirectInput`](../type-aliases/getDefaultProfilePhotoCustomEmojiStickers$DirectInput.md)

[getDefaultProfilePhotoCustomEmojiStickers$Input](../type-aliases/getDefaultProfilePhotoCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:71009

***

### getDisallowedChatEmojiStatuses()

> **getDisallowedChatEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Returns the list of emoji statuses, which can't be used as chat emoji status, even they are from a sticker set with is_allowed_as_chat_emoji_status == true

#### Parameters

• **parameters**: [`getDisallowedChatEmojiStatuses$DirectInput`](../type-aliases/getDisallowedChatEmojiStatuses$DirectInput.md)

[getDisallowedChatEmojiStatuses$Input](../type-aliases/getDisallowedChatEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses.md)>

#### Defined in

dist/generated/types.d.ts:70134

***

### getEmojiCategories()

> **getEmojiCategories**(`parameters`): `Promise`\<[`emojiCategories`](../type-aliases/emojiCategories-1.md)\>

Returns available emoji categories

#### Parameters

• **parameters**: [`getEmojiCategories$DirectInput`](../type-aliases/getEmojiCategories$DirectInput.md)

[getEmojiCategories$Input](../type-aliases/getEmojiCategories$Input.md)

#### Returns

`Promise`\<[`emojiCategories`](../type-aliases/emojiCategories-1.md)\>

Promise<[EmojiCategories](../type-aliases/EmojiCategories.md)>

#### Defined in

dist/generated/types.d.ts:70974

***

### getEmojiReaction()

> **getEmojiReaction**(`parameters`): `Promise`\<[`emojiReaction`](../type-aliases/emojiReaction-1.md)\>

Returns information about an emoji reaction. Returns a 404 error if the reaction is not found

#### Parameters

• **parameters**: [`getEmojiReaction$DirectInput`](../type-aliases/getEmojiReaction$DirectInput.md)

[getEmojiReaction$Input](../type-aliases/getEmojiReaction$Input.md)

#### Returns

`Promise`\<[`emojiReaction`](../type-aliases/emojiReaction-1.md)\>

Promise<[EmojiReaction](../type-aliases/EmojiReaction.md)>

#### Defined in

dist/generated/types.d.ts:68776

***

### getEmojiSuggestionsUrl()

> **getEmojiSuggestionsUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns an HTTP URL which can be used to automatically log in to the translation platform and suggest new emoji replacements. The URL will be valid for 30 seconds after generation

#### Parameters

• **parameters**: [`getEmojiSuggestionsUrl$DirectInput`](../type-aliases/getEmojiSuggestionsUrl$DirectInput.md)

[getEmojiSuggestionsUrl$Input](../type-aliases/getEmojiSuggestionsUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:70988

***

### getExternalLink()

> **getExternalLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns an HTTP URL which can be used to automatically authorize the current user on a website after clicking an HTTP link. Use the method getExternalLinkInfo to find whether a prior user confirmation is needed

#### Parameters

• **parameters**: [`getExternalLink$DirectInput`](../type-aliases/getExternalLink$DirectInput.md)

[getExternalLink$Input](../type-aliases/getExternalLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:69220

***

### getExternalLinkInfo()

> **getExternalLinkInfo**(`parameters`): `Promise`\<[`LoginUrlInfo`](../type-aliases/LoginUrlInfo.md)\>

Returns information about an action to be done when the current user clicks an external link. Don't use this method for links from secret chats if link preview is disabled in secret chats

#### Parameters

• **parameters**: [`getExternalLinkInfo$DirectInput`](../type-aliases/getExternalLinkInfo$DirectInput.md)

[getExternalLinkInfo$Input](../type-aliases/getExternalLinkInfo$Input.md)

#### Returns

`Promise`\<[`LoginUrlInfo`](../type-aliases/LoginUrlInfo.md)\>

Promise<[LoginUrlInfo](../type-aliases/LoginUrlInfo.md)>

#### Defined in

dist/generated/types.d.ts:69213

***

### getFavoriteStickers()

> **getFavoriteStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns favorite stickers

#### Parameters

• **parameters**: [`getFavoriteStickers$DirectInput`](../type-aliases/getFavoriteStickers$DirectInput.md)

[getFavoriteStickers$Input](../type-aliases/getFavoriteStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70930

***

### getFile()

> **getFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file-1.md)\>

Returns information about a file; this is an offline request

#### Parameters

• **parameters**: [`getFile$DirectInput`](../type-aliases/getFile$DirectInput.md)

[getFile$Input](../type-aliases/getFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file-1.md)\>

Promise<[File](../type-aliases/File.md)>

#### Defined in

dist/generated/types.d.ts:67817

***

### getFileDownloadedPrefixSize()

> **getFileDownloadedPrefixSize**(`parameters`): `Promise`\<[`fileDownloadedPrefixSize`](../type-aliases/fileDownloadedPrefixSize-1.md)\>

Returns file downloaded prefix size from a given offset, in bytes

#### Parameters

• **parameters**: [`getFileDownloadedPrefixSize$DirectInput`](../type-aliases/getFileDownloadedPrefixSize$DirectInput.md)

[getFileDownloadedPrefixSize$Input](../type-aliases/getFileDownloadedPrefixSize$Input.md)

#### Returns

`Promise`\<[`fileDownloadedPrefixSize`](../type-aliases/fileDownloadedPrefixSize-1.md)\>

Promise<[FileDownloadedPrefixSize](../type-aliases/FileDownloadedPrefixSize.md)>

#### Defined in

dist/generated/types.d.ts:70148

***

### getFileExtension()

> **getFileExtension**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getFileExtension$DirectInput`](../type-aliases/getFileExtension$DirectInput.md)

[getFileExtension$Input](../type-aliases/getFileExtension$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:68911

***

### getFileMimeType()

> **getFileMimeType**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getFileMimeType$DirectInput`](../type-aliases/getFileMimeType$DirectInput.md)

[getFileMimeType$Input](../type-aliases/getFileMimeType$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:68904

***

### getForumTopic()

> **getForumTopic**(`parameters`): `Promise`\<[`forumTopic`](../type-aliases/forumTopic-1.md)\>

Returns information about a forum topic

#### Parameters

• **parameters**: [`getForumTopic$DirectInput`](../type-aliases/getForumTopic$DirectInput.md)

[getForumTopic$Input](../type-aliases/getForumTopic$Input.md)

#### Returns

`Promise`\<[`forumTopic`](../type-aliases/forumTopic-1.md)\>

Promise<[ForumTopic](../type-aliases/ForumTopic.md)>

#### Defined in

dist/generated/types.d.ts:68713

***

### getForumTopicDefaultIcons()

> **getForumTopicDefaultIcons**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns the list of custom emoji, which can be used as forum topic icon by all users

#### Parameters

• **parameters**: [`getForumTopicDefaultIcons$DirectInput`](../type-aliases/getForumTopicDefaultIcons$DirectInput.md)

[getForumTopicDefaultIcons$Input](../type-aliases/getForumTopicDefaultIcons$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:68692

***

### getForumTopicLink()

> **getForumTopicLink**(`parameters`): `Promise`\<[`messageLink`](../type-aliases/messageLink-1.md)\>

Returns an HTTPS link to a topic in a forum chat. This is an offline request

#### Parameters

• **parameters**: [`getForumTopicLink$DirectInput`](../type-aliases/getForumTopicLink$DirectInput.md)

[getForumTopicLink$Input](../type-aliases/getForumTopicLink$Input.md)

#### Returns

`Promise`\<[`messageLink`](../type-aliases/messageLink-1.md)\>

Promise<[MessageLink](../type-aliases/MessageLink.md)>

#### Defined in

dist/generated/types.d.ts:68720

***

### getForumTopics()

> **getForumTopics**(`parameters`): `Promise`\<[`forumTopics`](../type-aliases/forumTopics-1.md)\>

Returns found forum topics in a forum chat. This is a temporary method for getting information about topic list from the server

#### Parameters

• **parameters**: [`getForumTopics$DirectInput`](../type-aliases/getForumTopics$DirectInput.md)

[getForumTopics$Input](../type-aliases/getForumTopics$Input.md)

#### Returns

`Promise`\<[`forumTopics`](../type-aliases/forumTopics-1.md)\>

Promise<[ForumTopics](../type-aliases/ForumTopics.md)>

#### Defined in

dist/generated/types.d.ts:68727

***

### getGameHighScores()

> **getGameHighScores**(`parameters`): `Promise`\<[`gameHighScores`](../type-aliases/gameHighScores-1.md)\>

Returns the high scores for a game and some part of the high score table in the range of the specified user; for bots only

#### Parameters

• **parameters**: [`getGameHighScores$DirectInput`](../type-aliases/getGameHighScores$DirectInput.md)

[getGameHighScores$Input](../type-aliases/getGameHighScores$Input.md)

#### Returns

`Promise`\<[`gameHighScores`](../type-aliases/gameHighScores-1.md)\>

Promise<[GameHighScores](../type-aliases/GameHighScores.md)>

#### Defined in

dist/generated/types.d.ts:69132

***

### getGreetingStickers()

> **getGreetingStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns greeting stickers from regular sticker sets that can be used for the start page of other users

#### Parameters

• **parameters**: [`getGreetingStickers$DirectInput`](../type-aliases/getGreetingStickers$DirectInput.md)

[getGreetingStickers$Input](../type-aliases/getGreetingStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70809

***

### getGroupCall()

> **getGroupCall**(`parameters`): `Promise`\<[`groupCall`](../type-aliases/groupCall-1.md)\>

Returns information about a group call

#### Parameters

• **parameters**: [`getGroupCall$DirectInput`](../type-aliases/getGroupCall$DirectInput.md)

[getGroupCall$Input](../type-aliases/getGroupCall$Input.md)

#### Returns

`Promise`\<[`groupCall`](../type-aliases/groupCall-1.md)\>

Promise<[GroupCall](../type-aliases/GroupCall.md)>

#### Defined in

dist/generated/types.d.ts:70485

***

### getGroupCallInviteLink()

> **getGroupCallInviteLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns invite link to a video chat in a public chat

#### Parameters

• **parameters**: [`getGroupCallInviteLink$DirectInput`](../type-aliases/getGroupCallInviteLink$DirectInput.md)

[getGroupCallInviteLink$Input](../type-aliases/getGroupCallInviteLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:70555

***

### getGroupCallStreamSegment()

> **getGroupCallStreamSegment**(`parameters`): `Promise`\<[`filePart`](../type-aliases/filePart-1.md)\>

Returns a file with a segment of a group call stream in a modified OGG format for audio or MPEG-4 format for video

#### Parameters

• **parameters**: [`getGroupCallStreamSegment$DirectInput`](../type-aliases/getGroupCallStreamSegment$DirectInput.md)

[getGroupCallStreamSegment$Input](../type-aliases/getGroupCallStreamSegment$Input.md)

#### Returns

`Promise`\<[`filePart`](../type-aliases/filePart-1.md)\>

Promise<[FilePart](../type-aliases/FilePart.md)>

#### Defined in

dist/generated/types.d.ts:70653

***

### getGroupCallStreams()

> **getGroupCallStreams**(`parameters`): `Promise`\<[`groupCallStreams`](../type-aliases/groupCallStreams-1.md)\>

Returns information about available group call streams

#### Parameters

• **parameters**: [`getGroupCallStreams$DirectInput`](../type-aliases/getGroupCallStreams$DirectInput.md)

[getGroupCallStreams$Input](../type-aliases/getGroupCallStreams$Input.md)

#### Returns

`Promise`\<[`groupCallStreams`](../type-aliases/groupCallStreams-1.md)\>

Promise<[GroupCallStreams](../type-aliases/GroupCallStreams.md)>

#### Defined in

dist/generated/types.d.ts:70646

***

### getGroupsInCommon()

> **getGroupsInCommon**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of common group chats with a given user. Chats are sorted by their type and creation date

#### Parameters

• **parameters**: [`getGroupsInCommon$DirectInput`](../type-aliases/getGroupsInCommon$DirectInput.md)

[getGroupsInCommon$Input](../type-aliases/getGroupsInCommon$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:68056

***

### getImportedContactCount()

> **getImportedContactCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count-1.md)\>

Returns the total number of imported contacts

#### Parameters

• **parameters**: [`getImportedContactCount$DirectInput`](../type-aliases/getImportedContactCount$DirectInput.md)

[getImportedContactCount$Input](../type-aliases/getImportedContactCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count-1.md)\>

Promise<[Count](../type-aliases/Count.md)>

#### Defined in

dist/generated/types.d.ts:70716

***

### getInactiveSupergroupChats()

> **getInactiveSupergroupChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of joined supergroups and channels and receives CHANNELS_TOO_MUCH error. Also, the limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`getInactiveSupergroupChats$DirectInput`](../type-aliases/getInactiveSupergroupChats$DirectInput.md)

[getInactiveSupergroupChats$Input](../type-aliases/getInactiveSupergroupChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67993

***

### getInlineGameHighScores()

> **getInlineGameHighScores**(`parameters`): `Promise`\<[`gameHighScores`](../type-aliases/gameHighScores-1.md)\>

Returns game high scores and some part of the high score table in the range of the specified user; for bots only

#### Parameters

• **parameters**: [`getInlineGameHighScores$DirectInput`](../type-aliases/getInlineGameHighScores$DirectInput.md)

[getInlineGameHighScores$Input](../type-aliases/getInlineGameHighScores$Input.md)

#### Returns

`Promise`\<[`gameHighScores`](../type-aliases/gameHighScores-1.md)\>

Promise<[GameHighScores](../type-aliases/GameHighScores.md)>

#### Defined in

dist/generated/types.d.ts:69139

***

### getInlineQueryResults()

> **getInlineQueryResults**(`parameters`): `Promise`\<[`inlineQueryResults`](../type-aliases/inlineQueryResults-1.md)\>

Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires

#### Parameters

• **parameters**: [`getInlineQueryResults$DirectInput`](../type-aliases/getInlineQueryResults$DirectInput.md)

[getInlineQueryResults$Input](../type-aliases/getInlineQueryResults$Input.md)

#### Returns

`Promise`\<[`inlineQueryResults`](../type-aliases/inlineQueryResults-1.md)\>

Promise<[InlineQueryResults](../type-aliases/InlineQueryResults.md)>

#### Defined in

dist/generated/types.d.ts:69025

***

### getInstalledBackgrounds()

> **getInstalledBackgrounds**(`parameters`): `Promise`\<[`backgrounds`](../type-aliases/backgrounds-1.md)\>

Returns backgrounds installed by the user

#### Parameters

• **parameters**: [`getInstalledBackgrounds$DirectInput`](../type-aliases/getInstalledBackgrounds$DirectInput.md)

[getInstalledBackgrounds$Input](../type-aliases/getInstalledBackgrounds$Input.md)

#### Returns

`Promise`\<[`backgrounds`](../type-aliases/backgrounds-1.md)\>

Promise<[Backgrounds](../type-aliases/Backgrounds.md)>

#### Defined in

dist/generated/types.d.ts:71790

***

### getInstalledStickerSets()

> **getInstalledStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Returns a list of installed sticker sets

#### Parameters

• **parameters**: [`getInstalledStickerSets$DirectInput`](../type-aliases/getInstalledStickerSets$DirectInput.md)

[getInstalledStickerSets$Input](../type-aliases/getInstalledStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Promise<[StickerSets](../type-aliases/StickerSets.md)>

#### Defined in

dist/generated/types.d.ts:70823

***

### getInternalLink()

> **getInternalLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns an HTTPS or a tg: link with the given type. Can be called before authorization

#### Parameters

• **parameters**: [`getInternalLink$DirectInput`](../type-aliases/getInternalLink$DirectInput.md)

[getInternalLink$Input](../type-aliases/getInternalLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:69199

***

### getInternalLinkType()

> **getInternalLinkType**(`parameters`): `Promise`\<[`InternalLinkType`](../type-aliases/InternalLinkType.md)\>

Returns information about the type of internal link. Returns a 404 error if the link is not internal. Can be called before authorization

#### Parameters

• **parameters**: [`getInternalLinkType$DirectInput`](../type-aliases/getInternalLinkType$DirectInput.md)

[getInternalLinkType$Input](../type-aliases/getInternalLinkType$Input.md)

#### Returns

`Promise`\<[`InternalLinkType`](../type-aliases/InternalLinkType.md)\>

Promise<[InternalLinkType](../type-aliases/InternalLinkType.md)>

#### Defined in

dist/generated/types.d.ts:69206

***

### getJsonString()

> **getJsonString**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Converts a JsonValue object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

• **parameters**: [`getJsonString$DirectInput`](../type-aliases/getJsonString$DirectInput.md)

[getJsonString$Input](../type-aliases/getJsonString$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:68939

***

### getJsonValue()

> **getJsonValue**(`parameters`): `Promise`\<[`JsonValue`](../type-aliases/JsonValue.md)\>

Converts a JSON-serialized string to corresponding JsonValue object. Can be called synchronously

#### Parameters

• **parameters**: [`getJsonValue$DirectInput`](../type-aliases/getJsonValue$DirectInput.md)

[getJsonValue$Input](../type-aliases/getJsonValue$Input.md)

#### Returns

`Promise`\<[`JsonValue`](../type-aliases/JsonValue.md)\>

Promise<[JsonValue](../type-aliases/JsonValue.md)>

#### Defined in

dist/generated/types.d.ts:68932

***

### getKeywordEmojis()

> **getKeywordEmojis**(`parameters`): `Promise`\<[`emojis`](../type-aliases/emojis-1.md)\>

Return emojis matching the keyword. Supported only if the file database is enabled. Order of results is unspecified

#### Parameters

• **parameters**: [`getKeywordEmojis$DirectInput`](../type-aliases/getKeywordEmojis$DirectInput.md)

[getKeywordEmojis$Input](../type-aliases/getKeywordEmojis$Input.md)

#### Returns

`Promise`\<[`emojis`](../type-aliases/emojis-1.md)\>

Promise<[Emojis](../type-aliases/Emojis.md)>

#### Defined in

dist/generated/types.d.ts:70967

***

### getLanguagePackInfo()

> **getLanguagePackInfo**(`parameters`): `Promise`\<[`languagePackInfo`](../type-aliases/languagePackInfo-1.md)\>

Returns information about a language pack. Returned language pack identifier may be different from a provided one. Can be called before authorization

#### Parameters

• **parameters**: [`getLanguagePackInfo$DirectInput`](../type-aliases/getLanguagePackInfo$DirectInput.md)

[getLanguagePackInfo$Input](../type-aliases/getLanguagePackInfo$Input.md)

#### Returns

`Promise`\<[`languagePackInfo`](../type-aliases/languagePackInfo-1.md)\>

Promise<[LanguagePackInfo](../type-aliases/LanguagePackInfo.md)>

#### Defined in

dist/generated/types.d.ts:71818

***

### getLanguagePackString()

> **getLanguagePackString**(`parameters`): `Promise`\<[`LanguagePackStringValue`](../type-aliases/LanguagePackStringValue.md)\>

Returns a string stored in the local database from the specified localization target and language pack by its key. Returns a 404 error if the string is not found. Can be called synchronously

#### Parameters

• **parameters**: [`getLanguagePackString$DirectInput`](../type-aliases/getLanguagePackString$DirectInput.md)

[getLanguagePackString$Input](../type-aliases/getLanguagePackString$Input.md)

#### Returns

`Promise`\<[`LanguagePackStringValue`](../type-aliases/LanguagePackStringValue.md)\>

Promise<[LanguagePackStringValue](../type-aliases/LanguagePackStringValue.md)>

#### Defined in

dist/generated/types.d.ts:68925

***

### getLanguagePackStrings()

> **getLanguagePackStrings**(`parameters`): `Promise`\<[`languagePackStrings`](../type-aliases/languagePackStrings-1.md)\>

Returns strings from a language pack in the current localization target by their keys. Can be called before authorization

#### Parameters

• **parameters**: [`getLanguagePackStrings$DirectInput`](../type-aliases/getLanguagePackStrings$DirectInput.md)

[getLanguagePackStrings$Input](../type-aliases/getLanguagePackStrings$Input.md)

#### Returns

`Promise`\<[`languagePackStrings`](../type-aliases/languagePackStrings-1.md)\>

Promise<[LanguagePackStrings](../type-aliases/LanguagePackStrings.md)>

#### Defined in

dist/generated/types.d.ts:71825

***

### getLinkPreview()

> **getLinkPreview**(`parameters`): `Promise`\<[`linkPreview`](../type-aliases/linkPreview-1.md)\>

Returns a link preview by the text of a message. Do not call this function too often. Returns a 404 error if the text has no link preview

#### Parameters

• **parameters**: [`getLinkPreview$DirectInput`](../type-aliases/getLinkPreview$DirectInput.md)

[getLinkPreview$Input](../type-aliases/getLinkPreview$Input.md)

#### Returns

`Promise`\<[`linkPreview`](../type-aliases/linkPreview-1.md)\>

Promise<[LinkPreview](../type-aliases/LinkPreview.md)>

#### Defined in

dist/generated/types.d.ts:71067

***

### getLocalizationTargetInfo()

> **getLocalizationTargetInfo**(`parameters`): `Promise`\<[`localizationTargetInfo`](../type-aliases/localizationTargetInfo-1.md)\>

Returns information about the current localization target. This is an offline request if only_local is true. Can be called before authorization

#### Parameters

• **parameters**: [`getLocalizationTargetInfo$DirectInput`](../type-aliases/getLocalizationTargetInfo$DirectInput.md)

[getLocalizationTargetInfo$Input](../type-aliases/getLocalizationTargetInfo$Input.md)

#### Returns

`Promise`\<[`localizationTargetInfo`](../type-aliases/localizationTargetInfo-1.md)\>

Promise<[LocalizationTargetInfo](../type-aliases/LocalizationTargetInfo.md)>

#### Defined in

dist/generated/types.d.ts:71811

***

### getLogStream()

> **getLogStream**(`parameters`): `Promise`\<[`LogStream`](../type-aliases/LogStream.md)\>

Returns information about currently used log stream for internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`getLogStream$DirectInput`](../type-aliases/getLogStream$DirectInput.md)

[getLogStream$Input](../type-aliases/getLogStream$Input.md)

#### Returns

`Promise`\<[`LogStream`](../type-aliases/LogStream.md)\>

Promise<[LogStream](../type-aliases/LogStream.md)>

#### Defined in

dist/generated/types.d.ts:72701

***

### getLogTagVerbosityLevel()

> **getLogTagVerbosityLevel**(`parameters`): `Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)\>

Returns current verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

• **parameters**: [`getLogTagVerbosityLevel$DirectInput`](../type-aliases/getLogTagVerbosityLevel$DirectInput.md)

[getLogTagVerbosityLevel$Input](../type-aliases/getLogTagVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)\>

Promise<[LogVerbosityLevel](../type-aliases/LogVerbosityLevel.md)>

#### Defined in

dist/generated/types.d.ts:72736

***

### getLogTags()

> **getLogTags**(`parameters`): `Promise`\<[`logTags`](../type-aliases/logTags-1.md)\>

Returns the list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications", "proxy"]. Can be called synchronously

#### Parameters

• **parameters**: [`getLogTags$DirectInput`](../type-aliases/getLogTags$DirectInput.md)

[getLogTags$Input](../type-aliases/getLogTags$Input.md)

#### Returns

`Promise`\<[`logTags`](../type-aliases/logTags-1.md)\>

Promise<[LogTags](../type-aliases/LogTags.md)>

#### Defined in

dist/generated/types.d.ts:72722

***

### getLogVerbosityLevel()

> **getLogVerbosityLevel**(`parameters`): `Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)\>

Returns current verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`getLogVerbosityLevel$DirectInput`](../type-aliases/getLogVerbosityLevel$DirectInput.md)

[getLogVerbosityLevel$Input](../type-aliases/getLogVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)\>

Promise<[LogVerbosityLevel](../type-aliases/LogVerbosityLevel.md)>

#### Defined in

dist/generated/types.d.ts:72715

***

### getLoginUrl()

> **getLoginUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns an HTTP URL which can be used to automatically authorize the user on a website after clicking an inline button of type inlineKeyboardButtonTypeLoginUrl.

- Use the method getLoginUrlInfo to find whether a prior user confirmation is needed. If an error is returned, then the button must be handled as an ordinary URL button

#### Parameters

• **parameters**: [`getLoginUrl$DirectInput`](../type-aliases/getLoginUrl$DirectInput.md)

[getLoginUrl$Input](../type-aliases/getLoginUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:69004

***

### getLoginUrlInfo()

> **getLoginUrlInfo**(`parameters`): `Promise`\<[`LoginUrlInfo`](../type-aliases/LoginUrlInfo.md)\>

Returns information about a button of type inlineKeyboardButtonTypeLoginUrl. The method needs to be called when the user presses the button

#### Parameters

• **parameters**: [`getLoginUrlInfo$DirectInput`](../type-aliases/getLoginUrlInfo$DirectInput.md)

[getLoginUrlInfo$Input](../type-aliases/getLoginUrlInfo$Input.md)

#### Returns

`Promise`\<[`LoginUrlInfo`](../type-aliases/LoginUrlInfo.md)\>

Promise<[LoginUrlInfo](../type-aliases/LoginUrlInfo.md)>

#### Defined in

dist/generated/types.d.ts:68995

***

### getMapThumbnailFile()

> **getMapThumbnailFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file-1.md)\>

Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB can be downloaded

#### Parameters

• **parameters**: [`getMapThumbnailFile$DirectInput`](../type-aliases/getMapThumbnailFile$DirectInput.md)

[getMapThumbnailFile$Input](../type-aliases/getMapThumbnailFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file-1.md)\>

Promise<[File](../type-aliases/File.md)>

#### Defined in

dist/generated/types.d.ts:72414

***

### getMarkdownText()

> **getMarkdownText**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Replaces text entities with Markdown formatting in a human-friendly format. Entities that can't be represented in Markdown unambiguously are kept as is. Can be called synchronously

#### Parameters

• **parameters**: [`getMarkdownText$DirectInput`](../type-aliases/getMarkdownText$DirectInput.md)

[getMarkdownText$Input](../type-aliases/getMarkdownText$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Promise<[FormattedText](../type-aliases/FormattedText.md)>

#### Defined in

dist/generated/types.d.ts:68890

***

### getMe()

> **getMe**(`parameters`): `Promise`\<[`user`](../type-aliases/user-1.md)\>

Returns the current user

#### Parameters

• **parameters**: [`getMe$DirectInput`](../type-aliases/getMe$DirectInput.md)

[getMe$Input](../type-aliases/getMe$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user-1.md)\>

Promise<[User](../type-aliases/User.md)>

#### Defined in

dist/generated/types.d.ts:67687

***

### getMenuButton()

> **getMenuButton**(`parameters`): `Promise`\<[`botMenuButton`](../type-aliases/botMenuButton-1.md)\>

Returns menu button set by the bot for the given user; for bots only

#### Parameters

• **parameters**: [`getMenuButton$DirectInput`](../type-aliases/getMenuButton$DirectInput.md)

[getMenuButton$Input](../type-aliases/getMenuButton$Input.md)

#### Returns

`Promise`\<[`botMenuButton`](../type-aliases/botMenuButton-1.md)\>

Promise<[BotMenuButton](../type-aliases/BotMenuButton.md)>

#### Defined in

dist/generated/types.d.ts:71361

***

### getMessage()

> **getMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Returns information about a message

#### Parameters

• **parameters**: [`getMessage$DirectInput`](../type-aliases/getMessage$DirectInput.md)

[getMessage$Input](../type-aliases/getMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:67750

***

### getMessageAddedReactions()

> **getMessageAddedReactions**(`parameters`): `Promise`\<[`addedReactions`](../type-aliases/addedReactions-1.md)\>

Returns reactions added for a message, along with their sender

#### Parameters

• **parameters**: [`getMessageAddedReactions$DirectInput`](../type-aliases/getMessageAddedReactions$DirectInput.md)

[getMessageAddedReactions$Input](../type-aliases/getMessageAddedReactions$Input.md)

#### Returns

`Promise`\<[`addedReactions`](../type-aliases/addedReactions-1.md)\>

Promise<[AddedReactions](../type-aliases/AddedReactions.md)>

#### Defined in

dist/generated/types.d.ts:68825

***

### getMessageAvailableReactions()

> **getMessageAvailableReactions**(`parameters`): `Promise`\<[`availableReactions`](../type-aliases/availableReactions-1.md)\>

Returns reactions, which can be added to a message. The list can change after updateActiveEmojiReactions, updateChatAvailableReactions for the chat, or updateMessageInteractionInfo for the message

#### Parameters

• **parameters**: [`getMessageAvailableReactions$DirectInput`](../type-aliases/getMessageAvailableReactions$DirectInput.md)

[getMessageAvailableReactions$Input](../type-aliases/getMessageAvailableReactions$Input.md)

#### Returns

`Promise`\<[`availableReactions`](../type-aliases/availableReactions-1.md)\>

Promise<[AvailableReactions](../type-aliases/AvailableReactions.md)>

#### Defined in

dist/generated/types.d.ts:68790

***

### getMessageEffect()

> **getMessageEffect**(`parameters`): `Promise`\<[`messageEffect`](../type-aliases/messageEffect-1.md)\>

Returns information about a message effect. Returns a 404 error if the effect is not found

#### Parameters

• **parameters**: [`getMessageEffect$DirectInput`](../type-aliases/getMessageEffect$DirectInput.md)

[getMessageEffect$Input](../type-aliases/getMessageEffect$Input.md)

#### Returns

`Promise`\<[`messageEffect`](../type-aliases/messageEffect-1.md)\>

Promise<[MessageEffect](../type-aliases/MessageEffect.md)>

#### Defined in

dist/generated/types.d.ts:68853

***

### getMessageEmbeddingCode()

> **getMessageEmbeddingCode**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns an HTML code for embedding the message. Available only for messages in supergroups and channels with a username

#### Parameters

• **parameters**: [`getMessageEmbeddingCode$DirectInput`](../type-aliases/getMessageEmbeddingCode$DirectInput.md)

[getMessageEmbeddingCode$Input](../type-aliases/getMessageEmbeddingCode$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:68305

***

### getMessageFileType()

> **getMessageFileType**(`parameters`): `Promise`\<[`MessageFileType`](../type-aliases/MessageFileType.md)\>

Returns information about a file with messages exported from another application

#### Parameters

• **parameters**: [`getMessageFileType$DirectInput`](../type-aliases/getMessageFileType$DirectInput.md)

[getMessageFileType$Input](../type-aliases/getMessageFileType$Input.md)

#### Returns

`Promise`\<[`MessageFileType`](../type-aliases/MessageFileType.md)\>

Promise<[MessageFileType](../type-aliases/MessageFileType.md)>

#### Defined in

dist/generated/types.d.ts:70273

***

### getMessageImportConfirmationText()

> **getMessageImportConfirmationText**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns a confirmation text to be shown to the user before starting message import

#### Parameters

• **parameters**: [`getMessageImportConfirmationText$DirectInput`](../type-aliases/getMessageImportConfirmationText$DirectInput.md)

[getMessageImportConfirmationText$Input](../type-aliases/getMessageImportConfirmationText$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:70280

***

### getMessageLink()

> **getMessageLink**(`parameters`): `Promise`\<[`messageLink`](../type-aliases/messageLink-1.md)\>

Returns an HTTPS link to a message in a chat. Available only for already sent messages in supergroups and channels, or if message.can_get_media_timestamp_links and a media timestamp link is generated. This is an offline request

#### Parameters

• **parameters**: [`getMessageLink$DirectInput`](../type-aliases/getMessageLink$DirectInput.md)

[getMessageLink$Input](../type-aliases/getMessageLink$Input.md)

#### Returns

`Promise`\<[`messageLink`](../type-aliases/messageLink-1.md)\>

Promise<[MessageLink](../type-aliases/MessageLink.md)>

#### Defined in

dist/generated/types.d.ts:68298

***

### getMessageLinkInfo()

> **getMessageLinkInfo**(`parameters`): `Promise`\<[`messageLinkInfo`](../type-aliases/messageLinkInfo-1.md)\>

Returns information about a public or private message link. Can be called for any internal link of the type internalLinkTypeMessage

#### Parameters

• **parameters**: [`getMessageLinkInfo$DirectInput`](../type-aliases/getMessageLinkInfo$DirectInput.md)

[getMessageLinkInfo$Input](../type-aliases/getMessageLinkInfo$Input.md)

#### Returns

`Promise`\<[`messageLinkInfo`](../type-aliases/messageLinkInfo-1.md)\>

Promise<[MessageLinkInfo](../type-aliases/MessageLinkInfo.md)>

#### Defined in

dist/generated/types.d.ts:68312

***

### getMessageLocally()

> **getMessageLocally**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Returns information about a message, if it is available without sending network request. This is an offline request

#### Parameters

• **parameters**: [`getMessageLocally$DirectInput`](../type-aliases/getMessageLocally$DirectInput.md)

[getMessageLocally$Input](../type-aliases/getMessageLocally$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:67757

***

### getMessagePublicForwards()

> **getMessagePublicForwards**(`parameters`): `Promise`\<[`publicForwards`](../type-aliases/publicForwards-1.md)\>

Returns forwarded copies of a channel message to different public channels and public reposts as a story. Can be used only if message.can_get_statistics == true. For optimal performance, the number of returned messages and stories is chosen by TDLib

#### Parameters

• **parameters**: [`getMessagePublicForwards$DirectInput`](../type-aliases/getMessagePublicForwards$DirectInput.md)

[getMessagePublicForwards$Input](../type-aliases/getMessagePublicForwards$Input.md)

#### Returns

`Promise`\<[`publicForwards`](../type-aliases/publicForwards-1.md)\>

Promise<[PublicForwards](../type-aliases/PublicForwards.md)>

#### Defined in

dist/generated/types.d.ts:72090

***

### getMessageReadDate()

> **getMessageReadDate**(`parameters`): `Promise`\<[`MessageReadDate`](../type-aliases/MessageReadDate.md)\>

Returns read date of a recent outgoing message in a private chat. The method can be called if message.can_get_read_date == true and the message is read

#### Parameters

• **parameters**: [`getMessageReadDate$DirectInput`](../type-aliases/getMessageReadDate$DirectInput.md)

[getMessageReadDate$Input](../type-aliases/getMessageReadDate$Input.md)

#### Returns

`Promise`\<[`MessageReadDate`](../type-aliases/MessageReadDate.md)\>

Promise<[MessageReadDate](../type-aliases/MessageReadDate.md)>

#### Defined in

dist/generated/types.d.ts:67803

***

### getMessageStatistics()

> **getMessageStatistics**(`parameters`): `Promise`\<[`messageStatistics`](../type-aliases/messageStatistics-1.md)\>

Returns detailed statistics about a message. Can be used only if message.can_get_statistics == true

#### Parameters

• **parameters**: [`getMessageStatistics$DirectInput`](../type-aliases/getMessageStatistics$DirectInput.md)

[getMessageStatistics$Input](../type-aliases/getMessageStatistics$Input.md)

#### Returns

`Promise`\<[`messageStatistics`](../type-aliases/messageStatistics-1.md)\>

Promise<[MessageStatistics](../type-aliases/MessageStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72083

***

### getMessageThread()

> **getMessageThread**(`parameters`): `Promise`\<[`messageThreadInfo`](../type-aliases/messageThreadInfo-1.md)\>

Returns information about a message thread. Can be used only if message.can_get_message_thread == true

#### Parameters

• **parameters**: [`getMessageThread$DirectInput`](../type-aliases/getMessageThread$DirectInput.md)

[getMessageThread$Input](../type-aliases/getMessageThread$Input.md)

#### Returns

`Promise`\<[`messageThreadInfo`](../type-aliases/messageThreadInfo-1.md)\>

Promise<[MessageThreadInfo](../type-aliases/MessageThreadInfo.md)>

#### Defined in

dist/generated/types.d.ts:67796

***

### getMessageThreadHistory()

> **getMessageThreadHistory**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Returns messages in a message thread of a message. Can be used only if message.can_get_message_thread == true. Message thread of a channel message is in the channel's linked supergroup.

- The messages are returned in a reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib

#### Parameters

• **parameters**: [`getMessageThreadHistory$DirectInput`](../type-aliases/getMessageThreadHistory$DirectInput.md)

[getMessageThreadHistory$Input](../type-aliases/getMessageThreadHistory$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68074

***

### getMessageViewers()

> **getMessageViewers**(`parameters`): `Promise`\<[`messageViewers`](../type-aliases/messageViewers-1.md)\>

Returns viewers of a recent outgoing message in a basic group or a supergroup chat. For video notes and voice notes only users, opened content of the message, are returned. The method can be called if message.can_get_viewers == true

#### Parameters

• **parameters**: [`getMessageViewers$DirectInput`](../type-aliases/getMessageViewers$DirectInput.md)

[getMessageViewers$Input](../type-aliases/getMessageViewers$Input.md)

#### Returns

`Promise`\<[`messageViewers`](../type-aliases/messageViewers-1.md)\>

Promise<[MessageViewers](../type-aliases/MessageViewers.md)>

#### Defined in

dist/generated/types.d.ts:67810

***

### getMessages()

> **getMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Returns information about messages. If a message is not found, returns null on the corresponding position of the result

#### Parameters

• **parameters**: [`getMessages$DirectInput`](../type-aliases/getMessages$DirectInput.md)

[getMessages$Input](../type-aliases/getMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:67789

***

### getNetworkStatistics()

> **getNetworkStatistics**(`parameters`): `Promise`\<[`networkStatistics`](../type-aliases/networkStatistics-1.md)\>

Returns network data usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`getNetworkStatistics$DirectInput`](../type-aliases/getNetworkStatistics$DirectInput.md)

[getNetworkStatistics$Input](../type-aliases/getNetworkStatistics$Input.md)

#### Returns

`Promise`\<[`networkStatistics`](../type-aliases/networkStatistics-1.md)\>

Promise<[NetworkStatistics](../type-aliases/NetworkStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72148

***

### getNewChatPrivacySettings()

> **getNewChatPrivacySettings**(`parameters`): `Promise`\<[`newChatPrivacySettings`](../type-aliases/newChatPrivacySettings-1.md)\>

Returns privacy settings for new chat creation

#### Parameters

• **parameters**: [`getNewChatPrivacySettings$DirectInput`](../type-aliases/getNewChatPrivacySettings$DirectInput.md)

[getNewChatPrivacySettings$Input](../type-aliases/getNewChatPrivacySettings$Input.md)

#### Returns

`Promise`\<[`newChatPrivacySettings`](../type-aliases/newChatPrivacySettings-1.md)\>

Promise<[NewChatPrivacySettings](../type-aliases/NewChatPrivacySettings.md)>

#### Defined in

dist/generated/types.d.ts:71941

***

### getOption()

> **getOption**(`parameters`): `Promise`\<[`OptionValue`](../type-aliases/OptionValue.md)\>

Returns the value of an option by its name. (Check the list of available options on https://core.telegram.org/tdlib/options.) Can be called before authorization. Can be called synchronously for options "version" and "commit_hash"

#### Parameters

• **parameters**: [`getOption$DirectInput`](../type-aliases/getOption$DirectInput.md)

[getOption$Input](../type-aliases/getOption$Input.md)

#### Returns

`Promise`\<[`OptionValue`](../type-aliases/OptionValue.md)\>

Promise<[OptionValue](../type-aliases/OptionValue.md)>

#### Defined in

dist/generated/types.d.ts:71955

***

### getOwnedStickerSets()

> **getOwnedStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Returns sticker sets owned by the current user

#### Parameters

• **parameters**: [`getOwnedStickerSets$DirectInput`](../type-aliases/getOwnedStickerSets$DirectInput.md)

[getOwnedStickerSets$Input](../type-aliases/getOwnedStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Promise<[StickerSets](../type-aliases/StickerSets.md)>

#### Defined in

dist/generated/types.d.ts:72407

***

### getPassportAuthorizationForm()

> **getPassportAuthorizationForm**(`parameters`): `Promise`\<[`passportAuthorizationForm`](../type-aliases/passportAuthorizationForm-1.md)\>

Returns a Telegram Passport authorization form for sharing data with a service

#### Parameters

• **parameters**: [`getPassportAuthorizationForm$DirectInput`](../type-aliases/getPassportAuthorizationForm$DirectInput.md)

[getPassportAuthorizationForm$Input](../type-aliases/getPassportAuthorizationForm$Input.md)

#### Returns

`Promise`\<[`passportAuthorizationForm`](../type-aliases/passportAuthorizationForm-1.md)\>

Promise<[PassportAuthorizationForm](../type-aliases/PassportAuthorizationForm.md)>

#### Defined in

dist/generated/types.d.ts:72274

***

### getPassportAuthorizationFormAvailableElements()

> **getPassportAuthorizationFormAvailableElements**(`parameters`): `Promise`\<[`passportElementsWithErrors`](../type-aliases/passportElementsWithErrors-1.md)\>

Returns already available Telegram Passport elements suitable for completing a Telegram Passport authorization form. Result can be received only once for each authorization form

#### Parameters

• **parameters**: [`getPassportAuthorizationFormAvailableElements$DirectInput`](../type-aliases/getPassportAuthorizationFormAvailableElements$DirectInput.md)

[getPassportAuthorizationFormAvailableElements$Input](../type-aliases/getPassportAuthorizationFormAvailableElements$Input.md)

#### Returns

`Promise`\<[`passportElementsWithErrors`](../type-aliases/passportElementsWithErrors-1.md)\>

Promise<[PassportElementsWithErrors](../type-aliases/PassportElementsWithErrors.md)>

#### Defined in

dist/generated/types.d.ts:72281

***

### getPassportElement()

> **getPassportElement**(`parameters`): `Promise`\<[`PassportElement`](../type-aliases/PassportElement.md)\>

Returns one of the available Telegram Passport elements

#### Parameters

• **parameters**: [`getPassportElement$DirectInput`](../type-aliases/getPassportElement$DirectInput.md)

[getPassportElement$Input](../type-aliases/getPassportElement$Input.md)

#### Returns

`Promise`\<[`PassportElement`](../type-aliases/PassportElement.md)\>

Promise<[PassportElement](../type-aliases/PassportElement.md)>

#### Defined in

dist/generated/types.d.ts:72211

***

### getPasswordState()

> **getPasswordState**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Returns the current state of 2-step verification

#### Parameters

• **parameters**: [`getPasswordState$DirectInput`](../type-aliases/getPasswordState$DirectInput.md)

[getPasswordState$Input](../type-aliases/getPasswordState$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Promise<[PasswordState](../type-aliases/PasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67564

***

### getPaymentForm()

> **getPaymentForm**(`parameters`): `Promise`\<[`paymentForm`](../type-aliases/paymentForm-1.md)\>

Returns an invoice payment form. This method must be called when the user presses inline button of the type inlineKeyboardButtonTypeBuy, or wants to buy access to media in a messagePaidMedia message

#### Parameters

• **parameters**: [`getPaymentForm$DirectInput`](../type-aliases/getPaymentForm$DirectInput.md)

[getPaymentForm$Input](../type-aliases/getPaymentForm$Input.md)

#### Returns

`Promise`\<[`paymentForm`](../type-aliases/paymentForm-1.md)\>

Promise<[PaymentForm](../type-aliases/PaymentForm.md)>

#### Defined in

dist/generated/types.d.ts:71692

***

### getPaymentReceipt()

> **getPaymentReceipt**(`parameters`): `Promise`\<[`paymentReceipt`](../type-aliases/paymentReceipt-1.md)\>

Returns information about a successful payment

#### Parameters

• **parameters**: [`getPaymentReceipt$DirectInput`](../type-aliases/getPaymentReceipt$DirectInput.md)

[getPaymentReceipt$Input](../type-aliases/getPaymentReceipt$Input.md)

#### Returns

`Promise`\<[`paymentReceipt`](../type-aliases/paymentReceipt-1.md)\>

Promise<[PaymentReceipt](../type-aliases/PaymentReceipt.md)>

#### Defined in

dist/generated/types.d.ts:71713

***

### getPhoneNumberInfo()

> **getPhoneNumberInfo**(`parameters`): `Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo-1.md)\>

Returns information about a phone number by its prefix. Can be called before authorization

#### Parameters

• **parameters**: [`getPhoneNumberInfo$DirectInput`](../type-aliases/getPhoneNumberInfo$DirectInput.md)

[getPhoneNumberInfo$Input](../type-aliases/getPhoneNumberInfo$Input.md)

#### Returns

`Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo-1.md)\>

Promise<[PhoneNumberInfo](../type-aliases/PhoneNumberInfo.md)>

#### Defined in

dist/generated/types.d.ts:72589

***

### getPhoneNumberInfoSync()

> **getPhoneNumberInfoSync**(`parameters`): `Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo-1.md)\>

Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after changing localization to the specified language if properly localized country information is expected. Can be called synchronously

#### Parameters

• **parameters**: [`getPhoneNumberInfoSync$DirectInput`](../type-aliases/getPhoneNumberInfoSync$DirectInput.md)

[getPhoneNumberInfoSync$Input](../type-aliases/getPhoneNumberInfoSync$Input.md)

#### Returns

`Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo-1.md)\>

Promise<[PhoneNumberInfo](../type-aliases/PhoneNumberInfo.md)>

#### Defined in

dist/generated/types.d.ts:72596

***

### getPollVoters()

> **getPollVoters**(`parameters`): `Promise`\<[`messageSenders`](../type-aliases/messageSenders-1.md)\>

Returns message senders voted for the specified option in a non-anonymous polls. For optimal performance, the number of returned users is chosen by TDLib

#### Parameters

• **parameters**: [`getPollVoters$DirectInput`](../type-aliases/getPollVoters$DirectInput.md)

[getPollVoters$Input](../type-aliases/getPollVoters$Input.md)

#### Returns

`Promise`\<[`messageSenders`](../type-aliases/messageSenders-1.md)\>

Promise<[MessageSenders](../type-aliases/MessageSenders.md)>

#### Defined in

dist/generated/types.d.ts:68960

***

### getPreferredCountryLanguage()

> **getPreferredCountryLanguage**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns an IETF language tag of the language preferred in the country, which must be used to fill native fields in Telegram Passport personal details. Returns a 404 error if unknown

#### Parameters

• **parameters**: [`getPreferredCountryLanguage$DirectInput`](../type-aliases/getPreferredCountryLanguage$DirectInput.md)

[getPreferredCountryLanguage$Input](../type-aliases/getPreferredCountryLanguage$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:72246

***

### getPremiumFeatures()

> **getPremiumFeatures**(`parameters`): `Promise`\<[`premiumFeatures`](../type-aliases/premiumFeatures-1.md)\>

Returns information about features, available to Premium users

#### Parameters

• **parameters**: [`getPremiumFeatures$DirectInput`](../type-aliases/getPremiumFeatures$DirectInput.md)

[getPremiumFeatures$Input](../type-aliases/getPremiumFeatures$Input.md)

#### Returns

`Promise`\<[`premiumFeatures`](../type-aliases/premiumFeatures-1.md)\>

Promise<[PremiumFeatures](../type-aliases/PremiumFeatures.md)>

#### Defined in

dist/generated/types.d.ts:72428

***

### getPremiumGiftCodePaymentOptions()

> **getPremiumGiftCodePaymentOptions**(`parameters`): `Promise`\<[`premiumGiftCodePaymentOptions`](../type-aliases/premiumGiftCodePaymentOptions-1.md)\>

Returns available options for Telegram Premium gift code or giveaway creation

#### Parameters

• **parameters**: [`getPremiumGiftCodePaymentOptions$DirectInput`](../type-aliases/getPremiumGiftCodePaymentOptions$DirectInput.md)

[getPremiumGiftCodePaymentOptions$Input](../type-aliases/getPremiumGiftCodePaymentOptions$Input.md)

#### Returns

`Promise`\<[`premiumGiftCodePaymentOptions`](../type-aliases/premiumGiftCodePaymentOptions-1.md)\>

Promise<[PremiumGiftCodePaymentOptions](../type-aliases/PremiumGiftCodePaymentOptions.md)>

#### Defined in

dist/generated/types.d.ts:72463

***

### getPremiumGiveawayInfo()

> **getPremiumGiveawayInfo**(`parameters`): `Promise`\<[`PremiumGiveawayInfo`](../type-aliases/PremiumGiveawayInfo.md)\>

Returns information about a Telegram Premium giveaway

#### Parameters

• **parameters**: [`getPremiumGiveawayInfo$DirectInput`](../type-aliases/getPremiumGiveawayInfo$DirectInput.md)

[getPremiumGiveawayInfo$Input](../type-aliases/getPremiumGiveawayInfo$Input.md)

#### Returns

`Promise`\<[`PremiumGiveawayInfo`](../type-aliases/PremiumGiveawayInfo.md)\>

Promise<[PremiumGiveawayInfo](../type-aliases/PremiumGiveawayInfo.md)>

#### Defined in

dist/generated/types.d.ts:72491

***

### getPremiumLimit()

> **getPremiumLimit**(`parameters`): `Promise`\<[`premiumLimit`](../type-aliases/premiumLimit-1.md)\>

Returns information about a limit, increased for Premium users. Returns a 404 error if the limit is unknown

#### Parameters

• **parameters**: [`getPremiumLimit$DirectInput`](../type-aliases/getPremiumLimit$DirectInput.md)

[getPremiumLimit$Input](../type-aliases/getPremiumLimit$Input.md)

#### Returns

`Promise`\<[`premiumLimit`](../type-aliases/premiumLimit-1.md)\>

Promise<[PremiumLimit](../type-aliases/PremiumLimit.md)>

#### Defined in

dist/generated/types.d.ts:72421

***

### getPremiumState()

> **getPremiumState**(`parameters`): `Promise`\<[`premiumState`](../type-aliases/premiumState-1.md)\>

Returns state of Telegram Premium subscription and promotion videos for Premium features

#### Parameters

• **parameters**: [`getPremiumState$DirectInput`](../type-aliases/getPremiumState$DirectInput.md)

[getPremiumState$Input](../type-aliases/getPremiumState$Input.md)

#### Returns

`Promise`\<[`premiumState`](../type-aliases/premiumState-1.md)\>

Promise<[PremiumState](../type-aliases/PremiumState.md)>

#### Defined in

dist/generated/types.d.ts:72456

***

### getPremiumStickerExamples()

> **getPremiumStickerExamples**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns examples of premium stickers for demonstration purposes

#### Parameters

• **parameters**: [`getPremiumStickerExamples$DirectInput`](../type-aliases/getPremiumStickerExamples$DirectInput.md)

[getPremiumStickerExamples$Input](../type-aliases/getPremiumStickerExamples$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:72435

***

### getPremiumStickers()

> **getPremiumStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns premium stickers from regular sticker sets

#### Parameters

• **parameters**: [`getPremiumStickers$DirectInput`](../type-aliases/getPremiumStickers$DirectInput.md)

[getPremiumStickers$Input](../type-aliases/getPremiumStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70816

***

### getProxies()

> **getProxies**(`parameters`): `Promise`\<[`proxies`](../type-aliases/proxies-1.md)\>

Returns the list of proxies that are currently set up. Can be called before authorization

#### Parameters

• **parameters**: [`getProxies$DirectInput`](../type-aliases/getProxies$DirectInput.md)

[getProxies$Input](../type-aliases/getProxies$Input.md)

#### Returns

`Promise`\<[`proxies`](../type-aliases/proxies-1.md)\>

Promise<[Proxies](../type-aliases/Proxies.md)>

#### Defined in

dist/generated/types.d.ts:72673

***

### getProxyLink()

> **getProxyLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5 and MTProto proxies. Can be called before authorization

#### Parameters

• **parameters**: [`getProxyLink$DirectInput`](../type-aliases/getProxyLink$DirectInput.md)

[getProxyLink$Input](../type-aliases/getProxyLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:72680

***

### getPushReceiverId()

> **getPushReceiverId**(`parameters`): `Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId-1.md)\>

Returns a globally unique push notification subscription identifier for identification of an account, which has received a push notification. Can be called synchronously

#### Parameters

• **parameters**: [`getPushReceiverId$DirectInput`](../type-aliases/getPushReceiverId$DirectInput.md)

[getPushReceiverId$Input](../type-aliases/getPushReceiverId$Input.md)

#### Returns

`Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId-1.md)\>

Promise<[PushReceiverId](../type-aliases/PushReceiverId.md)>

#### Defined in

dist/generated/types.d.ts:71892

***

### getReadDatePrivacySettings()

> **getReadDatePrivacySettings**(`parameters`): `Promise`\<[`readDatePrivacySettings`](../type-aliases/readDatePrivacySettings-1.md)\>

Returns privacy settings for message read date

#### Parameters

• **parameters**: [`getReadDatePrivacySettings$DirectInput`](../type-aliases/getReadDatePrivacySettings$DirectInput.md)

[getReadDatePrivacySettings$Input](../type-aliases/getReadDatePrivacySettings$Input.md)

#### Returns

`Promise`\<[`readDatePrivacySettings`](../type-aliases/readDatePrivacySettings-1.md)\>

Promise<[ReadDatePrivacySettings](../type-aliases/ReadDatePrivacySettings.md)>

#### Defined in

dist/generated/types.d.ts:71927

***

### getRecentEmojiStatuses()

> **getRecentEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Returns recent emoji statuses for self status

#### Parameters

• **parameters**: [`getRecentEmojiStatuses$DirectInput`](../type-aliases/getRecentEmojiStatuses$DirectInput.md)

[getRecentEmojiStatuses$Input](../type-aliases/getRecentEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses.md)>

#### Defined in

dist/generated/types.d.ts:70099

***

### getRecentInlineBots()

> **getRecentInlineBots**(`parameters`): `Promise`\<[`users`](../type-aliases/users-1.md)\>

Returns up to 20 recently used inline bots in the order of their last usage

#### Parameters

• **parameters**: [`getRecentInlineBots$DirectInput`](../type-aliases/getRecentInlineBots$DirectInput.md)

[getRecentInlineBots$Input](../type-aliases/getRecentInlineBots$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users-1.md)\>

Promise<[Users](../type-aliases/Users.md)>

#### Defined in

dist/generated/types.d.ts:71046

***

### getRecentStickers()

> **getRecentStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns a list of recently used stickers

#### Parameters

• **parameters**: [`getRecentStickers$DirectInput`](../type-aliases/getRecentStickers$DirectInput.md)

[getRecentStickers$Input](../type-aliases/getRecentStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70900

***

### getRecentlyOpenedChats()

> **getRecentlyOpenedChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns recently opened chats; this is an offline request. Returns chats in the order of last opening

#### Parameters

• **parameters**: [`getRecentlyOpenedChats$DirectInput`](../type-aliases/getRecentlyOpenedChats$DirectInput.md)

[getRecentlyOpenedChats$Input](../type-aliases/getRecentlyOpenedChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67956

***

### getRecentlyVisitedTMeUrls()

> **getRecentlyVisitedTMeUrls**(`parameters`): `Promise`\<[`tMeUrls`](../type-aliases/tMeUrls-1.md)\>

Returns t.me URLs recently visited by a newly registered user

#### Parameters

• **parameters**: [`getRecentlyVisitedTMeUrls$DirectInput`](../type-aliases/getRecentlyVisitedTMeUrls$DirectInput.md)

[getRecentlyVisitedTMeUrls$Input](../type-aliases/getRecentlyVisitedTMeUrls$Input.md)

#### Returns

`Promise`\<[`tMeUrls`](../type-aliases/tMeUrls-1.md)\>

Promise<[TMeUrls](../type-aliases/TMeUrls.md)>

#### Defined in

dist/generated/types.d.ts:71899

***

### getRecommendedChatFolders()

> **getRecommendedChatFolders**(`parameters`): `Promise`\<[`recommendedChatFolders`](../type-aliases/recommendedChatFolders-1.md)\>

Returns recommended chat folders for the current user

#### Parameters

• **parameters**: [`getRecommendedChatFolders$DirectInput`](../type-aliases/getRecommendedChatFolders$DirectInput.md)

[getRecommendedChatFolders$Input](../type-aliases/getRecommendedChatFolders$Input.md)

#### Returns

`Promise`\<[`recommendedChatFolders`](../type-aliases/recommendedChatFolders-1.md)\>

Promise<[RecommendedChatFolders](../type-aliases/RecommendedChatFolders.md)>

#### Defined in

dist/generated/types.d.ts:69381

***

### getRecommendedChats()

> **getRecommendedChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of channel chats recommended to the current user

#### Parameters

• **parameters**: [`getRecommendedChats$DirectInput`](../type-aliases/getRecommendedChats$DirectInput.md)

[getRecommendedChats$Input](../type-aliases/getRecommendedChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67886

***

### getRecoveryEmailAddress()

> **getRecoveryEmailAddress**(`parameters`): `Promise`\<[`recoveryEmailAddress`](../type-aliases/recoveryEmailAddress-1.md)\>

Returns a 2-step verification recovery email address that was previously set up. This method can be used to verify a password provided by the user

#### Parameters

• **parameters**: [`getRecoveryEmailAddress$DirectInput`](../type-aliases/getRecoveryEmailAddress$DirectInput.md)

[getRecoveryEmailAddress$Input](../type-aliases/getRecoveryEmailAddress$Input.md)

#### Returns

`Promise`\<[`recoveryEmailAddress`](../type-aliases/recoveryEmailAddress-1.md)\>

Promise<[RecoveryEmailAddress](../type-aliases/RecoveryEmailAddress.md)>

#### Defined in

dist/generated/types.d.ts:67601

***

### getRemoteFile()

> **getRemoteFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file-1.md)\>

Returns information about a file by its remote identifier; this is an offline request. Can be used to register a URL as a file for further uploading, or sending as a message. Even the request succeeds, the file can be used only if it is still accessible to the user.

- For example, if the file is from a message, then the message must be not deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the application

#### Parameters

• **parameters**: [`getRemoteFile$DirectInput`](../type-aliases/getRemoteFile$DirectInput.md)

[getRemoteFile$Input](../type-aliases/getRemoteFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file-1.md)\>

Promise<[File](../type-aliases/File.md)>

#### Defined in

dist/generated/types.d.ts:67826

***

### getRepliedMessage()

> **getRepliedMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Returns information about a non-bundled message that is replied by a given message. Also, returns the pinned message, the game message, the invoice message,

- the message with a previously set same background, the giveaway message, and the topic creation message for messages of the types

- messagePinMessage, messageGameScore, messagePaymentSuccessful, messageChatSetBackground, messagePremiumGiveawayCompleted and topic messages without non-bundled replied message respectively

#### Parameters

• **parameters**: [`getRepliedMessage$DirectInput`](../type-aliases/getRepliedMessage$DirectInput.md)

[getRepliedMessage$Input](../type-aliases/getRepliedMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:67768

***

### getSavedAnimations()

> **getSavedAnimations**(`parameters`): `Promise`\<[`animations`](../type-aliases/animations-1.md)\>

Returns saved animations

#### Parameters

• **parameters**: [`getSavedAnimations$DirectInput`](../type-aliases/getSavedAnimations$DirectInput.md)

[getSavedAnimations$Input](../type-aliases/getSavedAnimations$Input.md)

#### Returns

`Promise`\<[`animations`](../type-aliases/animations-1.md)\>

Promise<[Animations](../type-aliases/Animations.md)>

#### Defined in

dist/generated/types.d.ts:71023

***

### getSavedMessagesTags()

> **getSavedMessagesTags**(`parameters`): `Promise`\<[`savedMessagesTags`](../type-aliases/savedMessagesTags-1.md)\>

Returns tags used in Saved Messages or a Saved Messages topic

#### Parameters

• **parameters**: [`getSavedMessagesTags$DirectInput`](../type-aliases/getSavedMessagesTags$DirectInput.md)

[getSavedMessagesTags$Input](../type-aliases/getSavedMessagesTags$Input.md)

#### Returns

`Promise`\<[`savedMessagesTags`](../type-aliases/savedMessagesTags-1.md)\>

Promise<[SavedMessagesTags](../type-aliases/SavedMessagesTags.md)>

#### Defined in

dist/generated/types.d.ts:68839

***

### getSavedMessagesTopicHistory()

> **getSavedMessagesTopicHistory**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Returns messages in a Saved Messages topic. The messages are returned in a reverse chronological order (i.e., in order of decreasing message_id)

#### Parameters

• **parameters**: [`getSavedMessagesTopicHistory$DirectInput`](../type-aliases/getSavedMessagesTopicHistory$DirectInput.md)

[getSavedMessagesTopicHistory$Input](../type-aliases/getSavedMessagesTopicHistory$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68014

***

### getSavedMessagesTopicMessageByDate()

> **getSavedMessagesTopicMessageByDate**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Returns the last message sent in a Saved Messages topic no later than the specified date

#### Parameters

• **parameters**: [`getSavedMessagesTopicMessageByDate$DirectInput`](../type-aliases/getSavedMessagesTopicMessageByDate$DirectInput.md)

[getSavedMessagesTopicMessageByDate$Input](../type-aliases/getSavedMessagesTopicMessageByDate$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68021

***

### getSavedNotificationSound()

> **getSavedNotificationSound**(`parameters`): `Promise`\<[`notificationSounds`](../type-aliases/notificationSounds-1.md)\>

Returns saved notification sound by its identifier. Returns a 404 error if there is no saved notification sound with the specified identifier

#### Parameters

• **parameters**: [`getSavedNotificationSound$DirectInput`](../type-aliases/getSavedNotificationSound$DirectInput.md)

[getSavedNotificationSound$Input](../type-aliases/getSavedNotificationSound$Input.md)

#### Returns

`Promise`\<[`notificationSounds`](../type-aliases/notificationSounds-1.md)\>

Promise<[NotificationSounds](../type-aliases/NotificationSounds.md)>

#### Defined in

dist/generated/types.d.ts:69753

***

### getSavedNotificationSounds()

> **getSavedNotificationSounds**(`parameters`): `Promise`\<[`notificationSounds`](../type-aliases/notificationSounds-1.md)\>

Returns the list of saved notification sounds. If a sound isn't in the list, then default sound needs to be used

#### Parameters

• **parameters**: [`getSavedNotificationSounds$DirectInput`](../type-aliases/getSavedNotificationSounds$DirectInput.md)

[getSavedNotificationSounds$Input](../type-aliases/getSavedNotificationSounds$Input.md)

#### Returns

`Promise`\<[`notificationSounds`](../type-aliases/notificationSounds-1.md)\>

Promise<[NotificationSounds](../type-aliases/NotificationSounds.md)>

#### Defined in

dist/generated/types.d.ts:69760

***

### getSavedOrderInfo()

> **getSavedOrderInfo**(`parameters`): `Promise`\<[`orderInfo`](../type-aliases/orderInfo-1.md)\>

Returns saved order information. Returns a 404 error if there is no saved order information

#### Parameters

• **parameters**: [`getSavedOrderInfo$DirectInput`](../type-aliases/getSavedOrderInfo$DirectInput.md)

[getSavedOrderInfo$Input](../type-aliases/getSavedOrderInfo$Input.md)

#### Returns

`Promise`\<[`orderInfo`](../type-aliases/orderInfo-1.md)\>

Promise<[OrderInfo](../type-aliases/OrderInfo.md)>

#### Defined in

dist/generated/types.d.ts:71720

***

### getScopeNotificationSettings()

> **getScopeNotificationSettings**(`parameters`): `Promise`\<[`scopeNotificationSettings`](../type-aliases/scopeNotificationSettings-1.md)\>

Returns the notification settings for chats of a given type

#### Parameters

• **parameters**: [`getScopeNotificationSettings$DirectInput`](../type-aliases/getScopeNotificationSettings$DirectInput.md)

[getScopeNotificationSettings$Input](../type-aliases/getScopeNotificationSettings$Input.md)

#### Returns

`Promise`\<[`scopeNotificationSettings`](../type-aliases/scopeNotificationSettings-1.md)\>

Promise<[ScopeNotificationSettings](../type-aliases/ScopeNotificationSettings.md)>

#### Defined in

dist/generated/types.d.ts:69788

***

### getSearchedForTags()

> **getSearchedForTags**(`parameters`): `Promise`\<[`hashtags`](../type-aliases/hashtags-1.md)\>

Returns recently searched for hashtags or cashtags by their prefix

#### Parameters

• **parameters**: [`getSearchedForTags$DirectInput`](../type-aliases/getSearchedForTags$DirectInput.md)

[getSearchedForTags$Input](../type-aliases/getSearchedForTags$Input.md)

#### Returns

`Promise`\<[`hashtags`](../type-aliases/hashtags-1.md)\>

Promise<[Hashtags](../type-aliases/Hashtags.md)>

#### Defined in

dist/generated/types.d.ts:68177

***

### getSecretChat()

> **getSecretChat**(`parameters`): `Promise`\<[`secretChat`](../type-aliases/secretChat-1.md)\>

Returns information about a secret chat by its identifier. This is an offline request

#### Parameters

• **parameters**: [`getSecretChat$DirectInput`](../type-aliases/getSecretChat$DirectInput.md)

[getSecretChat$Input](../type-aliases/getSecretChat$Input.md)

#### Returns

`Promise`\<[`secretChat`](../type-aliases/secretChat-1.md)\>

Promise<[SecretChat](../type-aliases/SecretChat.md)>

#### Defined in

dist/generated/types.d.ts:67736

***

### getStarAdAccountUrl()

> **getStarAdAccountUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for the chat paid in the owned Telegram stars

#### Parameters

• **parameters**: [`getStarAdAccountUrl$DirectInput`](../type-aliases/getStarAdAccountUrl$DirectInput.md)

[getStarAdAccountUrl$Input](../type-aliases/getStarAdAccountUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:72069

***

### getStarPaymentOptions()

> **getStarPaymentOptions**(`parameters`): `Promise`\<[`starPaymentOptions`](../type-aliases/starPaymentOptions-1.md)\>

Returns available options for Telegram stars purchase

#### Parameters

• **parameters**: [`getStarPaymentOptions$DirectInput`](../type-aliases/getStarPaymentOptions$DirectInput.md)

[getStarPaymentOptions$Input](../type-aliases/getStarPaymentOptions$Input.md)

#### Returns

`Promise`\<[`starPaymentOptions`](../type-aliases/starPaymentOptions-1.md)\>

Promise<[StarPaymentOptions](../type-aliases/StarPaymentOptions.md)>

#### Defined in

dist/generated/types.d.ts:72498

***

### getStarRevenueStatistics()

> **getStarRevenueStatistics**(`parameters`): `Promise`\<[`starRevenueStatistics`](../type-aliases/starRevenueStatistics-1.md)\>

Returns detailed Telegram star revenue statistics

#### Parameters

• **parameters**: [`getStarRevenueStatistics$DirectInput`](../type-aliases/getStarRevenueStatistics$DirectInput.md)

[getStarRevenueStatistics$Input](../type-aliases/getStarRevenueStatistics$Input.md)

#### Returns

`Promise`\<[`starRevenueStatistics`](../type-aliases/starRevenueStatistics-1.md)\>

Promise<[StarRevenueStatistics](../type-aliases/StarRevenueStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72055

***

### getStarTransactions()

> **getStarTransactions**(`parameters`): `Promise`\<[`starTransactions`](../type-aliases/starTransactions-1.md)\>

Returns the list of Telegram star transactions for the specified owner

#### Parameters

• **parameters**: [`getStarTransactions$DirectInput`](../type-aliases/getStarTransactions$DirectInput.md)

[getStarTransactions$Input](../type-aliases/getStarTransactions$Input.md)

#### Returns

`Promise`\<[`starTransactions`](../type-aliases/starTransactions-1.md)\>

Promise<[StarTransactions](../type-aliases/StarTransactions.md)>

#### Defined in

dist/generated/types.d.ts:72505

***

### getStarWithdrawalUrl()

> **getStarWithdrawalUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns a URL for Telegram star withdrawal

#### Parameters

• **parameters**: [`getStarWithdrawalUrl$DirectInput`](../type-aliases/getStarWithdrawalUrl$DirectInput.md)

[getStarWithdrawalUrl$Input](../type-aliases/getStarWithdrawalUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:72062

***

### getStatisticalGraph()

> **getStatisticalGraph**(`parameters`): `Promise`\<[`StatisticalGraph`](../type-aliases/StatisticalGraph.md)\>

Loads an asynchronous or a zoomed in statistical graph

#### Parameters

• **parameters**: [`getStatisticalGraph$DirectInput`](../type-aliases/getStatisticalGraph$DirectInput.md)

[getStatisticalGraph$Input](../type-aliases/getStatisticalGraph$Input.md)

#### Returns

`Promise`\<[`StatisticalGraph`](../type-aliases/StatisticalGraph.md)\>

Promise<[StatisticalGraph](../type-aliases/StatisticalGraph.md)>

#### Defined in

dist/generated/types.d.ts:72104

***

### getStickerEmojis()

> **getStickerEmojis**(`parameters`): `Promise`\<[`emojis`](../type-aliases/emojis-1.md)\>

Returns emoji corresponding to a sticker. The list is only for informational purposes, because a sticker is always sent with a fixed emoji from the corresponding Sticker object

#### Parameters

• **parameters**: [`getStickerEmojis$DirectInput`](../type-aliases/getStickerEmojis$DirectInput.md)

[getStickerEmojis$Input](../type-aliases/getStickerEmojis$Input.md)

#### Returns

`Promise`\<[`emojis`](../type-aliases/emojis-1.md)\>

Promise<[Emojis](../type-aliases/Emojis.md)>

#### Defined in

dist/generated/types.d.ts:70953

***

### getStickerSet()

> **getStickerSet**(`parameters`): `Promise`\<[`stickerSet`](../type-aliases/stickerSet-1.md)\>

Returns information about a sticker set by its identifier

#### Parameters

• **parameters**: [`getStickerSet$DirectInput`](../type-aliases/getStickerSet$DirectInput.md)

[getStickerSet$Input](../type-aliases/getStickerSet$Input.md)

#### Returns

`Promise`\<[`stickerSet`](../type-aliases/stickerSet-1.md)\>

Promise<[StickerSet](../type-aliases/StickerSet.md)>

#### Defined in

dist/generated/types.d.ts:70851

***

### getStickers()

> **getStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Returns stickers from the installed sticker sets that correspond to any of the given emoji or can be found by sticker-specific keywords. If the query is non-empty, then favorite, recently used or trending stickers may also be returned

#### Parameters

• **parameters**: [`getStickers$DirectInput`](../type-aliases/getStickers$DirectInput.md)

[getStickers$Input](../type-aliases/getStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70788

***

### getStorageStatistics()

> **getStorageStatistics**(`parameters`): `Promise`\<[`storageStatistics`](../type-aliases/storageStatistics-1.md)\>

Returns storage usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`getStorageStatistics$DirectInput`](../type-aliases/getStorageStatistics$DirectInput.md)

[getStorageStatistics$Input](../type-aliases/getStorageStatistics$Input.md)

#### Returns

`Promise`\<[`storageStatistics`](../type-aliases/storageStatistics-1.md)\>

Promise<[StorageStatistics](../type-aliases/StorageStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72111

***

### getStorageStatisticsFast()

> **getStorageStatisticsFast**(`parameters`): `Promise`\<[`storageStatisticsFast`](../type-aliases/storageStatisticsFast-1.md)\>

Quickly returns approximate storage usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`getStorageStatisticsFast$DirectInput`](../type-aliases/getStorageStatisticsFast$DirectInput.md)

[getStorageStatisticsFast$Input](../type-aliases/getStorageStatisticsFast$Input.md)

#### Returns

`Promise`\<[`storageStatisticsFast`](../type-aliases/storageStatisticsFast-1.md)\>

Promise<[StorageStatisticsFast](../type-aliases/StorageStatisticsFast.md)>

#### Defined in

dist/generated/types.d.ts:72118

***

### getStory()

> **getStory**(`parameters`): `Promise`\<[`story`](../type-aliases/story-1.md)\>

Returns a story

#### Parameters

• **parameters**: [`getStory$DirectInput`](../type-aliases/getStory$DirectInput.md)

[getStory$Input](../type-aliases/getStory$Input.md)

#### Returns

`Promise`\<[`story`](../type-aliases/story-1.md)\>

Promise<[Story](../type-aliases/Story.md)>

#### Defined in

dist/generated/types.d.ts:69837

***

### getStoryAvailableReactions()

> **getStoryAvailableReactions**(`parameters`): `Promise`\<[`availableReactions`](../type-aliases/availableReactions-1.md)\>

Returns reactions, which can be chosen for a story

#### Parameters

• **parameters**: [`getStoryAvailableReactions$DirectInput`](../type-aliases/getStoryAvailableReactions$DirectInput.md)

[getStoryAvailableReactions$Input](../type-aliases/getStoryAvailableReactions$Input.md)

#### Returns

`Promise`\<[`availableReactions`](../type-aliases/availableReactions-1.md)\>

Promise<[AvailableReactions](../type-aliases/AvailableReactions.md)>

#### Defined in

dist/generated/types.d.ts:69962

***

### getStoryInteractions()

> **getStoryInteractions**(`parameters`): `Promise`\<[`storyInteractions`](../type-aliases/storyInteractions-1.md)\>

Returns interactions with a story. The method can be called only for stories posted on behalf of the current user

#### Parameters

• **parameters**: [`getStoryInteractions$DirectInput`](../type-aliases/getStoryInteractions$DirectInput.md)

[getStoryInteractions$Input](../type-aliases/getStoryInteractions$Input.md)

#### Returns

`Promise`\<[`storyInteractions`](../type-aliases/storyInteractions-1.md)\>

Promise<[StoryInteractions](../type-aliases/StoryInteractions.md)>

#### Defined in

dist/generated/types.d.ts:69976

***

### getStoryNotificationSettingsExceptions()

> **getStoryNotificationSettingsExceptions**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns the list of chats with non-default notification settings for stories

#### Parameters

• **parameters**: [`getStoryNotificationSettingsExceptions$DirectInput`](../type-aliases/getStoryNotificationSettingsExceptions$DirectInput.md)

[getStoryNotificationSettingsExceptions$Input](../type-aliases/getStoryNotificationSettingsExceptions$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:69893

***

### getStoryPublicForwards()

> **getStoryPublicForwards**(`parameters`): `Promise`\<[`publicForwards`](../type-aliases/publicForwards-1.md)\>

Returns forwards of a story as a message to public chats and reposts by public channels. Can be used only if the story is posted on behalf of the current user or story.can_get_statistics == true.

- For optimal performance, the number of returned messages and stories is chosen by TDLib

#### Parameters

• **parameters**: [`getStoryPublicForwards$DirectInput`](../type-aliases/getStoryPublicForwards$DirectInput.md)

[getStoryPublicForwards$Input](../type-aliases/getStoryPublicForwards$Input.md)

#### Returns

`Promise`\<[`publicForwards`](../type-aliases/publicForwards-1.md)\>

Promise<[PublicForwards](../type-aliases/PublicForwards.md)>

#### Defined in

dist/generated/types.d.ts:70008

***

### getStoryStatistics()

> **getStoryStatistics**(`parameters`): `Promise`\<[`storyStatistics`](../type-aliases/storyStatistics-1.md)\>

Returns detailed statistics about a story. Can be used only if story.can_get_statistics == true

#### Parameters

• **parameters**: [`getStoryStatistics$DirectInput`](../type-aliases/getStoryStatistics$DirectInput.md)

[getStoryStatistics$Input](../type-aliases/getStoryStatistics$Input.md)

#### Returns

`Promise`\<[`storyStatistics`](../type-aliases/storyStatistics-1.md)\>

Promise<[StoryStatistics](../type-aliases/StoryStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72097

***

### getSuggestedFileName()

> **getSuggestedFileName**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns suggested name for saving a file in a given directory

#### Parameters

• **parameters**: [`getSuggestedFileName$DirectInput`](../type-aliases/getSuggestedFileName$DirectInput.md)

[getSuggestedFileName$Input](../type-aliases/getSuggestedFileName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:70162

***

### getSuggestedStickerSetName()

> **getSuggestedStickerSetName**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns a suggested name for a new sticker set with a given title

#### Parameters

• **parameters**: [`getSuggestedStickerSetName$DirectInput`](../type-aliases/getSuggestedStickerSetName$DirectInput.md)

[getSuggestedStickerSetName$Input](../type-aliases/getSuggestedStickerSetName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:72309

***

### getSuitableDiscussionChats()

> **getSuitableDiscussionChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of basic group and supergroup chats, which can be used as a discussion group for a channel. Returned basic group chats must be first upgraded to supergroups before they can be set as a discussion group.

- To set a returned supergroup as a discussion group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable first

#### Parameters

• **parameters**: [`getSuitableDiscussionChats$DirectInput`](../type-aliases/getSuitableDiscussionChats$DirectInput.md)

[getSuitableDiscussionChats$Input](../type-aliases/getSuitableDiscussionChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67986

***

### getSuitablePersonalChats()

> **getSuitablePersonalChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of channel chats, which can be used as a personal chat

#### Parameters

• **parameters**: [`getSuitablePersonalChats$DirectInput`](../type-aliases/getSuitablePersonalChats$DirectInput.md)

[getSuitablePersonalChats$Input](../type-aliases/getSuitablePersonalChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:68000

***

### getSupergroup()

> **getSupergroup**(`parameters`): `Promise`\<[`supergroup`](../type-aliases/supergroup-1.md)\>

Returns information about a supergroup or a channel by its identifier. This is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getSupergroup$DirectInput`](../type-aliases/getSupergroup$DirectInput.md)

[getSupergroup$Input](../type-aliases/getSupergroup$Input.md)

#### Returns

`Promise`\<[`supergroup`](../type-aliases/supergroup-1.md)\>

Promise<[Supergroup](../type-aliases/Supergroup.md)>

#### Defined in

dist/generated/types.d.ts:67722

***

### getSupergroupFullInfo()

> **getSupergroupFullInfo**(`parameters`): `Promise`\<[`supergroupFullInfo`](../type-aliases/supergroupFullInfo-1.md)\>

Returns full information about a supergroup or a channel by its identifier, cached for up to 1 minute

#### Parameters

• **parameters**: [`getSupergroupFullInfo$DirectInput`](../type-aliases/getSupergroupFullInfo$DirectInput.md)

[getSupergroupFullInfo$Input](../type-aliases/getSupergroupFullInfo$Input.md)

#### Returns

`Promise`\<[`supergroupFullInfo`](../type-aliases/supergroupFullInfo-1.md)\>

Promise<[SupergroupFullInfo](../type-aliases/SupergroupFullInfo.md)>

#### Defined in

dist/generated/types.d.ts:67729

***

### getSupergroupMembers()

> **getSupergroupMembers**(`parameters`): `Promise`\<[`chatMembers`](../type-aliases/chatMembers-1.md)\>

Returns information about members or banned users in a supergroup or channel. Can be used only if supergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters

#### Parameters

• **parameters**: [`getSupergroupMembers$DirectInput`](../type-aliases/getSupergroupMembers$DirectInput.md)

[getSupergroupMembers$Input](../type-aliases/getSupergroupMembers$Input.md)

#### Returns

`Promise`\<[`chatMembers`](../type-aliases/chatMembers-1.md)\>

Promise<[ChatMembers](../type-aliases/ChatMembers.md)>

#### Defined in

dist/generated/types.d.ts:71664

***

### getSupportName()

> **getSupportName**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Returns localized name of the Telegram support user; for Telegram support only

#### Parameters

• **parameters**: [`getSupportName$DirectInput`](../type-aliases/getSupportName$DirectInput.md)

[getSupportName$Input](../type-aliases/getSupportName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:72764

***

### getSupportUser()

> **getSupportUser**(`parameters`): `Promise`\<[`user`](../type-aliases/user-1.md)\>

Returns a user that can be contacted to get support

#### Parameters

• **parameters**: [`getSupportUser$DirectInput`](../type-aliases/getSupportUser$DirectInput.md)

[getSupportUser$Input](../type-aliases/getSupportUser$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user-1.md)\>

Promise<[User](../type-aliases/User.md)>

#### Defined in

dist/generated/types.d.ts:71755

***

### getTemporaryPasswordState()

> **getTemporaryPasswordState**(`parameters`): `Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState-1.md)\>

Returns information about the current temporary password

#### Parameters

• **parameters**: [`getTemporaryPasswordState$DirectInput`](../type-aliases/getTemporaryPasswordState$DirectInput.md)

[getTemporaryPasswordState$Input](../type-aliases/getTemporaryPasswordState$Input.md)

#### Returns

`Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState-1.md)\>

Promise<[TemporaryPasswordState](../type-aliases/TemporaryPasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67680

***

### getTextEntities()

> **getTextEntities**(`parameters`): `Promise`\<[`textEntities`](../type-aliases/textEntities-1.md)\>

Returns all entities (mentions, hashtags, cashtags, bot commands, bank card numbers, URLs, and email addresses) found in the text. Can be called synchronously

#### Parameters

• **parameters**: [`getTextEntities$DirectInput`](../type-aliases/getTextEntities$DirectInput.md)

[getTextEntities$Input](../type-aliases/getTextEntities$Input.md)

#### Returns

`Promise`\<[`textEntities`](../type-aliases/textEntities-1.md)\>

Promise<[TextEntities](../type-aliases/TextEntities.md)>

#### Defined in

dist/generated/types.d.ts:68867

***

### getThemeParametersJsonString()

> **getThemeParametersJsonString**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Converts a themeParameters object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

• **parameters**: [`getThemeParametersJsonString$DirectInput`](../type-aliases/getThemeParametersJsonString$DirectInput.md)

[getThemeParametersJsonString$Input](../type-aliases/getThemeParametersJsonString$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:68946

***

### getThemedChatEmojiStatuses()

> **getThemedChatEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Returns up to 8 emoji statuses, which must be shown in the emoji status list for chats

#### Parameters

• **parameters**: [`getThemedChatEmojiStatuses$DirectInput`](../type-aliases/getThemedChatEmojiStatuses$DirectInput.md)

[getThemedChatEmojiStatuses$Input](../type-aliases/getThemedChatEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses.md)>

#### Defined in

dist/generated/types.d.ts:70120

***

### getThemedEmojiStatuses()

> **getThemedEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Returns up to 8 emoji statuses, which must be shown right after the default Premium Badge in the emoji status list for self status

#### Parameters

• **parameters**: [`getThemedEmojiStatuses$DirectInput`](../type-aliases/getThemedEmojiStatuses$DirectInput.md)

[getThemedEmojiStatuses$Input](../type-aliases/getThemedEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses-1.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses.md)>

#### Defined in

dist/generated/types.d.ts:70092

***

### getTimeZones()

> **getTimeZones**(`parameters`): `Promise`\<[`timeZones`](../type-aliases/timeZones-1.md)\>

Returns the list of supported time zones

#### Parameters

• **parameters**: [`getTimeZones$DirectInput`](../type-aliases/getTimeZones$DirectInput.md)

[getTimeZones$Input](../type-aliases/getTimeZones$Input.md)

#### Returns

`Promise`\<[`timeZones`](../type-aliases/timeZones-1.md)\>

Promise<[TimeZones](../type-aliases/TimeZones.md)>

#### Defined in

dist/generated/types.d.ts:71685

***

### getTopChats()

> **getTopChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Returns a list of frequently used chats

#### Parameters

• **parameters**: [`getTopChats$DirectInput`](../type-aliases/getTopChats$DirectInput.md)

[getTopChats$Input](../type-aliases/getTopChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67914

***

### getTrendingStickerSets()

> **getTrendingStickerSets**(`parameters`): `Promise`\<[`trendingStickerSets`](../type-aliases/trendingStickerSets-1.md)\>

Returns a list of trending sticker sets. For optimal performance, the number of returned sticker sets is chosen by TDLib

#### Parameters

• **parameters**: [`getTrendingStickerSets$DirectInput`](../type-aliases/getTrendingStickerSets$DirectInput.md)

[getTrendingStickerSets$Input](../type-aliases/getTrendingStickerSets$Input.md)

#### Returns

`Promise`\<[`trendingStickerSets`](../type-aliases/trendingStickerSets-1.md)\>

Promise<[TrendingStickerSets](../type-aliases/TrendingStickerSets.md)>

#### Defined in

dist/generated/types.d.ts:70837

***

### getUser()

> **getUser**(`parameters`): `Promise`\<[`user`](../type-aliases/user-1.md)\>

Returns information about a user by their identifier. This is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getUser$DirectInput`](../type-aliases/getUser$DirectInput.md)

[getUser$Input](../type-aliases/getUser$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user-1.md)\>

Promise<[User](../type-aliases/User.md)>

#### Defined in

dist/generated/types.d.ts:67694

***

### getUserChatBoosts()

> **getUserChatBoosts**(`parameters`): `Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts-1.md)\>

Returns the list of boosts applied to a chat by a given user; requires administrator rights in the chat; for bots only

#### Parameters

• **parameters**: [`getUserChatBoosts$DirectInput`](../type-aliases/getUserChatBoosts$DirectInput.md)

[getUserChatBoosts$Input](../type-aliases/getUserChatBoosts$Input.md)

#### Returns

`Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts-1.md)\>

Promise<[FoundChatBoosts](../type-aliases/FoundChatBoosts.md)>

#### Defined in

dist/generated/types.d.ts:70071

***

### getUserFullInfo()

> **getUserFullInfo**(`parameters`): `Promise`\<[`userFullInfo`](../type-aliases/userFullInfo-1.md)\>

Returns full information about a user by their identifier

#### Parameters

• **parameters**: [`getUserFullInfo$DirectInput`](../type-aliases/getUserFullInfo$DirectInput.md)

[getUserFullInfo$Input](../type-aliases/getUserFullInfo$Input.md)

#### Returns

`Promise`\<[`userFullInfo`](../type-aliases/userFullInfo-1.md)\>

Promise<[UserFullInfo](../type-aliases/UserFullInfo.md)>

#### Defined in

dist/generated/types.d.ts:67701

***

### getUserLink()

> **getUserLink**(`parameters`): `Promise`\<[`userLink`](../type-aliases/userLink-1.md)\>

Returns an HTTPS link, which can be used to get information about the current user

#### Parameters

• **parameters**: [`getUserLink$DirectInput`](../type-aliases/getUserLink$DirectInput.md)

[getUserLink$Input](../type-aliases/getUserLink$Input.md)

#### Returns

`Promise`\<[`userLink`](../type-aliases/userLink-1.md)\>

Promise<[UserLink](../type-aliases/UserLink.md)>

#### Defined in

dist/generated/types.d.ts:71319

***

### getUserPrivacySettingRules()

> **getUserPrivacySettingRules**(`parameters`): `Promise`\<[`userPrivacySettingRules`](../type-aliases/userPrivacySettingRules-1.md)\>

Returns the current privacy settings

#### Parameters

• **parameters**: [`getUserPrivacySettingRules$DirectInput`](../type-aliases/getUserPrivacySettingRules$DirectInput.md)

[getUserPrivacySettingRules$Input](../type-aliases/getUserPrivacySettingRules$Input.md)

#### Returns

`Promise`\<[`userPrivacySettingRules`](../type-aliases/userPrivacySettingRules-1.md)\>

Promise<[UserPrivacySettingRules](../type-aliases/UserPrivacySettingRules.md)>

#### Defined in

dist/generated/types.d.ts:71913

***

### getUserProfilePhotos()

> **getUserProfilePhotos**(`parameters`): `Promise`\<[`chatPhotos`](../type-aliases/chatPhotos-1.md)\>

Returns the profile photos of a user. Personal and public photo aren't returned

#### Parameters

• **parameters**: [`getUserProfilePhotos$DirectInput`](../type-aliases/getUserProfilePhotos$DirectInput.md)

[getUserProfilePhotos$Input](../type-aliases/getUserProfilePhotos$Input.md)

#### Returns

`Promise`\<[`chatPhotos`](../type-aliases/chatPhotos-1.md)\>

Promise<[ChatPhotos](../type-aliases/ChatPhotos.md)>

#### Defined in

dist/generated/types.d.ts:70781

***

### getUserSupportInfo()

> **getUserSupportInfo**(`parameters`): `Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo-1.md)\>

Returns support information for the given user; for Telegram support only

#### Parameters

• **parameters**: [`getUserSupportInfo$DirectInput`](../type-aliases/getUserSupportInfo$DirectInput.md)

[getUserSupportInfo$Input](../type-aliases/getUserSupportInfo$Input.md)

#### Returns

`Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo-1.md)\>

Promise<[UserSupportInfo](../type-aliases/UserSupportInfo.md)>

#### Defined in

dist/generated/types.d.ts:72750

***

### getVideoChatAvailableParticipants()

> **getVideoChatAvailableParticipants**(`parameters`): `Promise`\<[`messageSenders`](../type-aliases/messageSenders-1.md)\>

Returns the list of participant identifiers, on whose behalf a video chat in the chat can be joined

#### Parameters

• **parameters**: [`getVideoChatAvailableParticipants$DirectInput`](../type-aliases/getVideoChatAvailableParticipants$DirectInput.md)

[getVideoChatAvailableParticipants$Input](../type-aliases/getVideoChatAvailableParticipants$Input.md)

#### Returns

`Promise`\<[`messageSenders`](../type-aliases/messageSenders-1.md)\>

Promise<[MessageSenders](../type-aliases/MessageSenders.md)>

#### Defined in

dist/generated/types.d.ts:70450

***

### getVideoChatRtmpUrl()

> **getVideoChatRtmpUrl**(`parameters`): `Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl-1.md)\>

Returns RTMP URL for streaming to the chat; requires owner privileges

#### Parameters

• **parameters**: [`getVideoChatRtmpUrl$DirectInput`](../type-aliases/getVideoChatRtmpUrl$DirectInput.md)

[getVideoChatRtmpUrl$Input](../type-aliases/getVideoChatRtmpUrl$Input.md)

#### Returns

`Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl-1.md)\>

Promise<[RtmpUrl](../type-aliases/RtmpUrl.md)>

#### Defined in

dist/generated/types.d.ts:70471

***

### getWebAppLinkUrl()

> **getWebAppLinkUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns an HTTPS URL of a Web App to open after a link of the type internalLinkTypeWebApp is clicked

#### Parameters

• **parameters**: [`getWebAppLinkUrl$DirectInput`](../type-aliases/getWebAppLinkUrl$DirectInput.md)

[getWebAppLinkUrl$Input](../type-aliases/getWebAppLinkUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:69046

***

### getWebAppUrl()

> **getWebAppUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Returns an HTTPS URL of a Web App to open from the side menu, a keyboardButtonTypeWebApp button, an inlineQueryResultsButtonTypeWebApp button, or an internalLinkTypeSideMenuBot link

#### Parameters

• **parameters**: [`getWebAppUrl$DirectInput`](../type-aliases/getWebAppUrl$DirectInput.md)

[getWebAppUrl$Input](../type-aliases/getWebAppUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl-1.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl.md)>

#### Defined in

dist/generated/types.d.ts:69053

***

### getWebPageInstantView()

> **getWebPageInstantView**(`parameters`): `Promise`\<[`webPageInstantView`](../type-aliases/webPageInstantView-1.md)\>

Returns an instant view version of a web page if available. Returns a 404 error if the web page has no instant view page

#### Parameters

• **parameters**: [`getWebPageInstantView$DirectInput`](../type-aliases/getWebPageInstantView$DirectInput.md)

[getWebPageInstantView$Input](../type-aliases/getWebPageInstantView$Input.md)

#### Returns

`Promise`\<[`webPageInstantView`](../type-aliases/webPageInstantView-1.md)\>

Promise<[WebPageInstantView](../type-aliases/WebPageInstantView.md)>

#### Defined in

dist/generated/types.d.ts:71074

***

### hideContactCloseBirthdays()

> **hideContactCloseBirthdays**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Hides the list of contacts that have close birthdays for 24 hours

#### Parameters

• **parameters**: [`hideContactCloseBirthdays$DirectInput`](../type-aliases/hideContactCloseBirthdays$DirectInput.md)

[hideContactCloseBirthdays$Input](../type-aliases/hideContactCloseBirthdays$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68981

***

### hideSuggestedAction()

> **hideSuggestedAction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Hides a suggested action

#### Parameters

• **parameters**: [`hideSuggestedAction$DirectInput`](../type-aliases/hideSuggestedAction$DirectInput.md)

[hideSuggestedAction$Input](../type-aliases/hideSuggestedAction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68974

***

### importContacts()

> **importContacts**(`parameters`): `Promise`\<[`importedContacts`](../type-aliases/importedContacts-1.md)\>

Adds new contacts or edits existing contacts by their phone numbers; contacts' user identifiers are ignored

#### Parameters

• **parameters**: [`importContacts$DirectInput`](../type-aliases/importContacts$DirectInput.md)

[importContacts$Input](../type-aliases/importContacts$Input.md)

#### Returns

`Promise`\<[`importedContacts`](../type-aliases/importedContacts-1.md)\>

Promise<[ImportedContacts](../type-aliases/ImportedContacts.md)>

#### Defined in

dist/generated/types.d.ts:70688

***

### importMessages()

> **importMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Imports messages exported from another app

#### Parameters

• **parameters**: [`importMessages$DirectInput`](../type-aliases/importMessages$DirectInput.md)

[importMessages$Input](../type-aliases/importMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70287

***

### inviteGroupCallParticipants()

> **inviteGroupCallParticipants**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Invites users to an active group call. Sends a service message of type messageInviteVideoChatParticipants for video chats

#### Parameters

• **parameters**: [`inviteGroupCallParticipants$DirectInput`](../type-aliases/inviteGroupCallParticipants$DirectInput.md)

[inviteGroupCallParticipants$Input](../type-aliases/inviteGroupCallParticipants$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70548

***

### joinChat()

> **joinChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds the current user as a new member to a chat. Private and secret chats can't be joined using this method. May return an error with a message "INVITE_REQUEST_SENT" if only a join request was created

#### Parameters

• **parameters**: [`joinChat$DirectInput`](../type-aliases/joinChat$DirectInput.md)

[joinChat$Input](../type-aliases/joinChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69663

***

### joinChatByInviteLink()

> **joinChatByInviteLink**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Uses an invite link to add the current user to the chat if possible. May return an error with a message "INVITE_REQUEST_SENT" if only a join request was created

#### Parameters

• **parameters**: [`joinChatByInviteLink$DirectInput`](../type-aliases/joinChatByInviteLink$DirectInput.md)

[joinChatByInviteLink$Input](../type-aliases/joinChatByInviteLink$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:70373

***

### joinGroupCall()

> **joinGroupCall**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Joins an active group call. Returns join response payload for tgcalls

#### Parameters

• **parameters**: [`joinGroupCall$DirectInput`](../type-aliases/joinGroupCall$DirectInput.md)

[joinGroupCall$Input](../type-aliases/joinGroupCall$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:70506

***

### launchPrepaidPremiumGiveaway()

> **launchPrepaidPremiumGiveaway**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Launches a prepaid Telegram Premium giveaway

#### Parameters

• **parameters**: [`launchPrepaidPremiumGiveaway$DirectInput`](../type-aliases/launchPrepaidPremiumGiveaway$DirectInput.md)

[launchPrepaidPremiumGiveaway$Input](../type-aliases/launchPrepaidPremiumGiveaway$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72484

***

### leaveChat()

> **leaveChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes the current user from chat members. Private and secret chats can't be left using this method

#### Parameters

• **parameters**: [`leaveChat$DirectInput`](../type-aliases/leaveChat$DirectInput.md)

[leaveChat$Input](../type-aliases/leaveChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69670

***

### leaveGroupCall()

> **leaveGroupCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Leaves a group call

#### Parameters

• **parameters**: [`leaveGroupCall$DirectInput`](../type-aliases/leaveGroupCall$DirectInput.md)

[leaveGroupCall$Input](../type-aliases/leaveGroupCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70632

***

### loadActiveStories()

> **loadActiveStories**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Loads more active stories from a story list. The loaded stories will be sent through updates. Active stories are sorted by

- the pair (active_stories.order, active_stories.story_sender_chat_id) in descending order. Returns a 404 error if all active stories have been loaded

#### Parameters

• **parameters**: [`loadActiveStories$DirectInput`](../type-aliases/loadActiveStories$DirectInput.md)

[loadActiveStories$Input](../type-aliases/loadActiveStories$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69902

***

### loadChats()

> **loadChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Loads more chats from a chat list. The loaded chats and their positions in the chat list will be sent through updates. Chats are sorted by the pair (chat.position.order, chat.id) in descending order. Returns a 404 error if all chats have been loaded

#### Parameters

• **parameters**: [`loadChats$DirectInput`](../type-aliases/loadChats$DirectInput.md)

[loadChats$Input](../type-aliases/loadChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67833

***

### loadGroupCallParticipants()

> **loadGroupCallParticipants**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Loads more participants of a group call. The loaded participants will be received through updates. Use the field groupCall.loaded_all_participants to check whether all participants have already been loaded

#### Parameters

• **parameters**: [`loadGroupCallParticipants$DirectInput`](../type-aliases/loadGroupCallParticipants$DirectInput.md)

[loadGroupCallParticipants$Input](../type-aliases/loadGroupCallParticipants$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70625

***

### loadQuickReplyShortcutMessages()

> **loadQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Loads quick reply messages that can be sent by a given quick reply shortcut. The loaded messages will be sent through updateQuickReplyShortcutMessages

#### Parameters

• **parameters**: [`loadQuickReplyShortcutMessages$DirectInput`](../type-aliases/loadQuickReplyShortcutMessages$DirectInput.md)

[loadQuickReplyShortcutMessages$Input](../type-aliases/loadQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68633

***

### loadQuickReplyShortcuts()

> **loadQuickReplyShortcuts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Loads quick reply shortcuts created by the current user. The loaded topics will be sent through updateQuickReplyShortcuts

#### Parameters

• **parameters**: [`loadQuickReplyShortcuts$DirectInput`](../type-aliases/loadQuickReplyShortcuts$DirectInput.md)

[loadQuickReplyShortcuts$Input](../type-aliases/loadQuickReplyShortcuts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68605

***

### loadSavedMessagesTopics()

> **loadSavedMessagesTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Loads more Saved Messages topics. The loaded topics will be sent through updateSavedMessagesTopic. Topics are sorted by their topic.order in descending order. Returns a 404 error if all topics have been loaded

#### Parameters

• **parameters**: [`loadSavedMessagesTopics$DirectInput`](../type-aliases/loadSavedMessagesTopics$DirectInput.md)

[loadSavedMessagesTopics$Input](../type-aliases/loadSavedMessagesTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68007

***

### logOut()

> **logOut**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent

#### Parameters

• **parameters**: [`logOut$DirectInput`](../type-aliases/logOut$DirectInput.md)

[logOut$Input](../type-aliases/logOut$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67520

***

### openChat()

> **openChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that the chat is opened by the user. Many useful activities depend on the chat being opened or closed (e.g., in supergroups and channels all updates are received only for opened chats)

#### Parameters

• **parameters**: [`openChat$DirectInput`](../type-aliases/openChat$DirectInput.md)

[openChat$Input](../type-aliases/openChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69160

***

### openChatSimilarChat()

> **openChatSimilarChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that a chat was opened from the list of similar chats. The method is independent of openChat and closeChat methods

#### Parameters

• **parameters**: [`openChatSimilarChat$DirectInput`](../type-aliases/openChatSimilarChat$DirectInput.md)

[openChatSimilarChat$Input](../type-aliases/openChatSimilarChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67907

***

### openMessageContent()

> **openMessageContent**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that the message content has been opened (e.g., the user has opened a photo, video, document, location or venue, or has listened to an audio file or voice note message).

- An updateMessageContentOpened update will be generated if something has changed

#### Parameters

• **parameters**: [`openMessageContent$DirectInput`](../type-aliases/openMessageContent$DirectInput.md)

[openMessageContent$Input](../type-aliases/openMessageContent$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69185

***

### openStory()

> **openStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that a story is opened and is being viewed by the user

#### Parameters

• **parameters**: [`openStory$DirectInput`](../type-aliases/openStory$DirectInput.md)

[openStory$Input](../type-aliases/openStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69948

***

### openWebApp()

> **openWebApp**(`parameters`): `Promise`\<[`webAppInfo`](../type-aliases/webAppInfo-1.md)\>

Informs TDLib that a Web App is being opened from the attachment menu, a botMenuButton button, an internalLinkTypeAttachmentMenuBot link, or an inlineKeyboardButtonTypeWebApp button.

- For each bot, a confirmation alert about data sent to the bot must be shown once

#### Parameters

• **parameters**: [`openWebApp$DirectInput`](../type-aliases/openWebApp$DirectInput.md)

[openWebApp$Input](../type-aliases/openWebApp$Input.md)

#### Returns

`Promise`\<[`webAppInfo`](../type-aliases/webAppInfo-1.md)\>

Promise<[WebAppInfo](../type-aliases/WebAppInfo.md)>

#### Defined in

dist/generated/types.d.ts:69069

***

### optimizeStorage()

> **optimizeStorage**(`parameters`): `Promise`\<[`storageStatistics`](../type-aliases/storageStatistics-1.md)\>

Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be deleted

#### Parameters

• **parameters**: [`optimizeStorage$DirectInput`](../type-aliases/optimizeStorage$DirectInput.md)

[optimizeStorage$Input](../type-aliases/optimizeStorage$Input.md)

#### Returns

`Promise`\<[`storageStatistics`](../type-aliases/storageStatistics-1.md)\>

Promise<[StorageStatistics](../type-aliases/StorageStatistics.md)>

#### Defined in

dist/generated/types.d.ts:72132

***

### parseMarkdown()

> **parseMarkdown**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Parses Markdown entities in a human-friendly format, ignoring markup errors. Can be called synchronously

#### Parameters

• **parameters**: [`parseMarkdown$DirectInput`](../type-aliases/parseMarkdown$DirectInput.md)

[parseMarkdown$Input](../type-aliases/parseMarkdown$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Promise<[FormattedText](../type-aliases/FormattedText.md)>

#### Defined in

dist/generated/types.d.ts:68883

***

### parseTextEntities()

> **parseTextEntities**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Parses Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, ExpandableBlockQuote, Code, Pre, PreCode, TextUrl

- and MentionName entities from a marked-up text. Can be called synchronously

#### Parameters

• **parameters**: [`parseTextEntities$DirectInput`](../type-aliases/parseTextEntities$DirectInput.md)

[parseTextEntities$Input](../type-aliases/parseTextEntities$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Promise<[FormattedText](../type-aliases/FormattedText.md)>

#### Defined in

dist/generated/types.d.ts:68876

***

### pinChatMessage()

> **pinChatMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Pins a message in a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel

#### Parameters

• **parameters**: [`pinChatMessage$DirectInput`](../type-aliases/pinChatMessage$DirectInput.md)

[pinChatMessage$Input](../type-aliases/pinChatMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69635

***

### pingProxy()

> **pingProxy**(`parameters`): `Promise`\<[`seconds`](../type-aliases/seconds-1.md)\>

Computes time needed to receive a response from a Telegram server through a proxy. Can be called before authorization

#### Parameters

• **parameters**: [`pingProxy$DirectInput`](../type-aliases/pingProxy$DirectInput.md)

[pingProxy$Input](../type-aliases/pingProxy$Input.md)

#### Returns

`Promise`\<[`seconds`](../type-aliases/seconds-1.md)\>

Promise<[Seconds](../type-aliases/Seconds.md)>

#### Defined in

dist/generated/types.d.ts:72687

***

### preliminaryUploadFile()

> **preliminaryUploadFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file-1.md)\>

Preliminary uploads a file to the cloud before sending it in a message, which can be useful for uploading of being recorded voice and video notes.

- In all other cases there is no need to preliminary upload a file. Updates updateFile will be used to notify about upload progress.

- The upload will not be completed until the file is sent in a message

#### Parameters

• **parameters**: [`preliminaryUploadFile$DirectInput`](../type-aliases/preliminaryUploadFile$DirectInput.md)

[preliminaryUploadFile$Input](../type-aliases/preliminaryUploadFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file-1.md)\>

Promise<[File](../type-aliases/File.md)>

#### Defined in

dist/generated/types.d.ts:70173

***

### processChatFolderNewChats()

> **processChatFolderNewChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Process new chats added to a shareable chat folder by its owner

#### Parameters

• **parameters**: [`processChatFolderNewChats$DirectInput`](../type-aliases/processChatFolderNewChats$DirectInput.md)

[processChatFolderNewChats$Input](../type-aliases/processChatFolderNewChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69451

***

### processChatJoinRequest()

> **processChatJoinRequest**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Handles a pending join request in a chat

#### Parameters

• **parameters**: [`processChatJoinRequest$DirectInput`](../type-aliases/processChatJoinRequest$DirectInput.md)

[processChatJoinRequest$Input](../type-aliases/processChatJoinRequest$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70387

***

### processChatJoinRequests()

> **processChatJoinRequests**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Handles all pending join requests for a given link in a chat

#### Parameters

• **parameters**: [`processChatJoinRequests$DirectInput`](../type-aliases/processChatJoinRequests$DirectInput.md)

[processChatJoinRequests$Input](../type-aliases/processChatJoinRequests$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70394

***

### processPushNotification()

> **processPushNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Handles a push notification. Returns error with code 406 if the push notification is not supported and connection to the server is required to fetch new data. Can be called before authorization

#### Parameters

• **parameters**: [`processPushNotification$DirectInput`](../type-aliases/processPushNotification$DirectInput.md)

[processPushNotification$Input](../type-aliases/processPushNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71885

***

### rateSpeechRecognition()

> **rateSpeechRecognition**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Rates recognized speech in a video note or a voice note message

#### Parameters

• **parameters**: [`rateSpeechRecognition$DirectInput`](../type-aliases/rateSpeechRecognition$DirectInput.md)

[rateSpeechRecognition$Input](../type-aliases/rateSpeechRecognition$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68340

***

### readAllChatMentions()

> **readAllChatMentions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Marks all mentions in a chat as read

#### Parameters

• **parameters**: [`readAllChatMentions$DirectInput`](../type-aliases/readAllChatMentions$DirectInput.md)

[readAllChatMentions$Input](../type-aliases/readAllChatMentions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69227

***

### readAllChatReactions()

> **readAllChatReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Marks all reactions in a chat or a forum topic as read

#### Parameters

• **parameters**: [`readAllChatReactions$DirectInput`](../type-aliases/readAllChatReactions$DirectInput.md)

[readAllChatReactions$Input](../type-aliases/readAllChatReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69241

***

### readAllMessageThreadMentions()

> **readAllMessageThreadMentions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Marks all mentions in a forum topic as read

#### Parameters

• **parameters**: [`readAllMessageThreadMentions$DirectInput`](../type-aliases/readAllMessageThreadMentions$DirectInput.md)

[readAllMessageThreadMentions$Input](../type-aliases/readAllMessageThreadMentions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69234

***

### readAllMessageThreadReactions()

> **readAllMessageThreadReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Marks all reactions in a forum topic as read

#### Parameters

• **parameters**: [`readAllMessageThreadReactions$DirectInput`](../type-aliases/readAllMessageThreadReactions$DirectInput.md)

[readAllMessageThreadReactions$Input](../type-aliases/readAllMessageThreadReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69248

***

### readChatList()

> **readChatList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Traverse all chats in a chat list and marks all messages in the chats as read

#### Parameters

• **parameters**: [`readChatList$DirectInput`](../type-aliases/readChatList$DirectInput.md)

[readChatList$Input](../type-aliases/readChatList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69830

***

### readFilePart()

> **readFilePart**(`parameters`): `Promise`\<[`filePart`](../type-aliases/filePart-1.md)\>

Reads a part of a file from the TDLib file cache and returns read bytes. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct read from the file

#### Parameters

• **parameters**: [`readFilePart$DirectInput`](../type-aliases/readFilePart$DirectInput.md)

[readFilePart$Input](../type-aliases/readFilePart$Input.md)

#### Returns

`Promise`\<[`filePart`](../type-aliases/filePart-1.md)\>

Promise<[FilePart](../type-aliases/FilePart.md)>

#### Defined in

dist/generated/types.d.ts:70208

***

### readdQuickReplyShortcutMessages()

> **readdQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages-1.md)\>

Readds quick reply messages which failed to add. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is readded, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be readded, null will be returned instead of the message

#### Parameters

• **parameters**: [`readdQuickReplyShortcutMessages$DirectInput`](../type-aliases/readdQuickReplyShortcutMessages$DirectInput.md)

[readdQuickReplyShortcutMessages$Input](../type-aliases/readdQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages-1.md)\>

Promise<[QuickReplyMessages](../type-aliases/QuickReplyMessages.md)>

#### Defined in

dist/generated/types.d.ts:68676

***

### recognizeSpeech()

> **recognizeSpeech**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Recognizes speech in a video note or a voice note message. The message must be successfully sent, must not be scheduled, and must be from a non-secret chat

#### Parameters

• **parameters**: [`recognizeSpeech$DirectInput`](../type-aliases/recognizeSpeech$DirectInput.md)

[recognizeSpeech$Input](../type-aliases/recognizeSpeech$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68333

***

### recoverAuthenticationPassword()

> **recoverAuthenticationPassword**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Recovers the 2-step verification password with a password recovery code sent to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`recoverAuthenticationPassword$DirectInput`](../type-aliases/recoverAuthenticationPassword$DirectInput.md)

[recoverAuthenticationPassword$Input](../type-aliases/recoverAuthenticationPassword$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67492

***

### recoverPassword()

> **recoverPassword**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Recovers the 2-step verification password using a recovery code sent to an email address that was previously set up

#### Parameters

• **parameters**: [`recoverPassword$DirectInput`](../type-aliases/recoverPassword$DirectInput.md)

[recoverPassword$Input](../type-aliases/recoverPassword$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Promise<[PasswordState](../type-aliases/PasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67652

***

### refundStarPayment()

> **refundStarPayment**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Refunds a previously done payment in Telegram Stars

#### Parameters

• **parameters**: [`refundStarPayment$DirectInput`](../type-aliases/refundStarPayment$DirectInput.md)

[refundStarPayment$Input](../type-aliases/refundStarPayment$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71748

***

### registerDevice()

> **registerDevice**(`parameters`): `Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId-1.md)\>

Registers the currently used device for receiving push notifications. Returns a globally unique identifier of the push notification subscription

#### Parameters

• **parameters**: [`registerDevice$DirectInput`](../type-aliases/registerDevice$DirectInput.md)

[registerDevice$Input](../type-aliases/registerDevice$Input.md)

#### Returns

`Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId-1.md)\>

Promise<[PushReceiverId](../type-aliases/PushReceiverId.md)>

#### Defined in

dist/generated/types.d.ts:71878

***

### registerUser()

> **registerUser**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration

#### Parameters

• **parameters**: [`registerUser$DirectInput`](../type-aliases/registerUser$DirectInput.md)

[registerUser$Input](../type-aliases/registerUser$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67455

***

### removeAllFilesFromDownloads()

> **removeAllFilesFromDownloads**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes all files from the file download list

#### Parameters

• **parameters**: [`removeAllFilesFromDownloads$DirectInput`](../type-aliases/removeAllFilesFromDownloads$DirectInput.md)

[removeAllFilesFromDownloads$Input](../type-aliases/removeAllFilesFromDownloads$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70252

***

### removeBusinessConnectedBotFromChat()

> **removeBusinessConnectedBotFromChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes the connected business bot from a specific chat by adding the chat to businessRecipients.excluded_chat_ids

#### Parameters

• **parameters**: [`removeBusinessConnectedBotFromChat$DirectInput`](../type-aliases/removeBusinessConnectedBotFromChat$DirectInput.md)

[removeBusinessConnectedBotFromChat$Input](../type-aliases/removeBusinessConnectedBotFromChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71277

***

### removeChatActionBar()

> **removeChatActionBar**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a chat action bar without any other action

#### Parameters

• **parameters**: [`removeChatActionBar$DirectInput`](../type-aliases/removeChatActionBar$DirectInput.md)

[removeChatActionBar$Input](../type-aliases/removeChatActionBar$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72006

***

### removeContacts()

> **removeContacts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes users from the contact list

#### Parameters

• **parameters**: [`removeContacts$DirectInput`](../type-aliases/removeContacts$DirectInput.md)

[removeContacts$Input](../type-aliases/removeContacts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70709

***

### removeFavoriteSticker()

> **removeFavoriteSticker**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a sticker from the list of favorite stickers

#### Parameters

• **parameters**: [`removeFavoriteSticker$DirectInput`](../type-aliases/removeFavoriteSticker$DirectInput.md)

[removeFavoriteSticker$Input](../type-aliases/removeFavoriteSticker$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70946

***

### removeFileFromDownloads()

> **removeFileFromDownloads**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a file from the file download list

#### Parameters

• **parameters**: [`removeFileFromDownloads$DirectInput`](../type-aliases/removeFileFromDownloads$DirectInput.md)

[removeFileFromDownloads$Input](../type-aliases/removeFileFromDownloads$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70245

***

### removeInstalledBackground()

> **removeInstalledBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes background from the list of installed backgrounds

#### Parameters

• **parameters**: [`removeInstalledBackground$DirectInput`](../type-aliases/removeInstalledBackground$DirectInput.md)

[removeInstalledBackground$Input](../type-aliases/removeInstalledBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71797

***

### removeMessageReaction()

> **removeMessageReaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a reaction from a message. A chosen reaction can always be removed

#### Parameters

• **parameters**: [`removeMessageReaction$DirectInput`](../type-aliases/removeMessageReaction$DirectInput.md)

[removeMessageReaction$Input](../type-aliases/removeMessageReaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68811

***

### removeNotification()

> **removeNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes an active notification from notification list. Needs to be called only if the notification is removed by the current user

#### Parameters

• **parameters**: [`removeNotification$DirectInput`](../type-aliases/removeNotification$DirectInput.md)

[removeNotification$Input](../type-aliases/removeNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68284

***

### removeNotificationGroup()

> **removeNotificationGroup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a group of active notifications. Needs to be called only if the notification group is removed by the current user

#### Parameters

• **parameters**: [`removeNotificationGroup$DirectInput`](../type-aliases/removeNotificationGroup$DirectInput.md)

[removeNotificationGroup$Input](../type-aliases/removeNotificationGroup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68291

***

### removeProxy()

> **removeProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a proxy server. Can be called before authorization

#### Parameters

• **parameters**: [`removeProxy$DirectInput`](../type-aliases/removeProxy$DirectInput.md)

[removeProxy$Input](../type-aliases/removeProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72666

***

### removeRecentHashtag()

> **removeRecentHashtag**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a hashtag from the list of recently used hashtags

#### Parameters

• **parameters**: [`removeRecentHashtag$DirectInput`](../type-aliases/removeRecentHashtag$DirectInput.md)

[removeRecentHashtag$Input](../type-aliases/removeRecentHashtag$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71060

***

### removeRecentSticker()

> **removeRecentSticker**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a sticker from the list of recently used stickers

#### Parameters

• **parameters**: [`removeRecentSticker$DirectInput`](../type-aliases/removeRecentSticker$DirectInput.md)

[removeRecentSticker$Input](../type-aliases/removeRecentSticker$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70916

***

### removeRecentlyFoundChat()

> **removeRecentlyFoundChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a chat from the list of recently found chats

#### Parameters

• **parameters**: [`removeRecentlyFoundChat$DirectInput`](../type-aliases/removeRecentlyFoundChat$DirectInput.md)

[removeRecentlyFoundChat$Input](../type-aliases/removeRecentlyFoundChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67942

***

### removeSavedAnimation()

> **removeSavedAnimation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes an animation from the list of saved animations

#### Parameters

• **parameters**: [`removeSavedAnimation$DirectInput`](../type-aliases/removeSavedAnimation$DirectInput.md)

[removeSavedAnimation$Input](../type-aliases/removeSavedAnimation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71039

***

### removeSavedNotificationSound()

> **removeSavedNotificationSound**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a notification sound from the list of saved notification sounds

#### Parameters

• **parameters**: [`removeSavedNotificationSound$DirectInput`](../type-aliases/removeSavedNotificationSound$DirectInput.md)

[removeSavedNotificationSound$Input](../type-aliases/removeSavedNotificationSound$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69774

***

### removeSearchedForTag()

> **removeSearchedForTag**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a hashtag or a cashtag from the list of recently searched for hashtags or cashtags

#### Parameters

• **parameters**: [`removeSearchedForTag$DirectInput`](../type-aliases/removeSearchedForTag$DirectInput.md)

[removeSearchedForTag$Input](../type-aliases/removeSearchedForTag$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68184

***

### removeStickerFromSet()

> **removeStickerFromSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a sticker from the set to which it belongs. The sticker set must be owned by the current user

#### Parameters

• **parameters**: [`removeStickerFromSet$DirectInput`](../type-aliases/removeStickerFromSet$DirectInput.md)

[removeStickerFromSet$Input](../type-aliases/removeStickerFromSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72379

***

### removeTopChat()

> **removeTopChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a chat from the list of frequently used chats. Supported only if the chat info database is enabled

#### Parameters

• **parameters**: [`removeTopChat$DirectInput`](../type-aliases/removeTopChat$DirectInput.md)

[removeTopChat$Input](../type-aliases/removeTopChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67921

***

### reorderActiveUsernames()

> **reorderActiveUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes order of active usernames of the current user

#### Parameters

• **parameters**: [`reorderActiveUsernames$DirectInput`](../type-aliases/reorderActiveUsernames$DirectInput.md)

[reorderActiveUsernames$Input](../type-aliases/reorderActiveUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71137

***

### reorderBotActiveUsernames()

> **reorderBotActiveUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes order of active usernames of a bot. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`reorderBotActiveUsernames$DirectInput`](../type-aliases/reorderBotActiveUsernames$DirectInput.md)

[reorderBotActiveUsernames$Input](../type-aliases/reorderBotActiveUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71431

***

### reorderChatFolders()

> **reorderChatFolders**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the order of chat folders

#### Parameters

• **parameters**: [`reorderChatFolders$DirectInput`](../type-aliases/reorderChatFolders$DirectInput.md)

[reorderChatFolders$Input](../type-aliases/reorderChatFolders$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69367

***

### reorderInstalledStickerSets()

> **reorderInstalledStickerSets**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the order of installed sticker sets

#### Parameters

• **parameters**: [`reorderInstalledStickerSets$DirectInput`](../type-aliases/reorderInstalledStickerSets$DirectInput.md)

[reorderInstalledStickerSets$Input](../type-aliases/reorderInstalledStickerSets$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70893

***

### reorderQuickReplyShortcuts()

> **reorderQuickReplyShortcuts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the order of quick reply shortcuts

#### Parameters

• **parameters**: [`reorderQuickReplyShortcuts$DirectInput`](../type-aliases/reorderQuickReplyShortcuts$DirectInput.md)

[reorderQuickReplyShortcuts$Input](../type-aliases/reorderQuickReplyShortcuts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68626

***

### reorderSupergroupActiveUsernames()

> **reorderSupergroupActiveUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes order of active usernames of a supergroup or channel, requires owner privileges in the supergroup or channel

#### Parameters

• **parameters**: [`reorderSupergroupActiveUsernames$DirectInput`](../type-aliases/reorderSupergroupActiveUsernames$DirectInput.md)

[reorderSupergroupActiveUsernames$Input](../type-aliases/reorderSupergroupActiveUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71559

***

### replacePrimaryChatInviteLink()

> **replacePrimaryChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Replaces current primary invite link for a chat with a new primary invite link. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right

#### Parameters

• **parameters**: [`replacePrimaryChatInviteLink$DirectInput`](../type-aliases/replacePrimaryChatInviteLink$DirectInput.md)

[replacePrimaryChatInviteLink$Input](../type-aliases/replacePrimaryChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink-1.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink.md)>

#### Defined in

dist/generated/types.d.ts:70294

***

### replaceStickerInSet()

> **replaceStickerInSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Replaces existing sticker in a set. The function is equivalent to removeStickerFromSet, then addStickerToSet, then setStickerPositionInSet

#### Parameters

• **parameters**: [`replaceStickerInSet$DirectInput`](../type-aliases/replaceStickerInSet$DirectInput.md)

[replaceStickerInSet$Input](../type-aliases/replaceStickerInSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72337

***

### replaceVideoChatRtmpUrl()

> **replaceVideoChatRtmpUrl**(`parameters`): `Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl-1.md)\>

Replaces the current RTMP URL for streaming to the chat; requires owner privileges

#### Parameters

• **parameters**: [`replaceVideoChatRtmpUrl$DirectInput`](../type-aliases/replaceVideoChatRtmpUrl$DirectInput.md)

[replaceVideoChatRtmpUrl$Input](../type-aliases/replaceVideoChatRtmpUrl$Input.md)

#### Returns

`Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl-1.md)\>

Promise<[RtmpUrl](../type-aliases/RtmpUrl.md)>

#### Defined in

dist/generated/types.d.ts:70478

***

### reportAuthenticationCodeMissing()

> **reportAuthenticationCodeMissing**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports that authentication code wasn't delivered via SMS; for official mobile applications only. Works only when the current authorization state is authorizationStateWaitCode

#### Parameters

• **parameters**: [`reportAuthenticationCodeMissing$DirectInput`](../type-aliases/reportAuthenticationCodeMissing$DirectInput.md)

[reportAuthenticationCodeMissing$Input](../type-aliases/reportAuthenticationCodeMissing$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67506

***

### reportChat()

> **reportChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if chat.can_be_reported

#### Parameters

• **parameters**: [`reportChat$DirectInput`](../type-aliases/reportChat$DirectInput.md)

[reportChat$Input](../type-aliases/reportChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72013

***

### reportChatPhoto()

> **reportChatPhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports a chat photo to the Telegram moderators. A chat photo can be reported only if chat.can_be_reported

#### Parameters

• **parameters**: [`reportChatPhoto$DirectInput`](../type-aliases/reportChatPhoto$DirectInput.md)

[reportChatPhoto$Input](../type-aliases/reportChatPhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72020

***

### reportChatSponsoredMessage()

> **reportChatSponsoredMessage**(`parameters`): `Promise`\<[`ReportChatSponsoredMessageResult`](../type-aliases/ReportChatSponsoredMessageResult.md)\>

Reports a sponsored message to Telegram moderators

#### Parameters

• **parameters**: [`reportChatSponsoredMessage$DirectInput`](../type-aliases/reportChatSponsoredMessage$DirectInput.md)

[reportChatSponsoredMessage$Input](../type-aliases/reportChatSponsoredMessage$Input.md)

#### Returns

`Promise`\<[`ReportChatSponsoredMessageResult`](../type-aliases/ReportChatSponsoredMessageResult.md)\>

Promise<[ReportChatSponsoredMessageResult](../type-aliases/ReportChatSponsoredMessageResult.md)>

#### Defined in

dist/generated/types.d.ts:68277

***

### reportMessageReactions()

> **reportMessageReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports reactions set on a message to the Telegram moderators. Reactions on a message can be reported only if message.can_report_reactions

#### Parameters

• **parameters**: [`reportMessageReactions$DirectInput`](../type-aliases/reportMessageReactions$DirectInput.md)

[reportMessageReactions$Input](../type-aliases/reportMessageReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72027

***

### reportPhoneNumberCodeMissing()

> **reportPhoneNumberCodeMissing**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports that authentication code wasn't delivered via SMS to the specified phone number; for official mobile applications only

#### Parameters

• **parameters**: [`reportPhoneNumberCodeMissing$DirectInput`](../type-aliases/reportPhoneNumberCodeMissing$DirectInput.md)

[reportPhoneNumberCodeMissing$Input](../type-aliases/reportPhoneNumberCodeMissing$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71228

***

### reportStory()

> **reportStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports a story to the Telegram moderators

#### Parameters

• **parameters**: [`reportStory$DirectInput`](../type-aliases/reportStory$DirectInput.md)

[reportStory$Input](../type-aliases/reportStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69990

***

### reportSupergroupAntiSpamFalsePositive()

> **reportSupergroupAntiSpamFalsePositive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports a false deletion of a message by aggressive anti-spam checks; requires administrator rights in the supergroup. Can be called only for messages from chatEventMessageDeleted with can_report_anti_spam_false_positive == true

#### Parameters

• **parameters**: [`reportSupergroupAntiSpamFalsePositive$DirectInput`](../type-aliases/reportSupergroupAntiSpamFalsePositive$DirectInput.md)

[reportSupergroupAntiSpamFalsePositive$Input](../type-aliases/reportSupergroupAntiSpamFalsePositive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71657

***

### reportSupergroupSpam()

> **reportSupergroupSpam**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Reports messages in a supergroup as spam; requires administrator rights in the supergroup

#### Parameters

• **parameters**: [`reportSupergroupSpam$DirectInput`](../type-aliases/reportSupergroupSpam$DirectInput.md)

[reportSupergroupSpam$Input](../type-aliases/reportSupergroupSpam$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71650

***

### requestAuthenticationPasswordRecovery()

> **requestAuthenticationPasswordRecovery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Requests to send a 2-step verification password recovery code to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`requestAuthenticationPasswordRecovery$DirectInput`](../type-aliases/requestAuthenticationPasswordRecovery$DirectInput.md)

[requestAuthenticationPasswordRecovery$Input](../type-aliases/requestAuthenticationPasswordRecovery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67478

***

### requestPasswordRecovery()

> **requestPasswordRecovery**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Requests to send a 2-step verification password recovery code to an email address that was previously set up

#### Parameters

• **parameters**: [`requestPasswordRecovery$DirectInput`](../type-aliases/requestPasswordRecovery$DirectInput.md)

[requestPasswordRecovery$Input](../type-aliases/requestPasswordRecovery$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:67638

***

### requestQrCodeAuthentication()

> **requestQrCodeAuthentication**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Requests QR code authentication by scanning a QR code on another logged in device. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

#### Parameters

• **parameters**: [`requestQrCodeAuthentication$DirectInput`](../type-aliases/requestQrCodeAuthentication$DirectInput.md)

[requestQrCodeAuthentication$Input](../type-aliases/requestQrCodeAuthentication$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67448

***

### resendAuthenticationCode()

> **resendAuthenticationCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Resends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitCode, the next_code_type of the result is not null

- and the server-specified timeout has passed, or when the current authorization state is authorizationStateWaitEmailCode

#### Parameters

• **parameters**: [`resendAuthenticationCode$DirectInput`](../type-aliases/resendAuthenticationCode$DirectInput.md)

[resendAuthenticationCode$Input](../type-aliases/resendAuthenticationCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67425

***

### resendEmailAddressVerificationCode()

> **resendEmailAddressVerificationCode**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Resends the code to verify an email address to be added to a user's Telegram Passport

#### Parameters

• **parameters**: [`resendEmailAddressVerificationCode$DirectInput`](../type-aliases/resendEmailAddressVerificationCode$DirectInput.md)

[resendEmailAddressVerificationCode$Input](../type-aliases/resendEmailAddressVerificationCode$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:72260

***

### resendLoginEmailAddressCode()

> **resendLoginEmailAddressCode**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Resends the login email address verification code

#### Parameters

• **parameters**: [`resendLoginEmailAddressCode$DirectInput`](../type-aliases/resendLoginEmailAddressCode$DirectInput.md)

[resendLoginEmailAddressCode$Input](../type-aliases/resendLoginEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:67587

***

### resendMessages()

> **resendMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Resends messages which failed to send. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is re-sent, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be re-sent, null will be returned instead of the message

#### Parameters

• **parameters**: [`resendMessages$DirectInput`](../type-aliases/resendMessages$DirectInput.md)

[resendMessages$Input](../type-aliases/resendMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68409

***

### resendPhoneNumberCode()

> **resendPhoneNumberCode**(`parameters`): `Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo-1.md)\>

Resends the authentication code sent to a phone number. Works only if the previously received authenticationCodeInfo next_code_type was not null and the server-specified timeout has passed

#### Parameters

• **parameters**: [`resendPhoneNumberCode$DirectInput`](../type-aliases/resendPhoneNumberCode$DirectInput.md)

[resendPhoneNumberCode$Input](../type-aliases/resendPhoneNumberCode$Input.md)

#### Returns

`Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo-1.md)\>

Promise<[AuthenticationCodeInfo](../type-aliases/AuthenticationCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:71235

***

### resendRecoveryEmailAddressCode()

> **resendRecoveryEmailAddressCode**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Resends the 2-step verification recovery email address verification code

#### Parameters

• **parameters**: [`resendRecoveryEmailAddressCode$DirectInput`](../type-aliases/resendRecoveryEmailAddressCode$DirectInput.md)

[resendRecoveryEmailAddressCode$Input](../type-aliases/resendRecoveryEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Promise<[PasswordState](../type-aliases/PasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67624

***

### resetAllNotificationSettings()

> **resetAllNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Resets all chat and scope notification settings to their default values. By default, all chats are unmuted and message previews are shown

#### Parameters

• **parameters**: [`resetAllNotificationSettings$DirectInput`](../type-aliases/resetAllNotificationSettings$DirectInput.md)

[resetAllNotificationSettings$Input](../type-aliases/resetAllNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69809

***

### resetAuthenticationEmailAddress()

> **resetAuthenticationEmailAddress**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Resets the login email address. May return an error with a message "TASK_ALREADY_EXISTS" if reset is still pending.

- Works only when the current authorization state is authorizationStateWaitEmailCode and authorization_state.can_reset_email_address == true

#### Parameters

• **parameters**: [`resetAuthenticationEmailAddress$DirectInput`](../type-aliases/resetAuthenticationEmailAddress$DirectInput.md)

[resetAuthenticationEmailAddress$Input](../type-aliases/resetAuthenticationEmailAddress$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67464

***

### resetInstalledBackgrounds()

> **resetInstalledBackgrounds**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Resets list of installed backgrounds to its default value

#### Parameters

• **parameters**: [`resetInstalledBackgrounds$DirectInput`](../type-aliases/resetInstalledBackgrounds$DirectInput.md)

[resetInstalledBackgrounds$Input](../type-aliases/resetInstalledBackgrounds$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71804

***

### resetNetworkStatistics()

> **resetNetworkStatistics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Resets all network data usage statistics to zero. Can be called before authorization

#### Parameters

• **parameters**: [`resetNetworkStatistics$DirectInput`](../type-aliases/resetNetworkStatistics$DirectInput.md)

[resetNetworkStatistics$Input](../type-aliases/resetNetworkStatistics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72162

***

### resetPassword()

> **resetPassword**(`parameters`): `Promise`\<[`ResetPasswordResult`](../type-aliases/ResetPasswordResult.md)\>

Removes 2-step verification password without previous password and access to recovery email address. The password can't be reset immediately and the request needs to be repeated after the specified time

#### Parameters

• **parameters**: [`resetPassword$DirectInput`](../type-aliases/resetPassword$DirectInput.md)

[resetPassword$Input](../type-aliases/resetPassword$Input.md)

#### Returns

`Promise`\<[`ResetPasswordResult`](../type-aliases/ResetPasswordResult.md)\>

Promise<[ResetPasswordResult](../type-aliases/ResetPasswordResult.md)>

#### Defined in

dist/generated/types.d.ts:67659

***

### revokeChatInviteLink()

> **revokeChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks-1.md)\>

Revokes invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links.

- If a primary link is revoked, then additionally to the revoked link returns new primary link

#### Parameters

• **parameters**: [`revokeChatInviteLink$DirectInput`](../type-aliases/revokeChatInviteLink$DirectInput.md)

[revokeChatInviteLink$Input](../type-aliases/revokeChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks-1.md)\>

Promise<[ChatInviteLinks](../type-aliases/ChatInviteLinks.md)>

#### Defined in

dist/generated/types.d.ts:70345

***

### revokeGroupCallInviteLink()

> **revokeGroupCallInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Revokes invite link for a group call. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`revokeGroupCallInviteLink$DirectInput`](../type-aliases/revokeGroupCallInviteLink$DirectInput.md)

[revokeGroupCallInviteLink$Input](../type-aliases/revokeGroupCallInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70562

***

### saveApplicationLogEvent()

> **saveApplicationLogEvent**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Saves application log event on the server. Can be called before authorization

#### Parameters

• **parameters**: [`saveApplicationLogEvent$DirectInput`](../type-aliases/saveApplicationLogEvent$DirectInput.md)

[saveApplicationLogEvent$Input](../type-aliases/saveApplicationLogEvent$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72624

***

### searchBackground()

> **searchBackground**(`parameters`): `Promise`\<[`background`](../type-aliases/background-1.md)\>

Searches for a background by its name

#### Parameters

• **parameters**: [`searchBackground$DirectInput`](../type-aliases/searchBackground$DirectInput.md)

[searchBackground$Input](../type-aliases/searchBackground$Input.md)

#### Returns

`Promise`\<[`background`](../type-aliases/background-1.md)\>

Promise<[Background](../type-aliases/Background.md)>

#### Defined in

dist/generated/types.d.ts:71769

***

### searchCallMessages()

> **searchCallMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Searches for call messages. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib

#### Parameters

• **parameters**: [`searchCallMessages$DirectInput`](../type-aliases/searchCallMessages$DirectInput.md)

[searchCallMessages$Input](../type-aliases/searchCallMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages.md)>

#### Defined in

dist/generated/types.d.ts:68135

***

### searchChatMembers()

> **searchChatMembers**(`parameters`): `Promise`\<[`chatMembers`](../type-aliases/chatMembers-1.md)\>

Searches for a specified query in the first name, last name and usernames of the members of a specified chat. Requires administrator rights if the chat is a channel

#### Parameters

• **parameters**: [`searchChatMembers$DirectInput`](../type-aliases/searchChatMembers$DirectInput.md)

[searchChatMembers$Input](../type-aliases/searchChatMembers$Input.md)

#### Returns

`Promise`\<[`chatMembers`](../type-aliases/chatMembers-1.md)\>

Promise<[ChatMembers](../type-aliases/ChatMembers.md)>

#### Defined in

dist/generated/types.d.ts:69732

***

### searchChatMessages()

> **searchChatMessages**(`parameters`): `Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages-1.md)\>

Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. Cannot be used in secret chats with a non-empty query

- (searchSecretMessages must be used instead), or without an enabled message database. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit.

- A combination of query, sender_id, filter and message_thread_id search criteria is expected to be supported, only if it is required for Telegram official application implementation

#### Parameters

• **parameters**: [`searchChatMessages$DirectInput`](../type-aliases/searchChatMessages$DirectInput.md)

[searchChatMessages$Input](../type-aliases/searchChatMessages$Input.md)

#### Returns

`Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages-1.md)\>

Promise<[FoundChatMessages](../type-aliases/FoundChatMessages.md)>

#### Defined in

dist/generated/types.d.ts:68101

***

### searchChatRecentLocationMessages()

> **searchChatRecentLocationMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Returns information about the recent locations of chat members that were sent to the chat. Returns up to 1 location message per user

#### Parameters

• **parameters**: [`searchChatRecentLocationMessages$DirectInput`](../type-aliases/searchChatRecentLocationMessages$DirectInput.md)

[searchChatRecentLocationMessages$Input](../type-aliases/searchChatRecentLocationMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68205

***

### searchChats()

> **searchChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Searches for the specified query in the title and username of already known chats; this is an offline request. Returns chats in the order seen in the main chat list

#### Parameters

• **parameters**: [`searchChats$DirectInput`](../type-aliases/searchChats$DirectInput.md)

[searchChats$Input](../type-aliases/searchChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67863

***

### searchChatsNearby()

> **searchChatsNearby**(`parameters`): `Promise`\<[`chatsNearby`](../type-aliases/chatsNearby-1.md)\>

Returns a list of users and location-based supergroups nearby. The list of users nearby will be updated for 60 seconds after the request by the updates updateUsersNearby.

- The request must be sent again every 25 seconds with adjusted location to not miss new chats

#### Parameters

• **parameters**: [`searchChatsNearby$DirectInput`](../type-aliases/searchChatsNearby$DirectInput.md)

[searchChatsNearby$Input](../type-aliases/searchChatsNearby$Input.md)

#### Returns

`Promise`\<[`chatsNearby`](../type-aliases/chatsNearby-1.md)\>

Promise<[ChatsNearby](../type-aliases/ChatsNearby.md)>

#### Defined in

dist/generated/types.d.ts:67879

***

### searchChatsOnServer()

> **searchChatsOnServer**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Searches for the specified query in the title and username of already known chats via request to the server. Returns chats in the order seen in the main chat list

#### Parameters

• **parameters**: [`searchChatsOnServer$DirectInput`](../type-aliases/searchChatsOnServer$DirectInput.md)

[searchChatsOnServer$Input](../type-aliases/searchChatsOnServer$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67870

***

### searchContacts()

> **searchContacts**(`parameters`): `Promise`\<[`users`](../type-aliases/users-1.md)\>

Searches for the specified query in the first names, last names and usernames of the known user contacts

#### Parameters

• **parameters**: [`searchContacts$DirectInput`](../type-aliases/searchContacts$DirectInput.md)

[searchContacts$Input](../type-aliases/searchContacts$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users-1.md)\>

Promise<[Users](../type-aliases/Users.md)>

#### Defined in

dist/generated/types.d.ts:70702

***

### searchEmojis()

> **searchEmojis**(`parameters`): `Promise`\<[`emojiKeywords`](../type-aliases/emojiKeywords-1.md)\>

Searches for emojis by keywords. Supported only if the file database is enabled. Order of results is unspecified

#### Parameters

• **parameters**: [`searchEmojis$DirectInput`](../type-aliases/searchEmojis$DirectInput.md)

[searchEmojis$Input](../type-aliases/searchEmojis$Input.md)

#### Returns

`Promise`\<[`emojiKeywords`](../type-aliases/emojiKeywords-1.md)\>

Promise<[EmojiKeywords](../type-aliases/EmojiKeywords.md)>

#### Defined in

dist/generated/types.d.ts:70960

***

### searchFileDownloads()

> **searchFileDownloads**(`parameters`): `Promise`\<[`foundFileDownloads`](../type-aliases/foundFileDownloads-1.md)\>

Searches for files in the file download list or recently downloaded files from the list

#### Parameters

• **parameters**: [`searchFileDownloads$DirectInput`](../type-aliases/searchFileDownloads$DirectInput.md)

[searchFileDownloads$Input](../type-aliases/searchFileDownloads$Input.md)

#### Returns

`Promise`\<[`foundFileDownloads`](../type-aliases/foundFileDownloads-1.md)\>

Promise<[FoundFileDownloads](../type-aliases/FoundFileDownloads.md)>

#### Defined in

dist/generated/types.d.ts:70259

***

### searchHashtags()

> **searchHashtags**(`parameters`): `Promise`\<[`hashtags`](../type-aliases/hashtags-1.md)\>

Searches for recently used hashtags by their prefix

#### Parameters

• **parameters**: [`searchHashtags$DirectInput`](../type-aliases/searchHashtags$DirectInput.md)

[searchHashtags$Input](../type-aliases/searchHashtags$Input.md)

#### Returns

`Promise`\<[`hashtags`](../type-aliases/hashtags-1.md)\>

Promise<[Hashtags](../type-aliases/Hashtags.md)>

#### Defined in

dist/generated/types.d.ts:71053

***

### searchInstalledStickerSets()

> **searchInstalledStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Searches for installed sticker sets by looking for specified query in their title and name

#### Parameters

• **parameters**: [`searchInstalledStickerSets$DirectInput`](../type-aliases/searchInstalledStickerSets$DirectInput.md)

[searchInstalledStickerSets$Input](../type-aliases/searchInstalledStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Promise<[StickerSets](../type-aliases/StickerSets.md)>

#### Defined in

dist/generated/types.d.ts:70865

***

### searchMessages()

> **searchMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)).

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchMessages$DirectInput`](../type-aliases/searchMessages$DirectInput.md)

[searchMessages$Input](../type-aliases/searchMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages.md)>

#### Defined in

dist/generated/types.d.ts:68110

***

### searchOutgoingDocumentMessages()

> **searchOutgoingDocumentMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Searches for outgoing messages with content of the type messageDocument in all chats except secret chats. Returns the results in reverse chronological order

#### Parameters

• **parameters**: [`searchOutgoingDocumentMessages$DirectInput`](../type-aliases/searchOutgoingDocumentMessages$DirectInput.md)

[searchOutgoingDocumentMessages$Input](../type-aliases/searchOutgoingDocumentMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages.md)>

#### Defined in

dist/generated/types.d.ts:68142

***

### searchPublicChat()

> **searchPublicChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Searches a public chat by its username. Currently, only private chats, supergroups and channels can be public. Returns the chat if found; otherwise, an error is returned

#### Parameters

• **parameters**: [`searchPublicChat$DirectInput`](../type-aliases/searchPublicChat$DirectInput.md)

[searchPublicChat$Input](../type-aliases/searchPublicChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:67847

***

### searchPublicChats()

> **searchPublicChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Searches public chats by looking for specified query in their username and title. Currently, only private chats, supergroups and channels can be public. Returns a meaningful number of results.

- Excludes private chats with contacts and chats from the chat list from the results

#### Parameters

• **parameters**: [`searchPublicChats$DirectInput`](../type-aliases/searchPublicChats$DirectInput.md)

[searchPublicChats$Input](../type-aliases/searchPublicChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67856

***

### searchPublicMessagesByTag()

> **searchPublicMessagesByTag**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Searches for public channel posts containing the given hashtag or cashtag. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicMessagesByTag$DirectInput`](../type-aliases/searchPublicMessagesByTag$DirectInput.md)

[searchPublicMessagesByTag$Input](../type-aliases/searchPublicMessagesByTag$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages.md)>

#### Defined in

dist/generated/types.d.ts:68149

***

### searchPublicStoriesByLocation()

> **searchPublicStoriesByLocation**(`parameters`): `Promise`\<[`foundStories`](../type-aliases/foundStories-1.md)\>

Searches for public stories by the given address location. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicStoriesByLocation$DirectInput`](../type-aliases/searchPublicStoriesByLocation$DirectInput.md)

[searchPublicStoriesByLocation$Input](../type-aliases/searchPublicStoriesByLocation$Input.md)

#### Returns

`Promise`\<[`foundStories`](../type-aliases/foundStories-1.md)\>

Promise<[FoundStories](../type-aliases/FoundStories.md)>

#### Defined in

dist/generated/types.d.ts:68163

***

### searchPublicStoriesByTag()

> **searchPublicStoriesByTag**(`parameters`): `Promise`\<[`foundStories`](../type-aliases/foundStories-1.md)\>

Searches for public stories containing the given hashtag or cashtag. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicStoriesByTag$DirectInput`](../type-aliases/searchPublicStoriesByTag$DirectInput.md)

[searchPublicStoriesByTag$Input](../type-aliases/searchPublicStoriesByTag$Input.md)

#### Returns

`Promise`\<[`foundStories`](../type-aliases/foundStories-1.md)\>

Promise<[FoundStories](../type-aliases/FoundStories.md)>

#### Defined in

dist/generated/types.d.ts:68156

***

### searchPublicStoriesByVenue()

> **searchPublicStoriesByVenue**(`parameters`): `Promise`\<[`foundStories`](../type-aliases/foundStories-1.md)\>

Searches for public stories from the given venue. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicStoriesByVenue$DirectInput`](../type-aliases/searchPublicStoriesByVenue$DirectInput.md)

[searchPublicStoriesByVenue$Input](../type-aliases/searchPublicStoriesByVenue$Input.md)

#### Returns

`Promise`\<[`foundStories`](../type-aliases/foundStories-1.md)\>

Promise<[FoundStories](../type-aliases/FoundStories.md)>

#### Defined in

dist/generated/types.d.ts:68170

***

### searchQuote()

> **searchQuote**(`parameters`): `Promise`\<[`foundPosition`](../type-aliases/foundPosition-1.md)\>

Searches for a given quote in a text. Returns found quote start position in UTF-16 code units. Returns a 404 error if the quote is not found. Can be called synchronously

#### Parameters

• **parameters**: [`searchQuote$DirectInput`](../type-aliases/searchQuote$DirectInput.md)

[searchQuote$Input](../type-aliases/searchQuote$Input.md)

#### Returns

`Promise`\<[`foundPosition`](../type-aliases/foundPosition-1.md)\>

Promise<[FoundPosition](../type-aliases/FoundPosition.md)>

#### Defined in

dist/generated/types.d.ts:68860

***

### searchRecentlyFoundChats()

> **searchRecentlyFoundChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Searches for the specified query in the title and username of up to 50 recently found chats; this is an offline request

#### Parameters

• **parameters**: [`searchRecentlyFoundChats$DirectInput`](../type-aliases/searchRecentlyFoundChats$DirectInput.md)

[searchRecentlyFoundChats$Input](../type-aliases/searchRecentlyFoundChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats-1.md)\>

Promise<[Chats](../type-aliases/Chats.md)>

#### Defined in

dist/generated/types.d.ts:67928

***

### searchSavedMessages()

> **searchSavedMessages**(`parameters`): `Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages-1.md)\>

Searches for messages tagged by the given reaction and with the given words in the Saved Messages chat; for Telegram Premium users only.

- Returns the results in reverse chronological order, i.e. in order of decreasing message_id

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchSavedMessages$DirectInput`](../type-aliases/searchSavedMessages$DirectInput.md)

[searchSavedMessages$Input](../type-aliases/searchSavedMessages$Input.md)

#### Returns

`Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages-1.md)\>

Promise<[FoundChatMessages](../type-aliases/FoundChatMessages.md)>

#### Defined in

dist/generated/types.d.ts:68128

***

### searchSecretMessages()

> **searchSecretMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance, the number of returned messages is chosen by TDLib

#### Parameters

• **parameters**: [`searchSecretMessages$DirectInput`](../type-aliases/searchSecretMessages$DirectInput.md)

[searchSecretMessages$Input](../type-aliases/searchSecretMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages-1.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages.md)>

#### Defined in

dist/generated/types.d.ts:68117

***

### searchStickerSet()

> **searchStickerSet**(`parameters`): `Promise`\<[`stickerSet`](../type-aliases/stickerSet-1.md)\>

Searches for a sticker set by its name

#### Parameters

• **parameters**: [`searchStickerSet$DirectInput`](../type-aliases/searchStickerSet$DirectInput.md)

[searchStickerSet$Input](../type-aliases/searchStickerSet$Input.md)

#### Returns

`Promise`\<[`stickerSet`](../type-aliases/stickerSet-1.md)\>

Promise<[StickerSet](../type-aliases/StickerSet.md)>

#### Defined in

dist/generated/types.d.ts:70858

***

### searchStickerSets()

> **searchStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Searches for sticker sets by looking for specified query in their title and name. Excludes installed sticker sets from the results

#### Parameters

• **parameters**: [`searchStickerSets$DirectInput`](../type-aliases/searchStickerSets$DirectInput.md)

[searchStickerSets$Input](../type-aliases/searchStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets-1.md)\>

Promise<[StickerSets](../type-aliases/StickerSets.md)>

#### Defined in

dist/generated/types.d.ts:70872

***

### searchStickers()

> **searchStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Searches for stickers from public sticker sets that correspond to any of the given emoji

#### Parameters

• **parameters**: [`searchStickers$DirectInput`](../type-aliases/searchStickers$DirectInput.md)

[searchStickers$Input](../type-aliases/searchStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers-1.md)\>

Promise<[Stickers](../type-aliases/Stickers.md)>

#### Defined in

dist/generated/types.d.ts:70802

***

### searchStringsByPrefix()

> **searchStringsByPrefix**(`parameters`): `Promise`\<[`foundPositions`](../type-aliases/foundPositions-1.md)\>

Searches specified query by word prefixes in the provided strings. Returns 0-based positions of strings that matched. Can be called synchronously

#### Parameters

• **parameters**: [`searchStringsByPrefix$DirectInput`](../type-aliases/searchStringsByPrefix$DirectInput.md)

[searchStringsByPrefix$Input](../type-aliases/searchStringsByPrefix$Input.md)

#### Returns

`Promise`\<[`foundPositions`](../type-aliases/foundPositions-1.md)\>

Promise<[FoundPositions](../type-aliases/FoundPositions.md)>

#### Defined in

dist/generated/types.d.ts:72547

***

### searchUserByPhoneNumber()

> **searchUserByPhoneNumber**(`parameters`): `Promise`\<[`user`](../type-aliases/user-1.md)\>

Searches a user by their phone number. Returns a 404 error if the user can't be found

#### Parameters

• **parameters**: [`searchUserByPhoneNumber$DirectInput`](../type-aliases/searchUserByPhoneNumber$DirectInput.md)

[searchUserByPhoneNumber$Input](../type-aliases/searchUserByPhoneNumber$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user-1.md)\>

Promise<[User](../type-aliases/User.md)>

#### Defined in

dist/generated/types.d.ts:70767

***

### searchUserByToken()

> **searchUserByToken**(`parameters`): `Promise`\<[`user`](../type-aliases/user-1.md)\>

Searches a user by a token from the user's link

#### Parameters

• **parameters**: [`searchUserByToken$DirectInput`](../type-aliases/searchUserByToken$DirectInput.md)

[searchUserByToken$Input](../type-aliases/searchUserByToken$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user-1.md)\>

Promise<[User](../type-aliases/User.md)>

#### Defined in

dist/generated/types.d.ts:71326

***

### searchWebApp()

> **searchWebApp**(`parameters`): `Promise`\<[`foundWebApp`](../type-aliases/foundWebApp-1.md)\>

Returns information about a Web App by its short name. Returns a 404 error if the Web App is not found

#### Parameters

• **parameters**: [`searchWebApp$DirectInput`](../type-aliases/searchWebApp$DirectInput.md)

[searchWebApp$Input](../type-aliases/searchWebApp$Input.md)

#### Returns

`Promise`\<[`foundWebApp`](../type-aliases/foundWebApp-1.md)\>

Promise<[FoundWebApp](../type-aliases/FoundWebApp.md)>

#### Defined in

dist/generated/types.d.ts:69039

***

### sendAuthenticationFirebaseSms()

> **sendAuthenticationFirebaseSms**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends Firebase Authentication SMS to the phone number of the user. Works only when the current authorization state is authorizationStateWaitCode and the server returned code of the type authenticationCodeTypeFirebaseAndroid or authenticationCodeTypeFirebaseIos

#### Parameters

• **parameters**: [`sendAuthenticationFirebaseSms$DirectInput`](../type-aliases/sendAuthenticationFirebaseSms$DirectInput.md)

[sendAuthenticationFirebaseSms$Input](../type-aliases/sendAuthenticationFirebaseSms$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67499

***

### sendBotStartMessage()

> **sendBotStartMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Invites a bot to a chat (if it is not yet a member) and sends it the /start command; requires can_invite_users member right. Bots can't be invited to a private chat other than the chat with the bot.

- Bots can't be invited to channels (although they can be added as admins) and secret chats. Returns the sent message

#### Parameters

• **parameters**: [`sendBotStartMessage$DirectInput`](../type-aliases/sendBotStartMessage$DirectInput.md)

[sendBotStartMessage$Input](../type-aliases/sendBotStartMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68379

***

### sendBusinessMessage()

> **sendBusinessMessage**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Sends a message on behalf of a business account; for bots only. Returns the message after it was sent

#### Parameters

• **parameters**: [`sendBusinessMessage$DirectInput`](../type-aliases/sendBusinessMessage$DirectInput.md)

[sendBusinessMessage$Input](../type-aliases/sendBusinessMessage$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage.md)>

#### Defined in

dist/generated/types.d.ts:68540

***

### sendBusinessMessageAlbum()

> **sendBusinessMessageAlbum**(`parameters`): `Promise`\<[`businessMessages`](../type-aliases/businessMessages-1.md)\>

Sends 2-10 messages grouped together into an album on behalf of a business account; for bots only. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

#### Parameters

• **parameters**: [`sendBusinessMessageAlbum$DirectInput`](../type-aliases/sendBusinessMessageAlbum$DirectInput.md)

[sendBusinessMessageAlbum$Input](../type-aliases/sendBusinessMessageAlbum$Input.md)

#### Returns

`Promise`\<[`businessMessages`](../type-aliases/businessMessages-1.md)\>

Promise<[BusinessMessages](../type-aliases/BusinessMessages.md)>

#### Defined in

dist/generated/types.d.ts:68549

***

### sendCallDebugInformation()

> **sendCallDebugInformation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends debug information for a call to Telegram servers

#### Parameters

• **parameters**: [`sendCallDebugInformation$DirectInput`](../type-aliases/sendCallDebugInformation$DirectInput.md)

[sendCallDebugInformation$Input](../type-aliases/sendCallDebugInformation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70436

***

### sendCallLog()

> **sendCallLog**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends log file for a call to Telegram servers

#### Parameters

• **parameters**: [`sendCallLog$DirectInput`](../type-aliases/sendCallLog$DirectInput.md)

[sendCallLog$Input](../type-aliases/sendCallLog$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70443

***

### sendCallRating()

> **sendCallRating**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends a call rating

#### Parameters

• **parameters**: [`sendCallRating$DirectInput`](../type-aliases/sendCallRating$DirectInput.md)

[sendCallRating$Input](../type-aliases/sendCallRating$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70429

***

### sendCallSignalingData()

> **sendCallSignalingData**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends call signaling data

#### Parameters

• **parameters**: [`sendCallSignalingData$DirectInput`](../type-aliases/sendCallSignalingData$DirectInput.md)

[sendCallSignalingData$Input](../type-aliases/sendCallSignalingData$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70415

***

### sendChatAction()

> **sendChatAction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends a notification about user activity in a chat

#### Parameters

• **parameters**: [`sendChatAction$DirectInput`](../type-aliases/sendChatAction$DirectInput.md)

[sendChatAction$Input](../type-aliases/sendChatAction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69153

***

### sendCustomRequest()

> **sendCustomRequest**(`parameters`): `Promise`\<[`customRequestResult`](../type-aliases/customRequestResult-1.md)\>

Sends a custom request; for bots only

#### Parameters

• **parameters**: [`sendCustomRequest$DirectInput`](../type-aliases/sendCustomRequest$DirectInput.md)

[sendCustomRequest$Input](../type-aliases/sendCustomRequest$Input.md)

#### Returns

`Promise`\<[`customRequestResult`](../type-aliases/customRequestResult-1.md)\>

Promise<[CustomRequestResult](../type-aliases/CustomRequestResult.md)>

#### Defined in

dist/generated/types.d.ts:72554

***

### sendEmailAddressVerificationCode()

> **sendEmailAddressVerificationCode**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Sends a code to verify an email address to be added to a user's Telegram Passport

#### Parameters

• **parameters**: [`sendEmailAddressVerificationCode$DirectInput`](../type-aliases/sendEmailAddressVerificationCode$DirectInput.md)

[sendEmailAddressVerificationCode$Input](../type-aliases/sendEmailAddressVerificationCode$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:72253

***

### sendInlineQueryResultMessage()

> **sendInlineQueryResultMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message

#### Parameters

• **parameters**: [`sendInlineQueryResultMessage$DirectInput`](../type-aliases/sendInlineQueryResultMessage$DirectInput.md)

[sendInlineQueryResultMessage$Input](../type-aliases/sendInlineQueryResultMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68386

***

### sendMessage()

> **sendMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Sends a message. Returns the sent message

#### Parameters

• **parameters**: [`sendMessage$DirectInput`](../type-aliases/sendMessage$DirectInput.md)

[sendMessage$Input](../type-aliases/sendMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:68361

***

### sendMessageAlbum()

> **sendMessageAlbum**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Sends 2-10 messages grouped together into an album. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

#### Parameters

• **parameters**: [`sendMessageAlbum$DirectInput`](../type-aliases/sendMessageAlbum$DirectInput.md)

[sendMessageAlbum$Input](../type-aliases/sendMessageAlbum$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68370

***

### sendPassportAuthorizationForm()

> **sendPassportAuthorizationForm**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends a Telegram Passport authorization form, effectively sharing data with the service. This method must be called after getPassportAuthorizationFormAvailableElements if some previously available elements are going to be reused

#### Parameters

• **parameters**: [`sendPassportAuthorizationForm$DirectInput`](../type-aliases/sendPassportAuthorizationForm$DirectInput.md)

[sendPassportAuthorizationForm$Input](../type-aliases/sendPassportAuthorizationForm$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72288

***

### sendPaymentForm()

> **sendPaymentForm**(`parameters`): `Promise`\<[`paymentResult`](../type-aliases/paymentResult-1.md)\>

Sends a filled-out payment form to the bot for final verification

#### Parameters

• **parameters**: [`sendPaymentForm$DirectInput`](../type-aliases/sendPaymentForm$DirectInput.md)

[sendPaymentForm$Input](../type-aliases/sendPaymentForm$Input.md)

#### Returns

`Promise`\<[`paymentResult`](../type-aliases/paymentResult-1.md)\>

Promise<[PaymentResult](../type-aliases/PaymentResult.md)>

#### Defined in

dist/generated/types.d.ts:71706

***

### sendPhoneNumberCode()

> **sendPhoneNumberCode**(`parameters`): `Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo-1.md)\>

Sends a code to the specified phone number. Aborts previous phone number verification if there was one. On success, returns information about the sent code

#### Parameters

• **parameters**: [`sendPhoneNumberCode$DirectInput`](../type-aliases/sendPhoneNumberCode$DirectInput.md)

[sendPhoneNumberCode$Input](../type-aliases/sendPhoneNumberCode$Input.md)

#### Returns

`Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo-1.md)\>

Promise<[AuthenticationCodeInfo](../type-aliases/AuthenticationCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:71214

***

### sendPhoneNumberFirebaseSms()

> **sendPhoneNumberFirebaseSms**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends Firebase Authentication SMS to the specified phone number. Works only when received a code of the type authenticationCodeTypeFirebaseAndroid or authenticationCodeTypeFirebaseIos

#### Parameters

• **parameters**: [`sendPhoneNumberFirebaseSms$DirectInput`](../type-aliases/sendPhoneNumberFirebaseSms$DirectInput.md)

[sendPhoneNumberFirebaseSms$Input](../type-aliases/sendPhoneNumberFirebaseSms$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71221

***

### sendQuickReplyShortcutMessages()

> **sendQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Sends messages from a quick reply shortcut. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`sendQuickReplyShortcutMessages$DirectInput`](../type-aliases/sendQuickReplyShortcutMessages$DirectInput.md)

[sendQuickReplyShortcutMessages$Input](../type-aliases/sendQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages-1.md)\>

Promise<[Messages](../type-aliases/Messages.md)>

#### Defined in

dist/generated/types.d.ts:68400

***

### sendStory()

> **sendStory**(`parameters`): `Promise`\<[`story`](../type-aliases/story-1.md)\>

Sends a new story to a chat; requires can_post_stories right for supergroup and channel chats. Returns a temporary story

#### Parameters

• **parameters**: [`sendStory$DirectInput`](../type-aliases/sendStory$DirectInput.md)

[sendStory$Input](../type-aliases/sendStory$Input.md)

#### Returns

`Promise`\<[`story`](../type-aliases/story-1.md)\>

Promise<[Story](../type-aliases/Story.md)>

#### Defined in

dist/generated/types.d.ts:69858

***

### sendWebAppCustomRequest()

> **sendWebAppCustomRequest**(`parameters`): `Promise`\<[`customRequestResult`](../type-aliases/customRequestResult-1.md)\>

Sends a custom request from a Web App

#### Parameters

• **parameters**: [`sendWebAppCustomRequest$DirectInput`](../type-aliases/sendWebAppCustomRequest$DirectInput.md)

[sendWebAppCustomRequest$Input](../type-aliases/sendWebAppCustomRequest$Input.md)

#### Returns

`Promise`\<[`customRequestResult`](../type-aliases/customRequestResult-1.md)\>

Promise<[CustomRequestResult](../type-aliases/CustomRequestResult.md)>

#### Defined in

dist/generated/types.d.ts:71396

***

### sendWebAppData()

> **sendWebAppData**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends data received from a keyboardButtonTypeWebApp Web App to a bot

#### Parameters

• **parameters**: [`sendWebAppData$DirectInput`](../type-aliases/sendWebAppData$DirectInput.md)

[sendWebAppData$Input](../type-aliases/sendWebAppData$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69060

***

### setAccentColor()

> **setAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes accent color and background custom emoji for the current user; for Telegram Premium users only

#### Parameters

• **parameters**: [`setAccentColor$DirectInput`](../type-aliases/setAccentColor$DirectInput.md)

[setAccentColor$Input](../type-aliases/setAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71095

***

### setAccountTtl()

> **setAccountTtl**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the period of inactivity after which the account of the current user will automatically be deleted

#### Parameters

• **parameters**: [`setAccountTtl$DirectInput`](../type-aliases/setAccountTtl$DirectInput.md)

[setAccountTtl$Input](../type-aliases/setAccountTtl$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71969

***

### setAlarm()

> **setAlarm**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Succeeds after a specified amount of time has passed. Can be called before initialization

#### Parameters

• **parameters**: [`setAlarm$DirectInput`](../type-aliases/setAlarm$DirectInput.md)

[setAlarm$Input](../type-aliases/setAlarm$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72568

***

### setApplicationVerificationToken()

> **setApplicationVerificationToken**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Application verification has been completed. Can be called before authorization

#### Parameters

• **parameters**: [`setApplicationVerificationToken$DirectInput`](../type-aliases/setApplicationVerificationToken$DirectInput.md)

[setApplicationVerificationToken$Input](../type-aliases/setApplicationVerificationToken$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70266

***

### setArchiveChatListSettings()

> **setArchiveChatListSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes settings for automatic moving of chats to and from the Archive chat lists

#### Parameters

• **parameters**: [`setArchiveChatListSettings$DirectInput`](../type-aliases/setArchiveChatListSettings$DirectInput.md)

[setArchiveChatListSettings$Input](../type-aliases/setArchiveChatListSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69465

***

### setAuthenticationEmailAddress()

> **setAuthenticationEmailAddress**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the email address of the user and sends an authentication code to the email address. Works only when the current authorization state is authorizationStateWaitEmailAddress

#### Parameters

• **parameters**: [`setAuthenticationEmailAddress$DirectInput`](../type-aliases/setAuthenticationEmailAddress$DirectInput.md)

[setAuthenticationEmailAddress$Input](../type-aliases/setAuthenticationEmailAddress$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67416

***

### setAuthenticationPhoneNumber()

> **setAuthenticationPhoneNumber**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the phone number of the user and sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

#### Parameters

• **parameters**: [`setAuthenticationPhoneNumber$DirectInput`](../type-aliases/setAuthenticationPhoneNumber$DirectInput.md)

[setAuthenticationPhoneNumber$Input](../type-aliases/setAuthenticationPhoneNumber$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67409

***

### setAutoDownloadSettings()

> **setAutoDownloadSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets auto-download settings

#### Parameters

• **parameters**: [`setAutoDownloadSettings$DirectInput`](../type-aliases/setAutoDownloadSettings$DirectInput.md)

[setAutoDownloadSettings$Input](../type-aliases/setAutoDownloadSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72176

***

### setAutosaveSettings()

> **setAutosaveSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets autosave settings for the given scope. The method is guaranteed to work only after at least one call to getAutosaveSettings

#### Parameters

• **parameters**: [`setAutosaveSettings$DirectInput`](../type-aliases/setAutosaveSettings$DirectInput.md)

[setAutosaveSettings$Input](../type-aliases/setAutosaveSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72190

***

### setBio()

> **setBio**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the bio of the current user

#### Parameters

• **parameters**: [`setBio$DirectInput`](../type-aliases/setBio$DirectInput.md)

[setBio$Input](../type-aliases/setBio$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71116

***

### setBirthdate()

> **setBirthdate**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the birthdate of the current user

#### Parameters

• **parameters**: [`setBirthdate$DirectInput`](../type-aliases/setBirthdate$DirectInput.md)

[setBirthdate$Input](../type-aliases/setBirthdate$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71144

***

### setBotInfoDescription()

> **setBotInfoDescription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the text shown in the chat with a bot if the chat is empty. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`setBotInfoDescription$DirectInput`](../type-aliases/setBotInfoDescription$DirectInput.md)

[setBotInfoDescription$Input](../type-aliases/setBotInfoDescription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71438

***

### setBotInfoShortDescription()

> **setBotInfoShortDescription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the text shown on a bot's profile page and sent together with the link when users share the bot. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`setBotInfoShortDescription$DirectInput`](../type-aliases/setBotInfoShortDescription$DirectInput.md)

[setBotInfoShortDescription$Input](../type-aliases/setBotInfoShortDescription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71452

***

### setBotName()

> **setBotName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the name of a bot. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`setBotName$DirectInput`](../type-aliases/setBotName$DirectInput.md)

[setBotName$Input](../type-aliases/setBotName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71403

***

### setBotProfilePhoto()

> **setBotProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes a profile photo for a bot

#### Parameters

• **parameters**: [`setBotProfilePhoto$DirectInput`](../type-aliases/setBotProfilePhoto$DirectInput.md)

[setBotProfilePhoto$Input](../type-aliases/setBotProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71417

***

### setBotUpdatesStatus()

> **setBotUpdatesStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only

#### Parameters

• **parameters**: [`setBotUpdatesStatus$DirectInput`](../type-aliases/setBotUpdatesStatus$DirectInput.md)

[setBotUpdatesStatus$Input](../type-aliases/setBotUpdatesStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72295

***

### setBusinessAwayMessageSettings()

> **setBusinessAwayMessageSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the business away message settings of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessAwayMessageSettings$DirectInput`](../type-aliases/setBusinessAwayMessageSettings$DirectInput.md)

[setBusinessAwayMessageSettings$Input](../type-aliases/setBusinessAwayMessageSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71200

***

### setBusinessConnectedBot()

> **setBusinessConnectedBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds or changes business bot that is connected to the current user account

#### Parameters

• **parameters**: [`setBusinessConnectedBot$DirectInput`](../type-aliases/setBusinessConnectedBot$DirectInput.md)

[setBusinessConnectedBot$Input](../type-aliases/setBusinessConnectedBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71256

***

### setBusinessGreetingMessageSettings()

> **setBusinessGreetingMessageSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the business greeting message settings of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessGreetingMessageSettings$DirectInput`](../type-aliases/setBusinessGreetingMessageSettings$DirectInput.md)

[setBusinessGreetingMessageSettings$Input](../type-aliases/setBusinessGreetingMessageSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71193

***

### setBusinessLocation()

> **setBusinessLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the business location of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessLocation$DirectInput`](../type-aliases/setBusinessLocation$DirectInput.md)

[setBusinessLocation$Input](../type-aliases/setBusinessLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71179

***

### setBusinessOpeningHours()

> **setBusinessOpeningHours**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the business opening hours of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessOpeningHours$DirectInput`](../type-aliases/setBusinessOpeningHours$DirectInput.md)

[setBusinessOpeningHours$Input](../type-aliases/setBusinessOpeningHours$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71186

***

### setBusinessStartPage()

> **setBusinessStartPage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the business start page of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessStartPage$DirectInput`](../type-aliases/setBusinessStartPage$DirectInput.md)

[setBusinessStartPage$Input](../type-aliases/setBusinessStartPage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71207

***

### setChatAccentColor()

> **setChatAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes accent color and background custom emoji of a channel chat. Requires can_change_info administrator right

#### Parameters

• **parameters**: [`setChatAccentColor$DirectInput`](../type-aliases/setChatAccentColor$DirectInput.md)

[setChatAccentColor$Input](../type-aliases/setChatAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69486

***

### setChatActiveStoriesList()

> **setChatActiveStoriesList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes story list in which stories from the chat are shown

#### Parameters

• **parameters**: [`setChatActiveStoriesList$DirectInput`](../type-aliases/setChatActiveStoriesList$DirectInput.md)

[setChatActiveStoriesList$Input](../type-aliases/setChatActiveStoriesList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69909

***

### setChatAvailableReactions()

> **setChatAvailableReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes reactions, available in a chat. Available for basic groups, supergroups, and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatAvailableReactions$DirectInput`](../type-aliases/setChatAvailableReactions$DirectInput.md)

[setChatAvailableReactions$Input](../type-aliases/setChatAvailableReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69593

***

### setChatBackground()

> **setChatBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the background in a specific chat. Supported only in private and secret chats with non-deleted users, and in chats with sufficient boost level and can_change_info administrator right

#### Parameters

• **parameters**: [`setChatBackground$DirectInput`](../type-aliases/setChatBackground$DirectInput.md)

[setChatBackground$Input](../type-aliases/setChatBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69523

***

### setChatClientData()

> **setChatClientData**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes application-specific data associated with a chat

#### Parameters

• **parameters**: [`setChatClientData$DirectInput`](../type-aliases/setChatClientData$DirectInput.md)

[setChatClientData$Input](../type-aliases/setChatClientData$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69600

***

### setChatDescription()

> **setChatDescription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes information about a chat. Available for basic groups, supergroups, and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatDescription$DirectInput`](../type-aliases/setChatDescription$DirectInput.md)

[setChatDescription$Input](../type-aliases/setChatDescription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69607

***

### setChatDiscussionGroup()

> **setChatDiscussionGroup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the discussion group of a channel chat; requires can_change_info administrator right in the channel if it is specified

#### Parameters

• **parameters**: [`setChatDiscussionGroup$DirectInput`](../type-aliases/setChatDiscussionGroup$DirectInput.md)

[setChatDiscussionGroup$Input](../type-aliases/setChatDiscussionGroup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69614

***

### setChatDraftMessage()

> **setChatDraftMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the draft message in a chat

#### Parameters

• **parameters**: [`setChatDraftMessage$DirectInput`](../type-aliases/setChatDraftMessage$DirectInput.md)

[setChatDraftMessage$Input](../type-aliases/setChatDraftMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69544

***

### setChatEmojiStatus()

> **setChatEmojiStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the emoji status of a chat. Use chatBoostLevelFeatures.can_set_emoji_status to check whether an emoji status can be set. Requires can_change_info administrator right

#### Parameters

• **parameters**: [`setChatEmojiStatus$DirectInput`](../type-aliases/setChatEmojiStatus$DirectInput.md)

[setChatEmojiStatus$Input](../type-aliases/setChatEmojiStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69509

***

### setChatLocation()

> **setChatLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the location of a chat. Available only for some location-based supergroups, use supergroupFullInfo.can_set_location to check whether the method is allowed to use

#### Parameters

• **parameters**: [`setChatLocation$DirectInput`](../type-aliases/setChatLocation$DirectInput.md)

[setChatLocation$Input](../type-aliases/setChatLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69621

***

### setChatMemberStatus()

> **setChatMemberStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the status of a chat member; requires can_invite_users member right to add a chat member, can_promote_members administrator right to change administrator rights of the member,

- and can_restrict_members administrator right to change restrictions of a user. This function is currently not suitable for transferring chat ownership; use transferChatOwnership instead.

- Use addChatMember or banChatMember if some additional parameters needs to be passed

#### Parameters

• **parameters**: [`setChatMemberStatus$DirectInput`](../type-aliases/setChatMemberStatus$DirectInput.md)

[setChatMemberStatus$Input](../type-aliases/setChatMemberStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69697

***

### setChatMessageAutoDeleteTime()

> **setChatMessageAutoDeleteTime**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the message auto-delete or self-destruct (for secret chats) time in a chat. Requires change_info administrator right in basic groups, supergroups and channels

- Message auto-delete time can't be changed in a chat with the current user (Saved Messages) and the chat 777000 (Telegram).

#### Parameters

• **parameters**: [`setChatMessageAutoDeleteTime$DirectInput`](../type-aliases/setChatMessageAutoDeleteTime$DirectInput.md)

[setChatMessageAutoDeleteTime$Input](../type-aliases/setChatMessageAutoDeleteTime$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69502

***

### setChatMessageSender()

> **setChatMessageSender**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Selects a message sender to send messages in a chat

#### Parameters

• **parameters**: [`setChatMessageSender$DirectInput`](../type-aliases/setChatMessageSender$DirectInput.md)

[setChatMessageSender$Input](../type-aliases/setChatMessageSender$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68354

***

### setChatNotificationSettings()

> **setChatNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the notification settings of a chat. Notification settings of a chat with the current user (Saved Messages) can't be changed

#### Parameters

• **parameters**: [`setChatNotificationSettings$DirectInput`](../type-aliases/setChatNotificationSettings$DirectInput.md)

[setChatNotificationSettings$Input](../type-aliases/setChatNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69551

***

### setChatPermissions()

> **setChatPermissions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the chat members permissions. Supported only for basic groups and supergroups. Requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`setChatPermissions$DirectInput`](../type-aliases/setChatPermissions$DirectInput.md)

[setChatPermissions$Input](../type-aliases/setChatPermissions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69516

***

### setChatPhoto()

> **setChatPhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatPhoto$DirectInput`](../type-aliases/setChatPhoto$DirectInput.md)

[setChatPhoto$Input](../type-aliases/setChatPhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69479

***

### setChatPinnedStories()

> **setChatPinnedStories**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the list of pinned stories on a chat page; requires can_edit_stories right in the chat

#### Parameters

• **parameters**: [`setChatPinnedStories$DirectInput`](../type-aliases/setChatPinnedStories$DirectInput.md)

[setChatPinnedStories$Input](../type-aliases/setChatPinnedStories$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69941

***

### setChatProfileAccentColor()

> **setChatProfileAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes accent color and background custom emoji for profile of a supergroup or channel chat. Requires can_change_info administrator right

#### Parameters

• **parameters**: [`setChatProfileAccentColor$DirectInput`](../type-aliases/setChatProfileAccentColor$DirectInput.md)

[setChatProfileAccentColor$Input](../type-aliases/setChatProfileAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69493

***

### setChatSlowModeDelay()

> **setChatSlowModeDelay**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members right

#### Parameters

• **parameters**: [`setChatSlowModeDelay$DirectInput`](../type-aliases/setChatSlowModeDelay$DirectInput.md)

[setChatSlowModeDelay$Input](../type-aliases/setChatSlowModeDelay$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69628

***

### setChatTheme()

> **setChatTheme**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the chat theme. Supported only in private and secret chats

#### Parameters

• **parameters**: [`setChatTheme$DirectInput`](../type-aliases/setChatTheme$DirectInput.md)

[setChatTheme$Input](../type-aliases/setChatTheme$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69537

***

### setChatTitle()

> **setChatTitle**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the chat title. Supported only for basic groups, supergroups and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatTitle$DirectInput`](../type-aliases/setChatTitle$DirectInput.md)

[setChatTitle$Input](../type-aliases/setChatTitle$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69472

***

### setCloseFriends()

> **setCloseFriends**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the list of close friends of the current user

#### Parameters

• **parameters**: [`setCloseFriends$DirectInput`](../type-aliases/setCloseFriends$DirectInput.md)

[setCloseFriends$Input](../type-aliases/setCloseFriends$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70739

***

### setCommands()

> **setCommands**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the list of commands supported by the bot for the given user scope and language; for bots only

#### Parameters

• **parameters**: [`setCommands$DirectInput`](../type-aliases/setCommands$DirectInput.md)

[setCommands$Input](../type-aliases/setCommands$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71333

***

### setCustomEmojiStickerSetThumbnail()

> **setCustomEmojiStickerSetThumbnail**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets a custom emoji sticker set thumbnail

#### Parameters

• **parameters**: [`setCustomEmojiStickerSetThumbnail$DirectInput`](../type-aliases/setCustomEmojiStickerSetThumbnail$DirectInput.md)

[setCustomEmojiStickerSetThumbnail$Input](../type-aliases/setCustomEmojiStickerSetThumbnail$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72351

***

### setCustomLanguagePack()

> **setCustomLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds or changes a custom local language pack to the current localization target

#### Parameters

• **parameters**: [`setCustomLanguagePack$DirectInput`](../type-aliases/setCustomLanguagePack$DirectInput.md)

[setCustomLanguagePack$Input](../type-aliases/setCustomLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71848

***

### setCustomLanguagePackString()

> **setCustomLanguagePackString**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds, edits or deletes a string in a custom local language pack. Can be called before authorization

#### Parameters

• **parameters**: [`setCustomLanguagePackString$DirectInput`](../type-aliases/setCustomLanguagePackString$DirectInput.md)

[setCustomLanguagePackString$Input](../type-aliases/setCustomLanguagePackString$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71862

***

### setDatabaseEncryptionKey()

> **setDatabaseEncryptionKey**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the database encryption key. Usually the encryption key is never changed and is stored in some OS keychain

#### Parameters

• **parameters**: [`setDatabaseEncryptionKey$DirectInput`](../type-aliases/setDatabaseEncryptionKey$DirectInput.md)

[setDatabaseEncryptionKey$Input](../type-aliases/setDatabaseEncryptionKey$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67557

***

### setDefaultBackground()

> **setDefaultBackground**(`parameters`): `Promise`\<[`background`](../type-aliases/background-1.md)\>

Sets default background for chats; adds the background to the list of installed backgrounds

#### Parameters

• **parameters**: [`setDefaultBackground$DirectInput`](../type-aliases/setDefaultBackground$DirectInput.md)

[setDefaultBackground$Input](../type-aliases/setDefaultBackground$Input.md)

#### Returns

`Promise`\<[`background`](../type-aliases/background-1.md)\>

Promise<[Background](../type-aliases/Background.md)>

#### Defined in

dist/generated/types.d.ts:71776

***

### setDefaultChannelAdministratorRights()

> **setDefaultChannelAdministratorRights**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets default administrator rights for adding the bot to channel chats; for bots only

#### Parameters

• **parameters**: [`setDefaultChannelAdministratorRights$DirectInput`](../type-aliases/setDefaultChannelAdministratorRights$DirectInput.md)

[setDefaultChannelAdministratorRights$Input](../type-aliases/setDefaultChannelAdministratorRights$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71375

***

### setDefaultGroupAdministratorRights()

> **setDefaultGroupAdministratorRights**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets default administrator rights for adding the bot to basic group and supergroup chats; for bots only

#### Parameters

• **parameters**: [`setDefaultGroupAdministratorRights$DirectInput`](../type-aliases/setDefaultGroupAdministratorRights$DirectInput.md)

[setDefaultGroupAdministratorRights$Input](../type-aliases/setDefaultGroupAdministratorRights$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71368

***

### setDefaultMessageAutoDeleteTime()

> **setDefaultMessageAutoDeleteTime**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the default message auto-delete time for new chats

#### Parameters

• **parameters**: [`setDefaultMessageAutoDeleteTime$DirectInput`](../type-aliases/setDefaultMessageAutoDeleteTime$DirectInput.md)

[setDefaultMessageAutoDeleteTime$Input](../type-aliases/setDefaultMessageAutoDeleteTime$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71992

***

### setDefaultReactionType()

> **setDefaultReactionType**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes type of default reaction for the current user

#### Parameters

• **parameters**: [`setDefaultReactionType$DirectInput`](../type-aliases/setDefaultReactionType$DirectInput.md)

[setDefaultReactionType$Input](../type-aliases/setDefaultReactionType$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68832

***

### setEmojiStatus()

> **setEmojiStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the emoji status of the current user; for Telegram Premium users only

#### Parameters

• **parameters**: [`setEmojiStatus$DirectInput`](../type-aliases/setEmojiStatus$DirectInput.md)

[setEmojiStatus$Input](../type-aliases/setEmojiStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71158

***

### setFileGenerationProgress()

> **setFileGenerationProgress**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib on a file generation progress

#### Parameters

• **parameters**: [`setFileGenerationProgress$DirectInput`](../type-aliases/setFileGenerationProgress$DirectInput.md)

[setFileGenerationProgress$Input](../type-aliases/setFileGenerationProgress$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70194

***

### setForumTopicNotificationSettings()

> **setForumTopicNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the notification settings of a forum topic

#### Parameters

• **parameters**: [`setForumTopicNotificationSettings$DirectInput`](../type-aliases/setForumTopicNotificationSettings$DirectInput.md)

[setForumTopicNotificationSettings$Input](../type-aliases/setForumTopicNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68734

***

### setGameScore()

> **setGameScore**(`parameters`): `Promise`\<[`message`](../type-aliases/message-1.md)\>

Updates the game score of the specified user in the game; for bots only

#### Parameters

• **parameters**: [`setGameScore$DirectInput`](../type-aliases/setGameScore$DirectInput.md)

[setGameScore$Input](../type-aliases/setGameScore$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message-1.md)\>

Promise<[Message](../type-aliases/Message.md)>

#### Defined in

dist/generated/types.d.ts:69118

***

### setGroupCallParticipantIsSpeaking()

> **setGroupCallParticipantIsSpeaking**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that speaking state of a participant of an active group has changed

#### Parameters

• **parameters**: [`setGroupCallParticipantIsSpeaking$DirectInput`](../type-aliases/setGroupCallParticipantIsSpeaking$DirectInput.md)

[setGroupCallParticipantIsSpeaking$Input](../type-aliases/setGroupCallParticipantIsSpeaking$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70597

***

### setGroupCallParticipantVolumeLevel()

> **setGroupCallParticipantVolumeLevel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes volume level of a participant of an active group call. If the current user can manage the group call, then the participant's volume level will be changed for all users with the default volume level

#### Parameters

• **parameters**: [`setGroupCallParticipantVolumeLevel$DirectInput`](../type-aliases/setGroupCallParticipantVolumeLevel$DirectInput.md)

[setGroupCallParticipantVolumeLevel$Input](../type-aliases/setGroupCallParticipantVolumeLevel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70611

***

### setGroupCallTitle()

> **setGroupCallTitle**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets group call title. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`setGroupCallTitle$DirectInput`](../type-aliases/setGroupCallTitle$DirectInput.md)

[setGroupCallTitle$Input](../type-aliases/setGroupCallTitle$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70534

***

### setInactiveSessionTtl()

> **setInactiveSessionTtl**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the period of inactivity after which sessions will automatically be terminated

#### Parameters

• **parameters**: [`setInactiveSessionTtl$DirectInput`](../type-aliases/setInactiveSessionTtl$DirectInput.md)

[setInactiveSessionTtl$Input](../type-aliases/setInactiveSessionTtl$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71508

***

### setInlineGameScore()

> **setInlineGameScore**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Updates the game score of the specified user in a game; for bots only

#### Parameters

• **parameters**: [`setInlineGameScore$DirectInput`](../type-aliases/setInlineGameScore$DirectInput.md)

[setInlineGameScore$Input](../type-aliases/setInlineGameScore$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69125

***

### setLocation()

> **setLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the location of the current user. Needs to be called if getOption("is_location_visible") is true and location changes for more than 1 kilometer. Must not be called if the user has a business location

#### Parameters

• **parameters**: [`setLocation$DirectInput`](../type-aliases/setLocation$DirectInput.md)

[setLocation$Input](../type-aliases/setLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71165

***

### setLogStream()

> **setLogStream**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets new log stream for internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`setLogStream$DirectInput`](../type-aliases/setLogStream$DirectInput.md)

[setLogStream$Input](../type-aliases/setLogStream$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72694

***

### setLogTagVerbosityLevel()

> **setLogTagVerbosityLevel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

• **parameters**: [`setLogTagVerbosityLevel$DirectInput`](../type-aliases/setLogTagVerbosityLevel$DirectInput.md)

[setLogTagVerbosityLevel$Input](../type-aliases/setLogTagVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72729

***

### setLogVerbosityLevel()

> **setLogVerbosityLevel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`setLogVerbosityLevel$DirectInput`](../type-aliases/setLogVerbosityLevel$DirectInput.md)

[setLogVerbosityLevel$Input](../type-aliases/setLogVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72708

***

### setLoginEmailAddress()

> **setLoginEmailAddress**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Changes the login email address of the user. The email address can be changed only if the current user already has login email and passwordState.login_email_address_pattern is non-empty.

- The change will not be applied until the new login email address is confirmed with checkLoginEmailAddressCode. To use Apple ID/Google ID instead of an email address, call checkLoginEmailAddressCode directly

#### Parameters

• **parameters**: [`setLoginEmailAddress$DirectInput`](../type-aliases/setLoginEmailAddress$DirectInput.md)

[setLoginEmailAddress$Input](../type-aliases/setLoginEmailAddress$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo-1.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo.md)>

#### Defined in

dist/generated/types.d.ts:67580

***

### setMenuButton()

> **setMenuButton**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets menu button for the given user or for all users; for bots only

#### Parameters

• **parameters**: [`setMenuButton$DirectInput`](../type-aliases/setMenuButton$DirectInput.md)

[setMenuButton$Input](../type-aliases/setMenuButton$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71354

***

### setMessageFactCheck()

> **setMessageFactCheck**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the fact-check of a message. Can be only used if getOption("can_edit_fact_check") == true

#### Parameters

• **parameters**: [`setMessageFactCheck$DirectInput`](../type-aliases/setMessageFactCheck$DirectInput.md)

[setMessageFactCheck$Input](../type-aliases/setMessageFactCheck$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68533

***

### setMessageReactions()

> **setMessageReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets reactions on a message; for bots only

#### Parameters

• **parameters**: [`setMessageReactions$DirectInput`](../type-aliases/setMessageReactions$DirectInput.md)

[setMessageReactions$Input](../type-aliases/setMessageReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68818

***

### setMessageSenderBlockList()

> **setMessageSenderBlockList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the block list of a message sender. Currently, only users and supergroup chats can be blocked

#### Parameters

• **parameters**: [`setMessageSenderBlockList$DirectInput`](../type-aliases/setMessageSenderBlockList$DirectInput.md)

[setMessageSenderBlockList$Input](../type-aliases/setMessageSenderBlockList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70660

***

### setName()

> **setName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the first and last name of the current user

#### Parameters

• **parameters**: [`setName$DirectInput`](../type-aliases/setName$DirectInput.md)

[setName$Input](../type-aliases/setName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71109

***

### setNetworkType()

> **setNetworkType**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the current network type. Can be called before authorization. Calling this method forces all network connections to reopen, mitigating the delay in switching between different networks,

- so it must be called whenever the network is changed, even if the network type remains the same. Network type is used to check whether the library can use the network at all and also for collecting detailed network data usage statistics

#### Parameters

• **parameters**: [`setNetworkType$DirectInput`](../type-aliases/setNetworkType$DirectInput.md)

[setNetworkType$Input](../type-aliases/setNetworkType$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72141

***

### setNewChatPrivacySettings()

> **setNewChatPrivacySettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes privacy settings for new chat creation; can be used only if getOption("can_set_new_chat_privacy_settings")

#### Parameters

• **parameters**: [`setNewChatPrivacySettings$DirectInput`](../type-aliases/setNewChatPrivacySettings$DirectInput.md)

[setNewChatPrivacySettings$Input](../type-aliases/setNewChatPrivacySettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71934

***

### setOption()

> **setOption**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only writable options can be set. Can be called before authorization

#### Parameters

• **parameters**: [`setOption$DirectInput`](../type-aliases/setOption$DirectInput.md)

[setOption$Input](../type-aliases/setOption$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71962

***

### setPassportElement()

> **setPassportElement**(`parameters`): `Promise`\<[`PassportElement`](../type-aliases/PassportElement.md)\>

Adds an element to the user's Telegram Passport. May return an error with a message "PHONE_VERIFICATION_NEEDED" or "EMAIL_VERIFICATION_NEEDED" if the chosen phone number or the chosen email address must be verified first

#### Parameters

• **parameters**: [`setPassportElement$DirectInput`](../type-aliases/setPassportElement$DirectInput.md)

[setPassportElement$Input](../type-aliases/setPassportElement$Input.md)

#### Returns

`Promise`\<[`PassportElement`](../type-aliases/PassportElement.md)\>

Promise<[PassportElement](../type-aliases/PassportElement.md)>

#### Defined in

dist/generated/types.d.ts:72225

***

### setPassportElementErrors()

> **setPassportElementErrors**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not be able to resend the elements, until the errors are fixed

#### Parameters

• **parameters**: [`setPassportElementErrors$DirectInput`](../type-aliases/setPassportElementErrors$DirectInput.md)

[setPassportElementErrors$Input](../type-aliases/setPassportElementErrors$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72239

***

### setPassword()

> **setPassword**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Changes the 2-step verification password for the current user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed

#### Parameters

• **parameters**: [`setPassword$DirectInput`](../type-aliases/setPassword$DirectInput.md)

[setPassword$Input](../type-aliases/setPassword$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Promise<[PasswordState](../type-aliases/PasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67571

***

### setPersonalChat()

> **setPersonalChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the personal chat of the current user

#### Parameters

• **parameters**: [`setPersonalChat$DirectInput`](../type-aliases/setPersonalChat$DirectInput.md)

[setPersonalChat$Input](../type-aliases/setPersonalChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71151

***

### setPinnedChats()

> **setPinnedChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the order of pinned chats

#### Parameters

• **parameters**: [`setPinnedChats$DirectInput`](../type-aliases/setPinnedChats$DirectInput.md)

[setPinnedChats$Input](../type-aliases/setPinnedChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69823

***

### setPinnedForumTopics()

> **setPinnedForumTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the order of pinned forum topics; requires can_manage_topics right in the supergroup

#### Parameters

• **parameters**: [`setPinnedForumTopics$DirectInput`](../type-aliases/setPinnedForumTopics$DirectInput.md)

[setPinnedForumTopics$Input](../type-aliases/setPinnedForumTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68762

***

### setPinnedSavedMessagesTopics()

> **setPinnedSavedMessagesTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the order of pinned Saved Messages topics

#### Parameters

• **parameters**: [`setPinnedSavedMessagesTopics$DirectInput`](../type-aliases/setPinnedSavedMessagesTopics$DirectInput.md)

[setPinnedSavedMessagesTopics$Input](../type-aliases/setPinnedSavedMessagesTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68049

***

### setPollAnswer()

> **setPollAnswer**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the user answer to a poll. A poll in quiz mode can be answered only once

#### Parameters

• **parameters**: [`setPollAnswer$DirectInput`](../type-aliases/setPollAnswer$DirectInput.md)

[setPollAnswer$Input](../type-aliases/setPollAnswer$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68953

***

### setProfileAccentColor()

> **setProfileAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes accent color and background custom emoji for profile of the current user; for Telegram Premium users only

#### Parameters

• **parameters**: [`setProfileAccentColor$DirectInput`](../type-aliases/setProfileAccentColor$DirectInput.md)

[setProfileAccentColor$Input](../type-aliases/setProfileAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71102

***

### setProfilePhoto()

> **setProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes a profile photo for the current user

#### Parameters

• **parameters**: [`setProfilePhoto$DirectInput`](../type-aliases/setProfilePhoto$DirectInput.md)

[setProfilePhoto$Input](../type-aliases/setProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71081

***

### setQuickReplyShortcutName()

> **setQuickReplyShortcutName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes name of a quick reply shortcut

#### Parameters

• **parameters**: [`setQuickReplyShortcutName$DirectInput`](../type-aliases/setQuickReplyShortcutName$DirectInput.md)

[setQuickReplyShortcutName$Input](../type-aliases/setQuickReplyShortcutName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68612

***

### setReactionNotificationSettings()

> **setReactionNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes notification settings for reactions

#### Parameters

• **parameters**: [`setReactionNotificationSettings$DirectInput`](../type-aliases/setReactionNotificationSettings$DirectInput.md)

[setReactionNotificationSettings$Input](../type-aliases/setReactionNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69802

***

### setReadDatePrivacySettings()

> **setReadDatePrivacySettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes privacy settings for message read date

#### Parameters

• **parameters**: [`setReadDatePrivacySettings$DirectInput`](../type-aliases/setReadDatePrivacySettings$DirectInput.md)

[setReadDatePrivacySettings$Input](../type-aliases/setReadDatePrivacySettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71920

***

### setRecoveryEmailAddress()

> **setRecoveryEmailAddress**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed.

- If new_recovery_email_address is the same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting for an email confirmation

#### Parameters

• **parameters**: [`setRecoveryEmailAddress$DirectInput`](../type-aliases/setRecoveryEmailAddress$DirectInput.md)

[setRecoveryEmailAddress$Input](../type-aliases/setRecoveryEmailAddress$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState-1.md)\>

Promise<[PasswordState](../type-aliases/PasswordState.md)>

#### Defined in

dist/generated/types.d.ts:67610

***

### setSavedMessagesTagLabel()

> **setSavedMessagesTagLabel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes label of a Saved Messages tag; for Telegram Premium users only

#### Parameters

• **parameters**: [`setSavedMessagesTagLabel$DirectInput`](../type-aliases/setSavedMessagesTagLabel$DirectInput.md)

[setSavedMessagesTagLabel$Input](../type-aliases/setSavedMessagesTagLabel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68846

***

### setScopeNotificationSettings()

> **setScopeNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes notification settings for chats of a given type

#### Parameters

• **parameters**: [`setScopeNotificationSettings$DirectInput`](../type-aliases/setScopeNotificationSettings$DirectInput.md)

[setScopeNotificationSettings$Input](../type-aliases/setScopeNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69795

***

### setStickerEmojis()

> **setStickerEmojis**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the list of emojis corresponding to a sticker. The sticker must belong to a regular or custom emoji sticker set that is owned by the current user

#### Parameters

• **parameters**: [`setStickerEmojis$DirectInput`](../type-aliases/setStickerEmojis$DirectInput.md)

[setStickerEmojis$Input](../type-aliases/setStickerEmojis$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72386

***

### setStickerKeywords()

> **setStickerKeywords**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the list of keywords of a sticker. The sticker must belong to a regular or custom emoji sticker set that is owned by the current user

#### Parameters

• **parameters**: [`setStickerKeywords$DirectInput`](../type-aliases/setStickerKeywords$DirectInput.md)

[setStickerKeywords$Input](../type-aliases/setStickerKeywords$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72393

***

### setStickerMaskPosition()

> **setStickerMaskPosition**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the mask position of a mask sticker. The sticker must belong to a mask sticker set that is owned by the current user

#### Parameters

• **parameters**: [`setStickerMaskPosition$DirectInput`](../type-aliases/setStickerMaskPosition$DirectInput.md)

[setStickerMaskPosition$Input](../type-aliases/setStickerMaskPosition$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72400

***

### setStickerPositionInSet()

> **setStickerPositionInSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the position of a sticker in the set to which it belongs. The sticker set must be owned by the current user

#### Parameters

• **parameters**: [`setStickerPositionInSet$DirectInput`](../type-aliases/setStickerPositionInSet$DirectInput.md)

[setStickerPositionInSet$Input](../type-aliases/setStickerPositionInSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72372

***

### setStickerSetThumbnail()

> **setStickerSetThumbnail**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets a sticker set thumbnail

#### Parameters

• **parameters**: [`setStickerSetThumbnail$DirectInput`](../type-aliases/setStickerSetThumbnail$DirectInput.md)

[setStickerSetThumbnail$Input](../type-aliases/setStickerSetThumbnail$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72344

***

### setStickerSetTitle()

> **setStickerSetTitle**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets a sticker set title

#### Parameters

• **parameters**: [`setStickerSetTitle$DirectInput`](../type-aliases/setStickerSetTitle$DirectInput.md)

[setStickerSetTitle$Input](../type-aliases/setStickerSetTitle$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72358

***

### setStoryPrivacySettings()

> **setStoryPrivacySettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes privacy settings of a story. The method can be called only for stories posted on behalf of the current user and if story.can_be_edited == true

#### Parameters

• **parameters**: [`setStoryPrivacySettings$DirectInput`](../type-aliases/setStoryPrivacySettings$DirectInput.md)

[setStoryPrivacySettings$Input](../type-aliases/setStoryPrivacySettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69872

***

### setStoryReaction()

> **setStoryReaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes chosen reaction on a story that has already been sent

#### Parameters

• **parameters**: [`setStoryReaction$DirectInput`](../type-aliases/setStoryReaction$DirectInput.md)

[setStoryReaction$Input](../type-aliases/setStoryReaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69969

***

### setSupergroupCustomEmojiStickerSet()

> **setSupergroupCustomEmojiStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the custom emoji sticker set of a supergroup; requires can_change_info administrator right. The chat must have at least chatBoostFeatures.min_custom_emoji_sticker_set_boost_level boost level to pass the corresponding color

#### Parameters

• **parameters**: [`setSupergroupCustomEmojiStickerSet$DirectInput`](../type-aliases/setSupergroupCustomEmojiStickerSet$DirectInput.md)

[setSupergroupCustomEmojiStickerSet$Input](../type-aliases/setSupergroupCustomEmojiStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71573

***

### setSupergroupStickerSet()

> **setSupergroupStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the sticker set of a supergroup; requires can_change_info administrator right

#### Parameters

• **parameters**: [`setSupergroupStickerSet$DirectInput`](../type-aliases/setSupergroupStickerSet$DirectInput.md)

[setSupergroupStickerSet$Input](../type-aliases/setSupergroupStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71566

***

### setSupergroupUnrestrictBoostCount()

> **setSupergroupUnrestrictBoostCount**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the number of times the supergroup must be boosted by a user to ignore slow mode and chat permission restrictions; requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`setSupergroupUnrestrictBoostCount$DirectInput`](../type-aliases/setSupergroupUnrestrictBoostCount$DirectInput.md)

[setSupergroupUnrestrictBoostCount$Input](../type-aliases/setSupergroupUnrestrictBoostCount$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71580

***

### setSupergroupUsername()

> **setSupergroupUsername**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the editable username of a supergroup or channel, requires owner privileges in the supergroup or channel

#### Parameters

• **parameters**: [`setSupergroupUsername$DirectInput`](../type-aliases/setSupergroupUsername$DirectInput.md)

[setSupergroupUsername$Input](../type-aliases/setSupergroupUsername$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71536

***

### setTdlibParameters()

> **setTdlibParameters**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters

#### Parameters

• **parameters**: [`setTdlibParameters$DirectInput`](../type-aliases/setTdlibParameters$DirectInput.md)

[setTdlibParameters$Input](../type-aliases/setTdlibParameters$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:67400

***

### setUserPersonalProfilePhoto()

> **setUserPersonalProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes a personal profile photo of a contact user

#### Parameters

• **parameters**: [`setUserPersonalProfilePhoto$DirectInput`](../type-aliases/setUserPersonalProfilePhoto$DirectInput.md)

[setUserPersonalProfilePhoto$Input](../type-aliases/setUserPersonalProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70753

***

### setUserPrivacySettingRules()

> **setUserPrivacySettingRules**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes user privacy settings

#### Parameters

• **parameters**: [`setUserPrivacySettingRules$DirectInput`](../type-aliases/setUserPrivacySettingRules$DirectInput.md)

[setUserPrivacySettingRules$Input](../type-aliases/setUserPrivacySettingRules$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71906

***

### setUserSupportInfo()

> **setUserSupportInfo**(`parameters`): `Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo-1.md)\>

Sets support information for the given user; for Telegram support only

#### Parameters

• **parameters**: [`setUserSupportInfo$DirectInput`](../type-aliases/setUserSupportInfo$DirectInput.md)

[setUserSupportInfo$Input](../type-aliases/setUserSupportInfo$Input.md)

#### Returns

`Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo-1.md)\>

Promise<[UserSupportInfo](../type-aliases/UserSupportInfo.md)>

#### Defined in

dist/generated/types.d.ts:72757

***

### setUsername()

> **setUsername**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the editable username of the current user

#### Parameters

• **parameters**: [`setUsername$DirectInput`](../type-aliases/setUsername$DirectInput.md)

[setUsername$Input](../type-aliases/setUsername$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71123

***

### setVideoChatDefaultParticipant()

> **setVideoChatDefaultParticipant**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes default participant identifier, on whose behalf a video chat in the chat will be joined

#### Parameters

• **parameters**: [`setVideoChatDefaultParticipant$DirectInput`](../type-aliases/setVideoChatDefaultParticipant$DirectInput.md)

[setVideoChatDefaultParticipant$Input](../type-aliases/setVideoChatDefaultParticipant$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70457

***

### shareChatWithBot()

> **shareChatWithBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Shares a chat after pressing a keyboardButtonTypeRequestChat button with the bot

#### Parameters

• **parameters**: [`shareChatWithBot$DirectInput`](../type-aliases/shareChatWithBot$DirectInput.md)

[shareChatWithBot$Input](../type-aliases/shareChatWithBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69018

***

### sharePhoneNumber()

> **sharePhoneNumber**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Shares the phone number of the current user with a mutual contact. Supposed to be called when the user clicks on chatActionBarSharePhoneNumber

#### Parameters

• **parameters**: [`sharePhoneNumber$DirectInput`](../type-aliases/sharePhoneNumber$DirectInput.md)

[sharePhoneNumber$Input](../type-aliases/sharePhoneNumber$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70774

***

### shareUsersWithBot()

> **shareUsersWithBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Shares users after pressing a keyboardButtonTypeRequestUsers button with the bot

#### Parameters

• **parameters**: [`shareUsersWithBot$DirectInput`](../type-aliases/shareUsersWithBot$DirectInput.md)

[shareUsersWithBot$Input](../type-aliases/shareUsersWithBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69011

***

### startGroupCallRecording()

> **startGroupCallRecording**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Starts recording of an active group call. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`startGroupCallRecording$DirectInput`](../type-aliases/startGroupCallRecording$DirectInput.md)

[startGroupCallRecording$Input](../type-aliases/startGroupCallRecording$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70569

***

### startGroupCallScreenSharing()

> **startGroupCallScreenSharing**(`parameters`): `Promise`\<[`text`](../type-aliases/text-1.md)\>

Starts screen sharing in a joined group call. Returns join response payload for tgcalls

#### Parameters

• **parameters**: [`startGroupCallScreenSharing$DirectInput`](../type-aliases/startGroupCallScreenSharing$DirectInput.md)

[startGroupCallScreenSharing$Input](../type-aliases/startGroupCallScreenSharing$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text-1.md)\>

Promise<[Text](../type-aliases/Text.md)>

#### Defined in

dist/generated/types.d.ts:70513

***

### startScheduledGroupCall()

> **startScheduledGroupCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Starts a scheduled group call

#### Parameters

• **parameters**: [`startScheduledGroupCall$DirectInput`](../type-aliases/startScheduledGroupCall$DirectInput.md)

[startScheduledGroupCall$Input](../type-aliases/startScheduledGroupCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70492

***

### stopBusinessPoll()

> **stopBusinessPoll**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Stops a poll sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`stopBusinessPoll$DirectInput`](../type-aliases/stopBusinessPoll$DirectInput.md)

[stopBusinessPoll$Input](../type-aliases/stopBusinessPoll$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage-1.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage.md)>

#### Defined in

dist/generated/types.d.ts:68591

***

### stopPoll()

> **stopPoll**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Stops a poll. A poll in a message can be stopped when the message has can_be_edited flag is set

#### Parameters

• **parameters**: [`stopPoll$DirectInput`](../type-aliases/stopPoll$DirectInput.md)

[stopPoll$Input](../type-aliases/stopPoll$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68967

***

### suggestUserProfilePhoto()

> **suggestUserProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Suggests a profile photo to another regular user with common messages

#### Parameters

• **parameters**: [`suggestUserProfilePhoto$DirectInput`](../type-aliases/suggestUserProfilePhoto$DirectInput.md)

[suggestUserProfilePhoto$Input](../type-aliases/suggestUserProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70760

***

### synchronizeLanguagePack()

> **synchronizeLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Fetches the latest versions of all strings from a language pack in the current localization target from the server.

- This method doesn't need to be called explicitly for the current used/base language packs. Can be called before authorization

#### Parameters

• **parameters**: [`synchronizeLanguagePack$DirectInput`](../type-aliases/synchronizeLanguagePack$DirectInput.md)

[synchronizeLanguagePack$Input](../type-aliases/synchronizeLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71834

***

### terminateAllOtherSessions()

> **terminateAllOtherSessions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Terminates all other sessions of the current user

#### Parameters

• **parameters**: [`terminateAllOtherSessions$DirectInput`](../type-aliases/terminateAllOtherSessions$DirectInput.md)

[terminateAllOtherSessions$Input](../type-aliases/terminateAllOtherSessions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71480

***

### terminateSession()

> **terminateSession**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Terminates a session of the current user

#### Parameters

• **parameters**: [`terminateSession$DirectInput`](../type-aliases/terminateSession$DirectInput.md)

[terminateSession$Input](../type-aliases/terminateSession$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71473

***

### testCallBytes()

> **testCallBytes**(`parameters`): `Promise`\<[`testBytes`](../type-aliases/testBytes-1.md)\>

Returns the received bytes; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallBytes$DirectInput`](../type-aliases/testCallBytes$DirectInput.md)

[testCallBytes$Input](../type-aliases/testCallBytes$Input.md)

#### Returns

`Promise`\<[`testBytes`](../type-aliases/testBytes-1.md)\>

Promise<[TestBytes](../type-aliases/TestBytes.md)>

#### Defined in

dist/generated/types.d.ts:72785

***

### testCallEmpty()

> **testCallEmpty**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Does nothing; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallEmpty$DirectInput`](../type-aliases/testCallEmpty$DirectInput.md)

[testCallEmpty$Input](../type-aliases/testCallEmpty$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72771

***

### testCallString()

> **testCallString**(`parameters`): `Promise`\<[`testString`](../type-aliases/testString-1.md)\>

Returns the received string; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallString$DirectInput`](../type-aliases/testCallString$DirectInput.md)

[testCallString$Input](../type-aliases/testCallString$Input.md)

#### Returns

`Promise`\<[`testString`](../type-aliases/testString-1.md)\>

Promise<[TestString](../type-aliases/TestString.md)>

#### Defined in

dist/generated/types.d.ts:72778

***

### testCallVectorInt()

> **testCallVectorInt**(`parameters`): `Promise`\<[`testVectorInt`](../type-aliases/testVectorInt-1.md)\>

Returns the received vector of numbers; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorInt$DirectInput`](../type-aliases/testCallVectorInt$DirectInput.md)

[testCallVectorInt$Input](../type-aliases/testCallVectorInt$Input.md)

#### Returns

`Promise`\<[`testVectorInt`](../type-aliases/testVectorInt-1.md)\>

Promise<[TestVectorInt](../type-aliases/TestVectorInt.md)>

#### Defined in

dist/generated/types.d.ts:72792

***

### testCallVectorIntObject()

> **testCallVectorIntObject**(`parameters`): `Promise`\<[`testVectorIntObject`](../type-aliases/testVectorIntObject-1.md)\>

Returns the received vector of objects containing a number; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorIntObject$DirectInput`](../type-aliases/testCallVectorIntObject$DirectInput.md)

[testCallVectorIntObject$Input](../type-aliases/testCallVectorIntObject$Input.md)

#### Returns

`Promise`\<[`testVectorIntObject`](../type-aliases/testVectorIntObject-1.md)\>

Promise<[TestVectorIntObject](../type-aliases/TestVectorIntObject.md)>

#### Defined in

dist/generated/types.d.ts:72799

***

### testCallVectorString()

> **testCallVectorString**(`parameters`): `Promise`\<[`testVectorString`](../type-aliases/testVectorString-1.md)\>

Returns the received vector of strings; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorString$DirectInput`](../type-aliases/testCallVectorString$DirectInput.md)

[testCallVectorString$Input](../type-aliases/testCallVectorString$Input.md)

#### Returns

`Promise`\<[`testVectorString`](../type-aliases/testVectorString-1.md)\>

Promise<[TestVectorString](../type-aliases/TestVectorString.md)>

#### Defined in

dist/generated/types.d.ts:72806

***

### testCallVectorStringObject()

> **testCallVectorStringObject**(`parameters`): `Promise`\<[`testVectorStringObject`](../type-aliases/testVectorStringObject-1.md)\>

Returns the received vector of objects containing a string; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorStringObject$DirectInput`](../type-aliases/testCallVectorStringObject$DirectInput.md)

[testCallVectorStringObject$Input](../type-aliases/testCallVectorStringObject$Input.md)

#### Returns

`Promise`\<[`testVectorStringObject`](../type-aliases/testVectorStringObject-1.md)\>

Promise<[TestVectorStringObject](../type-aliases/TestVectorStringObject.md)>

#### Defined in

dist/generated/types.d.ts:72813

***

### testGetDifference()

> **testGetDifference**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Forces an updates.getDifference call to the Telegram servers; for testing only

#### Parameters

• **parameters**: [`testGetDifference$DirectInput`](../type-aliases/testGetDifference$DirectInput.md)

[testGetDifference$Input](../type-aliases/testGetDifference$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72841

***

### testNetwork()

> **testNetwork**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends a simple network request to the Telegram servers; for testing only. Can be called before authorization

#### Parameters

• **parameters**: [`testNetwork$DirectInput`](../type-aliases/testNetwork$DirectInput.md)

[testNetwork$Input](../type-aliases/testNetwork$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72827

***

### testProxy()

> **testProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Sends a simple network request to the Telegram servers via proxy; for testing only. Can be called before authorization

#### Parameters

• **parameters**: [`testProxy$DirectInput`](../type-aliases/testProxy$DirectInput.md)

[testProxy$Input](../type-aliases/testProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72834

***

### testReturnError()

> **testReturnError**(`parameters`): `Promise`\<[`error`](../type-aliases/error-1.md)\>

Returns the specified error and ensures that the Error object is used; for testing only. Can be called synchronously

#### Parameters

• **parameters**: [`testReturnError$DirectInput`](../type-aliases/testReturnError$DirectInput.md)

[testReturnError$Input](../type-aliases/testReturnError$Input.md)

#### Returns

`Promise`\<[`error`](../type-aliases/error-1.md)\>

Promise<[Error](../type-aliases/Error.md)>

#### Defined in

dist/generated/types.d.ts:72855

***

### testSquareInt()

> **testSquareInt**(`parameters`): `Promise`\<[`testInt`](../type-aliases/testInt-1.md)\>

Returns the squared received number; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testSquareInt$DirectInput`](../type-aliases/testSquareInt$DirectInput.md)

[testSquareInt$Input](../type-aliases/testSquareInt$Input.md)

#### Returns

`Promise`\<[`testInt`](../type-aliases/testInt-1.md)\>

Promise<[TestInt](../type-aliases/TestInt.md)>

#### Defined in

dist/generated/types.d.ts:72820

***

### testUseUpdate()

> **testUseUpdate**(`parameters`): `Promise`\<[`Update`](../type-aliases/Update.md)\>

Does nothing and ensures that the Update object is used; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testUseUpdate$DirectInput`](../type-aliases/testUseUpdate$DirectInput.md)

[testUseUpdate$Input](../type-aliases/testUseUpdate$Input.md)

#### Returns

`Promise`\<[`Update`](../type-aliases/Update.md)\>

Promise<[Update](../type-aliases/Update.md)>

#### Defined in

dist/generated/types.d.ts:72848

***

### toggleAllDownloadsArePaused()

> **toggleAllDownloadsArePaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes pause state of all files in the file download list

#### Parameters

• **parameters**: [`toggleAllDownloadsArePaused$DirectInput`](../type-aliases/toggleAllDownloadsArePaused$DirectInput.md)

[toggleAllDownloadsArePaused$Input](../type-aliases/toggleAllDownloadsArePaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70238

***

### toggleBotIsAddedToAttachmentMenu()

> **toggleBotIsAddedToAttachmentMenu**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Adds or removes a bot to attachment and side menu. Bot can be added to the menu, only if userTypeBot.can_be_added_to_attachment_menu == true

#### Parameters

• **parameters**: [`toggleBotIsAddedToAttachmentMenu$DirectInput`](../type-aliases/toggleBotIsAddedToAttachmentMenu$DirectInput.md)

[toggleBotIsAddedToAttachmentMenu$Input](../type-aliases/toggleBotIsAddedToAttachmentMenu$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70085

***

### toggleBotUsernameIsActive()

> **toggleBotUsernameIsActive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes active state for a username of a bot. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`toggleBotUsernameIsActive$DirectInput`](../type-aliases/toggleBotUsernameIsActive$DirectInput.md)

[toggleBotUsernameIsActive$Input](../type-aliases/toggleBotUsernameIsActive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71424

***

### toggleBusinessConnectedBotChatIsPaused()

> **toggleBusinessConnectedBotChatIsPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Pauses or resumes the connected business bot in a specific chat

#### Parameters

• **parameters**: [`toggleBusinessConnectedBotChatIsPaused$DirectInput`](../type-aliases/toggleBusinessConnectedBotChatIsPaused$DirectInput.md)

[toggleBusinessConnectedBotChatIsPaused$Input](../type-aliases/toggleBusinessConnectedBotChatIsPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71270

***

### toggleChatDefaultDisableNotification()

> **toggleChatDefaultDisableNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the value of the default disable_notification parameter, used when a message is sent to a chat

#### Parameters

• **parameters**: [`toggleChatDefaultDisableNotification$DirectInput`](../type-aliases/toggleChatDefaultDisableNotification$DirectInput.md)

[toggleChatDefaultDisableNotification$Input](../type-aliases/toggleChatDefaultDisableNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69586

***

### toggleChatFolderTags()

> **toggleChatFolderTags**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether chat folder tags are enabled

#### Parameters

• **parameters**: [`toggleChatFolderTags$DirectInput`](../type-aliases/toggleChatFolderTags$DirectInput.md)

[toggleChatFolderTags$Input](../type-aliases/toggleChatFolderTags$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69374

***

### toggleChatHasProtectedContent()

> **toggleChatHasProtectedContent**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the ability of users to save, forward, or copy chat content. Supported only for basic groups, supergroups and channels. Requires owner privileges

#### Parameters

• **parameters**: [`toggleChatHasProtectedContent$DirectInput`](../type-aliases/toggleChatHasProtectedContent$DirectInput.md)

[toggleChatHasProtectedContent$Input](../type-aliases/toggleChatHasProtectedContent$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69558

***

### toggleChatIsMarkedAsUnread()

> **toggleChatIsMarkedAsUnread**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the marked as unread state of a chat

#### Parameters

• **parameters**: [`toggleChatIsMarkedAsUnread$DirectInput`](../type-aliases/toggleChatIsMarkedAsUnread$DirectInput.md)

[toggleChatIsMarkedAsUnread$Input](../type-aliases/toggleChatIsMarkedAsUnread$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69579

***

### toggleChatIsPinned()

> **toggleChatIsPinned**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the pinned state of a chat. There can be up to getOption("pinned_chat_count_max")/getOption("pinned_archived_chat_count_max") pinned non-secret chats and the same number of secret chats in the main/archive chat list. The limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`toggleChatIsPinned$DirectInput`](../type-aliases/toggleChatIsPinned$DirectInput.md)

[toggleChatIsPinned$Input](../type-aliases/toggleChatIsPinned$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69816

***

### toggleChatIsTranslatable()

> **toggleChatIsTranslatable**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the translatable state of a chat

#### Parameters

• **parameters**: [`toggleChatIsTranslatable$DirectInput`](../type-aliases/toggleChatIsTranslatable$DirectInput.md)

[toggleChatIsTranslatable$Input](../type-aliases/toggleChatIsTranslatable$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69572

***

### toggleChatViewAsTopics()

> **toggleChatViewAsTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the view_as_topics setting of a forum chat or Saved Messages

#### Parameters

• **parameters**: [`toggleChatViewAsTopics$DirectInput`](../type-aliases/toggleChatViewAsTopics$DirectInput.md)

[toggleChatViewAsTopics$Input](../type-aliases/toggleChatViewAsTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69565

***

### toggleDownloadIsPaused()

> **toggleDownloadIsPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes pause state of a file in the file download list

#### Parameters

• **parameters**: [`toggleDownloadIsPaused$DirectInput`](../type-aliases/toggleDownloadIsPaused$DirectInput.md)

[toggleDownloadIsPaused$Input](../type-aliases/toggleDownloadIsPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70231

***

### toggleForumTopicIsClosed()

> **toggleForumTopicIsClosed**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether a topic is closed in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic

#### Parameters

• **parameters**: [`toggleForumTopicIsClosed$DirectInput`](../type-aliases/toggleForumTopicIsClosed$DirectInput.md)

[toggleForumTopicIsClosed$Input](../type-aliases/toggleForumTopicIsClosed$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68741

***

### toggleForumTopicIsPinned()

> **toggleForumTopicIsPinned**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the pinned state of a forum topic; requires can_manage_topics right in the supergroup. There can be up to getOption("pinned_forum_topic_count_max") pinned forum topics

#### Parameters

• **parameters**: [`toggleForumTopicIsPinned$DirectInput`](../type-aliases/toggleForumTopicIsPinned$DirectInput.md)

[toggleForumTopicIsPinned$Input](../type-aliases/toggleForumTopicIsPinned$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68755

***

### toggleGeneralForumTopicIsHidden()

> **toggleGeneralForumTopicIsHidden**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether a General topic is hidden in a forum supergroup chat; requires can_manage_topics right in the supergroup

#### Parameters

• **parameters**: [`toggleGeneralForumTopicIsHidden$DirectInput`](../type-aliases/toggleGeneralForumTopicIsHidden$DirectInput.md)

[toggleGeneralForumTopicIsHidden$Input](../type-aliases/toggleGeneralForumTopicIsHidden$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68748

***

### toggleGroupCallEnabledStartNotification()

> **toggleGroupCallEnabledStartNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether the current user will receive a notification when the group call starts; scheduled group calls only

#### Parameters

• **parameters**: [`toggleGroupCallEnabledStartNotification$DirectInput`](../type-aliases/toggleGroupCallEnabledStartNotification$DirectInput.md)

[toggleGroupCallEnabledStartNotification$Input](../type-aliases/toggleGroupCallEnabledStartNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70499

***

### toggleGroupCallIsMyVideoEnabled()

> **toggleGroupCallIsMyVideoEnabled**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether current user's video is enabled

#### Parameters

• **parameters**: [`toggleGroupCallIsMyVideoEnabled$DirectInput`](../type-aliases/toggleGroupCallIsMyVideoEnabled$DirectInput.md)

[toggleGroupCallIsMyVideoEnabled$Input](../type-aliases/toggleGroupCallIsMyVideoEnabled$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70590

***

### toggleGroupCallIsMyVideoPaused()

> **toggleGroupCallIsMyVideoPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether current user's video is paused

#### Parameters

• **parameters**: [`toggleGroupCallIsMyVideoPaused$DirectInput`](../type-aliases/toggleGroupCallIsMyVideoPaused$DirectInput.md)

[toggleGroupCallIsMyVideoPaused$Input](../type-aliases/toggleGroupCallIsMyVideoPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70583

***

### toggleGroupCallMuteNewParticipants()

> **toggleGroupCallMuteNewParticipants**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether new participants of a group call can be unmuted only by administrators of the group call. Requires groupCall.can_toggle_mute_new_participants group call flag

#### Parameters

• **parameters**: [`toggleGroupCallMuteNewParticipants$DirectInput`](../type-aliases/toggleGroupCallMuteNewParticipants$DirectInput.md)

[toggleGroupCallMuteNewParticipants$Input](../type-aliases/toggleGroupCallMuteNewParticipants$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70541

***

### toggleGroupCallParticipantIsHandRaised()

> **toggleGroupCallParticipantIsHandRaised**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether a group call participant hand is rased

#### Parameters

• **parameters**: [`toggleGroupCallParticipantIsHandRaised$DirectInput`](../type-aliases/toggleGroupCallParticipantIsHandRaised$DirectInput.md)

[toggleGroupCallParticipantIsHandRaised$Input](../type-aliases/toggleGroupCallParticipantIsHandRaised$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70618

***

### toggleGroupCallParticipantIsMuted()

> **toggleGroupCallParticipantIsMuted**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether a participant of an active group call is muted, unmuted, or allowed to unmute themselves

#### Parameters

• **parameters**: [`toggleGroupCallParticipantIsMuted$DirectInput`](../type-aliases/toggleGroupCallParticipantIsMuted$DirectInput.md)

[toggleGroupCallParticipantIsMuted$Input](../type-aliases/toggleGroupCallParticipantIsMuted$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70604

***

### toggleGroupCallScreenSharingIsPaused()

> **toggleGroupCallScreenSharingIsPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Pauses or unpauses screen sharing in a joined group call

#### Parameters

• **parameters**: [`toggleGroupCallScreenSharingIsPaused$DirectInput`](../type-aliases/toggleGroupCallScreenSharingIsPaused$DirectInput.md)

[toggleGroupCallScreenSharingIsPaused$Input](../type-aliases/toggleGroupCallScreenSharingIsPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70520

***

### toggleHasSponsoredMessagesEnabled()

> **toggleHasSponsoredMessagesEnabled**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether the current user has sponsored messages enabled. The setting has no effect for users without Telegram Premium for which sponsored messages are always enabled

#### Parameters

• **parameters**: [`toggleHasSponsoredMessagesEnabled$DirectInput`](../type-aliases/toggleHasSponsoredMessagesEnabled$DirectInput.md)

[toggleHasSponsoredMessagesEnabled$Input](../type-aliases/toggleHasSponsoredMessagesEnabled$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71172

***

### toggleSavedMessagesTopicIsPinned()

> **toggleSavedMessagesTopicIsPinned**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the pinned state of a Saved Messages topic. There can be up to getOption("pinned_saved_messages_topic_count_max") pinned topics. The limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`toggleSavedMessagesTopicIsPinned$DirectInput`](../type-aliases/toggleSavedMessagesTopicIsPinned$DirectInput.md)

[toggleSavedMessagesTopicIsPinned$Input](../type-aliases/toggleSavedMessagesTopicIsPinned$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:68042

***

### toggleSessionCanAcceptCalls()

> **toggleSessionCanAcceptCalls**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether a session can accept incoming calls

#### Parameters

• **parameters**: [`toggleSessionCanAcceptCalls$DirectInput`](../type-aliases/toggleSessionCanAcceptCalls$DirectInput.md)

[toggleSessionCanAcceptCalls$Input](../type-aliases/toggleSessionCanAcceptCalls$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71494

***

### toggleSessionCanAcceptSecretChats()

> **toggleSessionCanAcceptSecretChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether a session can accept incoming secret chats

#### Parameters

• **parameters**: [`toggleSessionCanAcceptSecretChats$DirectInput`](../type-aliases/toggleSessionCanAcceptSecretChats$DirectInput.md)

[toggleSessionCanAcceptSecretChats$Input](../type-aliases/toggleSessionCanAcceptSecretChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71501

***

### toggleStoryIsPostedToChatPage()

> **toggleStoryIsPostedToChatPage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether a story is accessible after expiration. Can be called only if story.can_toggle_is_posted_to_chat_page == true

#### Parameters

• **parameters**: [`toggleStoryIsPostedToChatPage$DirectInput`](../type-aliases/toggleStoryIsPostedToChatPage$DirectInput.md)

[toggleStoryIsPostedToChatPage$Input](../type-aliases/toggleStoryIsPostedToChatPage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69879

***

### toggleSupergroupCanHaveSponsoredMessages()

> **toggleSupergroupCanHaveSponsoredMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether sponsored messages are shown in the channel chat; requires owner privileges in the channel. The chat must have at least chatBoostFeatures.min_sponsored_message_disable_boost_level boost level to disable sponsored messages

#### Parameters

• **parameters**: [`toggleSupergroupCanHaveSponsoredMessages$DirectInput`](../type-aliases/toggleSupergroupCanHaveSponsoredMessages$DirectInput.md)

[toggleSupergroupCanHaveSponsoredMessages$Input](../type-aliases/toggleSupergroupCanHaveSponsoredMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71615

***

### toggleSupergroupHasAggressiveAntiSpamEnabled()

> **toggleSupergroupHasAggressiveAntiSpamEnabled**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether aggressive anti-spam checks are enabled in the supergroup. Can be called only if supergroupFullInfo.can_toggle_aggressive_anti_spam == true

#### Parameters

• **parameters**: [`toggleSupergroupHasAggressiveAntiSpamEnabled$DirectInput`](../type-aliases/toggleSupergroupHasAggressiveAntiSpamEnabled$DirectInput.md)

[toggleSupergroupHasAggressiveAntiSpamEnabled$Input](../type-aliases/toggleSupergroupHasAggressiveAntiSpamEnabled$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71629

***

### toggleSupergroupHasHiddenMembers()

> **toggleSupergroupHasHiddenMembers**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether non-administrators can receive only administrators and bots using getSupergroupMembers or searchChatMembers. Can be called only if supergroupFullInfo.can_hide_members == true

#### Parameters

• **parameters**: [`toggleSupergroupHasHiddenMembers$DirectInput`](../type-aliases/toggleSupergroupHasHiddenMembers$DirectInput.md)

[toggleSupergroupHasHiddenMembers$Input](../type-aliases/toggleSupergroupHasHiddenMembers$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71622

***

### toggleSupergroupIsAllHistoryAvailable()

> **toggleSupergroupIsAllHistoryAvailable**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether the message history of a supergroup is available to new members; requires can_change_info member right

#### Parameters

• **parameters**: [`toggleSupergroupIsAllHistoryAvailable$DirectInput`](../type-aliases/toggleSupergroupIsAllHistoryAvailable$DirectInput.md)

[toggleSupergroupIsAllHistoryAvailable$Input](../type-aliases/toggleSupergroupIsAllHistoryAvailable$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71608

***

### toggleSupergroupIsBroadcastGroup()

> **toggleSupergroupIsBroadcastGroup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Upgrades supergroup to a broadcast group; requires owner privileges in the supergroup

#### Parameters

• **parameters**: [`toggleSupergroupIsBroadcastGroup$DirectInput`](../type-aliases/toggleSupergroupIsBroadcastGroup$DirectInput.md)

[toggleSupergroupIsBroadcastGroup$Input](../type-aliases/toggleSupergroupIsBroadcastGroup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71643

***

### toggleSupergroupIsForum()

> **toggleSupergroupIsForum**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether the supergroup is a forum; requires owner privileges in the supergroup. Discussion supergroups can't be converted to forums

#### Parameters

• **parameters**: [`toggleSupergroupIsForum$DirectInput`](../type-aliases/toggleSupergroupIsForum$DirectInput.md)

[toggleSupergroupIsForum$Input](../type-aliases/toggleSupergroupIsForum$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71636

***

### toggleSupergroupJoinByRequest()

> **toggleSupergroupJoinByRequest**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether all users directly joining the supergroup need to be approved by supergroup administrators; requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`toggleSupergroupJoinByRequest$DirectInput`](../type-aliases/toggleSupergroupJoinByRequest$DirectInput.md)

[toggleSupergroupJoinByRequest$Input](../type-aliases/toggleSupergroupJoinByRequest$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71601

***

### toggleSupergroupJoinToSendMessages()

> **toggleSupergroupJoinToSendMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether joining is mandatory to send messages to a discussion supergroup; requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`toggleSupergroupJoinToSendMessages$DirectInput`](../type-aliases/toggleSupergroupJoinToSendMessages$DirectInput.md)

[toggleSupergroupJoinToSendMessages$Input](../type-aliases/toggleSupergroupJoinToSendMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71594

***

### toggleSupergroupSignMessages()

> **toggleSupergroupSignMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Toggles whether sender signature is added to sent messages in a channel; requires can_change_info member right

#### Parameters

• **parameters**: [`toggleSupergroupSignMessages$DirectInput`](../type-aliases/toggleSupergroupSignMessages$DirectInput.md)

[toggleSupergroupSignMessages$Input](../type-aliases/toggleSupergroupSignMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71587

***

### toggleSupergroupUsernameIsActive()

> **toggleSupergroupUsernameIsActive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes active state for a username of a supergroup or channel, requires owner privileges in the supergroup or channel. The editable username can't be disabled.

- May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached

#### Parameters

• **parameters**: [`toggleSupergroupUsernameIsActive$DirectInput`](../type-aliases/toggleSupergroupUsernameIsActive$DirectInput.md)

[toggleSupergroupUsernameIsActive$Input](../type-aliases/toggleSupergroupUsernameIsActive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71545

***

### toggleUsernameIsActive()

> **toggleUsernameIsActive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes active state for a username of the current user. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached

#### Parameters

• **parameters**: [`toggleUsernameIsActive$DirectInput`](../type-aliases/toggleUsernameIsActive$DirectInput.md)

[toggleUsernameIsActive$Input](../type-aliases/toggleUsernameIsActive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:71130

***

### transferChatOwnership()

> **transferChatOwnership**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Changes the owner of a chat; requires owner privileges in the chat. Use the method canTransferOwnership to check whether the ownership can be transferred from the current session. Available only for supergroups and channel chats

#### Parameters

• **parameters**: [`transferChatOwnership$DirectInput`](../type-aliases/transferChatOwnership$DirectInput.md)

[transferChatOwnership$Input](../type-aliases/transferChatOwnership$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69718

***

### translateMessageText()

> **translateMessageText**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Extracts text or caption of the given message and translates it to the given language. If the current user is a Telegram Premium user, then text formatting is preserved

#### Parameters

• **parameters**: [`translateMessageText$DirectInput`](../type-aliases/translateMessageText$DirectInput.md)

[translateMessageText$Input](../type-aliases/translateMessageText$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Promise<[FormattedText](../type-aliases/FormattedText.md)>

#### Defined in

dist/generated/types.d.ts:68326

***

### translateText()

> **translateText**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Translates a text to the given language. If the current user is a Telegram Premium user, then text formatting is preserved

#### Parameters

• **parameters**: [`translateText$DirectInput`](../type-aliases/translateText$DirectInput.md)

[translateText$Input](../type-aliases/translateText$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText-1.md)\>

Promise<[FormattedText](../type-aliases/FormattedText.md)>

#### Defined in

dist/generated/types.d.ts:68319

***

### unpinAllChatMessages()

> **unpinAllChatMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes all pinned messages from a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel

#### Parameters

• **parameters**: [`unpinAllChatMessages$DirectInput`](../type-aliases/unpinAllChatMessages$DirectInput.md)

[unpinAllChatMessages$Input](../type-aliases/unpinAllChatMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69649

***

### unpinAllMessageThreadMessages()

> **unpinAllMessageThreadMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes all pinned messages from a forum topic; requires can_pin_messages member right in the supergroup

#### Parameters

• **parameters**: [`unpinAllMessageThreadMessages$DirectInput`](../type-aliases/unpinAllMessageThreadMessages$DirectInput.md)

[unpinAllMessageThreadMessages$Input](../type-aliases/unpinAllMessageThreadMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69656

***

### unpinChatMessage()

> **unpinChatMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Removes a pinned message from a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel

#### Parameters

• **parameters**: [`unpinChatMessage$DirectInput`](../type-aliases/unpinChatMessage$DirectInput.md)

[unpinChatMessage$Input](../type-aliases/unpinChatMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69642

***

### upgradeBasicGroupChatToSupergroupChat()

> **upgradeBasicGroupChatToSupergroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo and messageChatUpgradeFrom; requires owner privileges. Deactivates the original basic group

#### Parameters

• **parameters**: [`upgradeBasicGroupChatToSupergroupChat$DirectInput`](../type-aliases/upgradeBasicGroupChatToSupergroupChat$DirectInput.md)

[upgradeBasicGroupChatToSupergroupChat$Input](../type-aliases/upgradeBasicGroupChatToSupergroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat-1.md)\>

Promise<[Chat](../type-aliases/Chat.md)>

#### Defined in

dist/generated/types.d.ts:69304

***

### uploadStickerFile()

> **uploadStickerFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file-1.md)\>

Uploads a file with a sticker; returns the uploaded file

#### Parameters

• **parameters**: [`uploadStickerFile$DirectInput`](../type-aliases/uploadStickerFile$DirectInput.md)

[uploadStickerFile$Input](../type-aliases/uploadStickerFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file-1.md)\>

Promise<[File](../type-aliases/File.md)>

#### Defined in

dist/generated/types.d.ts:72302

***

### validateOrderInfo()

> **validateOrderInfo**(`parameters`): `Promise`\<[`validatedOrderInfo`](../type-aliases/validatedOrderInfo-1.md)\>

Validates the order information provided by a user and returns the available shipping options for a flexible invoice

#### Parameters

• **parameters**: [`validateOrderInfo$DirectInput`](../type-aliases/validateOrderInfo$DirectInput.md)

[validateOrderInfo$Input](../type-aliases/validateOrderInfo$Input.md)

#### Returns

`Promise`\<[`validatedOrderInfo`](../type-aliases/validatedOrderInfo-1.md)\>

Promise<[ValidatedOrderInfo](../type-aliases/ValidatedOrderInfo.md)>

#### Defined in

dist/generated/types.d.ts:71699

***

### viewMessages()

> **viewMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that messages are being viewed by the user. Sponsored messages must be marked as viewed only when the entire text of the message is shown on the screen (excluding the button).

- Many useful activities depend on whether the messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view counter, removing deleted messages in supergroups and channels)

#### Parameters

• **parameters**: [`viewMessages$DirectInput`](../type-aliases/viewMessages$DirectInput.md)

[viewMessages$Input](../type-aliases/viewMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:69176

***

### viewPremiumFeature()

> **viewPremiumFeature**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs TDLib that the user viewed detailed information about a Premium feature on the Premium features screen

#### Parameters

• **parameters**: [`viewPremiumFeature$DirectInput`](../type-aliases/viewPremiumFeature$DirectInput.md)

[viewPremiumFeature$Input](../type-aliases/viewPremiumFeature$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:72442

***

### viewTrendingStickerSets()

> **viewTrendingStickerSets**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Informs the server that some trending sticker sets have been viewed by the user

#### Parameters

• **parameters**: [`viewTrendingStickerSets$DirectInput`](../type-aliases/viewTrendingStickerSets$DirectInput.md)

[viewTrendingStickerSets$Input](../type-aliases/viewTrendingStickerSets$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70886

***

### writeGeneratedFilePart()

> **writeGeneratedFilePart**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Writes a part of a generated file. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct write to the destination file

#### Parameters

• **parameters**: [`writeGeneratedFilePart$DirectInput`](../type-aliases/writeGeneratedFilePart$DirectInput.md)

[writeGeneratedFilePart$Input](../type-aliases/writeGeneratedFilePart$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok-1.md)\>

Promise<[Ok](../type-aliases/Ok.md)>

#### Defined in

dist/generated/types.d.ts:70187
