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

dist/generated/types.d.ts:69234

## Properties

### client

> `private` `readonly` **client**: `any`

#### Defined in

dist/generated/types.d.ts:69228

## Methods

### acceptCall()

> **acceptCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Accepts an incoming call

#### Parameters

• **parameters**: [`acceptCall$DirectInput`](../type-aliases/acceptCall$DirectInput.md)

[acceptCall$Input](../type-aliases/acceptCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72326

***

### acceptTermsOfService()

> **acceptTermsOfService**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Accepts Telegram terms of services

#### Parameters

• **parameters**: [`acceptTermsOfService$DirectInput`](../type-aliases/acceptTermsOfService$DirectInput.md)

[acceptTermsOfService$Input](../type-aliases/acceptTermsOfService$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74528

***

### activateStoryStealthMode()

> **activateStoryStealthMode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Activates stealth mode for stories, which hides all views of stories from the current user in the last "story_stealth_mode_past_period" seconds

- and for the next "story_stealth_mode_future_period" seconds; for Telegram Premium users only

#### Parameters

• **parameters**: [`activateStoryStealthMode$DirectInput`](../type-aliases/activateStoryStealthMode$DirectInput.md)

[activateStoryStealthMode$Input](../type-aliases/activateStoryStealthMode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71899

***

### addBotMediaPreview()

> **addBotMediaPreview**(`parameters`): `Promise`\<[`botMediaPreview`](../type-aliases/botMediaPreview.md)\>

Adds a new media preview to the beginning of the list of media previews of a bot. Returns the added preview after addition is completed server-side. The total number of previews must not exceed getOption("bot_media_preview_count_max") for the given language

#### Parameters

• **parameters**: [`addBotMediaPreview$DirectInput`](../type-aliases/addBotMediaPreview$DirectInput.md)

[addBotMediaPreview$Input](../type-aliases/addBotMediaPreview$Input.md)

#### Returns

`Promise`\<[`botMediaPreview`](../type-aliases/botMediaPreview.md)\>

Promise<[BotMediaPreview](../type-aliases/BotMediaPreview-1.md)>

#### Defined in

dist/generated/types.d.ts:73335

***

### addChatFolderByInviteLink()

> **addChatFolderByInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a chat folder by an invite link

#### Parameters

• **parameters**: [`addChatFolderByInviteLink$DirectInput`](../type-aliases/addChatFolderByInviteLink$DirectInput.md)

[addChatFolderByInviteLink$Input](../type-aliases/addChatFolderByInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71323

***

### addChatMember()

> **addChatMember**(`parameters`): `Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers.md)\>

Adds a new member to a chat; requires can_invite_users member right. Members can't be added to private or secret chats. Returns information about members that weren't added

#### Parameters

• **parameters**: [`addChatMember$DirectInput`](../type-aliases/addChatMember$DirectInput.md)

[addChatMember$Input](../type-aliases/addChatMember$Input.md)

#### Returns

`Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers.md)\>

Promise<[FailedToAddMembers](../type-aliases/FailedToAddMembers-1.md)>

#### Defined in

dist/generated/types.d.ts:71563

***

### addChatMembers()

> **addChatMembers**(`parameters`): `Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers.md)\>

Adds multiple new members to a chat; requires can_invite_users member right. Currently, this method is only available for supergroups and channels.

- This method can't be used to join a chat. Members can't be added to a channel if it has more than 200 members. Returns information about members that weren't added

#### Parameters

• **parameters**: [`addChatMembers$DirectInput`](../type-aliases/addChatMembers$DirectInput.md)

[addChatMembers$Input](../type-aliases/addChatMembers$Input.md)

#### Returns

`Promise`\<[`failedToAddMembers`](../type-aliases/failedToAddMembers.md)\>

Promise<[FailedToAddMembers](../type-aliases/FailedToAddMembers-1.md)>

#### Defined in

dist/generated/types.d.ts:71572

***

### addChatToList()

> **addChatToList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a chat to a chat list. A chat can't be simultaneously in Main and Archive chat lists, so it is automatically removed from another one if needed

#### Parameters

• **parameters**: [`addChatToList$DirectInput`](../type-aliases/addChatToList$DirectInput.md)

[addChatToList$Input](../type-aliases/addChatToList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71204

***

### addContact()

> **addContact**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a user to the contact list or edits an existing contact by their user identifier

#### Parameters

• **parameters**: [`addContact$DirectInput`](../type-aliases/addContact$DirectInput.md)

[addContact$Input](../type-aliases/addContact$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72599

***

### addCustomServerLanguagePack()

> **addCustomServerLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a custom server language pack to the list of installed language packs in current localization target. Can be called before authorization

#### Parameters

• **parameters**: [`addCustomServerLanguagePack$DirectInput`](../type-aliases/addCustomServerLanguagePack$DirectInput.md)

[addCustomServerLanguagePack$Input](../type-aliases/addCustomServerLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73801

***

### addFavoriteSticker()

> **addFavoriteSticker**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a new sticker to the list of favorite stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first.

- Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to favorite stickers

#### Parameters

• **parameters**: [`addFavoriteSticker$DirectInput`](../type-aliases/addFavoriteSticker$DirectInput.md)

[addFavoriteSticker$Input](../type-aliases/addFavoriteSticker$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72857

***

### addFileToDownloads()

> **addFileToDownloads**(`parameters`): `Promise`\<[`file`](../type-aliases/file.md)\>

Adds a file from a message to the list of file downloads. Download progress and completion of the download will be notified through updateFile updates.

- If message database is used, the list of file downloads is persistent across application restarts. The downloading is independent of download using downloadFile, i.e. it continues if downloadFile is canceled or is used to download a part of the file

#### Parameters

• **parameters**: [`addFileToDownloads$DirectInput`](../type-aliases/addFileToDownloads$DirectInput.md)

[addFileToDownloads$Input](../type-aliases/addFileToDownloads$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file.md)\>

Promise<[File](../type-aliases/File-1.md)>

#### Defined in

dist/generated/types.d.ts:72124

***

### addLocalMessage()

> **addLocalMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Adds a local message to a chat. The message is persistent across application restarts only if the message database is used. Returns the added message

#### Parameters

• **parameters**: [`addLocalMessage$DirectInput`](../type-aliases/addLocalMessage$DirectInput.md)

[addLocalMessage$Input](../type-aliases/addLocalMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70266

***

### addLogMessage()

> **addLogMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a message to TDLib internal log. Can be called synchronously

#### Parameters

• **parameters**: [`addLogMessage$DirectInput`](../type-aliases/addLogMessage$DirectInput.md)

[addLogMessage$Input](../type-aliases/addLogMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74731

***

### addMessageReaction()

> **addMessageReaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a reaction or a tag to a message. Use getMessageAvailableReactions to receive the list of available reactions for the message

#### Parameters

• **parameters**: [`addMessageReaction$DirectInput`](../type-aliases/addMessageReaction$DirectInput.md)

[addMessageReaction$Input](../type-aliases/addMessageReaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70655

***

### addNetworkStatistics()

> **addNetworkStatistics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds the specified data to data usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`addNetworkStatistics$DirectInput`](../type-aliases/addNetworkStatistics$DirectInput.md)

[addNetworkStatistics$Input](../type-aliases/addNetworkStatistics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74115

***

### addPaidMessageReaction()

> **addPaidMessageReaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds the paid message reaction to a message. Use getMessageAvailableReactions to receive the list of available reactions for the message

#### Parameters

• **parameters**: [`addPaidMessageReaction$DirectInput`](../type-aliases/addPaidMessageReaction$DirectInput.md)

[addPaidMessageReaction$Input](../type-aliases/addPaidMessageReaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70669

***

### addProxy()

> **addProxy**(`parameters`): `Promise`\<[`proxy`](../type-aliases/proxy.md)\>

Adds a proxy server for network requests. Can be called before authorization

#### Parameters

• **parameters**: [`addProxy$DirectInput`](../type-aliases/addProxy$DirectInput.md)

[addProxy$Input](../type-aliases/addProxy$Input.md)

#### Returns

`Promise`\<[`proxy`](../type-aliases/proxy.md)\>

Promise<[Proxy](../type-aliases/Proxy-1.md)>

#### Defined in

dist/generated/types.d.ts:74626

***

### addQuickReplyShortcutInlineQueryResultMessage()

> **addQuickReplyShortcutInlineQueryResultMessage**(`parameters`): `Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage.md)\>

Adds a message to a quick reply shortcut via inline bot. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created.

- The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message

#### Parameters

• **parameters**: [`addQuickReplyShortcutInlineQueryResultMessage$DirectInput`](../type-aliases/addQuickReplyShortcutInlineQueryResultMessage$DirectInput.md)

[addQuickReplyShortcutInlineQueryResultMessage$Input](../type-aliases/addQuickReplyShortcutInlineQueryResultMessage$Input.md)

#### Returns

`Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage.md)\>

Promise<[QuickReplyMessage](../type-aliases/QuickReplyMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70509

***

### addQuickReplyShortcutMessage()

> **addQuickReplyShortcutMessage**(`parameters`): `Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage.md)\>

Adds a message to a quick reply shortcut. If shortcut doesn't exist and there are less than getOption("quick_reply_shortcut_count_max") shortcuts, then a new shortcut is created.

- The shortcut must not contain more than getOption("quick_reply_shortcut_message_count_max") messages after adding the new message. Returns the added message

#### Parameters

• **parameters**: [`addQuickReplyShortcutMessage$DirectInput`](../type-aliases/addQuickReplyShortcutMessage$DirectInput.md)

[addQuickReplyShortcutMessage$Input](../type-aliases/addQuickReplyShortcutMessage$Input.md)

#### Returns

`Promise`\<[`quickReplyMessage`](../type-aliases/quickReplyMessage.md)\>

Promise<[QuickReplyMessage](../type-aliases/QuickReplyMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70500

***

### addQuickReplyShortcutMessageAlbum()

> **addQuickReplyShortcutMessageAlbum**(`parameters`): `Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages.md)\>

Adds 2-10 messages grouped together into an album to a quick reply shortcut. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

#### Parameters

• **parameters**: [`addQuickReplyShortcutMessageAlbum$DirectInput`](../type-aliases/addQuickReplyShortcutMessageAlbum$DirectInput.md)

[addQuickReplyShortcutMessageAlbum$Input](../type-aliases/addQuickReplyShortcutMessageAlbum$Input.md)

#### Returns

`Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages.md)\>

Promise<[QuickReplyMessages](../type-aliases/QuickReplyMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:70518

***

### addRecentlyFoundChat()

> **addRecentlyFoundChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a chat to the list of recently found chats. The chat is added to the beginning of the list. If the chat is already in the list, it will be removed from the list first

#### Parameters

• **parameters**: [`addRecentlyFoundChat$DirectInput`](../type-aliases/addRecentlyFoundChat$DirectInput.md)

[addRecentlyFoundChat$Input](../type-aliases/addRecentlyFoundChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69792

***

### addRecentSticker()

> **addRecentSticker**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Manually adds a new sticker to the list of recently used stickers. The new sticker is added to the top of the list. If the sticker was already in the list, it is removed from the list first.

- Only stickers belonging to a sticker set or in WEBP or WEBM format can be added to this list. Emoji stickers can't be added to recent stickers

#### Parameters

• **parameters**: [`addRecentSticker$DirectInput`](../type-aliases/addRecentSticker$DirectInput.md)

[addRecentSticker$Input](../type-aliases/addRecentSticker$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72827

***

### addSavedAnimation()

> **addSavedAnimation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Manually adds a new animation to the list of saved animations. The new animation is added to the beginning of the list. If the animation was already in the list, it is removed first.

- Only non-secret video animations with MIME type "video/mp4" can be added to the list

#### Parameters

• **parameters**: [`addSavedAnimation$DirectInput`](../type-aliases/addSavedAnimation$DirectInput.md)

[addSavedAnimation$Input](../type-aliases/addSavedAnimation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72950

***

### addSavedNotificationSound()

> **addSavedNotificationSound**(`parameters`): `Promise`\<[`notificationSound`](../type-aliases/notificationSound.md)\>

Adds a new notification sound to the list of saved notification sounds. The new notification sound is added to the top of the list. If it is already in the list, its position isn't changed

#### Parameters

• **parameters**: [`addSavedNotificationSound$DirectInput`](../type-aliases/addSavedNotificationSound$DirectInput.md)

[addSavedNotificationSound$Input](../type-aliases/addSavedNotificationSound$Input.md)

#### Returns

`Promise`\<[`notificationSound`](../type-aliases/notificationSound.md)\>

Promise<[NotificationSound](../type-aliases/NotificationSound-1.md)>

#### Defined in

dist/generated/types.d.ts:71653

***

### addStickerToSet()

> **addStickerToSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds a new sticker to a set

#### Parameters

• **parameters**: [`addStickerToSet$DirectInput`](../type-aliases/addStickerToSet$DirectInput.md)

[addStickerToSet$Input](../type-aliases/addStickerToSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74290

***

### allowBotToSendMessages()

> **allowBotToSendMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Allows the specified bot to send messages to the user

#### Parameters

• **parameters**: [`allowBotToSendMessages$DirectInput`](../type-aliases/allowBotToSendMessages$DirectInput.md)

[allowBotToSendMessages$Input](../type-aliases/allowBotToSendMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73307

***

### answerCallbackQuery()

> **answerCallbackQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the result of a callback query; for bots only

#### Parameters

• **parameters**: [`answerCallbackQuery$DirectInput`](../type-aliases/answerCallbackQuery$DirectInput.md)

[answerCallbackQuery$Input](../type-aliases/answerCallbackQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70983

***

### answerCustomQuery()

> **answerCustomQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Answers a custom query; for bots only

#### Parameters

• **parameters**: [`answerCustomQuery$DirectInput`](../type-aliases/answerCustomQuery$DirectInput.md)

[answerCustomQuery$Input](../type-aliases/answerCustomQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74549

***

### answerInlineQuery()

> **answerInlineQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the result of an inline query; for bots only

#### Parameters

• **parameters**: [`answerInlineQuery$DirectInput`](../type-aliases/answerInlineQuery$DirectInput.md)

[answerInlineQuery$Input](../type-aliases/answerInlineQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70904

***

### answerPreCheckoutQuery()

> **answerPreCheckoutQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the result of a pre-checkout query; for bots only

#### Parameters

• **parameters**: [`answerPreCheckoutQuery$DirectInput`](../type-aliases/answerPreCheckoutQuery$DirectInput.md)

[answerPreCheckoutQuery$Input](../type-aliases/answerPreCheckoutQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70997

***

### answerShippingQuery()

> **answerShippingQuery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the result of a shipping query; for bots only

#### Parameters

• **parameters**: [`answerShippingQuery$DirectInput`](../type-aliases/answerShippingQuery$DirectInput.md)

[answerShippingQuery$Input](../type-aliases/answerShippingQuery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70990

***

### answerWebAppQuery()

> **answerWebAppQuery**(`parameters`): `Promise`\<[`sentWebAppMessage`](../type-aliases/sentWebAppMessage.md)\>

Sets the result of interaction with a Web App and sends corresponding message on behalf of the user to the chat from which the query originated; for bots only

#### Parameters

• **parameters**: [`answerWebAppQuery$DirectInput`](../type-aliases/answerWebAppQuery$DirectInput.md)

[answerWebAppQuery$Input](../type-aliases/answerWebAppQuery$Input.md)

#### Returns

`Promise`\<[`sentWebAppMessage`](../type-aliases/sentWebAppMessage.md)\>

Promise<[SentWebAppMessage](../type-aliases/SentWebAppMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70969

***

### applyPremiumGiftCode()

> **applyPremiumGiftCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Applies a Telegram Premium gift code

#### Parameters

• **parameters**: [`applyPremiumGiftCode$DirectInput`](../type-aliases/applyPremiumGiftCode$DirectInput.md)

[applyPremiumGiftCode$Input](../type-aliases/applyPremiumGiftCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74437

***

### assignAppStoreTransaction()

> **assignAppStoreTransaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs server about a purchase through App Store. For official applications only

#### Parameters

• **parameters**: [`assignAppStoreTransaction$DirectInput`](../type-aliases/assignAppStoreTransaction$DirectInput.md)

[assignAppStoreTransaction$Input](../type-aliases/assignAppStoreTransaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74493

***

### assignGooglePlayTransaction()

> **assignGooglePlayTransaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs server about a purchase through Google Play. For official applications only

#### Parameters

• **parameters**: [`assignGooglePlayTransaction$DirectInput`](../type-aliases/assignGooglePlayTransaction$DirectInput.md)

[assignGooglePlayTransaction$Input](../type-aliases/assignGooglePlayTransaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74500

***

### banChatMember()

> **banChatMember**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Bans a member in a chat; requires can_restrict_members administrator right. Members can't be banned in private or secret chats. In supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless unbanned first

#### Parameters

• **parameters**: [`banChatMember$DirectInput`](../type-aliases/banChatMember$DirectInput.md)

[banChatMember$Input](../type-aliases/banChatMember$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71590

***

### blockMessageSenderFromReplies()

> **blockMessageSenderFromReplies**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Blocks an original sender of a message in the Replies chat

#### Parameters

• **parameters**: [`blockMessageSenderFromReplies$DirectInput`](../type-aliases/blockMessageSenderFromReplies$DirectInput.md)

[blockMessageSenderFromReplies$Input](../type-aliases/blockMessageSenderFromReplies$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72585

***

### boostChat()

> **boostChat**(`parameters`): `Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots.md)\>

Boosts a chat and returns the list of available chat boost slots for the current user after the boost

#### Parameters

• **parameters**: [`boostChat$DirectInput`](../type-aliases/boostChat$DirectInput.md)

[boostChat$Input](../type-aliases/boostChat$Input.md)

#### Returns

`Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots.md)\>

Promise<[ChatBoostSlots](../type-aliases/ChatBoostSlots-1.md)>

#### Defined in

dist/generated/types.d.ts:71943

***

### canBotSendMessages()

> **canBotSendMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks whether the specified bot can send messages to the user. Returns a 404 error if can't and the access can be granted by call to allowBotToSendMessages

#### Parameters

• **parameters**: [`canBotSendMessages$DirectInput`](../type-aliases/canBotSendMessages$DirectInput.md)

[canBotSendMessages$Input](../type-aliases/canBotSendMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73300

***

### cancelDownloadFile()

> **cancelDownloadFile**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Stops the downloading of a file. If a file has already been downloaded, does nothing

#### Parameters

• **parameters**: [`cancelDownloadFile$DirectInput`](../type-aliases/cancelDownloadFile$DirectInput.md)

[cancelDownloadFile$Input](../type-aliases/cancelDownloadFile$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72055

***

### cancelPasswordReset()

> **cancelPasswordReset**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Cancels reset of 2-step verification password. The method can be called if passwordState.pending_reset_date > 0

#### Parameters

• **parameters**: [`cancelPasswordReset$DirectInput`](../type-aliases/cancelPasswordReset$DirectInput.md)

[cancelPasswordReset$Input](../type-aliases/cancelPasswordReset$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69516

***

### cancelPreliminaryUploadFile()

> **cancelPreliminaryUploadFile**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Stops the preliminary uploading of a file. Supported only for files uploaded by using preliminaryUploadFile. For other files the behavior is undefined

#### Parameters

• **parameters**: [`cancelPreliminaryUploadFile$DirectInput`](../type-aliases/cancelPreliminaryUploadFile$DirectInput.md)

[cancelPreliminaryUploadFile$Input](../type-aliases/cancelPreliminaryUploadFile$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72080

***

### cancelRecoveryEmailAddressVerification()

> **cancelRecoveryEmailAddressVerification**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Cancels verification of the 2-step verification recovery email address

#### Parameters

• **parameters**: [`cancelRecoveryEmailAddressVerification$DirectInput`](../type-aliases/cancelRecoveryEmailAddressVerification$DirectInput.md)

[cancelRecoveryEmailAddressVerification$Input](../type-aliases/cancelRecoveryEmailAddressVerification$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Promise<[PasswordState](../type-aliases/PasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69481

***

### canPurchaseFromStore()

> **canPurchaseFromStore**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks whether an in-store purchase is possible. Must be called before any in-store purchase

#### Parameters

• **parameters**: [`canPurchaseFromStore$DirectInput`](../type-aliases/canPurchaseFromStore$DirectInput.md)

[canPurchaseFromStore$Input](../type-aliases/canPurchaseFromStore$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74486

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

dist/generated/types.d.ts:73908

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

dist/generated/types.d.ts:71744

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

dist/generated/types.d.ts:71597

***

### changeImportedContacts()

> **changeImportedContacts**(`parameters`): `Promise`\<[`importedContacts`](../type-aliases/importedContacts.md)\>

Changes imported contacts using the list of contacts saved on the device. Imports newly added contacts and, if at least the file database is enabled, deletes recently deleted contacts.

- Query result depends on the result of the previous query, so only one query is possible at the same time

#### Parameters

• **parameters**: [`changeImportedContacts$DirectInput`](../type-aliases/changeImportedContacts$DirectInput.md)

[changeImportedContacts$Input](../type-aliases/changeImportedContacts$Input.md)

#### Returns

`Promise`\<[`importedContacts`](../type-aliases/importedContacts.md)\>

Promise<[ImportedContacts](../type-aliases/ImportedContacts-1.md)>

#### Defined in

dist/generated/types.d.ts:72643

***

### changeStickerSet()

> **changeStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Installs/uninstalls or activates/archives a sticker set

#### Parameters

• **parameters**: [`changeStickerSet$DirectInput`](../type-aliases/changeStickerSet$DirectInput.md)

[changeStickerSet$Input](../type-aliases/changeStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72797

***

### checkAuthenticationBotToken()

> **checkAuthenticationBotToken**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks the authentication token of a bot; to log in as a bot. Works only when the current authorization state is authorizationStateWaitPhoneNumber. Can be used instead of setAuthenticationPhoneNumber and checkAuthenticationCode to log in

#### Parameters

• **parameters**: [`checkAuthenticationBotToken$DirectInput`](../type-aliases/checkAuthenticationBotToken$DirectInput.md)

[checkAuthenticationBotToken$Input](../type-aliases/checkAuthenticationBotToken$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69363

***

### checkAuthenticationCode()

> **checkAuthenticationCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks the authentication code. Works only when the current authorization state is authorizationStateWaitCode

#### Parameters

• **parameters**: [`checkAuthenticationCode$DirectInput`](../type-aliases/checkAuthenticationCode$DirectInput.md)

[checkAuthenticationCode$Input](../type-aliases/checkAuthenticationCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69289

***

### checkAuthenticationEmailCode()

> **checkAuthenticationEmailCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks the authentication of an email address. Works only when the current authorization state is authorizationStateWaitEmailCode

#### Parameters

• **parameters**: [`checkAuthenticationEmailCode$DirectInput`](../type-aliases/checkAuthenticationEmailCode$DirectInput.md)

[checkAuthenticationEmailCode$Input](../type-aliases/checkAuthenticationEmailCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69282

***

### checkAuthenticationPassword()

> **checkAuthenticationPassword**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks the 2-step verification password for correctness. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`checkAuthenticationPassword$DirectInput`](../type-aliases/checkAuthenticationPassword$DirectInput.md)

[checkAuthenticationPassword$Input](../type-aliases/checkAuthenticationPassword$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69321

***

### checkAuthenticationPasswordRecoveryCode()

> **checkAuthenticationPasswordRecoveryCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks whether a 2-step verification password recovery code sent to an email address is valid. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`checkAuthenticationPasswordRecoveryCode$DirectInput`](../type-aliases/checkAuthenticationPasswordRecoveryCode$DirectInput.md)

[checkAuthenticationPasswordRecoveryCode$Input](../type-aliases/checkAuthenticationPasswordRecoveryCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69335

***

### checkChatFolderInviteLink()

> **checkChatFolderInviteLink**(`parameters`): `Promise`\<[`chatFolderInviteLinkInfo`](../type-aliases/chatFolderInviteLinkInfo.md)\>

Checks the validity of an invite link for a chat folder and returns information about the corresponding chat folder

#### Parameters

• **parameters**: [`checkChatFolderInviteLink$DirectInput`](../type-aliases/checkChatFolderInviteLink$DirectInput.md)

[checkChatFolderInviteLink$Input](../type-aliases/checkChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLinkInfo`](../type-aliases/chatFolderInviteLinkInfo.md)\>

Promise<[ChatFolderInviteLinkInfo](../type-aliases/ChatFolderInviteLinkInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:71316

***

### checkChatInviteLink()

> **checkChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLinkInfo`](../type-aliases/chatInviteLinkInfo.md)\>

Checks the validity of an invite link for a chat and returns information about the corresponding chat

#### Parameters

• **parameters**: [`checkChatInviteLink$DirectInput`](../type-aliases/checkChatInviteLink$DirectInput.md)

[checkChatInviteLink$Input](../type-aliases/checkChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLinkInfo`](../type-aliases/chatInviteLinkInfo.md)\>

Promise<[ChatInviteLinkInfo](../type-aliases/ChatInviteLinkInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:72284

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

dist/generated/types.d.ts:69820

***

### checkCreatedPublicChatsLimit()

> **checkCreatedPublicChatsLimit**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks whether the maximum number of owned public chats has been reached. Returns corresponding error if the limit was reached. The limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`checkCreatedPublicChatsLimit$DirectInput`](../type-aliases/checkCreatedPublicChatsLimit$DirectInput.md)

[checkCreatedPublicChatsLimit$Input](../type-aliases/checkCreatedPublicChatsLimit$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69834

***

### checkEmailAddressVerificationCode()

> **checkEmailAddressVerificationCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks the email address verification code for Telegram Passport

#### Parameters

• **parameters**: [`checkEmailAddressVerificationCode$DirectInput`](../type-aliases/checkEmailAddressVerificationCode$DirectInput.md)

[checkEmailAddressVerificationCode$Input](../type-aliases/checkEmailAddressVerificationCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74227

***

### checkLoginEmailAddressCode()

> **checkLoginEmailAddressCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks the login email address authentication

#### Parameters

• **parameters**: [`checkLoginEmailAddressCode$DirectInput`](../type-aliases/checkLoginEmailAddressCode$DirectInput.md)

[checkLoginEmailAddressCode$Input](../type-aliases/checkLoginEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69444

***

### checkPasswordRecoveryCode()

> **checkPasswordRecoveryCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks whether a 2-step verification password recovery code sent to an email address is valid

#### Parameters

• **parameters**: [`checkPasswordRecoveryCode$DirectInput`](../type-aliases/checkPasswordRecoveryCode$DirectInput.md)

[checkPasswordRecoveryCode$Input](../type-aliases/checkPasswordRecoveryCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69495

***

### checkPhoneNumberCode()

> **checkPhoneNumberCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Check the authentication code and completes the request for which the code was sent if appropriate

#### Parameters

• **parameters**: [`checkPhoneNumberCode$DirectInput`](../type-aliases/checkPhoneNumberCode$DirectInput.md)

[checkPhoneNumberCode$Input](../type-aliases/checkPhoneNumberCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73160

***

### checkPremiumGiftCode()

> **checkPremiumGiftCode**(`parameters`): `Promise`\<[`premiumGiftCodeInfo`](../type-aliases/premiumGiftCodeInfo.md)\>

Return information about a Telegram Premium gift code

#### Parameters

• **parameters**: [`checkPremiumGiftCode$DirectInput`](../type-aliases/checkPremiumGiftCode$DirectInput.md)

[checkPremiumGiftCode$Input](../type-aliases/checkPremiumGiftCode$Input.md)

#### Returns

`Promise`\<[`premiumGiftCodeInfo`](../type-aliases/premiumGiftCodeInfo.md)\>

Promise<[PremiumGiftCodeInfo](../type-aliases/PremiumGiftCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74430

***

### checkQuickReplyShortcutName()

> **checkQuickReplyShortcutName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Checks validness of a name for a quick reply shortcut. Can be called synchronously

#### Parameters

• **parameters**: [`checkQuickReplyShortcutName$DirectInput`](../type-aliases/checkQuickReplyShortcutName$DirectInput.md)

[checkQuickReplyShortcutName$Input](../type-aliases/checkQuickReplyShortcutName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70449

***

### checkRecoveryEmailAddressCode()

> **checkRecoveryEmailAddressCode**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Checks the 2-step verification recovery email address verification code

#### Parameters

• **parameters**: [`checkRecoveryEmailAddressCode$DirectInput`](../type-aliases/checkRecoveryEmailAddressCode$DirectInput.md)

[checkRecoveryEmailAddressCode$Input](../type-aliases/checkRecoveryEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Promise<[PasswordState](../type-aliases/PasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69467

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

dist/generated/types.d.ts:74276

***

### cleanFileName()

> **cleanFileName**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`cleanFileName$DirectInput`](../type-aliases/cleanFileName$DirectInput.md)

[cleanFileName$Input](../type-aliases/cleanFileName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:70790

***

### clearAllDraftMessages()

> **clearAllDraftMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears message drafts in all chats

#### Parameters

• **parameters**: [`clearAllDraftMessages$DirectInput`](../type-aliases/clearAllDraftMessages$DirectInput.md)

[clearAllDraftMessages$Input](../type-aliases/clearAllDraftMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71632

***

### clearAutosaveSettingsExceptions()

> **clearAutosaveSettingsExceptions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears the list of all autosave settings exceptions. The method is guaranteed to work only after at least one call to getAutosaveSettings

#### Parameters

• **parameters**: [`clearAutosaveSettingsExceptions$DirectInput`](../type-aliases/clearAutosaveSettingsExceptions$DirectInput.md)

[clearAutosaveSettingsExceptions$Input](../type-aliases/clearAutosaveSettingsExceptions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74157

***

### clearImportedContacts()

> **clearImportedContacts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears all imported contacts, contact list remains unchanged

#### Parameters

• **parameters**: [`clearImportedContacts$DirectInput`](../type-aliases/clearImportedContacts$DirectInput.md)

[clearImportedContacts$Input](../type-aliases/clearImportedContacts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72650

***

### clearRecentEmojiStatuses()

> **clearRecentEmojiStatuses**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears the list of recently used emoji statuses for self status

#### Parameters

• **parameters**: [`clearRecentEmojiStatuses$DirectInput`](../type-aliases/clearRecentEmojiStatuses$DirectInput.md)

[clearRecentEmojiStatuses$Input](../type-aliases/clearRecentEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72013

***

### clearRecentlyFoundChats()

> **clearRecentlyFoundChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears the list of recently found chats

#### Parameters

• **parameters**: [`clearRecentlyFoundChats$DirectInput`](../type-aliases/clearRecentlyFoundChats$DirectInput.md)

[clearRecentlyFoundChats$Input](../type-aliases/clearRecentlyFoundChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69806

***

### clearRecentReactions()

> **clearRecentReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears the list of recently used reactions

#### Parameters

• **parameters**: [`clearRecentReactions$DirectInput`](../type-aliases/clearRecentReactions$DirectInput.md)

[clearRecentReactions$Input](../type-aliases/clearRecentReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70648

***

### clearRecentStickers()

> **clearRecentStickers**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears the list of recently used stickers

#### Parameters

• **parameters**: [`clearRecentStickers$DirectInput`](../type-aliases/clearRecentStickers$DirectInput.md)

[clearRecentStickers$Input](../type-aliases/clearRecentStickers$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72841

***

### clearSearchedForTags()

> **clearSearchedForTags**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Clears the list of recently searched for hashtags or cashtags

#### Parameters

• **parameters**: [`clearSearchedForTags$DirectInput`](../type-aliases/clearSearchedForTags$DirectInput.md)

[clearSearchedForTags$Input](../type-aliases/clearSearchedForTags$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70048

***

### clickAnimatedEmojiMessage()

> **clickAnimatedEmojiMessage**(`parameters`): `Promise`\<[`sticker`](../type-aliases/sticker.md)\>

Informs TDLib that a message with an animated emoji was clicked by the user. Returns a big animated sticker to be played or a 404 error if usual animation needs to be played

#### Parameters

• **parameters**: [`clickAnimatedEmojiMessage$DirectInput`](../type-aliases/clickAnimatedEmojiMessage$DirectInput.md)

[clickAnimatedEmojiMessage$Input](../type-aliases/clickAnimatedEmojiMessage$Input.md)

#### Returns

`Promise`\<[`sticker`](../type-aliases/sticker.md)\>

Promise<[Sticker](../type-aliases/Sticker-1.md)>

#### Defined in

dist/generated/types.d.ts:71078

***

### clickChatSponsoredMessage()

> **clickChatSponsoredMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that the user opened the sponsored chat via the button, the name, the photo, or a mention in the sponsored message

#### Parameters

• **parameters**: [`clickChatSponsoredMessage$DirectInput`](../type-aliases/clickChatSponsoredMessage$DirectInput.md)

[clickChatSponsoredMessage$Input](../type-aliases/clickChatSponsoredMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70120

***

### clickPremiumSubscriptionButton()

> **clickPremiumSubscriptionButton**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that the user clicked Premium subscription button on the Premium features screen

#### Parameters

• **parameters**: [`clickPremiumSubscriptionButton$DirectInput`](../type-aliases/clickPremiumSubscriptionButton$DirectInput.md)

[clickPremiumSubscriptionButton$Input](../type-aliases/clickPremiumSubscriptionButton$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74409

***

### close()

> **close**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Closes the TDLib instance. All databases will be flushed to disk and properly closed. After the close completes, updateAuthorizationState with authorizationStateClosed will be sent. Can be called before initialization

#### Parameters

• **parameters**: [`close$DirectInput`](../type-aliases/close$DirectInput.md)

[close$Input](../type-aliases/close$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69377

***

### closeChat()

> **closeChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that the chat is closed by the user. Many useful activities depend on the chat being opened or closed

#### Parameters

• **parameters**: [`closeChat$DirectInput`](../type-aliases/closeChat$DirectInput.md)

[closeChat$Input](../type-aliases/closeChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71053

***

### closeSecretChat()

> **closeSecretChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Closes a secret chat, effectively transferring its state to secretChatStateClosed

#### Parameters

• **parameters**: [`closeSecretChat$DirectInput`](../type-aliases/closeSecretChat$DirectInput.md)

[closeSecretChat$Input](../type-aliases/closeSecretChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73631

***

### closeStory()

> **closeStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that a story is closed by the user

#### Parameters

• **parameters**: [`closeStory$DirectInput`](../type-aliases/closeStory$DirectInput.md)

[closeStory$Input](../type-aliases/closeStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71855

***

### closeWebApp()

> **closeWebApp**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that a previously opened Web App was closed

#### Parameters

• **parameters**: [`closeWebApp$DirectInput`](../type-aliases/closeWebApp$DirectInput.md)

[closeWebApp$Input](../type-aliases/closeWebApp$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70962

***

### confirmQrCodeAuthentication()

> **confirmQrCodeAuthentication**(`parameters`): `Promise`\<[`session`](../type-aliases/session.md)\>

Confirms QR code authentication on another device. Returns created session on success

#### Parameters

• **parameters**: [`confirmQrCodeAuthentication$DirectInput`](../type-aliases/confirmQrCodeAuthentication$DirectInput.md)

[confirmQrCodeAuthentication$Input](../type-aliases/confirmQrCodeAuthentication$Input.md)

#### Returns

`Promise`\<[`session`](../type-aliases/session.md)\>

Promise<[Session](../type-aliases/Session-1.md)>

#### Defined in

dist/generated/types.d.ts:69393

***

### confirmSession()

> **confirmSession**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Confirms an unconfirmed session of the current user from another device

#### Parameters

• **parameters**: [`confirmSession$DirectInput`](../type-aliases/confirmSession$DirectInput.md)

[confirmSession$Input](../type-aliases/confirmSession$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73447

***

### createBasicGroupChat()

> **createBasicGroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Returns an existing chat corresponding to a known basic group

#### Parameters

• **parameters**: [`createBasicGroupChat$DirectInput`](../type-aliases/createBasicGroupChat$DirectInput.md)

[createBasicGroupChat$Input](../type-aliases/createBasicGroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:71148

***

### createBusinessChatLink()

> **createBusinessChatLink**(`parameters`): `Promise`\<[`businessChatLink`](../type-aliases/businessChatLink.md)\>

Creates a business chat link for the current account. Requires Telegram Business subscription. There can be up to getOption("business_chat_link_count_max") links created. Returns the created link

#### Parameters

• **parameters**: [`createBusinessChatLink$DirectInput`](../type-aliases/createBusinessChatLink$DirectInput.md)

[createBusinessChatLink$Input](../type-aliases/createBusinessChatLink$Input.md)

#### Returns

`Promise`\<[`businessChatLink`](../type-aliases/businessChatLink.md)\>

Promise<[BusinessChatLink](../type-aliases/BusinessChatLink-1.md)>

#### Defined in

dist/generated/types.d.ts:73209

***

### createCall()

> **createCall**(`parameters`): `Promise`\<[`callId`](../type-aliases/callId.md)\>

Creates a new call

#### Parameters

• **parameters**: [`createCall$DirectInput`](../type-aliases/createCall$DirectInput.md)

[createCall$Input](../type-aliases/createCall$Input.md)

#### Returns

`Promise`\<[`callId`](../type-aliases/callId.md)\>

Promise<[CallId](../type-aliases/CallId-1.md)>

#### Defined in

dist/generated/types.d.ts:72319

***

### createChatFolder()

> **createChatFolder**(`parameters`): `Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo.md)\>

Creates new chat folder. Returns information about the created chat folder. There can be up to getOption("chat_folder_count_max") chat folders, but the limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`createChatFolder$DirectInput`](../type-aliases/createChatFolder$DirectInput.md)

[createChatFolder$Input](../type-aliases/createChatFolder$Input.md)

#### Returns

`Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo.md)\>

Promise<[ChatFolderInfo](../type-aliases/ChatFolderInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:71218

***

### createChatFolderInviteLink()

> **createChatFolderInviteLink**(`parameters`): `Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink.md)\>

Creates a new invite link for a chat folder. A link can be created for a chat folder if it has only pinned and included chats

#### Parameters

• **parameters**: [`createChatFolderInviteLink$DirectInput`](../type-aliases/createChatFolderInviteLink$DirectInput.md)

[createChatFolderInviteLink$Input](../type-aliases/createChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink.md)\>

Promise<[ChatFolderInviteLink](../type-aliases/ChatFolderInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:71288

***

### createChatInviteLink()

> **createChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Creates a new invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat

#### Parameters

• **parameters**: [`createChatInviteLink$DirectInput`](../type-aliases/createChatInviteLink$DirectInput.md)

[createChatInviteLink$Input](../type-aliases/createChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:72201

***

### createChatSubscriptionInviteLink()

> **createChatSubscriptionInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Creates a new subscription invite link for a channel chat. Requires can_invite_users right in the chat

#### Parameters

• **parameters**: [`createChatSubscriptionInviteLink$DirectInput`](../type-aliases/createChatSubscriptionInviteLink$DirectInput.md)

[createChatSubscriptionInviteLink$Input](../type-aliases/createChatSubscriptionInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:72208

***

### createForumTopic()

> **createForumTopic**(`parameters`): `Promise`\<[`forumTopicInfo`](../type-aliases/forumTopicInfo.md)\>

Creates a topic in a forum supergroup chat; requires can_manage_topics administrator or can_create_topics member right in the supergroup

#### Parameters

• **parameters**: [`createForumTopic$DirectInput`](../type-aliases/createForumTopic$DirectInput.md)

[createForumTopic$Input](../type-aliases/createForumTopic$Input.md)

#### Returns

`Promise`\<[`forumTopicInfo`](../type-aliases/forumTopicInfo.md)\>

Promise<[ForumTopicInfo](../type-aliases/ForumTopicInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:70550

***

### createInvoiceLink()

> **createInvoiceLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Creates a link for the given invoice; for bots only

#### Parameters

• **parameters**: [`createInvoiceLink$DirectInput`](../type-aliases/createInvoiceLink$DirectInput.md)

[createInvoiceLink$Input](../type-aliases/createInvoiceLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:73701

***

### createNewBasicGroupChat()

> **createNewBasicGroupChat**(`parameters`): `Promise`\<[`createdBasicGroupChat`](../type-aliases/createdBasicGroupChat.md)\>

Creates a new basic group and sends a corresponding messageBasicGroupChatCreate. Returns information about the newly created chat

#### Parameters

• **parameters**: [`createNewBasicGroupChat$DirectInput`](../type-aliases/createNewBasicGroupChat$DirectInput.md)

[createNewBasicGroupChat$Input](../type-aliases/createNewBasicGroupChat$Input.md)

#### Returns

`Promise`\<[`createdBasicGroupChat`](../type-aliases/createdBasicGroupChat.md)\>

Promise<[CreatedBasicGroupChat](../type-aliases/CreatedBasicGroupChat-1.md)>

#### Defined in

dist/generated/types.d.ts:71169

***

### createNewSecretChat()

> **createNewSecretChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Creates a new secret chat. Returns the newly created chat

#### Parameters

• **parameters**: [`createNewSecretChat$DirectInput`](../type-aliases/createNewSecretChat$DirectInput.md)

[createNewSecretChat$Input](../type-aliases/createNewSecretChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:71183

***

### createNewStickerSet()

> **createNewStickerSet**(`parameters`): `Promise`\<[`stickerSet`](../type-aliases/stickerSet.md)\>

Creates a new sticker set. Returns the newly created sticker set

#### Parameters

• **parameters**: [`createNewStickerSet$DirectInput`](../type-aliases/createNewStickerSet$DirectInput.md)

[createNewStickerSet$Input](../type-aliases/createNewStickerSet$Input.md)

#### Returns

`Promise`\<[`stickerSet`](../type-aliases/stickerSet.md)\>

Promise<[StickerSet](../type-aliases/StickerSet-1.md)>

#### Defined in

dist/generated/types.d.ts:74283

***

### createNewSupergroupChat()

> **createNewSupergroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Creates a new supergroup or channel and sends a corresponding messageSupergroupChatCreate. Returns the newly created chat

#### Parameters

• **parameters**: [`createNewSupergroupChat$DirectInput`](../type-aliases/createNewSupergroupChat$DirectInput.md)

[createNewSupergroupChat$Input](../type-aliases/createNewSupergroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:71176

***

### createPrivateChat()

> **createPrivateChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Returns an existing chat corresponding to a given user

#### Parameters

• **parameters**: [`createPrivateChat$DirectInput`](../type-aliases/createPrivateChat$DirectInput.md)

[createPrivateChat$Input](../type-aliases/createPrivateChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:71141

***

### createSecretChat()

> **createSecretChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Returns an existing chat corresponding to a known secret chat

#### Parameters

• **parameters**: [`createSecretChat$DirectInput`](../type-aliases/createSecretChat$DirectInput.md)

[createSecretChat$Input](../type-aliases/createSecretChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:71162

***

### createSupergroupChat()

> **createSupergroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Returns an existing chat corresponding to a known supergroup or channel

#### Parameters

• **parameters**: [`createSupergroupChat$DirectInput`](../type-aliases/createSupergroupChat$DirectInput.md)

[createSupergroupChat$Input](../type-aliases/createSupergroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:71155

***

### createTemporaryPassword()

> **createTemporaryPassword**(`parameters`): `Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState.md)\>

Creates a new temporary password for processing payments

#### Parameters

• **parameters**: [`createTemporaryPassword$DirectInput`](../type-aliases/createTemporaryPassword$DirectInput.md)

[createTemporaryPassword$Input](../type-aliases/createTemporaryPassword$Input.md)

#### Returns

`Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState.md)\>

Promise<[TemporaryPasswordState](../type-aliases/TemporaryPasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69523

***

### createVideoChat()

> **createVideoChat**(`parameters`): `Promise`\<[`groupCallId`](../type-aliases/groupCallId.md)\>

Creates a video chat (a group call bound to a chat). Available only for basic groups, supergroups and channels; requires can_manage_video_chats administrator right

#### Parameters

• **parameters**: [`createVideoChat$DirectInput`](../type-aliases/createVideoChat$DirectInput.md)

[createVideoChat$Input](../type-aliases/createVideoChat$Input.md)

#### Returns

`Promise`\<[`groupCallId`](../type-aliases/groupCallId.md)\>

Promise<[GroupCallId](../type-aliases/GroupCallId-1.md)>

#### Defined in

dist/generated/types.d.ts:72382

***

### deleteAccount()

> **deleteAccount**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes the account of the current user, deleting all information associated with the user from the server. The phone number of the account can be used to create a new account.

- Can be called before authorization when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`deleteAccount$DirectInput`](../type-aliases/deleteAccount$DirectInput.md)

[deleteAccount$Input](../type-aliases/deleteAccount$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73945

***

### deleteAllCallMessages()

> **deleteAllCallMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all call messages

#### Parameters

• **parameters**: [`deleteAllCallMessages$DirectInput`](../type-aliases/deleteAllCallMessages$DirectInput.md)

[deleteAllCallMessages$Input](../type-aliases/deleteAllCallMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70055

***

### deleteAllRevokedChatInviteLinks()

> **deleteAllRevokedChatInviteLinks**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all revoked chat invite links created by a given chat administrator. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`deleteAllRevokedChatInviteLinks$DirectInput`](../type-aliases/deleteAllRevokedChatInviteLinks$DirectInput.md)

[deleteAllRevokedChatInviteLinks$Input](../type-aliases/deleteAllRevokedChatInviteLinks$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72277

***

### deleteBotMediaPreviews()

> **deleteBotMediaPreviews**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Delete media previews from the list of media previews of a bot

#### Parameters

• **parameters**: [`deleteBotMediaPreviews$DirectInput`](../type-aliases/deleteBotMediaPreviews$DirectInput.md)

[deleteBotMediaPreviews$Input](../type-aliases/deleteBotMediaPreviews$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73356

***

### deleteBusinessChatLink()

> **deleteBusinessChatLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes a business chat link of the current account

#### Parameters

• **parameters**: [`deleteBusinessChatLink$DirectInput`](../type-aliases/deleteBusinessChatLink$DirectInput.md)

[deleteBusinessChatLink$Input](../type-aliases/deleteBusinessChatLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73223

***

### deleteBusinessConnectedBot()

> **deleteBusinessConnectedBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes the business bot that is connected to the current user account

#### Parameters

• **parameters**: [`deleteBusinessConnectedBot$DirectInput`](../type-aliases/deleteBusinessConnectedBot$DirectInput.md)

[deleteBusinessConnectedBot$Input](../type-aliases/deleteBusinessConnectedBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73181

***

### deleteChat()

> **deleteChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes a chat along with all messages in the corresponding chat for all chat members. For group chats this will release the usernames and remove all members.

- Use the field chat.can_be_deleted_for_all_users to find whether the method can be applied to the chat

#### Parameters

• **parameters**: [`deleteChat$DirectInput`](../type-aliases/deleteChat$DirectInput.md)

[deleteChat$Input](../type-aliases/deleteChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69947

***

### deleteChatBackground()

> **deleteChatBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes background in a specific chat

#### Parameters

• **parameters**: [`deleteChatBackground$DirectInput`](../type-aliases/deleteChatBackground$DirectInput.md)

[deleteChatBackground$Input](../type-aliases/deleteChatBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71416

***

### deleteChatFolder()

> **deleteChatFolder**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes existing chat folder

#### Parameters

• **parameters**: [`deleteChatFolder$DirectInput`](../type-aliases/deleteChatFolder$DirectInput.md)

[deleteChatFolder$Input](../type-aliases/deleteChatFolder$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71232

***

### deleteChatFolderInviteLink()

> **deleteChatFolderInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes an invite link for a chat folder

#### Parameters

• **parameters**: [`deleteChatFolderInviteLink$DirectInput`](../type-aliases/deleteChatFolderInviteLink$DirectInput.md)

[deleteChatFolderInviteLink$Input](../type-aliases/deleteChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71309

***

### deleteChatHistory()

> **deleteChatHistory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all messages in the chat. Use chat.can_be_deleted_only_for_self and chat.can_be_deleted_for_all_users fields to find whether and how the method can be applied to the chat

#### Parameters

• **parameters**: [`deleteChatHistory$DirectInput`](../type-aliases/deleteChatHistory$DirectInput.md)

[deleteChatHistory$Input](../type-aliases/deleteChatHistory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69938

***

### deleteChatMessagesByDate()

> **deleteChatMessagesByDate**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all messages between the specified dates in a chat. Supported only for private chats and basic groups. Messages sent in the last 30 seconds will not be deleted

#### Parameters

• **parameters**: [`deleteChatMessagesByDate$DirectInput`](../type-aliases/deleteChatMessagesByDate$DirectInput.md)

[deleteChatMessagesByDate$Input](../type-aliases/deleteChatMessagesByDate$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70287

***

### deleteChatMessagesBySender()

> **deleteChatMessagesBySender**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all messages sent by the specified message sender in a chat. Supported only for supergroups; requires can_delete_messages administrator privileges

#### Parameters

• **parameters**: [`deleteChatMessagesBySender$DirectInput`](../type-aliases/deleteChatMessagesBySender$DirectInput.md)

[deleteChatMessagesBySender$Input](../type-aliases/deleteChatMessagesBySender$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70280

***

### deleteChatReplyMarkup()

> **deleteChatReplyMarkup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes the default reply markup from a chat. Must be called after a one-time keyboard or a replyMarkupForceReply reply markup has been used. An updateChatReplyMarkup update will be sent if the reply markup is changed

#### Parameters

• **parameters**: [`deleteChatReplyMarkup$DirectInput`](../type-aliases/deleteChatReplyMarkup$DirectInput.md)

[deleteChatReplyMarkup$Input](../type-aliases/deleteChatReplyMarkup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71032

***

### deleteCommands()

> **deleteCommands**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes commands supported by the bot for the given user scope and language; for bots only

#### Parameters

• **parameters**: [`deleteCommands$DirectInput`](../type-aliases/deleteCommands$DirectInput.md)

[deleteCommands$Input](../type-aliases/deleteCommands$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73258

***

### deleteDefaultBackground()

> **deleteDefaultBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes default background for chats

#### Parameters

• **parameters**: [`deleteDefaultBackground$DirectInput`](../type-aliases/deleteDefaultBackground$DirectInput.md)

[deleteDefaultBackground$Input](../type-aliases/deleteDefaultBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73743

***

### deleteFile()

> **deleteFile**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes a file from the TDLib file cache

#### Parameters

• **parameters**: [`deleteFile$DirectInput`](../type-aliases/deleteFile$DirectInput.md)

[deleteFile$Input](../type-aliases/deleteFile$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72115

***

### deleteForumTopic()

> **deleteForumTopic**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all messages in a forum topic; requires can_delete_messages administrator right in the supergroup unless the user is creator of the topic, the topic has no messages from other users and has at most 11 messages

#### Parameters

• **parameters**: [`deleteForumTopic$DirectInput`](../type-aliases/deleteForumTopic$DirectInput.md)

[deleteForumTopic$Input](../type-aliases/deleteForumTopic$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70620

***

### deleteLanguagePack()

> **deleteLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all information about a language pack in the current localization target. The language pack which is currently in use (including base language pack) or is being synchronized can't be deleted.

- Can be called before authorization

#### Parameters

• **parameters**: [`deleteLanguagePack$DirectInput`](../type-aliases/deleteLanguagePack$DirectInput.md)

[deleteLanguagePack$Input](../type-aliases/deleteLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73831

***

### deleteMessages()

> **deleteMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes messages

#### Parameters

• **parameters**: [`deleteMessages$DirectInput`](../type-aliases/deleteMessages$DirectInput.md)

[deleteMessages$Input](../type-aliases/deleteMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70273

***

### deletePassportElement()

> **deletePassportElement**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes a Telegram Passport element

#### Parameters

• **parameters**: [`deletePassportElement$DirectInput`](../type-aliases/deletePassportElement$DirectInput.md)

[deletePassportElement$Input](../type-aliases/deletePassportElement$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74192

***

### deleteProfilePhoto()

> **deleteProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes a profile photo

#### Parameters

• **parameters**: [`deleteProfilePhoto$DirectInput`](../type-aliases/deleteProfilePhoto$DirectInput.md)

[deleteProfilePhoto$Input](../type-aliases/deleteProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73006

***

### deleteQuickReplyShortcut()

> **deleteQuickReplyShortcut**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes a quick reply shortcut

#### Parameters

• **parameters**: [`deleteQuickReplyShortcut$DirectInput`](../type-aliases/deleteQuickReplyShortcut$DirectInput.md)

[deleteQuickReplyShortcut$Input](../type-aliases/deleteQuickReplyShortcut$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70470

***

### deleteQuickReplyShortcutMessages()

> **deleteQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes specified quick reply messages

#### Parameters

• **parameters**: [`deleteQuickReplyShortcutMessages$DirectInput`](../type-aliases/deleteQuickReplyShortcutMessages$DirectInput.md)

[deleteQuickReplyShortcutMessages$Input](../type-aliases/deleteQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70491

***

### deleteRevokedChatInviteLink()

> **deleteRevokedChatInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes revoked chat invite links. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`deleteRevokedChatInviteLink$DirectInput`](../type-aliases/deleteRevokedChatInviteLink$DirectInput.md)

[deleteRevokedChatInviteLink$Input](../type-aliases/deleteRevokedChatInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72270

***

### deleteSavedCredentials()

> **deleteSavedCredentials**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes saved credentials for all payment provider bots

#### Parameters

• **parameters**: [`deleteSavedCredentials$DirectInput`](../type-aliases/deleteSavedCredentials$DirectInput.md)

[deleteSavedCredentials$Input](../type-aliases/deleteSavedCredentials$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73694

***

### deleteSavedMessagesTopicHistory()

> **deleteSavedMessagesTopicHistory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all messages in a Saved Messages topic

#### Parameters

• **parameters**: [`deleteSavedMessagesTopicHistory$DirectInput`](../type-aliases/deleteSavedMessagesTopicHistory$DirectInput.md)

[deleteSavedMessagesTopicHistory$Input](../type-aliases/deleteSavedMessagesTopicHistory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69885

***

### deleteSavedMessagesTopicMessagesByDate()

> **deleteSavedMessagesTopicMessagesByDate**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes all messages between the specified dates in a Saved Messages topic. Messages sent in the last 30 seconds will not be deleted

#### Parameters

• **parameters**: [`deleteSavedMessagesTopicMessagesByDate$DirectInput`](../type-aliases/deleteSavedMessagesTopicMessagesByDate$DirectInput.md)

[deleteSavedMessagesTopicMessagesByDate$Input](../type-aliases/deleteSavedMessagesTopicMessagesByDate$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69892

***

### deleteSavedOrderInfo()

> **deleteSavedOrderInfo**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes saved order information

#### Parameters

• **parameters**: [`deleteSavedOrderInfo$DirectInput`](../type-aliases/deleteSavedOrderInfo$DirectInput.md)

[deleteSavedOrderInfo$Input](../type-aliases/deleteSavedOrderInfo$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73687

***

### deleteStickerSet()

> **deleteStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Completely deletes a sticker set

#### Parameters

• **parameters**: [`deleteStickerSet$DirectInput`](../type-aliases/deleteStickerSet$DirectInput.md)

[deleteStickerSet$Input](../type-aliases/deleteStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74325

***

### deleteStory()

> **deleteStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Deletes a previously sent story. Can be called only if story.can_be_deleted == true

#### Parameters

• **parameters**: [`deleteStory$DirectInput`](../type-aliases/deleteStory$DirectInput.md)

[deleteStory$Input](../type-aliases/deleteStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71786

***

### destroy()

> **destroy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Closes the TDLib instance, destroying all local data without a proper logout. The current user session will remain in the list of all active sessions. All local data will be destroyed.

- After the destruction completes updateAuthorizationState with authorizationStateClosed will be sent. Can be called before authorization

#### Parameters

• **parameters**: [`destroy$DirectInput`](../type-aliases/destroy$DirectInput.md)

[destroy$Input](../type-aliases/destroy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69386

***

### disableAllSupergroupUsernames()

> **disableAllSupergroupUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Disables all active non-editable usernames of a supergroup or channel, requires owner privileges in the supergroup or channel

#### Parameters

• **parameters**: [`disableAllSupergroupUsernames$DirectInput`](../type-aliases/disableAllSupergroupUsernames$DirectInput.md)

[disableAllSupergroupUsernames$Input](../type-aliases/disableAllSupergroupUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73512

***

### disableProxy()

> **disableProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Disables the currently enabled proxy. Can be called before authorization

#### Parameters

• **parameters**: [`disableProxy$DirectInput`](../type-aliases/disableProxy$DirectInput.md)

[disableProxy$Input](../type-aliases/disableProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74647

***

### discardCall()

> **discardCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Discards a call

#### Parameters

• **parameters**: [`discardCall$DirectInput`](../type-aliases/discardCall$DirectInput.md)

[discardCall$Input](../type-aliases/discardCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72340

***

### disconnectAllWebsites()

> **disconnectAllWebsites**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Disconnects all websites from the current user's Telegram account

#### Parameters

• **parameters**: [`disconnectAllWebsites$DirectInput`](../type-aliases/disconnectAllWebsites$DirectInput.md)

[disconnectAllWebsites$Input](../type-aliases/disconnectAllWebsites$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73489

***

### disconnectWebsite()

> **disconnectWebsite**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Disconnects website from the current user's Telegram account

#### Parameters

• **parameters**: [`disconnectWebsite$DirectInput`](../type-aliases/disconnectWebsite$DirectInput.md)

[disconnectWebsite$Input](../type-aliases/disconnectWebsite$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73482

***

### downloadFile()

> **downloadFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file.md)\>

Downloads a file from the cloud. Download progress and completion of the download will be notified through updateFile updates

#### Parameters

• **parameters**: [`downloadFile$DirectInput`](../type-aliases/downloadFile$DirectInput.md)

[downloadFile$Input](../type-aliases/downloadFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file.md)\>

Promise<[File](../type-aliases/File-1.md)>

#### Defined in

dist/generated/types.d.ts:72041

***

### editBotMediaPreview()

> **editBotMediaPreview**(`parameters`): `Promise`\<[`botMediaPreview`](../type-aliases/botMediaPreview.md)\>

Replaces media preview in the list of media previews of a bot. Returns the new preview after edit is completed server-side

#### Parameters

• **parameters**: [`editBotMediaPreview$DirectInput`](../type-aliases/editBotMediaPreview$DirectInput.md)

[editBotMediaPreview$Input](../type-aliases/editBotMediaPreview$Input.md)

#### Returns

`Promise`\<[`botMediaPreview`](../type-aliases/botMediaPreview.md)\>

Promise<[BotMediaPreview](../type-aliases/BotMediaPreview-1.md)>

#### Defined in

dist/generated/types.d.ts:73342

***

### editBusinessChatLink()

> **editBusinessChatLink**(`parameters`): `Promise`\<[`businessChatLink`](../type-aliases/businessChatLink.md)\>

Edits a business chat link of the current account. Requires Telegram Business subscription. Returns the edited link

#### Parameters

• **parameters**: [`editBusinessChatLink$DirectInput`](../type-aliases/editBusinessChatLink$DirectInput.md)

[editBusinessChatLink$Input](../type-aliases/editBusinessChatLink$Input.md)

#### Returns

`Promise`\<[`businessChatLink`](../type-aliases/businessChatLink.md)\>

Promise<[BusinessChatLink](../type-aliases/BusinessChatLink-1.md)>

#### Defined in

dist/generated/types.d.ts:73216

***

### editBusinessMessageCaption()

> **editBusinessMessageCaption**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Edits the caption of a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageCaption$DirectInput`](../type-aliases/editBusinessMessageCaption$DirectInput.md)

[editBusinessMessageCaption$Input](../type-aliases/editBusinessMessageCaption$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70421

***

### editBusinessMessageLiveLocation()

> **editBusinessMessageLiveLocation**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Edits the content of a live location in a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageLiveLocation$DirectInput`](../type-aliases/editBusinessMessageLiveLocation$DirectInput.md)

[editBusinessMessageLiveLocation$Input](../type-aliases/editBusinessMessageLiveLocation$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70407

***

### editBusinessMessageMedia()

> **editBusinessMessageMedia**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Edits the content of a message with an animation, an audio, a document, a photo or a video in a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageMedia$DirectInput`](../type-aliases/editBusinessMessageMedia$DirectInput.md)

[editBusinessMessageMedia$Input](../type-aliases/editBusinessMessageMedia$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70414

***

### editBusinessMessageReplyMarkup()

> **editBusinessMessageReplyMarkup**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Edits the reply markup of a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageReplyMarkup$DirectInput`](../type-aliases/editBusinessMessageReplyMarkup$DirectInput.md)

[editBusinessMessageReplyMarkup$Input](../type-aliases/editBusinessMessageReplyMarkup$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70428

***

### editBusinessMessageText()

> **editBusinessMessageText**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Edits the text of a text or game message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`editBusinessMessageText$DirectInput`](../type-aliases/editBusinessMessageText$DirectInput.md)

[editBusinessMessageText$Input](../type-aliases/editBusinessMessageText$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70400

***

### editChatFolder()

> **editChatFolder**(`parameters`): `Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo.md)\>

Edits existing chat folder. Returns information about the edited chat folder

#### Parameters

• **parameters**: [`editChatFolder$DirectInput`](../type-aliases/editChatFolder$DirectInput.md)

[editChatFolder$Input](../type-aliases/editChatFolder$Input.md)

#### Returns

`Promise`\<[`chatFolderInfo`](../type-aliases/chatFolderInfo.md)\>

Promise<[ChatFolderInfo](../type-aliases/ChatFolderInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:71225

***

### editChatFolderInviteLink()

> **editChatFolderInviteLink**(`parameters`): `Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink.md)\>

Edits an invite link for a chat folder

#### Parameters

• **parameters**: [`editChatFolderInviteLink$DirectInput`](../type-aliases/editChatFolderInviteLink$DirectInput.md)

[editChatFolderInviteLink$Input](../type-aliases/editChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLink`](../type-aliases/chatFolderInviteLink.md)\>

Promise<[ChatFolderInviteLink](../type-aliases/ChatFolderInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:71302

***

### editChatInviteLink()

> **editChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Edits a non-primary invite link for a chat. Available for basic groups, supergroups, and channels.

- If the link creates a subscription, then expiration_date, member_limit and creates_join_request must not be used

- Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`editChatInviteLink$DirectInput`](../type-aliases/editChatInviteLink$DirectInput.md)

[editChatInviteLink$Input](../type-aliases/editChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:72219

***

### editChatSubscriptionInviteLink()

> **editChatSubscriptionInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Edits a subscription invite link for a channel chat. Requires can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`editChatSubscriptionInviteLink$DirectInput`](../type-aliases/editChatSubscriptionInviteLink$DirectInput.md)

[editChatSubscriptionInviteLink$Input](../type-aliases/editChatSubscriptionInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:72226

***

### editCustomLanguagePackInfo()

> **editCustomLanguagePackInfo**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits information about a custom local language pack in the current localization target. Can be called before authorization

#### Parameters

• **parameters**: [`editCustomLanguagePackInfo$DirectInput`](../type-aliases/editCustomLanguagePackInfo$DirectInput.md)

[editCustomLanguagePackInfo$Input](../type-aliases/editCustomLanguagePackInfo$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73815

***

### editForumTopic()

> **editForumTopic**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits title and icon of a topic in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic

#### Parameters

• **parameters**: [`editForumTopic$DirectInput`](../type-aliases/editForumTopic$DirectInput.md)

[editForumTopic$Input](../type-aliases/editForumTopic$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70557

***

### editInlineMessageCaption()

> **editInlineMessageCaption**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits the caption of an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageCaption$DirectInput`](../type-aliases/editInlineMessageCaption$DirectInput.md)

[editInlineMessageCaption$Input](../type-aliases/editInlineMessageCaption$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70356

***

### editInlineMessageLiveLocation()

> **editInlineMessageLiveLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits the content of a live location in an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageLiveLocation$DirectInput`](../type-aliases/editInlineMessageLiveLocation$DirectInput.md)

[editInlineMessageLiveLocation$Input](../type-aliases/editInlineMessageLiveLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70342

***

### editInlineMessageMedia()

> **editInlineMessageMedia**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits the content of a message with an animation, an audio, a document, a photo or a video in an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageMedia$DirectInput`](../type-aliases/editInlineMessageMedia$DirectInput.md)

[editInlineMessageMedia$Input](../type-aliases/editInlineMessageMedia$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70349

***

### editInlineMessageReplyMarkup()

> **editInlineMessageReplyMarkup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits the reply markup of an inline message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageReplyMarkup$DirectInput`](../type-aliases/editInlineMessageReplyMarkup$DirectInput.md)

[editInlineMessageReplyMarkup$Input](../type-aliases/editInlineMessageReplyMarkup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70363

***

### editInlineMessageText()

> **editInlineMessageText**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits the text of an inline text or game message sent via a bot; for bots only

#### Parameters

• **parameters**: [`editInlineMessageText$DirectInput`](../type-aliases/editInlineMessageText$DirectInput.md)

[editInlineMessageText$Input](../type-aliases/editInlineMessageText$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70335

***

### editMessageCaption()

> **editMessageCaption**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Edits the message content caption. Returns the edited message after the edit is completed on the server side

#### Parameters

• **parameters**: [`editMessageCaption$DirectInput`](../type-aliases/editMessageCaption$DirectInput.md)

[editMessageCaption$Input](../type-aliases/editMessageCaption$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70321

***

### editMessageLiveLocation()

> **editMessageLiveLocation**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Edits the message content of a live location. Messages can be edited for a limited period of time specified in the live location.

- Returns the edited message after the edit is completed on the server side

#### Parameters

• **parameters**: [`editMessageLiveLocation$DirectInput`](../type-aliases/editMessageLiveLocation$DirectInput.md)

[editMessageLiveLocation$Input](../type-aliases/editMessageLiveLocation$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70303

***

### editMessageMedia()

> **editMessageMedia**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Edits the content of a message with an animation, an audio, a document, a photo or a video, including message caption. If only the caption needs to be edited, use editMessageCaption instead.

- The media can't be edited if the message was set to self-destruct or to a self-destructing media. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa.

- Returns the edited message after the edit is completed on the server side

#### Parameters

• **parameters**: [`editMessageMedia$DirectInput`](../type-aliases/editMessageMedia$DirectInput.md)

[editMessageMedia$Input](../type-aliases/editMessageMedia$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70314

***

### editMessageReplyMarkup()

> **editMessageReplyMarkup**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Edits the message reply markup; for bots only. Returns the edited message after the edit is completed on the server side

#### Parameters

• **parameters**: [`editMessageReplyMarkup$DirectInput`](../type-aliases/editMessageReplyMarkup$DirectInput.md)

[editMessageReplyMarkup$Input](../type-aliases/editMessageReplyMarkup$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70328

***

### editMessageSchedulingState()

> **editMessageSchedulingState**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded together with the message will be also changed

#### Parameters

• **parameters**: [`editMessageSchedulingState$DirectInput`](../type-aliases/editMessageSchedulingState$DirectInput.md)

[editMessageSchedulingState$Input](../type-aliases/editMessageSchedulingState$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70370

***

### editMessageText()

> **editMessageText**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Edits the text of a message (or a text of a game message). Returns the edited message after the edit is completed on the server side

#### Parameters

• **parameters**: [`editMessageText$DirectInput`](../type-aliases/editMessageText$DirectInput.md)

[editMessageText$Input](../type-aliases/editMessageText$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70294

***

### editProxy()

> **editProxy**(`parameters`): `Promise`\<[`proxy`](../type-aliases/proxy.md)\>

Edits an existing proxy server for network requests. Can be called before authorization

#### Parameters

• **parameters**: [`editProxy$DirectInput`](../type-aliases/editProxy$DirectInput.md)

[editProxy$Input](../type-aliases/editProxy$Input.md)

#### Returns

`Promise`\<[`proxy`](../type-aliases/proxy.md)\>

Promise<[Proxy](../type-aliases/Proxy-1.md)>

#### Defined in

dist/generated/types.d.ts:74633

***

### editQuickReplyMessage()

> **editQuickReplyMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Asynchronously edits the text, media or caption of a quick reply message. Use quickReplyMessage.can_be_edited to check whether a message can be edited.

- Text message can be edited only to a text message. The type of message content in an album can't be changed with exception of replacing a photo with a video or vice versa

#### Parameters

• **parameters**: [`editQuickReplyMessage$DirectInput`](../type-aliases/editQuickReplyMessage$DirectInput.md)

[editQuickReplyMessage$Input](../type-aliases/editQuickReplyMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70536

***

### editStarSubscription()

> **editStarSubscription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Cancels or reenables Telegram Star subscription to a channel

#### Parameters

• **parameters**: [`editStarSubscription$DirectInput`](../type-aliases/editStarSubscription$DirectInput.md)

[editStarSubscription$Input](../type-aliases/editStarSubscription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74507

***

### editStory()

> **editStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes content and caption of a story. Can be called only if story.can_be_edited == true

#### Parameters

• **parameters**: [`editStory$DirectInput`](../type-aliases/editStory$DirectInput.md)

[editStory$Input](../type-aliases/editStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71758

***

### editStoryCover()

> **editStoryCover**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes cover of a video story. Can be called only if story.can_be_edited == true and the story isn't being edited now

#### Parameters

• **parameters**: [`editStoryCover$DirectInput`](../type-aliases/editStoryCover$DirectInput.md)

[editStoryCover$Input](../type-aliases/editStoryCover$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71765

***

### enableProxy()

> **enableProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Enables a proxy. Only one proxy can be enabled at a time. Can be called before authorization

#### Parameters

• **parameters**: [`enableProxy$DirectInput`](../type-aliases/enableProxy$DirectInput.md)

[enableProxy$Input](../type-aliases/enableProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74640

***

### endGroupCall()

> **endGroupCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Ends a group call. Requires groupCall.can_be_managed

#### Parameters

• **parameters**: [`endGroupCall$DirectInput`](../type-aliases/endGroupCall$DirectInput.md)

[endGroupCall$Input](../type-aliases/endGroupCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72557

***

### endGroupCallRecording()

> **endGroupCallRecording**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Ends recording of an active group call. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`endGroupCallRecording$DirectInput`](../type-aliases/endGroupCallRecording$DirectInput.md)

[endGroupCallRecording$Input](../type-aliases/endGroupCallRecording$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72494

***

### endGroupCallScreenSharing()

> **endGroupCallScreenSharing**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Ends screen sharing in a joined group call

#### Parameters

• **parameters**: [`endGroupCallScreenSharing$DirectInput`](../type-aliases/endGroupCallScreenSharing$DirectInput.md)

[endGroupCallScreenSharing$Input](../type-aliases/endGroupCallScreenSharing$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72445

***

### finishFileGeneration()

> **finishFileGeneration**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Finishes the file generation

#### Parameters

• **parameters**: [`finishFileGeneration$DirectInput`](../type-aliases/finishFileGeneration$DirectInput.md)

[finishFileGeneration$Input](../type-aliases/finishFileGeneration$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72101

***

### forwardMessages()

> **forwardMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Forwards previously sent messages. Returns the forwarded messages in the same order as the message identifiers passed in message_ids. If a message can't be forwarded, null will be returned instead of the message

#### Parameters

• **parameters**: [`forwardMessages$DirectInput`](../type-aliases/forwardMessages$DirectInput.md)

[forwardMessages$Input](../type-aliases/forwardMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:70243

***

### getAccountTtl()

> **getAccountTtl**(`parameters`): `Promise`\<[`accountTtl`](../type-aliases/accountTtl.md)\>

Returns the period of inactivity after which the account of the current user will automatically be deleted

#### Parameters

• **parameters**: [`getAccountTtl$DirectInput`](../type-aliases/getAccountTtl$DirectInput.md)

[getAccountTtl$Input](../type-aliases/getAccountTtl$Input.md)

#### Returns

`Promise`\<[`accountTtl`](../type-aliases/accountTtl.md)\>

Promise<[AccountTtl](../type-aliases/AccountTtl-1.md)>

#### Defined in

dist/generated/types.d.ts:73936

***

### getActiveSessions()

> **getActiveSessions**(`parameters`): `Promise`\<[`sessions`](../type-aliases/sessions.md)\>

Returns all active sessions of the current user

#### Parameters

• **parameters**: [`getActiveSessions$DirectInput`](../type-aliases/getActiveSessions$DirectInput.md)

[getActiveSessions$Input](../type-aliases/getActiveSessions$Input.md)

#### Returns

`Promise`\<[`sessions`](../type-aliases/sessions.md)\>

Promise<[Sessions](../type-aliases/Sessions-1.md)>

#### Defined in

dist/generated/types.d.ts:73426

***

### getAllPassportElements()

> **getAllPassportElements**(`parameters`): `Promise`\<[`passportElements`](../type-aliases/passportElements.md)\>

Returns all available Telegram Passport elements

#### Parameters

• **parameters**: [`getAllPassportElements$DirectInput`](../type-aliases/getAllPassportElements$DirectInput.md)

[getAllPassportElements$Input](../type-aliases/getAllPassportElements$Input.md)

#### Returns

`Promise`\<[`passportElements`](../type-aliases/passportElements.md)\>

Promise<[PassportElements](../type-aliases/PassportElements-1.md)>

#### Defined in

dist/generated/types.d.ts:74178

***

### getAllStickerEmojis()

> **getAllStickerEmojis**(`parameters`): `Promise`\<[`emojis`](../type-aliases/emojis.md)\>

Returns unique emoji that correspond to stickers to be found by the getStickers(sticker_type, query, 1000000, chat_id)

#### Parameters

• **parameters**: [`getAllStickerEmojis$DirectInput`](../type-aliases/getAllStickerEmojis$DirectInput.md)

[getAllStickerEmojis$Input](../type-aliases/getAllStickerEmojis$Input.md)

#### Returns

`Promise`\<[`emojis`](../type-aliases/emojis.md)\>

Promise<[Emojis](../type-aliases/Emojis-1.md)>

#### Defined in

dist/generated/types.d.ts:72713

***

### getAnimatedEmoji()

> **getAnimatedEmoji**(`parameters`): `Promise`\<[`animatedEmoji`](../type-aliases/animatedEmoji.md)\>

Returns an animated emoji corresponding to a given emoji. Returns a 404 error if the emoji has no animated emoji

#### Parameters

• **parameters**: [`getAnimatedEmoji$DirectInput`](../type-aliases/getAnimatedEmoji$DirectInput.md)

[getAnimatedEmoji$Input](../type-aliases/getAnimatedEmoji$Input.md)

#### Returns

`Promise`\<[`animatedEmoji`](../type-aliases/animatedEmoji.md)\>

Promise<[AnimatedEmoji](../type-aliases/AnimatedEmoji-1.md)>

#### Defined in

dist/generated/types.d.ts:72899

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

dist/generated/types.d.ts:74605

***

### getApplicationDownloadLink()

> **getApplicationDownloadLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns the link for downloading official Telegram application to be used when the current user invites friends to Telegram

#### Parameters

• **parameters**: [`getApplicationDownloadLink$DirectInput`](../type-aliases/getApplicationDownloadLink$DirectInput.md)

[getApplicationDownloadLink$Input](../type-aliases/getApplicationDownloadLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:74619

***

### getArchiveChatListSettings()

> **getArchiveChatListSettings**(`parameters`): `Promise`\<[`archiveChatListSettings`](../type-aliases/archiveChatListSettings.md)\>

Returns settings for automatic moving of chats to and from the Archive chat lists

#### Parameters

• **parameters**: [`getArchiveChatListSettings$DirectInput`](../type-aliases/getArchiveChatListSettings$DirectInput.md)

[getArchiveChatListSettings$Input](../type-aliases/getArchiveChatListSettings$Input.md)

#### Returns

`Promise`\<[`archiveChatListSettings`](../type-aliases/archiveChatListSettings.md)\>

Promise<[ArchiveChatListSettings](../type-aliases/ArchiveChatListSettings-1.md)>

#### Defined in

dist/generated/types.d.ts:71344

***

### getArchivedStickerSets()

> **getArchivedStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Returns a list of archived sticker sets

#### Parameters

• **parameters**: [`getArchivedStickerSets$DirectInput`](../type-aliases/getArchivedStickerSets$DirectInput.md)

[getArchivedStickerSets$Input](../type-aliases/getArchivedStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Promise<[StickerSets](../type-aliases/StickerSets-1.md)>

#### Defined in

dist/generated/types.d.ts:72748

***

### getAttachedStickerSets()

> **getAttachedStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Returns a list of sticker sets attached to a file, including regular, mask, and emoji sticker sets. Currently, only animations, photos, and videos can have attached sticker sets

#### Parameters

• **parameters**: [`getAttachedStickerSets$DirectInput`](../type-aliases/getAttachedStickerSets$DirectInput.md)

[getAttachedStickerSets$Input](../type-aliases/getAttachedStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Promise<[StickerSets](../type-aliases/StickerSets-1.md)>

#### Defined in

dist/generated/types.d.ts:72762

***

### getAttachmentMenuBot()

> **getAttachmentMenuBot**(`parameters`): `Promise`\<[`attachmentMenuBot`](../type-aliases/attachmentMenuBot.md)\>

Returns information about a bot that can be added to attachment or side menu

#### Parameters

• **parameters**: [`getAttachmentMenuBot$DirectInput`](../type-aliases/getAttachmentMenuBot$DirectInput.md)

[getAttachmentMenuBot$Input](../type-aliases/getAttachmentMenuBot$Input.md)

#### Returns

`Promise`\<[`attachmentMenuBot`](../type-aliases/attachmentMenuBot.md)\>

Promise<[AttachmentMenuBot](../type-aliases/AttachmentMenuBot-1.md)>

#### Defined in

dist/generated/types.d.ts:71978

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

dist/generated/types.d.ts:69243

***

### getAutoDownloadSettingsPresets()

> **getAutoDownloadSettingsPresets**(`parameters`): `Promise`\<[`autoDownloadSettingsPresets`](../type-aliases/autoDownloadSettingsPresets.md)\>

Returns auto-download settings presets for the current user

#### Parameters

• **parameters**: [`getAutoDownloadSettingsPresets$DirectInput`](../type-aliases/getAutoDownloadSettingsPresets$DirectInput.md)

[getAutoDownloadSettingsPresets$Input](../type-aliases/getAutoDownloadSettingsPresets$Input.md)

#### Returns

`Promise`\<[`autoDownloadSettingsPresets`](../type-aliases/autoDownloadSettingsPresets.md)\>

Promise<[AutoDownloadSettingsPresets](../type-aliases/AutoDownloadSettingsPresets-1.md)>

#### Defined in

dist/generated/types.d.ts:74129

***

### getAutosaveSettings()

> **getAutosaveSettings**(`parameters`): `Promise`\<[`autosaveSettings`](../type-aliases/autosaveSettings.md)\>

Returns autosave settings for the current user

#### Parameters

• **parameters**: [`getAutosaveSettings$DirectInput`](../type-aliases/getAutosaveSettings$DirectInput.md)

[getAutosaveSettings$Input](../type-aliases/getAutosaveSettings$Input.md)

#### Returns

`Promise`\<[`autosaveSettings`](../type-aliases/autosaveSettings.md)\>

Promise<[AutosaveSettings](../type-aliases/AutosaveSettings-1.md)>

#### Defined in

dist/generated/types.d.ts:74143

***

### getAvailableChatBoostSlots()

> **getAvailableChatBoostSlots**(`parameters`): `Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots.md)\>

Returns the list of available chat boost slots for the current user

#### Parameters

• **parameters**: [`getAvailableChatBoostSlots$DirectInput`](../type-aliases/getAvailableChatBoostSlots$DirectInput.md)

[getAvailableChatBoostSlots$Input](../type-aliases/getAvailableChatBoostSlots$Input.md)

#### Returns

`Promise`\<[`chatBoostSlots`](../type-aliases/chatBoostSlots.md)\>

Promise<[ChatBoostSlots](../type-aliases/ChatBoostSlots-1.md)>

#### Defined in

dist/generated/types.d.ts:71929

***

### getBackgroundUrl()

> **getBackgroundUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Constructs a persistent HTTP URL for a background

#### Parameters

• **parameters**: [`getBackgroundUrl$DirectInput`](../type-aliases/getBackgroundUrl$DirectInput.md)

[getBackgroundUrl$Input](../type-aliases/getBackgroundUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:73722

***

### getBankCardInfo()

> **getBankCardInfo**(`parameters`): `Promise`\<[`bankCardInfo`](../type-aliases/bankCardInfo.md)\>

Returns information about a bank card

#### Parameters

• **parameters**: [`getBankCardInfo$DirectInput`](../type-aliases/getBankCardInfo$DirectInput.md)

[getBankCardInfo$Input](../type-aliases/getBankCardInfo$Input.md)

#### Returns

`Promise`\<[`bankCardInfo`](../type-aliases/bankCardInfo.md)\>

Promise<[BankCardInfo](../type-aliases/BankCardInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74164

***

### getBasicGroup()

> **getBasicGroup**(`parameters`): `Promise`\<[`basicGroup`](../type-aliases/basicGroup.md)\>

Returns information about a basic group by its identifier. This is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getBasicGroup$DirectInput`](../type-aliases/getBasicGroup$DirectInput.md)

[getBasicGroup$Input](../type-aliases/getBasicGroup$Input.md)

#### Returns

`Promise`\<[`basicGroup`](../type-aliases/basicGroup.md)\>

Promise<[BasicGroup](../type-aliases/BasicGroup-1.md)>

#### Defined in

dist/generated/types.d.ts:69558

***

### getBasicGroupFullInfo()

> **getBasicGroupFullInfo**(`parameters`): `Promise`\<[`basicGroupFullInfo`](../type-aliases/basicGroupFullInfo.md)\>

Returns full information about a basic group by its identifier

#### Parameters

• **parameters**: [`getBasicGroupFullInfo$DirectInput`](../type-aliases/getBasicGroupFullInfo$DirectInput.md)

[getBasicGroupFullInfo$Input](../type-aliases/getBasicGroupFullInfo$Input.md)

#### Returns

`Promise`\<[`basicGroupFullInfo`](../type-aliases/basicGroupFullInfo.md)\>

Promise<[BasicGroupFullInfo](../type-aliases/BasicGroupFullInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:69565

***

### getBlockedMessageSenders()

> **getBlockedMessageSenders**(`parameters`): `Promise`\<[`messageSenders`](../type-aliases/messageSenders.md)\>

Returns users and chats that were blocked by the current user

#### Parameters

• **parameters**: [`getBlockedMessageSenders$DirectInput`](../type-aliases/getBlockedMessageSenders$DirectInput.md)

[getBlockedMessageSenders$Input](../type-aliases/getBlockedMessageSenders$Input.md)

#### Returns

`Promise`\<[`messageSenders`](../type-aliases/messageSenders.md)\>

Promise<[MessageSenders](../type-aliases/MessageSenders-1.md)>

#### Defined in

dist/generated/types.d.ts:72592

***

### getBotInfoDescription()

> **getBotInfoDescription**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns the text shown in the chat with a bot if the chat is empty in the given language. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`getBotInfoDescription$DirectInput`](../type-aliases/getBotInfoDescription$DirectInput.md)

[getBotInfoDescription$Input](../type-aliases/getBotInfoDescription$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:73405

***

### getBotInfoShortDescription()

> **getBotInfoShortDescription**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns the text shown on a bot's profile page and sent together with the link when users share the bot in the given language. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`getBotInfoShortDescription$DirectInput`](../type-aliases/getBotInfoShortDescription$DirectInput.md)

[getBotInfoShortDescription$Input](../type-aliases/getBotInfoShortDescription$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:73419

***

### getBotMediaPreviewInfo()

> **getBotMediaPreviewInfo**(`parameters`): `Promise`\<[`botMediaPreviewInfo`](../type-aliases/botMediaPreviewInfo.md)\>

Returns the list of media previews for the given language and the list of languages for which the bot has dedicated previews

#### Parameters

• **parameters**: [`getBotMediaPreviewInfo$DirectInput`](../type-aliases/getBotMediaPreviewInfo$DirectInput.md)

[getBotMediaPreviewInfo$Input](../type-aliases/getBotMediaPreviewInfo$Input.md)

#### Returns

`Promise`\<[`botMediaPreviewInfo`](../type-aliases/botMediaPreviewInfo.md)\>

Promise<[BotMediaPreviewInfo](../type-aliases/BotMediaPreviewInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73328

***

### getBotMediaPreviews()

> **getBotMediaPreviews**(`parameters`): `Promise`\<[`botMediaPreviews`](../type-aliases/botMediaPreviews.md)\>

Returns the list of media previews of a bot

#### Parameters

• **parameters**: [`getBotMediaPreviews$DirectInput`](../type-aliases/getBotMediaPreviews$DirectInput.md)

[getBotMediaPreviews$Input](../type-aliases/getBotMediaPreviews$Input.md)

#### Returns

`Promise`\<[`botMediaPreviews`](../type-aliases/botMediaPreviews.md)\>

Promise<[BotMediaPreviews](../type-aliases/BotMediaPreviews-1.md)>

#### Defined in

dist/generated/types.d.ts:73321

***

### getBotName()

> **getBotName**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns the name of a bot in the given language. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`getBotName$DirectInput`](../type-aliases/getBotName$DirectInput.md)

[getBotName$Input](../type-aliases/getBotName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:73370

***

### getBusinessChatLinkInfo()

> **getBusinessChatLinkInfo**(`parameters`): `Promise`\<[`businessChatLinkInfo`](../type-aliases/businessChatLinkInfo.md)\>

Returns information about a business chat link

#### Parameters

• **parameters**: [`getBusinessChatLinkInfo$DirectInput`](../type-aliases/getBusinessChatLinkInfo$DirectInput.md)

[getBusinessChatLinkInfo$Input](../type-aliases/getBusinessChatLinkInfo$Input.md)

#### Returns

`Promise`\<[`businessChatLinkInfo`](../type-aliases/businessChatLinkInfo.md)\>

Promise<[BusinessChatLinkInfo](../type-aliases/BusinessChatLinkInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73230

***

### getBusinessChatLinks()

> **getBusinessChatLinks**(`parameters`): `Promise`\<[`businessChatLinks`](../type-aliases/businessChatLinks.md)\>

Returns business chat links created for the current account

#### Parameters

• **parameters**: [`getBusinessChatLinks$DirectInput`](../type-aliases/getBusinessChatLinks$DirectInput.md)

[getBusinessChatLinks$Input](../type-aliases/getBusinessChatLinks$Input.md)

#### Returns

`Promise`\<[`businessChatLinks`](../type-aliases/businessChatLinks.md)\>

Promise<[BusinessChatLinks](../type-aliases/BusinessChatLinks-1.md)>

#### Defined in

dist/generated/types.d.ts:73202

***

### getBusinessConnectedBot()

> **getBusinessConnectedBot**(`parameters`): `Promise`\<[`businessConnectedBot`](../type-aliases/businessConnectedBot.md)\>

Returns the business bot that is connected to the current user account. Returns a 404 error if there is no connected bot

#### Parameters

• **parameters**: [`getBusinessConnectedBot$DirectInput`](../type-aliases/getBusinessConnectedBot$DirectInput.md)

[getBusinessConnectedBot$Input](../type-aliases/getBusinessConnectedBot$Input.md)

#### Returns

`Promise`\<[`businessConnectedBot`](../type-aliases/businessConnectedBot.md)\>

Promise<[BusinessConnectedBot](../type-aliases/BusinessConnectedBot-1.md)>

#### Defined in

dist/generated/types.d.ts:73167

***

### getBusinessConnection()

> **getBusinessConnection**(`parameters`): `Promise`\<[`businessConnection`](../type-aliases/businessConnection.md)\>

Returns information about a business connection by its identifier; for bots only

#### Parameters

• **parameters**: [`getBusinessConnection$DirectInput`](../type-aliases/getBusinessConnection$DirectInput.md)

[getBusinessConnection$Input](../type-aliases/getBusinessConnection$Input.md)

#### Returns

`Promise`\<[`businessConnection`](../type-aliases/businessConnection.md)\>

Promise<[BusinessConnection](../type-aliases/BusinessConnection-1.md)>

#### Defined in

dist/generated/types.d.ts:70860

***

### getBusinessFeatures()

> **getBusinessFeatures**(`parameters`): `Promise`\<[`businessFeatures`](../type-aliases/businessFeatures.md)\>

Returns information about features, available to Business users

#### Parameters

• **parameters**: [`getBusinessFeatures$DirectInput`](../type-aliases/getBusinessFeatures$DirectInput.md)

[getBusinessFeatures$Input](../type-aliases/getBusinessFeatures$Input.md)

#### Returns

`Promise`\<[`businessFeatures`](../type-aliases/businessFeatures.md)\>

Promise<[BusinessFeatures](../type-aliases/BusinessFeatures-1.md)>

#### Defined in

dist/generated/types.d.ts:74521

***

### getCallbackQueryAnswer()

> **getCallbackQueryAnswer**(`parameters`): `Promise`\<[`callbackQueryAnswer`](../type-aliases/callbackQueryAnswer.md)\>

Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires

#### Parameters

• **parameters**: [`getCallbackQueryAnswer$DirectInput`](../type-aliases/getCallbackQueryAnswer$DirectInput.md)

[getCallbackQueryAnswer$Input](../type-aliases/getCallbackQueryAnswer$Input.md)

#### Returns

`Promise`\<[`callbackQueryAnswer`](../type-aliases/callbackQueryAnswer.md)\>

Promise<[CallbackQueryAnswer](../type-aliases/CallbackQueryAnswer-1.md)>

#### Defined in

dist/generated/types.d.ts:70976

***

### getCallbackQueryMessage()

> **getCallbackQueryMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Returns information about a message with the callback button that originated a callback query; for bots only

#### Parameters

• **parameters**: [`getCallbackQueryMessage$DirectInput`](../type-aliases/getCallbackQueryMessage$DirectInput.md)

[getCallbackQueryMessage$Input](../type-aliases/getCallbackQueryMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:69632

***

### getChat()

> **getChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Returns information about a chat by its identifier; this is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getChat$DirectInput`](../type-aliases/getChat$DirectInput.md)

[getChat$Input](../type-aliases/getChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:69593

***

### getChatActiveStories()

> **getChatActiveStories**(`parameters`): `Promise`\<[`chatActiveStories`](../type-aliases/chatActiveStories.md)\>

Returns the list of active stories posted by the given chat

#### Parameters

• **parameters**: [`getChatActiveStories$DirectInput`](../type-aliases/getChatActiveStories$DirectInput.md)

[getChatActiveStories$Input](../type-aliases/getChatActiveStories$Input.md)

#### Returns

`Promise`\<[`chatActiveStories`](../type-aliases/chatActiveStories.md)\>

Promise<[ChatActiveStories](../type-aliases/ChatActiveStories-1.md)>

#### Defined in

dist/generated/types.d.ts:71816

***

### getChatAdministrators()

> **getChatAdministrators**(`parameters`): `Promise`\<[`chatAdministrators`](../type-aliases/chatAdministrators.md)\>

Returns a list of administrators of the chat with their custom titles

#### Parameters

• **parameters**: [`getChatAdministrators$DirectInput`](../type-aliases/getChatAdministrators$DirectInput.md)

[getChatAdministrators$Input](../type-aliases/getChatAdministrators$Input.md)

#### Returns

`Promise`\<[`chatAdministrators`](../type-aliases/chatAdministrators.md)\>

Promise<[ChatAdministrators](../type-aliases/ChatAdministrators-1.md)>

#### Defined in

dist/generated/types.d.ts:71625

***

### getChatArchivedStories()

> **getChatArchivedStories**(`parameters`): `Promise`\<[`stories`](../type-aliases/stories.md)\>

Returns the list of all stories posted by the given chat; requires can_edit_stories right in the chat.

- The stories are returned in reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

#### Parameters

• **parameters**: [`getChatArchivedStories$DirectInput`](../type-aliases/getChatArchivedStories$DirectInput.md)

[getChatArchivedStories$Input](../type-aliases/getChatArchivedStories$Input.md)

#### Returns

`Promise`\<[`stories`](../type-aliases/stories.md)\>

Promise<[Stories](../type-aliases/Stories-1.md)>

#### Defined in

dist/generated/types.d.ts:71834

***

### getChatAvailableMessageSenders()

> **getChatAvailableMessageSenders**(`parameters`): `Promise`\<[`chatMessageSenders`](../type-aliases/chatMessageSenders.md)\>

Returns the list of message sender identifiers, which can be used to send messages in a chat

#### Parameters

• **parameters**: [`getChatAvailableMessageSenders$DirectInput`](../type-aliases/getChatAvailableMessageSenders$DirectInput.md)

[getChatAvailableMessageSenders$Input](../type-aliases/getChatAvailableMessageSenders$Input.md)

#### Returns

`Promise`\<[`chatMessageSenders`](../type-aliases/chatMessageSenders.md)\>

Promise<[ChatMessageSenders](../type-aliases/ChatMessageSenders-1.md)>

#### Defined in

dist/generated/types.d.ts:70197

***

### getChatBoostFeatures()

> **getChatBoostFeatures**(`parameters`): `Promise`\<[`chatBoostFeatures`](../type-aliases/chatBoostFeatures.md)\>

Returns the list of features available for different chat boost levels; this is an offline request

#### Parameters

• **parameters**: [`getChatBoostFeatures$DirectInput`](../type-aliases/getChatBoostFeatures$DirectInput.md)

[getChatBoostFeatures$Input](../type-aliases/getChatBoostFeatures$Input.md)

#### Returns

`Promise`\<[`chatBoostFeatures`](../type-aliases/chatBoostFeatures.md)\>

Promise<[ChatBoostFeatures](../type-aliases/ChatBoostFeatures-1.md)>

#### Defined in

dist/generated/types.d.ts:71922

***

### getChatBoostLevelFeatures()

> **getChatBoostLevelFeatures**(`parameters`): `Promise`\<[`chatBoostLevelFeatures`](../type-aliases/chatBoostLevelFeatures.md)\>

Returns the list of features available on the specific chat boost level; this is an offline request

#### Parameters

• **parameters**: [`getChatBoostLevelFeatures$DirectInput`](../type-aliases/getChatBoostLevelFeatures$DirectInput.md)

[getChatBoostLevelFeatures$Input](../type-aliases/getChatBoostLevelFeatures$Input.md)

#### Returns

`Promise`\<[`chatBoostLevelFeatures`](../type-aliases/chatBoostLevelFeatures.md)\>

Promise<[ChatBoostLevelFeatures](../type-aliases/ChatBoostLevelFeatures-1.md)>

#### Defined in

dist/generated/types.d.ts:71915

***

### getChatBoostLink()

> **getChatBoostLink**(`parameters`): `Promise`\<[`chatBoostLink`](../type-aliases/chatBoostLink.md)\>

Returns an HTTPS link to boost the specified supergroup or channel chat

#### Parameters

• **parameters**: [`getChatBoostLink$DirectInput`](../type-aliases/getChatBoostLink$DirectInput.md)

[getChatBoostLink$Input](../type-aliases/getChatBoostLink$Input.md)

#### Returns

`Promise`\<[`chatBoostLink`](../type-aliases/chatBoostLink.md)\>

Promise<[ChatBoostLink](../type-aliases/ChatBoostLink-1.md)>

#### Defined in

dist/generated/types.d.ts:71950

***

### getChatBoostLinkInfo()

> **getChatBoostLinkInfo**(`parameters`): `Promise`\<[`chatBoostLinkInfo`](../type-aliases/chatBoostLinkInfo.md)\>

Returns information about a link to boost a chat. Can be called for any internal link of the type internalLinkTypeChatBoost

#### Parameters

• **parameters**: [`getChatBoostLinkInfo$DirectInput`](../type-aliases/getChatBoostLinkInfo$DirectInput.md)

[getChatBoostLinkInfo$Input](../type-aliases/getChatBoostLinkInfo$Input.md)

#### Returns

`Promise`\<[`chatBoostLinkInfo`](../type-aliases/chatBoostLinkInfo.md)\>

Promise<[ChatBoostLinkInfo](../type-aliases/ChatBoostLinkInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:71957

***

### getChatBoosts()

> **getChatBoosts**(`parameters`): `Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts.md)\>

Returns the list of boosts applied to a chat; requires administrator rights in the chat

#### Parameters

• **parameters**: [`getChatBoosts$DirectInput`](../type-aliases/getChatBoosts$DirectInput.md)

[getChatBoosts$Input](../type-aliases/getChatBoosts$Input.md)

#### Returns

`Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts.md)\>

Promise<[FoundChatBoosts](../type-aliases/FoundChatBoosts-1.md)>

#### Defined in

dist/generated/types.d.ts:71964

***

### getChatBoostStatus()

> **getChatBoostStatus**(`parameters`): `Promise`\<[`chatBoostStatus`](../type-aliases/chatBoostStatus.md)\>

Returns the current boost status for a supergroup or a channel chat

#### Parameters

• **parameters**: [`getChatBoostStatus$DirectInput`](../type-aliases/getChatBoostStatus$DirectInput.md)

[getChatBoostStatus$Input](../type-aliases/getChatBoostStatus$Input.md)

#### Returns

`Promise`\<[`chatBoostStatus`](../type-aliases/chatBoostStatus.md)\>

Promise<[ChatBoostStatus](../type-aliases/ChatBoostStatus-1.md)>

#### Defined in

dist/generated/types.d.ts:71936

***

### getChatEventLog()

> **getChatEventLog**(`parameters`): `Promise`\<[`chatEvents`](../type-aliases/chatEvents.md)\>

Returns a list of service actions taken by chat members and administrators in the last 48 hours. Available only for supergroups and channels. Requires administrator rights. Returns results in reverse chronological order (i.e., in order of decreasing event_id)

#### Parameters

• **parameters**: [`getChatEventLog$DirectInput`](../type-aliases/getChatEventLog$DirectInput.md)

[getChatEventLog$Input](../type-aliases/getChatEventLog$Input.md)

#### Returns

`Promise`\<[`chatEvents`](../type-aliases/chatEvents.md)\>

Promise<[ChatEvents](../type-aliases/ChatEvents-1.md)>

#### Defined in

dist/generated/types.d.ts:73638

***

### getChatFolder()

> **getChatFolder**(`parameters`): `Promise`\<[`chatFolder`](../type-aliases/chatFolder.md)\>

Returns information about a chat folder by its identifier

#### Parameters

• **parameters**: [`getChatFolder$DirectInput`](../type-aliases/getChatFolder$DirectInput.md)

[getChatFolder$Input](../type-aliases/getChatFolder$Input.md)

#### Returns

`Promise`\<[`chatFolder`](../type-aliases/chatFolder.md)\>

Promise<[ChatFolder](../type-aliases/ChatFolder-1.md)>

#### Defined in

dist/generated/types.d.ts:71211

***

### getChatFolderChatCount()

> **getChatFolderChatCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count.md)\>

Returns approximate number of chats in a being created chat folder. Main and archive chat lists must be fully preloaded for this function to work correctly

#### Parameters

• **parameters**: [`getChatFolderChatCount$DirectInput`](../type-aliases/getChatFolderChatCount$DirectInput.md)

[getChatFolderChatCount$Input](../type-aliases/getChatFolderChatCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count.md)\>

Promise<[Count](../type-aliases/Count-1.md)>

#### Defined in

dist/generated/types.d.ts:71246

***

### getChatFolderChatsToLeave()

> **getChatFolderChatsToLeave**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns identifiers of pinned or always included chats from a chat folder, which are suggested to be left when the chat folder is deleted

#### Parameters

• **parameters**: [`getChatFolderChatsToLeave$DirectInput`](../type-aliases/getChatFolderChatsToLeave$DirectInput.md)

[getChatFolderChatsToLeave$Input](../type-aliases/getChatFolderChatsToLeave$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:71239

***

### getChatFolderDefaultIconName()

> **getChatFolderDefaultIconName**(`parameters`): `Promise`\<[`chatFolderIcon`](../type-aliases/chatFolderIcon.md)\>

Returns default icon name for a folder. Can be called synchronously

#### Parameters

• **parameters**: [`getChatFolderDefaultIconName$DirectInput`](../type-aliases/getChatFolderDefaultIconName$DirectInput.md)

[getChatFolderDefaultIconName$Input](../type-aliases/getChatFolderDefaultIconName$Input.md)

#### Returns

`Promise`\<[`chatFolderIcon`](../type-aliases/chatFolderIcon.md)\>

Promise<[ChatFolderIcon](../type-aliases/ChatFolderIcon-1.md)>

#### Defined in

dist/generated/types.d.ts:71274

***

### getChatFolderInviteLinks()

> **getChatFolderInviteLinks**(`parameters`): `Promise`\<[`chatFolderInviteLinks`](../type-aliases/chatFolderInviteLinks.md)\>

Returns invite links created by the current user for a shareable chat folder

#### Parameters

• **parameters**: [`getChatFolderInviteLinks$DirectInput`](../type-aliases/getChatFolderInviteLinks$DirectInput.md)

[getChatFolderInviteLinks$Input](../type-aliases/getChatFolderInviteLinks$Input.md)

#### Returns

`Promise`\<[`chatFolderInviteLinks`](../type-aliases/chatFolderInviteLinks.md)\>

Promise<[ChatFolderInviteLinks](../type-aliases/ChatFolderInviteLinks-1.md)>

#### Defined in

dist/generated/types.d.ts:71295

***

### getChatFolderNewChats()

> **getChatFolderNewChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns new chats added to a shareable chat folder by its owner. The method must be called at most once in getOption("chat_folder_new_chats_update_period") for the given chat folder

#### Parameters

• **parameters**: [`getChatFolderNewChats$DirectInput`](../type-aliases/getChatFolderNewChats$DirectInput.md)

[getChatFolderNewChats$Input](../type-aliases/getChatFolderNewChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:71330

***

### getChatHistory()

> **getChatHistory**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Returns messages in a chat. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id).

- For optimal performance, the number of returned messages is chosen by TDLib. This is an offline request if only_local is true

#### Parameters

• **parameters**: [`getChatHistory$DirectInput`](../type-aliases/getChatHistory$DirectInput.md)

[getChatHistory$Input](../type-aliases/getChatHistory$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:69922

***

### getChatInviteLink()

> **getChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Returns information about an invite link. Requires administrator privileges and can_invite_users right in the chat to get own links and owner privileges to get other links

#### Parameters

• **parameters**: [`getChatInviteLink$DirectInput`](../type-aliases/getChatInviteLink$DirectInput.md)

[getChatInviteLink$Input](../type-aliases/getChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:72233

***

### getChatInviteLinkCounts()

> **getChatInviteLinkCounts**(`parameters`): `Promise`\<[`chatInviteLinkCounts`](../type-aliases/chatInviteLinkCounts.md)\>

Returns the list of chat administrators with number of their invite links. Requires owner privileges in the chat

#### Parameters

• **parameters**: [`getChatInviteLinkCounts$DirectInput`](../type-aliases/getChatInviteLinkCounts$DirectInput.md)

[getChatInviteLinkCounts$Input](../type-aliases/getChatInviteLinkCounts$Input.md)

#### Returns

`Promise`\<[`chatInviteLinkCounts`](../type-aliases/chatInviteLinkCounts.md)\>

Promise<[ChatInviteLinkCounts](../type-aliases/ChatInviteLinkCounts-1.md)>

#### Defined in

dist/generated/types.d.ts:72240

***

### getChatInviteLinkMembers()

> **getChatInviteLinkMembers**(`parameters`): `Promise`\<[`chatInviteLinkMembers`](../type-aliases/chatInviteLinkMembers.md)\>

Returns chat members joined a chat via an invite link. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links

#### Parameters

• **parameters**: [`getChatInviteLinkMembers$DirectInput`](../type-aliases/getChatInviteLinkMembers$DirectInput.md)

[getChatInviteLinkMembers$Input](../type-aliases/getChatInviteLinkMembers$Input.md)

#### Returns

`Promise`\<[`chatInviteLinkMembers`](../type-aliases/chatInviteLinkMembers.md)\>

Promise<[ChatInviteLinkMembers](../type-aliases/ChatInviteLinkMembers-1.md)>

#### Defined in

dist/generated/types.d.ts:72254

***

### getChatInviteLinks()

> **getChatInviteLinks**(`parameters`): `Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks.md)\>

Returns invite links for a chat created by specified administrator. Requires administrator privileges and can_invite_users right in the chat to get own links and owner privileges to get other links

#### Parameters

• **parameters**: [`getChatInviteLinks$DirectInput`](../type-aliases/getChatInviteLinks$DirectInput.md)

[getChatInviteLinks$Input](../type-aliases/getChatInviteLinks$Input.md)

#### Returns

`Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks.md)\>

Promise<[ChatInviteLinks](../type-aliases/ChatInviteLinks-1.md)>

#### Defined in

dist/generated/types.d.ts:72247

***

### getChatJoinRequests()

> **getChatJoinRequests**(`parameters`): `Promise`\<[`chatJoinRequests`](../type-aliases/chatJoinRequests.md)\>

Returns pending join requests in a chat

#### Parameters

• **parameters**: [`getChatJoinRequests$DirectInput`](../type-aliases/getChatJoinRequests$DirectInput.md)

[getChatJoinRequests$Input](../type-aliases/getChatJoinRequests$Input.md)

#### Returns

`Promise`\<[`chatJoinRequests`](../type-aliases/chatJoinRequests.md)\>

Promise<[ChatJoinRequests](../type-aliases/ChatJoinRequests-1.md)>

#### Defined in

dist/generated/types.d.ts:72298

***

### getChatListsToAddChat()

> **getChatListsToAddChat**(`parameters`): `Promise`\<[`chatLists`](../type-aliases/chatLists.md)\>

Returns chat lists to which the chat can be added. This is an offline request

#### Parameters

• **parameters**: [`getChatListsToAddChat$DirectInput`](../type-aliases/getChatListsToAddChat$DirectInput.md)

[getChatListsToAddChat$Input](../type-aliases/getChatListsToAddChat$Input.md)

#### Returns

`Promise`\<[`chatLists`](../type-aliases/chatLists.md)\>

Promise<[ChatLists](../type-aliases/ChatLists-1.md)>

#### Defined in

dist/generated/types.d.ts:71197

***

### getChatMember()

> **getChatMember**(`parameters`): `Promise`\<[`chatMember`](../type-aliases/chatMember.md)\>

Returns information about a single member of a chat

#### Parameters

• **parameters**: [`getChatMember$DirectInput`](../type-aliases/getChatMember$DirectInput.md)

[getChatMember$Input](../type-aliases/getChatMember$Input.md)

#### Returns

`Promise`\<[`chatMember`](../type-aliases/chatMember.md)\>

Promise<[ChatMember](../type-aliases/ChatMember-1.md)>

#### Defined in

dist/generated/types.d.ts:71611

***

### getChatMessageByDate()

> **getChatMessageByDate**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Returns the last message sent in a chat no later than the specified date

#### Parameters

• **parameters**: [`getChatMessageByDate$DirectInput`](../type-aliases/getChatMessageByDate$DirectInput.md)

[getChatMessageByDate$Input](../type-aliases/getChatMessageByDate$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70069

***

### getChatMessageCalendar()

> **getChatMessageCalendar**(`parameters`): `Promise`\<[`messageCalendar`](../type-aliases/messageCalendar.md)\>

Returns information about the next messages of the specified type in the chat split by days. Returns the results in reverse chronological order. Can return partial result for the last returned day. Behavior of this method depends on the value of the option "utc_time_offset"

#### Parameters

• **parameters**: [`getChatMessageCalendar$DirectInput`](../type-aliases/getChatMessageCalendar$DirectInput.md)

[getChatMessageCalendar$Input](../type-aliases/getChatMessageCalendar$Input.md)

#### Returns

`Promise`\<[`messageCalendar`](../type-aliases/messageCalendar.md)\>

Promise<[MessageCalendar](../type-aliases/MessageCalendar-1.md)>

#### Defined in

dist/generated/types.d.ts:70085

***

### getChatMessageCount()

> **getChatMessageCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count.md)\>

Returns approximate number of messages of the specified type in the chat

#### Parameters

• **parameters**: [`getChatMessageCount$DirectInput`](../type-aliases/getChatMessageCount$DirectInput.md)

[getChatMessageCount$Input](../type-aliases/getChatMessageCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count.md)\>

Promise<[Count](../type-aliases/Count-1.md)>

#### Defined in

dist/generated/types.d.ts:70092

***

### getChatMessagePosition()

> **getChatMessagePosition**(`parameters`): `Promise`\<[`count`](../type-aliases/count.md)\>

Returns approximate 1-based position of a message among messages, which can be found by the specified filter in the chat. Cannot be used in secret chats

#### Parameters

• **parameters**: [`getChatMessagePosition$DirectInput`](../type-aliases/getChatMessagePosition$DirectInput.md)

[getChatMessagePosition$Input](../type-aliases/getChatMessagePosition$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count.md)\>

Promise<[Count](../type-aliases/Count-1.md)>

#### Defined in

dist/generated/types.d.ts:70099

***

### getChatNotificationSettingsExceptions()

> **getChatNotificationSettingsExceptions**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns the list of chats with non-default notification settings for new messages

#### Parameters

• **parameters**: [`getChatNotificationSettingsExceptions$DirectInput`](../type-aliases/getChatNotificationSettingsExceptions$DirectInput.md)

[getChatNotificationSettingsExceptions$Input](../type-aliases/getChatNotificationSettingsExceptions$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:71667

***

### getChatPinnedMessage()

> **getChatPinnedMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Returns information about a newest pinned message in the chat

#### Parameters

• **parameters**: [`getChatPinnedMessage$DirectInput`](../type-aliases/getChatPinnedMessage$DirectInput.md)

[getChatPinnedMessage$Input](../type-aliases/getChatPinnedMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:69625

***

### getChatPostedToChatPageStories()

> **getChatPostedToChatPageStories**(`parameters`): `Promise`\<[`stories`](../type-aliases/stories.md)\>

Returns the list of stories that posted by the given chat to its chat page. If from_story_id == 0, then pinned stories are returned first.

- Then, stories are returned in reverse chronological order (i.e., in order of decreasing story_id). For optimal performance, the number of returned stories is chosen by TDLib

#### Parameters

• **parameters**: [`getChatPostedToChatPageStories$DirectInput`](../type-aliases/getChatPostedToChatPageStories$DirectInput.md)

[getChatPostedToChatPageStories$Input](../type-aliases/getChatPostedToChatPageStories$Input.md)

#### Returns

`Promise`\<[`stories`](../type-aliases/stories.md)\>

Promise<[Stories](../type-aliases/Stories-1.md)>

#### Defined in

dist/generated/types.d.ts:71825

***

### getChatRevenueStatistics()

> **getChatRevenueStatistics**(`parameters`): `Promise`\<[`chatRevenueStatistics`](../type-aliases/chatRevenueStatistics.md)\>

Returns detailed revenue statistics about a chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true

#### Parameters

• **parameters**: [`getChatRevenueStatistics$DirectInput`](../type-aliases/getChatRevenueStatistics$DirectInput.md)

[getChatRevenueStatistics$Input](../type-aliases/getChatRevenueStatistics$Input.md)

#### Returns

`Promise`\<[`chatRevenueStatistics`](../type-aliases/chatRevenueStatistics.md)\>

Promise<[ChatRevenueStatistics](../type-aliases/ChatRevenueStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:73994

***

### getChatRevenueTransactions()

> **getChatRevenueTransactions**(`parameters`): `Promise`\<[`chatRevenueTransactions`](../type-aliases/chatRevenueTransactions.md)\>

Returns the list of revenue transactions for a chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true

#### Parameters

• **parameters**: [`getChatRevenueTransactions$DirectInput`](../type-aliases/getChatRevenueTransactions$DirectInput.md)

[getChatRevenueTransactions$Input](../type-aliases/getChatRevenueTransactions$Input.md)

#### Returns

`Promise`\<[`chatRevenueTransactions`](../type-aliases/chatRevenueTransactions.md)\>

Promise<[ChatRevenueTransactions](../type-aliases/ChatRevenueTransactions-1.md)>

#### Defined in

dist/generated/types.d.ts:74008

***

### getChatRevenueWithdrawalUrl()

> **getChatRevenueWithdrawalUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns a URL for chat revenue withdrawal; requires owner privileges in the chat. Currently, this method can be used only for channels if supergroupFullInfo.can_get_revenue_statistics == true and getOption("can_withdraw_chat_revenue")

#### Parameters

• **parameters**: [`getChatRevenueWithdrawalUrl$DirectInput`](../type-aliases/getChatRevenueWithdrawalUrl$DirectInput.md)

[getChatRevenueWithdrawalUrl$Input](../type-aliases/getChatRevenueWithdrawalUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:74001

***

### getChats()

> **getChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns an ordered list of chats from the beginning of a chat list. For informational purposes only. Use loadChats and updates processing instead to maintain chat lists in a consistent state

#### Parameters

• **parameters**: [`getChats$DirectInput`](../type-aliases/getChats$DirectInput.md)

[getChats$Input](../type-aliases/getChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69697

***

### getChatScheduledMessages()

> **getChatScheduledMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Returns all scheduled messages in a chat. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id)

#### Parameters

• **parameters**: [`getChatScheduledMessages$DirectInput`](../type-aliases/getChatScheduledMessages$DirectInput.md)

[getChatScheduledMessages$Input](../type-aliases/getChatScheduledMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:70106

***

### getChatsForChatFolderInviteLink()

> **getChatsForChatFolderInviteLink**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns identifiers of chats from a chat folder, suitable for adding to a chat folder invite link

#### Parameters

• **parameters**: [`getChatsForChatFolderInviteLink$DirectInput`](../type-aliases/getChatsForChatFolderInviteLink$DirectInput.md)

[getChatsForChatFolderInviteLink$Input](../type-aliases/getChatsForChatFolderInviteLink$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:71281

***

### getChatSimilarChatCount()

> **getChatSimilarChatCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count.md)\>

Returns approximate number of chats similar to the given chat

#### Parameters

• **parameters**: [`getChatSimilarChatCount$DirectInput`](../type-aliases/getChatSimilarChatCount$DirectInput.md)

[getChatSimilarChatCount$Input](../type-aliases/getChatSimilarChatCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count.md)\>

Promise<[Count](../type-aliases/Count-1.md)>

#### Defined in

dist/generated/types.d.ts:69757

***

### getChatSimilarChats()

> **getChatSimilarChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of chats similar to the given chat

#### Parameters

• **parameters**: [`getChatSimilarChats$DirectInput`](../type-aliases/getChatSimilarChats$DirectInput.md)

[getChatSimilarChats$Input](../type-aliases/getChatSimilarChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69750

***

### getChatSparseMessagePositions()

> **getChatSparseMessagePositions**(`parameters`): `Promise`\<[`messagePositions`](../type-aliases/messagePositions.md)\>

Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. Returns the results in reverse chronological order (i.e., in order of decreasing message_id).

- Cannot be used in secret chats or with searchMessagesFilterFailedToSend filter without an enabled message database

#### Parameters

• **parameters**: [`getChatSparseMessagePositions$DirectInput`](../type-aliases/getChatSparseMessagePositions$DirectInput.md)

[getChatSparseMessagePositions$Input](../type-aliases/getChatSparseMessagePositions$Input.md)

#### Returns

`Promise`\<[`messagePositions`](../type-aliases/messagePositions.md)\>

Promise<[MessagePositions](../type-aliases/MessagePositions-1.md)>

#### Defined in

dist/generated/types.d.ts:70078

***

### getChatSponsoredMessages()

> **getChatSponsoredMessages**(`parameters`): `Promise`\<[`sponsoredMessages`](../type-aliases/sponsoredMessages.md)\>

Returns sponsored messages to be shown in a chat; for channel chats only

#### Parameters

• **parameters**: [`getChatSponsoredMessages$DirectInput`](../type-aliases/getChatSponsoredMessages$DirectInput.md)

[getChatSponsoredMessages$Input](../type-aliases/getChatSponsoredMessages$Input.md)

#### Returns

`Promise`\<[`sponsoredMessages`](../type-aliases/sponsoredMessages.md)\>

Promise<[SponsoredMessages](../type-aliases/SponsoredMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:70113

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

dist/generated/types.d.ts:74036

***

### getChatStoryInteractions()

> **getChatStoryInteractions**(`parameters`): `Promise`\<[`storyInteractions`](../type-aliases/storyInteractions.md)\>

Returns interactions with a story posted in a chat. Can be used only if story is posted on behalf of a chat and the user is an administrator in the chat

#### Parameters

• **parameters**: [`getChatStoryInteractions$DirectInput`](../type-aliases/getChatStoryInteractions$DirectInput.md)

[getChatStoryInteractions$Input](../type-aliases/getChatStoryInteractions$Input.md)

#### Returns

`Promise`\<[`storyInteractions`](../type-aliases/storyInteractions.md)\>

Promise<[StoryInteractions](../type-aliases/StoryInteractions-1.md)>

#### Defined in

dist/generated/types.d.ts:71883

***

### getChatsToSendStories()

> **getChatsToSendStories**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns supergroup and channel chats in which the current user has the right to post stories. The chats must be rechecked with canSendStory before actually trying to post a story there

#### Parameters

• **parameters**: [`getChatsToSendStories$DirectInput`](../type-aliases/getChatsToSendStories$DirectInput.md)

[getChatsToSendStories$Input](../type-aliases/getChatsToSendStories$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:71737

***

### getCloseFriends()

> **getCloseFriends**(`parameters`): `Promise`\<[`users`](../type-aliases/users.md)\>

Returns all close friends of the current user

#### Parameters

• **parameters**: [`getCloseFriends$DirectInput`](../type-aliases/getCloseFriends$DirectInput.md)

[getCloseFriends$Input](../type-aliases/getCloseFriends$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users.md)\>

Promise<[Users](../type-aliases/Users-1.md)>

#### Defined in

dist/generated/types.d.ts:72664

***

### getCollectibleItemInfo()

> **getCollectibleItemInfo**(`parameters`): `Promise`\<[`collectibleItemInfo`](../type-aliases/collectibleItemInfo.md)\>

Returns information about a given collectible item that was purchased at https://fragment.com

#### Parameters

• **parameters**: [`getCollectibleItemInfo$DirectInput`](../type-aliases/getCollectibleItemInfo$DirectInput.md)

[getCollectibleItemInfo$Input](../type-aliases/getCollectibleItemInfo$Input.md)

#### Returns

`Promise`\<[`collectibleItemInfo`](../type-aliases/collectibleItemInfo.md)\>

Promise<[CollectibleItemInfo](../type-aliases/CollectibleItemInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74591

***

### getCommands()

> **getCommands**(`parameters`): `Promise`\<[`botCommands`](../type-aliases/botCommands.md)\>

Returns the list of commands supported by the bot for the given user scope and language; for bots only

#### Parameters

• **parameters**: [`getCommands$DirectInput`](../type-aliases/getCommands$DirectInput.md)

[getCommands$Input](../type-aliases/getCommands$Input.md)

#### Returns

`Promise`\<[`botCommands`](../type-aliases/botCommands.md)\>

Promise<[BotCommands](../type-aliases/BotCommands-1.md)>

#### Defined in

dist/generated/types.d.ts:73265

***

### getConnectedWebsites()

> **getConnectedWebsites**(`parameters`): `Promise`\<[`connectedWebsites`](../type-aliases/connectedWebsites.md)\>

Returns all website where the current user used Telegram to log in

#### Parameters

• **parameters**: [`getConnectedWebsites$DirectInput`](../type-aliases/getConnectedWebsites$DirectInput.md)

[getConnectedWebsites$Input](../type-aliases/getConnectedWebsites$Input.md)

#### Returns

`Promise`\<[`connectedWebsites`](../type-aliases/connectedWebsites.md)\>

Promise<[ConnectedWebsites](../type-aliases/ConnectedWebsites-1.md)>

#### Defined in

dist/generated/types.d.ts:73475

***

### getContacts()

> **getContacts**(`parameters`): `Promise`\<[`users`](../type-aliases/users.md)\>

Returns all contacts of the user

#### Parameters

• **parameters**: [`getContacts$DirectInput`](../type-aliases/getContacts$DirectInput.md)

[getContacts$Input](../type-aliases/getContacts$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users.md)\>

Promise<[Users](../type-aliases/Users-1.md)>

#### Defined in

dist/generated/types.d.ts:72613

***

### getCountries()

> **getCountries**(`parameters`): `Promise`\<[`countries`](../type-aliases/countries.md)\>

Returns information about existing countries. Can be called before authorization

#### Parameters

• **parameters**: [`getCountries$DirectInput`](../type-aliases/getCountries$DirectInput.md)

[getCountries$Input](../type-aliases/getCountries$Input.md)

#### Returns

`Promise`\<[`countries`](../type-aliases/countries.md)\>

Promise<[Countries](../type-aliases/Countries-1.md)>

#### Defined in

dist/generated/types.d.ts:74563

***

### getCountryCode()

> **getCountryCode**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Uses the current IP address to find the current country. Returns two-letter ISO 3166-1 alpha-2 country code. Can be called before authorization

#### Parameters

• **parameters**: [`getCountryCode$DirectInput`](../type-aliases/getCountryCode$DirectInput.md)

[getCountryCode$Input](../type-aliases/getCountryCode$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:74570

***

### getCountryFlagEmoji()

> **getCountryFlagEmoji**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns an emoji for the given country. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getCountryFlagEmoji$DirectInput`](../type-aliases/getCountryFlagEmoji$DirectInput.md)

[getCountryFlagEmoji$Input](../type-aliases/getCountryFlagEmoji$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:70769

***

### getCreatedPublicChats()

> **getCreatedPublicChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of public chats of the specified type, owned by the user

#### Parameters

• **parameters**: [`getCreatedPublicChats$DirectInput`](../type-aliases/getCreatedPublicChats$DirectInput.md)

[getCreatedPublicChats$Input](../type-aliases/getCreatedPublicChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69827

***

### getCurrentState()

> **getCurrentState**(`parameters`): `Promise`\<[`updates`](../type-aliases/updates.md)\>

Returns all updates needed to restore current TDLib state, i.e. all actual updateAuthorizationState/updateUser/updateNewChat and others. This is especially useful if TDLib is run in a separate process. Can be called before initialization

#### Parameters

• **parameters**: [`getCurrentState$DirectInput`](../type-aliases/getCurrentState$DirectInput.md)

[getCurrentState$Input](../type-aliases/getCurrentState$Input.md)

#### Returns

`Promise`\<[`updates`](../type-aliases/updates.md)\>

Promise<[Updates](../type-aliases/Updates-1.md)>

#### Defined in

dist/generated/types.d.ts:69400

***

### getCurrentWeather()

> **getCurrentWeather**(`parameters`): `Promise`\<[`currentWeather`](../type-aliases/currentWeather.md)\>

Returns the current weather in the given location

#### Parameters

• **parameters**: [`getCurrentWeather$DirectInput`](../type-aliases/getCurrentWeather$DirectInput.md)

[getCurrentWeather$Input](../type-aliases/getCurrentWeather$Input.md)

#### Returns

`Promise`\<[`currentWeather`](../type-aliases/currentWeather.md)\>

Promise<[CurrentWeather](../type-aliases/CurrentWeather-1.md)>

#### Defined in

dist/generated/types.d.ts:71723

***

### getCustomEmojiReactionAnimations()

> **getCustomEmojiReactionAnimations**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns TGS stickers with generic animations for custom emoji reactions

#### Parameters

• **parameters**: [`getCustomEmojiReactionAnimations$DirectInput`](../type-aliases/getCustomEmojiReactionAnimations$DirectInput.md)

[getCustomEmojiReactionAnimations$Input](../type-aliases/getCustomEmojiReactionAnimations$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:70634

***

### getCustomEmojiStickers()

> **getCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns the list of custom emoji stickers by their identifiers. Stickers are returned in arbitrary order. Only found stickers are returned

#### Parameters

• **parameters**: [`getCustomEmojiStickers$DirectInput`](../type-aliases/getCustomEmojiStickers$DirectInput.md)

[getCustomEmojiStickers$Input](../type-aliases/getCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72913

***

### getDatabaseStatistics()

> **getDatabaseStatistics**(`parameters`): `Promise`\<[`databaseStatistics`](../type-aliases/databaseStatistics.md)\>

Returns database statistics

#### Parameters

• **parameters**: [`getDatabaseStatistics$DirectInput`](../type-aliases/getDatabaseStatistics$DirectInput.md)

[getDatabaseStatistics$Input](../type-aliases/getDatabaseStatistics$Input.md)

#### Returns

`Promise`\<[`databaseStatistics`](../type-aliases/databaseStatistics.md)\>

Promise<[DatabaseStatistics](../type-aliases/DatabaseStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:74085

***

### getDeepLinkInfo()

> **getDeepLinkInfo**(`parameters`): `Promise`\<[`deepLinkInfo`](../type-aliases/deepLinkInfo.md)\>

Returns information about a tg:// deep link. Use "tg://need_update_for_some_feature" or "tg:some_unsupported_feature" for testing. Returns a 404 error for unknown links. Can be called before authorization

#### Parameters

• **parameters**: [`getDeepLinkInfo$DirectInput`](../type-aliases/getDeepLinkInfo$DirectInput.md)

[getDeepLinkInfo$Input](../type-aliases/getDeepLinkInfo$Input.md)

#### Returns

`Promise`\<[`deepLinkInfo`](../type-aliases/deepLinkInfo.md)\>

Promise<[DeepLinkInfo](../type-aliases/DeepLinkInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74598

***

### getDefaultBackgroundCustomEmojiStickers()

> **getDefaultBackgroundCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns default list of custom emoji stickers for reply background

#### Parameters

• **parameters**: [`getDefaultBackgroundCustomEmojiStickers$DirectInput`](../type-aliases/getDefaultBackgroundCustomEmojiStickers$DirectInput.md)

[getDefaultBackgroundCustomEmojiStickers$Input](../type-aliases/getDefaultBackgroundCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72934

***

### getDefaultChatEmojiStatuses()

> **getDefaultChatEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Returns default emoji statuses for chats

#### Parameters

• **parameters**: [`getDefaultChatEmojiStatuses$DirectInput`](../type-aliases/getDefaultChatEmojiStatuses$DirectInput.md)

[getDefaultChatEmojiStatuses$Input](../type-aliases/getDefaultChatEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses-1.md)>

#### Defined in

dist/generated/types.d.ts:72027

***

### getDefaultChatPhotoCustomEmojiStickers()

> **getDefaultChatPhotoCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns default list of custom emoji stickers for placing on a chat photo

#### Parameters

• **parameters**: [`getDefaultChatPhotoCustomEmojiStickers$DirectInput`](../type-aliases/getDefaultChatPhotoCustomEmojiStickers$DirectInput.md)

[getDefaultChatPhotoCustomEmojiStickers$Input](../type-aliases/getDefaultChatPhotoCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72920

***

### getDefaultEmojiStatuses()

> **getDefaultEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Returns default emoji statuses for self status

#### Parameters

• **parameters**: [`getDefaultEmojiStatuses$DirectInput`](../type-aliases/getDefaultEmojiStatuses$DirectInput.md)

[getDefaultEmojiStatuses$Input](../type-aliases/getDefaultEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses-1.md)>

#### Defined in

dist/generated/types.d.ts:72006

***

### getDefaultMessageAutoDeleteTime()

> **getDefaultMessageAutoDeleteTime**(`parameters`): `Promise`\<[`messageAutoDeleteTime`](../type-aliases/messageAutoDeleteTime.md)\>

Returns default message auto-delete time setting for new chats

#### Parameters

• **parameters**: [`getDefaultMessageAutoDeleteTime$DirectInput`](../type-aliases/getDefaultMessageAutoDeleteTime$DirectInput.md)

[getDefaultMessageAutoDeleteTime$Input](../type-aliases/getDefaultMessageAutoDeleteTime$Input.md)

#### Returns

`Promise`\<[`messageAutoDeleteTime`](../type-aliases/messageAutoDeleteTime.md)\>

Promise<[MessageAutoDeleteTime](../type-aliases/MessageAutoDeleteTime-1.md)>

#### Defined in

dist/generated/types.d.ts:73959

***

### getDefaultProfilePhotoCustomEmojiStickers()

> **getDefaultProfilePhotoCustomEmojiStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns default list of custom emoji stickers for placing on a profile photo

#### Parameters

• **parameters**: [`getDefaultProfilePhotoCustomEmojiStickers$DirectInput`](../type-aliases/getDefaultProfilePhotoCustomEmojiStickers$DirectInput.md)

[getDefaultProfilePhotoCustomEmojiStickers$Input](../type-aliases/getDefaultProfilePhotoCustomEmojiStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72927

***

### getDisallowedChatEmojiStatuses()

> **getDisallowedChatEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Returns the list of emoji statuses, which can't be used as chat emoji status, even they are from a sticker set with is_allowed_as_chat_emoji_status == true

#### Parameters

• **parameters**: [`getDisallowedChatEmojiStatuses$DirectInput`](../type-aliases/getDisallowedChatEmojiStatuses$DirectInput.md)

[getDisallowedChatEmojiStatuses$Input](../type-aliases/getDisallowedChatEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses-1.md)>

#### Defined in

dist/generated/types.d.ts:72034

***

### getEmojiCategories()

> **getEmojiCategories**(`parameters`): `Promise`\<[`emojiCategories`](../type-aliases/emojiCategories.md)\>

Returns available emoji categories

#### Parameters

• **parameters**: [`getEmojiCategories$DirectInput`](../type-aliases/getEmojiCategories$DirectInput.md)

[getEmojiCategories$Input](../type-aliases/getEmojiCategories$Input.md)

#### Returns

`Promise`\<[`emojiCategories`](../type-aliases/emojiCategories.md)\>

Promise<[EmojiCategories](../type-aliases/EmojiCategories-1.md)>

#### Defined in

dist/generated/types.d.ts:72892

***

### getEmojiReaction()

> **getEmojiReaction**(`parameters`): `Promise`\<[`emojiReaction`](../type-aliases/emojiReaction.md)\>

Returns information about an emoji reaction. Returns a 404 error if the reaction is not found

#### Parameters

• **parameters**: [`getEmojiReaction$DirectInput`](../type-aliases/getEmojiReaction$DirectInput.md)

[getEmojiReaction$Input](../type-aliases/getEmojiReaction$Input.md)

#### Returns

`Promise`\<[`emojiReaction`](../type-aliases/emojiReaction.md)\>

Promise<[EmojiReaction](../type-aliases/EmojiReaction-1.md)>

#### Defined in

dist/generated/types.d.ts:70627

***

### getEmojiSuggestionsUrl()

> **getEmojiSuggestionsUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns an HTTP URL which can be used to automatically log in to the translation platform and suggest new emoji replacements. The URL will be valid for 30 seconds after generation

#### Parameters

• **parameters**: [`getEmojiSuggestionsUrl$DirectInput`](../type-aliases/getEmojiSuggestionsUrl$DirectInput.md)

[getEmojiSuggestionsUrl$Input](../type-aliases/getEmojiSuggestionsUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:72906

***

### getExternalLink()

> **getExternalLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns an HTTP URL which can be used to automatically authorize the current user on a website after clicking an HTTP link. Use the method getExternalLinkInfo to find whether a prior user confirmation is needed

#### Parameters

• **parameters**: [`getExternalLink$DirectInput`](../type-aliases/getExternalLink$DirectInput.md)

[getExternalLink$Input](../type-aliases/getExternalLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:71106

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

dist/generated/types.d.ts:71099

***

### getFavoriteStickers()

> **getFavoriteStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns favorite stickers

#### Parameters

• **parameters**: [`getFavoriteStickers$DirectInput`](../type-aliases/getFavoriteStickers$DirectInput.md)

[getFavoriteStickers$Input](../type-aliases/getFavoriteStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72848

***

### getFile()

> **getFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file.md)\>

Returns information about a file; this is an offline request

#### Parameters

• **parameters**: [`getFile$DirectInput`](../type-aliases/getFile$DirectInput.md)

[getFile$Input](../type-aliases/getFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file.md)\>

Promise<[File](../type-aliases/File-1.md)>

#### Defined in

dist/generated/types.d.ts:69674

***

### getFileDownloadedPrefixSize()

> **getFileDownloadedPrefixSize**(`parameters`): `Promise`\<[`fileDownloadedPrefixSize`](../type-aliases/fileDownloadedPrefixSize.md)\>

Returns file downloaded prefix size from a given offset, in bytes

#### Parameters

• **parameters**: [`getFileDownloadedPrefixSize$DirectInput`](../type-aliases/getFileDownloadedPrefixSize$DirectInput.md)

[getFileDownloadedPrefixSize$Input](../type-aliases/getFileDownloadedPrefixSize$Input.md)

#### Returns

`Promise`\<[`fileDownloadedPrefixSize`](../type-aliases/fileDownloadedPrefixSize.md)\>

Promise<[FileDownloadedPrefixSize](../type-aliases/FileDownloadedPrefixSize-1.md)>

#### Defined in

dist/generated/types.d.ts:72048

***

### getFileExtension()

> **getFileExtension**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getFileExtension$DirectInput`](../type-aliases/getFileExtension$DirectInput.md)

[getFileExtension$Input](../type-aliases/getFileExtension$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:70783

***

### getFileMimeType()

> **getFileMimeType**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getFileMimeType$DirectInput`](../type-aliases/getFileMimeType$DirectInput.md)

[getFileMimeType$Input](../type-aliases/getFileMimeType$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:70776

***

### getForumTopic()

> **getForumTopic**(`parameters`): `Promise`\<[`forumTopic`](../type-aliases/forumTopic.md)\>

Returns information about a forum topic

#### Parameters

• **parameters**: [`getForumTopic$DirectInput`](../type-aliases/getForumTopic$DirectInput.md)

[getForumTopic$Input](../type-aliases/getForumTopic$Input.md)

#### Returns

`Promise`\<[`forumTopic`](../type-aliases/forumTopic.md)\>

Promise<[ForumTopic](../type-aliases/ForumTopic-1.md)>

#### Defined in

dist/generated/types.d.ts:70564

***

### getForumTopicDefaultIcons()

> **getForumTopicDefaultIcons**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns the list of custom emoji, which can be used as forum topic icon by all users

#### Parameters

• **parameters**: [`getForumTopicDefaultIcons$DirectInput`](../type-aliases/getForumTopicDefaultIcons$DirectInput.md)

[getForumTopicDefaultIcons$Input](../type-aliases/getForumTopicDefaultIcons$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:70543

***

### getForumTopicLink()

> **getForumTopicLink**(`parameters`): `Promise`\<[`messageLink`](../type-aliases/messageLink.md)\>

Returns an HTTPS link to a topic in a forum chat. This is an offline request

#### Parameters

• **parameters**: [`getForumTopicLink$DirectInput`](../type-aliases/getForumTopicLink$DirectInput.md)

[getForumTopicLink$Input](../type-aliases/getForumTopicLink$Input.md)

#### Returns

`Promise`\<[`messageLink`](../type-aliases/messageLink.md)\>

Promise<[MessageLink](../type-aliases/MessageLink-1.md)>

#### Defined in

dist/generated/types.d.ts:70571

***

### getForumTopics()

> **getForumTopics**(`parameters`): `Promise`\<[`forumTopics`](../type-aliases/forumTopics.md)\>

Returns found forum topics in a forum chat. This is a temporary method for getting information about topic list from the server

#### Parameters

• **parameters**: [`getForumTopics$DirectInput`](../type-aliases/getForumTopics$DirectInput.md)

[getForumTopics$Input](../type-aliases/getForumTopics$Input.md)

#### Returns

`Promise`\<[`forumTopics`](../type-aliases/forumTopics.md)\>

Promise<[ForumTopics](../type-aliases/ForumTopics-1.md)>

#### Defined in

dist/generated/types.d.ts:70578

***

### getGameHighScores()

> **getGameHighScores**(`parameters`): `Promise`\<[`gameHighScores`](../type-aliases/gameHighScores.md)\>

Returns the high scores for a game and some part of the high score table in the range of the specified user; for bots only

#### Parameters

• **parameters**: [`getGameHighScores$DirectInput`](../type-aliases/getGameHighScores$DirectInput.md)

[getGameHighScores$Input](../type-aliases/getGameHighScores$Input.md)

#### Returns

`Promise`\<[`gameHighScores`](../type-aliases/gameHighScores.md)\>

Promise<[GameHighScores](../type-aliases/GameHighScores-1.md)>

#### Defined in

dist/generated/types.d.ts:71018

***

### getGreetingStickers()

> **getGreetingStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns greeting stickers from regular sticker sets that can be used for the start page of other users

#### Parameters

• **parameters**: [`getGreetingStickers$DirectInput`](../type-aliases/getGreetingStickers$DirectInput.md)

[getGreetingStickers$Input](../type-aliases/getGreetingStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72727

***

### getGroupCall()

> **getGroupCall**(`parameters`): `Promise`\<[`groupCall`](../type-aliases/groupCall.md)\>

Returns information about a group call

#### Parameters

• **parameters**: [`getGroupCall$DirectInput`](../type-aliases/getGroupCall$DirectInput.md)

[getGroupCall$Input](../type-aliases/getGroupCall$Input.md)

#### Returns

`Promise`\<[`groupCall`](../type-aliases/groupCall.md)\>

Promise<[GroupCall](../type-aliases/GroupCall-1.md)>

#### Defined in

dist/generated/types.d.ts:72403

***

### getGroupCallInviteLink()

> **getGroupCallInviteLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns invite link to a video chat in a public chat

#### Parameters

• **parameters**: [`getGroupCallInviteLink$DirectInput`](../type-aliases/getGroupCallInviteLink$DirectInput.md)

[getGroupCallInviteLink$Input](../type-aliases/getGroupCallInviteLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:72473

***

### getGroupCallStreams()

> **getGroupCallStreams**(`parameters`): `Promise`\<[`groupCallStreams`](../type-aliases/groupCallStreams.md)\>

Returns information about available group call streams

#### Parameters

• **parameters**: [`getGroupCallStreams$DirectInput`](../type-aliases/getGroupCallStreams$DirectInput.md)

[getGroupCallStreams$Input](../type-aliases/getGroupCallStreams$Input.md)

#### Returns

`Promise`\<[`groupCallStreams`](../type-aliases/groupCallStreams.md)\>

Promise<[GroupCallStreams](../type-aliases/GroupCallStreams-1.md)>

#### Defined in

dist/generated/types.d.ts:72564

***

### getGroupCallStreamSegment()

> **getGroupCallStreamSegment**(`parameters`): `Promise`\<[`filePart`](../type-aliases/filePart.md)\>

Returns a file with a segment of a group call stream in a modified OGG format for audio or MPEG-4 format for video

#### Parameters

• **parameters**: [`getGroupCallStreamSegment$DirectInput`](../type-aliases/getGroupCallStreamSegment$DirectInput.md)

[getGroupCallStreamSegment$Input](../type-aliases/getGroupCallStreamSegment$Input.md)

#### Returns

`Promise`\<[`filePart`](../type-aliases/filePart.md)\>

Promise<[FilePart](../type-aliases/FilePart-1.md)>

#### Defined in

dist/generated/types.d.ts:72571

***

### getGroupsInCommon()

> **getGroupsInCommon**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of common group chats with a given user. Chats are sorted by their type and creation date

#### Parameters

• **parameters**: [`getGroupsInCommon$DirectInput`](../type-aliases/getGroupsInCommon$DirectInput.md)

[getGroupsInCommon$Input](../type-aliases/getGroupsInCommon$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69913

***

### getImportedContactCount()

> **getImportedContactCount**(`parameters`): `Promise`\<[`count`](../type-aliases/count.md)\>

Returns the total number of imported contacts

#### Parameters

• **parameters**: [`getImportedContactCount$DirectInput`](../type-aliases/getImportedContactCount$DirectInput.md)

[getImportedContactCount$Input](../type-aliases/getImportedContactCount$Input.md)

#### Returns

`Promise`\<[`count`](../type-aliases/count.md)\>

Promise<[Count](../type-aliases/Count-1.md)>

#### Defined in

dist/generated/types.d.ts:72634

***

### getInactiveSupergroupChats()

> **getInactiveSupergroupChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of joined supergroups and channels and receives CHANNELS_TOO_MUCH error. Also, the limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`getInactiveSupergroupChats$DirectInput`](../type-aliases/getInactiveSupergroupChats$DirectInput.md)

[getInactiveSupergroupChats$Input](../type-aliases/getInactiveSupergroupChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69850

***

### getInlineGameHighScores()

> **getInlineGameHighScores**(`parameters`): `Promise`\<[`gameHighScores`](../type-aliases/gameHighScores.md)\>

Returns game high scores and some part of the high score table in the range of the specified user; for bots only

#### Parameters

• **parameters**: [`getInlineGameHighScores$DirectInput`](../type-aliases/getInlineGameHighScores$DirectInput.md)

[getInlineGameHighScores$Input](../type-aliases/getInlineGameHighScores$Input.md)

#### Returns

`Promise`\<[`gameHighScores`](../type-aliases/gameHighScores.md)\>

Promise<[GameHighScores](../type-aliases/GameHighScores-1.md)>

#### Defined in

dist/generated/types.d.ts:71025

***

### getInlineQueryResults()

> **getInlineQueryResults**(`parameters`): `Promise`\<[`inlineQueryResults`](../type-aliases/inlineQueryResults.md)\>

Sends an inline query to a bot and returns its results. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires

#### Parameters

• **parameters**: [`getInlineQueryResults$DirectInput`](../type-aliases/getInlineQueryResults$DirectInput.md)

[getInlineQueryResults$Input](../type-aliases/getInlineQueryResults$Input.md)

#### Returns

`Promise`\<[`inlineQueryResults`](../type-aliases/inlineQueryResults.md)\>

Promise<[InlineQueryResults](../type-aliases/InlineQueryResults-1.md)>

#### Defined in

dist/generated/types.d.ts:70897

***

### getInstalledBackgrounds()

> **getInstalledBackgrounds**(`parameters`): `Promise`\<[`backgrounds`](../type-aliases/backgrounds.md)\>

Returns backgrounds installed by the user

#### Parameters

• **parameters**: [`getInstalledBackgrounds$DirectInput`](../type-aliases/getInstalledBackgrounds$DirectInput.md)

[getInstalledBackgrounds$Input](../type-aliases/getInstalledBackgrounds$Input.md)

#### Returns

`Promise`\<[`backgrounds`](../type-aliases/backgrounds.md)\>

Promise<[Backgrounds](../type-aliases/Backgrounds-1.md)>

#### Defined in

dist/generated/types.d.ts:73750

***

### getInstalledStickerSets()

> **getInstalledStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Returns a list of installed sticker sets

#### Parameters

• **parameters**: [`getInstalledStickerSets$DirectInput`](../type-aliases/getInstalledStickerSets$DirectInput.md)

[getInstalledStickerSets$Input](../type-aliases/getInstalledStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Promise<[StickerSets](../type-aliases/StickerSets-1.md)>

#### Defined in

dist/generated/types.d.ts:72741

***

### getInternalLink()

> **getInternalLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns an HTTPS or a tg: link with the given type. Can be called before authorization

#### Parameters

• **parameters**: [`getInternalLink$DirectInput`](../type-aliases/getInternalLink$DirectInput.md)

[getInternalLink$Input](../type-aliases/getInternalLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:71085

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

dist/generated/types.d.ts:71092

***

### getJsonString()

> **getJsonString**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Converts a JsonValue object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

• **parameters**: [`getJsonString$DirectInput`](../type-aliases/getJsonString$DirectInput.md)

[getJsonString$Input](../type-aliases/getJsonString$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:70811

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

dist/generated/types.d.ts:70804

***

### getKeywordEmojis()

> **getKeywordEmojis**(`parameters`): `Promise`\<[`emojis`](../type-aliases/emojis.md)\>

Return emojis matching the keyword. Supported only if the file database is enabled. Order of results is unspecified

#### Parameters

• **parameters**: [`getKeywordEmojis$DirectInput`](../type-aliases/getKeywordEmojis$DirectInput.md)

[getKeywordEmojis$Input](../type-aliases/getKeywordEmojis$Input.md)

#### Returns

`Promise`\<[`emojis`](../type-aliases/emojis.md)\>

Promise<[Emojis](../type-aliases/Emojis-1.md)>

#### Defined in

dist/generated/types.d.ts:72885

***

### getLanguagePackInfo()

> **getLanguagePackInfo**(`parameters`): `Promise`\<[`languagePackInfo`](../type-aliases/languagePackInfo.md)\>

Returns information about a language pack. Returned language pack identifier may be different from a provided one. Can be called before authorization

#### Parameters

• **parameters**: [`getLanguagePackInfo$DirectInput`](../type-aliases/getLanguagePackInfo$DirectInput.md)

[getLanguagePackInfo$Input](../type-aliases/getLanguagePackInfo$Input.md)

#### Returns

`Promise`\<[`languagePackInfo`](../type-aliases/languagePackInfo.md)\>

Promise<[LanguagePackInfo](../type-aliases/LanguagePackInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73778

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

dist/generated/types.d.ts:70797

***

### getLanguagePackStrings()

> **getLanguagePackStrings**(`parameters`): `Promise`\<[`languagePackStrings`](../type-aliases/languagePackStrings.md)\>

Returns strings from a language pack in the current localization target by their keys. Can be called before authorization

#### Parameters

• **parameters**: [`getLanguagePackStrings$DirectInput`](../type-aliases/getLanguagePackStrings$DirectInput.md)

[getLanguagePackStrings$Input](../type-aliases/getLanguagePackStrings$Input.md)

#### Returns

`Promise`\<[`languagePackStrings`](../type-aliases/languagePackStrings.md)\>

Promise<[LanguagePackStrings](../type-aliases/LanguagePackStrings-1.md)>

#### Defined in

dist/generated/types.d.ts:73785

***

### getLinkPreview()

> **getLinkPreview**(`parameters`): `Promise`\<[`linkPreview`](../type-aliases/linkPreview.md)\>

Returns a link preview by the text of a message. Do not call this function too often. Returns a 404 error if the text has no link preview

#### Parameters

• **parameters**: [`getLinkPreview$DirectInput`](../type-aliases/getLinkPreview$DirectInput.md)

[getLinkPreview$Input](../type-aliases/getLinkPreview$Input.md)

#### Returns

`Promise`\<[`linkPreview`](../type-aliases/linkPreview.md)\>

Promise<[LinkPreview](../type-aliases/LinkPreview-1.md)>

#### Defined in

dist/generated/types.d.ts:72985

***

### getLocalizationTargetInfo()

> **getLocalizationTargetInfo**(`parameters`): `Promise`\<[`localizationTargetInfo`](../type-aliases/localizationTargetInfo.md)\>

Returns information about the current localization target. This is an offline request if only_local is true. Can be called before authorization

#### Parameters

• **parameters**: [`getLocalizationTargetInfo$DirectInput`](../type-aliases/getLocalizationTargetInfo$DirectInput.md)

[getLocalizationTargetInfo$Input](../type-aliases/getLocalizationTargetInfo$Input.md)

#### Returns

`Promise`\<[`localizationTargetInfo`](../type-aliases/localizationTargetInfo.md)\>

Promise<[LocalizationTargetInfo](../type-aliases/LocalizationTargetInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73771

***

### getLoginUrl()

> **getLoginUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns an HTTP URL which can be used to automatically authorize the user on a website after clicking an inline button of type inlineKeyboardButtonTypeLoginUrl.

- Use the method getLoginUrlInfo to find whether a prior user confirmation is needed. If an error is returned, then the button must be handled as an ordinary URL button

#### Parameters

• **parameters**: [`getLoginUrl$DirectInput`](../type-aliases/getLoginUrl$DirectInput.md)

[getLoginUrl$Input](../type-aliases/getLoginUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:70876

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

dist/generated/types.d.ts:70867

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

dist/generated/types.d.ts:74689

***

### getLogTags()

> **getLogTags**(`parameters`): `Promise`\<[`logTags`](../type-aliases/logTags.md)\>

Returns the list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications", "proxy"]. Can be called synchronously

#### Parameters

• **parameters**: [`getLogTags$DirectInput`](../type-aliases/getLogTags$DirectInput.md)

[getLogTags$Input](../type-aliases/getLogTags$Input.md)

#### Returns

`Promise`\<[`logTags`](../type-aliases/logTags.md)\>

Promise<[LogTags](../type-aliases/LogTags-1.md)>

#### Defined in

dist/generated/types.d.ts:74710

***

### getLogTagVerbosityLevel()

> **getLogTagVerbosityLevel**(`parameters`): `Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel.md)\>

Returns current verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

• **parameters**: [`getLogTagVerbosityLevel$DirectInput`](../type-aliases/getLogTagVerbosityLevel$DirectInput.md)

[getLogTagVerbosityLevel$Input](../type-aliases/getLogTagVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel.md)\>

Promise<[LogVerbosityLevel](../type-aliases/LogVerbosityLevel-1.md)>

#### Defined in

dist/generated/types.d.ts:74724

***

### getLogVerbosityLevel()

> **getLogVerbosityLevel**(`parameters`): `Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel.md)\>

Returns current verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`getLogVerbosityLevel$DirectInput`](../type-aliases/getLogVerbosityLevel$DirectInput.md)

[getLogVerbosityLevel$Input](../type-aliases/getLogVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`logVerbosityLevel`](../type-aliases/logVerbosityLevel.md)\>

Promise<[LogVerbosityLevel](../type-aliases/LogVerbosityLevel-1.md)>

#### Defined in

dist/generated/types.d.ts:74703

***

### getMainWebApp()

> **getMainWebApp**(`parameters`): `Promise`\<[`mainWebApp`](../type-aliases/mainWebApp.md)\>

Returns information needed to open the main Web App of a bot

#### Parameters

• **parameters**: [`getMainWebApp$DirectInput`](../type-aliases/getMainWebApp$DirectInput.md)

[getMainWebApp$Input](../type-aliases/getMainWebApp$Input.md)

#### Returns

`Promise`\<[`mainWebApp`](../type-aliases/mainWebApp.md)\>

Promise<[MainWebApp](../type-aliases/MainWebApp-1.md)>

#### Defined in

dist/generated/types.d.ts:70932

***

### getMapThumbnailFile()

> **getMapThumbnailFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file.md)\>

Returns information about a file with a map thumbnail in PNG format. Only map thumbnail files with size less than 1MB can be downloaded

#### Parameters

• **parameters**: [`getMapThumbnailFile$DirectInput`](../type-aliases/getMapThumbnailFile$DirectInput.md)

[getMapThumbnailFile$Input](../type-aliases/getMapThumbnailFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file.md)\>

Promise<[File](../type-aliases/File-1.md)>

#### Defined in

dist/generated/types.d.ts:74374

***

### getMarkdownText()

> **getMarkdownText**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Replaces text entities with Markdown formatting in a human-friendly format. Entities that can't be represented in Markdown unambiguously are kept as is. Can be called synchronously

#### Parameters

• **parameters**: [`getMarkdownText$DirectInput`](../type-aliases/getMarkdownText$DirectInput.md)

[getMarkdownText$Input](../type-aliases/getMarkdownText$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Promise<[FormattedText](../type-aliases/FormattedText-1.md)>

#### Defined in

dist/generated/types.d.ts:70762

***

### getMe()

> **getMe**(`parameters`): `Promise`\<[`user`](../type-aliases/user.md)\>

Returns the current user

#### Parameters

• **parameters**: [`getMe$DirectInput`](../type-aliases/getMe$DirectInput.md)

[getMe$Input](../type-aliases/getMe$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user.md)\>

Promise<[User](../type-aliases/User-1.md)>

#### Defined in

dist/generated/types.d.ts:69537

***

### getMenuButton()

> **getMenuButton**(`parameters`): `Promise`\<[`botMenuButton`](../type-aliases/botMenuButton.md)\>

Returns menu button set by the bot for the given user; for bots only

#### Parameters

• **parameters**: [`getMenuButton$DirectInput`](../type-aliases/getMenuButton$DirectInput.md)

[getMenuButton$Input](../type-aliases/getMenuButton$Input.md)

#### Returns

`Promise`\<[`botMenuButton`](../type-aliases/botMenuButton.md)\>

Promise<[BotMenuButton](../type-aliases/BotMenuButton-1.md)>

#### Defined in

dist/generated/types.d.ts:73279

***

### getMessage()

> **getMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Returns information about a message

#### Parameters

• **parameters**: [`getMessage$DirectInput`](../type-aliases/getMessage$DirectInput.md)

[getMessage$Input](../type-aliases/getMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:69600

***

### getMessageAddedReactions()

> **getMessageAddedReactions**(`parameters`): `Promise`\<[`addedReactions`](../type-aliases/addedReactions.md)\>

Returns reactions added for a message, along with their sender

#### Parameters

• **parameters**: [`getMessageAddedReactions$DirectInput`](../type-aliases/getMessageAddedReactions$DirectInput.md)

[getMessageAddedReactions$Input](../type-aliases/getMessageAddedReactions$Input.md)

#### Returns

`Promise`\<[`addedReactions`](../type-aliases/addedReactions.md)\>

Promise<[AddedReactions](../type-aliases/AddedReactions-1.md)>

#### Defined in

dist/generated/types.d.ts:70697

***

### getMessageAvailableReactions()

> **getMessageAvailableReactions**(`parameters`): `Promise`\<[`availableReactions`](../type-aliases/availableReactions.md)\>

Returns reactions, which can be added to a message. The list can change after updateActiveEmojiReactions, updateChatAvailableReactions for the chat, or updateMessageInteractionInfo for the message

#### Parameters

• **parameters**: [`getMessageAvailableReactions$DirectInput`](../type-aliases/getMessageAvailableReactions$DirectInput.md)

[getMessageAvailableReactions$Input](../type-aliases/getMessageAvailableReactions$Input.md)

#### Returns

`Promise`\<[`availableReactions`](../type-aliases/availableReactions.md)\>

Promise<[AvailableReactions](../type-aliases/AvailableReactions-1.md)>

#### Defined in

dist/generated/types.d.ts:70641

***

### getMessageEffect()

> **getMessageEffect**(`parameters`): `Promise`\<[`messageEffect`](../type-aliases/messageEffect.md)\>

Returns information about a message effect. Returns a 404 error if the effect is not found

#### Parameters

• **parameters**: [`getMessageEffect$DirectInput`](../type-aliases/getMessageEffect$DirectInput.md)

[getMessageEffect$Input](../type-aliases/getMessageEffect$Input.md)

#### Returns

`Promise`\<[`messageEffect`](../type-aliases/messageEffect.md)\>

Promise<[MessageEffect](../type-aliases/MessageEffect-1.md)>

#### Defined in

dist/generated/types.d.ts:70725

***

### getMessageEmbeddingCode()

> **getMessageEmbeddingCode**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns an HTML code for embedding the message. Available only if messageProperties.can_get_embedding_code

#### Parameters

• **parameters**: [`getMessageEmbeddingCode$DirectInput`](../type-aliases/getMessageEmbeddingCode$DirectInput.md)

[getMessageEmbeddingCode$Input](../type-aliases/getMessageEmbeddingCode$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:70155

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

dist/generated/types.d.ts:72173

***

### getMessageImportConfirmationText()

> **getMessageImportConfirmationText**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns a confirmation text to be shown to the user before starting message import

#### Parameters

• **parameters**: [`getMessageImportConfirmationText$DirectInput`](../type-aliases/getMessageImportConfirmationText$DirectInput.md)

[getMessageImportConfirmationText$Input](../type-aliases/getMessageImportConfirmationText$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:72180

***

### getMessageLink()

> **getMessageLink**(`parameters`): `Promise`\<[`messageLink`](../type-aliases/messageLink.md)\>

Returns an HTTPS link to a message in a chat. Available only if messageProperties.can_get_link, or if messageProperties.can_get_media_timestamp_links and a media timestamp link is generated. This is an offline request

#### Parameters

• **parameters**: [`getMessageLink$DirectInput`](../type-aliases/getMessageLink$DirectInput.md)

[getMessageLink$Input](../type-aliases/getMessageLink$Input.md)

#### Returns

`Promise`\<[`messageLink`](../type-aliases/messageLink.md)\>

Promise<[MessageLink](../type-aliases/MessageLink-1.md)>

#### Defined in

dist/generated/types.d.ts:70148

***

### getMessageLinkInfo()

> **getMessageLinkInfo**(`parameters`): `Promise`\<[`messageLinkInfo`](../type-aliases/messageLinkInfo.md)\>

Returns information about a public or private message link. Can be called for any internal link of the type internalLinkTypeMessage

#### Parameters

• **parameters**: [`getMessageLinkInfo$DirectInput`](../type-aliases/getMessageLinkInfo$DirectInput.md)

[getMessageLinkInfo$Input](../type-aliases/getMessageLinkInfo$Input.md)

#### Returns

`Promise`\<[`messageLinkInfo`](../type-aliases/messageLinkInfo.md)\>

Promise<[MessageLinkInfo](../type-aliases/MessageLinkInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:70162

***

### getMessageLocally()

> **getMessageLocally**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Returns information about a message, if it is available without sending network request. This is an offline request

#### Parameters

• **parameters**: [`getMessageLocally$DirectInput`](../type-aliases/getMessageLocally$DirectInput.md)

[getMessageLocally$Input](../type-aliases/getMessageLocally$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:69607

***

### getMessageProperties()

> **getMessageProperties**(`parameters`): `Promise`\<[`messageProperties`](../type-aliases/messageProperties.md)\>

Returns properties of a message; this is an offline request

#### Parameters

• **parameters**: [`getMessageProperties$DirectInput`](../type-aliases/getMessageProperties$DirectInput.md)

[getMessageProperties$Input](../type-aliases/getMessageProperties$Input.md)

#### Returns

`Promise`\<[`messageProperties`](../type-aliases/messageProperties.md)\>

Promise<[MessageProperties](../type-aliases/MessageProperties-1.md)>

#### Defined in

dist/generated/types.d.ts:69646

***

### getMessagePublicForwards()

> **getMessagePublicForwards**(`parameters`): `Promise`\<[`publicForwards`](../type-aliases/publicForwards.md)\>

Returns forwarded copies of a channel message to different public channels and public reposts as a story. Can be used only if messageProperties.can_get_statistics == true. For optimal performance, the number of returned messages and stories is chosen by TDLib

#### Parameters

• **parameters**: [`getMessagePublicForwards$DirectInput`](../type-aliases/getMessagePublicForwards$DirectInput.md)

[getMessagePublicForwards$Input](../type-aliases/getMessagePublicForwards$Input.md)

#### Returns

`Promise`\<[`publicForwards`](../type-aliases/publicForwards.md)\>

Promise<[PublicForwards](../type-aliases/PublicForwards-1.md)>

#### Defined in

dist/generated/types.d.ts:74050

***

### getMessageReadDate()

> **getMessageReadDate**(`parameters`): `Promise`\<[`MessageReadDate`](../type-aliases/MessageReadDate.md)\>

Returns read date of a recent outgoing message in a private chat. The method can be called if messageProperties.can_get_read_date == true

#### Parameters

• **parameters**: [`getMessageReadDate$DirectInput`](../type-aliases/getMessageReadDate$DirectInput.md)

[getMessageReadDate$Input](../type-aliases/getMessageReadDate$Input.md)

#### Returns

`Promise`\<[`MessageReadDate`](../type-aliases/MessageReadDate.md)\>

Promise<[MessageReadDate](../type-aliases/MessageReadDate.md)>

#### Defined in

dist/generated/types.d.ts:69660

***

### getMessages()

> **getMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Returns information about messages. If a message is not found, returns null on the corresponding position of the result

#### Parameters

• **parameters**: [`getMessages$DirectInput`](../type-aliases/getMessages$DirectInput.md)

[getMessages$Input](../type-aliases/getMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:69639

***

### getMessageStatistics()

> **getMessageStatistics**(`parameters`): `Promise`\<[`messageStatistics`](../type-aliases/messageStatistics.md)\>

Returns detailed statistics about a message. Can be used only if messageProperties.can_get_statistics == true

#### Parameters

• **parameters**: [`getMessageStatistics$DirectInput`](../type-aliases/getMessageStatistics$DirectInput.md)

[getMessageStatistics$Input](../type-aliases/getMessageStatistics$Input.md)

#### Returns

`Promise`\<[`messageStatistics`](../type-aliases/messageStatistics.md)\>

Promise<[MessageStatistics](../type-aliases/MessageStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:74043

***

### getMessageThread()

> **getMessageThread**(`parameters`): `Promise`\<[`messageThreadInfo`](../type-aliases/messageThreadInfo.md)\>

Returns information about a message thread. Can be used only if messageProperties.can_get_message_thread == true

#### Parameters

• **parameters**: [`getMessageThread$DirectInput`](../type-aliases/getMessageThread$DirectInput.md)

[getMessageThread$Input](../type-aliases/getMessageThread$Input.md)

#### Returns

`Promise`\<[`messageThreadInfo`](../type-aliases/messageThreadInfo.md)\>

Promise<[MessageThreadInfo](../type-aliases/MessageThreadInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:69653

***

### getMessageThreadHistory()

> **getMessageThreadHistory**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Returns messages in a message thread of a message. Can be used only if messageProperties.can_get_message_thread == true. Message thread of a channel message is in the channel's linked supergroup.

- The messages are returned in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib

#### Parameters

• **parameters**: [`getMessageThreadHistory$DirectInput`](../type-aliases/getMessageThreadHistory$DirectInput.md)

[getMessageThreadHistory$Input](../type-aliases/getMessageThreadHistory$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:69931

***

### getMessageViewers()

> **getMessageViewers**(`parameters`): `Promise`\<[`messageViewers`](../type-aliases/messageViewers.md)\>

Returns viewers of a recent outgoing message in a basic group or a supergroup chat. For video notes and voice notes only users, opened content of the message, are returned. The method can be called if messageProperties.can_get_viewers == true

#### Parameters

• **parameters**: [`getMessageViewers$DirectInput`](../type-aliases/getMessageViewers$DirectInput.md)

[getMessageViewers$Input](../type-aliases/getMessageViewers$Input.md)

#### Returns

`Promise`\<[`messageViewers`](../type-aliases/messageViewers.md)\>

Promise<[MessageViewers](../type-aliases/MessageViewers-1.md)>

#### Defined in

dist/generated/types.d.ts:69667

***

### getNetworkStatistics()

> **getNetworkStatistics**(`parameters`): `Promise`\<[`networkStatistics`](../type-aliases/networkStatistics.md)\>

Returns network data usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`getNetworkStatistics$DirectInput`](../type-aliases/getNetworkStatistics$DirectInput.md)

[getNetworkStatistics$Input](../type-aliases/getNetworkStatistics$Input.md)

#### Returns

`Promise`\<[`networkStatistics`](../type-aliases/networkStatistics.md)\>

Promise<[NetworkStatistics](../type-aliases/NetworkStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:74108

***

### getNewChatPrivacySettings()

> **getNewChatPrivacySettings**(`parameters`): `Promise`\<[`newChatPrivacySettings`](../type-aliases/newChatPrivacySettings.md)\>

Returns privacy settings for new chat creation

#### Parameters

• **parameters**: [`getNewChatPrivacySettings$DirectInput`](../type-aliases/getNewChatPrivacySettings$DirectInput.md)

[getNewChatPrivacySettings$Input](../type-aliases/getNewChatPrivacySettings$Input.md)

#### Returns

`Promise`\<[`newChatPrivacySettings`](../type-aliases/newChatPrivacySettings.md)\>

Promise<[NewChatPrivacySettings](../type-aliases/NewChatPrivacySettings-1.md)>

#### Defined in

dist/generated/types.d.ts:73901

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

dist/generated/types.d.ts:73915

***

### getOwnedStickerSets()

> **getOwnedStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Returns sticker sets owned by the current user

#### Parameters

• **parameters**: [`getOwnedStickerSets$DirectInput`](../type-aliases/getOwnedStickerSets$DirectInput.md)

[getOwnedStickerSets$Input](../type-aliases/getOwnedStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Promise<[StickerSets](../type-aliases/StickerSets-1.md)>

#### Defined in

dist/generated/types.d.ts:74367

***

### getPassportAuthorizationForm()

> **getPassportAuthorizationForm**(`parameters`): `Promise`\<[`passportAuthorizationForm`](../type-aliases/passportAuthorizationForm.md)\>

Returns a Telegram Passport authorization form for sharing data with a service

#### Parameters

• **parameters**: [`getPassportAuthorizationForm$DirectInput`](../type-aliases/getPassportAuthorizationForm$DirectInput.md)

[getPassportAuthorizationForm$Input](../type-aliases/getPassportAuthorizationForm$Input.md)

#### Returns

`Promise`\<[`passportAuthorizationForm`](../type-aliases/passportAuthorizationForm.md)\>

Promise<[PassportAuthorizationForm](../type-aliases/PassportAuthorizationForm-1.md)>

#### Defined in

dist/generated/types.d.ts:74234

***

### getPassportAuthorizationFormAvailableElements()

> **getPassportAuthorizationFormAvailableElements**(`parameters`): `Promise`\<[`passportElementsWithErrors`](../type-aliases/passportElementsWithErrors.md)\>

Returns already available Telegram Passport elements suitable for completing a Telegram Passport authorization form. Result can be received only once for each authorization form

#### Parameters

• **parameters**: [`getPassportAuthorizationFormAvailableElements$DirectInput`](../type-aliases/getPassportAuthorizationFormAvailableElements$DirectInput.md)

[getPassportAuthorizationFormAvailableElements$Input](../type-aliases/getPassportAuthorizationFormAvailableElements$Input.md)

#### Returns

`Promise`\<[`passportElementsWithErrors`](../type-aliases/passportElementsWithErrors.md)\>

Promise<[PassportElementsWithErrors](../type-aliases/PassportElementsWithErrors-1.md)>

#### Defined in

dist/generated/types.d.ts:74241

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

dist/generated/types.d.ts:74171

***

### getPasswordState()

> **getPasswordState**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Returns the current state of 2-step verification

#### Parameters

• **parameters**: [`getPasswordState$DirectInput`](../type-aliases/getPasswordState$DirectInput.md)

[getPasswordState$Input](../type-aliases/getPasswordState$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Promise<[PasswordState](../type-aliases/PasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69414

***

### getPaymentForm()

> **getPaymentForm**(`parameters`): `Promise`\<[`paymentForm`](../type-aliases/paymentForm.md)\>

Returns an invoice payment form. This method must be called when the user presses inline button of the type inlineKeyboardButtonTypeBuy, or wants to buy access to media in a messagePaidMedia message

#### Parameters

• **parameters**: [`getPaymentForm$DirectInput`](../type-aliases/getPaymentForm$DirectInput.md)

[getPaymentForm$Input](../type-aliases/getPaymentForm$Input.md)

#### Returns

`Promise`\<[`paymentForm`](../type-aliases/paymentForm.md)\>

Promise<[PaymentForm](../type-aliases/PaymentForm-1.md)>

#### Defined in

dist/generated/types.d.ts:73652

***

### getPaymentReceipt()

> **getPaymentReceipt**(`parameters`): `Promise`\<[`paymentReceipt`](../type-aliases/paymentReceipt.md)\>

Returns information about a successful payment

#### Parameters

• **parameters**: [`getPaymentReceipt$DirectInput`](../type-aliases/getPaymentReceipt$DirectInput.md)

[getPaymentReceipt$Input](../type-aliases/getPaymentReceipt$Input.md)

#### Returns

`Promise`\<[`paymentReceipt`](../type-aliases/paymentReceipt.md)\>

Promise<[PaymentReceipt](../type-aliases/PaymentReceipt-1.md)>

#### Defined in

dist/generated/types.d.ts:73673

***

### getPhoneNumberInfo()

> **getPhoneNumberInfo**(`parameters`): `Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo.md)\>

Returns information about a phone number by its prefix. Can be called before authorization

#### Parameters

• **parameters**: [`getPhoneNumberInfo$DirectInput`](../type-aliases/getPhoneNumberInfo$DirectInput.md)

[getPhoneNumberInfo$Input](../type-aliases/getPhoneNumberInfo$Input.md)

#### Returns

`Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo.md)\>

Promise<[PhoneNumberInfo](../type-aliases/PhoneNumberInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74577

***

### getPhoneNumberInfoSync()

> **getPhoneNumberInfoSync**(`parameters`): `Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo.md)\>

Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after changing localization to the specified language if properly localized country information is expected. Can be called synchronously

#### Parameters

• **parameters**: [`getPhoneNumberInfoSync$DirectInput`](../type-aliases/getPhoneNumberInfoSync$DirectInput.md)

[getPhoneNumberInfoSync$Input](../type-aliases/getPhoneNumberInfoSync$Input.md)

#### Returns

`Promise`\<[`phoneNumberInfo`](../type-aliases/phoneNumberInfo.md)\>

Promise<[PhoneNumberInfo](../type-aliases/PhoneNumberInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74584

***

### getPollVoters()

> **getPollVoters**(`parameters`): `Promise`\<[`messageSenders`](../type-aliases/messageSenders.md)\>

Returns message senders voted for the specified option in a non-anonymous polls. For optimal performance, the number of returned users is chosen by TDLib

#### Parameters

• **parameters**: [`getPollVoters$DirectInput`](../type-aliases/getPollVoters$DirectInput.md)

[getPollVoters$Input](../type-aliases/getPollVoters$Input.md)

#### Returns

`Promise`\<[`messageSenders`](../type-aliases/messageSenders.md)\>

Promise<[MessageSenders](../type-aliases/MessageSenders-1.md)>

#### Defined in

dist/generated/types.d.ts:70832

***

### getPopularWebAppBots()

> **getPopularWebAppBots**(`parameters`): `Promise`\<[`foundUsers`](../type-aliases/foundUsers.md)\>

Returns popular Web App bots

#### Parameters

• **parameters**: [`getPopularWebAppBots$DirectInput`](../type-aliases/getPopularWebAppBots$DirectInput.md)

[getPopularWebAppBots$Input](../type-aliases/getPopularWebAppBots$Input.md)

#### Returns

`Promise`\<[`foundUsers`](../type-aliases/foundUsers.md)\>

Promise<[FoundUsers](../type-aliases/FoundUsers-1.md)>

#### Defined in

dist/generated/types.d.ts:70911

***

### getPreferredCountryLanguage()

> **getPreferredCountryLanguage**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns an IETF language tag of the language preferred in the country, which must be used to fill native fields in Telegram Passport personal details. Returns a 404 error if unknown

#### Parameters

• **parameters**: [`getPreferredCountryLanguage$DirectInput`](../type-aliases/getPreferredCountryLanguage$DirectInput.md)

[getPreferredCountryLanguage$Input](../type-aliases/getPreferredCountryLanguage$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:74206

***

### getPremiumFeatures()

> **getPremiumFeatures**(`parameters`): `Promise`\<[`premiumFeatures`](../type-aliases/premiumFeatures.md)\>

Returns information about features, available to Premium users

#### Parameters

• **parameters**: [`getPremiumFeatures$DirectInput`](../type-aliases/getPremiumFeatures$DirectInput.md)

[getPremiumFeatures$Input](../type-aliases/getPremiumFeatures$Input.md)

#### Returns

`Promise`\<[`premiumFeatures`](../type-aliases/premiumFeatures.md)\>

Promise<[PremiumFeatures](../type-aliases/PremiumFeatures-1.md)>

#### Defined in

dist/generated/types.d.ts:74388

***

### getPremiumGiftCodePaymentOptions()

> **getPremiumGiftCodePaymentOptions**(`parameters`): `Promise`\<[`premiumGiftCodePaymentOptions`](../type-aliases/premiumGiftCodePaymentOptions.md)\>

Returns available options for Telegram Premium gift code or giveaway creation

#### Parameters

• **parameters**: [`getPremiumGiftCodePaymentOptions$DirectInput`](../type-aliases/getPremiumGiftCodePaymentOptions$DirectInput.md)

[getPremiumGiftCodePaymentOptions$Input](../type-aliases/getPremiumGiftCodePaymentOptions$Input.md)

#### Returns

`Promise`\<[`premiumGiftCodePaymentOptions`](../type-aliases/premiumGiftCodePaymentOptions.md)\>

Promise<[PremiumGiftCodePaymentOptions](../type-aliases/PremiumGiftCodePaymentOptions-1.md)>

#### Defined in

dist/generated/types.d.ts:74423

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

dist/generated/types.d.ts:74451

***

### getPremiumLimit()

> **getPremiumLimit**(`parameters`): `Promise`\<[`premiumLimit`](../type-aliases/premiumLimit.md)\>

Returns information about a limit, increased for Premium users. Returns a 404 error if the limit is unknown

#### Parameters

• **parameters**: [`getPremiumLimit$DirectInput`](../type-aliases/getPremiumLimit$DirectInput.md)

[getPremiumLimit$Input](../type-aliases/getPremiumLimit$Input.md)

#### Returns

`Promise`\<[`premiumLimit`](../type-aliases/premiumLimit.md)\>

Promise<[PremiumLimit](../type-aliases/PremiumLimit-1.md)>

#### Defined in

dist/generated/types.d.ts:74381

***

### getPremiumState()

> **getPremiumState**(`parameters`): `Promise`\<[`premiumState`](../type-aliases/premiumState.md)\>

Returns state of Telegram Premium subscription and promotion videos for Premium features

#### Parameters

• **parameters**: [`getPremiumState$DirectInput`](../type-aliases/getPremiumState$DirectInput.md)

[getPremiumState$Input](../type-aliases/getPremiumState$Input.md)

#### Returns

`Promise`\<[`premiumState`](../type-aliases/premiumState.md)\>

Promise<[PremiumState](../type-aliases/PremiumState-1.md)>

#### Defined in

dist/generated/types.d.ts:74416

***

### getPremiumStickerExamples()

> **getPremiumStickerExamples**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns examples of premium stickers for demonstration purposes

#### Parameters

• **parameters**: [`getPremiumStickerExamples$DirectInput`](../type-aliases/getPremiumStickerExamples$DirectInput.md)

[getPremiumStickerExamples$Input](../type-aliases/getPremiumStickerExamples$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:74395

***

### getPremiumStickers()

> **getPremiumStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns premium stickers from regular sticker sets

#### Parameters

• **parameters**: [`getPremiumStickers$DirectInput`](../type-aliases/getPremiumStickers$DirectInput.md)

[getPremiumStickers$Input](../type-aliases/getPremiumStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72734

***

### getProxies()

> **getProxies**(`parameters`): `Promise`\<[`proxies`](../type-aliases/proxies.md)\>

Returns the list of proxies that are currently set up. Can be called before authorization

#### Parameters

• **parameters**: [`getProxies$DirectInput`](../type-aliases/getProxies$DirectInput.md)

[getProxies$Input](../type-aliases/getProxies$Input.md)

#### Returns

`Promise`\<[`proxies`](../type-aliases/proxies.md)\>

Promise<[Proxies](../type-aliases/Proxies-1.md)>

#### Defined in

dist/generated/types.d.ts:74661

***

### getProxyLink()

> **getProxyLink**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns an HTTPS link, which can be used to add a proxy. Available only for SOCKS5 and MTProto proxies. Can be called before authorization

#### Parameters

• **parameters**: [`getProxyLink$DirectInput`](../type-aliases/getProxyLink$DirectInput.md)

[getProxyLink$Input](../type-aliases/getProxyLink$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:74668

***

### getPushReceiverId()

> **getPushReceiverId**(`parameters`): `Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId.md)\>

Returns a globally unique push notification subscription identifier for identification of an account, which has received a push notification. Can be called synchronously

#### Parameters

• **parameters**: [`getPushReceiverId$DirectInput`](../type-aliases/getPushReceiverId$DirectInput.md)

[getPushReceiverId$Input](../type-aliases/getPushReceiverId$Input.md)

#### Returns

`Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId.md)\>

Promise<[PushReceiverId](../type-aliases/PushReceiverId-1.md)>

#### Defined in

dist/generated/types.d.ts:73852

***

### getReadDatePrivacySettings()

> **getReadDatePrivacySettings**(`parameters`): `Promise`\<[`readDatePrivacySettings`](../type-aliases/readDatePrivacySettings.md)\>

Returns privacy settings for message read date

#### Parameters

• **parameters**: [`getReadDatePrivacySettings$DirectInput`](../type-aliases/getReadDatePrivacySettings$DirectInput.md)

[getReadDatePrivacySettings$Input](../type-aliases/getReadDatePrivacySettings$Input.md)

#### Returns

`Promise`\<[`readDatePrivacySettings`](../type-aliases/readDatePrivacySettings.md)\>

Promise<[ReadDatePrivacySettings](../type-aliases/ReadDatePrivacySettings-1.md)>

#### Defined in

dist/generated/types.d.ts:73887

***

### getRecentEmojiStatuses()

> **getRecentEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Returns recent emoji statuses for self status

#### Parameters

• **parameters**: [`getRecentEmojiStatuses$DirectInput`](../type-aliases/getRecentEmojiStatuses$DirectInput.md)

[getRecentEmojiStatuses$Input](../type-aliases/getRecentEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses-1.md)>

#### Defined in

dist/generated/types.d.ts:71999

***

### getRecentInlineBots()

> **getRecentInlineBots**(`parameters`): `Promise`\<[`users`](../type-aliases/users.md)\>

Returns up to 20 recently used inline bots in the order of their last usage

#### Parameters

• **parameters**: [`getRecentInlineBots$DirectInput`](../type-aliases/getRecentInlineBots$DirectInput.md)

[getRecentInlineBots$Input](../type-aliases/getRecentInlineBots$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users.md)\>

Promise<[Users](../type-aliases/Users-1.md)>

#### Defined in

dist/generated/types.d.ts:72964

***

### getRecentlyOpenedChats()

> **getRecentlyOpenedChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns recently opened chats; this is an offline request. Returns chats in the order of last opening

#### Parameters

• **parameters**: [`getRecentlyOpenedChats$DirectInput`](../type-aliases/getRecentlyOpenedChats$DirectInput.md)

[getRecentlyOpenedChats$Input](../type-aliases/getRecentlyOpenedChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69813

***

### getRecentlyVisitedTMeUrls()

> **getRecentlyVisitedTMeUrls**(`parameters`): `Promise`\<[`tMeUrls`](../type-aliases/tMeUrls.md)\>

Returns t.me URLs recently visited by a newly registered user

#### Parameters

• **parameters**: [`getRecentlyVisitedTMeUrls$DirectInput`](../type-aliases/getRecentlyVisitedTMeUrls$DirectInput.md)

[getRecentlyVisitedTMeUrls$Input](../type-aliases/getRecentlyVisitedTMeUrls$Input.md)

#### Returns

`Promise`\<[`tMeUrls`](../type-aliases/tMeUrls.md)\>

Promise<[TMeUrls](../type-aliases/TMeUrls-1.md)>

#### Defined in

dist/generated/types.d.ts:73859

***

### getRecentStickers()

> **getRecentStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns a list of recently used stickers

#### Parameters

• **parameters**: [`getRecentStickers$DirectInput`](../type-aliases/getRecentStickers$DirectInput.md)

[getRecentStickers$Input](../type-aliases/getRecentStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72818

***

### getRecommendedChatFolders()

> **getRecommendedChatFolders**(`parameters`): `Promise`\<[`recommendedChatFolders`](../type-aliases/recommendedChatFolders.md)\>

Returns recommended chat folders for the current user

#### Parameters

• **parameters**: [`getRecommendedChatFolders$DirectInput`](../type-aliases/getRecommendedChatFolders$DirectInput.md)

[getRecommendedChatFolders$Input](../type-aliases/getRecommendedChatFolders$Input.md)

#### Returns

`Promise`\<[`recommendedChatFolders`](../type-aliases/recommendedChatFolders.md)\>

Promise<[RecommendedChatFolders](../type-aliases/RecommendedChatFolders-1.md)>

#### Defined in

dist/generated/types.d.ts:71267

***

### getRecommendedChats()

> **getRecommendedChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of channel chats recommended to the current user

#### Parameters

• **parameters**: [`getRecommendedChats$DirectInput`](../type-aliases/getRecommendedChats$DirectInput.md)

[getRecommendedChats$Input](../type-aliases/getRecommendedChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69743

***

### getRecoveryEmailAddress()

> **getRecoveryEmailAddress**(`parameters`): `Promise`\<[`recoveryEmailAddress`](../type-aliases/recoveryEmailAddress.md)\>

Returns a 2-step verification recovery email address that was previously set up. This method can be used to verify a password provided by the user

#### Parameters

• **parameters**: [`getRecoveryEmailAddress$DirectInput`](../type-aliases/getRecoveryEmailAddress$DirectInput.md)

[getRecoveryEmailAddress$Input](../type-aliases/getRecoveryEmailAddress$Input.md)

#### Returns

`Promise`\<[`recoveryEmailAddress`](../type-aliases/recoveryEmailAddress.md)\>

Promise<[RecoveryEmailAddress](../type-aliases/RecoveryEmailAddress-1.md)>

#### Defined in

dist/generated/types.d.ts:69451

***

### getRemoteFile()

> **getRemoteFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file.md)\>

Returns information about a file by its remote identifier; this is an offline request. Can be used to register a URL as a file for further uploading, or sending as a message. Even the request succeeds, the file can be used only if it is still accessible to the user.

- For example, if the file is from a message, then the message must be not deleted and accessible to the user. If the file database is disabled, then the corresponding object with the file must be preloaded by the application

#### Parameters

• **parameters**: [`getRemoteFile$DirectInput`](../type-aliases/getRemoteFile$DirectInput.md)

[getRemoteFile$Input](../type-aliases/getRemoteFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file.md)\>

Promise<[File](../type-aliases/File-1.md)>

#### Defined in

dist/generated/types.d.ts:69683

***

### getRepliedMessage()

> **getRepliedMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Returns information about a non-bundled message that is replied by a given message. Also, returns the pinned message, the game message, the invoice message,

- the message with a previously set same background, the giveaway message, and the topic creation message for messages of the types

- messagePinMessage, messageGameScore, messagePaymentSuccessful, messageChatSetBackground, messagePremiumGiveawayCompleted and topic messages without non-bundled replied message respectively

#### Parameters

• **parameters**: [`getRepliedMessage$DirectInput`](../type-aliases/getRepliedMessage$DirectInput.md)

[getRepliedMessage$Input](../type-aliases/getRepliedMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:69618

***

### getSavedAnimations()

> **getSavedAnimations**(`parameters`): `Promise`\<[`animations`](../type-aliases/animations.md)\>

Returns saved animations

#### Parameters

• **parameters**: [`getSavedAnimations$DirectInput`](../type-aliases/getSavedAnimations$DirectInput.md)

[getSavedAnimations$Input](../type-aliases/getSavedAnimations$Input.md)

#### Returns

`Promise`\<[`animations`](../type-aliases/animations.md)\>

Promise<[Animations](../type-aliases/Animations-1.md)>

#### Defined in

dist/generated/types.d.ts:72941

***

### getSavedMessagesTags()

> **getSavedMessagesTags**(`parameters`): `Promise`\<[`savedMessagesTags`](../type-aliases/savedMessagesTags.md)\>

Returns tags used in Saved Messages or a Saved Messages topic

#### Parameters

• **parameters**: [`getSavedMessagesTags$DirectInput`](../type-aliases/getSavedMessagesTags$DirectInput.md)

[getSavedMessagesTags$Input](../type-aliases/getSavedMessagesTags$Input.md)

#### Returns

`Promise`\<[`savedMessagesTags`](../type-aliases/savedMessagesTags.md)\>

Promise<[SavedMessagesTags](../type-aliases/SavedMessagesTags-1.md)>

#### Defined in

dist/generated/types.d.ts:70711

***

### getSavedMessagesTopicHistory()

> **getSavedMessagesTopicHistory**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Returns messages in a Saved Messages topic. The messages are returned in reverse chronological order (i.e., in order of decreasing message_id)

#### Parameters

• **parameters**: [`getSavedMessagesTopicHistory$DirectInput`](../type-aliases/getSavedMessagesTopicHistory$DirectInput.md)

[getSavedMessagesTopicHistory$Input](../type-aliases/getSavedMessagesTopicHistory$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:69871

***

### getSavedMessagesTopicMessageByDate()

> **getSavedMessagesTopicMessageByDate**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Returns the last message sent in a Saved Messages topic no later than the specified date

#### Parameters

• **parameters**: [`getSavedMessagesTopicMessageByDate$DirectInput`](../type-aliases/getSavedMessagesTopicMessageByDate$DirectInput.md)

[getSavedMessagesTopicMessageByDate$Input](../type-aliases/getSavedMessagesTopicMessageByDate$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:69878

***

### getSavedNotificationSound()

> **getSavedNotificationSound**(`parameters`): `Promise`\<[`notificationSounds`](../type-aliases/notificationSounds.md)\>

Returns saved notification sound by its identifier. Returns a 404 error if there is no saved notification sound with the specified identifier

#### Parameters

• **parameters**: [`getSavedNotificationSound$DirectInput`](../type-aliases/getSavedNotificationSound$DirectInput.md)

[getSavedNotificationSound$Input](../type-aliases/getSavedNotificationSound$Input.md)

#### Returns

`Promise`\<[`notificationSounds`](../type-aliases/notificationSounds.md)\>

Promise<[NotificationSounds](../type-aliases/NotificationSounds-1.md)>

#### Defined in

dist/generated/types.d.ts:71639

***

### getSavedNotificationSounds()

> **getSavedNotificationSounds**(`parameters`): `Promise`\<[`notificationSounds`](../type-aliases/notificationSounds.md)\>

Returns the list of saved notification sounds. If a sound isn't in the list, then default sound needs to be used

#### Parameters

• **parameters**: [`getSavedNotificationSounds$DirectInput`](../type-aliases/getSavedNotificationSounds$DirectInput.md)

[getSavedNotificationSounds$Input](../type-aliases/getSavedNotificationSounds$Input.md)

#### Returns

`Promise`\<[`notificationSounds`](../type-aliases/notificationSounds.md)\>

Promise<[NotificationSounds](../type-aliases/NotificationSounds-1.md)>

#### Defined in

dist/generated/types.d.ts:71646

***

### getSavedOrderInfo()

> **getSavedOrderInfo**(`parameters`): `Promise`\<[`orderInfo`](../type-aliases/orderInfo.md)\>

Returns saved order information. Returns a 404 error if there is no saved order information

#### Parameters

• **parameters**: [`getSavedOrderInfo$DirectInput`](../type-aliases/getSavedOrderInfo$DirectInput.md)

[getSavedOrderInfo$Input](../type-aliases/getSavedOrderInfo$Input.md)

#### Returns

`Promise`\<[`orderInfo`](../type-aliases/orderInfo.md)\>

Promise<[OrderInfo](../type-aliases/OrderInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73680

***

### getScopeNotificationSettings()

> **getScopeNotificationSettings**(`parameters`): `Promise`\<[`scopeNotificationSettings`](../type-aliases/scopeNotificationSettings.md)\>

Returns the notification settings for chats of a given type

#### Parameters

• **parameters**: [`getScopeNotificationSettings$DirectInput`](../type-aliases/getScopeNotificationSettings$DirectInput.md)

[getScopeNotificationSettings$Input](../type-aliases/getScopeNotificationSettings$Input.md)

#### Returns

`Promise`\<[`scopeNotificationSettings`](../type-aliases/scopeNotificationSettings.md)\>

Promise<[ScopeNotificationSettings](../type-aliases/ScopeNotificationSettings-1.md)>

#### Defined in

dist/generated/types.d.ts:71674

***

### getSearchedForTags()

> **getSearchedForTags**(`parameters`): `Promise`\<[`hashtags`](../type-aliases/hashtags.md)\>

Returns recently searched for hashtags or cashtags by their prefix

#### Parameters

• **parameters**: [`getSearchedForTags$DirectInput`](../type-aliases/getSearchedForTags$DirectInput.md)

[getSearchedForTags$Input](../type-aliases/getSearchedForTags$Input.md)

#### Returns

`Promise`\<[`hashtags`](../type-aliases/hashtags.md)\>

Promise<[Hashtags](../type-aliases/Hashtags-1.md)>

#### Defined in

dist/generated/types.d.ts:70034

***

### getSecretChat()

> **getSecretChat**(`parameters`): `Promise`\<[`secretChat`](../type-aliases/secretChat.md)\>

Returns information about a secret chat by its identifier. This is an offline request

#### Parameters

• **parameters**: [`getSecretChat$DirectInput`](../type-aliases/getSecretChat$DirectInput.md)

[getSecretChat$Input](../type-aliases/getSecretChat$Input.md)

#### Returns

`Promise`\<[`secretChat`](../type-aliases/secretChat.md)\>

Promise<[SecretChat](../type-aliases/SecretChat-1.md)>

#### Defined in

dist/generated/types.d.ts:69586

***

### getStarAdAccountUrl()

> **getStarAdAccountUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns a URL for a Telegram Ad platform account that can be used to set up advertisements for the chat paid in the owned Telegram Stars

#### Parameters

• **parameters**: [`getStarAdAccountUrl$DirectInput`](../type-aliases/getStarAdAccountUrl$DirectInput.md)

[getStarAdAccountUrl$Input](../type-aliases/getStarAdAccountUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:74029

***

### getStarGiftPaymentOptions()

> **getStarGiftPaymentOptions**(`parameters`): `Promise`\<[`starPaymentOptions`](../type-aliases/starPaymentOptions.md)\>

Returns available options for Telegram Stars gifting

#### Parameters

• **parameters**: [`getStarGiftPaymentOptions$DirectInput`](../type-aliases/getStarGiftPaymentOptions$DirectInput.md)

[getStarGiftPaymentOptions$Input](../type-aliases/getStarGiftPaymentOptions$Input.md)

#### Returns

`Promise`\<[`starPaymentOptions`](../type-aliases/starPaymentOptions.md)\>

Promise<[StarPaymentOptions](../type-aliases/StarPaymentOptions-1.md)>

#### Defined in

dist/generated/types.d.ts:74465

***

### getStarPaymentOptions()

> **getStarPaymentOptions**(`parameters`): `Promise`\<[`starPaymentOptions`](../type-aliases/starPaymentOptions.md)\>

Returns available options for Telegram Stars purchase

#### Parameters

• **parameters**: [`getStarPaymentOptions$DirectInput`](../type-aliases/getStarPaymentOptions$DirectInput.md)

[getStarPaymentOptions$Input](../type-aliases/getStarPaymentOptions$Input.md)

#### Returns

`Promise`\<[`starPaymentOptions`](../type-aliases/starPaymentOptions.md)\>

Promise<[StarPaymentOptions](../type-aliases/StarPaymentOptions-1.md)>

#### Defined in

dist/generated/types.d.ts:74458

***

### getStarRevenueStatistics()

> **getStarRevenueStatistics**(`parameters`): `Promise`\<[`starRevenueStatistics`](../type-aliases/starRevenueStatistics.md)\>

Returns detailed Telegram Star revenue statistics

#### Parameters

• **parameters**: [`getStarRevenueStatistics$DirectInput`](../type-aliases/getStarRevenueStatistics$DirectInput.md)

[getStarRevenueStatistics$Input](../type-aliases/getStarRevenueStatistics$Input.md)

#### Returns

`Promise`\<[`starRevenueStatistics`](../type-aliases/starRevenueStatistics.md)\>

Promise<[StarRevenueStatistics](../type-aliases/StarRevenueStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:74015

***

### getStarSubscriptions()

> **getStarSubscriptions**(`parameters`): `Promise`\<[`starSubscriptions`](../type-aliases/starSubscriptions.md)\>

Returns the list of Telegram Star subscriptions for the current user

#### Parameters

• **parameters**: [`getStarSubscriptions$DirectInput`](../type-aliases/getStarSubscriptions$DirectInput.md)

[getStarSubscriptions$Input](../type-aliases/getStarSubscriptions$Input.md)

#### Returns

`Promise`\<[`starSubscriptions`](../type-aliases/starSubscriptions.md)\>

Promise<[StarSubscriptions](../type-aliases/StarSubscriptions-1.md)>

#### Defined in

dist/generated/types.d.ts:74479

***

### getStarTransactions()

> **getStarTransactions**(`parameters`): `Promise`\<[`starTransactions`](../type-aliases/starTransactions.md)\>

Returns the list of Telegram Star transactions for the specified owner

#### Parameters

• **parameters**: [`getStarTransactions$DirectInput`](../type-aliases/getStarTransactions$DirectInput.md)

[getStarTransactions$Input](../type-aliases/getStarTransactions$Input.md)

#### Returns

`Promise`\<[`starTransactions`](../type-aliases/starTransactions.md)\>

Promise<[StarTransactions](../type-aliases/StarTransactions-1.md)>

#### Defined in

dist/generated/types.d.ts:74472

***

### getStarWithdrawalUrl()

> **getStarWithdrawalUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns a URL for Telegram Star withdrawal

#### Parameters

• **parameters**: [`getStarWithdrawalUrl$DirectInput`](../type-aliases/getStarWithdrawalUrl$DirectInput.md)

[getStarWithdrawalUrl$Input](../type-aliases/getStarWithdrawalUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:74022

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

dist/generated/types.d.ts:74064

***

### getStickerEmojis()

> **getStickerEmojis**(`parameters`): `Promise`\<[`emojis`](../type-aliases/emojis.md)\>

Returns emoji corresponding to a sticker. The list is only for informational purposes, because a sticker is always sent with a fixed emoji from the corresponding Sticker object

#### Parameters

• **parameters**: [`getStickerEmojis$DirectInput`](../type-aliases/getStickerEmojis$DirectInput.md)

[getStickerEmojis$Input](../type-aliases/getStickerEmojis$Input.md)

#### Returns

`Promise`\<[`emojis`](../type-aliases/emojis.md)\>

Promise<[Emojis](../type-aliases/Emojis-1.md)>

#### Defined in

dist/generated/types.d.ts:72871

***

### getStickers()

> **getStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Returns stickers from the installed sticker sets that correspond to any of the given emoji or can be found by sticker-specific keywords. If the query is non-empty, then favorite, recently used or trending stickers may also be returned

#### Parameters

• **parameters**: [`getStickers$DirectInput`](../type-aliases/getStickers$DirectInput.md)

[getStickers$Input](../type-aliases/getStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72706

***

### getStickerSet()

> **getStickerSet**(`parameters`): `Promise`\<[`stickerSet`](../type-aliases/stickerSet.md)\>

Returns information about a sticker set by its identifier

#### Parameters

• **parameters**: [`getStickerSet$DirectInput`](../type-aliases/getStickerSet$DirectInput.md)

[getStickerSet$Input](../type-aliases/getStickerSet$Input.md)

#### Returns

`Promise`\<[`stickerSet`](../type-aliases/stickerSet.md)\>

Promise<[StickerSet](../type-aliases/StickerSet-1.md)>

#### Defined in

dist/generated/types.d.ts:72769

***

### getStorageStatistics()

> **getStorageStatistics**(`parameters`): `Promise`\<[`storageStatistics`](../type-aliases/storageStatistics.md)\>

Returns storage usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`getStorageStatistics$DirectInput`](../type-aliases/getStorageStatistics$DirectInput.md)

[getStorageStatistics$Input](../type-aliases/getStorageStatistics$Input.md)

#### Returns

`Promise`\<[`storageStatistics`](../type-aliases/storageStatistics.md)\>

Promise<[StorageStatistics](../type-aliases/StorageStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:74071

***

### getStorageStatisticsFast()

> **getStorageStatisticsFast**(`parameters`): `Promise`\<[`storageStatisticsFast`](../type-aliases/storageStatisticsFast.md)\>

Quickly returns approximate storage usage statistics. Can be called before authorization

#### Parameters

• **parameters**: [`getStorageStatisticsFast$DirectInput`](../type-aliases/getStorageStatisticsFast$DirectInput.md)

[getStorageStatisticsFast$Input](../type-aliases/getStorageStatisticsFast$Input.md)

#### Returns

`Promise`\<[`storageStatisticsFast`](../type-aliases/storageStatisticsFast.md)\>

Promise<[StorageStatisticsFast](../type-aliases/StorageStatisticsFast-1.md)>

#### Defined in

dist/generated/types.d.ts:74078

***

### getStory()

> **getStory**(`parameters`): `Promise`\<[`story`](../type-aliases/story.md)\>

Returns a story

#### Parameters

• **parameters**: [`getStory$DirectInput`](../type-aliases/getStory$DirectInput.md)

[getStory$Input](../type-aliases/getStory$Input.md)

#### Returns

`Promise`\<[`story`](../type-aliases/story.md)\>

Promise<[Story](../type-aliases/Story-1.md)>

#### Defined in

dist/generated/types.d.ts:71730

***

### getStoryAvailableReactions()

> **getStoryAvailableReactions**(`parameters`): `Promise`\<[`availableReactions`](../type-aliases/availableReactions.md)\>

Returns reactions, which can be chosen for a story

#### Parameters

• **parameters**: [`getStoryAvailableReactions$DirectInput`](../type-aliases/getStoryAvailableReactions$DirectInput.md)

[getStoryAvailableReactions$Input](../type-aliases/getStoryAvailableReactions$Input.md)

#### Returns

`Promise`\<[`availableReactions`](../type-aliases/availableReactions.md)\>

Promise<[AvailableReactions](../type-aliases/AvailableReactions-1.md)>

#### Defined in

dist/generated/types.d.ts:71862

***

### getStoryInteractions()

> **getStoryInteractions**(`parameters`): `Promise`\<[`storyInteractions`](../type-aliases/storyInteractions.md)\>

Returns interactions with a story. The method can be called only for stories posted on behalf of the current user

#### Parameters

• **parameters**: [`getStoryInteractions$DirectInput`](../type-aliases/getStoryInteractions$DirectInput.md)

[getStoryInteractions$Input](../type-aliases/getStoryInteractions$Input.md)

#### Returns

`Promise`\<[`storyInteractions`](../type-aliases/storyInteractions.md)\>

Promise<[StoryInteractions](../type-aliases/StoryInteractions-1.md)>

#### Defined in

dist/generated/types.d.ts:71876

***

### getStoryNotificationSettingsExceptions()

> **getStoryNotificationSettingsExceptions**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns the list of chats with non-default notification settings for stories

#### Parameters

• **parameters**: [`getStoryNotificationSettingsExceptions$DirectInput`](../type-aliases/getStoryNotificationSettingsExceptions$DirectInput.md)

[getStoryNotificationSettingsExceptions$Input](../type-aliases/getStoryNotificationSettingsExceptions$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:71793

***

### getStoryPublicForwards()

> **getStoryPublicForwards**(`parameters`): `Promise`\<[`publicForwards`](../type-aliases/publicForwards.md)\>

Returns forwards of a story as a message to public chats and reposts by public channels. Can be used only if the story is posted on behalf of the current user or story.can_get_statistics == true.

- For optimal performance, the number of returned messages and stories is chosen by TDLib

#### Parameters

• **parameters**: [`getStoryPublicForwards$DirectInput`](../type-aliases/getStoryPublicForwards$DirectInput.md)

[getStoryPublicForwards$Input](../type-aliases/getStoryPublicForwards$Input.md)

#### Returns

`Promise`\<[`publicForwards`](../type-aliases/publicForwards.md)\>

Promise<[PublicForwards](../type-aliases/PublicForwards-1.md)>

#### Defined in

dist/generated/types.d.ts:71908

***

### getStoryStatistics()

> **getStoryStatistics**(`parameters`): `Promise`\<[`storyStatistics`](../type-aliases/storyStatistics.md)\>

Returns detailed statistics about a story. Can be used only if story.can_get_statistics == true

#### Parameters

• **parameters**: [`getStoryStatistics$DirectInput`](../type-aliases/getStoryStatistics$DirectInput.md)

[getStoryStatistics$Input](../type-aliases/getStoryStatistics$Input.md)

#### Returns

`Promise`\<[`storyStatistics`](../type-aliases/storyStatistics.md)\>

Promise<[StoryStatistics](../type-aliases/StoryStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:74057

***

### getSuggestedFileName()

> **getSuggestedFileName**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns suggested name for saving a file in a given directory

#### Parameters

• **parameters**: [`getSuggestedFileName$DirectInput`](../type-aliases/getSuggestedFileName$DirectInput.md)

[getSuggestedFileName$Input](../type-aliases/getSuggestedFileName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:72062

***

### getSuggestedStickerSetName()

> **getSuggestedStickerSetName**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns a suggested name for a new sticker set with a given title

#### Parameters

• **parameters**: [`getSuggestedStickerSetName$DirectInput`](../type-aliases/getSuggestedStickerSetName$DirectInput.md)

[getSuggestedStickerSetName$Input](../type-aliases/getSuggestedStickerSetName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:74269

***

### getSuitableDiscussionChats()

> **getSuitableDiscussionChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of basic group and supergroup chats, which can be used as a discussion group for a channel. Returned basic group chats must be first upgraded to supergroups before they can be set as a discussion group.

- To set a returned supergroup as a discussion group, access to its old messages must be enabled using toggleSupergroupIsAllHistoryAvailable first

#### Parameters

• **parameters**: [`getSuitableDiscussionChats$DirectInput`](../type-aliases/getSuitableDiscussionChats$DirectInput.md)

[getSuitableDiscussionChats$Input](../type-aliases/getSuitableDiscussionChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69843

***

### getSuitablePersonalChats()

> **getSuitablePersonalChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of channel chats, which can be used as a personal chat

#### Parameters

• **parameters**: [`getSuitablePersonalChats$DirectInput`](../type-aliases/getSuitablePersonalChats$DirectInput.md)

[getSuitablePersonalChats$Input](../type-aliases/getSuitablePersonalChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69857

***

### getSupergroup()

> **getSupergroup**(`parameters`): `Promise`\<[`supergroup`](../type-aliases/supergroup.md)\>

Returns information about a supergroup or a channel by its identifier. This is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getSupergroup$DirectInput`](../type-aliases/getSupergroup$DirectInput.md)

[getSupergroup$Input](../type-aliases/getSupergroup$Input.md)

#### Returns

`Promise`\<[`supergroup`](../type-aliases/supergroup.md)\>

Promise<[Supergroup](../type-aliases/Supergroup-1.md)>

#### Defined in

dist/generated/types.d.ts:69572

***

### getSupergroupFullInfo()

> **getSupergroupFullInfo**(`parameters`): `Promise`\<[`supergroupFullInfo`](../type-aliases/supergroupFullInfo.md)\>

Returns full information about a supergroup or a channel by its identifier, cached for up to 1 minute

#### Parameters

• **parameters**: [`getSupergroupFullInfo$DirectInput`](../type-aliases/getSupergroupFullInfo$DirectInput.md)

[getSupergroupFullInfo$Input](../type-aliases/getSupergroupFullInfo$Input.md)

#### Returns

`Promise`\<[`supergroupFullInfo`](../type-aliases/supergroupFullInfo.md)\>

Promise<[SupergroupFullInfo](../type-aliases/SupergroupFullInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:69579

***

### getSupergroupMembers()

> **getSupergroupMembers**(`parameters`): `Promise`\<[`chatMembers`](../type-aliases/chatMembers.md)\>

Returns information about members or banned users in a supergroup or channel. Can be used only if supergroupFullInfo.can_get_members == true; additionally, administrator privileges may be required for some filters

#### Parameters

• **parameters**: [`getSupergroupMembers$DirectInput`](../type-aliases/getSupergroupMembers$DirectInput.md)

[getSupergroupMembers$Input](../type-aliases/getSupergroupMembers$Input.md)

#### Returns

`Promise`\<[`chatMembers`](../type-aliases/chatMembers.md)\>

Promise<[ChatMembers](../type-aliases/ChatMembers-1.md)>

#### Defined in

dist/generated/types.d.ts:73624

***

### getSupportName()

> **getSupportName**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Returns localized name of the Telegram support user; for Telegram support only

#### Parameters

• **parameters**: [`getSupportName$DirectInput`](../type-aliases/getSupportName$DirectInput.md)

[getSupportName$Input](../type-aliases/getSupportName$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:74752

***

### getSupportUser()

> **getSupportUser**(`parameters`): `Promise`\<[`user`](../type-aliases/user.md)\>

Returns a user that can be contacted to get support

#### Parameters

• **parameters**: [`getSupportUser$DirectInput`](../type-aliases/getSupportUser$DirectInput.md)

[getSupportUser$Input](../type-aliases/getSupportUser$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user.md)\>

Promise<[User](../type-aliases/User-1.md)>

#### Defined in

dist/generated/types.d.ts:73715

***

### getTemporaryPasswordState()

> **getTemporaryPasswordState**(`parameters`): `Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState.md)\>

Returns information about the current temporary password

#### Parameters

• **parameters**: [`getTemporaryPasswordState$DirectInput`](../type-aliases/getTemporaryPasswordState$DirectInput.md)

[getTemporaryPasswordState$Input](../type-aliases/getTemporaryPasswordState$Input.md)

#### Returns

`Promise`\<[`temporaryPasswordState`](../type-aliases/temporaryPasswordState.md)\>

Promise<[TemporaryPasswordState](../type-aliases/TemporaryPasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69530

***

### getTextEntities()

> **getTextEntities**(`parameters`): `Promise`\<[`textEntities`](../type-aliases/textEntities.md)\>

Returns all entities (mentions, hashtags, cashtags, bot commands, bank card numbers, URLs, and email addresses) found in the text. Can be called synchronously

#### Parameters

• **parameters**: [`getTextEntities$DirectInput`](../type-aliases/getTextEntities$DirectInput.md)

[getTextEntities$Input](../type-aliases/getTextEntities$Input.md)

#### Returns

`Promise`\<[`textEntities`](../type-aliases/textEntities.md)\>

Promise<[TextEntities](../type-aliases/TextEntities-1.md)>

#### Defined in

dist/generated/types.d.ts:70739

***

### getThemedChatEmojiStatuses()

> **getThemedChatEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Returns up to 8 emoji statuses, which must be shown in the emoji status list for chats

#### Parameters

• **parameters**: [`getThemedChatEmojiStatuses$DirectInput`](../type-aliases/getThemedChatEmojiStatuses$DirectInput.md)

[getThemedChatEmojiStatuses$Input](../type-aliases/getThemedChatEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses-1.md)>

#### Defined in

dist/generated/types.d.ts:72020

***

### getThemedEmojiStatuses()

> **getThemedEmojiStatuses**(`parameters`): `Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Returns up to 8 emoji statuses, which must be shown right after the default Premium Badge in the emoji status list for self status

#### Parameters

• **parameters**: [`getThemedEmojiStatuses$DirectInput`](../type-aliases/getThemedEmojiStatuses$DirectInput.md)

[getThemedEmojiStatuses$Input](../type-aliases/getThemedEmojiStatuses$Input.md)

#### Returns

`Promise`\<[`emojiStatuses`](../type-aliases/emojiStatuses.md)\>

Promise<[EmojiStatuses](../type-aliases/EmojiStatuses-1.md)>

#### Defined in

dist/generated/types.d.ts:71992

***

### getThemeParametersJsonString()

> **getThemeParametersJsonString**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Converts a themeParameters object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

• **parameters**: [`getThemeParametersJsonString$DirectInput`](../type-aliases/getThemeParametersJsonString$DirectInput.md)

[getThemeParametersJsonString$Input](../type-aliases/getThemeParametersJsonString$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:70818

***

### getTimeZones()

> **getTimeZones**(`parameters`): `Promise`\<[`timeZones`](../type-aliases/timeZones.md)\>

Returns the list of supported time zones

#### Parameters

• **parameters**: [`getTimeZones$DirectInput`](../type-aliases/getTimeZones$DirectInput.md)

[getTimeZones$Input](../type-aliases/getTimeZones$Input.md)

#### Returns

`Promise`\<[`timeZones`](../type-aliases/timeZones.md)\>

Promise<[TimeZones](../type-aliases/TimeZones-1.md)>

#### Defined in

dist/generated/types.d.ts:73645

***

### getTopChats()

> **getTopChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Returns a list of frequently used chats

#### Parameters

• **parameters**: [`getTopChats$DirectInput`](../type-aliases/getTopChats$DirectInput.md)

[getTopChats$Input](../type-aliases/getTopChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69771

***

### getTrendingStickerSets()

> **getTrendingStickerSets**(`parameters`): `Promise`\<[`trendingStickerSets`](../type-aliases/trendingStickerSets.md)\>

Returns a list of trending sticker sets. For optimal performance, the number of returned sticker sets is chosen by TDLib

#### Parameters

• **parameters**: [`getTrendingStickerSets$DirectInput`](../type-aliases/getTrendingStickerSets$DirectInput.md)

[getTrendingStickerSets$Input](../type-aliases/getTrendingStickerSets$Input.md)

#### Returns

`Promise`\<[`trendingStickerSets`](../type-aliases/trendingStickerSets.md)\>

Promise<[TrendingStickerSets](../type-aliases/TrendingStickerSets-1.md)>

#### Defined in

dist/generated/types.d.ts:72755

***

### getUser()

> **getUser**(`parameters`): `Promise`\<[`user`](../type-aliases/user.md)\>

Returns information about a user by their identifier. This is an offline request if the current user is not a bot

#### Parameters

• **parameters**: [`getUser$DirectInput`](../type-aliases/getUser$DirectInput.md)

[getUser$Input](../type-aliases/getUser$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user.md)\>

Promise<[User](../type-aliases/User-1.md)>

#### Defined in

dist/generated/types.d.ts:69544

***

### getUserChatBoosts()

> **getUserChatBoosts**(`parameters`): `Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts.md)\>

Returns the list of boosts applied to a chat by a given user; requires administrator rights in the chat; for bots only

#### Parameters

• **parameters**: [`getUserChatBoosts$DirectInput`](../type-aliases/getUserChatBoosts$DirectInput.md)

[getUserChatBoosts$Input](../type-aliases/getUserChatBoosts$Input.md)

#### Returns

`Promise`\<[`foundChatBoosts`](../type-aliases/foundChatBoosts.md)\>

Promise<[FoundChatBoosts](../type-aliases/FoundChatBoosts-1.md)>

#### Defined in

dist/generated/types.d.ts:71971

***

### getUserFullInfo()

> **getUserFullInfo**(`parameters`): `Promise`\<[`userFullInfo`](../type-aliases/userFullInfo.md)\>

Returns full information about a user by their identifier

#### Parameters

• **parameters**: [`getUserFullInfo$DirectInput`](../type-aliases/getUserFullInfo$DirectInput.md)

[getUserFullInfo$Input](../type-aliases/getUserFullInfo$Input.md)

#### Returns

`Promise`\<[`userFullInfo`](../type-aliases/userFullInfo.md)\>

Promise<[UserFullInfo](../type-aliases/UserFullInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:69551

***

### getUserLink()

> **getUserLink**(`parameters`): `Promise`\<[`userLink`](../type-aliases/userLink.md)\>

Returns an HTTPS link, which can be used to get information about the current user

#### Parameters

• **parameters**: [`getUserLink$DirectInput`](../type-aliases/getUserLink$DirectInput.md)

[getUserLink$Input](../type-aliases/getUserLink$Input.md)

#### Returns

`Promise`\<[`userLink`](../type-aliases/userLink.md)\>

Promise<[UserLink](../type-aliases/UserLink-1.md)>

#### Defined in

dist/generated/types.d.ts:73237

***

### getUserPrivacySettingRules()

> **getUserPrivacySettingRules**(`parameters`): `Promise`\<[`userPrivacySettingRules`](../type-aliases/userPrivacySettingRules.md)\>

Returns the current privacy settings

#### Parameters

• **parameters**: [`getUserPrivacySettingRules$DirectInput`](../type-aliases/getUserPrivacySettingRules$DirectInput.md)

[getUserPrivacySettingRules$Input](../type-aliases/getUserPrivacySettingRules$Input.md)

#### Returns

`Promise`\<[`userPrivacySettingRules`](../type-aliases/userPrivacySettingRules.md)\>

Promise<[UserPrivacySettingRules](../type-aliases/UserPrivacySettingRules-1.md)>

#### Defined in

dist/generated/types.d.ts:73873

***

### getUserProfilePhotos()

> **getUserProfilePhotos**(`parameters`): `Promise`\<[`chatPhotos`](../type-aliases/chatPhotos.md)\>

Returns the profile photos of a user. Personal and public photo aren't returned

#### Parameters

• **parameters**: [`getUserProfilePhotos$DirectInput`](../type-aliases/getUserProfilePhotos$DirectInput.md)

[getUserProfilePhotos$Input](../type-aliases/getUserProfilePhotos$Input.md)

#### Returns

`Promise`\<[`chatPhotos`](../type-aliases/chatPhotos.md)\>

Promise<[ChatPhotos](../type-aliases/ChatPhotos-1.md)>

#### Defined in

dist/generated/types.d.ts:72699

***

### getUserSupportInfo()

> **getUserSupportInfo**(`parameters`): `Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo.md)\>

Returns support information for the given user; for Telegram support only

#### Parameters

• **parameters**: [`getUserSupportInfo$DirectInput`](../type-aliases/getUserSupportInfo$DirectInput.md)

[getUserSupportInfo$Input](../type-aliases/getUserSupportInfo$Input.md)

#### Returns

`Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo.md)\>

Promise<[UserSupportInfo](../type-aliases/UserSupportInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74738

***

### getVideoChatAvailableParticipants()

> **getVideoChatAvailableParticipants**(`parameters`): `Promise`\<[`messageSenders`](../type-aliases/messageSenders.md)\>

Returns the list of participant identifiers, on whose behalf a video chat in the chat can be joined

#### Parameters

• **parameters**: [`getVideoChatAvailableParticipants$DirectInput`](../type-aliases/getVideoChatAvailableParticipants$DirectInput.md)

[getVideoChatAvailableParticipants$Input](../type-aliases/getVideoChatAvailableParticipants$Input.md)

#### Returns

`Promise`\<[`messageSenders`](../type-aliases/messageSenders.md)\>

Promise<[MessageSenders](../type-aliases/MessageSenders-1.md)>

#### Defined in

dist/generated/types.d.ts:72368

***

### getVideoChatRtmpUrl()

> **getVideoChatRtmpUrl**(`parameters`): `Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl.md)\>

Returns RTMP URL for streaming to the chat; requires owner privileges

#### Parameters

• **parameters**: [`getVideoChatRtmpUrl$DirectInput`](../type-aliases/getVideoChatRtmpUrl$DirectInput.md)

[getVideoChatRtmpUrl$Input](../type-aliases/getVideoChatRtmpUrl$Input.md)

#### Returns

`Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl.md)\>

Promise<[RtmpUrl](../type-aliases/RtmpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:72389

***

### getWebAppLinkUrl()

> **getWebAppLinkUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns an HTTPS URL of a Web App to open after a link of the type internalLinkTypeWebApp is clicked

#### Parameters

• **parameters**: [`getWebAppLinkUrl$DirectInput`](../type-aliases/getWebAppLinkUrl$DirectInput.md)

[getWebAppLinkUrl$Input](../type-aliases/getWebAppLinkUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:70925

***

### getWebAppUrl()

> **getWebAppUrl**(`parameters`): `Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Returns an HTTPS URL of a Web App to open from the side menu, a keyboardButtonTypeWebApp button, or an inlineQueryResultsButtonTypeWebApp button

#### Parameters

• **parameters**: [`getWebAppUrl$DirectInput`](../type-aliases/getWebAppUrl$DirectInput.md)

[getWebAppUrl$Input](../type-aliases/getWebAppUrl$Input.md)

#### Returns

`Promise`\<[`httpUrl`](../type-aliases/httpUrl.md)\>

Promise<[HttpUrl](../type-aliases/HttpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:70939

***

### getWebPageInstantView()

> **getWebPageInstantView**(`parameters`): `Promise`\<[`webPageInstantView`](../type-aliases/webPageInstantView.md)\>

Returns an instant view version of a web page if available. Returns a 404 error if the web page has no instant view page

#### Parameters

• **parameters**: [`getWebPageInstantView$DirectInput`](../type-aliases/getWebPageInstantView$DirectInput.md)

[getWebPageInstantView$Input](../type-aliases/getWebPageInstantView$Input.md)

#### Returns

`Promise`\<[`webPageInstantView`](../type-aliases/webPageInstantView.md)\>

Promise<[WebPageInstantView](../type-aliases/WebPageInstantView-1.md)>

#### Defined in

dist/generated/types.d.ts:72992

***

### hideContactCloseBirthdays()

> **hideContactCloseBirthdays**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Hides the list of contacts that have close birthdays for 24 hours

#### Parameters

• **parameters**: [`hideContactCloseBirthdays$DirectInput`](../type-aliases/hideContactCloseBirthdays$DirectInput.md)

[hideContactCloseBirthdays$Input](../type-aliases/hideContactCloseBirthdays$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70853

***

### hideSuggestedAction()

> **hideSuggestedAction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Hides a suggested action

#### Parameters

• **parameters**: [`hideSuggestedAction$DirectInput`](../type-aliases/hideSuggestedAction$DirectInput.md)

[hideSuggestedAction$Input](../type-aliases/hideSuggestedAction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70846

***

### importContacts()

> **importContacts**(`parameters`): `Promise`\<[`importedContacts`](../type-aliases/importedContacts.md)\>

Adds new contacts or edits existing contacts by their phone numbers; contacts' user identifiers are ignored

#### Parameters

• **parameters**: [`importContacts$DirectInput`](../type-aliases/importContacts$DirectInput.md)

[importContacts$Input](../type-aliases/importContacts$Input.md)

#### Returns

`Promise`\<[`importedContacts`](../type-aliases/importedContacts.md)\>

Promise<[ImportedContacts](../type-aliases/ImportedContacts-1.md)>

#### Defined in

dist/generated/types.d.ts:72606

***

### importMessages()

> **importMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Imports messages exported from another app

#### Parameters

• **parameters**: [`importMessages$DirectInput`](../type-aliases/importMessages$DirectInput.md)

[importMessages$Input](../type-aliases/importMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72187

***

### inviteGroupCallParticipants()

> **inviteGroupCallParticipants**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Invites users to an active group call. Sends a service message of type messageInviteVideoChatParticipants for video chats

#### Parameters

• **parameters**: [`inviteGroupCallParticipants$DirectInput`](../type-aliases/inviteGroupCallParticipants$DirectInput.md)

[inviteGroupCallParticipants$Input](../type-aliases/inviteGroupCallParticipants$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72466

***

### joinChat()

> **joinChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds the current user as a new member to a chat. Private and secret chats can't be joined using this method. May return an error with a message "INVITE_REQUEST_SENT" if only a join request was created

#### Parameters

• **parameters**: [`joinChat$DirectInput`](../type-aliases/joinChat$DirectInput.md)

[joinChat$Input](../type-aliases/joinChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71549

***

### joinChatByInviteLink()

> **joinChatByInviteLink**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Uses an invite link to add the current user to the chat if possible. May return an error with a message "INVITE_REQUEST_SENT" if only a join request was created

#### Parameters

• **parameters**: [`joinChatByInviteLink$DirectInput`](../type-aliases/joinChatByInviteLink$DirectInput.md)

[joinChatByInviteLink$Input](../type-aliases/joinChatByInviteLink$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:72291

***

### joinGroupCall()

> **joinGroupCall**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Joins an active group call. Returns join response payload for tgcalls

#### Parameters

• **parameters**: [`joinGroupCall$DirectInput`](../type-aliases/joinGroupCall$DirectInput.md)

[joinGroupCall$Input](../type-aliases/joinGroupCall$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:72424

***

### launchPrepaidPremiumGiveaway()

> **launchPrepaidPremiumGiveaway**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Launches a prepaid Telegram Premium giveaway

#### Parameters

• **parameters**: [`launchPrepaidPremiumGiveaway$DirectInput`](../type-aliases/launchPrepaidPremiumGiveaway$DirectInput.md)

[launchPrepaidPremiumGiveaway$Input](../type-aliases/launchPrepaidPremiumGiveaway$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74444

***

### leaveChat()

> **leaveChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes the current user from chat members. Private and secret chats can't be left using this method

#### Parameters

• **parameters**: [`leaveChat$DirectInput`](../type-aliases/leaveChat$DirectInput.md)

[leaveChat$Input](../type-aliases/leaveChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71556

***

### leaveGroupCall()

> **leaveGroupCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Leaves a group call

#### Parameters

• **parameters**: [`leaveGroupCall$DirectInput`](../type-aliases/leaveGroupCall$DirectInput.md)

[leaveGroupCall$Input](../type-aliases/leaveGroupCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72550

***

### loadActiveStories()

> **loadActiveStories**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Loads more active stories from a story list. The loaded stories will be sent through updates. Active stories are sorted by

- the pair (active_stories.order, active_stories.story_sender_chat_id) in descending order. Returns a 404 error if all active stories have been loaded

#### Parameters

• **parameters**: [`loadActiveStories$DirectInput`](../type-aliases/loadActiveStories$DirectInput.md)

[loadActiveStories$Input](../type-aliases/loadActiveStories$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71802

***

### loadChats()

> **loadChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Loads more chats from a chat list. The loaded chats and their positions in the chat list will be sent through updates. Chats are sorted by the pair (chat.position.order, chat.id) in descending order. Returns a 404 error if all chats have been loaded

#### Parameters

• **parameters**: [`loadChats$DirectInput`](../type-aliases/loadChats$DirectInput.md)

[loadChats$Input](../type-aliases/loadChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69690

***

### loadGroupCallParticipants()

> **loadGroupCallParticipants**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Loads more participants of a group call. The loaded participants will be received through updates. Use the field groupCall.loaded_all_participants to check whether all participants have already been loaded

#### Parameters

• **parameters**: [`loadGroupCallParticipants$DirectInput`](../type-aliases/loadGroupCallParticipants$DirectInput.md)

[loadGroupCallParticipants$Input](../type-aliases/loadGroupCallParticipants$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72543

***

### loadQuickReplyShortcutMessages()

> **loadQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Loads quick reply messages that can be sent by a given quick reply shortcut. The loaded messages will be sent through updateQuickReplyShortcutMessages

#### Parameters

• **parameters**: [`loadQuickReplyShortcutMessages$DirectInput`](../type-aliases/loadQuickReplyShortcutMessages$DirectInput.md)

[loadQuickReplyShortcutMessages$Input](../type-aliases/loadQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70484

***

### loadQuickReplyShortcuts()

> **loadQuickReplyShortcuts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Loads quick reply shortcuts created by the current user. The loaded topics will be sent through updateQuickReplyShortcuts

#### Parameters

• **parameters**: [`loadQuickReplyShortcuts$DirectInput`](../type-aliases/loadQuickReplyShortcuts$DirectInput.md)

[loadQuickReplyShortcuts$Input](../type-aliases/loadQuickReplyShortcuts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70456

***

### loadSavedMessagesTopics()

> **loadSavedMessagesTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Loads more Saved Messages topics. The loaded topics will be sent through updateSavedMessagesTopic. Topics are sorted by their topic.order in descending order. Returns a 404 error if all topics have been loaded

#### Parameters

• **parameters**: [`loadSavedMessagesTopics$DirectInput`](../type-aliases/loadSavedMessagesTopics$DirectInput.md)

[loadSavedMessagesTopics$Input](../type-aliases/loadSavedMessagesTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69864

***

### logOut()

> **logOut**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Closes the TDLib instance after a proper logout. Requires an available network connection. All local data will be destroyed. After the logout completes, updateAuthorizationState with authorizationStateClosed will be sent

#### Parameters

• **parameters**: [`logOut$DirectInput`](../type-aliases/logOut$DirectInput.md)

[logOut$Input](../type-aliases/logOut$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69370

***

### openChat()

> **openChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that the chat is opened by the user. Many useful activities depend on the chat being opened or closed (e.g., in supergroups and channels all updates are received only for opened chats)

#### Parameters

• **parameters**: [`openChat$DirectInput`](../type-aliases/openChat$DirectInput.md)

[openChat$Input](../type-aliases/openChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71046

***

### openChatSimilarChat()

> **openChatSimilarChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that a chat was opened from the list of similar chats. The method is independent of openChat and closeChat methods

#### Parameters

• **parameters**: [`openChatSimilarChat$DirectInput`](../type-aliases/openChatSimilarChat$DirectInput.md)

[openChatSimilarChat$Input](../type-aliases/openChatSimilarChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69764

***

### openMessageContent()

> **openMessageContent**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that the message content has been opened (e.g., the user has opened a photo, video, document, location or venue, or has listened to an audio file or voice note message).

- An updateMessageContentOpened update will be generated if something has changed

#### Parameters

• **parameters**: [`openMessageContent$DirectInput`](../type-aliases/openMessageContent$DirectInput.md)

[openMessageContent$Input](../type-aliases/openMessageContent$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71071

***

### openStory()

> **openStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that a story is opened and is being viewed by the user

#### Parameters

• **parameters**: [`openStory$DirectInput`](../type-aliases/openStory$DirectInput.md)

[openStory$Input](../type-aliases/openStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71848

***

### openWebApp()

> **openWebApp**(`parameters`): `Promise`\<[`webAppInfo`](../type-aliases/webAppInfo.md)\>

Informs TDLib that a Web App is being opened from the attachment menu, a botMenuButton button, an internalLinkTypeAttachmentMenuBot link, or an inlineKeyboardButtonTypeWebApp button.

- For each bot, a confirmation alert about data sent to the bot must be shown once

#### Parameters

• **parameters**: [`openWebApp$DirectInput`](../type-aliases/openWebApp$DirectInput.md)

[openWebApp$Input](../type-aliases/openWebApp$Input.md)

#### Returns

`Promise`\<[`webAppInfo`](../type-aliases/webAppInfo.md)\>

Promise<[WebAppInfo](../type-aliases/WebAppInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:70955

***

### optimizeStorage()

> **optimizeStorage**(`parameters`): `Promise`\<[`storageStatistics`](../type-aliases/storageStatistics.md)\>

Optimizes storage usage, i.e. deletes some files and returns new storage usage statistics. Secret thumbnails can't be deleted

#### Parameters

• **parameters**: [`optimizeStorage$DirectInput`](../type-aliases/optimizeStorage$DirectInput.md)

[optimizeStorage$Input](../type-aliases/optimizeStorage$Input.md)

#### Returns

`Promise`\<[`storageStatistics`](../type-aliases/storageStatistics.md)\>

Promise<[StorageStatistics](../type-aliases/StorageStatistics-1.md)>

#### Defined in

dist/generated/types.d.ts:74092

***

### parseMarkdown()

> **parseMarkdown**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Parses Markdown entities in a human-friendly format, ignoring markup errors. Can be called synchronously

#### Parameters

• **parameters**: [`parseMarkdown$DirectInput`](../type-aliases/parseMarkdown$DirectInput.md)

[parseMarkdown$Input](../type-aliases/parseMarkdown$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Promise<[FormattedText](../type-aliases/FormattedText-1.md)>

#### Defined in

dist/generated/types.d.ts:70755

***

### parseTextEntities()

> **parseTextEntities**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Parses Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, ExpandableBlockQuote, Code, Pre, PreCode, TextUrl

- and MentionName entities from a marked-up text. Can be called synchronously

#### Parameters

• **parameters**: [`parseTextEntities$DirectInput`](../type-aliases/parseTextEntities$DirectInput.md)

[parseTextEntities$Input](../type-aliases/parseTextEntities$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Promise<[FormattedText](../type-aliases/FormattedText-1.md)>

#### Defined in

dist/generated/types.d.ts:70748

***

### pinChatMessage()

> **pinChatMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Pins a message in a chat. A message can be pinned only if messageProperties.can_be_pinned

#### Parameters

• **parameters**: [`pinChatMessage$DirectInput`](../type-aliases/pinChatMessage$DirectInput.md)

[pinChatMessage$Input](../type-aliases/pinChatMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71521

***

### pingProxy()

> **pingProxy**(`parameters`): `Promise`\<[`seconds`](../type-aliases/seconds.md)\>

Computes time needed to receive a response from a Telegram server through a proxy. Can be called before authorization

#### Parameters

• **parameters**: [`pingProxy$DirectInput`](../type-aliases/pingProxy$DirectInput.md)

[pingProxy$Input](../type-aliases/pingProxy$Input.md)

#### Returns

`Promise`\<[`seconds`](../type-aliases/seconds.md)\>

Promise<[Seconds](../type-aliases/Seconds-1.md)>

#### Defined in

dist/generated/types.d.ts:74675

***

### preliminaryUploadFile()

> **preliminaryUploadFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file.md)\>

Preliminary uploads a file to the cloud before sending it in a message, which can be useful for uploading of being recorded voice and video notes.

- In all other cases there is no need to preliminary upload a file. Updates updateFile will be used to notify about upload progress.

- The upload will not be completed until the file is sent in a message

#### Parameters

• **parameters**: [`preliminaryUploadFile$DirectInput`](../type-aliases/preliminaryUploadFile$DirectInput.md)

[preliminaryUploadFile$Input](../type-aliases/preliminaryUploadFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file.md)\>

Promise<[File](../type-aliases/File-1.md)>

#### Defined in

dist/generated/types.d.ts:72073

***

### processChatFolderNewChats()

> **processChatFolderNewChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Process new chats added to a shareable chat folder by its owner

#### Parameters

• **parameters**: [`processChatFolderNewChats$DirectInput`](../type-aliases/processChatFolderNewChats$DirectInput.md)

[processChatFolderNewChats$Input](../type-aliases/processChatFolderNewChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71337

***

### processChatJoinRequest()

> **processChatJoinRequest**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Handles a pending join request in a chat

#### Parameters

• **parameters**: [`processChatJoinRequest$DirectInput`](../type-aliases/processChatJoinRequest$DirectInput.md)

[processChatJoinRequest$Input](../type-aliases/processChatJoinRequest$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72305

***

### processChatJoinRequests()

> **processChatJoinRequests**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Handles all pending join requests for a given link in a chat

#### Parameters

• **parameters**: [`processChatJoinRequests$DirectInput`](../type-aliases/processChatJoinRequests$DirectInput.md)

[processChatJoinRequests$Input](../type-aliases/processChatJoinRequests$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72312

***

### processPushNotification()

> **processPushNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Handles a push notification. Returns error with code 406 if the push notification is not supported and connection to the server is required to fetch new data. Can be called before authorization

#### Parameters

• **parameters**: [`processPushNotification$DirectInput`](../type-aliases/processPushNotification$DirectInput.md)

[processPushNotification$Input](../type-aliases/processPushNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73845

***

### rateSpeechRecognition()

> **rateSpeechRecognition**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Rates recognized speech in a video note or a voice note message

#### Parameters

• **parameters**: [`rateSpeechRecognition$DirectInput`](../type-aliases/rateSpeechRecognition$DirectInput.md)

[rateSpeechRecognition$Input](../type-aliases/rateSpeechRecognition$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70190

***

### readAllChatMentions()

> **readAllChatMentions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Marks all mentions in a chat as read

#### Parameters

• **parameters**: [`readAllChatMentions$DirectInput`](../type-aliases/readAllChatMentions$DirectInput.md)

[readAllChatMentions$Input](../type-aliases/readAllChatMentions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71113

***

### readAllChatReactions()

> **readAllChatReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Marks all reactions in a chat or a forum topic as read

#### Parameters

• **parameters**: [`readAllChatReactions$DirectInput`](../type-aliases/readAllChatReactions$DirectInput.md)

[readAllChatReactions$Input](../type-aliases/readAllChatReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71127

***

### readAllMessageThreadMentions()

> **readAllMessageThreadMentions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Marks all mentions in a forum topic as read

#### Parameters

• **parameters**: [`readAllMessageThreadMentions$DirectInput`](../type-aliases/readAllMessageThreadMentions$DirectInput.md)

[readAllMessageThreadMentions$Input](../type-aliases/readAllMessageThreadMentions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71120

***

### readAllMessageThreadReactions()

> **readAllMessageThreadReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Marks all reactions in a forum topic as read

#### Parameters

• **parameters**: [`readAllMessageThreadReactions$DirectInput`](../type-aliases/readAllMessageThreadReactions$DirectInput.md)

[readAllMessageThreadReactions$Input](../type-aliases/readAllMessageThreadReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71134

***

### readChatList()

> **readChatList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Traverse all chats in a chat list and marks all messages in the chats as read

#### Parameters

• **parameters**: [`readChatList$DirectInput`](../type-aliases/readChatList$DirectInput.md)

[readChatList$Input](../type-aliases/readChatList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71716

***

### readdQuickReplyShortcutMessages()

> **readdQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages.md)\>

Readds quick reply messages which failed to add. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is readded, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be readded, null will be returned instead of the message

#### Parameters

• **parameters**: [`readdQuickReplyShortcutMessages$DirectInput`](../type-aliases/readdQuickReplyShortcutMessages$DirectInput.md)

[readdQuickReplyShortcutMessages$Input](../type-aliases/readdQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`quickReplyMessages`](../type-aliases/quickReplyMessages.md)\>

Promise<[QuickReplyMessages](../type-aliases/QuickReplyMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:70527

***

### readFilePart()

> **readFilePart**(`parameters`): `Promise`\<[`filePart`](../type-aliases/filePart.md)\>

Reads a part of a file from the TDLib file cache and returns read bytes. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct read from the file

#### Parameters

• **parameters**: [`readFilePart$DirectInput`](../type-aliases/readFilePart$DirectInput.md)

[readFilePart$Input](../type-aliases/readFilePart$Input.md)

#### Returns

`Promise`\<[`filePart`](../type-aliases/filePart.md)\>

Promise<[FilePart](../type-aliases/FilePart-1.md)>

#### Defined in

dist/generated/types.d.ts:72108

***

### recognizeSpeech()

> **recognizeSpeech**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Recognizes speech in a video note or a voice note message

#### Parameters

• **parameters**: [`recognizeSpeech$DirectInput`](../type-aliases/recognizeSpeech$DirectInput.md)

[recognizeSpeech$Input](../type-aliases/recognizeSpeech$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70183

***

### recoverAuthenticationPassword()

> **recoverAuthenticationPassword**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Recovers the 2-step verification password with a password recovery code sent to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`recoverAuthenticationPassword$DirectInput`](../type-aliases/recoverAuthenticationPassword$DirectInput.md)

[recoverAuthenticationPassword$Input](../type-aliases/recoverAuthenticationPassword$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69342

***

### recoverPassword()

> **recoverPassword**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Recovers the 2-step verification password using a recovery code sent to an email address that was previously set up

#### Parameters

• **parameters**: [`recoverPassword$DirectInput`](../type-aliases/recoverPassword$DirectInput.md)

[recoverPassword$Input](../type-aliases/recoverPassword$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Promise<[PasswordState](../type-aliases/PasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69502

***

### refundStarPayment()

> **refundStarPayment**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Refunds a previously done payment in Telegram Stars

#### Parameters

• **parameters**: [`refundStarPayment$DirectInput`](../type-aliases/refundStarPayment$DirectInput.md)

[refundStarPayment$Input](../type-aliases/refundStarPayment$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73708

***

### registerDevice()

> **registerDevice**(`parameters`): `Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId.md)\>

Registers the currently used device for receiving push notifications. Returns a globally unique identifier of the push notification subscription

#### Parameters

• **parameters**: [`registerDevice$DirectInput`](../type-aliases/registerDevice$DirectInput.md)

[registerDevice$Input](../type-aliases/registerDevice$Input.md)

#### Returns

`Promise`\<[`pushReceiverId`](../type-aliases/pushReceiverId.md)\>

Promise<[PushReceiverId](../type-aliases/PushReceiverId-1.md)>

#### Defined in

dist/generated/types.d.ts:73838

***

### registerUser()

> **registerUser**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Finishes user registration. Works only when the current authorization state is authorizationStateWaitRegistration

#### Parameters

• **parameters**: [`registerUser$DirectInput`](../type-aliases/registerUser$DirectInput.md)

[registerUser$Input](../type-aliases/registerUser$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69305

***

### removeAllFilesFromDownloads()

> **removeAllFilesFromDownloads**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes all files from the file download list

#### Parameters

• **parameters**: [`removeAllFilesFromDownloads$DirectInput`](../type-aliases/removeAllFilesFromDownloads$DirectInput.md)

[removeAllFilesFromDownloads$Input](../type-aliases/removeAllFilesFromDownloads$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72152

***

### removeBusinessConnectedBotFromChat()

> **removeBusinessConnectedBotFromChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes the connected business bot from a specific chat by adding the chat to businessRecipients.excluded_chat_ids

#### Parameters

• **parameters**: [`removeBusinessConnectedBotFromChat$DirectInput`](../type-aliases/removeBusinessConnectedBotFromChat$DirectInput.md)

[removeBusinessConnectedBotFromChat$Input](../type-aliases/removeBusinessConnectedBotFromChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73195

***

### removeChatActionBar()

> **removeChatActionBar**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a chat action bar without any other action

#### Parameters

• **parameters**: [`removeChatActionBar$DirectInput`](../type-aliases/removeChatActionBar$DirectInput.md)

[removeChatActionBar$Input](../type-aliases/removeChatActionBar$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73966

***

### removeContacts()

> **removeContacts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes users from the contact list

#### Parameters

• **parameters**: [`removeContacts$DirectInput`](../type-aliases/removeContacts$DirectInput.md)

[removeContacts$Input](../type-aliases/removeContacts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72627

***

### removeFavoriteSticker()

> **removeFavoriteSticker**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a sticker from the list of favorite stickers

#### Parameters

• **parameters**: [`removeFavoriteSticker$DirectInput`](../type-aliases/removeFavoriteSticker$DirectInput.md)

[removeFavoriteSticker$Input](../type-aliases/removeFavoriteSticker$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72864

***

### removeFileFromDownloads()

> **removeFileFromDownloads**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a file from the file download list

#### Parameters

• **parameters**: [`removeFileFromDownloads$DirectInput`](../type-aliases/removeFileFromDownloads$DirectInput.md)

[removeFileFromDownloads$Input](../type-aliases/removeFileFromDownloads$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72145

***

### removeInstalledBackground()

> **removeInstalledBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes background from the list of installed backgrounds

#### Parameters

• **parameters**: [`removeInstalledBackground$DirectInput`](../type-aliases/removeInstalledBackground$DirectInput.md)

[removeInstalledBackground$Input](../type-aliases/removeInstalledBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73757

***

### removeMessageReaction()

> **removeMessageReaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a reaction from a message. A chosen reaction can always be removed

#### Parameters

• **parameters**: [`removeMessageReaction$DirectInput`](../type-aliases/removeMessageReaction$DirectInput.md)

[removeMessageReaction$Input](../type-aliases/removeMessageReaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70662

***

### removeNotification()

> **removeNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes an active notification from notification list. Needs to be called only if the notification is removed by the current user

#### Parameters

• **parameters**: [`removeNotification$DirectInput`](../type-aliases/removeNotification$DirectInput.md)

[removeNotification$Input](../type-aliases/removeNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70134

***

### removeNotificationGroup()

> **removeNotificationGroup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a group of active notifications. Needs to be called only if the notification group is removed by the current user

#### Parameters

• **parameters**: [`removeNotificationGroup$DirectInput`](../type-aliases/removeNotificationGroup$DirectInput.md)

[removeNotificationGroup$Input](../type-aliases/removeNotificationGroup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70141

***

### removePendingPaidMessageReactions()

> **removePendingPaidMessageReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes all pending paid reactions on a message. Can be called within 5 seconds after the last addPaidMessageReaction call

#### Parameters

• **parameters**: [`removePendingPaidMessageReactions$DirectInput`](../type-aliases/removePendingPaidMessageReactions$DirectInput.md)

[removePendingPaidMessageReactions$Input](../type-aliases/removePendingPaidMessageReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70676

***

### removeProxy()

> **removeProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a proxy server. Can be called before authorization

#### Parameters

• **parameters**: [`removeProxy$DirectInput`](../type-aliases/removeProxy$DirectInput.md)

[removeProxy$Input](../type-aliases/removeProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74654

***

### removeRecentHashtag()

> **removeRecentHashtag**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a hashtag from the list of recently used hashtags

#### Parameters

• **parameters**: [`removeRecentHashtag$DirectInput`](../type-aliases/removeRecentHashtag$DirectInput.md)

[removeRecentHashtag$Input](../type-aliases/removeRecentHashtag$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72978

***

### removeRecentlyFoundChat()

> **removeRecentlyFoundChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a chat from the list of recently found chats

#### Parameters

• **parameters**: [`removeRecentlyFoundChat$DirectInput`](../type-aliases/removeRecentlyFoundChat$DirectInput.md)

[removeRecentlyFoundChat$Input](../type-aliases/removeRecentlyFoundChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69799

***

### removeRecentSticker()

> **removeRecentSticker**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a sticker from the list of recently used stickers

#### Parameters

• **parameters**: [`removeRecentSticker$DirectInput`](../type-aliases/removeRecentSticker$DirectInput.md)

[removeRecentSticker$Input](../type-aliases/removeRecentSticker$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72834

***

### removeSavedAnimation()

> **removeSavedAnimation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes an animation from the list of saved animations

#### Parameters

• **parameters**: [`removeSavedAnimation$DirectInput`](../type-aliases/removeSavedAnimation$DirectInput.md)

[removeSavedAnimation$Input](../type-aliases/removeSavedAnimation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72957

***

### removeSavedNotificationSound()

> **removeSavedNotificationSound**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a notification sound from the list of saved notification sounds

#### Parameters

• **parameters**: [`removeSavedNotificationSound$DirectInput`](../type-aliases/removeSavedNotificationSound$DirectInput.md)

[removeSavedNotificationSound$Input](../type-aliases/removeSavedNotificationSound$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71660

***

### removeSearchedForTag()

> **removeSearchedForTag**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a hashtag or a cashtag from the list of recently searched for hashtags or cashtags

#### Parameters

• **parameters**: [`removeSearchedForTag$DirectInput`](../type-aliases/removeSearchedForTag$DirectInput.md)

[removeSearchedForTag$Input](../type-aliases/removeSearchedForTag$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70041

***

### removeStickerFromSet()

> **removeStickerFromSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a sticker from the set to which it belongs. The sticker set must be owned by the current user

#### Parameters

• **parameters**: [`removeStickerFromSet$DirectInput`](../type-aliases/removeStickerFromSet$DirectInput.md)

[removeStickerFromSet$Input](../type-aliases/removeStickerFromSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74339

***

### removeTopChat()

> **removeTopChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a chat from the list of frequently used chats. Supported only if the chat info database is enabled

#### Parameters

• **parameters**: [`removeTopChat$DirectInput`](../type-aliases/removeTopChat$DirectInput.md)

[removeTopChat$Input](../type-aliases/removeTopChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69778

***

### reorderActiveUsernames()

> **reorderActiveUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes order of active usernames of the current user

#### Parameters

• **parameters**: [`reorderActiveUsernames$DirectInput`](../type-aliases/reorderActiveUsernames$DirectInput.md)

[reorderActiveUsernames$Input](../type-aliases/reorderActiveUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73055

***

### reorderBotActiveUsernames()

> **reorderBotActiveUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes order of active usernames of a bot. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`reorderBotActiveUsernames$DirectInput`](../type-aliases/reorderBotActiveUsernames$DirectInput.md)

[reorderBotActiveUsernames$Input](../type-aliases/reorderBotActiveUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73391

***

### reorderBotMediaPreviews()

> **reorderBotMediaPreviews**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes order of media previews in the list of media previews of a bot

#### Parameters

• **parameters**: [`reorderBotMediaPreviews$DirectInput`](../type-aliases/reorderBotMediaPreviews$DirectInput.md)

[reorderBotMediaPreviews$Input](../type-aliases/reorderBotMediaPreviews$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73349

***

### reorderChatFolders()

> **reorderChatFolders**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the order of chat folders

#### Parameters

• **parameters**: [`reorderChatFolders$DirectInput`](../type-aliases/reorderChatFolders$DirectInput.md)

[reorderChatFolders$Input](../type-aliases/reorderChatFolders$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71253

***

### reorderInstalledStickerSets()

> **reorderInstalledStickerSets**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the order of installed sticker sets

#### Parameters

• **parameters**: [`reorderInstalledStickerSets$DirectInput`](../type-aliases/reorderInstalledStickerSets$DirectInput.md)

[reorderInstalledStickerSets$Input](../type-aliases/reorderInstalledStickerSets$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72811

***

### reorderQuickReplyShortcuts()

> **reorderQuickReplyShortcuts**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the order of quick reply shortcuts

#### Parameters

• **parameters**: [`reorderQuickReplyShortcuts$DirectInput`](../type-aliases/reorderQuickReplyShortcuts$DirectInput.md)

[reorderQuickReplyShortcuts$Input](../type-aliases/reorderQuickReplyShortcuts$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70477

***

### reorderSupergroupActiveUsernames()

> **reorderSupergroupActiveUsernames**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes order of active usernames of a supergroup or channel, requires owner privileges in the supergroup or channel

#### Parameters

• **parameters**: [`reorderSupergroupActiveUsernames$DirectInput`](../type-aliases/reorderSupergroupActiveUsernames$DirectInput.md)

[reorderSupergroupActiveUsernames$Input](../type-aliases/reorderSupergroupActiveUsernames$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73519

***

### replacePrimaryChatInviteLink()

> **replacePrimaryChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Replaces current primary invite link for a chat with a new primary invite link. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right

#### Parameters

• **parameters**: [`replacePrimaryChatInviteLink$DirectInput`](../type-aliases/replacePrimaryChatInviteLink$DirectInput.md)

[replacePrimaryChatInviteLink$Input](../type-aliases/replacePrimaryChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLink`](../type-aliases/chatInviteLink.md)\>

Promise<[ChatInviteLink](../type-aliases/ChatInviteLink-1.md)>

#### Defined in

dist/generated/types.d.ts:72194

***

### replaceStickerInSet()

> **replaceStickerInSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Replaces existing sticker in a set. The function is equivalent to removeStickerFromSet, then addStickerToSet, then setStickerPositionInSet

#### Parameters

• **parameters**: [`replaceStickerInSet$DirectInput`](../type-aliases/replaceStickerInSet$DirectInput.md)

[replaceStickerInSet$Input](../type-aliases/replaceStickerInSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74297

***

### replaceVideoChatRtmpUrl()

> **replaceVideoChatRtmpUrl**(`parameters`): `Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl.md)\>

Replaces the current RTMP URL for streaming to the chat; requires owner privileges

#### Parameters

• **parameters**: [`replaceVideoChatRtmpUrl$DirectInput`](../type-aliases/replaceVideoChatRtmpUrl$DirectInput.md)

[replaceVideoChatRtmpUrl$Input](../type-aliases/replaceVideoChatRtmpUrl$Input.md)

#### Returns

`Promise`\<[`rtmpUrl`](../type-aliases/rtmpUrl.md)\>

Promise<[RtmpUrl](../type-aliases/RtmpUrl-1.md)>

#### Defined in

dist/generated/types.d.ts:72396

***

### reportAuthenticationCodeMissing()

> **reportAuthenticationCodeMissing**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports that authentication code wasn't delivered via SMS; for official mobile applications only. Works only when the current authorization state is authorizationStateWaitCode

#### Parameters

• **parameters**: [`reportAuthenticationCodeMissing$DirectInput`](../type-aliases/reportAuthenticationCodeMissing$DirectInput.md)

[reportAuthenticationCodeMissing$Input](../type-aliases/reportAuthenticationCodeMissing$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69356

***

### reportChat()

> **reportChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if chat.can_be_reported

#### Parameters

• **parameters**: [`reportChat$DirectInput`](../type-aliases/reportChat$DirectInput.md)

[reportChat$Input](../type-aliases/reportChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73973

***

### reportChatPhoto()

> **reportChatPhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports a chat photo to the Telegram moderators. A chat photo can be reported only if chat.can_be_reported

#### Parameters

• **parameters**: [`reportChatPhoto$DirectInput`](../type-aliases/reportChatPhoto$DirectInput.md)

[reportChatPhoto$Input](../type-aliases/reportChatPhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73980

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

dist/generated/types.d.ts:70127

***

### reportMessageReactions()

> **reportMessageReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports reactions set on a message to the Telegram moderators. Reactions on a message can be reported only if messageProperties.can_report_reactions

#### Parameters

• **parameters**: [`reportMessageReactions$DirectInput`](../type-aliases/reportMessageReactions$DirectInput.md)

[reportMessageReactions$Input](../type-aliases/reportMessageReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73987

***

### reportPhoneNumberCodeMissing()

> **reportPhoneNumberCodeMissing**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports that authentication code wasn't delivered via SMS to the specified phone number; for official mobile applications only

#### Parameters

• **parameters**: [`reportPhoneNumberCodeMissing$DirectInput`](../type-aliases/reportPhoneNumberCodeMissing$DirectInput.md)

[reportPhoneNumberCodeMissing$Input](../type-aliases/reportPhoneNumberCodeMissing$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73146

***

### reportStory()

> **reportStory**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports a story to the Telegram moderators

#### Parameters

• **parameters**: [`reportStory$DirectInput`](../type-aliases/reportStory$DirectInput.md)

[reportStory$Input](../type-aliases/reportStory$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71890

***

### reportSupergroupAntiSpamFalsePositive()

> **reportSupergroupAntiSpamFalsePositive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports a false deletion of a message by aggressive anti-spam checks; requires administrator rights in the supergroup. Can be called only for messages from chatEventMessageDeleted with can_report_anti_spam_false_positive == true

#### Parameters

• **parameters**: [`reportSupergroupAntiSpamFalsePositive$DirectInput`](../type-aliases/reportSupergroupAntiSpamFalsePositive$DirectInput.md)

[reportSupergroupAntiSpamFalsePositive$Input](../type-aliases/reportSupergroupAntiSpamFalsePositive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73617

***

### reportSupergroupSpam()

> **reportSupergroupSpam**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reports messages in a supergroup as spam; requires administrator rights in the supergroup

#### Parameters

• **parameters**: [`reportSupergroupSpam$DirectInput`](../type-aliases/reportSupergroupSpam$DirectInput.md)

[reportSupergroupSpam$Input](../type-aliases/reportSupergroupSpam$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73610

***

### requestAuthenticationPasswordRecovery()

> **requestAuthenticationPasswordRecovery**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Requests to send a 2-step verification password recovery code to an email address that was previously set up. Works only when the current authorization state is authorizationStateWaitPassword

#### Parameters

• **parameters**: [`requestAuthenticationPasswordRecovery$DirectInput`](../type-aliases/requestAuthenticationPasswordRecovery$DirectInput.md)

[requestAuthenticationPasswordRecovery$Input](../type-aliases/requestAuthenticationPasswordRecovery$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69328

***

### requestPasswordRecovery()

> **requestPasswordRecovery**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Requests to send a 2-step verification password recovery code to an email address that was previously set up

#### Parameters

• **parameters**: [`requestPasswordRecovery$DirectInput`](../type-aliases/requestPasswordRecovery$DirectInput.md)

[requestPasswordRecovery$Input](../type-aliases/requestPasswordRecovery$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:69488

***

### requestQrCodeAuthentication()

> **requestQrCodeAuthentication**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Requests QR code authentication by scanning a QR code on another logged in device. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

#### Parameters

• **parameters**: [`requestQrCodeAuthentication$DirectInput`](../type-aliases/requestQrCodeAuthentication$DirectInput.md)

[requestQrCodeAuthentication$Input](../type-aliases/requestQrCodeAuthentication$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69298

***

### resendAuthenticationCode()

> **resendAuthenticationCode**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Resends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitCode, the next_code_type of the result is not null

- and the server-specified timeout has passed, or when the current authorization state is authorizationStateWaitEmailCode

#### Parameters

• **parameters**: [`resendAuthenticationCode$DirectInput`](../type-aliases/resendAuthenticationCode$DirectInput.md)

[resendAuthenticationCode$Input](../type-aliases/resendAuthenticationCode$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69275

***

### resendEmailAddressVerificationCode()

> **resendEmailAddressVerificationCode**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Resends the code to verify an email address to be added to a user's Telegram Passport

#### Parameters

• **parameters**: [`resendEmailAddressVerificationCode$DirectInput`](../type-aliases/resendEmailAddressVerificationCode$DirectInput.md)

[resendEmailAddressVerificationCode$Input](../type-aliases/resendEmailAddressVerificationCode$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74220

***

### resendLoginEmailAddressCode()

> **resendLoginEmailAddressCode**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Resends the login email address verification code

#### Parameters

• **parameters**: [`resendLoginEmailAddressCode$DirectInput`](../type-aliases/resendLoginEmailAddressCode$DirectInput.md)

[resendLoginEmailAddressCode$Input](../type-aliases/resendLoginEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:69437

***

### resendMessages()

> **resendMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Resends messages which failed to send. Can be called only for messages for which messageSendingStateFailed.can_retry is true and after specified in messageSendingStateFailed.retry_after time passed.

- If a message is re-sent, the corresponding failed to send message is deleted. Returns the sent messages in the same order as the message identifiers passed in message_ids. If a message can't be re-sent, null will be returned instead of the message

#### Parameters

• **parameters**: [`resendMessages$DirectInput`](../type-aliases/resendMessages$DirectInput.md)

[resendMessages$Input](../type-aliases/resendMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:70259

***

### resendPhoneNumberCode()

> **resendPhoneNumberCode**(`parameters`): `Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo.md)\>

Resends the authentication code sent to a phone number. Works only if the previously received authenticationCodeInfo next_code_type was not null and the server-specified timeout has passed

#### Parameters

• **parameters**: [`resendPhoneNumberCode$DirectInput`](../type-aliases/resendPhoneNumberCode$DirectInput.md)

[resendPhoneNumberCode$Input](../type-aliases/resendPhoneNumberCode$Input.md)

#### Returns

`Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo.md)\>

Promise<[AuthenticationCodeInfo](../type-aliases/AuthenticationCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73153

***

### resendRecoveryEmailAddressCode()

> **resendRecoveryEmailAddressCode**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Resends the 2-step verification recovery email address verification code

#### Parameters

• **parameters**: [`resendRecoveryEmailAddressCode$DirectInput`](../type-aliases/resendRecoveryEmailAddressCode$DirectInput.md)

[resendRecoveryEmailAddressCode$Input](../type-aliases/resendRecoveryEmailAddressCode$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Promise<[PasswordState](../type-aliases/PasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69474

***

### resetAllNotificationSettings()

> **resetAllNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Resets all chat and scope notification settings to their default values. By default, all chats are unmuted and message previews are shown

#### Parameters

• **parameters**: [`resetAllNotificationSettings$DirectInput`](../type-aliases/resetAllNotificationSettings$DirectInput.md)

[resetAllNotificationSettings$Input](../type-aliases/resetAllNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71695

***

### resetAuthenticationEmailAddress()

> **resetAuthenticationEmailAddress**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Resets the login email address. May return an error with a message "TASK_ALREADY_EXISTS" if reset is still pending.

- Works only when the current authorization state is authorizationStateWaitEmailCode and authorization_state.can_reset_email_address == true

#### Parameters

• **parameters**: [`resetAuthenticationEmailAddress$DirectInput`](../type-aliases/resetAuthenticationEmailAddress$DirectInput.md)

[resetAuthenticationEmailAddress$Input](../type-aliases/resetAuthenticationEmailAddress$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69314

***

### resetInstalledBackgrounds()

> **resetInstalledBackgrounds**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Resets list of installed backgrounds to its default value

#### Parameters

• **parameters**: [`resetInstalledBackgrounds$DirectInput`](../type-aliases/resetInstalledBackgrounds$DirectInput.md)

[resetInstalledBackgrounds$Input](../type-aliases/resetInstalledBackgrounds$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73764

***

### resetNetworkStatistics()

> **resetNetworkStatistics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Resets all network data usage statistics to zero. Can be called before authorization

#### Parameters

• **parameters**: [`resetNetworkStatistics$DirectInput`](../type-aliases/resetNetworkStatistics$DirectInput.md)

[resetNetworkStatistics$Input](../type-aliases/resetNetworkStatistics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74122

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

dist/generated/types.d.ts:69509

***

### reuseStarSubscription()

> **reuseStarSubscription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Reuses an active subscription and joins the subscribed chat again

#### Parameters

• **parameters**: [`reuseStarSubscription$DirectInput`](../type-aliases/reuseStarSubscription$DirectInput.md)

[reuseStarSubscription$Input](../type-aliases/reuseStarSubscription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74514

***

### revokeChatInviteLink()

> **revokeChatInviteLink**(`parameters`): `Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks.md)\>

Revokes invite link for a chat. Available for basic groups, supergroups, and channels. Requires administrator privileges and can_invite_users right in the chat for own links and owner privileges for other links.

- If a primary link is revoked, then additionally to the revoked link returns new primary link

#### Parameters

• **parameters**: [`revokeChatInviteLink$DirectInput`](../type-aliases/revokeChatInviteLink$DirectInput.md)

[revokeChatInviteLink$Input](../type-aliases/revokeChatInviteLink$Input.md)

#### Returns

`Promise`\<[`chatInviteLinks`](../type-aliases/chatInviteLinks.md)\>

Promise<[ChatInviteLinks](../type-aliases/ChatInviteLinks-1.md)>

#### Defined in

dist/generated/types.d.ts:72263

***

### revokeGroupCallInviteLink()

> **revokeGroupCallInviteLink**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Revokes invite link for a group call. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`revokeGroupCallInviteLink$DirectInput`](../type-aliases/revokeGroupCallInviteLink$DirectInput.md)

[revokeGroupCallInviteLink$Input](../type-aliases/revokeGroupCallInviteLink$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72480

***

### saveApplicationLogEvent()

> **saveApplicationLogEvent**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Saves application log event on the server. Can be called before authorization

#### Parameters

• **parameters**: [`saveApplicationLogEvent$DirectInput`](../type-aliases/saveApplicationLogEvent$DirectInput.md)

[saveApplicationLogEvent$Input](../type-aliases/saveApplicationLogEvent$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74612

***

### searchBackground()

> **searchBackground**(`parameters`): `Promise`\<[`background`](../type-aliases/background.md)\>

Searches for a background by its name

#### Parameters

• **parameters**: [`searchBackground$DirectInput`](../type-aliases/searchBackground$DirectInput.md)

[searchBackground$Input](../type-aliases/searchBackground$Input.md)

#### Returns

`Promise`\<[`background`](../type-aliases/background.md)\>

Promise<[Background](../type-aliases/Background-1.md)>

#### Defined in

dist/generated/types.d.ts:73729

***

### searchCallMessages()

> **searchCallMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Searches for call messages. Returns the results in reverse chronological order (i.e., in order of decreasing message_id). For optimal performance, the number of returned messages is chosen by TDLib

#### Parameters

• **parameters**: [`searchCallMessages$DirectInput`](../type-aliases/searchCallMessages$DirectInput.md)

[searchCallMessages$Input](../type-aliases/searchCallMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:69992

***

### searchChatMembers()

> **searchChatMembers**(`parameters`): `Promise`\<[`chatMembers`](../type-aliases/chatMembers.md)\>

Searches for a specified query in the first name, last name and usernames of the members of a specified chat. Requires administrator rights if the chat is a channel

#### Parameters

• **parameters**: [`searchChatMembers$DirectInput`](../type-aliases/searchChatMembers$DirectInput.md)

[searchChatMembers$Input](../type-aliases/searchChatMembers$Input.md)

#### Returns

`Promise`\<[`chatMembers`](../type-aliases/chatMembers.md)\>

Promise<[ChatMembers](../type-aliases/ChatMembers-1.md)>

#### Defined in

dist/generated/types.d.ts:71618

***

### searchChatMessages()

> **searchChatMessages**(`parameters`): `Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages.md)\>

Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. Cannot be used in secret chats with a non-empty query

- (searchSecretMessages must be used instead), or without an enabled message database. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit.

- A combination of query, sender_id, filter and message_thread_id search criteria is expected to be supported, only if it is required for Telegram official application implementation

#### Parameters

• **parameters**: [`searchChatMessages$DirectInput`](../type-aliases/searchChatMessages$DirectInput.md)

[searchChatMessages$Input](../type-aliases/searchChatMessages$Input.md)

#### Returns

`Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages.md)\>

Promise<[FoundChatMessages](../type-aliases/FoundChatMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:69958

***

### searchChatRecentLocationMessages()

> **searchChatRecentLocationMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Returns information about the recent locations of chat members that were sent to the chat. Returns up to 1 location message per user

#### Parameters

• **parameters**: [`searchChatRecentLocationMessages$DirectInput`](../type-aliases/searchChatRecentLocationMessages$DirectInput.md)

[searchChatRecentLocationMessages$Input](../type-aliases/searchChatRecentLocationMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:70062

***

### searchChats()

> **searchChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Searches for the specified query in the title and username of already known chats; this is an offline request. Returns chats in the order seen in the main chat list

#### Parameters

• **parameters**: [`searchChats$DirectInput`](../type-aliases/searchChats$DirectInput.md)

[searchChats$Input](../type-aliases/searchChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69720

***

### searchChatsNearby()

> **searchChatsNearby**(`parameters`): `Promise`\<[`chatsNearby`](../type-aliases/chatsNearby.md)\>

Returns a list of users and location-based supergroups nearby. The list of users nearby will be updated for 60 seconds after the request by the updates updateUsersNearby.

- The request must be sent again every 25 seconds with adjusted location to not miss new chats

#### Parameters

• **parameters**: [`searchChatsNearby$DirectInput`](../type-aliases/searchChatsNearby$DirectInput.md)

[searchChatsNearby$Input](../type-aliases/searchChatsNearby$Input.md)

#### Returns

`Promise`\<[`chatsNearby`](../type-aliases/chatsNearby.md)\>

Promise<[ChatsNearby](../type-aliases/ChatsNearby-1.md)>

#### Defined in

dist/generated/types.d.ts:69736

***

### searchChatsOnServer()

> **searchChatsOnServer**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Searches for the specified query in the title and username of already known chats via request to the server. Returns chats in the order seen in the main chat list

#### Parameters

• **parameters**: [`searchChatsOnServer$DirectInput`](../type-aliases/searchChatsOnServer$DirectInput.md)

[searchChatsOnServer$Input](../type-aliases/searchChatsOnServer$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69727

***

### searchContacts()

> **searchContacts**(`parameters`): `Promise`\<[`users`](../type-aliases/users.md)\>

Searches for the specified query in the first names, last names and usernames of the known user contacts

#### Parameters

• **parameters**: [`searchContacts$DirectInput`](../type-aliases/searchContacts$DirectInput.md)

[searchContacts$Input](../type-aliases/searchContacts$Input.md)

#### Returns

`Promise`\<[`users`](../type-aliases/users.md)\>

Promise<[Users](../type-aliases/Users-1.md)>

#### Defined in

dist/generated/types.d.ts:72620

***

### searchEmojis()

> **searchEmojis**(`parameters`): `Promise`\<[`emojiKeywords`](../type-aliases/emojiKeywords.md)\>

Searches for emojis by keywords. Supported only if the file database is enabled. Order of results is unspecified

#### Parameters

• **parameters**: [`searchEmojis$DirectInput`](../type-aliases/searchEmojis$DirectInput.md)

[searchEmojis$Input](../type-aliases/searchEmojis$Input.md)

#### Returns

`Promise`\<[`emojiKeywords`](../type-aliases/emojiKeywords.md)\>

Promise<[EmojiKeywords](../type-aliases/EmojiKeywords-1.md)>

#### Defined in

dist/generated/types.d.ts:72878

***

### searchFileDownloads()

> **searchFileDownloads**(`parameters`): `Promise`\<[`foundFileDownloads`](../type-aliases/foundFileDownloads.md)\>

Searches for files in the file download list or recently downloaded files from the list

#### Parameters

• **parameters**: [`searchFileDownloads$DirectInput`](../type-aliases/searchFileDownloads$DirectInput.md)

[searchFileDownloads$Input](../type-aliases/searchFileDownloads$Input.md)

#### Returns

`Promise`\<[`foundFileDownloads`](../type-aliases/foundFileDownloads.md)\>

Promise<[FoundFileDownloads](../type-aliases/FoundFileDownloads-1.md)>

#### Defined in

dist/generated/types.d.ts:72159

***

### searchHashtags()

> **searchHashtags**(`parameters`): `Promise`\<[`hashtags`](../type-aliases/hashtags.md)\>

Searches for recently used hashtags by their prefix

#### Parameters

• **parameters**: [`searchHashtags$DirectInput`](../type-aliases/searchHashtags$DirectInput.md)

[searchHashtags$Input](../type-aliases/searchHashtags$Input.md)

#### Returns

`Promise`\<[`hashtags`](../type-aliases/hashtags.md)\>

Promise<[Hashtags](../type-aliases/Hashtags-1.md)>

#### Defined in

dist/generated/types.d.ts:72971

***

### searchInstalledStickerSets()

> **searchInstalledStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Searches for installed sticker sets by looking for specified query in their title and name

#### Parameters

• **parameters**: [`searchInstalledStickerSets$DirectInput`](../type-aliases/searchInstalledStickerSets$DirectInput.md)

[searchInstalledStickerSets$Input](../type-aliases/searchInstalledStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Promise<[StickerSets](../type-aliases/StickerSets-1.md)>

#### Defined in

dist/generated/types.d.ts:72783

***

### searchMessages()

> **searchMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)).

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchMessages$DirectInput`](../type-aliases/searchMessages$DirectInput.md)

[searchMessages$Input](../type-aliases/searchMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:69967

***

### searchOutgoingDocumentMessages()

> **searchOutgoingDocumentMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Searches for outgoing messages with content of the type messageDocument in all chats except secret chats. Returns the results in reverse chronological order

#### Parameters

• **parameters**: [`searchOutgoingDocumentMessages$DirectInput`](../type-aliases/searchOutgoingDocumentMessages$DirectInput.md)

[searchOutgoingDocumentMessages$Input](../type-aliases/searchOutgoingDocumentMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:69999

***

### searchPublicChat()

> **searchPublicChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Searches a public chat by its username. Currently, only private chats, supergroups and channels can be public. Returns the chat if found; otherwise, an error is returned

#### Parameters

• **parameters**: [`searchPublicChat$DirectInput`](../type-aliases/searchPublicChat$DirectInput.md)

[searchPublicChat$Input](../type-aliases/searchPublicChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:69704

***

### searchPublicChats()

> **searchPublicChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Searches public chats by looking for specified query in their username and title. Currently, only private chats, supergroups and channels can be public. Returns a meaningful number of results.

- Excludes private chats with contacts and chats from the chat list from the results

#### Parameters

• **parameters**: [`searchPublicChats$DirectInput`](../type-aliases/searchPublicChats$DirectInput.md)

[searchPublicChats$Input](../type-aliases/searchPublicChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69713

***

### searchPublicMessagesByTag()

> **searchPublicMessagesByTag**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Searches for public channel posts containing the given hashtag or cashtag. For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicMessagesByTag$DirectInput`](../type-aliases/searchPublicMessagesByTag$DirectInput.md)

[searchPublicMessagesByTag$Input](../type-aliases/searchPublicMessagesByTag$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:70006

***

### searchPublicStoriesByLocation()

> **searchPublicStoriesByLocation**(`parameters`): `Promise`\<[`foundStories`](../type-aliases/foundStories.md)\>

Searches for public stories by the given address location. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicStoriesByLocation$DirectInput`](../type-aliases/searchPublicStoriesByLocation$DirectInput.md)

[searchPublicStoriesByLocation$Input](../type-aliases/searchPublicStoriesByLocation$Input.md)

#### Returns

`Promise`\<[`foundStories`](../type-aliases/foundStories.md)\>

Promise<[FoundStories](../type-aliases/FoundStories-1.md)>

#### Defined in

dist/generated/types.d.ts:70020

***

### searchPublicStoriesByTag()

> **searchPublicStoriesByTag**(`parameters`): `Promise`\<[`foundStories`](../type-aliases/foundStories.md)\>

Searches for public stories containing the given hashtag or cashtag. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicStoriesByTag$DirectInput`](../type-aliases/searchPublicStoriesByTag$DirectInput.md)

[searchPublicStoriesByTag$Input](../type-aliases/searchPublicStoriesByTag$Input.md)

#### Returns

`Promise`\<[`foundStories`](../type-aliases/foundStories.md)\>

Promise<[FoundStories](../type-aliases/FoundStories-1.md)>

#### Defined in

dist/generated/types.d.ts:70013

***

### searchPublicStoriesByVenue()

> **searchPublicStoriesByVenue**(`parameters`): `Promise`\<[`foundStories`](../type-aliases/foundStories.md)\>

Searches for public stories from the given venue. For optimal performance, the number of returned stories is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchPublicStoriesByVenue$DirectInput`](../type-aliases/searchPublicStoriesByVenue$DirectInput.md)

[searchPublicStoriesByVenue$Input](../type-aliases/searchPublicStoriesByVenue$Input.md)

#### Returns

`Promise`\<[`foundStories`](../type-aliases/foundStories.md)\>

Promise<[FoundStories](../type-aliases/FoundStories-1.md)>

#### Defined in

dist/generated/types.d.ts:70027

***

### searchQuote()

> **searchQuote**(`parameters`): `Promise`\<[`foundPosition`](../type-aliases/foundPosition.md)\>

Searches for a given quote in a text. Returns found quote start position in UTF-16 code units. Returns a 404 error if the quote is not found. Can be called synchronously

#### Parameters

• **parameters**: [`searchQuote$DirectInput`](../type-aliases/searchQuote$DirectInput.md)

[searchQuote$Input](../type-aliases/searchQuote$Input.md)

#### Returns

`Promise`\<[`foundPosition`](../type-aliases/foundPosition.md)\>

Promise<[FoundPosition](../type-aliases/FoundPosition-1.md)>

#### Defined in

dist/generated/types.d.ts:70732

***

### searchRecentlyFoundChats()

> **searchRecentlyFoundChats**(`parameters`): `Promise`\<[`chats`](../type-aliases/chats.md)\>

Searches for the specified query in the title and username of up to 50 recently found chats; this is an offline request

#### Parameters

• **parameters**: [`searchRecentlyFoundChats$DirectInput`](../type-aliases/searchRecentlyFoundChats$DirectInput.md)

[searchRecentlyFoundChats$Input](../type-aliases/searchRecentlyFoundChats$Input.md)

#### Returns

`Promise`\<[`chats`](../type-aliases/chats.md)\>

Promise<[Chats](../type-aliases/Chats-1.md)>

#### Defined in

dist/generated/types.d.ts:69785

***

### searchSavedMessages()

> **searchSavedMessages**(`parameters`): `Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages.md)\>

Searches for messages tagged by the given reaction and with the given words in the Saved Messages chat; for Telegram Premium users only.

- Returns the results in reverse chronological order, i.e. in order of decreasing message_id

- For optimal performance, the number of returned messages is chosen by TDLib and can be smaller than the specified limit

#### Parameters

• **parameters**: [`searchSavedMessages$DirectInput`](../type-aliases/searchSavedMessages$DirectInput.md)

[searchSavedMessages$Input](../type-aliases/searchSavedMessages$Input.md)

#### Returns

`Promise`\<[`foundChatMessages`](../type-aliases/foundChatMessages.md)\>

Promise<[FoundChatMessages](../type-aliases/FoundChatMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:69985

***

### searchSecretMessages()

> **searchSecretMessages**(`parameters`): `Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Searches for messages in secret chats. Returns the results in reverse chronological order. For optimal performance, the number of returned messages is chosen by TDLib

#### Parameters

• **parameters**: [`searchSecretMessages$DirectInput`](../type-aliases/searchSecretMessages$DirectInput.md)

[searchSecretMessages$Input](../type-aliases/searchSecretMessages$Input.md)

#### Returns

`Promise`\<[`foundMessages`](../type-aliases/foundMessages.md)\>

Promise<[FoundMessages](../type-aliases/FoundMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:69974

***

### searchStickers()

> **searchStickers**(`parameters`): `Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Searches for stickers from public sticker sets that correspond to any of the given emoji

#### Parameters

• **parameters**: [`searchStickers$DirectInput`](../type-aliases/searchStickers$DirectInput.md)

[searchStickers$Input](../type-aliases/searchStickers$Input.md)

#### Returns

`Promise`\<[`stickers`](../type-aliases/stickers.md)\>

Promise<[Stickers](../type-aliases/Stickers-1.md)>

#### Defined in

dist/generated/types.d.ts:72720

***

### searchStickerSet()

> **searchStickerSet**(`parameters`): `Promise`\<[`stickerSet`](../type-aliases/stickerSet.md)\>

Searches for a sticker set by its name

#### Parameters

• **parameters**: [`searchStickerSet$DirectInput`](../type-aliases/searchStickerSet$DirectInput.md)

[searchStickerSet$Input](../type-aliases/searchStickerSet$Input.md)

#### Returns

`Promise`\<[`stickerSet`](../type-aliases/stickerSet.md)\>

Promise<[StickerSet](../type-aliases/StickerSet-1.md)>

#### Defined in

dist/generated/types.d.ts:72776

***

### searchStickerSets()

> **searchStickerSets**(`parameters`): `Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Searches for sticker sets by looking for specified query in their title and name. Excludes installed sticker sets from the results

#### Parameters

• **parameters**: [`searchStickerSets$DirectInput`](../type-aliases/searchStickerSets$DirectInput.md)

[searchStickerSets$Input](../type-aliases/searchStickerSets$Input.md)

#### Returns

`Promise`\<[`stickerSets`](../type-aliases/stickerSets.md)\>

Promise<[StickerSets](../type-aliases/StickerSets-1.md)>

#### Defined in

dist/generated/types.d.ts:72790

***

### searchStringsByPrefix()

> **searchStringsByPrefix**(`parameters`): `Promise`\<[`foundPositions`](../type-aliases/foundPositions.md)\>

Searches specified query by word prefixes in the provided strings. Returns 0-based positions of strings that matched. Can be called synchronously

#### Parameters

• **parameters**: [`searchStringsByPrefix$DirectInput`](../type-aliases/searchStringsByPrefix$DirectInput.md)

[searchStringsByPrefix$Input](../type-aliases/searchStringsByPrefix$Input.md)

#### Returns

`Promise`\<[`foundPositions`](../type-aliases/foundPositions.md)\>

Promise<[FoundPositions](../type-aliases/FoundPositions-1.md)>

#### Defined in

dist/generated/types.d.ts:74535

***

### searchUserByPhoneNumber()

> **searchUserByPhoneNumber**(`parameters`): `Promise`\<[`user`](../type-aliases/user.md)\>

Searches a user by their phone number. Returns a 404 error if the user can't be found

#### Parameters

• **parameters**: [`searchUserByPhoneNumber$DirectInput`](../type-aliases/searchUserByPhoneNumber$DirectInput.md)

[searchUserByPhoneNumber$Input](../type-aliases/searchUserByPhoneNumber$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user.md)\>

Promise<[User](../type-aliases/User-1.md)>

#### Defined in

dist/generated/types.d.ts:72685

***

### searchUserByToken()

> **searchUserByToken**(`parameters`): `Promise`\<[`user`](../type-aliases/user.md)\>

Searches a user by a token from the user's link

#### Parameters

• **parameters**: [`searchUserByToken$DirectInput`](../type-aliases/searchUserByToken$DirectInput.md)

[searchUserByToken$Input](../type-aliases/searchUserByToken$Input.md)

#### Returns

`Promise`\<[`user`](../type-aliases/user.md)\>

Promise<[User](../type-aliases/User-1.md)>

#### Defined in

dist/generated/types.d.ts:73244

***

### searchWebApp()

> **searchWebApp**(`parameters`): `Promise`\<[`foundWebApp`](../type-aliases/foundWebApp.md)\>

Returns information about a Web App by its short name. Returns a 404 error if the Web App is not found

#### Parameters

• **parameters**: [`searchWebApp$DirectInput`](../type-aliases/searchWebApp$DirectInput.md)

[searchWebApp$Input](../type-aliases/searchWebApp$Input.md)

#### Returns

`Promise`\<[`foundWebApp`](../type-aliases/foundWebApp.md)\>

Promise<[FoundWebApp](../type-aliases/FoundWebApp-1.md)>

#### Defined in

dist/generated/types.d.ts:70918

***

### sendAuthenticationFirebaseSms()

> **sendAuthenticationFirebaseSms**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends Firebase Authentication SMS to the phone number of the user. Works only when the current authorization state is authorizationStateWaitCode and the server returned code of the type authenticationCodeTypeFirebaseAndroid or authenticationCodeTypeFirebaseIos

#### Parameters

• **parameters**: [`sendAuthenticationFirebaseSms$DirectInput`](../type-aliases/sendAuthenticationFirebaseSms$DirectInput.md)

[sendAuthenticationFirebaseSms$Input](../type-aliases/sendAuthenticationFirebaseSms$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69349

***

### sendBotStartMessage()

> **sendBotStartMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Invites a bot to a chat (if it is not yet a member) and sends it the /start command; requires can_invite_users member right. Bots can't be invited to a private chat other than the chat with the bot.

- Bots can't be invited to channels (although they can be added as admins) and secret chats. Returns the sent message

#### Parameters

• **parameters**: [`sendBotStartMessage$DirectInput`](../type-aliases/sendBotStartMessage$DirectInput.md)

[sendBotStartMessage$Input](../type-aliases/sendBotStartMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70229

***

### sendBusinessMessage()

> **sendBusinessMessage**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Sends a message on behalf of a business account; for bots only. Returns the message after it was sent

#### Parameters

• **parameters**: [`sendBusinessMessage$DirectInput`](../type-aliases/sendBusinessMessage$DirectInput.md)

[sendBusinessMessage$Input](../type-aliases/sendBusinessMessage$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70384

***

### sendBusinessMessageAlbum()

> **sendBusinessMessageAlbum**(`parameters`): `Promise`\<[`businessMessages`](../type-aliases/businessMessages.md)\>

Sends 2-10 messages grouped together into an album on behalf of a business account; for bots only. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

#### Parameters

• **parameters**: [`sendBusinessMessageAlbum$DirectInput`](../type-aliases/sendBusinessMessageAlbum$DirectInput.md)

[sendBusinessMessageAlbum$Input](../type-aliases/sendBusinessMessageAlbum$Input.md)

#### Returns

`Promise`\<[`businessMessages`](../type-aliases/businessMessages.md)\>

Promise<[BusinessMessages](../type-aliases/BusinessMessages-1.md)>

#### Defined in

dist/generated/types.d.ts:70393

***

### sendCallDebugInformation()

> **sendCallDebugInformation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends debug information for a call to Telegram servers

#### Parameters

• **parameters**: [`sendCallDebugInformation$DirectInput`](../type-aliases/sendCallDebugInformation$DirectInput.md)

[sendCallDebugInformation$Input](../type-aliases/sendCallDebugInformation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72354

***

### sendCallLog()

> **sendCallLog**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends log file for a call to Telegram servers

#### Parameters

• **parameters**: [`sendCallLog$DirectInput`](../type-aliases/sendCallLog$DirectInput.md)

[sendCallLog$Input](../type-aliases/sendCallLog$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72361

***

### sendCallRating()

> **sendCallRating**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends a call rating

#### Parameters

• **parameters**: [`sendCallRating$DirectInput`](../type-aliases/sendCallRating$DirectInput.md)

[sendCallRating$Input](../type-aliases/sendCallRating$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72347

***

### sendCallSignalingData()

> **sendCallSignalingData**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends call signaling data

#### Parameters

• **parameters**: [`sendCallSignalingData$DirectInput`](../type-aliases/sendCallSignalingData$DirectInput.md)

[sendCallSignalingData$Input](../type-aliases/sendCallSignalingData$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72333

***

### sendChatAction()

> **sendChatAction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends a notification about user activity in a chat

#### Parameters

• **parameters**: [`sendChatAction$DirectInput`](../type-aliases/sendChatAction$DirectInput.md)

[sendChatAction$Input](../type-aliases/sendChatAction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71039

***

### sendCustomRequest()

> **sendCustomRequest**(`parameters`): `Promise`\<[`customRequestResult`](../type-aliases/customRequestResult.md)\>

Sends a custom request; for bots only

#### Parameters

• **parameters**: [`sendCustomRequest$DirectInput`](../type-aliases/sendCustomRequest$DirectInput.md)

[sendCustomRequest$Input](../type-aliases/sendCustomRequest$Input.md)

#### Returns

`Promise`\<[`customRequestResult`](../type-aliases/customRequestResult.md)\>

Promise<[CustomRequestResult](../type-aliases/CustomRequestResult-1.md)>

#### Defined in

dist/generated/types.d.ts:74542

***

### sendEmailAddressVerificationCode()

> **sendEmailAddressVerificationCode**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Sends a code to verify an email address to be added to a user's Telegram Passport

#### Parameters

• **parameters**: [`sendEmailAddressVerificationCode$DirectInput`](../type-aliases/sendEmailAddressVerificationCode$DirectInput.md)

[sendEmailAddressVerificationCode$Input](../type-aliases/sendEmailAddressVerificationCode$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74213

***

### sendInlineQueryResultMessage()

> **sendInlineQueryResultMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Sends the result of an inline query as a message. Returns the sent message. Always clears a chat draft message

#### Parameters

• **parameters**: [`sendInlineQueryResultMessage$DirectInput`](../type-aliases/sendInlineQueryResultMessage$DirectInput.md)

[sendInlineQueryResultMessage$Input](../type-aliases/sendInlineQueryResultMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70236

***

### sendMessage()

> **sendMessage**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Sends a message. Returns the sent message

#### Parameters

• **parameters**: [`sendMessage$DirectInput`](../type-aliases/sendMessage$DirectInput.md)

[sendMessage$Input](../type-aliases/sendMessage$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:70211

***

### sendMessageAlbum()

> **sendMessageAlbum**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Sends 2-10 messages grouped together into an album. Currently, only audio, document, photo and video messages can be grouped into an album.

- Documents and audio files can be only grouped in an album with messages of the same type. Returns sent messages

#### Parameters

• **parameters**: [`sendMessageAlbum$DirectInput`](../type-aliases/sendMessageAlbum$DirectInput.md)

[sendMessageAlbum$Input](../type-aliases/sendMessageAlbum$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:70220

***

### sendPassportAuthorizationForm()

> **sendPassportAuthorizationForm**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends a Telegram Passport authorization form, effectively sharing data with the service. This method must be called after getPassportAuthorizationFormAvailableElements if some previously available elements are going to be reused

#### Parameters

• **parameters**: [`sendPassportAuthorizationForm$DirectInput`](../type-aliases/sendPassportAuthorizationForm$DirectInput.md)

[sendPassportAuthorizationForm$Input](../type-aliases/sendPassportAuthorizationForm$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74248

***

### sendPaymentForm()

> **sendPaymentForm**(`parameters`): `Promise`\<[`paymentResult`](../type-aliases/paymentResult.md)\>

Sends a filled-out payment form to the bot for final verification

#### Parameters

• **parameters**: [`sendPaymentForm$DirectInput`](../type-aliases/sendPaymentForm$DirectInput.md)

[sendPaymentForm$Input](../type-aliases/sendPaymentForm$Input.md)

#### Returns

`Promise`\<[`paymentResult`](../type-aliases/paymentResult.md)\>

Promise<[PaymentResult](../type-aliases/PaymentResult-1.md)>

#### Defined in

dist/generated/types.d.ts:73666

***

### sendPhoneNumberCode()

> **sendPhoneNumberCode**(`parameters`): `Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo.md)\>

Sends a code to the specified phone number. Aborts previous phone number verification if there was one. On success, returns information about the sent code

#### Parameters

• **parameters**: [`sendPhoneNumberCode$DirectInput`](../type-aliases/sendPhoneNumberCode$DirectInput.md)

[sendPhoneNumberCode$Input](../type-aliases/sendPhoneNumberCode$Input.md)

#### Returns

`Promise`\<[`authenticationCodeInfo`](../type-aliases/authenticationCodeInfo.md)\>

Promise<[AuthenticationCodeInfo](../type-aliases/AuthenticationCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73132

***

### sendPhoneNumberFirebaseSms()

> **sendPhoneNumberFirebaseSms**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends Firebase Authentication SMS to the specified phone number. Works only when received a code of the type authenticationCodeTypeFirebaseAndroid or authenticationCodeTypeFirebaseIos

#### Parameters

• **parameters**: [`sendPhoneNumberFirebaseSms$DirectInput`](../type-aliases/sendPhoneNumberFirebaseSms$DirectInput.md)

[sendPhoneNumberFirebaseSms$Input](../type-aliases/sendPhoneNumberFirebaseSms$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73139

***

### sendQuickReplyShortcutMessages()

> **sendQuickReplyShortcutMessages**(`parameters`): `Promise`\<[`messages`](../type-aliases/messages.md)\>

Sends messages from a quick reply shortcut. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`sendQuickReplyShortcutMessages$DirectInput`](../type-aliases/sendQuickReplyShortcutMessages$DirectInput.md)

[sendQuickReplyShortcutMessages$Input](../type-aliases/sendQuickReplyShortcutMessages$Input.md)

#### Returns

`Promise`\<[`messages`](../type-aliases/messages.md)\>

Promise<[Messages](../type-aliases/Messages-1.md)>

#### Defined in

dist/generated/types.d.ts:70250

***

### sendStory()

> **sendStory**(`parameters`): `Promise`\<[`story`](../type-aliases/story.md)\>

Sends a new story to a chat; requires can_post_stories right for supergroup and channel chats. Returns a temporary story

#### Parameters

• **parameters**: [`sendStory$DirectInput`](../type-aliases/sendStory$DirectInput.md)

[sendStory$Input](../type-aliases/sendStory$Input.md)

#### Returns

`Promise`\<[`story`](../type-aliases/story.md)\>

Promise<[Story](../type-aliases/Story-1.md)>

#### Defined in

dist/generated/types.d.ts:71751

***

### sendWebAppCustomRequest()

> **sendWebAppCustomRequest**(`parameters`): `Promise`\<[`customRequestResult`](../type-aliases/customRequestResult.md)\>

Sends a custom request from a Web App

#### Parameters

• **parameters**: [`sendWebAppCustomRequest$DirectInput`](../type-aliases/sendWebAppCustomRequest$DirectInput.md)

[sendWebAppCustomRequest$Input](../type-aliases/sendWebAppCustomRequest$Input.md)

#### Returns

`Promise`\<[`customRequestResult`](../type-aliases/customRequestResult.md)\>

Promise<[CustomRequestResult](../type-aliases/CustomRequestResult-1.md)>

#### Defined in

dist/generated/types.d.ts:73314

***

### sendWebAppData()

> **sendWebAppData**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends data received from a keyboardButtonTypeWebApp Web App to a bot

#### Parameters

• **parameters**: [`sendWebAppData$DirectInput`](../type-aliases/sendWebAppData$DirectInput.md)

[sendWebAppData$Input](../type-aliases/sendWebAppData$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70946

***

### setAccentColor()

> **setAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes accent color and background custom emoji for the current user; for Telegram Premium users only

#### Parameters

• **parameters**: [`setAccentColor$DirectInput`](../type-aliases/setAccentColor$DirectInput.md)

[setAccentColor$Input](../type-aliases/setAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73013

***

### setAccountTtl()

> **setAccountTtl**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the period of inactivity after which the account of the current user will automatically be deleted

#### Parameters

• **parameters**: [`setAccountTtl$DirectInput`](../type-aliases/setAccountTtl$DirectInput.md)

[setAccountTtl$Input](../type-aliases/setAccountTtl$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73929

***

### setAlarm()

> **setAlarm**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Succeeds after a specified amount of time has passed. Can be called before initialization

#### Parameters

• **parameters**: [`setAlarm$DirectInput`](../type-aliases/setAlarm$DirectInput.md)

[setAlarm$Input](../type-aliases/setAlarm$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74556

***

### setApplicationVerificationToken()

> **setApplicationVerificationToken**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Application verification has been completed. Can be called before authorization

#### Parameters

• **parameters**: [`setApplicationVerificationToken$DirectInput`](../type-aliases/setApplicationVerificationToken$DirectInput.md)

[setApplicationVerificationToken$Input](../type-aliases/setApplicationVerificationToken$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72166

***

### setArchiveChatListSettings()

> **setArchiveChatListSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes settings for automatic moving of chats to and from the Archive chat lists

#### Parameters

• **parameters**: [`setArchiveChatListSettings$DirectInput`](../type-aliases/setArchiveChatListSettings$DirectInput.md)

[setArchiveChatListSettings$Input](../type-aliases/setArchiveChatListSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71351

***

### setAuthenticationEmailAddress()

> **setAuthenticationEmailAddress**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the email address of the user and sends an authentication code to the email address. Works only when the current authorization state is authorizationStateWaitEmailAddress

#### Parameters

• **parameters**: [`setAuthenticationEmailAddress$DirectInput`](../type-aliases/setAuthenticationEmailAddress$DirectInput.md)

[setAuthenticationEmailAddress$Input](../type-aliases/setAuthenticationEmailAddress$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69266

***

### setAuthenticationPhoneNumber()

> **setAuthenticationPhoneNumber**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the phone number of the user and sends an authentication code to the user. Works only when the current authorization state is authorizationStateWaitPhoneNumber,

- or if there is no pending authentication query and the current authorization state is authorizationStateWaitEmailAddress, authorizationStateWaitEmailCode, authorizationStateWaitCode, authorizationStateWaitRegistration, or authorizationStateWaitPassword

#### Parameters

• **parameters**: [`setAuthenticationPhoneNumber$DirectInput`](../type-aliases/setAuthenticationPhoneNumber$DirectInput.md)

[setAuthenticationPhoneNumber$Input](../type-aliases/setAuthenticationPhoneNumber$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69259

***

### setAutoDownloadSettings()

> **setAutoDownloadSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets auto-download settings

#### Parameters

• **parameters**: [`setAutoDownloadSettings$DirectInput`](../type-aliases/setAutoDownloadSettings$DirectInput.md)

[setAutoDownloadSettings$Input](../type-aliases/setAutoDownloadSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74136

***

### setAutosaveSettings()

> **setAutosaveSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets autosave settings for the given scope. The method is guaranteed to work only after at least one call to getAutosaveSettings

#### Parameters

• **parameters**: [`setAutosaveSettings$DirectInput`](../type-aliases/setAutosaveSettings$DirectInput.md)

[setAutosaveSettings$Input](../type-aliases/setAutosaveSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74150

***

### setBio()

> **setBio**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the bio of the current user

#### Parameters

• **parameters**: [`setBio$DirectInput`](../type-aliases/setBio$DirectInput.md)

[setBio$Input](../type-aliases/setBio$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73034

***

### setBirthdate()

> **setBirthdate**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the birthdate of the current user

#### Parameters

• **parameters**: [`setBirthdate$DirectInput`](../type-aliases/setBirthdate$DirectInput.md)

[setBirthdate$Input](../type-aliases/setBirthdate$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73062

***

### setBotInfoDescription()

> **setBotInfoDescription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the text shown in the chat with a bot if the chat is empty. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`setBotInfoDescription$DirectInput`](../type-aliases/setBotInfoDescription$DirectInput.md)

[setBotInfoDescription$Input](../type-aliases/setBotInfoDescription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73398

***

### setBotInfoShortDescription()

> **setBotInfoShortDescription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the text shown on a bot's profile page and sent together with the link when users share the bot. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`setBotInfoShortDescription$DirectInput`](../type-aliases/setBotInfoShortDescription$DirectInput.md)

[setBotInfoShortDescription$Input](../type-aliases/setBotInfoShortDescription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73412

***

### setBotName()

> **setBotName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the name of a bot. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`setBotName$DirectInput`](../type-aliases/setBotName$DirectInput.md)

[setBotName$Input](../type-aliases/setBotName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73363

***

### setBotProfilePhoto()

> **setBotProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes a profile photo for a bot

#### Parameters

• **parameters**: [`setBotProfilePhoto$DirectInput`](../type-aliases/setBotProfilePhoto$DirectInput.md)

[setBotProfilePhoto$Input](../type-aliases/setBotProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73377

***

### setBotUpdatesStatus()

> **setBotUpdatesStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only

#### Parameters

• **parameters**: [`setBotUpdatesStatus$DirectInput`](../type-aliases/setBotUpdatesStatus$DirectInput.md)

[setBotUpdatesStatus$Input](../type-aliases/setBotUpdatesStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74255

***

### setBusinessAwayMessageSettings()

> **setBusinessAwayMessageSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the business away message settings of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessAwayMessageSettings$DirectInput`](../type-aliases/setBusinessAwayMessageSettings$DirectInput.md)

[setBusinessAwayMessageSettings$Input](../type-aliases/setBusinessAwayMessageSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73118

***

### setBusinessConnectedBot()

> **setBusinessConnectedBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds or changes business bot that is connected to the current user account

#### Parameters

• **parameters**: [`setBusinessConnectedBot$DirectInput`](../type-aliases/setBusinessConnectedBot$DirectInput.md)

[setBusinessConnectedBot$Input](../type-aliases/setBusinessConnectedBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73174

***

### setBusinessGreetingMessageSettings()

> **setBusinessGreetingMessageSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the business greeting message settings of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessGreetingMessageSettings$DirectInput`](../type-aliases/setBusinessGreetingMessageSettings$DirectInput.md)

[setBusinessGreetingMessageSettings$Input](../type-aliases/setBusinessGreetingMessageSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73111

***

### setBusinessLocation()

> **setBusinessLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the business location of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessLocation$DirectInput`](../type-aliases/setBusinessLocation$DirectInput.md)

[setBusinessLocation$Input](../type-aliases/setBusinessLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73097

***

### setBusinessMessageIsPinned()

> **setBusinessMessageIsPinned**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Pins or unpins a message sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`setBusinessMessageIsPinned$DirectInput`](../type-aliases/setBusinessMessageIsPinned$DirectInput.md)

[setBusinessMessageIsPinned$Input](../type-aliases/setBusinessMessageIsPinned$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70442

***

### setBusinessOpeningHours()

> **setBusinessOpeningHours**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the business opening hours of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessOpeningHours$DirectInput`](../type-aliases/setBusinessOpeningHours$DirectInput.md)

[setBusinessOpeningHours$Input](../type-aliases/setBusinessOpeningHours$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73104

***

### setBusinessStartPage()

> **setBusinessStartPage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the business start page of the current user. Requires Telegram Business subscription

#### Parameters

• **parameters**: [`setBusinessStartPage$DirectInput`](../type-aliases/setBusinessStartPage$DirectInput.md)

[setBusinessStartPage$Input](../type-aliases/setBusinessStartPage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73125

***

### setChatAccentColor()

> **setChatAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes accent color and background custom emoji of a channel chat. Requires can_change_info administrator right

#### Parameters

• **parameters**: [`setChatAccentColor$DirectInput`](../type-aliases/setChatAccentColor$DirectInput.md)

[setChatAccentColor$Input](../type-aliases/setChatAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71372

***

### setChatActiveStoriesList()

> **setChatActiveStoriesList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes story list in which stories from the chat are shown

#### Parameters

• **parameters**: [`setChatActiveStoriesList$DirectInput`](../type-aliases/setChatActiveStoriesList$DirectInput.md)

[setChatActiveStoriesList$Input](../type-aliases/setChatActiveStoriesList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71809

***

### setChatAvailableReactions()

> **setChatAvailableReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes reactions, available in a chat. Available for basic groups, supergroups, and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatAvailableReactions$DirectInput`](../type-aliases/setChatAvailableReactions$DirectInput.md)

[setChatAvailableReactions$Input](../type-aliases/setChatAvailableReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71479

***

### setChatBackground()

> **setChatBackground**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the background in a specific chat. Supported only in private and secret chats with non-deleted users, and in chats with sufficient boost level and can_change_info administrator right

#### Parameters

• **parameters**: [`setChatBackground$DirectInput`](../type-aliases/setChatBackground$DirectInput.md)

[setChatBackground$Input](../type-aliases/setChatBackground$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71409

***

### setChatClientData()

> **setChatClientData**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes application-specific data associated with a chat

#### Parameters

• **parameters**: [`setChatClientData$DirectInput`](../type-aliases/setChatClientData$DirectInput.md)

[setChatClientData$Input](../type-aliases/setChatClientData$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71486

***

### setChatDescription()

> **setChatDescription**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes information about a chat. Available for basic groups, supergroups, and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatDescription$DirectInput`](../type-aliases/setChatDescription$DirectInput.md)

[setChatDescription$Input](../type-aliases/setChatDescription$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71493

***

### setChatDiscussionGroup()

> **setChatDiscussionGroup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the discussion group of a channel chat; requires can_change_info administrator right in the channel if it is specified

#### Parameters

• **parameters**: [`setChatDiscussionGroup$DirectInput`](../type-aliases/setChatDiscussionGroup$DirectInput.md)

[setChatDiscussionGroup$Input](../type-aliases/setChatDiscussionGroup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71500

***

### setChatDraftMessage()

> **setChatDraftMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the draft message in a chat

#### Parameters

• **parameters**: [`setChatDraftMessage$DirectInput`](../type-aliases/setChatDraftMessage$DirectInput.md)

[setChatDraftMessage$Input](../type-aliases/setChatDraftMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71430

***

### setChatEmojiStatus()

> **setChatEmojiStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the emoji status of a chat. Use chatBoostLevelFeatures.can_set_emoji_status to check whether an emoji status can be set. Requires can_change_info administrator right

#### Parameters

• **parameters**: [`setChatEmojiStatus$DirectInput`](../type-aliases/setChatEmojiStatus$DirectInput.md)

[setChatEmojiStatus$Input](../type-aliases/setChatEmojiStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71395

***

### setChatLocation()

> **setChatLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the location of a chat. Available only for some location-based supergroups, use supergroupFullInfo.can_set_location to check whether the method is allowed to use

#### Parameters

• **parameters**: [`setChatLocation$DirectInput`](../type-aliases/setChatLocation$DirectInput.md)

[setChatLocation$Input](../type-aliases/setChatLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71507

***

### setChatMemberStatus()

> **setChatMemberStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the status of a chat member; requires can_invite_users member right to add a chat member, can_promote_members administrator right to change administrator rights of the member,

- and can_restrict_members administrator right to change restrictions of a user. This function is currently not suitable for transferring chat ownership; use transferChatOwnership instead.

- Use addChatMember or banChatMember if some additional parameters needs to be passed

#### Parameters

• **parameters**: [`setChatMemberStatus$DirectInput`](../type-aliases/setChatMemberStatus$DirectInput.md)

[setChatMemberStatus$Input](../type-aliases/setChatMemberStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71583

***

### setChatMessageAutoDeleteTime()

> **setChatMessageAutoDeleteTime**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the message auto-delete or self-destruct (for secret chats) time in a chat. Requires change_info administrator right in basic groups, supergroups and channels

- Message auto-delete time can't be changed in a chat with the current user (Saved Messages) and the chat 777000 (Telegram).

#### Parameters

• **parameters**: [`setChatMessageAutoDeleteTime$DirectInput`](../type-aliases/setChatMessageAutoDeleteTime$DirectInput.md)

[setChatMessageAutoDeleteTime$Input](../type-aliases/setChatMessageAutoDeleteTime$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71388

***

### setChatMessageSender()

> **setChatMessageSender**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Selects a message sender to send messages in a chat

#### Parameters

• **parameters**: [`setChatMessageSender$DirectInput`](../type-aliases/setChatMessageSender$DirectInput.md)

[setChatMessageSender$Input](../type-aliases/setChatMessageSender$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70204

***

### setChatNotificationSettings()

> **setChatNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the notification settings of a chat. Notification settings of a chat with the current user (Saved Messages) can't be changed

#### Parameters

• **parameters**: [`setChatNotificationSettings$DirectInput`](../type-aliases/setChatNotificationSettings$DirectInput.md)

[setChatNotificationSettings$Input](../type-aliases/setChatNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71437

***

### setChatPermissions()

> **setChatPermissions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the chat members permissions. Supported only for basic groups and supergroups. Requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`setChatPermissions$DirectInput`](../type-aliases/setChatPermissions$DirectInput.md)

[setChatPermissions$Input](../type-aliases/setChatPermissions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71402

***

### setChatPhoto()

> **setChatPhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the photo of a chat. Supported only for basic groups, supergroups and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatPhoto$DirectInput`](../type-aliases/setChatPhoto$DirectInput.md)

[setChatPhoto$Input](../type-aliases/setChatPhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71365

***

### setChatPinnedStories()

> **setChatPinnedStories**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the list of pinned stories on a chat page; requires can_edit_stories right in the chat

#### Parameters

• **parameters**: [`setChatPinnedStories$DirectInput`](../type-aliases/setChatPinnedStories$DirectInput.md)

[setChatPinnedStories$Input](../type-aliases/setChatPinnedStories$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71841

***

### setChatProfileAccentColor()

> **setChatProfileAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes accent color and background custom emoji for profile of a supergroup or channel chat. Requires can_change_info administrator right

#### Parameters

• **parameters**: [`setChatProfileAccentColor$DirectInput`](../type-aliases/setChatProfileAccentColor$DirectInput.md)

[setChatProfileAccentColor$Input](../type-aliases/setChatProfileAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71379

***

### setChatSlowModeDelay()

> **setChatSlowModeDelay**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the slow mode delay of a chat. Available only for supergroups; requires can_restrict_members right

#### Parameters

• **parameters**: [`setChatSlowModeDelay$DirectInput`](../type-aliases/setChatSlowModeDelay$DirectInput.md)

[setChatSlowModeDelay$Input](../type-aliases/setChatSlowModeDelay$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71514

***

### setChatTheme()

> **setChatTheme**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the chat theme. Supported only in private and secret chats

#### Parameters

• **parameters**: [`setChatTheme$DirectInput`](../type-aliases/setChatTheme$DirectInput.md)

[setChatTheme$Input](../type-aliases/setChatTheme$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71423

***

### setChatTitle()

> **setChatTitle**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the chat title. Supported only for basic groups, supergroups and channels. Requires can_change_info member right

#### Parameters

• **parameters**: [`setChatTitle$DirectInput`](../type-aliases/setChatTitle$DirectInput.md)

[setChatTitle$Input](../type-aliases/setChatTitle$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71358

***

### setCloseFriends()

> **setCloseFriends**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the list of close friends of the current user

#### Parameters

• **parameters**: [`setCloseFriends$DirectInput`](../type-aliases/setCloseFriends$DirectInput.md)

[setCloseFriends$Input](../type-aliases/setCloseFriends$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72657

***

### setCommands()

> **setCommands**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the list of commands supported by the bot for the given user scope and language; for bots only

#### Parameters

• **parameters**: [`setCommands$DirectInput`](../type-aliases/setCommands$DirectInput.md)

[setCommands$Input](../type-aliases/setCommands$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73251

***

### setCustomEmojiStickerSetThumbnail()

> **setCustomEmojiStickerSetThumbnail**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets a custom emoji sticker set thumbnail

#### Parameters

• **parameters**: [`setCustomEmojiStickerSetThumbnail$DirectInput`](../type-aliases/setCustomEmojiStickerSetThumbnail$DirectInput.md)

[setCustomEmojiStickerSetThumbnail$Input](../type-aliases/setCustomEmojiStickerSetThumbnail$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74311

***

### setCustomLanguagePack()

> **setCustomLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds or changes a custom local language pack to the current localization target

#### Parameters

• **parameters**: [`setCustomLanguagePack$DirectInput`](../type-aliases/setCustomLanguagePack$DirectInput.md)

[setCustomLanguagePack$Input](../type-aliases/setCustomLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73808

***

### setCustomLanguagePackString()

> **setCustomLanguagePackString**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds, edits or deletes a string in a custom local language pack. Can be called before authorization

#### Parameters

• **parameters**: [`setCustomLanguagePackString$DirectInput`](../type-aliases/setCustomLanguagePackString$DirectInput.md)

[setCustomLanguagePackString$Input](../type-aliases/setCustomLanguagePackString$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73822

***

### setDatabaseEncryptionKey()

> **setDatabaseEncryptionKey**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the database encryption key. Usually the encryption key is never changed and is stored in some OS keychain

#### Parameters

• **parameters**: [`setDatabaseEncryptionKey$DirectInput`](../type-aliases/setDatabaseEncryptionKey$DirectInput.md)

[setDatabaseEncryptionKey$Input](../type-aliases/setDatabaseEncryptionKey$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69407

***

### setDefaultBackground()

> **setDefaultBackground**(`parameters`): `Promise`\<[`background`](../type-aliases/background.md)\>

Sets default background for chats; adds the background to the list of installed backgrounds

#### Parameters

• **parameters**: [`setDefaultBackground$DirectInput`](../type-aliases/setDefaultBackground$DirectInput.md)

[setDefaultBackground$Input](../type-aliases/setDefaultBackground$Input.md)

#### Returns

`Promise`\<[`background`](../type-aliases/background.md)\>

Promise<[Background](../type-aliases/Background-1.md)>

#### Defined in

dist/generated/types.d.ts:73736

***

### setDefaultChannelAdministratorRights()

> **setDefaultChannelAdministratorRights**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets default administrator rights for adding the bot to channel chats; for bots only

#### Parameters

• **parameters**: [`setDefaultChannelAdministratorRights$DirectInput`](../type-aliases/setDefaultChannelAdministratorRights$DirectInput.md)

[setDefaultChannelAdministratorRights$Input](../type-aliases/setDefaultChannelAdministratorRights$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73293

***

### setDefaultGroupAdministratorRights()

> **setDefaultGroupAdministratorRights**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets default administrator rights for adding the bot to basic group and supergroup chats; for bots only

#### Parameters

• **parameters**: [`setDefaultGroupAdministratorRights$DirectInput`](../type-aliases/setDefaultGroupAdministratorRights$DirectInput.md)

[setDefaultGroupAdministratorRights$Input](../type-aliases/setDefaultGroupAdministratorRights$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73286

***

### setDefaultMessageAutoDeleteTime()

> **setDefaultMessageAutoDeleteTime**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the default message auto-delete time for new chats

#### Parameters

• **parameters**: [`setDefaultMessageAutoDeleteTime$DirectInput`](../type-aliases/setDefaultMessageAutoDeleteTime$DirectInput.md)

[setDefaultMessageAutoDeleteTime$Input](../type-aliases/setDefaultMessageAutoDeleteTime$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73952

***

### setDefaultReactionType()

> **setDefaultReactionType**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes type of default reaction for the current user

#### Parameters

• **parameters**: [`setDefaultReactionType$DirectInput`](../type-aliases/setDefaultReactionType$DirectInput.md)

[setDefaultReactionType$Input](../type-aliases/setDefaultReactionType$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70704

***

### setEmojiStatus()

> **setEmojiStatus**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the emoji status of the current user; for Telegram Premium users only

#### Parameters

• **parameters**: [`setEmojiStatus$DirectInput`](../type-aliases/setEmojiStatus$DirectInput.md)

[setEmojiStatus$Input](../type-aliases/setEmojiStatus$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73076

***

### setFileGenerationProgress()

> **setFileGenerationProgress**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib on a file generation progress

#### Parameters

• **parameters**: [`setFileGenerationProgress$DirectInput`](../type-aliases/setFileGenerationProgress$DirectInput.md)

[setFileGenerationProgress$Input](../type-aliases/setFileGenerationProgress$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72094

***

### setForumTopicNotificationSettings()

> **setForumTopicNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the notification settings of a forum topic

#### Parameters

• **parameters**: [`setForumTopicNotificationSettings$DirectInput`](../type-aliases/setForumTopicNotificationSettings$DirectInput.md)

[setForumTopicNotificationSettings$Input](../type-aliases/setForumTopicNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70585

***

### setGameScore()

> **setGameScore**(`parameters`): `Promise`\<[`message`](../type-aliases/message.md)\>

Updates the game score of the specified user in the game; for bots only

#### Parameters

• **parameters**: [`setGameScore$DirectInput`](../type-aliases/setGameScore$DirectInput.md)

[setGameScore$Input](../type-aliases/setGameScore$Input.md)

#### Returns

`Promise`\<[`message`](../type-aliases/message.md)\>

Promise<[Message](../type-aliases/Message-1.md)>

#### Defined in

dist/generated/types.d.ts:71004

***

### setGroupCallParticipantIsSpeaking()

> **setGroupCallParticipantIsSpeaking**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that speaking state of a participant of an active group has changed

#### Parameters

• **parameters**: [`setGroupCallParticipantIsSpeaking$DirectInput`](../type-aliases/setGroupCallParticipantIsSpeaking$DirectInput.md)

[setGroupCallParticipantIsSpeaking$Input](../type-aliases/setGroupCallParticipantIsSpeaking$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72515

***

### setGroupCallParticipantVolumeLevel()

> **setGroupCallParticipantVolumeLevel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes volume level of a participant of an active group call. If the current user can manage the group call, then the participant's volume level will be changed for all users with the default volume level

#### Parameters

• **parameters**: [`setGroupCallParticipantVolumeLevel$DirectInput`](../type-aliases/setGroupCallParticipantVolumeLevel$DirectInput.md)

[setGroupCallParticipantVolumeLevel$Input](../type-aliases/setGroupCallParticipantVolumeLevel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72529

***

### setGroupCallTitle()

> **setGroupCallTitle**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets group call title. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`setGroupCallTitle$DirectInput`](../type-aliases/setGroupCallTitle$DirectInput.md)

[setGroupCallTitle$Input](../type-aliases/setGroupCallTitle$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72452

***

### setInactiveSessionTtl()

> **setInactiveSessionTtl**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the period of inactivity after which sessions will automatically be terminated

#### Parameters

• **parameters**: [`setInactiveSessionTtl$DirectInput`](../type-aliases/setInactiveSessionTtl$DirectInput.md)

[setInactiveSessionTtl$Input](../type-aliases/setInactiveSessionTtl$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73468

***

### setInlineGameScore()

> **setInlineGameScore**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Updates the game score of the specified user in a game; for bots only

#### Parameters

• **parameters**: [`setInlineGameScore$DirectInput`](../type-aliases/setInlineGameScore$DirectInput.md)

[setInlineGameScore$Input](../type-aliases/setInlineGameScore$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71011

***

### setLocation()

> **setLocation**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the location of the current user. Needs to be called if getOption("is_location_visible") is true and location changes for more than 1 kilometer. Must not be called if the user has a business location

#### Parameters

• **parameters**: [`setLocation$DirectInput`](../type-aliases/setLocation$DirectInput.md)

[setLocation$Input](../type-aliases/setLocation$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73083

***

### setLoginEmailAddress()

> **setLoginEmailAddress**(`parameters`): `Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Changes the login email address of the user. The email address can be changed only if the current user already has login email and passwordState.login_email_address_pattern is non-empty.

- The change will not be applied until the new login email address is confirmed with checkLoginEmailAddressCode. To use Apple ID/Google ID instead of an email address, call checkLoginEmailAddressCode directly

#### Parameters

• **parameters**: [`setLoginEmailAddress$DirectInput`](../type-aliases/setLoginEmailAddress$DirectInput.md)

[setLoginEmailAddress$Input](../type-aliases/setLoginEmailAddress$Input.md)

#### Returns

`Promise`\<[`emailAddressAuthenticationCodeInfo`](../type-aliases/emailAddressAuthenticationCodeInfo.md)\>

Promise<[EmailAddressAuthenticationCodeInfo](../type-aliases/EmailAddressAuthenticationCodeInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:69430

***

### setLogStream()

> **setLogStream**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets new log stream for internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`setLogStream$DirectInput`](../type-aliases/setLogStream$DirectInput.md)

[setLogStream$Input](../type-aliases/setLogStream$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74682

***

### setLogTagVerbosityLevel()

> **setLogTagVerbosityLevel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

• **parameters**: [`setLogTagVerbosityLevel$DirectInput`](../type-aliases/setLogTagVerbosityLevel$DirectInput.md)

[setLogTagVerbosityLevel$Input](../type-aliases/setLogTagVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74717

***

### setLogVerbosityLevel()

> **setLogVerbosityLevel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`setLogVerbosityLevel$DirectInput`](../type-aliases/setLogVerbosityLevel$DirectInput.md)

[setLogVerbosityLevel$Input](../type-aliases/setLogVerbosityLevel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74696

***

### setMenuButton()

> **setMenuButton**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets menu button for the given user or for all users; for bots only

#### Parameters

• **parameters**: [`setMenuButton$DirectInput`](../type-aliases/setMenuButton$DirectInput.md)

[setMenuButton$Input](../type-aliases/setMenuButton$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73272

***

### setMessageFactCheck()

> **setMessageFactCheck**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the fact-check of a message. Can be only used if messageProperties.can_set_fact_check == true

#### Parameters

• **parameters**: [`setMessageFactCheck$DirectInput`](../type-aliases/setMessageFactCheck$DirectInput.md)

[setMessageFactCheck$Input](../type-aliases/setMessageFactCheck$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70377

***

### setMessageReactions()

> **setMessageReactions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets reactions on a message; for bots only

#### Parameters

• **parameters**: [`setMessageReactions$DirectInput`](../type-aliases/setMessageReactions$DirectInput.md)

[setMessageReactions$Input](../type-aliases/setMessageReactions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70690

***

### setMessageSenderBlockList()

> **setMessageSenderBlockList**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the block list of a message sender. Currently, only users and supergroup chats can be blocked

#### Parameters

• **parameters**: [`setMessageSenderBlockList$DirectInput`](../type-aliases/setMessageSenderBlockList$DirectInput.md)

[setMessageSenderBlockList$Input](../type-aliases/setMessageSenderBlockList$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72578

***

### setName()

> **setName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the first and last name of the current user

#### Parameters

• **parameters**: [`setName$DirectInput`](../type-aliases/setName$DirectInput.md)

[setName$Input](../type-aliases/setName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73027

***

### setNetworkType()

> **setNetworkType**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the current network type. Can be called before authorization. Calling this method forces all network connections to reopen, mitigating the delay in switching between different networks,

- so it must be called whenever the network is changed, even if the network type remains the same. Network type is used to check whether the library can use the network at all and also for collecting detailed network data usage statistics

#### Parameters

• **parameters**: [`setNetworkType$DirectInput`](../type-aliases/setNetworkType$DirectInput.md)

[setNetworkType$Input](../type-aliases/setNetworkType$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74101

***

### setNewChatPrivacySettings()

> **setNewChatPrivacySettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes privacy settings for new chat creation; can be used only if getOption("can_set_new_chat_privacy_settings")

#### Parameters

• **parameters**: [`setNewChatPrivacySettings$DirectInput`](../type-aliases/setNewChatPrivacySettings$DirectInput.md)

[setNewChatPrivacySettings$Input](../type-aliases/setNewChatPrivacySettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73894

***

### setOption()

> **setOption**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the value of an option. (Check the list of available options on https://core.telegram.org/tdlib/options.) Only writable options can be set. Can be called before authorization

#### Parameters

• **parameters**: [`setOption$DirectInput`](../type-aliases/setOption$DirectInput.md)

[setOption$Input](../type-aliases/setOption$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73922

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

dist/generated/types.d.ts:74185

***

### setPassportElementErrors()

> **setPassportElementErrors**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs the user that some of the elements in their Telegram Passport contain errors; for bots only. The user will not be able to resend the elements, until the errors are fixed

#### Parameters

• **parameters**: [`setPassportElementErrors$DirectInput`](../type-aliases/setPassportElementErrors$DirectInput.md)

[setPassportElementErrors$Input](../type-aliases/setPassportElementErrors$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74199

***

### setPassword()

> **setPassword**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Changes the 2-step verification password for the current user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed

#### Parameters

• **parameters**: [`setPassword$DirectInput`](../type-aliases/setPassword$DirectInput.md)

[setPassword$Input](../type-aliases/setPassword$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Promise<[PasswordState](../type-aliases/PasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69421

***

### setPersonalChat()

> **setPersonalChat**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the personal chat of the current user

#### Parameters

• **parameters**: [`setPersonalChat$DirectInput`](../type-aliases/setPersonalChat$DirectInput.md)

[setPersonalChat$Input](../type-aliases/setPersonalChat$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73069

***

### setPinnedChats()

> **setPinnedChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the order of pinned chats

#### Parameters

• **parameters**: [`setPinnedChats$DirectInput`](../type-aliases/setPinnedChats$DirectInput.md)

[setPinnedChats$Input](../type-aliases/setPinnedChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71709

***

### setPinnedForumTopics()

> **setPinnedForumTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the order of pinned forum topics; requires can_manage_topics right in the supergroup

#### Parameters

• **parameters**: [`setPinnedForumTopics$DirectInput`](../type-aliases/setPinnedForumTopics$DirectInput.md)

[setPinnedForumTopics$Input](../type-aliases/setPinnedForumTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70613

***

### setPinnedSavedMessagesTopics()

> **setPinnedSavedMessagesTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the order of pinned Saved Messages topics

#### Parameters

• **parameters**: [`setPinnedSavedMessagesTopics$DirectInput`](../type-aliases/setPinnedSavedMessagesTopics$DirectInput.md)

[setPinnedSavedMessagesTopics$Input](../type-aliases/setPinnedSavedMessagesTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69906

***

### setPollAnswer()

> **setPollAnswer**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the user answer to a poll. A poll in quiz mode can be answered only once

#### Parameters

• **parameters**: [`setPollAnswer$DirectInput`](../type-aliases/setPollAnswer$DirectInput.md)

[setPollAnswer$Input](../type-aliases/setPollAnswer$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70825

***

### setProfileAccentColor()

> **setProfileAccentColor**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes accent color and background custom emoji for profile of the current user; for Telegram Premium users only

#### Parameters

• **parameters**: [`setProfileAccentColor$DirectInput`](../type-aliases/setProfileAccentColor$DirectInput.md)

[setProfileAccentColor$Input](../type-aliases/setProfileAccentColor$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73020

***

### setProfilePhoto()

> **setProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes a profile photo for the current user

#### Parameters

• **parameters**: [`setProfilePhoto$DirectInput`](../type-aliases/setProfilePhoto$DirectInput.md)

[setProfilePhoto$Input](../type-aliases/setProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72999

***

### setQuickReplyShortcutName()

> **setQuickReplyShortcutName**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes name of a quick reply shortcut

#### Parameters

• **parameters**: [`setQuickReplyShortcutName$DirectInput`](../type-aliases/setQuickReplyShortcutName$DirectInput.md)

[setQuickReplyShortcutName$Input](../type-aliases/setQuickReplyShortcutName$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70463

***

### setReactionNotificationSettings()

> **setReactionNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes notification settings for reactions

#### Parameters

• **parameters**: [`setReactionNotificationSettings$DirectInput`](../type-aliases/setReactionNotificationSettings$DirectInput.md)

[setReactionNotificationSettings$Input](../type-aliases/setReactionNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71688

***

### setReadDatePrivacySettings()

> **setReadDatePrivacySettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes privacy settings for message read date

#### Parameters

• **parameters**: [`setReadDatePrivacySettings$DirectInput`](../type-aliases/setReadDatePrivacySettings$DirectInput.md)

[setReadDatePrivacySettings$Input](../type-aliases/setReadDatePrivacySettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73880

***

### setRecoveryEmailAddress()

> **setRecoveryEmailAddress**(`parameters`): `Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Changes the 2-step verification recovery email address of the user. If a new recovery email address is specified, then the change will not be applied until the new recovery email address is confirmed.

- If new_recovery_email_address is the same as the email address that is currently set up, this call succeeds immediately and aborts all other requests waiting for an email confirmation

#### Parameters

• **parameters**: [`setRecoveryEmailAddress$DirectInput`](../type-aliases/setRecoveryEmailAddress$DirectInput.md)

[setRecoveryEmailAddress$Input](../type-aliases/setRecoveryEmailAddress$Input.md)

#### Returns

`Promise`\<[`passwordState`](../type-aliases/passwordState.md)\>

Promise<[PasswordState](../type-aliases/PasswordState-1.md)>

#### Defined in

dist/generated/types.d.ts:69460

***

### setSavedMessagesTagLabel()

> **setSavedMessagesTagLabel**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes label of a Saved Messages tag; for Telegram Premium users only

#### Parameters

• **parameters**: [`setSavedMessagesTagLabel$DirectInput`](../type-aliases/setSavedMessagesTagLabel$DirectInput.md)

[setSavedMessagesTagLabel$Input](../type-aliases/setSavedMessagesTagLabel$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70718

***

### setScopeNotificationSettings()

> **setScopeNotificationSettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes notification settings for chats of a given type

#### Parameters

• **parameters**: [`setScopeNotificationSettings$DirectInput`](../type-aliases/setScopeNotificationSettings$DirectInput.md)

[setScopeNotificationSettings$Input](../type-aliases/setScopeNotificationSettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71681

***

### setStickerEmojis()

> **setStickerEmojis**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the list of emojis corresponding to a sticker. The sticker must belong to a regular or custom emoji sticker set that is owned by the current user

#### Parameters

• **parameters**: [`setStickerEmojis$DirectInput`](../type-aliases/setStickerEmojis$DirectInput.md)

[setStickerEmojis$Input](../type-aliases/setStickerEmojis$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74346

***

### setStickerKeywords()

> **setStickerKeywords**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the list of keywords of a sticker. The sticker must belong to a regular or custom emoji sticker set that is owned by the current user

#### Parameters

• **parameters**: [`setStickerKeywords$DirectInput`](../type-aliases/setStickerKeywords$DirectInput.md)

[setStickerKeywords$Input](../type-aliases/setStickerKeywords$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74353

***

### setStickerMaskPosition()

> **setStickerMaskPosition**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the mask position of a mask sticker. The sticker must belong to a mask sticker set that is owned by the current user

#### Parameters

• **parameters**: [`setStickerMaskPosition$DirectInput`](../type-aliases/setStickerMaskPosition$DirectInput.md)

[setStickerMaskPosition$Input](../type-aliases/setStickerMaskPosition$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74360

***

### setStickerPositionInSet()

> **setStickerPositionInSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the position of a sticker in the set to which it belongs. The sticker set must be owned by the current user

#### Parameters

• **parameters**: [`setStickerPositionInSet$DirectInput`](../type-aliases/setStickerPositionInSet$DirectInput.md)

[setStickerPositionInSet$Input](../type-aliases/setStickerPositionInSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74332

***

### setStickerSetThumbnail()

> **setStickerSetThumbnail**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets a sticker set thumbnail

#### Parameters

• **parameters**: [`setStickerSetThumbnail$DirectInput`](../type-aliases/setStickerSetThumbnail$DirectInput.md)

[setStickerSetThumbnail$Input](../type-aliases/setStickerSetThumbnail$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74304

***

### setStickerSetTitle()

> **setStickerSetTitle**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets a sticker set title

#### Parameters

• **parameters**: [`setStickerSetTitle$DirectInput`](../type-aliases/setStickerSetTitle$DirectInput.md)

[setStickerSetTitle$Input](../type-aliases/setStickerSetTitle$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74318

***

### setStoryPrivacySettings()

> **setStoryPrivacySettings**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes privacy settings of a story. The method can be called only for stories posted on behalf of the current user and if story.can_be_edited == true

#### Parameters

• **parameters**: [`setStoryPrivacySettings$DirectInput`](../type-aliases/setStoryPrivacySettings$DirectInput.md)

[setStoryPrivacySettings$Input](../type-aliases/setStoryPrivacySettings$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71772

***

### setStoryReaction()

> **setStoryReaction**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes chosen reaction on a story that has already been sent

#### Parameters

• **parameters**: [`setStoryReaction$DirectInput`](../type-aliases/setStoryReaction$DirectInput.md)

[setStoryReaction$Input](../type-aliases/setStoryReaction$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71869

***

### setSupergroupCustomEmojiStickerSet()

> **setSupergroupCustomEmojiStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the custom emoji sticker set of a supergroup; requires can_change_info administrator right. The chat must have at least chatBoostFeatures.min_custom_emoji_sticker_set_boost_level boost level to pass the corresponding color

#### Parameters

• **parameters**: [`setSupergroupCustomEmojiStickerSet$DirectInput`](../type-aliases/setSupergroupCustomEmojiStickerSet$DirectInput.md)

[setSupergroupCustomEmojiStickerSet$Input](../type-aliases/setSupergroupCustomEmojiStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73533

***

### setSupergroupStickerSet()

> **setSupergroupStickerSet**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the sticker set of a supergroup; requires can_change_info administrator right

#### Parameters

• **parameters**: [`setSupergroupStickerSet$DirectInput`](../type-aliases/setSupergroupStickerSet$DirectInput.md)

[setSupergroupStickerSet$Input](../type-aliases/setSupergroupStickerSet$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73526

***

### setSupergroupUnrestrictBoostCount()

> **setSupergroupUnrestrictBoostCount**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the number of times the supergroup must be boosted by a user to ignore slow mode and chat permission restrictions; requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`setSupergroupUnrestrictBoostCount$DirectInput`](../type-aliases/setSupergroupUnrestrictBoostCount$DirectInput.md)

[setSupergroupUnrestrictBoostCount$Input](../type-aliases/setSupergroupUnrestrictBoostCount$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73540

***

### setSupergroupUsername()

> **setSupergroupUsername**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the editable username of a supergroup or channel, requires owner privileges in the supergroup or channel

#### Parameters

• **parameters**: [`setSupergroupUsername$DirectInput`](../type-aliases/setSupergroupUsername$DirectInput.md)

[setSupergroupUsername$Input](../type-aliases/setSupergroupUsername$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73496

***

### setTdlibParameters()

> **setTdlibParameters**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters

#### Parameters

• **parameters**: [`setTdlibParameters$DirectInput`](../type-aliases/setTdlibParameters$DirectInput.md)

[setTdlibParameters$Input](../type-aliases/setTdlibParameters$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69250

***

### setUsername()

> **setUsername**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the editable username of the current user

#### Parameters

• **parameters**: [`setUsername$DirectInput`](../type-aliases/setUsername$DirectInput.md)

[setUsername$Input](../type-aliases/setUsername$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73041

***

### setUserPersonalProfilePhoto()

> **setUserPersonalProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes a personal profile photo of a contact user

#### Parameters

• **parameters**: [`setUserPersonalProfilePhoto$DirectInput`](../type-aliases/setUserPersonalProfilePhoto$DirectInput.md)

[setUserPersonalProfilePhoto$Input](../type-aliases/setUserPersonalProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72671

***

### setUserPrivacySettingRules()

> **setUserPrivacySettingRules**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes user privacy settings

#### Parameters

• **parameters**: [`setUserPrivacySettingRules$DirectInput`](../type-aliases/setUserPrivacySettingRules$DirectInput.md)

[setUserPrivacySettingRules$Input](../type-aliases/setUserPrivacySettingRules$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73866

***

### setUserSupportInfo()

> **setUserSupportInfo**(`parameters`): `Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo.md)\>

Sets support information for the given user; for Telegram support only

#### Parameters

• **parameters**: [`setUserSupportInfo$DirectInput`](../type-aliases/setUserSupportInfo$DirectInput.md)

[setUserSupportInfo$Input](../type-aliases/setUserSupportInfo$Input.md)

#### Returns

`Promise`\<[`userSupportInfo`](../type-aliases/userSupportInfo.md)\>

Promise<[UserSupportInfo](../type-aliases/UserSupportInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:74745

***

### setVideoChatDefaultParticipant()

> **setVideoChatDefaultParticipant**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes default participant identifier, on whose behalf a video chat in the chat will be joined

#### Parameters

• **parameters**: [`setVideoChatDefaultParticipant$DirectInput`](../type-aliases/setVideoChatDefaultParticipant$DirectInput.md)

[setVideoChatDefaultParticipant$Input](../type-aliases/setVideoChatDefaultParticipant$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72375

***

### shareChatWithBot()

> **shareChatWithBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Shares a chat after pressing a keyboardButtonTypeRequestChat button with the bot

#### Parameters

• **parameters**: [`shareChatWithBot$DirectInput`](../type-aliases/shareChatWithBot$DirectInput.md)

[shareChatWithBot$Input](../type-aliases/shareChatWithBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70890

***

### sharePhoneNumber()

> **sharePhoneNumber**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Shares the phone number of the current user with a mutual contact. Supposed to be called when the user clicks on chatActionBarSharePhoneNumber

#### Parameters

• **parameters**: [`sharePhoneNumber$DirectInput`](../type-aliases/sharePhoneNumber$DirectInput.md)

[sharePhoneNumber$Input](../type-aliases/sharePhoneNumber$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72692

***

### shareUsersWithBot()

> **shareUsersWithBot**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Shares users after pressing a keyboardButtonTypeRequestUsers button with the bot

#### Parameters

• **parameters**: [`shareUsersWithBot$DirectInput`](../type-aliases/shareUsersWithBot$DirectInput.md)

[shareUsersWithBot$Input](../type-aliases/shareUsersWithBot$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70883

***

### startGroupCallRecording()

> **startGroupCallRecording**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Starts recording of an active group call. Requires groupCall.can_be_managed group call flag

#### Parameters

• **parameters**: [`startGroupCallRecording$DirectInput`](../type-aliases/startGroupCallRecording$DirectInput.md)

[startGroupCallRecording$Input](../type-aliases/startGroupCallRecording$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72487

***

### startGroupCallScreenSharing()

> **startGroupCallScreenSharing**(`parameters`): `Promise`\<[`text`](../type-aliases/text.md)\>

Starts screen sharing in a joined group call. Returns join response payload for tgcalls

#### Parameters

• **parameters**: [`startGroupCallScreenSharing$DirectInput`](../type-aliases/startGroupCallScreenSharing$DirectInput.md)

[startGroupCallScreenSharing$Input](../type-aliases/startGroupCallScreenSharing$Input.md)

#### Returns

`Promise`\<[`text`](../type-aliases/text.md)\>

Promise<[Text](../type-aliases/Text-1.md)>

#### Defined in

dist/generated/types.d.ts:72431

***

### startScheduledGroupCall()

> **startScheduledGroupCall**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Starts a scheduled group call

#### Parameters

• **parameters**: [`startScheduledGroupCall$DirectInput`](../type-aliases/startScheduledGroupCall$DirectInput.md)

[startScheduledGroupCall$Input](../type-aliases/startScheduledGroupCall$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72410

***

### stopBusinessPoll()

> **stopBusinessPoll**(`parameters`): `Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Stops a poll sent on behalf of a business account; for bots only

#### Parameters

• **parameters**: [`stopBusinessPoll$DirectInput`](../type-aliases/stopBusinessPoll$DirectInput.md)

[stopBusinessPoll$Input](../type-aliases/stopBusinessPoll$Input.md)

#### Returns

`Promise`\<[`businessMessage`](../type-aliases/businessMessage.md)\>

Promise<[BusinessMessage](../type-aliases/BusinessMessage-1.md)>

#### Defined in

dist/generated/types.d.ts:70435

***

### stopPoll()

> **stopPoll**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Stops a poll

#### Parameters

• **parameters**: [`stopPoll$DirectInput`](../type-aliases/stopPoll$DirectInput.md)

[stopPoll$Input](../type-aliases/stopPoll$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70839

***

### suggestUserProfilePhoto()

> **suggestUserProfilePhoto**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Suggests a profile photo to another regular user with common messages

#### Parameters

• **parameters**: [`suggestUserProfilePhoto$DirectInput`](../type-aliases/suggestUserProfilePhoto$DirectInput.md)

[suggestUserProfilePhoto$Input](../type-aliases/suggestUserProfilePhoto$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72678

***

### synchronizeLanguagePack()

> **synchronizeLanguagePack**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Fetches the latest versions of all strings from a language pack in the current localization target from the server.

- This method doesn't need to be called explicitly for the current used/base language packs. Can be called before authorization

#### Parameters

• **parameters**: [`synchronizeLanguagePack$DirectInput`](../type-aliases/synchronizeLanguagePack$DirectInput.md)

[synchronizeLanguagePack$Input](../type-aliases/synchronizeLanguagePack$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73794

***

### terminateAllOtherSessions()

> **terminateAllOtherSessions**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Terminates all other sessions of the current user

#### Parameters

• **parameters**: [`terminateAllOtherSessions$DirectInput`](../type-aliases/terminateAllOtherSessions$DirectInput.md)

[terminateAllOtherSessions$Input](../type-aliases/terminateAllOtherSessions$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73440

***

### terminateSession()

> **terminateSession**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Terminates a session of the current user

#### Parameters

• **parameters**: [`terminateSession$DirectInput`](../type-aliases/terminateSession$DirectInput.md)

[terminateSession$Input](../type-aliases/terminateSession$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73433

***

### testCallBytes()

> **testCallBytes**(`parameters`): `Promise`\<[`testBytes`](../type-aliases/testBytes.md)\>

Returns the received bytes; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallBytes$DirectInput`](../type-aliases/testCallBytes$DirectInput.md)

[testCallBytes$Input](../type-aliases/testCallBytes$Input.md)

#### Returns

`Promise`\<[`testBytes`](../type-aliases/testBytes.md)\>

Promise<[TestBytes](../type-aliases/TestBytes-1.md)>

#### Defined in

dist/generated/types.d.ts:74773

***

### testCallEmpty()

> **testCallEmpty**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Does nothing; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallEmpty$DirectInput`](../type-aliases/testCallEmpty$DirectInput.md)

[testCallEmpty$Input](../type-aliases/testCallEmpty$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74759

***

### testCallString()

> **testCallString**(`parameters`): `Promise`\<[`testString`](../type-aliases/testString.md)\>

Returns the received string; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallString$DirectInput`](../type-aliases/testCallString$DirectInput.md)

[testCallString$Input](../type-aliases/testCallString$Input.md)

#### Returns

`Promise`\<[`testString`](../type-aliases/testString.md)\>

Promise<[TestString](../type-aliases/TestString-1.md)>

#### Defined in

dist/generated/types.d.ts:74766

***

### testCallVectorInt()

> **testCallVectorInt**(`parameters`): `Promise`\<[`testVectorInt`](../type-aliases/testVectorInt.md)\>

Returns the received vector of numbers; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorInt$DirectInput`](../type-aliases/testCallVectorInt$DirectInput.md)

[testCallVectorInt$Input](../type-aliases/testCallVectorInt$Input.md)

#### Returns

`Promise`\<[`testVectorInt`](../type-aliases/testVectorInt.md)\>

Promise<[TestVectorInt](../type-aliases/TestVectorInt-1.md)>

#### Defined in

dist/generated/types.d.ts:74780

***

### testCallVectorIntObject()

> **testCallVectorIntObject**(`parameters`): `Promise`\<[`testVectorIntObject`](../type-aliases/testVectorIntObject.md)\>

Returns the received vector of objects containing a number; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorIntObject$DirectInput`](../type-aliases/testCallVectorIntObject$DirectInput.md)

[testCallVectorIntObject$Input](../type-aliases/testCallVectorIntObject$Input.md)

#### Returns

`Promise`\<[`testVectorIntObject`](../type-aliases/testVectorIntObject.md)\>

Promise<[TestVectorIntObject](../type-aliases/TestVectorIntObject-1.md)>

#### Defined in

dist/generated/types.d.ts:74787

***

### testCallVectorString()

> **testCallVectorString**(`parameters`): `Promise`\<[`testVectorString`](../type-aliases/testVectorString.md)\>

Returns the received vector of strings; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorString$DirectInput`](../type-aliases/testCallVectorString$DirectInput.md)

[testCallVectorString$Input](../type-aliases/testCallVectorString$Input.md)

#### Returns

`Promise`\<[`testVectorString`](../type-aliases/testVectorString.md)\>

Promise<[TestVectorString](../type-aliases/TestVectorString-1.md)>

#### Defined in

dist/generated/types.d.ts:74794

***

### testCallVectorStringObject()

> **testCallVectorStringObject**(`parameters`): `Promise`\<[`testVectorStringObject`](../type-aliases/testVectorStringObject.md)\>

Returns the received vector of objects containing a string; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testCallVectorStringObject$DirectInput`](../type-aliases/testCallVectorStringObject$DirectInput.md)

[testCallVectorStringObject$Input](../type-aliases/testCallVectorStringObject$Input.md)

#### Returns

`Promise`\<[`testVectorStringObject`](../type-aliases/testVectorStringObject.md)\>

Promise<[TestVectorStringObject](../type-aliases/TestVectorStringObject-1.md)>

#### Defined in

dist/generated/types.d.ts:74801

***

### testGetDifference()

> **testGetDifference**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Forces an updates.getDifference call to the Telegram servers; for testing only

#### Parameters

• **parameters**: [`testGetDifference$DirectInput`](../type-aliases/testGetDifference$DirectInput.md)

[testGetDifference$Input](../type-aliases/testGetDifference$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74829

***

### testNetwork()

> **testNetwork**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends a simple network request to the Telegram servers; for testing only. Can be called before authorization

#### Parameters

• **parameters**: [`testNetwork$DirectInput`](../type-aliases/testNetwork$DirectInput.md)

[testNetwork$Input](../type-aliases/testNetwork$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74815

***

### testProxy()

> **testProxy**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Sends a simple network request to the Telegram servers via proxy; for testing only. Can be called before authorization

#### Parameters

• **parameters**: [`testProxy$DirectInput`](../type-aliases/testProxy$DirectInput.md)

[testProxy$Input](../type-aliases/testProxy$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74822

***

### testReturnError()

> **testReturnError**(`parameters`): `Promise`\<[`error`](../type-aliases/error.md)\>

Returns the specified error and ensures that the Error object is used; for testing only. Can be called synchronously

#### Parameters

• **parameters**: [`testReturnError$DirectInput`](../type-aliases/testReturnError$DirectInput.md)

[testReturnError$Input](../type-aliases/testReturnError$Input.md)

#### Returns

`Promise`\<[`error`](../type-aliases/error.md)\>

Promise<[Error](../type-aliases/Error-1.md)>

#### Defined in

dist/generated/types.d.ts:74843

***

### testSquareInt()

> **testSquareInt**(`parameters`): `Promise`\<[`testInt`](../type-aliases/testInt.md)\>

Returns the squared received number; for testing only. This is an offline method. Can be called before authorization

#### Parameters

• **parameters**: [`testSquareInt$DirectInput`](../type-aliases/testSquareInt$DirectInput.md)

[testSquareInt$Input](../type-aliases/testSquareInt$Input.md)

#### Returns

`Promise`\<[`testInt`](../type-aliases/testInt.md)\>

Promise<[TestInt](../type-aliases/TestInt-1.md)>

#### Defined in

dist/generated/types.d.ts:74808

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

dist/generated/types.d.ts:74836

***

### toggleAllDownloadsArePaused()

> **toggleAllDownloadsArePaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes pause state of all files in the file download list

#### Parameters

• **parameters**: [`toggleAllDownloadsArePaused$DirectInput`](../type-aliases/toggleAllDownloadsArePaused$DirectInput.md)

[toggleAllDownloadsArePaused$Input](../type-aliases/toggleAllDownloadsArePaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72138

***

### toggleBotIsAddedToAttachmentMenu()

> **toggleBotIsAddedToAttachmentMenu**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Adds or removes a bot to attachment and side menu. Bot can be added to the menu, only if userTypeBot.can_be_added_to_attachment_menu == true

#### Parameters

• **parameters**: [`toggleBotIsAddedToAttachmentMenu$DirectInput`](../type-aliases/toggleBotIsAddedToAttachmentMenu$DirectInput.md)

[toggleBotIsAddedToAttachmentMenu$Input](../type-aliases/toggleBotIsAddedToAttachmentMenu$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71985

***

### toggleBotUsernameIsActive()

> **toggleBotUsernameIsActive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes active state for a username of a bot. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached. Can be called only if userTypeBot.can_be_edited == true

#### Parameters

• **parameters**: [`toggleBotUsernameIsActive$DirectInput`](../type-aliases/toggleBotUsernameIsActive$DirectInput.md)

[toggleBotUsernameIsActive$Input](../type-aliases/toggleBotUsernameIsActive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73384

***

### toggleBusinessConnectedBotChatIsPaused()

> **toggleBusinessConnectedBotChatIsPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Pauses or resumes the connected business bot in a specific chat

#### Parameters

• **parameters**: [`toggleBusinessConnectedBotChatIsPaused$DirectInput`](../type-aliases/toggleBusinessConnectedBotChatIsPaused$DirectInput.md)

[toggleBusinessConnectedBotChatIsPaused$Input](../type-aliases/toggleBusinessConnectedBotChatIsPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73188

***

### toggleChatDefaultDisableNotification()

> **toggleChatDefaultDisableNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the value of the default disable_notification parameter, used when a message is sent to a chat

#### Parameters

• **parameters**: [`toggleChatDefaultDisableNotification$DirectInput`](../type-aliases/toggleChatDefaultDisableNotification$DirectInput.md)

[toggleChatDefaultDisableNotification$Input](../type-aliases/toggleChatDefaultDisableNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71472

***

### toggleChatFolderTags()

> **toggleChatFolderTags**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether chat folder tags are enabled

#### Parameters

• **parameters**: [`toggleChatFolderTags$DirectInput`](../type-aliases/toggleChatFolderTags$DirectInput.md)

[toggleChatFolderTags$Input](../type-aliases/toggleChatFolderTags$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71260

***

### toggleChatHasProtectedContent()

> **toggleChatHasProtectedContent**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the ability of users to save, forward, or copy chat content. Supported only for basic groups, supergroups and channels. Requires owner privileges

#### Parameters

• **parameters**: [`toggleChatHasProtectedContent$DirectInput`](../type-aliases/toggleChatHasProtectedContent$DirectInput.md)

[toggleChatHasProtectedContent$Input](../type-aliases/toggleChatHasProtectedContent$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71444

***

### toggleChatIsMarkedAsUnread()

> **toggleChatIsMarkedAsUnread**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the marked as unread state of a chat

#### Parameters

• **parameters**: [`toggleChatIsMarkedAsUnread$DirectInput`](../type-aliases/toggleChatIsMarkedAsUnread$DirectInput.md)

[toggleChatIsMarkedAsUnread$Input](../type-aliases/toggleChatIsMarkedAsUnread$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71465

***

### toggleChatIsPinned()

> **toggleChatIsPinned**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the pinned state of a chat. There can be up to getOption("pinned_chat_count_max")/getOption("pinned_archived_chat_count_max") pinned non-secret chats and the same number of secret chats in the main/archive chat list. The limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`toggleChatIsPinned$DirectInput`](../type-aliases/toggleChatIsPinned$DirectInput.md)

[toggleChatIsPinned$Input](../type-aliases/toggleChatIsPinned$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71702

***

### toggleChatIsTranslatable()

> **toggleChatIsTranslatable**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the translatable state of a chat

#### Parameters

• **parameters**: [`toggleChatIsTranslatable$DirectInput`](../type-aliases/toggleChatIsTranslatable$DirectInput.md)

[toggleChatIsTranslatable$Input](../type-aliases/toggleChatIsTranslatable$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71458

***

### toggleChatViewAsTopics()

> **toggleChatViewAsTopics**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the view_as_topics setting of a forum chat or Saved Messages

#### Parameters

• **parameters**: [`toggleChatViewAsTopics$DirectInput`](../type-aliases/toggleChatViewAsTopics$DirectInput.md)

[toggleChatViewAsTopics$Input](../type-aliases/toggleChatViewAsTopics$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71451

***

### toggleDownloadIsPaused()

> **toggleDownloadIsPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes pause state of a file in the file download list

#### Parameters

• **parameters**: [`toggleDownloadIsPaused$DirectInput`](../type-aliases/toggleDownloadIsPaused$DirectInput.md)

[toggleDownloadIsPaused$Input](../type-aliases/toggleDownloadIsPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72131

***

### toggleForumTopicIsClosed()

> **toggleForumTopicIsClosed**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether a topic is closed in a forum supergroup chat; requires can_manage_topics right in the supergroup unless the user is creator of the topic

#### Parameters

• **parameters**: [`toggleForumTopicIsClosed$DirectInput`](../type-aliases/toggleForumTopicIsClosed$DirectInput.md)

[toggleForumTopicIsClosed$Input](../type-aliases/toggleForumTopicIsClosed$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70592

***

### toggleForumTopicIsPinned()

> **toggleForumTopicIsPinned**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the pinned state of a forum topic; requires can_manage_topics right in the supergroup. There can be up to getOption("pinned_forum_topic_count_max") pinned forum topics

#### Parameters

• **parameters**: [`toggleForumTopicIsPinned$DirectInput`](../type-aliases/toggleForumTopicIsPinned$DirectInput.md)

[toggleForumTopicIsPinned$Input](../type-aliases/toggleForumTopicIsPinned$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70606

***

### toggleGeneralForumTopicIsHidden()

> **toggleGeneralForumTopicIsHidden**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether a General topic is hidden in a forum supergroup chat; requires can_manage_topics right in the supergroup

#### Parameters

• **parameters**: [`toggleGeneralForumTopicIsHidden$DirectInput`](../type-aliases/toggleGeneralForumTopicIsHidden$DirectInput.md)

[toggleGeneralForumTopicIsHidden$Input](../type-aliases/toggleGeneralForumTopicIsHidden$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70599

***

### toggleGroupCallEnabledStartNotification()

> **toggleGroupCallEnabledStartNotification**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether the current user will receive a notification when the group call starts; scheduled group calls only

#### Parameters

• **parameters**: [`toggleGroupCallEnabledStartNotification$DirectInput`](../type-aliases/toggleGroupCallEnabledStartNotification$DirectInput.md)

[toggleGroupCallEnabledStartNotification$Input](../type-aliases/toggleGroupCallEnabledStartNotification$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72417

***

### toggleGroupCallIsMyVideoEnabled()

> **toggleGroupCallIsMyVideoEnabled**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether current user's video is enabled

#### Parameters

• **parameters**: [`toggleGroupCallIsMyVideoEnabled$DirectInput`](../type-aliases/toggleGroupCallIsMyVideoEnabled$DirectInput.md)

[toggleGroupCallIsMyVideoEnabled$Input](../type-aliases/toggleGroupCallIsMyVideoEnabled$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72508

***

### toggleGroupCallIsMyVideoPaused()

> **toggleGroupCallIsMyVideoPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether current user's video is paused

#### Parameters

• **parameters**: [`toggleGroupCallIsMyVideoPaused$DirectInput`](../type-aliases/toggleGroupCallIsMyVideoPaused$DirectInput.md)

[toggleGroupCallIsMyVideoPaused$Input](../type-aliases/toggleGroupCallIsMyVideoPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72501

***

### toggleGroupCallMuteNewParticipants()

> **toggleGroupCallMuteNewParticipants**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether new participants of a group call can be unmuted only by administrators of the group call. Requires groupCall.can_toggle_mute_new_participants group call flag

#### Parameters

• **parameters**: [`toggleGroupCallMuteNewParticipants$DirectInput`](../type-aliases/toggleGroupCallMuteNewParticipants$DirectInput.md)

[toggleGroupCallMuteNewParticipants$Input](../type-aliases/toggleGroupCallMuteNewParticipants$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72459

***

### toggleGroupCallParticipantIsHandRaised()

> **toggleGroupCallParticipantIsHandRaised**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether a group call participant hand is rased

#### Parameters

• **parameters**: [`toggleGroupCallParticipantIsHandRaised$DirectInput`](../type-aliases/toggleGroupCallParticipantIsHandRaised$DirectInput.md)

[toggleGroupCallParticipantIsHandRaised$Input](../type-aliases/toggleGroupCallParticipantIsHandRaised$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72536

***

### toggleGroupCallParticipantIsMuted()

> **toggleGroupCallParticipantIsMuted**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether a participant of an active group call is muted, unmuted, or allowed to unmute themselves

#### Parameters

• **parameters**: [`toggleGroupCallParticipantIsMuted$DirectInput`](../type-aliases/toggleGroupCallParticipantIsMuted$DirectInput.md)

[toggleGroupCallParticipantIsMuted$Input](../type-aliases/toggleGroupCallParticipantIsMuted$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72522

***

### toggleGroupCallScreenSharingIsPaused()

> **toggleGroupCallScreenSharingIsPaused**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Pauses or unpauses screen sharing in a joined group call

#### Parameters

• **parameters**: [`toggleGroupCallScreenSharingIsPaused$DirectInput`](../type-aliases/toggleGroupCallScreenSharingIsPaused$DirectInput.md)

[toggleGroupCallScreenSharingIsPaused$Input](../type-aliases/toggleGroupCallScreenSharingIsPaused$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72438

***

### toggleHasSponsoredMessagesEnabled()

> **toggleHasSponsoredMessagesEnabled**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether the current user has sponsored messages enabled. The setting has no effect for users without Telegram Premium for which sponsored messages are always enabled

#### Parameters

• **parameters**: [`toggleHasSponsoredMessagesEnabled$DirectInput`](../type-aliases/toggleHasSponsoredMessagesEnabled$DirectInput.md)

[toggleHasSponsoredMessagesEnabled$Input](../type-aliases/toggleHasSponsoredMessagesEnabled$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73090

***

### togglePaidMessageReactionIsAnonymous()

> **togglePaidMessageReactionIsAnonymous**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes whether the paid message reaction of the user to a message is anonymous. The message must have paid reaction added by the user

#### Parameters

• **parameters**: [`togglePaidMessageReactionIsAnonymous$DirectInput`](../type-aliases/togglePaidMessageReactionIsAnonymous$DirectInput.md)

[togglePaidMessageReactionIsAnonymous$Input](../type-aliases/togglePaidMessageReactionIsAnonymous$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:70683

***

### toggleSavedMessagesTopicIsPinned()

> **toggleSavedMessagesTopicIsPinned**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the pinned state of a Saved Messages topic. There can be up to getOption("pinned_saved_messages_topic_count_max") pinned topics. The limit can be increased with Telegram Premium

#### Parameters

• **parameters**: [`toggleSavedMessagesTopicIsPinned$DirectInput`](../type-aliases/toggleSavedMessagesTopicIsPinned$DirectInput.md)

[toggleSavedMessagesTopicIsPinned$Input](../type-aliases/toggleSavedMessagesTopicIsPinned$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:69899

***

### toggleSessionCanAcceptCalls()

> **toggleSessionCanAcceptCalls**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether a session can accept incoming calls

#### Parameters

• **parameters**: [`toggleSessionCanAcceptCalls$DirectInput`](../type-aliases/toggleSessionCanAcceptCalls$DirectInput.md)

[toggleSessionCanAcceptCalls$Input](../type-aliases/toggleSessionCanAcceptCalls$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73454

***

### toggleSessionCanAcceptSecretChats()

> **toggleSessionCanAcceptSecretChats**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether a session can accept incoming secret chats

#### Parameters

• **parameters**: [`toggleSessionCanAcceptSecretChats$DirectInput`](../type-aliases/toggleSessionCanAcceptSecretChats$DirectInput.md)

[toggleSessionCanAcceptSecretChats$Input](../type-aliases/toggleSessionCanAcceptSecretChats$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73461

***

### toggleStoryIsPostedToChatPage()

> **toggleStoryIsPostedToChatPage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether a story is accessible after expiration. Can be called only if story.can_toggle_is_posted_to_chat_page == true

#### Parameters

• **parameters**: [`toggleStoryIsPostedToChatPage$DirectInput`](../type-aliases/toggleStoryIsPostedToChatPage$DirectInput.md)

[toggleStoryIsPostedToChatPage$Input](../type-aliases/toggleStoryIsPostedToChatPage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71779

***

### toggleSupergroupCanHaveSponsoredMessages()

> **toggleSupergroupCanHaveSponsoredMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether sponsored messages are shown in the channel chat; requires owner privileges in the channel. The chat must have at least chatBoostFeatures.min_sponsored_message_disable_boost_level boost level to disable sponsored messages

#### Parameters

• **parameters**: [`toggleSupergroupCanHaveSponsoredMessages$DirectInput`](../type-aliases/toggleSupergroupCanHaveSponsoredMessages$DirectInput.md)

[toggleSupergroupCanHaveSponsoredMessages$Input](../type-aliases/toggleSupergroupCanHaveSponsoredMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73575

***

### toggleSupergroupHasAggressiveAntiSpamEnabled()

> **toggleSupergroupHasAggressiveAntiSpamEnabled**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether aggressive anti-spam checks are enabled in the supergroup. Can be called only if supergroupFullInfo.can_toggle_aggressive_anti_spam == true

#### Parameters

• **parameters**: [`toggleSupergroupHasAggressiveAntiSpamEnabled$DirectInput`](../type-aliases/toggleSupergroupHasAggressiveAntiSpamEnabled$DirectInput.md)

[toggleSupergroupHasAggressiveAntiSpamEnabled$Input](../type-aliases/toggleSupergroupHasAggressiveAntiSpamEnabled$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73589

***

### toggleSupergroupHasHiddenMembers()

> **toggleSupergroupHasHiddenMembers**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether non-administrators can receive only administrators and bots using getSupergroupMembers or searchChatMembers. Can be called only if supergroupFullInfo.can_hide_members == true

#### Parameters

• **parameters**: [`toggleSupergroupHasHiddenMembers$DirectInput`](../type-aliases/toggleSupergroupHasHiddenMembers$DirectInput.md)

[toggleSupergroupHasHiddenMembers$Input](../type-aliases/toggleSupergroupHasHiddenMembers$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73582

***

### toggleSupergroupIsAllHistoryAvailable()

> **toggleSupergroupIsAllHistoryAvailable**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether the message history of a supergroup is available to new members; requires can_change_info member right

#### Parameters

• **parameters**: [`toggleSupergroupIsAllHistoryAvailable$DirectInput`](../type-aliases/toggleSupergroupIsAllHistoryAvailable$DirectInput.md)

[toggleSupergroupIsAllHistoryAvailable$Input](../type-aliases/toggleSupergroupIsAllHistoryAvailable$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73568

***

### toggleSupergroupIsBroadcastGroup()

> **toggleSupergroupIsBroadcastGroup**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Upgrades supergroup to a broadcast group; requires owner privileges in the supergroup

#### Parameters

• **parameters**: [`toggleSupergroupIsBroadcastGroup$DirectInput`](../type-aliases/toggleSupergroupIsBroadcastGroup$DirectInput.md)

[toggleSupergroupIsBroadcastGroup$Input](../type-aliases/toggleSupergroupIsBroadcastGroup$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73603

***

### toggleSupergroupIsForum()

> **toggleSupergroupIsForum**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether the supergroup is a forum; requires owner privileges in the supergroup. Discussion supergroups can't be converted to forums

#### Parameters

• **parameters**: [`toggleSupergroupIsForum$DirectInput`](../type-aliases/toggleSupergroupIsForum$DirectInput.md)

[toggleSupergroupIsForum$Input](../type-aliases/toggleSupergroupIsForum$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73596

***

### toggleSupergroupJoinByRequest()

> **toggleSupergroupJoinByRequest**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether all users directly joining the supergroup need to be approved by supergroup administrators; requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`toggleSupergroupJoinByRequest$DirectInput`](../type-aliases/toggleSupergroupJoinByRequest$DirectInput.md)

[toggleSupergroupJoinByRequest$Input](../type-aliases/toggleSupergroupJoinByRequest$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73561

***

### toggleSupergroupJoinToSendMessages()

> **toggleSupergroupJoinToSendMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether joining is mandatory to send messages to a discussion supergroup; requires can_restrict_members administrator right

#### Parameters

• **parameters**: [`toggleSupergroupJoinToSendMessages$DirectInput`](../type-aliases/toggleSupergroupJoinToSendMessages$DirectInput.md)

[toggleSupergroupJoinToSendMessages$Input](../type-aliases/toggleSupergroupJoinToSendMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73554

***

### toggleSupergroupSignMessages()

> **toggleSupergroupSignMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Toggles whether sender signature or link to the account is added to sent messages in a channel; requires can_change_info member right

#### Parameters

• **parameters**: [`toggleSupergroupSignMessages$DirectInput`](../type-aliases/toggleSupergroupSignMessages$DirectInput.md)

[toggleSupergroupSignMessages$Input](../type-aliases/toggleSupergroupSignMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73547

***

### toggleSupergroupUsernameIsActive()

> **toggleSupergroupUsernameIsActive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes active state for a username of a supergroup or channel, requires owner privileges in the supergroup or channel. The editable username can't be disabled.

- May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached

#### Parameters

• **parameters**: [`toggleSupergroupUsernameIsActive$DirectInput`](../type-aliases/toggleSupergroupUsernameIsActive$DirectInput.md)

[toggleSupergroupUsernameIsActive$Input](../type-aliases/toggleSupergroupUsernameIsActive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73505

***

### toggleUsernameIsActive()

> **toggleUsernameIsActive**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes active state for a username of the current user. The editable username can't be disabled. May return an error with a message "USERNAMES_ACTIVE_TOO_MUCH" if the maximum number of active usernames has been reached

#### Parameters

• **parameters**: [`toggleUsernameIsActive$DirectInput`](../type-aliases/toggleUsernameIsActive$DirectInput.md)

[toggleUsernameIsActive$Input](../type-aliases/toggleUsernameIsActive$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:73048

***

### transferChatOwnership()

> **transferChatOwnership**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Changes the owner of a chat; requires owner privileges in the chat. Use the method canTransferOwnership to check whether the ownership can be transferred from the current session. Available only for supergroups and channel chats

#### Parameters

• **parameters**: [`transferChatOwnership$DirectInput`](../type-aliases/transferChatOwnership$DirectInput.md)

[transferChatOwnership$Input](../type-aliases/transferChatOwnership$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71604

***

### translateMessageText()

> **translateMessageText**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Extracts text or caption of the given message and translates it to the given language. If the current user is a Telegram Premium user, then text formatting is preserved

#### Parameters

• **parameters**: [`translateMessageText$DirectInput`](../type-aliases/translateMessageText$DirectInput.md)

[translateMessageText$Input](../type-aliases/translateMessageText$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Promise<[FormattedText](../type-aliases/FormattedText-1.md)>

#### Defined in

dist/generated/types.d.ts:70176

***

### translateText()

> **translateText**(`parameters`): `Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Translates a text to the given language. If the current user is a Telegram Premium user, then text formatting is preserved

#### Parameters

• **parameters**: [`translateText$DirectInput`](../type-aliases/translateText$DirectInput.md)

[translateText$Input](../type-aliases/translateText$Input.md)

#### Returns

`Promise`\<[`formattedText`](../type-aliases/formattedText.md)\>

Promise<[FormattedText](../type-aliases/FormattedText-1.md)>

#### Defined in

dist/generated/types.d.ts:70169

***

### unpinAllChatMessages()

> **unpinAllChatMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes all pinned messages from a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel

#### Parameters

• **parameters**: [`unpinAllChatMessages$DirectInput`](../type-aliases/unpinAllChatMessages$DirectInput.md)

[unpinAllChatMessages$Input](../type-aliases/unpinAllChatMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71535

***

### unpinAllMessageThreadMessages()

> **unpinAllMessageThreadMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes all pinned messages from a forum topic; requires can_pin_messages member right in the supergroup

#### Parameters

• **parameters**: [`unpinAllMessageThreadMessages$DirectInput`](../type-aliases/unpinAllMessageThreadMessages$DirectInput.md)

[unpinAllMessageThreadMessages$Input](../type-aliases/unpinAllMessageThreadMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71542

***

### unpinChatMessage()

> **unpinChatMessage**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Removes a pinned message from a chat; requires can_pin_messages member right if the chat is a basic group or supergroup, or can_edit_messages administrator right if the chat is a channel

#### Parameters

• **parameters**: [`unpinChatMessage$DirectInput`](../type-aliases/unpinChatMessage$DirectInput.md)

[unpinChatMessage$Input](../type-aliases/unpinChatMessage$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71528

***

### upgradeBasicGroupChatToSupergroupChat()

> **upgradeBasicGroupChatToSupergroupChat**(`parameters`): `Promise`\<[`chat`](../type-aliases/chat.md)\>

Creates a new supergroup from an existing basic group and sends a corresponding messageChatUpgradeTo and messageChatUpgradeFrom; requires owner privileges. Deactivates the original basic group

#### Parameters

• **parameters**: [`upgradeBasicGroupChatToSupergroupChat$DirectInput`](../type-aliases/upgradeBasicGroupChatToSupergroupChat$DirectInput.md)

[upgradeBasicGroupChatToSupergroupChat$Input](../type-aliases/upgradeBasicGroupChatToSupergroupChat$Input.md)

#### Returns

`Promise`\<[`chat`](../type-aliases/chat.md)\>

Promise<[Chat](../type-aliases/Chat-1.md)>

#### Defined in

dist/generated/types.d.ts:71190

***

### uploadStickerFile()

> **uploadStickerFile**(`parameters`): `Promise`\<[`file`](../type-aliases/file.md)\>

Uploads a file with a sticker; returns the uploaded file

#### Parameters

• **parameters**: [`uploadStickerFile$DirectInput`](../type-aliases/uploadStickerFile$DirectInput.md)

[uploadStickerFile$Input](../type-aliases/uploadStickerFile$Input.md)

#### Returns

`Promise`\<[`file`](../type-aliases/file.md)\>

Promise<[File](../type-aliases/File-1.md)>

#### Defined in

dist/generated/types.d.ts:74262

***

### validateOrderInfo()

> **validateOrderInfo**(`parameters`): `Promise`\<[`validatedOrderInfo`](../type-aliases/validatedOrderInfo.md)\>

Validates the order information provided by a user and returns the available shipping options for a flexible invoice

#### Parameters

• **parameters**: [`validateOrderInfo$DirectInput`](../type-aliases/validateOrderInfo$DirectInput.md)

[validateOrderInfo$Input](../type-aliases/validateOrderInfo$Input.md)

#### Returns

`Promise`\<[`validatedOrderInfo`](../type-aliases/validatedOrderInfo.md)\>

Promise<[ValidatedOrderInfo](../type-aliases/ValidatedOrderInfo-1.md)>

#### Defined in

dist/generated/types.d.ts:73659

***

### viewMessages()

> **viewMessages**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that messages are being viewed by the user. Sponsored messages must be marked as viewed only when the entire text of the message is shown on the screen (excluding the button).

- Many useful activities depend on whether the messages are currently being viewed or not (e.g., marking messages as read, incrementing a view counter, updating a view counter, removing deleted messages in supergroups and channels)

#### Parameters

• **parameters**: [`viewMessages$DirectInput`](../type-aliases/viewMessages$DirectInput.md)

[viewMessages$Input](../type-aliases/viewMessages$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:71062

***

### viewPremiumFeature()

> **viewPremiumFeature**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs TDLib that the user viewed detailed information about a Premium feature on the Premium features screen

#### Parameters

• **parameters**: [`viewPremiumFeature$DirectInput`](../type-aliases/viewPremiumFeature$DirectInput.md)

[viewPremiumFeature$Input](../type-aliases/viewPremiumFeature$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:74402

***

### viewTrendingStickerSets()

> **viewTrendingStickerSets**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Informs the server that some trending sticker sets have been viewed by the user

#### Parameters

• **parameters**: [`viewTrendingStickerSets$DirectInput`](../type-aliases/viewTrendingStickerSets$DirectInput.md)

[viewTrendingStickerSets$Input](../type-aliases/viewTrendingStickerSets$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72804

***

### writeGeneratedFilePart()

> **writeGeneratedFilePart**(`parameters`): `Promise`\<[`ok`](../type-aliases/ok.md)\>

Writes a part of a generated file. This method is intended to be used only if the application has no direct access to TDLib's file system, because it is usually slower than a direct write to the destination file

#### Parameters

• **parameters**: [`writeGeneratedFilePart$DirectInput`](../type-aliases/writeGeneratedFilePart$DirectInput.md)

[writeGeneratedFilePart$Input](../type-aliases/writeGeneratedFilePart$Input.md)

#### Returns

`Promise`\<[`ok`](../type-aliases/ok.md)\>

Promise<[Ok](../type-aliases/Ok-1.md)>

#### Defined in

dist/generated/types.d.ts:72087
