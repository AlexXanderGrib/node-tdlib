[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Client

# Class: Client

[index](../modules/index.md).Client

**`Export`**

## Table of contents

### Constructors

- [constructor](index.Client.md#constructor)

### Properties

- [\_adapter](index.Client.md#_adapter)
- [\_client](index.Client.md#_client)
- [\_requests](index.Client.md#_requests)
- [\_state](index.Client.md#_state)
- [\_thread](index.Client.md#_thread)
- [\_updates](index.Client.md#_updates)
- [api](index.Client.md#api)

### Accessors

- [updates](index.Client.md#updates)

### Methods

- [destroy](index.Client.md#destroy)
- [invoke](index.Client.md#invoke)
- [pause](index.Client.md#pause)
- [start](index.Client.md#start)

## Constructors

### constructor

• **new Client**(`_adapter`)

Creates an instance of Client.

**`Memberof`**

Client

#### Parameters

| Name | Type |
| :------ | :------ |
| `_adapter` | [`TDLib`](../interfaces/index._internal_.TDLib.md) |

#### Defined in

dist/client.d.ts:49

## Properties

### \_adapter

• `Private` `Readonly` **\_adapter**: `any`

#### Defined in

dist/client.d.ts:39

___

### \_client

• `Private` `Readonly` **\_client**: `any`

#### Defined in

dist/client.d.ts:40

___

### \_requests

• `Private` `Readonly` **\_requests**: `any`

#### Defined in

dist/client.d.ts:41

___

### \_state

• `Private` **\_state**: `any`

#### Defined in

dist/client.d.ts:43

___

### \_thread

• `Private` **\_thread**: `any`

**`Memberof`**

Client

#### Defined in

dist/client.d.ts:656

___

### \_updates

• `Private` `Readonly` **\_updates**: `any`

#### Defined in

dist/client.d.ts:42

___

### api

• `Readonly` **api**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `acceptCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`acceptCall$Input`](../modules/index.types.default.md#acceptcall$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `acceptTermsOfService` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`acceptTermsOfService$Input`](../modules/index.types.default.md#accepttermsofservice$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addApplicationChangelog` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addApplicationChangelog$Input`](../modules/index.types.default.md#addapplicationchangelog$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addChatMember` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addChatMember$Input`](../modules/index.types.default.md#addchatmember$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addChatMembers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addChatMembers$Input`](../modules/index.types.default.md#addchatmembers$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addChatToList` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addChatToList$Input`](../modules/index.types.default.md#addchattolist$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addContact` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addContact$Input`](../modules/index.types.default.md#addcontact$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addCustomServerLanguagePack` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addCustomServerLanguagePack$Input`](../modules/index.types.default.md#addcustomserverlanguagepack$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addFavoriteSticker` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addFavoriteSticker$Input`](../modules/index.types.default.md#addfavoritesticker$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addFileToDownloads` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addFileToDownloads$Input`](../modules/index.types.default.md#addfiletodownloads$input)\>) => `Promise`<[`file`](../modules/index.types.default.md#file-1)\> |
| `addLocalMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addLocalMessage$Input`](../modules/index.types.default.md#addlocalmessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `addLogMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addLogMessage$Input`](../modules/index.types.default.md#addlogmessage$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addMessageReaction` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addMessageReaction$Input`](../modules/index.types.default.md#addmessagereaction$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addNetworkStatistics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addNetworkStatistics$Input`](../modules/index.types.default.md#addnetworkstatistics$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addProxy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addProxy$Input`](../modules/index.types.default.md#addproxy$input)\>) => `Promise`<[`proxy`](../modules/index.types.default.md#proxy-1)\> |
| `addRecentSticker` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addRecentSticker$Input`](../modules/index.types.default.md#addrecentsticker$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `addRecentlyFoundChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addRecentlyFoundChat$Input`](../modules/index.types.default.md#addrecentlyfoundchat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addSavedAnimation` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addSavedAnimation$Input`](../modules/index.types.default.md#addsavedanimation$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `addSavedNotificationSound` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addSavedNotificationSound$Input`](../modules/index.types.default.md#addsavednotificationsound$input)\>) => `Promise`<[`notificationSound`](../modules/index.types.default.md#notificationsound-1)\> |
| `addStickerToSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`addStickerToSet$Input`](../modules/index.types.default.md#addstickertoset$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `answerCallbackQuery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`answerCallbackQuery$Input`](../modules/index.types.default.md#answercallbackquery$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `answerCustomQuery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`answerCustomQuery$Input`](../modules/index.types.default.md#answercustomquery$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `answerInlineQuery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`answerInlineQuery$Input`](../modules/index.types.default.md#answerinlinequery$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `answerPreCheckoutQuery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`answerPreCheckoutQuery$Input`](../modules/index.types.default.md#answerprecheckoutquery$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `answerShippingQuery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`answerShippingQuery$Input`](../modules/index.types.default.md#answershippingquery$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `answerWebAppQuery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`answerWebAppQuery$Input`](../modules/index.types.default.md#answerwebappquery$input)\>) => `Promise`<[`sentWebAppMessage`](../modules/index.types.default.md#sentwebappmessage-1)\> |
| `assignAppStoreTransaction` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`assignAppStoreTransaction$Input`](../modules/index.types.default.md#assignappstoretransaction$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `assignGooglePlayTransaction` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`assignGooglePlayTransaction$Input`](../modules/index.types.default.md#assigngoogleplaytransaction$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `banChatMember` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`banChatMember$Input`](../modules/index.types.default.md#banchatmember$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `blockMessageSenderFromReplies` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`blockMessageSenderFromReplies$Input`](../modules/index.types.default.md#blockmessagesenderfromreplies$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `canPurchasePremium` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`canPurchasePremium$Input`](../modules/index.types.default.md#canpurchasepremium$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `canTransferOwnership` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`canTransferOwnership$Input`](../modules/index.types.default.md#cantransferownership$input)\>) => `Promise`<[`CanTransferOwnershipResult`](../modules/index.types.default.md#cantransferownershipresult)\> |
| `cancelDownloadFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`cancelDownloadFile$Input`](../modules/index.types.default.md#canceldownloadfile$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `cancelPasswordReset` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`cancelPasswordReset$Input`](../modules/index.types.default.md#cancelpasswordreset$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `cancelPreliminaryUploadFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`cancelPreliminaryUploadFile$Input`](../modules/index.types.default.md#cancelpreliminaryuploadfile$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `changeImportedContacts` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`changeImportedContacts$Input`](../modules/index.types.default.md#changeimportedcontacts$input)\>) => `Promise`<[`importedContacts`](../modules/index.types.default.md#importedcontacts-1)\> |
| `changePhoneNumber` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`changePhoneNumber$Input`](../modules/index.types.default.md#changephonenumber$input)\>) => `Promise`<[`authenticationCodeInfo`](../modules/index.types.default.md#authenticationcodeinfo-1)\> |
| `changeStickerSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`changeStickerSet$Input`](../modules/index.types.default.md#changestickerset$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkAuthenticationBotToken` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkAuthenticationBotToken$Input`](../modules/index.types.default.md#checkauthenticationbottoken$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkAuthenticationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkAuthenticationCode$Input`](../modules/index.types.default.md#checkauthenticationcode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkAuthenticationEmailCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkAuthenticationEmailCode$Input`](../modules/index.types.default.md#checkauthenticationemailcode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkAuthenticationPassword` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkAuthenticationPassword$Input`](../modules/index.types.default.md#checkauthenticationpassword$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkAuthenticationPasswordRecoveryCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkAuthenticationPasswordRecoveryCode$Input`](../modules/index.types.default.md#checkauthenticationpasswordrecoverycode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkChangePhoneNumberCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkChangePhoneNumberCode$Input`](../modules/index.types.default.md#checkchangephonenumbercode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkChatInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkChatInviteLink$Input`](../modules/index.types.default.md#checkchatinvitelink$input)\>) => `Promise`<[`chatInviteLinkInfo`](../modules/index.types.default.md#chatinvitelinkinfo-1)\> |
| `checkChatUsername` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkChatUsername$Input`](../modules/index.types.default.md#checkchatusername$input)\>) => `Promise`<[`CheckChatUsernameResult`](../modules/index.types.default.md#checkchatusernameresult)\> |
| `checkCreatedPublicChatsLimit` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkCreatedPublicChatsLimit$Input`](../modules/index.types.default.md#checkcreatedpublicchatslimit$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkEmailAddressVerificationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkEmailAddressVerificationCode$Input`](../modules/index.types.default.md#checkemailaddressverificationcode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkLoginEmailAddressCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkLoginEmailAddressCode$Input`](../modules/index.types.default.md#checkloginemailaddresscode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkPasswordRecoveryCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkPasswordRecoveryCode$Input`](../modules/index.types.default.md#checkpasswordrecoverycode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkPhoneNumberConfirmationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkPhoneNumberConfirmationCode$Input`](../modules/index.types.default.md#checkphonenumberconfirmationcode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkPhoneNumberVerificationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkPhoneNumberVerificationCode$Input`](../modules/index.types.default.md#checkphonenumberverificationcode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `checkRecoveryEmailAddressCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkRecoveryEmailAddressCode$Input`](../modules/index.types.default.md#checkrecoveryemailaddresscode$input)\>) => `Promise`<[`passwordState`](../modules/index.types.default.md#passwordstate-1)\> |
| `checkStickerSetName` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`checkStickerSetName$Input`](../modules/index.types.default.md#checkstickersetname$input)\>) => `Promise`<[`CheckStickerSetNameResult`](../modules/index.types.default.md#checkstickersetnameresult)\> |
| `cleanFileName` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`cleanFileName$Input`](../modules/index.types.default.md#cleanfilename$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `clearAllDraftMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clearAllDraftMessages$Input`](../modules/index.types.default.md#clearalldraftmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `clearAutosaveSettingsExceptions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clearAutosaveSettingsExceptions$Input`](../modules/index.types.default.md#clearautosavesettingsexceptions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `clearImportedContacts` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clearImportedContacts$Input`](../modules/index.types.default.md#clearimportedcontacts$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `clearRecentEmojiStatuses` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clearRecentEmojiStatuses$Input`](../modules/index.types.default.md#clearrecentemojistatuses$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `clearRecentReactions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clearRecentReactions$Input`](../modules/index.types.default.md#clearrecentreactions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `clearRecentStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clearRecentStickers$Input`](../modules/index.types.default.md#clearrecentstickers$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `clearRecentlyFoundChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clearRecentlyFoundChats$Input`](../modules/index.types.default.md#clearrecentlyfoundchats$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `clickAnimatedEmojiMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clickAnimatedEmojiMessage$Input`](../modules/index.types.default.md#clickanimatedemojimessage$input)\>) => `Promise`<[`sticker`](../modules/index.types.default.md#sticker-1)\> |
| `clickPremiumSubscriptionButton` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`clickPremiumSubscriptionButton$Input`](../modules/index.types.default.md#clickpremiumsubscriptionbutton$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `close` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`close$Input`](../modules/index.types.default.md#close$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `closeChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`closeChat$Input`](../modules/index.types.default.md#closechat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `closeSecretChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`closeSecretChat$Input`](../modules/index.types.default.md#closesecretchat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `closeWebApp` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`closeWebApp$Input`](../modules/index.types.default.md#closewebapp$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `confirmQrCodeAuthentication` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`confirmQrCodeAuthentication$Input`](../modules/index.types.default.md#confirmqrcodeauthentication$input)\>) => `Promise`<[`session`](../modules/index.types.default.md#session-1)\> |
| `createBasicGroupChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createBasicGroupChat$Input`](../modules/index.types.default.md#createbasicgroupchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `createCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createCall$Input`](../modules/index.types.default.md#createcall$input)\>) => `Promise`<[`callId`](../modules/index.types.default.md#callid-1)\> |
| `createChatFilter` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createChatFilter$Input`](../modules/index.types.default.md#createchatfilter$input)\>) => `Promise`<[`chatFilterInfo`](../modules/index.types.default.md#chatfilterinfo-1)\> |
| `createChatInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createChatInviteLink$Input`](../modules/index.types.default.md#createchatinvitelink$input)\>) => `Promise`<[`chatInviteLink`](../modules/index.types.default.md#chatinvitelink-1)\> |
| `createForumTopic` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createForumTopic$Input`](../modules/index.types.default.md#createforumtopic$input)\>) => `Promise`<[`forumTopicInfo`](../modules/index.types.default.md#forumtopicinfo-1)\> |
| `createInvoiceLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createInvoiceLink$Input`](../modules/index.types.default.md#createinvoicelink$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `createNewBasicGroupChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createNewBasicGroupChat$Input`](../modules/index.types.default.md#createnewbasicgroupchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `createNewSecretChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createNewSecretChat$Input`](../modules/index.types.default.md#createnewsecretchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `createNewStickerSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createNewStickerSet$Input`](../modules/index.types.default.md#createnewstickerset$input)\>) => `Promise`<[`stickerSet`](../modules/index.types.default.md#stickerset-1)\> |
| `createNewSupergroupChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createNewSupergroupChat$Input`](../modules/index.types.default.md#createnewsupergroupchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `createPrivateChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createPrivateChat$Input`](../modules/index.types.default.md#createprivatechat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `createSecretChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createSecretChat$Input`](../modules/index.types.default.md#createsecretchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `createSupergroupChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createSupergroupChat$Input`](../modules/index.types.default.md#createsupergroupchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `createTemporaryPassword` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createTemporaryPassword$Input`](../modules/index.types.default.md#createtemporarypassword$input)\>) => `Promise`<[`temporaryPasswordState`](../modules/index.types.default.md#temporarypasswordstate-1)\> |
| `createVideoChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`createVideoChat$Input`](../modules/index.types.default.md#createvideochat$input)\>) => `Promise`<[`groupCallId`](../modules/index.types.default.md#groupcallid-1)\> |
| `deleteAccount` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteAccount$Input`](../modules/index.types.default.md#deleteaccount$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteAllCallMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteAllCallMessages$Input`](../modules/index.types.default.md#deleteallcallmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteAllRevokedChatInviteLinks` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteAllRevokedChatInviteLinks$Input`](../modules/index.types.default.md#deleteallrevokedchatinvitelinks$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteChat$Input`](../modules/index.types.default.md#deletechat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteChatFilter` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteChatFilter$Input`](../modules/index.types.default.md#deletechatfilter$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteChatHistory` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteChatHistory$Input`](../modules/index.types.default.md#deletechathistory$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteChatMessagesByDate` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteChatMessagesByDate$Input`](../modules/index.types.default.md#deletechatmessagesbydate$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteChatMessagesBySender` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteChatMessagesBySender$Input`](../modules/index.types.default.md#deletechatmessagesbysender$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteChatReplyMarkup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteChatReplyMarkup$Input`](../modules/index.types.default.md#deletechatreplymarkup$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteCommands` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteCommands$Input`](../modules/index.types.default.md#deletecommands$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteFile$Input`](../modules/index.types.default.md#deletefile$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteForumTopic` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteForumTopic$Input`](../modules/index.types.default.md#deleteforumtopic$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteLanguagePack` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteLanguagePack$Input`](../modules/index.types.default.md#deletelanguagepack$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteMessages$Input`](../modules/index.types.default.md#deletemessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deletePassportElement` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deletePassportElement$Input`](../modules/index.types.default.md#deletepassportelement$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteProfilePhoto` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteProfilePhoto$Input`](../modules/index.types.default.md#deleteprofilephoto$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteRevokedChatInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteRevokedChatInviteLink$Input`](../modules/index.types.default.md#deleterevokedchatinvitelink$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteSavedCredentials` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteSavedCredentials$Input`](../modules/index.types.default.md#deletesavedcredentials$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteSavedOrderInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteSavedOrderInfo$Input`](../modules/index.types.default.md#deletesavedorderinfo$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `deleteStickerSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`deleteStickerSet$Input`](../modules/index.types.default.md#deletestickerset$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `destroy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`destroy$Input`](../modules/index.types.default.md#destroy$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `disableAllSupergroupUsernames` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`disableAllSupergroupUsernames$Input`](../modules/index.types.default.md#disableallsupergroupusernames$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `disableProxy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`disableProxy$Input`](../modules/index.types.default.md#disableproxy$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `discardCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`discardCall$Input`](../modules/index.types.default.md#discardcall$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `disconnectAllWebsites` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`disconnectAllWebsites$Input`](../modules/index.types.default.md#disconnectallwebsites$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `disconnectWebsite` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`disconnectWebsite$Input`](../modules/index.types.default.md#disconnectwebsite$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `downloadFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`downloadFile$Input`](../modules/index.types.default.md#downloadfile$input)\>) => `Promise`<[`file`](../modules/index.types.default.md#file-1)\> |
| `editChatFilter` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editChatFilter$Input`](../modules/index.types.default.md#editchatfilter$input)\>) => `Promise`<[`chatFilterInfo`](../modules/index.types.default.md#chatfilterinfo-1)\> |
| `editChatInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editChatInviteLink$Input`](../modules/index.types.default.md#editchatinvitelink$input)\>) => `Promise`<[`chatInviteLink`](../modules/index.types.default.md#chatinvitelink-1)\> |
| `editCustomLanguagePackInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editCustomLanguagePackInfo$Input`](../modules/index.types.default.md#editcustomlanguagepackinfo$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editForumTopic` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editForumTopic$Input`](../modules/index.types.default.md#editforumtopic$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editInlineMessageCaption` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editInlineMessageCaption$Input`](../modules/index.types.default.md#editinlinemessagecaption$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editInlineMessageLiveLocation` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editInlineMessageLiveLocation$Input`](../modules/index.types.default.md#editinlinemessagelivelocation$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editInlineMessageMedia` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editInlineMessageMedia$Input`](../modules/index.types.default.md#editinlinemessagemedia$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editInlineMessageReplyMarkup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editInlineMessageReplyMarkup$Input`](../modules/index.types.default.md#editinlinemessagereplymarkup$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editInlineMessageText` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editInlineMessageText$Input`](../modules/index.types.default.md#editinlinemessagetext$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editMessageCaption` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editMessageCaption$Input`](../modules/index.types.default.md#editmessagecaption$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `editMessageLiveLocation` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editMessageLiveLocation$Input`](../modules/index.types.default.md#editmessagelivelocation$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `editMessageMedia` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editMessageMedia$Input`](../modules/index.types.default.md#editmessagemedia$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `editMessageReplyMarkup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editMessageReplyMarkup$Input`](../modules/index.types.default.md#editmessagereplymarkup$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `editMessageSchedulingState` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editMessageSchedulingState$Input`](../modules/index.types.default.md#editmessageschedulingstate$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `editMessageText` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editMessageText$Input`](../modules/index.types.default.md#editmessagetext$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `editProxy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`editProxy$Input`](../modules/index.types.default.md#editproxy$input)\>) => `Promise`<[`proxy`](../modules/index.types.default.md#proxy-1)\> |
| `enableProxy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`enableProxy$Input`](../modules/index.types.default.md#enableproxy$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `endGroupCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`endGroupCall$Input`](../modules/index.types.default.md#endgroupcall$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `endGroupCallRecording` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`endGroupCallRecording$Input`](../modules/index.types.default.md#endgroupcallrecording$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `endGroupCallScreenSharing` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`endGroupCallScreenSharing$Input`](../modules/index.types.default.md#endgroupcallscreensharing$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `finishFileGeneration` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`finishFileGeneration$Input`](../modules/index.types.default.md#finishfilegeneration$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `forwardMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`forwardMessages$Input`](../modules/index.types.default.md#forwardmessages$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `getAccountTtl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAccountTtl$Input`](../modules/index.types.default.md#getaccountttl$input)\>) => `Promise`<[`accountTtl`](../modules/index.types.default.md#accountttl-1)\> |
| `getActiveLiveLocationMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getActiveLiveLocationMessages$Input`](../modules/index.types.default.md#getactivelivelocationmessages$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `getActiveSessions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getActiveSessions$Input`](../modules/index.types.default.md#getactivesessions$input)\>) => `Promise`<[`sessions`](../modules/index.types.default.md#sessions-1)\> |
| `getAllPassportElements` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAllPassportElements$Input`](../modules/index.types.default.md#getallpassportelements$input)\>) => `Promise`<[`passportElements`](../modules/index.types.default.md#passportelements-1)\> |
| `getAnimatedEmoji` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAnimatedEmoji$Input`](../modules/index.types.default.md#getanimatedemoji$input)\>) => `Promise`<[`animatedEmoji`](../modules/index.types.default.md#animatedemoji-1)\> |
| `getApplicationConfig` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getApplicationConfig$Input`](../modules/index.types.default.md#getapplicationconfig$input)\>) => `Promise`<[`JsonValue`](../modules/index.types.default.md#jsonvalue)\> |
| `getApplicationDownloadLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getApplicationDownloadLink$Input`](../modules/index.types.default.md#getapplicationdownloadlink$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getArchivedStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getArchivedStickerSets$Input`](../modules/index.types.default.md#getarchivedstickersets$input)\>) => `Promise`<[`stickerSets`](../modules/index.types.default.md#stickersets-1)\> |
| `getAttachedStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAttachedStickerSets$Input`](../modules/index.types.default.md#getattachedstickersets$input)\>) => `Promise`<[`stickerSets`](../modules/index.types.default.md#stickersets-1)\> |
| `getAttachmentMenuBot` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAttachmentMenuBot$Input`](../modules/index.types.default.md#getattachmentmenubot$input)\>) => `Promise`<[`attachmentMenuBot`](../modules/index.types.default.md#attachmentmenubot-1)\> |
| `getAuthorizationState` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAuthorizationState$Input`](../modules/index.types.default.md#getauthorizationstate$input)\>) => `Promise`<[`AuthorizationState`](../modules/index.types.default.md#authorizationstate)\> |
| `getAutoDownloadSettingsPresets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAutoDownloadSettingsPresets$Input`](../modules/index.types.default.md#getautodownloadsettingspresets$input)\>) => `Promise`<[`autoDownloadSettingsPresets`](../modules/index.types.default.md#autodownloadsettingspresets-1)\> |
| `getAutosaveSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getAutosaveSettings$Input`](../modules/index.types.default.md#getautosavesettings$input)\>) => `Promise`<[`autosaveSettings`](../modules/index.types.default.md#autosavesettings-1)\> |
| `getBackgroundUrl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBackgroundUrl$Input`](../modules/index.types.default.md#getbackgroundurl$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getBackgrounds` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBackgrounds$Input`](../modules/index.types.default.md#getbackgrounds$input)\>) => `Promise`<[`backgrounds`](../modules/index.types.default.md#backgrounds-1)\> |
| `getBankCardInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBankCardInfo$Input`](../modules/index.types.default.md#getbankcardinfo$input)\>) => `Promise`<[`bankCardInfo`](../modules/index.types.default.md#bankcardinfo-1)\> |
| `getBasicGroup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBasicGroup$Input`](../modules/index.types.default.md#getbasicgroup$input)\>) => `Promise`<[`basicGroup`](../modules/index.types.default.md#basicgroup-1)\> |
| `getBasicGroupFullInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBasicGroupFullInfo$Input`](../modules/index.types.default.md#getbasicgroupfullinfo$input)\>) => `Promise`<[`basicGroupFullInfo`](../modules/index.types.default.md#basicgroupfullinfo-1)\> |
| `getBlockedMessageSenders` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBlockedMessageSenders$Input`](../modules/index.types.default.md#getblockedmessagesenders$input)\>) => `Promise`<[`messageSenders`](../modules/index.types.default.md#messagesenders-1)\> |
| `getBotInfoDescription` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBotInfoDescription$Input`](../modules/index.types.default.md#getbotinfodescription$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getBotInfoShortDescription` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getBotInfoShortDescription$Input`](../modules/index.types.default.md#getbotinfoshortdescription$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getCallbackQueryAnswer` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCallbackQueryAnswer$Input`](../modules/index.types.default.md#getcallbackqueryanswer$input)\>) => `Promise`<[`callbackQueryAnswer`](../modules/index.types.default.md#callbackqueryanswer-1)\> |
| `getCallbackQueryMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCallbackQueryMessage$Input`](../modules/index.types.default.md#getcallbackquerymessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `getChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChat$Input`](../modules/index.types.default.md#getchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `getChatAdministrators` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatAdministrators$Input`](../modules/index.types.default.md#getchatadministrators$input)\>) => `Promise`<[`chatAdministrators`](../modules/index.types.default.md#chatadministrators-1)\> |
| `getChatAvailableMessageSenders` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatAvailableMessageSenders$Input`](../modules/index.types.default.md#getchatavailablemessagesenders$input)\>) => `Promise`<[`chatMessageSenders`](../modules/index.types.default.md#chatmessagesenders-1)\> |
| `getChatEventLog` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatEventLog$Input`](../modules/index.types.default.md#getchateventlog$input)\>) => `Promise`<[`chatEvents`](../modules/index.types.default.md#chatevents-1)\> |
| `getChatFilter` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatFilter$Input`](../modules/index.types.default.md#getchatfilter$input)\>) => `Promise`<[`chatFilter`](../modules/index.types.default.md#chatfilter-1)\> |
| `getChatFilterDefaultIconName` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatFilterDefaultIconName$Input`](../modules/index.types.default.md#getchatfilterdefaulticonname$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getChatHistory` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatHistory$Input`](../modules/index.types.default.md#getchathistory$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `getChatInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatInviteLink$Input`](../modules/index.types.default.md#getchatinvitelink$input)\>) => `Promise`<[`chatInviteLink`](../modules/index.types.default.md#chatinvitelink-1)\> |
| `getChatInviteLinkCounts` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatInviteLinkCounts$Input`](../modules/index.types.default.md#getchatinvitelinkcounts$input)\>) => `Promise`<[`chatInviteLinkCounts`](../modules/index.types.default.md#chatinvitelinkcounts-1)\> |
| `getChatInviteLinkMembers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatInviteLinkMembers$Input`](../modules/index.types.default.md#getchatinvitelinkmembers$input)\>) => `Promise`<[`chatInviteLinkMembers`](../modules/index.types.default.md#chatinvitelinkmembers-1)\> |
| `getChatInviteLinks` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatInviteLinks$Input`](../modules/index.types.default.md#getchatinvitelinks$input)\>) => `Promise`<[`chatInviteLinks`](../modules/index.types.default.md#chatinvitelinks-1)\> |
| `getChatJoinRequests` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatJoinRequests$Input`](../modules/index.types.default.md#getchatjoinrequests$input)\>) => `Promise`<[`chatJoinRequests`](../modules/index.types.default.md#chatjoinrequests-1)\> |
| `getChatListsToAddChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatListsToAddChat$Input`](../modules/index.types.default.md#getchatliststoaddchat$input)\>) => `Promise`<[`chatLists`](../modules/index.types.default.md#chatlists-1)\> |
| `getChatMember` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatMember$Input`](../modules/index.types.default.md#getchatmember$input)\>) => `Promise`<[`chatMember`](../modules/index.types.default.md#chatmember-1)\> |
| `getChatMessageByDate` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatMessageByDate$Input`](../modules/index.types.default.md#getchatmessagebydate$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `getChatMessageCalendar` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatMessageCalendar$Input`](../modules/index.types.default.md#getchatmessagecalendar$input)\>) => `Promise`<[`messageCalendar`](../modules/index.types.default.md#messagecalendar-1)\> |
| `getChatMessageCount` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatMessageCount$Input`](../modules/index.types.default.md#getchatmessagecount$input)\>) => `Promise`<[`count`](../modules/index.types.default.md#count-1)\> |
| `getChatMessagePosition` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatMessagePosition$Input`](../modules/index.types.default.md#getchatmessageposition$input)\>) => `Promise`<[`count`](../modules/index.types.default.md#count-1)\> |
| `getChatNotificationSettingsExceptions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatNotificationSettingsExceptions$Input`](../modules/index.types.default.md#getchatnotificationsettingsexceptions$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getChatPinnedMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatPinnedMessage$Input`](../modules/index.types.default.md#getchatpinnedmessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `getChatScheduledMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatScheduledMessages$Input`](../modules/index.types.default.md#getchatscheduledmessages$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `getChatSparseMessagePositions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatSparseMessagePositions$Input`](../modules/index.types.default.md#getchatsparsemessagepositions$input)\>) => `Promise`<[`messagePositions`](../modules/index.types.default.md#messagepositions-1)\> |
| `getChatSponsoredMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatSponsoredMessages$Input`](../modules/index.types.default.md#getchatsponsoredmessages$input)\>) => `Promise`<[`sponsoredMessages`](../modules/index.types.default.md#sponsoredmessages-1)\> |
| `getChatStatistics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChatStatistics$Input`](../modules/index.types.default.md#getchatstatistics$input)\>) => `Promise`<[`ChatStatistics`](../modules/index.types.default.md#chatstatistics)\> |
| `getChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getChats$Input`](../modules/index.types.default.md#getchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getCommands` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCommands$Input`](../modules/index.types.default.md#getcommands$input)\>) => `Promise`<[`botCommands`](../modules/index.types.default.md#botcommands-1)\> |
| `getConnectedWebsites` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getConnectedWebsites$Input`](../modules/index.types.default.md#getconnectedwebsites$input)\>) => `Promise`<[`connectedWebsites`](../modules/index.types.default.md#connectedwebsites-1)\> |
| `getContacts` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getContacts$Input`](../modules/index.types.default.md#getcontacts$input)\>) => `Promise`<[`users`](../modules/index.types.default.md#users-1)\> |
| `getCountries` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCountries$Input`](../modules/index.types.default.md#getcountries$input)\>) => `Promise`<[`countries`](../modules/index.types.default.md#countries-1)\> |
| `getCountryCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCountryCode$Input`](../modules/index.types.default.md#getcountrycode$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getCreatedPublicChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCreatedPublicChats$Input`](../modules/index.types.default.md#getcreatedpublicchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getCurrentState` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCurrentState$Input`](../modules/index.types.default.md#getcurrentstate$input)\>) => `Promise`<[`updates`](../modules/index.types.default.md#updates-1)\> |
| `getCustomEmojiReactionAnimations` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCustomEmojiReactionAnimations$Input`](../modules/index.types.default.md#getcustomemojireactionanimations$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getCustomEmojiStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getCustomEmojiStickers$Input`](../modules/index.types.default.md#getcustomemojistickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getDatabaseStatistics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getDatabaseStatistics$Input`](../modules/index.types.default.md#getdatabasestatistics$input)\>) => `Promise`<[`databaseStatistics`](../modules/index.types.default.md#databasestatistics-1)\> |
| `getDeepLinkInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getDeepLinkInfo$Input`](../modules/index.types.default.md#getdeeplinkinfo$input)\>) => `Promise`<[`deepLinkInfo`](../modules/index.types.default.md#deeplinkinfo-1)\> |
| `getDefaultChatPhotoCustomEmojiStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getDefaultChatPhotoCustomEmojiStickers$Input`](../modules/index.types.default.md#getdefaultchatphotocustomemojistickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getDefaultEmojiStatuses` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getDefaultEmojiStatuses$Input`](../modules/index.types.default.md#getdefaultemojistatuses$input)\>) => `Promise`<[`emojiStatuses`](../modules/index.types.default.md#emojistatuses-1)\> |
| `getDefaultMessageAutoDeleteTime` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getDefaultMessageAutoDeleteTime$Input`](../modules/index.types.default.md#getdefaultmessageautodeletetime$input)\>) => `Promise`<[`messageAutoDeleteTime`](../modules/index.types.default.md#messageautodeletetime-1)\> |
| `getDefaultProfilePhotoCustomEmojiStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getDefaultProfilePhotoCustomEmojiStickers$Input`](../modules/index.types.default.md#getdefaultprofilephotocustomemojistickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getEmojiCategories` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getEmojiCategories$Input`](../modules/index.types.default.md#getemojicategories$input)\>) => `Promise`<[`emojiCategories`](../modules/index.types.default.md#emojicategories-1)\> |
| `getEmojiReaction` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getEmojiReaction$Input`](../modules/index.types.default.md#getemojireaction$input)\>) => `Promise`<[`emojiReaction`](../modules/index.types.default.md#emojireaction-1)\> |
| `getEmojiSuggestionsUrl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getEmojiSuggestionsUrl$Input`](../modules/index.types.default.md#getemojisuggestionsurl$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getExternalLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getExternalLink$Input`](../modules/index.types.default.md#getexternallink$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getExternalLinkInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getExternalLinkInfo$Input`](../modules/index.types.default.md#getexternallinkinfo$input)\>) => `Promise`<[`LoginUrlInfo`](../modules/index.types.default.md#loginurlinfo)\> |
| `getFavoriteStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getFavoriteStickers$Input`](../modules/index.types.default.md#getfavoritestickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getFile$Input`](../modules/index.types.default.md#getfile$input)\>) => `Promise`<[`file`](../modules/index.types.default.md#file-1)\> |
| `getFileDownloadedPrefixSize` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getFileDownloadedPrefixSize$Input`](../modules/index.types.default.md#getfiledownloadedprefixsize$input)\>) => `Promise`<[`fileDownloadedPrefixSize`](../modules/index.types.default.md#filedownloadedprefixsize-1)\> |
| `getFileExtension` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getFileExtension$Input`](../modules/index.types.default.md#getfileextension$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getFileMimeType` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getFileMimeType$Input`](../modules/index.types.default.md#getfilemimetype$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getForumTopic` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getForumTopic$Input`](../modules/index.types.default.md#getforumtopic$input)\>) => `Promise`<[`forumTopic`](../modules/index.types.default.md#forumtopic-1)\> |
| `getForumTopicDefaultIcons` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getForumTopicDefaultIcons$Input`](../modules/index.types.default.md#getforumtopicdefaulticons$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getForumTopicLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getForumTopicLink$Input`](../modules/index.types.default.md#getforumtopiclink$input)\>) => `Promise`<[`messageLink`](../modules/index.types.default.md#messagelink-1)\> |
| `getForumTopics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getForumTopics$Input`](../modules/index.types.default.md#getforumtopics$input)\>) => `Promise`<[`forumTopics`](../modules/index.types.default.md#forumtopics-1)\> |
| `getGameHighScores` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getGameHighScores$Input`](../modules/index.types.default.md#getgamehighscores$input)\>) => `Promise`<[`gameHighScores`](../modules/index.types.default.md#gamehighscores-1)\> |
| `getGroupCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getGroupCall$Input`](../modules/index.types.default.md#getgroupcall$input)\>) => `Promise`<[`groupCall`](../modules/index.types.default.md#groupcall-1)\> |
| `getGroupCallInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getGroupCallInviteLink$Input`](../modules/index.types.default.md#getgroupcallinvitelink$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getGroupCallStreamSegment` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getGroupCallStreamSegment$Input`](../modules/index.types.default.md#getgroupcallstreamsegment$input)\>) => `Promise`<[`filePart`](../modules/index.types.default.md#filepart-1)\> |
| `getGroupCallStreams` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getGroupCallStreams$Input`](../modules/index.types.default.md#getgroupcallstreams$input)\>) => `Promise`<[`groupCallStreams`](../modules/index.types.default.md#groupcallstreams-1)\> |
| `getGroupsInCommon` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getGroupsInCommon$Input`](../modules/index.types.default.md#getgroupsincommon$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getImportedContactCount` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getImportedContactCount$Input`](../modules/index.types.default.md#getimportedcontactcount$input)\>) => `Promise`<[`count`](../modules/index.types.default.md#count-1)\> |
| `getInactiveSupergroupChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getInactiveSupergroupChats$Input`](../modules/index.types.default.md#getinactivesupergroupchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getInlineGameHighScores` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getInlineGameHighScores$Input`](../modules/index.types.default.md#getinlinegamehighscores$input)\>) => `Promise`<[`gameHighScores`](../modules/index.types.default.md#gamehighscores-1)\> |
| `getInlineQueryResults` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getInlineQueryResults$Input`](../modules/index.types.default.md#getinlinequeryresults$input)\>) => `Promise`<[`inlineQueryResults`](../modules/index.types.default.md#inlinequeryresults-1)\> |
| `getInstalledStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getInstalledStickerSets$Input`](../modules/index.types.default.md#getinstalledstickersets$input)\>) => `Promise`<[`stickerSets`](../modules/index.types.default.md#stickersets-1)\> |
| `getInternalLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getInternalLink$Input`](../modules/index.types.default.md#getinternallink$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getInternalLinkType` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getInternalLinkType$Input`](../modules/index.types.default.md#getinternallinktype$input)\>) => `Promise`<[`InternalLinkType`](../modules/index.types.default.md#internallinktype)\> |
| `getJsonString` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getJsonString$Input`](../modules/index.types.default.md#getjsonstring$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getJsonValue` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getJsonValue$Input`](../modules/index.types.default.md#getjsonvalue$input)\>) => `Promise`<[`JsonValue`](../modules/index.types.default.md#jsonvalue)\> |
| `getLanguagePackInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLanguagePackInfo$Input`](../modules/index.types.default.md#getlanguagepackinfo$input)\>) => `Promise`<[`languagePackInfo`](../modules/index.types.default.md#languagepackinfo-1)\> |
| `getLanguagePackString` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLanguagePackString$Input`](../modules/index.types.default.md#getlanguagepackstring$input)\>) => `Promise`<[`LanguagePackStringValue`](../modules/index.types.default.md#languagepackstringvalue)\> |
| `getLanguagePackStrings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLanguagePackStrings$Input`](../modules/index.types.default.md#getlanguagepackstrings$input)\>) => `Promise`<[`languagePackStrings`](../modules/index.types.default.md#languagepackstrings-1)\> |
| `getLocalizationTargetInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLocalizationTargetInfo$Input`](../modules/index.types.default.md#getlocalizationtargetinfo$input)\>) => `Promise`<[`localizationTargetInfo`](../modules/index.types.default.md#localizationtargetinfo-1)\> |
| `getLogStream` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLogStream$Input`](../modules/index.types.default.md#getlogstream$input)\>) => `Promise`<[`LogStream`](../modules/index.types.default.md#logstream)\> |
| `getLogTagVerbosityLevel` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLogTagVerbosityLevel$Input`](../modules/index.types.default.md#getlogtagverbositylevel$input)\>) => `Promise`<[`logVerbosityLevel`](../modules/index.types.default.md#logverbositylevel-1)\> |
| `getLogTags` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLogTags$Input`](../modules/index.types.default.md#getlogtags$input)\>) => `Promise`<[`logTags`](../modules/index.types.default.md#logtags-1)\> |
| `getLogVerbosityLevel` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLogVerbosityLevel$Input`](../modules/index.types.default.md#getlogverbositylevel$input)\>) => `Promise`<[`logVerbosityLevel`](../modules/index.types.default.md#logverbositylevel-1)\> |
| `getLoginUrl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLoginUrl$Input`](../modules/index.types.default.md#getloginurl$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getLoginUrlInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getLoginUrlInfo$Input`](../modules/index.types.default.md#getloginurlinfo$input)\>) => `Promise`<[`LoginUrlInfo`](../modules/index.types.default.md#loginurlinfo)\> |
| `getMapThumbnailFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMapThumbnailFile$Input`](../modules/index.types.default.md#getmapthumbnailfile$input)\>) => `Promise`<[`file`](../modules/index.types.default.md#file-1)\> |
| `getMarkdownText` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMarkdownText$Input`](../modules/index.types.default.md#getmarkdowntext$input)\>) => `Promise`<[`formattedText`](../modules/index.types.default.md#formattedtext-1)\> |
| `getMe` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMe$Input`](../modules/index.types.default.md#getme$input)\>) => `Promise`<[`user`](../modules/index.types.default.md#user-1)\> |
| `getMenuButton` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMenuButton$Input`](../modules/index.types.default.md#getmenubutton$input)\>) => `Promise`<[`botMenuButton`](../modules/index.types.default.md#botmenubutton-1)\> |
| `getMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessage$Input`](../modules/index.types.default.md#getmessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `getMessageAddedReactions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageAddedReactions$Input`](../modules/index.types.default.md#getmessageaddedreactions$input)\>) => `Promise`<[`addedReactions`](../modules/index.types.default.md#addedreactions-1)\> |
| `getMessageAvailableReactions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageAvailableReactions$Input`](../modules/index.types.default.md#getmessageavailablereactions$input)\>) => `Promise`<[`availableReactions`](../modules/index.types.default.md#availablereactions-1)\> |
| `getMessageEmbeddingCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageEmbeddingCode$Input`](../modules/index.types.default.md#getmessageembeddingcode$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getMessageFileType` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageFileType$Input`](../modules/index.types.default.md#getmessagefiletype$input)\>) => `Promise`<[`MessageFileType`](../modules/index.types.default.md#messagefiletype)\> |
| `getMessageImportConfirmationText` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageImportConfirmationText$Input`](../modules/index.types.default.md#getmessageimportconfirmationtext$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getMessageLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageLink$Input`](../modules/index.types.default.md#getmessagelink$input)\>) => `Promise`<[`messageLink`](../modules/index.types.default.md#messagelink-1)\> |
| `getMessageLinkInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageLinkInfo$Input`](../modules/index.types.default.md#getmessagelinkinfo$input)\>) => `Promise`<[`messageLinkInfo`](../modules/index.types.default.md#messagelinkinfo-1)\> |
| `getMessageLocally` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageLocally$Input`](../modules/index.types.default.md#getmessagelocally$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `getMessagePublicForwards` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessagePublicForwards$Input`](../modules/index.types.default.md#getmessagepublicforwards$input)\>) => `Promise`<[`foundMessages`](../modules/index.types.default.md#foundmessages-1)\> |
| `getMessageStatistics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageStatistics$Input`](../modules/index.types.default.md#getmessagestatistics$input)\>) => `Promise`<[`messageStatistics`](../modules/index.types.default.md#messagestatistics-1)\> |
| `getMessageThread` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageThread$Input`](../modules/index.types.default.md#getmessagethread$input)\>) => `Promise`<[`messageThreadInfo`](../modules/index.types.default.md#messagethreadinfo-1)\> |
| `getMessageThreadHistory` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageThreadHistory$Input`](../modules/index.types.default.md#getmessagethreadhistory$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `getMessageViewers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessageViewers$Input`](../modules/index.types.default.md#getmessageviewers$input)\>) => `Promise`<[`messageViewers`](../modules/index.types.default.md#messageviewers-1)\> |
| `getMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getMessages$Input`](../modules/index.types.default.md#getmessages$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `getNetworkStatistics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getNetworkStatistics$Input`](../modules/index.types.default.md#getnetworkstatistics$input)\>) => `Promise`<[`networkStatistics`](../modules/index.types.default.md#networkstatistics-1)\> |
| `getOption` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getOption$Input`](../modules/index.types.default.md#getoption$input)\>) => `Promise`<[`OptionValue`](../modules/index.types.default.md#optionvalue)\> |
| `getPassportAuthorizationForm` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPassportAuthorizationForm$Input`](../modules/index.types.default.md#getpassportauthorizationform$input)\>) => `Promise`<[`passportAuthorizationForm`](../modules/index.types.default.md#passportauthorizationform-1)\> |
| `getPassportAuthorizationFormAvailableElements` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPassportAuthorizationFormAvailableElements$Input`](../modules/index.types.default.md#getpassportauthorizationformavailableelements$input)\>) => `Promise`<[`passportElementsWithErrors`](../modules/index.types.default.md#passportelementswitherrors-1)\> |
| `getPassportElement` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPassportElement$Input`](../modules/index.types.default.md#getpassportelement$input)\>) => `Promise`<[`PassportElement`](../modules/index.types.default.md#passportelement)\> |
| `getPasswordState` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPasswordState$Input`](../modules/index.types.default.md#getpasswordstate$input)\>) => `Promise`<[`passwordState`](../modules/index.types.default.md#passwordstate-1)\> |
| `getPaymentForm` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPaymentForm$Input`](../modules/index.types.default.md#getpaymentform$input)\>) => `Promise`<[`paymentForm`](../modules/index.types.default.md#paymentform-1)\> |
| `getPaymentReceipt` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPaymentReceipt$Input`](../modules/index.types.default.md#getpaymentreceipt$input)\>) => `Promise`<[`paymentReceipt`](../modules/index.types.default.md#paymentreceipt-1)\> |
| `getPhoneNumberInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPhoneNumberInfo$Input`](../modules/index.types.default.md#getphonenumberinfo$input)\>) => `Promise`<[`phoneNumberInfo`](../modules/index.types.default.md#phonenumberinfo-1)\> |
| `getPhoneNumberInfoSync` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPhoneNumberInfoSync$Input`](../modules/index.types.default.md#getphonenumberinfosync$input)\>) => `Promise`<[`phoneNumberInfo`](../modules/index.types.default.md#phonenumberinfo-1)\> |
| `getPollVoters` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPollVoters$Input`](../modules/index.types.default.md#getpollvoters$input)\>) => `Promise`<[`users`](../modules/index.types.default.md#users-1)\> |
| `getPreferredCountryLanguage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPreferredCountryLanguage$Input`](../modules/index.types.default.md#getpreferredcountrylanguage$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getPremiumFeatures` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPremiumFeatures$Input`](../modules/index.types.default.md#getpremiumfeatures$input)\>) => `Promise`<[`premiumFeatures`](../modules/index.types.default.md#premiumfeatures-1)\> |
| `getPremiumLimit` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPremiumLimit$Input`](../modules/index.types.default.md#getpremiumlimit$input)\>) => `Promise`<[`premiumLimit`](../modules/index.types.default.md#premiumlimit-1)\> |
| `getPremiumState` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPremiumState$Input`](../modules/index.types.default.md#getpremiumstate$input)\>) => `Promise`<[`premiumState`](../modules/index.types.default.md#premiumstate-1)\> |
| `getPremiumStickerExamples` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPremiumStickerExamples$Input`](../modules/index.types.default.md#getpremiumstickerexamples$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getPremiumStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPremiumStickers$Input`](../modules/index.types.default.md#getpremiumstickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getProxies` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getProxies$Input`](../modules/index.types.default.md#getproxies$input)\>) => `Promise`<[`proxies`](../modules/index.types.default.md#proxies-1)\> |
| `getProxyLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getProxyLink$Input`](../modules/index.types.default.md#getproxylink$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getPushReceiverId` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getPushReceiverId$Input`](../modules/index.types.default.md#getpushreceiverid$input)\>) => `Promise`<[`pushReceiverId`](../modules/index.types.default.md#pushreceiverid-1)\> |
| `getRecentEmojiStatuses` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRecentEmojiStatuses$Input`](../modules/index.types.default.md#getrecentemojistatuses$input)\>) => `Promise`<[`emojiStatuses`](../modules/index.types.default.md#emojistatuses-1)\> |
| `getRecentInlineBots` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRecentInlineBots$Input`](../modules/index.types.default.md#getrecentinlinebots$input)\>) => `Promise`<[`users`](../modules/index.types.default.md#users-1)\> |
| `getRecentStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRecentStickers$Input`](../modules/index.types.default.md#getrecentstickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getRecentlyOpenedChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRecentlyOpenedChats$Input`](../modules/index.types.default.md#getrecentlyopenedchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getRecentlyVisitedTMeUrls` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRecentlyVisitedTMeUrls$Input`](../modules/index.types.default.md#getrecentlyvisitedtmeurls$input)\>) => `Promise`<[`tMeUrls`](../modules/index.types.default.md#tmeurls-1)\> |
| `getRecommendedChatFilters` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRecommendedChatFilters$Input`](../modules/index.types.default.md#getrecommendedchatfilters$input)\>) => `Promise`<[`recommendedChatFilters`](../modules/index.types.default.md#recommendedchatfilters-1)\> |
| `getRecoveryEmailAddress` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRecoveryEmailAddress$Input`](../modules/index.types.default.md#getrecoveryemailaddress$input)\>) => `Promise`<[`recoveryEmailAddress`](../modules/index.types.default.md#recoveryemailaddress-1)\> |
| `getRemoteFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRemoteFile$Input`](../modules/index.types.default.md#getremotefile$input)\>) => `Promise`<[`file`](../modules/index.types.default.md#file-1)\> |
| `getRepliedMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getRepliedMessage$Input`](../modules/index.types.default.md#getrepliedmessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `getSavedAnimations` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSavedAnimations$Input`](../modules/index.types.default.md#getsavedanimations$input)\>) => `Promise`<[`animations`](../modules/index.types.default.md#animations-1)\> |
| `getSavedNotificationSound` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSavedNotificationSound$Input`](../modules/index.types.default.md#getsavednotificationsound$input)\>) => `Promise`<[`notificationSounds`](../modules/index.types.default.md#notificationsounds-1)\> |
| `getSavedNotificationSounds` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSavedNotificationSounds$Input`](../modules/index.types.default.md#getsavednotificationsounds$input)\>) => `Promise`<[`notificationSounds`](../modules/index.types.default.md#notificationsounds-1)\> |
| `getSavedOrderInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSavedOrderInfo$Input`](../modules/index.types.default.md#getsavedorderinfo$input)\>) => `Promise`<[`orderInfo`](../modules/index.types.default.md#orderinfo-1)\> |
| `getScopeNotificationSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getScopeNotificationSettings$Input`](../modules/index.types.default.md#getscopenotificationsettings$input)\>) => `Promise`<[`scopeNotificationSettings`](../modules/index.types.default.md#scopenotificationsettings-1)\> |
| `getSecretChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSecretChat$Input`](../modules/index.types.default.md#getsecretchat$input)\>) => `Promise`<[`secretChat`](../modules/index.types.default.md#secretchat-1)\> |
| `getStatisticalGraph` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getStatisticalGraph$Input`](../modules/index.types.default.md#getstatisticalgraph$input)\>) => `Promise`<[`StatisticalGraph`](../modules/index.types.default.md#statisticalgraph)\> |
| `getStickerEmojis` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getStickerEmojis$Input`](../modules/index.types.default.md#getstickeremojis$input)\>) => `Promise`<[`emojis`](../modules/index.types.default.md#emojis-1)\> |
| `getStickerSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getStickerSet$Input`](../modules/index.types.default.md#getstickerset$input)\>) => `Promise`<[`stickerSet`](../modules/index.types.default.md#stickerset-1)\> |
| `getStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getStickers$Input`](../modules/index.types.default.md#getstickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `getStorageStatistics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getStorageStatistics$Input`](../modules/index.types.default.md#getstoragestatistics$input)\>) => `Promise`<[`storageStatistics`](../modules/index.types.default.md#storagestatistics-1)\> |
| `getStorageStatisticsFast` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getStorageStatisticsFast$Input`](../modules/index.types.default.md#getstoragestatisticsfast$input)\>) => `Promise`<[`storageStatisticsFast`](../modules/index.types.default.md#storagestatisticsfast-1)\> |
| `getSuggestedFileName` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSuggestedFileName$Input`](../modules/index.types.default.md#getsuggestedfilename$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getSuggestedStickerSetName` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSuggestedStickerSetName$Input`](../modules/index.types.default.md#getsuggestedstickersetname$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getSuitableDiscussionChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSuitableDiscussionChats$Input`](../modules/index.types.default.md#getsuitablediscussionchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getSupergroup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSupergroup$Input`](../modules/index.types.default.md#getsupergroup$input)\>) => `Promise`<[`supergroup`](../modules/index.types.default.md#supergroup-1)\> |
| `getSupergroupFullInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSupergroupFullInfo$Input`](../modules/index.types.default.md#getsupergroupfullinfo$input)\>) => `Promise`<[`supergroupFullInfo`](../modules/index.types.default.md#supergroupfullinfo-1)\> |
| `getSupergroupMembers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSupergroupMembers$Input`](../modules/index.types.default.md#getsupergroupmembers$input)\>) => `Promise`<[`chatMembers`](../modules/index.types.default.md#chatmembers-1)\> |
| `getSupportUser` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getSupportUser$Input`](../modules/index.types.default.md#getsupportuser$input)\>) => `Promise`<[`user`](../modules/index.types.default.md#user-1)\> |
| `getTemporaryPasswordState` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getTemporaryPasswordState$Input`](../modules/index.types.default.md#gettemporarypasswordstate$input)\>) => `Promise`<[`temporaryPasswordState`](../modules/index.types.default.md#temporarypasswordstate-1)\> |
| `getTextEntities` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getTextEntities$Input`](../modules/index.types.default.md#gettextentities$input)\>) => `Promise`<[`textEntities`](../modules/index.types.default.md#textentities-1)\> |
| `getThemeParametersJsonString` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getThemeParametersJsonString$Input`](../modules/index.types.default.md#getthemeparametersjsonstring$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `getThemedEmojiStatuses` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getThemedEmojiStatuses$Input`](../modules/index.types.default.md#getthemedemojistatuses$input)\>) => `Promise`<[`emojiStatuses`](../modules/index.types.default.md#emojistatuses-1)\> |
| `getTopChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getTopChats$Input`](../modules/index.types.default.md#gettopchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `getTrendingStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getTrendingStickerSets$Input`](../modules/index.types.default.md#gettrendingstickersets$input)\>) => `Promise`<[`trendingStickerSets`](../modules/index.types.default.md#trendingstickersets-1)\> |
| `getUser` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getUser$Input`](../modules/index.types.default.md#getuser$input)\>) => `Promise`<[`user`](../modules/index.types.default.md#user-1)\> |
| `getUserFullInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getUserFullInfo$Input`](../modules/index.types.default.md#getuserfullinfo$input)\>) => `Promise`<[`userFullInfo`](../modules/index.types.default.md#userfullinfo-1)\> |
| `getUserLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getUserLink$Input`](../modules/index.types.default.md#getuserlink$input)\>) => `Promise`<[`userLink`](../modules/index.types.default.md#userlink-1)\> |
| `getUserPrivacySettingRules` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getUserPrivacySettingRules$Input`](../modules/index.types.default.md#getuserprivacysettingrules$input)\>) => `Promise`<[`userPrivacySettingRules`](../modules/index.types.default.md#userprivacysettingrules-1)\> |
| `getUserProfilePhotos` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getUserProfilePhotos$Input`](../modules/index.types.default.md#getuserprofilephotos$input)\>) => `Promise`<[`chatPhotos`](../modules/index.types.default.md#chatphotos-1)\> |
| `getUserSupportInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getUserSupportInfo$Input`](../modules/index.types.default.md#getusersupportinfo$input)\>) => `Promise`<[`userSupportInfo`](../modules/index.types.default.md#usersupportinfo-1)\> |
| `getVideoChatAvailableParticipants` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getVideoChatAvailableParticipants$Input`](../modules/index.types.default.md#getvideochatavailableparticipants$input)\>) => `Promise`<[`messageSenders`](../modules/index.types.default.md#messagesenders-1)\> |
| `getVideoChatRtmpUrl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getVideoChatRtmpUrl$Input`](../modules/index.types.default.md#getvideochatrtmpurl$input)\>) => `Promise`<[`rtmpUrl`](../modules/index.types.default.md#rtmpurl-1)\> |
| `getWebAppLinkUrl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getWebAppLinkUrl$Input`](../modules/index.types.default.md#getwebapplinkurl$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getWebAppUrl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getWebAppUrl$Input`](../modules/index.types.default.md#getwebappurl$input)\>) => `Promise`<[`httpUrl`](../modules/index.types.default.md#httpurl-1)\> |
| `getWebPageInstantView` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getWebPageInstantView$Input`](../modules/index.types.default.md#getwebpageinstantview$input)\>) => `Promise`<[`webPageInstantView`](../modules/index.types.default.md#webpageinstantview-1)\> |
| `getWebPagePreview` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`getWebPagePreview$Input`](../modules/index.types.default.md#getwebpagepreview$input)\>) => `Promise`<[`webPage`](../modules/index.types.default.md#webpage-1)\> |
| `hideSuggestedAction` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`hideSuggestedAction$Input`](../modules/index.types.default.md#hidesuggestedaction$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `importContacts` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`importContacts$Input`](../modules/index.types.default.md#importcontacts$input)\>) => `Promise`<[`importedContacts`](../modules/index.types.default.md#importedcontacts-1)\> |
| `importMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`importMessages$Input`](../modules/index.types.default.md#importmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `inviteGroupCallParticipants` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`inviteGroupCallParticipants$Input`](../modules/index.types.default.md#invitegroupcallparticipants$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `joinChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`joinChat$Input`](../modules/index.types.default.md#joinchat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `joinChatByInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`joinChatByInviteLink$Input`](../modules/index.types.default.md#joinchatbyinvitelink$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `joinGroupCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`joinGroupCall$Input`](../modules/index.types.default.md#joingroupcall$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `leaveChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`leaveChat$Input`](../modules/index.types.default.md#leavechat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `leaveGroupCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`leaveGroupCall$Input`](../modules/index.types.default.md#leavegroupcall$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `loadChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`loadChats$Input`](../modules/index.types.default.md#loadchats$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `loadGroupCallParticipants` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`loadGroupCallParticipants$Input`](../modules/index.types.default.md#loadgroupcallparticipants$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `logOut` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`logOut$Input`](../modules/index.types.default.md#logout$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `openChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`openChat$Input`](../modules/index.types.default.md#openchat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `openMessageContent` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`openMessageContent$Input`](../modules/index.types.default.md#openmessagecontent$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `openWebApp` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`openWebApp$Input`](../modules/index.types.default.md#openwebapp$input)\>) => `Promise`<[`webAppInfo`](../modules/index.types.default.md#webappinfo-1)\> |
| `optimizeStorage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`optimizeStorage$Input`](../modules/index.types.default.md#optimizestorage$input)\>) => `Promise`<[`storageStatistics`](../modules/index.types.default.md#storagestatistics-1)\> |
| `parseMarkdown` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`parseMarkdown$Input`](../modules/index.types.default.md#parsemarkdown$input)\>) => `Promise`<[`formattedText`](../modules/index.types.default.md#formattedtext-1)\> |
| `parseTextEntities` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`parseTextEntities$Input`](../modules/index.types.default.md#parsetextentities$input)\>) => `Promise`<[`formattedText`](../modules/index.types.default.md#formattedtext-1)\> |
| `pinChatMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`pinChatMessage$Input`](../modules/index.types.default.md#pinchatmessage$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `pingProxy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`pingProxy$Input`](../modules/index.types.default.md#pingproxy$input)\>) => `Promise`<[`seconds`](../modules/index.types.default.md#seconds-1)\> |
| `preliminaryUploadFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`preliminaryUploadFile$Input`](../modules/index.types.default.md#preliminaryuploadfile$input)\>) => `Promise`<[`file`](../modules/index.types.default.md#file-1)\> |
| `processChatJoinRequest` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`processChatJoinRequest$Input`](../modules/index.types.default.md#processchatjoinrequest$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `processChatJoinRequests` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`processChatJoinRequests$Input`](../modules/index.types.default.md#processchatjoinrequests$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `processPushNotification` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`processPushNotification$Input`](../modules/index.types.default.md#processpushnotification$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `rateSpeechRecognition` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`rateSpeechRecognition$Input`](../modules/index.types.default.md#ratespeechrecognition$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `readAllChatMentions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`readAllChatMentions$Input`](../modules/index.types.default.md#readallchatmentions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `readAllChatReactions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`readAllChatReactions$Input`](../modules/index.types.default.md#readallchatreactions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `readAllMessageThreadMentions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`readAllMessageThreadMentions$Input`](../modules/index.types.default.md#readallmessagethreadmentions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `readAllMessageThreadReactions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`readAllMessageThreadReactions$Input`](../modules/index.types.default.md#readallmessagethreadreactions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `readFilePart` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`readFilePart$Input`](../modules/index.types.default.md#readfilepart$input)\>) => `Promise`<[`filePart`](../modules/index.types.default.md#filepart-1)\> |
| `recognizeSpeech` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`recognizeSpeech$Input`](../modules/index.types.default.md#recognizespeech$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `recoverAuthenticationPassword` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`recoverAuthenticationPassword$Input`](../modules/index.types.default.md#recoverauthenticationpassword$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `recoverPassword` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`recoverPassword$Input`](../modules/index.types.default.md#recoverpassword$input)\>) => `Promise`<[`passwordState`](../modules/index.types.default.md#passwordstate-1)\> |
| `registerDevice` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`registerDevice$Input`](../modules/index.types.default.md#registerdevice$input)\>) => `Promise`<[`pushReceiverId`](../modules/index.types.default.md#pushreceiverid-1)\> |
| `registerUser` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`registerUser$Input`](../modules/index.types.default.md#registeruser$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeAllFilesFromDownloads` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeAllFilesFromDownloads$Input`](../modules/index.types.default.md#removeallfilesfromdownloads$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeBackground` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeBackground$Input`](../modules/index.types.default.md#removebackground$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeChatActionBar` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeChatActionBar$Input`](../modules/index.types.default.md#removechatactionbar$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeContacts` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeContacts$Input`](../modules/index.types.default.md#removecontacts$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeFavoriteSticker` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeFavoriteSticker$Input`](../modules/index.types.default.md#removefavoritesticker$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeFileFromDownloads` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeFileFromDownloads$Input`](../modules/index.types.default.md#removefilefromdownloads$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeMessageReaction` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeMessageReaction$Input`](../modules/index.types.default.md#removemessagereaction$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeNotification` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeNotification$Input`](../modules/index.types.default.md#removenotification$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeNotificationGroup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeNotificationGroup$Input`](../modules/index.types.default.md#removenotificationgroup$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeProxy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeProxy$Input`](../modules/index.types.default.md#removeproxy$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeRecentHashtag` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeRecentHashtag$Input`](../modules/index.types.default.md#removerecenthashtag$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeRecentSticker` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeRecentSticker$Input`](../modules/index.types.default.md#removerecentsticker$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeRecentlyFoundChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeRecentlyFoundChat$Input`](../modules/index.types.default.md#removerecentlyfoundchat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeSavedAnimation` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeSavedAnimation$Input`](../modules/index.types.default.md#removesavedanimation$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeSavedNotificationSound` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeSavedNotificationSound$Input`](../modules/index.types.default.md#removesavednotificationsound$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeStickerFromSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeStickerFromSet$Input`](../modules/index.types.default.md#removestickerfromset$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `removeTopChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`removeTopChat$Input`](../modules/index.types.default.md#removetopchat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reorderActiveUsernames` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reorderActiveUsernames$Input`](../modules/index.types.default.md#reorderactiveusernames$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reorderChatFilters` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reorderChatFilters$Input`](../modules/index.types.default.md#reorderchatfilters$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reorderInstalledStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reorderInstalledStickerSets$Input`](../modules/index.types.default.md#reorderinstalledstickersets$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reorderSupergroupActiveUsernames` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reorderSupergroupActiveUsernames$Input`](../modules/index.types.default.md#reordersupergroupactiveusernames$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `replacePrimaryChatInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`replacePrimaryChatInviteLink$Input`](../modules/index.types.default.md#replaceprimarychatinvitelink$input)\>) => `Promise`<[`chatInviteLink`](../modules/index.types.default.md#chatinvitelink-1)\> |
| `replaceVideoChatRtmpUrl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`replaceVideoChatRtmpUrl$Input`](../modules/index.types.default.md#replacevideochatrtmpurl$input)\>) => `Promise`<[`rtmpUrl`](../modules/index.types.default.md#rtmpurl-1)\> |
| `reportChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reportChat$Input`](../modules/index.types.default.md#reportchat$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reportChatPhoto` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reportChatPhoto$Input`](../modules/index.types.default.md#reportchatphoto$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reportMessageReactions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reportMessageReactions$Input`](../modules/index.types.default.md#reportmessagereactions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reportSupergroupAntiSpamFalsePositive` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reportSupergroupAntiSpamFalsePositive$Input`](../modules/index.types.default.md#reportsupergroupantispamfalsepositive$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `reportSupergroupSpam` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`reportSupergroupSpam$Input`](../modules/index.types.default.md#reportsupergroupspam$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `requestAuthenticationPasswordRecovery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`requestAuthenticationPasswordRecovery$Input`](../modules/index.types.default.md#requestauthenticationpasswordrecovery$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `requestPasswordRecovery` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`requestPasswordRecovery$Input`](../modules/index.types.default.md#requestpasswordrecovery$input)\>) => `Promise`<[`emailAddressAuthenticationCodeInfo`](../modules/index.types.default.md#emailaddressauthenticationcodeinfo-1)\> |
| `requestQrCodeAuthentication` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`requestQrCodeAuthentication$Input`](../modules/index.types.default.md#requestqrcodeauthentication$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `resendAuthenticationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendAuthenticationCode$Input`](../modules/index.types.default.md#resendauthenticationcode$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `resendChangePhoneNumberCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendChangePhoneNumberCode$Input`](../modules/index.types.default.md#resendchangephonenumbercode$input)\>) => `Promise`<[`authenticationCodeInfo`](../modules/index.types.default.md#authenticationcodeinfo-1)\> |
| `resendEmailAddressVerificationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendEmailAddressVerificationCode$Input`](../modules/index.types.default.md#resendemailaddressverificationcode$input)\>) => `Promise`<[`emailAddressAuthenticationCodeInfo`](../modules/index.types.default.md#emailaddressauthenticationcodeinfo-1)\> |
| `resendLoginEmailAddressCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendLoginEmailAddressCode$Input`](../modules/index.types.default.md#resendloginemailaddresscode$input)\>) => `Promise`<[`emailAddressAuthenticationCodeInfo`](../modules/index.types.default.md#emailaddressauthenticationcodeinfo-1)\> |
| `resendMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendMessages$Input`](../modules/index.types.default.md#resendmessages$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `resendPhoneNumberConfirmationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendPhoneNumberConfirmationCode$Input`](../modules/index.types.default.md#resendphonenumberconfirmationcode$input)\>) => `Promise`<[`authenticationCodeInfo`](../modules/index.types.default.md#authenticationcodeinfo-1)\> |
| `resendPhoneNumberVerificationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendPhoneNumberVerificationCode$Input`](../modules/index.types.default.md#resendphonenumberverificationcode$input)\>) => `Promise`<[`authenticationCodeInfo`](../modules/index.types.default.md#authenticationcodeinfo-1)\> |
| `resendRecoveryEmailAddressCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resendRecoveryEmailAddressCode$Input`](../modules/index.types.default.md#resendrecoveryemailaddresscode$input)\>) => `Promise`<[`passwordState`](../modules/index.types.default.md#passwordstate-1)\> |
| `resetAllNotificationSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resetAllNotificationSettings$Input`](../modules/index.types.default.md#resetallnotificationsettings$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `resetBackgrounds` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resetBackgrounds$Input`](../modules/index.types.default.md#resetbackgrounds$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `resetNetworkStatistics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resetNetworkStatistics$Input`](../modules/index.types.default.md#resetnetworkstatistics$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `resetPassword` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`resetPassword$Input`](../modules/index.types.default.md#resetpassword$input)\>) => `Promise`<[`ResetPasswordResult`](../modules/index.types.default.md#resetpasswordresult)\> |
| `revokeChatInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`revokeChatInviteLink$Input`](../modules/index.types.default.md#revokechatinvitelink$input)\>) => `Promise`<[`chatInviteLinks`](../modules/index.types.default.md#chatinvitelinks-1)\> |
| `revokeGroupCallInviteLink` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`revokeGroupCallInviteLink$Input`](../modules/index.types.default.md#revokegroupcallinvitelink$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `saveApplicationLogEvent` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`saveApplicationLogEvent$Input`](../modules/index.types.default.md#saveapplicationlogevent$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `searchBackground` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchBackground$Input`](../modules/index.types.default.md#searchbackground$input)\>) => `Promise`<[`background`](../modules/index.types.default.md#background-1)\> |
| `searchCallMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchCallMessages$Input`](../modules/index.types.default.md#searchcallmessages$input)\>) => `Promise`<[`foundMessages`](../modules/index.types.default.md#foundmessages-1)\> |
| `searchChatMembers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchChatMembers$Input`](../modules/index.types.default.md#searchchatmembers$input)\>) => `Promise`<[`chatMembers`](../modules/index.types.default.md#chatmembers-1)\> |
| `searchChatMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchChatMessages$Input`](../modules/index.types.default.md#searchchatmessages$input)\>) => `Promise`<[`foundChatMessages`](../modules/index.types.default.md#foundchatmessages-1)\> |
| `searchChatRecentLocationMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchChatRecentLocationMessages$Input`](../modules/index.types.default.md#searchchatrecentlocationmessages$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `searchChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchChats$Input`](../modules/index.types.default.md#searchchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `searchChatsNearby` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchChatsNearby$Input`](../modules/index.types.default.md#searchchatsnearby$input)\>) => `Promise`<[`chatsNearby`](../modules/index.types.default.md#chatsnearby-1)\> |
| `searchChatsOnServer` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchChatsOnServer$Input`](../modules/index.types.default.md#searchchatsonserver$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `searchContacts` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchContacts$Input`](../modules/index.types.default.md#searchcontacts$input)\>) => `Promise`<[`users`](../modules/index.types.default.md#users-1)\> |
| `searchEmojis` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchEmojis$Input`](../modules/index.types.default.md#searchemojis$input)\>) => `Promise`<[`emojis`](../modules/index.types.default.md#emojis-1)\> |
| `searchFileDownloads` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchFileDownloads$Input`](../modules/index.types.default.md#searchfiledownloads$input)\>) => `Promise`<[`foundFileDownloads`](../modules/index.types.default.md#foundfiledownloads-1)\> |
| `searchHashtags` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchHashtags$Input`](../modules/index.types.default.md#searchhashtags$input)\>) => `Promise`<[`hashtags`](../modules/index.types.default.md#hashtags-1)\> |
| `searchInstalledStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchInstalledStickerSets$Input`](../modules/index.types.default.md#searchinstalledstickersets$input)\>) => `Promise`<[`stickerSets`](../modules/index.types.default.md#stickersets-1)\> |
| `searchMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchMessages$Input`](../modules/index.types.default.md#searchmessages$input)\>) => `Promise`<[`foundMessages`](../modules/index.types.default.md#foundmessages-1)\> |
| `searchOutgoingDocumentMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchOutgoingDocumentMessages$Input`](../modules/index.types.default.md#searchoutgoingdocumentmessages$input)\>) => `Promise`<[`foundMessages`](../modules/index.types.default.md#foundmessages-1)\> |
| `searchPublicChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchPublicChat$Input`](../modules/index.types.default.md#searchpublicchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `searchPublicChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchPublicChats$Input`](../modules/index.types.default.md#searchpublicchats$input)\>) => `Promise`<[`chats`](../modules/index.types.default.md#chats-1)\> |
| `searchSecretMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchSecretMessages$Input`](../modules/index.types.default.md#searchsecretmessages$input)\>) => `Promise`<[`foundMessages`](../modules/index.types.default.md#foundmessages-1)\> |
| `searchStickerSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchStickerSet$Input`](../modules/index.types.default.md#searchstickerset$input)\>) => `Promise`<[`stickerSet`](../modules/index.types.default.md#stickerset-1)\> |
| `searchStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchStickerSets$Input`](../modules/index.types.default.md#searchstickersets$input)\>) => `Promise`<[`stickerSets`](../modules/index.types.default.md#stickersets-1)\> |
| `searchStickers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchStickers$Input`](../modules/index.types.default.md#searchstickers$input)\>) => `Promise`<[`stickers`](../modules/index.types.default.md#stickers-1)\> |
| `searchUserByPhoneNumber` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchUserByPhoneNumber$Input`](../modules/index.types.default.md#searchuserbyphonenumber$input)\>) => `Promise`<[`user`](../modules/index.types.default.md#user-1)\> |
| `searchUserByToken` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchUserByToken$Input`](../modules/index.types.default.md#searchuserbytoken$input)\>) => `Promise`<[`user`](../modules/index.types.default.md#user-1)\> |
| `searchWebApp` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`searchWebApp$Input`](../modules/index.types.default.md#searchwebapp$input)\>) => `Promise`<[`foundWebApp`](../modules/index.types.default.md#foundwebapp-1)\> |
| `sendAuthenticationFirebaseSms` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendAuthenticationFirebaseSms$Input`](../modules/index.types.default.md#sendauthenticationfirebasesms$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendBotStartMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendBotStartMessage$Input`](../modules/index.types.default.md#sendbotstartmessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `sendCallDebugInformation` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendCallDebugInformation$Input`](../modules/index.types.default.md#sendcalldebuginformation$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendCallLog` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendCallLog$Input`](../modules/index.types.default.md#sendcalllog$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendCallRating` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendCallRating$Input`](../modules/index.types.default.md#sendcallrating$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendCallSignalingData` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendCallSignalingData$Input`](../modules/index.types.default.md#sendcallsignalingdata$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendChatAction` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendChatAction$Input`](../modules/index.types.default.md#sendchataction$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendChatScreenshotTakenNotification` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendChatScreenshotTakenNotification$Input`](../modules/index.types.default.md#sendchatscreenshottakennotification$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendCustomRequest` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendCustomRequest$Input`](../modules/index.types.default.md#sendcustomrequest$input)\>) => `Promise`<[`customRequestResult`](../modules/index.types.default.md#customrequestresult-1)\> |
| `sendEmailAddressVerificationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendEmailAddressVerificationCode$Input`](../modules/index.types.default.md#sendemailaddressverificationcode$input)\>) => `Promise`<[`emailAddressAuthenticationCodeInfo`](../modules/index.types.default.md#emailaddressauthenticationcodeinfo-1)\> |
| `sendInlineQueryResultMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendInlineQueryResultMessage$Input`](../modules/index.types.default.md#sendinlinequeryresultmessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `sendMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendMessage$Input`](../modules/index.types.default.md#sendmessage$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `sendMessageAlbum` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendMessageAlbum$Input`](../modules/index.types.default.md#sendmessagealbum$input)\>) => `Promise`<[`messages`](../modules/index.types.default.md#messages-1)\> |
| `sendPassportAuthorizationForm` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendPassportAuthorizationForm$Input`](../modules/index.types.default.md#sendpassportauthorizationform$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sendPaymentForm` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendPaymentForm$Input`](../modules/index.types.default.md#sendpaymentform$input)\>) => `Promise`<[`paymentResult`](../modules/index.types.default.md#paymentresult-1)\> |
| `sendPhoneNumberConfirmationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendPhoneNumberConfirmationCode$Input`](../modules/index.types.default.md#sendphonenumberconfirmationcode$input)\>) => `Promise`<[`authenticationCodeInfo`](../modules/index.types.default.md#authenticationcodeinfo-1)\> |
| `sendPhoneNumberVerificationCode` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendPhoneNumberVerificationCode$Input`](../modules/index.types.default.md#sendphonenumberverificationcode$input)\>) => `Promise`<[`authenticationCodeInfo`](../modules/index.types.default.md#authenticationcodeinfo-1)\> |
| `sendWebAppData` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sendWebAppData$Input`](../modules/index.types.default.md#sendwebappdata$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setAccountTtl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setAccountTtl$Input`](../modules/index.types.default.md#setaccountttl$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setAlarm` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setAlarm$Input`](../modules/index.types.default.md#setalarm$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setAuthenticationEmailAddress` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setAuthenticationEmailAddress$Input`](../modules/index.types.default.md#setauthenticationemailaddress$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setAuthenticationPhoneNumber` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setAuthenticationPhoneNumber$Input`](../modules/index.types.default.md#setauthenticationphonenumber$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setAutoDownloadSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setAutoDownloadSettings$Input`](../modules/index.types.default.md#setautodownloadsettings$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setAutosaveSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setAutosaveSettings$Input`](../modules/index.types.default.md#setautosavesettings$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setBackground` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setBackground$Input`](../modules/index.types.default.md#setbackground$input)\>) => `Promise`<[`background`](../modules/index.types.default.md#background-1)\> |
| `setBio` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setBio$Input`](../modules/index.types.default.md#setbio$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setBotInfoDescription` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setBotInfoDescription$Input`](../modules/index.types.default.md#setbotinfodescription$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setBotInfoShortDescription` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setBotInfoShortDescription$Input`](../modules/index.types.default.md#setbotinfoshortdescription$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setBotUpdatesStatus` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setBotUpdatesStatus$Input`](../modules/index.types.default.md#setbotupdatesstatus$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatAvailableReactions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatAvailableReactions$Input`](../modules/index.types.default.md#setchatavailablereactions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatClientData` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatClientData$Input`](../modules/index.types.default.md#setchatclientdata$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatDescription` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatDescription$Input`](../modules/index.types.default.md#setchatdescription$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatDiscussionGroup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatDiscussionGroup$Input`](../modules/index.types.default.md#setchatdiscussiongroup$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatDraftMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatDraftMessage$Input`](../modules/index.types.default.md#setchatdraftmessage$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatLocation` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatLocation$Input`](../modules/index.types.default.md#setchatlocation$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatMemberStatus` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatMemberStatus$Input`](../modules/index.types.default.md#setchatmemberstatus$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatMessageAutoDeleteTime` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatMessageAutoDeleteTime$Input`](../modules/index.types.default.md#setchatmessageautodeletetime$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatMessageSender` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatMessageSender$Input`](../modules/index.types.default.md#setchatmessagesender$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatNotificationSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatNotificationSettings$Input`](../modules/index.types.default.md#setchatnotificationsettings$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatPermissions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatPermissions$Input`](../modules/index.types.default.md#setchatpermissions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatPhoto` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatPhoto$Input`](../modules/index.types.default.md#setchatphoto$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatSlowModeDelay` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatSlowModeDelay$Input`](../modules/index.types.default.md#setchatslowmodedelay$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatTheme` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatTheme$Input`](../modules/index.types.default.md#setchattheme$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setChatTitle` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setChatTitle$Input`](../modules/index.types.default.md#setchattitle$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setCommands` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setCommands$Input`](../modules/index.types.default.md#setcommands$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setCustomEmojiStickerSetThumbnail` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setCustomEmojiStickerSetThumbnail$Input`](../modules/index.types.default.md#setcustomemojistickersetthumbnail$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setCustomLanguagePack` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setCustomLanguagePack$Input`](../modules/index.types.default.md#setcustomlanguagepack$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setCustomLanguagePackString` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setCustomLanguagePackString$Input`](../modules/index.types.default.md#setcustomlanguagepackstring$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setDatabaseEncryptionKey` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setDatabaseEncryptionKey$Input`](../modules/index.types.default.md#setdatabaseencryptionkey$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setDefaultChannelAdministratorRights` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setDefaultChannelAdministratorRights$Input`](../modules/index.types.default.md#setdefaultchanneladministratorrights$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setDefaultGroupAdministratorRights` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setDefaultGroupAdministratorRights$Input`](../modules/index.types.default.md#setdefaultgroupadministratorrights$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setDefaultMessageAutoDeleteTime` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setDefaultMessageAutoDeleteTime$Input`](../modules/index.types.default.md#setdefaultmessageautodeletetime$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setDefaultReactionType` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setDefaultReactionType$Input`](../modules/index.types.default.md#setdefaultreactiontype$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setEmojiStatus` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setEmojiStatus$Input`](../modules/index.types.default.md#setemojistatus$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setFileGenerationProgress` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setFileGenerationProgress$Input`](../modules/index.types.default.md#setfilegenerationprogress$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setForumTopicNotificationSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setForumTopicNotificationSettings$Input`](../modules/index.types.default.md#setforumtopicnotificationsettings$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setGameScore` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setGameScore$Input`](../modules/index.types.default.md#setgamescore$input)\>) => `Promise`<[`message`](../modules/index.types.default.md#message-1)\> |
| `setGroupCallParticipantIsSpeaking` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setGroupCallParticipantIsSpeaking$Input`](../modules/index.types.default.md#setgroupcallparticipantisspeaking$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setGroupCallParticipantVolumeLevel` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setGroupCallParticipantVolumeLevel$Input`](../modules/index.types.default.md#setgroupcallparticipantvolumelevel$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setGroupCallTitle` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setGroupCallTitle$Input`](../modules/index.types.default.md#setgroupcalltitle$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setInactiveSessionTtl` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setInactiveSessionTtl$Input`](../modules/index.types.default.md#setinactivesessionttl$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setInlineGameScore` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setInlineGameScore$Input`](../modules/index.types.default.md#setinlinegamescore$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setLocation` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setLocation$Input`](../modules/index.types.default.md#setlocation$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setLogStream` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setLogStream$Input`](../modules/index.types.default.md#setlogstream$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setLogTagVerbosityLevel` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setLogTagVerbosityLevel$Input`](../modules/index.types.default.md#setlogtagverbositylevel$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setLogVerbosityLevel` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setLogVerbosityLevel$Input`](../modules/index.types.default.md#setlogverbositylevel$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setLoginEmailAddress` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setLoginEmailAddress$Input`](../modules/index.types.default.md#setloginemailaddress$input)\>) => `Promise`<[`emailAddressAuthenticationCodeInfo`](../modules/index.types.default.md#emailaddressauthenticationcodeinfo-1)\> |
| `setMenuButton` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setMenuButton$Input`](../modules/index.types.default.md#setmenubutton$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setName` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setName$Input`](../modules/index.types.default.md#setname$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setNetworkType` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setNetworkType$Input`](../modules/index.types.default.md#setnetworktype$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setOption` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setOption$Input`](../modules/index.types.default.md#setoption$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setPassportElement` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setPassportElement$Input`](../modules/index.types.default.md#setpassportelement$input)\>) => `Promise`<[`PassportElement`](../modules/index.types.default.md#passportelement)\> |
| `setPassportElementErrors` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setPassportElementErrors$Input`](../modules/index.types.default.md#setpassportelementerrors$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setPassword` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setPassword$Input`](../modules/index.types.default.md#setpassword$input)\>) => `Promise`<[`passwordState`](../modules/index.types.default.md#passwordstate-1)\> |
| `setPinnedChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setPinnedChats$Input`](../modules/index.types.default.md#setpinnedchats$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setPinnedForumTopics` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setPinnedForumTopics$Input`](../modules/index.types.default.md#setpinnedforumtopics$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setPollAnswer` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setPollAnswer$Input`](../modules/index.types.default.md#setpollanswer$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setProfilePhoto` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setProfilePhoto$Input`](../modules/index.types.default.md#setprofilephoto$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setRecoveryEmailAddress` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setRecoveryEmailAddress$Input`](../modules/index.types.default.md#setrecoveryemailaddress$input)\>) => `Promise`<[`passwordState`](../modules/index.types.default.md#passwordstate-1)\> |
| `setScopeNotificationSettings` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setScopeNotificationSettings$Input`](../modules/index.types.default.md#setscopenotificationsettings$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setStickerEmojis` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setStickerEmojis$Input`](../modules/index.types.default.md#setstickeremojis$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setStickerKeywords` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setStickerKeywords$Input`](../modules/index.types.default.md#setstickerkeywords$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setStickerMaskPosition` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setStickerMaskPosition$Input`](../modules/index.types.default.md#setstickermaskposition$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setStickerPositionInSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setStickerPositionInSet$Input`](../modules/index.types.default.md#setstickerpositioninset$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setStickerSetThumbnail` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setStickerSetThumbnail$Input`](../modules/index.types.default.md#setstickersetthumbnail$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setStickerSetTitle` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setStickerSetTitle$Input`](../modules/index.types.default.md#setstickersettitle$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setSupergroupStickerSet` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setSupergroupStickerSet$Input`](../modules/index.types.default.md#setsupergroupstickerset$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setSupergroupUsername` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setSupergroupUsername$Input`](../modules/index.types.default.md#setsupergroupusername$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setTdlibParameters` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setTdlibParameters$Input`](../modules/index.types.default.md#settdlibparameters$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setUserPersonalProfilePhoto` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setUserPersonalProfilePhoto$Input`](../modules/index.types.default.md#setuserpersonalprofilephoto$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setUserPrivacySettingRules` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setUserPrivacySettingRules$Input`](../modules/index.types.default.md#setuserprivacysettingrules$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setUserSupportInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setUserSupportInfo$Input`](../modules/index.types.default.md#setusersupportinfo$input)\>) => `Promise`<[`userSupportInfo`](../modules/index.types.default.md#usersupportinfo-1)\> |
| `setUsername` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setUsername$Input`](../modules/index.types.default.md#setusername$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `setVideoChatDefaultParticipant` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`setVideoChatDefaultParticipant$Input`](../modules/index.types.default.md#setvideochatdefaultparticipant$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `shareChatWithBot` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`shareChatWithBot$Input`](../modules/index.types.default.md#sharechatwithbot$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `sharePhoneNumber` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`sharePhoneNumber$Input`](../modules/index.types.default.md#sharephonenumber$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `shareUserWithBot` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`shareUserWithBot$Input`](../modules/index.types.default.md#shareuserwithbot$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `startGroupCallRecording` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`startGroupCallRecording$Input`](../modules/index.types.default.md#startgroupcallrecording$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `startGroupCallScreenSharing` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`startGroupCallScreenSharing$Input`](../modules/index.types.default.md#startgroupcallscreensharing$input)\>) => `Promise`<[`text`](../modules/index.types.default.md#text-1)\> |
| `startScheduledGroupCall` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`startScheduledGroupCall$Input`](../modules/index.types.default.md#startscheduledgroupcall$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `stopPoll` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`stopPoll$Input`](../modules/index.types.default.md#stoppoll$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `suggestUserProfilePhoto` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`suggestUserProfilePhoto$Input`](../modules/index.types.default.md#suggestuserprofilephoto$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `synchronizeLanguagePack` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`synchronizeLanguagePack$Input`](../modules/index.types.default.md#synchronizelanguagepack$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `terminateAllOtherSessions` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`terminateAllOtherSessions$Input`](../modules/index.types.default.md#terminateallothersessions$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `terminateSession` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`terminateSession$Input`](../modules/index.types.default.md#terminatesession$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `testCallBytes` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testCallBytes$Input`](../modules/index.types.default.md#testcallbytes$input)\>) => `Promise`<[`testBytes`](../modules/index.types.default.md#testbytes-1)\> |
| `testCallEmpty` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testCallEmpty$Input`](../modules/index.types.default.md#testcallempty$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `testCallString` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testCallString$Input`](../modules/index.types.default.md#testcallstring$input)\>) => `Promise`<[`testString`](../modules/index.types.default.md#teststring-1)\> |
| `testCallVectorInt` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testCallVectorInt$Input`](../modules/index.types.default.md#testcallvectorint$input)\>) => `Promise`<[`testVectorInt`](../modules/index.types.default.md#testvectorint-1)\> |
| `testCallVectorIntObject` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testCallVectorIntObject$Input`](../modules/index.types.default.md#testcallvectorintobject$input)\>) => `Promise`<[`testVectorIntObject`](../modules/index.types.default.md#testvectorintobject-1)\> |
| `testCallVectorString` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testCallVectorString$Input`](../modules/index.types.default.md#testcallvectorstring$input)\>) => `Promise`<[`testVectorString`](../modules/index.types.default.md#testvectorstring-1)\> |
| `testCallVectorStringObject` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testCallVectorStringObject$Input`](../modules/index.types.default.md#testcallvectorstringobject$input)\>) => `Promise`<[`testVectorStringObject`](../modules/index.types.default.md#testvectorstringobject-1)\> |
| `testGetDifference` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testGetDifference$Input`](../modules/index.types.default.md#testgetdifference$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `testNetwork` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testNetwork$Input`](../modules/index.types.default.md#testnetwork$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `testProxy` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testProxy$Input`](../modules/index.types.default.md#testproxy$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `testReturnError` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testReturnError$Input`](../modules/index.types.default.md#testreturnerror$input)\>) => `Promise`<[`error`](../modules/index.types.default.md#error-1)\> |
| `testSquareInt` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testSquareInt$Input`](../modules/index.types.default.md#testsquareint$input)\>) => `Promise`<[`testInt`](../modules/index.types.default.md#testint-1)\> |
| `testUseUpdate` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`testUseUpdate$Input`](../modules/index.types.default.md#testuseupdate$input)\>) => `Promise`<[`Update`](../modules/index.types.default.md#update)\> |
| `toggleAllDownloadsArePaused` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleAllDownloadsArePaused$Input`](../modules/index.types.default.md#togglealldownloadsarepaused$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleBotIsAddedToAttachmentMenu` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleBotIsAddedToAttachmentMenu$Input`](../modules/index.types.default.md#togglebotisaddedtoattachmentmenu$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleChatDefaultDisableNotification` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleChatDefaultDisableNotification$Input`](../modules/index.types.default.md#togglechatdefaultdisablenotification$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleChatHasProtectedContent` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleChatHasProtectedContent$Input`](../modules/index.types.default.md#togglechathasprotectedcontent$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleChatIsMarkedAsUnread` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleChatIsMarkedAsUnread$Input`](../modules/index.types.default.md#togglechatismarkedasunread$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleChatIsPinned` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleChatIsPinned$Input`](../modules/index.types.default.md#togglechatispinned$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleChatIsTranslatable` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleChatIsTranslatable$Input`](../modules/index.types.default.md#togglechatistranslatable$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleDownloadIsPaused` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleDownloadIsPaused$Input`](../modules/index.types.default.md#toggledownloadispaused$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleForumTopicIsClosed` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleForumTopicIsClosed$Input`](../modules/index.types.default.md#toggleforumtopicisclosed$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleForumTopicIsPinned` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleForumTopicIsPinned$Input`](../modules/index.types.default.md#toggleforumtopicispinned$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGeneralForumTopicIsHidden` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGeneralForumTopicIsHidden$Input`](../modules/index.types.default.md#togglegeneralforumtopicishidden$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGroupCallEnabledStartNotification` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGroupCallEnabledStartNotification$Input`](../modules/index.types.default.md#togglegroupcallenabledstartnotification$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGroupCallIsMyVideoEnabled` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGroupCallIsMyVideoEnabled$Input`](../modules/index.types.default.md#togglegroupcallismyvideoenabled$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGroupCallIsMyVideoPaused` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGroupCallIsMyVideoPaused$Input`](../modules/index.types.default.md#togglegroupcallismyvideopaused$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGroupCallMuteNewParticipants` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGroupCallMuteNewParticipants$Input`](../modules/index.types.default.md#togglegroupcallmutenewparticipants$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGroupCallParticipantIsHandRaised` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGroupCallParticipantIsHandRaised$Input`](../modules/index.types.default.md#togglegroupcallparticipantishandraised$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGroupCallParticipantIsMuted` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGroupCallParticipantIsMuted$Input`](../modules/index.types.default.md#togglegroupcallparticipantismuted$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleGroupCallScreenSharingIsPaused` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleGroupCallScreenSharingIsPaused$Input`](../modules/index.types.default.md#togglegroupcallscreensharingispaused$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleMessageSenderIsBlocked` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleMessageSenderIsBlocked$Input`](../modules/index.types.default.md#togglemessagesenderisblocked$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSessionCanAcceptCalls` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSessionCanAcceptCalls$Input`](../modules/index.types.default.md#togglesessioncanacceptcalls$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSessionCanAcceptSecretChats` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSessionCanAcceptSecretChats$Input`](../modules/index.types.default.md#togglesessioncanacceptsecretchats$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupHasAggressiveAntiSpamEnabled` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupHasAggressiveAntiSpamEnabled$Input`](../modules/index.types.default.md#togglesupergrouphasaggressiveantispamenabled$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupHasHiddenMembers` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupHasHiddenMembers$Input`](../modules/index.types.default.md#togglesupergrouphashiddenmembers$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupIsAllHistoryAvailable` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupIsAllHistoryAvailable$Input`](../modules/index.types.default.md#togglesupergroupisallhistoryavailable$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupIsBroadcastGroup` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupIsBroadcastGroup$Input`](../modules/index.types.default.md#togglesupergroupisbroadcastgroup$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupIsForum` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupIsForum$Input`](../modules/index.types.default.md#togglesupergroupisforum$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupJoinByRequest` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupJoinByRequest$Input`](../modules/index.types.default.md#togglesupergroupjoinbyrequest$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupJoinToSendMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupJoinToSendMessages$Input`](../modules/index.types.default.md#togglesupergroupjointosendmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupSignMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupSignMessages$Input`](../modules/index.types.default.md#togglesupergroupsignmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleSupergroupUsernameIsActive` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleSupergroupUsernameIsActive$Input`](../modules/index.types.default.md#togglesupergroupusernameisactive$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `toggleUsernameIsActive` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`toggleUsernameIsActive$Input`](../modules/index.types.default.md#toggleusernameisactive$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `transferChatOwnership` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`transferChatOwnership$Input`](../modules/index.types.default.md#transferchatownership$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `translateMessageText` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`translateMessageText$Input`](../modules/index.types.default.md#translatemessagetext$input)\>) => `Promise`<[`formattedText`](../modules/index.types.default.md#formattedtext-1)\> |
| `translateText` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`translateText$Input`](../modules/index.types.default.md#translatetext$input)\>) => `Promise`<[`formattedText`](../modules/index.types.default.md#formattedtext-1)\> |
| `unpinAllChatMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`unpinAllChatMessages$Input`](../modules/index.types.default.md#unpinallchatmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `unpinAllMessageThreadMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`unpinAllMessageThreadMessages$Input`](../modules/index.types.default.md#unpinallmessagethreadmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `unpinChatMessage` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`unpinChatMessage$Input`](../modules/index.types.default.md#unpinchatmessage$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `upgradeBasicGroupChatToSupergroupChat` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`upgradeBasicGroupChatToSupergroupChat$Input`](../modules/index.types.default.md#upgradebasicgroupchattosupergroupchat$input)\>) => `Promise`<[`chat`](../modules/index.types.default.md#chat-1)\> |
| `uploadStickerFile` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`uploadStickerFile$Input`](../modules/index.types.default.md#uploadstickerfile$input)\>) => `Promise`<[`file`](../modules/index.types.default.md#file-1)\> |
| `validateOrderInfo` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`validateOrderInfo$Input`](../modules/index.types.default.md#validateorderinfo$input)\>) => `Promise`<[`validatedOrderInfo`](../modules/index.types.default.md#validatedorderinfo-1)\> |
| `viewMessages` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`viewMessages$Input`](../modules/index.types.default.md#viewmessages$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `viewPremiumFeature` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`viewPremiumFeature$Input`](../modules/index.types.default.md#viewpremiumfeature$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `viewTrendingStickerSets` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`viewTrendingStickerSets$Input`](../modules/index.types.default.md#viewtrendingstickersets$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |
| `writeGeneratedFilePart` | (`parameters`: [`OmitType`](../modules/index._internal_.md#omittype)<[`writeGeneratedFilePart$Input`](../modules/index.types.default.md#writegeneratedfilepart$input)\>) => `Promise`<[`ok`](../modules/index.types.default.md#ok-1)\> |

#### Defined in

dist/client.d.ts:50

## Accessors

### updates

• `get` **updates**(): [`Observable`](../interfaces/index._internal_.Observable.md)<[`Update`](../modules/index.types.default.md#update)\>

**`Memberof`**

Client

#### Returns

[`Observable`](../interfaces/index._internal_.Observable.md)<[`Update`](../modules/index.types.default.md#update)\>

#### Defined in

dist/client.d.ts:664

## Methods

### destroy

▸ **destroy**(): `void`

**`Memberof`**

Client

#### Returns

`void`

#### Defined in

dist/client.d.ts:685

___

### invoke

▸ **invoke**<`T`\>(`method`, `parameters`): `Promise`<`ReturnType`<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>\>

**`Throws`**

- [TDError](index.TDError.md)

**`Memberof`**

Client

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`$MethodsDict`](../modules/index.types.default.md#$methodsdict) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `T` |
| `parameters` | [`OmitType`](../modules/index._internal_.md#omittype)<`Parameters`<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>[``0``]\> |

#### Returns

`Promise`<`ReturnType`<[`$MethodsDict`](../modules/index.types.default.md#$methodsdict)[`T`]\>\>

{Promise<ReturnType<$MethodsDict[T]>>}

#### Defined in

dist/client.d.ts:649

___

### pause

▸ **pause**(): [`Client`](index.Client.md)

**`Memberof`**

Client

#### Returns

[`Client`](index.Client.md)

#### Defined in

dist/client.d.ts:678

___

### start

▸ **start**(): [`Client`](index.Client.md)

**`Memberof`**

Client

#### Returns

[`Client`](index.Client.md)

#### Defined in

dist/client.d.ts:671
