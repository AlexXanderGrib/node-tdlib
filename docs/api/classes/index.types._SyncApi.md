[TDLib](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [types](../modules/index.types.md) / $SyncApi

# Class: $SyncApi

[index](../modules/index.md).[types](../modules/index.types.md).$SyncApi

Convenience class for sync API calls

## Table of contents

### Constructors

- [constructor](index.types._SyncApi.md#constructor)

### Properties

- [client](index.types._SyncApi.md#client)

### Methods

- [addLogMessage](index.types._SyncApi.md#addlogmessage)
- [cleanFileName](index.types._SyncApi.md#cleanfilename)
- [getChatFolderDefaultIconName](index.types._SyncApi.md#getchatfolderdefaulticonname)
- [getFileExtension](index.types._SyncApi.md#getfileextension)
- [getFileMimeType](index.types._SyncApi.md#getfilemimetype)
- [getJsonString](index.types._SyncApi.md#getjsonstring)
- [getJsonValue](index.types._SyncApi.md#getjsonvalue)
- [getLanguagePackString](index.types._SyncApi.md#getlanguagepackstring)
- [getLogStream](index.types._SyncApi.md#getlogstream)
- [getLogTagVerbosityLevel](index.types._SyncApi.md#getlogtagverbositylevel)
- [getLogTags](index.types._SyncApi.md#getlogtags)
- [getLogVerbosityLevel](index.types._SyncApi.md#getlogverbositylevel)
- [getMarkdownText](index.types._SyncApi.md#getmarkdowntext)
- [getOption](index.types._SyncApi.md#getoption)
- [getPhoneNumberInfoSync](index.types._SyncApi.md#getphonenumberinfosync)
- [getPushReceiverId](index.types._SyncApi.md#getpushreceiverid)
- [getTextEntities](index.types._SyncApi.md#gettextentities)
- [getThemeParametersJsonString](index.types._SyncApi.md#getthemeparametersjsonstring)
- [parseMarkdown](index.types._SyncApi.md#parsemarkdown)
- [parseTextEntities](index.types._SyncApi.md#parsetextentities)
- [searchQuote](index.types._SyncApi.md#searchquote)
- [searchStringsByPrefix](index.types._SyncApi.md#searchstringsbyprefix)
- [setLogStream](index.types._SyncApi.md#setlogstream)
- [setLogTagVerbosityLevel](index.types._SyncApi.md#setlogtagverbositylevel)
- [setLogVerbosityLevel](index.types._SyncApi.md#setlogverbositylevel)
- [testReturnError](index.types._SyncApi.md#testreturnerror)

## Constructors

### constructor

• **new $SyncApi**(`client`)

Constructs [$SyncApi](index.types._SyncApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `Object` |
| `client.execute` | (`method`: `string`, `parameters`: `unknown`) => `unknown` |

#### Defined in

dist/generated/types.d.ts:61371

## Properties

### client

• `Private` `Readonly` **client**: `any`

#### Defined in

dist/generated/types.d.ts:61365

## Methods

### addLogMessage

▸ **addLogMessage**(`parameters`): [`ok`](../modules/index.types.default.md#ok-1)

Adds a message to TDLib internal log. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`addLogMessage$DirectInput`](../modules/index.types.default.md#addlogmessage$directinput) | [addLogMessage$Input](../modules/index.types.md#addlogmessage$input) |

#### Returns

[`ok`](../modules/index.types.default.md#ok-1)

[Ok](../modules/index.types.md#ok)

#### Defined in

dist/generated/types.d.ts:61548

___

### cleanFileName

▸ **cleanFileName**(`parameters`): [`text`](../modules/index.types.default.md#text-1)

Removes potentially dangerous characters from the name of a file. The encoding of the file name is supposed to be UTF-8. Returns an empty string on failure. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`cleanFileName$DirectInput`](../modules/index.types.default.md#cleanfilename$directinput) | [cleanFileName$Input](../modules/index.types.md#cleanfilename$input) |

#### Returns

[`text`](../modules/index.types.default.md#text-1)

[Text](../modules/index.types.md#text)

#### Defined in

dist/generated/types.d.ts:61429

___

### getChatFolderDefaultIconName

▸ **getChatFolderDefaultIconName**(`parameters`): [`chatFolderIcon`](../modules/index.types.default.md#chatfoldericon-1)

Returns default icon name for a folder. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getChatFolderDefaultIconName$DirectInput`](../modules/index.types.default.md#getchatfolderdefaulticonname$directinput) | [getChatFolderDefaultIconName$Input](../modules/index.types.md#getchatfolderdefaulticonname$input) |

#### Returns

[`chatFolderIcon`](../modules/index.types.default.md#chatfoldericon-1)

[ChatFolderIcon](../modules/index.types.md#chatfoldericon)

#### Defined in

dist/generated/types.d.ts:61464

___

### getFileExtension

▸ **getFileExtension**(`parameters`): [`text`](../modules/index.types.default.md#text-1)

Returns the extension of a file, guessed by its MIME type. Returns an empty string on failure. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getFileExtension$DirectInput`](../modules/index.types.default.md#getfileextension$directinput) | [getFileExtension$Input](../modules/index.types.md#getfileextension$input) |

#### Returns

[`text`](../modules/index.types.default.md#text-1)

[Text](../modules/index.types.md#text)

#### Defined in

dist/generated/types.d.ts:61422

___

### getFileMimeType

▸ **getFileMimeType**(`parameters`): [`text`](../modules/index.types.default.md#text-1)

Returns the MIME type of a file, guessed by its extension. Returns an empty string on failure. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getFileMimeType$DirectInput`](../modules/index.types.default.md#getfilemimetype$directinput) | [getFileMimeType$Input](../modules/index.types.md#getfilemimetype$input) |

#### Returns

[`text`](../modules/index.types.default.md#text-1)

[Text](../modules/index.types.md#text)

#### Defined in

dist/generated/types.d.ts:61415

___

### getJsonString

▸ **getJsonString**(`parameters`): [`text`](../modules/index.types.default.md#text-1)

Converts a JsonValue object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getJsonString$DirectInput`](../modules/index.types.default.md#getjsonstring$directinput) | [getJsonString$Input](../modules/index.types.md#getjsonstring$input) |

#### Returns

[`text`](../modules/index.types.default.md#text-1)

[Text](../modules/index.types.md#text)

#### Defined in

dist/generated/types.d.ts:61450

___

### getJsonValue

▸ **getJsonValue**(`parameters`): [`JsonValue`](../modules/index.types.default.md#jsonvalue)

Converts a JSON-serialized string to corresponding JsonValue object. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getJsonValue$DirectInput`](../modules/index.types.default.md#getjsonvalue$directinput) | [getJsonValue$Input](../modules/index.types.md#getjsonvalue$input) |

#### Returns

[`JsonValue`](../modules/index.types.default.md#jsonvalue)

[JsonValue](../modules/index.types.md#jsonvalue)

#### Defined in

dist/generated/types.d.ts:61443

___

### getLanguagePackString

▸ **getLanguagePackString**(`parameters`): [`LanguagePackStringValue`](../modules/index.types.default.md#languagepackstringvalue)

Returns a string stored in the local database from the specified localization target and language pack by its key. Returns a 404 error if the string is not found. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getLanguagePackString$DirectInput`](../modules/index.types.default.md#getlanguagepackstring$directinput) | [getLanguagePackString$Input](../modules/index.types.md#getlanguagepackstring$input) |

#### Returns

[`LanguagePackStringValue`](../modules/index.types.default.md#languagepackstringvalue)

[LanguagePackStringValue](../modules/index.types.md#languagepackstringvalue)

#### Defined in

dist/generated/types.d.ts:61436

___

### getLogStream

▸ **getLogStream**(`parameters`): [`LogStream`](../modules/index.types.default.md#logstream)

Returns information about currently used log stream for internal logging of TDLib. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getLogStream$DirectInput`](../modules/index.types.default.md#getlogstream$directinput) | [getLogStream$Input](../modules/index.types.md#getlogstream$input) |

#### Returns

[`LogStream`](../modules/index.types.default.md#logstream)

[LogStream](../modules/index.types.md#logstream)

#### Defined in

dist/generated/types.d.ts:61506

___

### getLogTagVerbosityLevel

▸ **getLogTagVerbosityLevel**(`parameters`): [`logVerbosityLevel`](../modules/index.types.default.md#logverbositylevel-1)

Returns current verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getLogTagVerbosityLevel$DirectInput`](../modules/index.types.default.md#getlogtagverbositylevel$directinput) | [getLogTagVerbosityLevel$Input](../modules/index.types.md#getlogtagverbositylevel$input) |

#### Returns

[`logVerbosityLevel`](../modules/index.types.default.md#logverbositylevel-1)

[LogVerbosityLevel](../modules/index.types.md#logverbositylevel)

#### Defined in

dist/generated/types.d.ts:61541

___

### getLogTags

▸ **getLogTags**(`parameters`): [`logTags`](../modules/index.types.default.md#logtags-1)

Returns list of available TDLib internal log tags, for example, ["actor", "binlog", "connections", "notifications", "proxy"]. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getLogTags$DirectInput`](../modules/index.types.default.md#getlogtags$directinput) | [getLogTags$Input](../modules/index.types.md#getlogtags$input) |

#### Returns

[`logTags`](../modules/index.types.default.md#logtags-1)

[LogTags](../modules/index.types.md#logtags)

#### Defined in

dist/generated/types.d.ts:61527

___

### getLogVerbosityLevel

▸ **getLogVerbosityLevel**(`parameters`): [`logVerbosityLevel`](../modules/index.types.default.md#logverbositylevel-1)

Returns current verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getLogVerbosityLevel$DirectInput`](../modules/index.types.default.md#getlogverbositylevel$directinput) | [getLogVerbosityLevel$Input](../modules/index.types.md#getlogverbositylevel$input) |

#### Returns

[`logVerbosityLevel`](../modules/index.types.default.md#logverbositylevel-1)

[LogVerbosityLevel](../modules/index.types.md#logverbositylevel)

#### Defined in

dist/generated/types.d.ts:61520

___

### getMarkdownText

▸ **getMarkdownText**(`parameters`): [`formattedText`](../modules/index.types.default.md#formattedtext-1)

Replaces text entities with Markdown formatting in a human-friendly format. Entities that can't be represented in Markdown unambiguously are kept as is. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getMarkdownText$DirectInput`](../modules/index.types.default.md#getmarkdowntext$directinput) | [getMarkdownText$Input](../modules/index.types.md#getmarkdowntext$input) |

#### Returns

[`formattedText`](../modules/index.types.default.md#formattedtext-1)

[FormattedText](../modules/index.types.md#formattedtext)

#### Defined in

dist/generated/types.d.ts:61408

___

### getOption

▸ **getOption**(`parameters`): [`OptionValue`](../modules/index.types.default.md#optionvalue)

Returns the value of an option by its name. (Check the list of available options on https://core.telegram.org/tdlib/options.) Can be called before authorization. Can be called synchronously for options "version" and "commit_hash"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getOption$DirectInput`](../modules/index.types.default.md#getoption$directinput) | [getOption$Input](../modules/index.types.md#getoption$input) |

#### Returns

[`OptionValue`](../modules/index.types.default.md#optionvalue)

[OptionValue](../modules/index.types.md#optionvalue)

#### Defined in

dist/generated/types.d.ts:61478

___

### getPhoneNumberInfoSync

▸ **getPhoneNumberInfoSync**(`parameters`): [`phoneNumberInfo`](../modules/index.types.default.md#phonenumberinfo-1)

Returns information about a phone number by its prefix synchronously. getCountries must be called at least once after changing localization to the specified language if properly localized country information is expected. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getPhoneNumberInfoSync$DirectInput`](../modules/index.types.default.md#getphonenumberinfosync$directinput) | [getPhoneNumberInfoSync$Input](../modules/index.types.md#getphonenumberinfosync$input) |

#### Returns

[`phoneNumberInfo`](../modules/index.types.default.md#phonenumberinfo-1)

[PhoneNumberInfo](../modules/index.types.md#phonenumberinfo)

#### Defined in

dist/generated/types.d.ts:61492

___

### getPushReceiverId

▸ **getPushReceiverId**(`parameters`): [`pushReceiverId`](../modules/index.types.default.md#pushreceiverid-1)

Returns a globally unique push notification subscription identifier for identification of an account, which has received a push notification. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getPushReceiverId$DirectInput`](../modules/index.types.default.md#getpushreceiverid$directinput) | [getPushReceiverId$Input](../modules/index.types.md#getpushreceiverid$input) |

#### Returns

[`pushReceiverId`](../modules/index.types.default.md#pushreceiverid-1)

[PushReceiverId](../modules/index.types.md#pushreceiverid)

#### Defined in

dist/generated/types.d.ts:61471

___

### getTextEntities

▸ **getTextEntities**(`parameters`): [`textEntities`](../modules/index.types.default.md#textentities-1)

Returns all entities (mentions, hashtags, cashtags, bot commands, bank card numbers, URLs, and email addresses) found in the text. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getTextEntities$DirectInput`](../modules/index.types.default.md#gettextentities$directinput) | [getTextEntities$Input](../modules/index.types.md#gettextentities$input) |

#### Returns

[`textEntities`](../modules/index.types.default.md#textentities-1)

[TextEntities](../modules/index.types.md#textentities)

#### Defined in

dist/generated/types.d.ts:61387

___

### getThemeParametersJsonString

▸ **getThemeParametersJsonString**(`parameters`): [`text`](../modules/index.types.default.md#text-1)

Converts a themeParameters object to corresponding JSON-serialized string. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`getThemeParametersJsonString$DirectInput`](../modules/index.types.default.md#getthemeparametersjsonstring$directinput) | [getThemeParametersJsonString$Input](../modules/index.types.md#getthemeparametersjsonstring$input) |

#### Returns

[`text`](../modules/index.types.default.md#text-1)

[Text](../modules/index.types.md#text)

#### Defined in

dist/generated/types.d.ts:61457

___

### parseMarkdown

▸ **parseMarkdown**(`parameters`): [`formattedText`](../modules/index.types.default.md#formattedtext-1)

Parses Markdown entities in a human-friendly format, ignoring markup errors. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`parseMarkdown$DirectInput`](../modules/index.types.default.md#parsemarkdown$directinput) | [parseMarkdown$Input](../modules/index.types.md#parsemarkdown$input) |

#### Returns

[`formattedText`](../modules/index.types.default.md#formattedtext-1)

[FormattedText](../modules/index.types.md#formattedtext)

#### Defined in

dist/generated/types.d.ts:61401

___

### parseTextEntities

▸ **parseTextEntities**(`parameters`): [`formattedText`](../modules/index.types.default.md#formattedtext-1)

Parses Bold, Italic, Underline, Strikethrough, Spoiler, CustomEmoji, BlockQuote, Code, Pre, PreCode, TextUrl and MentionName entities from a marked-up text. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`parseTextEntities$DirectInput`](../modules/index.types.default.md#parsetextentities$directinput) | [parseTextEntities$Input](../modules/index.types.md#parsetextentities$input) |

#### Returns

[`formattedText`](../modules/index.types.default.md#formattedtext-1)

[FormattedText](../modules/index.types.md#formattedtext)

#### Defined in

dist/generated/types.d.ts:61394

___

### searchQuote

▸ **searchQuote**(`parameters`): [`foundPosition`](../modules/index.types.default.md#foundposition-1)

Searches for a given quote in a text. Returns found quote start position in UTF-16 code units. Returns a 404 error if the quote is not found. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`searchQuote$DirectInput`](../modules/index.types.default.md#searchquote$directinput) | [searchQuote$Input](../modules/index.types.md#searchquote$input) |

#### Returns

[`foundPosition`](../modules/index.types.default.md#foundposition-1)

[FoundPosition](../modules/index.types.md#foundposition)

#### Defined in

dist/generated/types.d.ts:61380

___

### searchStringsByPrefix

▸ **searchStringsByPrefix**(`parameters`): [`foundPositions`](../modules/index.types.default.md#foundpositions-1)

Searches specified query by word prefixes in the provided strings. Returns 0-based positions of strings that matched. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`searchStringsByPrefix$DirectInput`](../modules/index.types.default.md#searchstringsbyprefix$directinput) | [searchStringsByPrefix$Input](../modules/index.types.md#searchstringsbyprefix$input) |

#### Returns

[`foundPositions`](../modules/index.types.default.md#foundpositions-1)

[FoundPositions](../modules/index.types.md#foundpositions)

#### Defined in

dist/generated/types.d.ts:61485

___

### setLogStream

▸ **setLogStream**(`parameters`): [`ok`](../modules/index.types.default.md#ok-1)

Sets new log stream for internal logging of TDLib. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`setLogStream$DirectInput`](../modules/index.types.default.md#setlogstream$directinput) | [setLogStream$Input](../modules/index.types.md#setlogstream$input) |

#### Returns

[`ok`](../modules/index.types.default.md#ok-1)

[Ok](../modules/index.types.md#ok)

#### Defined in

dist/generated/types.d.ts:61499

___

### setLogTagVerbosityLevel

▸ **setLogTagVerbosityLevel**(`parameters`): [`ok`](../modules/index.types.default.md#ok-1)

Sets the verbosity level for a specified TDLib internal log tag. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`setLogTagVerbosityLevel$DirectInput`](../modules/index.types.default.md#setlogtagverbositylevel$directinput) | [setLogTagVerbosityLevel$Input](../modules/index.types.md#setlogtagverbositylevel$input) |

#### Returns

[`ok`](../modules/index.types.default.md#ok-1)

[Ok](../modules/index.types.md#ok)

#### Defined in

dist/generated/types.d.ts:61534

___

### setLogVerbosityLevel

▸ **setLogVerbosityLevel**(`parameters`): [`ok`](../modules/index.types.default.md#ok-1)

Sets the verbosity level of the internal logging of TDLib. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`setLogVerbosityLevel$DirectInput`](../modules/index.types.default.md#setlogverbositylevel$directinput) | [setLogVerbosityLevel$Input](../modules/index.types.md#setlogverbositylevel$input) |

#### Returns

[`ok`](../modules/index.types.default.md#ok-1)

[Ok](../modules/index.types.md#ok)

#### Defined in

dist/generated/types.d.ts:61513

___

### testReturnError

▸ **testReturnError**(`parameters`): [`error`](../modules/index.types.default.md#error-1)

Returns the specified error and ensures that the Error object is used; for testing only. Can be called synchronously

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | [`testReturnError$DirectInput`](../modules/index.types.default.md#testreturnerror$directinput) | [testReturnError$Input](../modules/index.types.md#testreturnerror$input) |

#### Returns

[`error`](../modules/index.types.default.md#error-1)

[Error](../modules/index.types.md#error)

#### Defined in

dist/generated/types.d.ts:61555
