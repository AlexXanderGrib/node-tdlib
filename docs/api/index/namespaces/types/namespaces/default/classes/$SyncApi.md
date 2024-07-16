[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / $SyncApi

# Class: $SyncApi

Convenience class for sync API calls

## Constructors

### new $SyncApi()

> **new $SyncApi**(`client`): [`$SyncApi`]($SyncApi.md)

Constructs [$SyncApi]($SyncApi.md)

#### Parameters

• **client**

• **client.execute**

#### Returns

[`$SyncApi`]($SyncApi.md)

#### Defined in

dist/generated/types.d.ts:72869

## Properties

### client

> `private` `readonly` **client**: `any`

#### Defined in

dist/generated/types.d.ts:72863

## Methods

### addLogMessage()

> **addLogMessage**(`parameters`): [`ok`](../type-aliases/ok-1.md)

Adds a message to TDLib internal log. Can be called synchronously

#### Parameters

• **parameters**: [`addLogMessage$DirectInput`](../type-aliases/addLogMessage$DirectInput.md)

[addLogMessage$Input](../type-aliases/addLogMessage$Input.md)

#### Returns

[`ok`](../type-aliases/ok-1.md)

[Ok](../type-aliases/Ok.md)

#### Defined in

dist/generated/types.d.ts:73062

***

### checkQuickReplyShortcutName()

> **checkQuickReplyShortcutName**(`parameters`): [`ok`](../type-aliases/ok-1.md)

Checks validness of a name for a quick reply shortcut. Can be called synchronously

#### Parameters

• **parameters**: [`checkQuickReplyShortcutName$DirectInput`](../type-aliases/checkQuickReplyShortcutName$DirectInput.md)

[checkQuickReplyShortcutName$Input](../type-aliases/checkQuickReplyShortcutName$Input.md)

#### Returns

[`ok`](../type-aliases/ok-1.md)

[Ok](../type-aliases/Ok.md)

#### Defined in

dist/generated/types.d.ts:72878

***

### cleanFileName()

> **cleanFileName**(`parameters`): [`text`](../type-aliases/text-1.md)

Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`cleanFileName$DirectInput`](../type-aliases/cleanFileName$DirectInput.md)

[cleanFileName$Input](../type-aliases/cleanFileName$Input.md)

#### Returns

[`text`](../type-aliases/text-1.md)

[Text](../type-aliases/Text.md)

#### Defined in

dist/generated/types.d.ts:72943

***

### getChatFolderDefaultIconName()

> **getChatFolderDefaultIconName**(`parameters`): [`chatFolderIcon`](../type-aliases/chatFolderIcon-1.md)

Returns default icon name for a folder. Can be called synchronously

#### Parameters

• **parameters**: [`getChatFolderDefaultIconName$DirectInput`](../type-aliases/getChatFolderDefaultIconName$DirectInput.md)

[getChatFolderDefaultIconName$Input](../type-aliases/getChatFolderDefaultIconName$Input.md)

#### Returns

[`chatFolderIcon`](../type-aliases/chatFolderIcon-1.md)

[ChatFolderIcon](../type-aliases/ChatFolderIcon.md)

#### Defined in

dist/generated/types.d.ts:72978

***

### getCountryFlagEmoji()

> **getCountryFlagEmoji**(`parameters`): [`text`](../type-aliases/text-1.md)

Returns an emoji for the given country. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getCountryFlagEmoji$DirectInput`](../type-aliases/getCountryFlagEmoji$DirectInput.md)

[getCountryFlagEmoji$Input](../type-aliases/getCountryFlagEmoji$Input.md)

#### Returns

[`text`](../type-aliases/text-1.md)

[Text](../type-aliases/Text.md)

#### Defined in

dist/generated/types.d.ts:72922

***

### getFileExtension()

> **getFileExtension**(`parameters`): [`text`](../type-aliases/text-1.md)

Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getFileExtension$DirectInput`](../type-aliases/getFileExtension$DirectInput.md)

[getFileExtension$Input](../type-aliases/getFileExtension$Input.md)

#### Returns

[`text`](../type-aliases/text-1.md)

[Text](../type-aliases/Text.md)

#### Defined in

dist/generated/types.d.ts:72936

***

### getFileMimeType()

> **getFileMimeType**(`parameters`): [`text`](../type-aliases/text-1.md)

Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. Can be called synchronously

#### Parameters

• **parameters**: [`getFileMimeType$DirectInput`](../type-aliases/getFileMimeType$DirectInput.md)

[getFileMimeType$Input](../type-aliases/getFileMimeType$Input.md)

#### Returns

[`text`](../type-aliases/text-1.md)

[Text](../type-aliases/Text.md)

#### Defined in

dist/generated/types.d.ts:72929

***

### getJsonString()

> **getJsonString**(`parameters`): [`text`](../type-aliases/text-1.md)

Converts a JsonValue object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

• **parameters**: [`getJsonString$DirectInput`](../type-aliases/getJsonString$DirectInput.md)

[getJsonString$Input](../type-aliases/getJsonString$Input.md)

#### Returns

[`text`](../type-aliases/text-1.md)

[Text](../type-aliases/Text.md)

#### Defined in

dist/generated/types.d.ts:72964

***

### getJsonValue()

> **getJsonValue**(`parameters`): [`JsonValue`](../type-aliases/JsonValue.md)

Converts a JSON-serialized string to corresponding JsonValue object. Can be called synchronously

#### Parameters

• **parameters**: [`getJsonValue$DirectInput`](../type-aliases/getJsonValue$DirectInput.md)

[getJsonValue$Input](../type-aliases/getJsonValue$Input.md)

#### Returns

[`JsonValue`](../type-aliases/JsonValue.md)

[JsonValue](../type-aliases/JsonValue.md)

#### Defined in

dist/generated/types.d.ts:72957

***

### getLanguagePackString()

> **getLanguagePackString**(`parameters`): [`LanguagePackStringValue`](../type-aliases/LanguagePackStringValue.md)

Returns a string stored in the local database from the specified localization target and language pack by its key. Returns a 404 error if the string is not found. Can be called synchronously

#### Parameters

• **parameters**: [`getLanguagePackString$DirectInput`](../type-aliases/getLanguagePackString$DirectInput.md)

[getLanguagePackString$Input](../type-aliases/getLanguagePackString$Input.md)

#### Returns

[`LanguagePackStringValue`](../type-aliases/LanguagePackStringValue.md)

[LanguagePackStringValue](../type-aliases/LanguagePackStringValue.md)

#### Defined in

dist/generated/types.d.ts:72950

***

### getLogStream()

> **getLogStream**(`parameters`): [`LogStream`](../type-aliases/LogStream.md)

Returns information about currently used log stream for internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`getLogStream$DirectInput`](../type-aliases/getLogStream$DirectInput.md)

[getLogStream$Input](../type-aliases/getLogStream$Input.md)

#### Returns

[`LogStream`](../type-aliases/LogStream.md)

[LogStream](../type-aliases/LogStream.md)

#### Defined in

dist/generated/types.d.ts:73020

***

### getLogTagVerbosityLevel()

> **getLogTagVerbosityLevel**(`parameters`): [`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)

Returns current verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

• **parameters**: [`getLogTagVerbosityLevel$DirectInput`](../type-aliases/getLogTagVerbosityLevel$DirectInput.md)

[getLogTagVerbosityLevel$Input](../type-aliases/getLogTagVerbosityLevel$Input.md)

#### Returns

[`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)

[LogVerbosityLevel](../type-aliases/LogVerbosityLevel.md)

#### Defined in

dist/generated/types.d.ts:73055

***

### getLogTags()

> **getLogTags**(`parameters`): [`logTags`](../type-aliases/logTags-1.md)

Returns the list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications", "proxy"]. Can be called synchronously

#### Parameters

• **parameters**: [`getLogTags$DirectInput`](../type-aliases/getLogTags$DirectInput.md)

[getLogTags$Input](../type-aliases/getLogTags$Input.md)

#### Returns

[`logTags`](../type-aliases/logTags-1.md)

[LogTags](../type-aliases/LogTags.md)

#### Defined in

dist/generated/types.d.ts:73041

***

### getLogVerbosityLevel()

> **getLogVerbosityLevel**(`parameters`): [`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)

Returns current verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`getLogVerbosityLevel$DirectInput`](../type-aliases/getLogVerbosityLevel$DirectInput.md)

[getLogVerbosityLevel$Input](../type-aliases/getLogVerbosityLevel$Input.md)

#### Returns

[`logVerbosityLevel`](../type-aliases/logVerbosityLevel-1.md)

[LogVerbosityLevel](../type-aliases/LogVerbosityLevel.md)

#### Defined in

dist/generated/types.d.ts:73034

***

### getMarkdownText()

> **getMarkdownText**(`parameters`): [`formattedText`](../type-aliases/formattedText-1.md)

Replaces text entities with Markdown formatting in a human-friendly format. Entities that can't be represented in Markdown unambiguously are kept as is. Can be called synchronously

#### Parameters

• **parameters**: [`getMarkdownText$DirectInput`](../type-aliases/getMarkdownText$DirectInput.md)

[getMarkdownText$Input](../type-aliases/getMarkdownText$Input.md)

#### Returns

[`formattedText`](../type-aliases/formattedText-1.md)

[FormattedText](../type-aliases/FormattedText.md)

#### Defined in

dist/generated/types.d.ts:72915

***

### getOption()

> **getOption**(`parameters`): [`OptionValue`](../type-aliases/OptionValue.md)

Returns the value of an option by its name. (Check the list of available options on https://core.telegram.org/tdlib/options.) Can be called before authorization. Can be called synchronously for options "version" and "commit_hash"

#### Parameters

• **parameters**: [`getOption$DirectInput`](../type-aliases/getOption$DirectInput.md)

[getOption$Input](../type-aliases/getOption$Input.md)

#### Returns

[`OptionValue`](../type-aliases/OptionValue.md)

[OptionValue](../type-aliases/OptionValue.md)

#### Defined in

dist/generated/types.d.ts:72992

***

### getPhoneNumberInfoSync()

> **getPhoneNumberInfoSync**(`parameters`): [`phoneNumberInfo`](../type-aliases/phoneNumberInfo-1.md)

Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after changing localization to the specified language if properly localized country information is expected. Can be called synchronously

#### Parameters

• **parameters**: [`getPhoneNumberInfoSync$DirectInput`](../type-aliases/getPhoneNumberInfoSync$DirectInput.md)

[getPhoneNumberInfoSync$Input](../type-aliases/getPhoneNumberInfoSync$Input.md)

#### Returns

[`phoneNumberInfo`](../type-aliases/phoneNumberInfo-1.md)

[PhoneNumberInfo](../type-aliases/PhoneNumberInfo.md)

#### Defined in

dist/generated/types.d.ts:73006

***

### getPushReceiverId()

> **getPushReceiverId**(`parameters`): [`pushReceiverId`](../type-aliases/pushReceiverId-1.md)

Returns a globally unique push notification subscription identifier for identification of an account, which has received a push notification. Can be called synchronously

#### Parameters

• **parameters**: [`getPushReceiverId$DirectInput`](../type-aliases/getPushReceiverId$DirectInput.md)

[getPushReceiverId$Input](../type-aliases/getPushReceiverId$Input.md)

#### Returns

[`pushReceiverId`](../type-aliases/pushReceiverId-1.md)

[PushReceiverId](../type-aliases/PushReceiverId.md)

#### Defined in

dist/generated/types.d.ts:72985

***

### getTextEntities()

> **getTextEntities**(`parameters`): [`textEntities`](../type-aliases/textEntities-1.md)

Returns all entities (mentions, hashtags, cashtags, bot commands, bank card numbers, URLs, and email addresses) found in the text. Can be called synchronously

#### Parameters

• **parameters**: [`getTextEntities$DirectInput`](../type-aliases/getTextEntities$DirectInput.md)

[getTextEntities$Input](../type-aliases/getTextEntities$Input.md)

#### Returns

[`textEntities`](../type-aliases/textEntities-1.md)

[TextEntities](../type-aliases/TextEntities.md)

#### Defined in

dist/generated/types.d.ts:72892

***

### getThemeParametersJsonString()

> **getThemeParametersJsonString**(`parameters`): [`text`](../type-aliases/text-1.md)

Converts a themeParameters object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

• **parameters**: [`getThemeParametersJsonString$DirectInput`](../type-aliases/getThemeParametersJsonString$DirectInput.md)

[getThemeParametersJsonString$Input](../type-aliases/getThemeParametersJsonString$Input.md)

#### Returns

[`text`](../type-aliases/text-1.md)

[Text](../type-aliases/Text.md)

#### Defined in

dist/generated/types.d.ts:72971

***

### parseMarkdown()

> **parseMarkdown**(`parameters`): [`formattedText`](../type-aliases/formattedText-1.md)

Parses Markdown entities in a human-friendly format, ignoring markup errors. Can be called synchronously

#### Parameters

• **parameters**: [`parseMarkdown$DirectInput`](../type-aliases/parseMarkdown$DirectInput.md)

[parseMarkdown$Input](../type-aliases/parseMarkdown$Input.md)

#### Returns

[`formattedText`](../type-aliases/formattedText-1.md)

[FormattedText](../type-aliases/FormattedText.md)

#### Defined in

dist/generated/types.d.ts:72908

***

### parseTextEntities()

> **parseTextEntities**(`parameters`): [`formattedText`](../type-aliases/formattedText-1.md)

Parses Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, ExpandableBlockQuote, Code, Pre, PreCode, TextUrl

- and MentionName entities from a marked-up text. Can be called synchronously

#### Parameters

• **parameters**: [`parseTextEntities$DirectInput`](../type-aliases/parseTextEntities$DirectInput.md)

[parseTextEntities$Input](../type-aliases/parseTextEntities$Input.md)

#### Returns

[`formattedText`](../type-aliases/formattedText-1.md)

[FormattedText](../type-aliases/FormattedText.md)

#### Defined in

dist/generated/types.d.ts:72901

***

### searchQuote()

> **searchQuote**(`parameters`): [`foundPosition`](../type-aliases/foundPosition-1.md)

Searches for a given quote in a text. Returns found quote start position in UTF-16 code units. Returns a 404 error if the quote is not found. Can be called synchronously

#### Parameters

• **parameters**: [`searchQuote$DirectInput`](../type-aliases/searchQuote$DirectInput.md)

[searchQuote$Input](../type-aliases/searchQuote$Input.md)

#### Returns

[`foundPosition`](../type-aliases/foundPosition-1.md)

[FoundPosition](../type-aliases/FoundPosition.md)

#### Defined in

dist/generated/types.d.ts:72885

***

### searchStringsByPrefix()

> **searchStringsByPrefix**(`parameters`): [`foundPositions`](../type-aliases/foundPositions-1.md)

Searches specified query by word prefixes in the provided strings. Returns 0-based positions of strings that matched. Can be called synchronously

#### Parameters

• **parameters**: [`searchStringsByPrefix$DirectInput`](../type-aliases/searchStringsByPrefix$DirectInput.md)

[searchStringsByPrefix$Input](../type-aliases/searchStringsByPrefix$Input.md)

#### Returns

[`foundPositions`](../type-aliases/foundPositions-1.md)

[FoundPositions](../type-aliases/FoundPositions.md)

#### Defined in

dist/generated/types.d.ts:72999

***

### setLogStream()

> **setLogStream**(`parameters`): [`ok`](../type-aliases/ok-1.md)

Sets new log stream for internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`setLogStream$DirectInput`](../type-aliases/setLogStream$DirectInput.md)

[setLogStream$Input](../type-aliases/setLogStream$Input.md)

#### Returns

[`ok`](../type-aliases/ok-1.md)

[Ok](../type-aliases/Ok.md)

#### Defined in

dist/generated/types.d.ts:73013

***

### setLogTagVerbosityLevel()

> **setLogTagVerbosityLevel**(`parameters`): [`ok`](../type-aliases/ok-1.md)

Sets the verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

• **parameters**: [`setLogTagVerbosityLevel$DirectInput`](../type-aliases/setLogTagVerbosityLevel$DirectInput.md)

[setLogTagVerbosityLevel$Input](../type-aliases/setLogTagVerbosityLevel$Input.md)

#### Returns

[`ok`](../type-aliases/ok-1.md)

[Ok](../type-aliases/Ok.md)

#### Defined in

dist/generated/types.d.ts:73048

***

### setLogVerbosityLevel()

> **setLogVerbosityLevel**(`parameters`): [`ok`](../type-aliases/ok-1.md)

Sets the verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

• **parameters**: [`setLogVerbosityLevel$DirectInput`](../type-aliases/setLogVerbosityLevel$DirectInput.md)

[setLogVerbosityLevel$Input](../type-aliases/setLogVerbosityLevel$Input.md)

#### Returns

[`ok`](../type-aliases/ok-1.md)

[Ok](../type-aliases/Ok.md)

#### Defined in

dist/generated/types.d.ts:73027

***

### testReturnError()

> **testReturnError**(`parameters`): [`error`](../type-aliases/error-1.md)

Returns the specified error and ensures that the Error object is used; for testing only. Can be called synchronously

#### Parameters

• **parameters**: [`testReturnError$DirectInput`](../type-aliases/testReturnError$DirectInput.md)

[testReturnError$Input](../type-aliases/testReturnError$Input.md)

#### Returns

[`error`](../type-aliases/error-1.md)

[Error](../type-aliases/Error.md)

#### Defined in

dist/generated/types.d.ts:73069
