[TDLib](../README.md) / [Modules](../modules.md) / [index](index.md) / <internal\>

# Module: <internal\>

## Table of contents

### Classes

- [InlineKeyboardBuilder](../classes/index._internal_.InlineKeyboardBuilder.md)
- [KeyboardBuilder](../classes/index._internal_.KeyboardBuilder.md)

### Interfaces

- [Observable](../interfaces/index._internal_.Observable.md)
- [StageAuthenticate](../interfaces/index._internal_.StageAuthenticate.md)
- [StageSelect](../interfaces/index._internal_.StageSelect.md)
- [StageTDLibParameters](../interfaces/index._internal_.StageTDLibParameters.md)
- [StageUser](../interfaces/index._internal_.StageUser.md)
- [Subscriber](../interfaces/index._internal_.Subscriber.md)
- [TDLib](../interfaces/index._internal_.TDLib.md)

### Type Aliases

- [AnyKeyof](index._internal_.md#anykeyof)
- [AuthenticateOptions](index._internal_.md#authenticateoptions)
- [Extendable](index._internal_.md#extendable)
- [KeyboardOptions](index._internal_.md#keyboardoptions)
- [Keys](index._internal_.md#keys)
- [OmitType](index._internal_.md#omittype)
- [OptionsReadable](index._internal_.md#optionsreadable)
- [OptionsWritable](index._internal_.md#optionswritable)
- [Subscription](index._internal_.md#subscription)
- [TDLibClient](index._internal_.md#tdlibclient)
- [TDLibOptionsReadable](index._internal_.md#tdliboptionsreadable)
- [TDLibOptionsWritable](index._internal_.md#tdliboptionswritable)
- [Unsubscribe](index._internal_.md#unsubscribe)
- [Waiter](index._internal_.md#waiter)
- [WritableKeys](index._internal_.md#writablekeys)
- [integer](index._internal_.md#integer)

## Type Aliases

### AnyKeyof

Ƭ **AnyKeyof**<`T`\>: keyof `T` \| `string` & {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

dist/options.d.ts:123

___

### AuthenticateOptions

Ƭ **AuthenticateOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signal?` | `AbortSignal` |

#### Defined in

dist/auth.d.ts:4

___

### Extendable

Ƭ **Extendable**<`T`\>: `T` & { `[key: string]`: `string` \| `boolean` \| `bigint` \| `number` \| `undefined`;  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

dist/options.d.ts:124

___

### KeyboardOptions

Ƭ **KeyboardOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `oneTime` | `boolean` |
| `persistent` | `boolean` |
| `personal` | `boolean` |
| `placeholder` | `string` |
| `resize` | `boolean` |

#### Defined in

dist/markup.d.ts:24

___

### Keys

Ƭ **Keys**: [`AnyKeyof`](index._internal_.md#anykeyof)<[`TDLibOptionsReadable`](index._internal_.md#tdliboptionsreadable)\>

#### Defined in

dist/options.d.ts:127

___

### OmitType

Ƭ **OmitType**<`T`\>: `Omit`<`T`, ``"_"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

dist/client.d.ts:5

___

### OptionsReadable

Ƭ **OptionsReadable**: [`Extendable`](index._internal_.md#extendable)<[`TDLibOptionsReadable`](index._internal_.md#tdliboptionsreadable)\>

#### Defined in

dist/options.d.ts:129

___

### OptionsWritable

Ƭ **OptionsWritable**: [`Extendable`](index._internal_.md#extendable)<[`TDLibOptionsWritable`](index._internal_.md#tdliboptionswritable)\>

#### Defined in

dist/options.d.ts:130

___

### Subscription

Ƭ **Subscription**<`T`\>: (`value`: `T`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`value`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`void`

#### Defined in

dist/event-bus.d.ts:1

___

### TDLibClient

Ƭ **TDLibClient**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `__type` | ``"TDLibClient"`` |

#### Defined in

dist/shared/client.d.ts:1

___

### TDLibOptionsReadable

Ƭ **TDLibOptionsReadable**: [`TDLibOptionsWritable`](index._internal_.md#tdliboptionswritable) & { `authentication_token?`: `string` ; `authorization_date?`: [`integer`](index._internal_.md#integer) ; `basic_group_size_max?`: [`integer`](index._internal_.md#integer) ; `call_connect_timeout_ms?`: [`integer`](index._internal_.md#integer) ; `call_packet_timeout_ms?`: [`integer`](index._internal_.md#integer) ; `can_archive_and_mute_new_chats_from_unknown_users?`: `boolean` ; `can_ignore_sensitive_content_restrictions?`: `boolean` ; `channel_bot_user_id?`: [`integer`](index._internal_.md#integer) ; `enabled_proxy_id?`: [`integer`](index._internal_.md#integer) ; `expect_blocking?`: `boolean` ; `favorite_stickers_limit?`: [`integer`](index._internal_.md#integer) ; `forwarded_message_count_max?`: [`integer`](index._internal_.md#integer) ; `group_anonymous_bot_user_id?`: [`integer`](index._internal_.md#integer) ; `message_caption_length_max?`: [`integer`](index._internal_.md#integer) ; `message_text_length_max?`: [`integer`](index._internal_.md#integer) ; `my_id?`: [`integer`](index._internal_.md#integer) ; `photo_search_bot_username?`: `string` ; `pinned_archived_chat_count_max?`: [`integer`](index._internal_.md#integer) ; `pinned_chat_count_max?`: [`integer`](index._internal_.md#integer) ; `replies_bot_chat_id?`: [`integer`](index._internal_.md#integer) ; `suggested_language_pack_id?`: `string` ; `suggested_video_note_audio_bitrate?`: [`integer`](index._internal_.md#integer) ; `suggested_video_note_length?`: [`integer`](index._internal_.md#integer) ; `suggested_video_note_video_bitrate?`: [`integer`](index._internal_.md#integer) ; `supergroup_size_max?`: [`integer`](index._internal_.md#integer) ; `t_me_url?`: `string` ; `telegram_service_notifications_chat_id?`: [`integer`](index._internal_.md#integer) ; `test_mode?`: `boolean` ; `unix_time?`: [`integer`](index._internal_.md#integer) ; `venue_search_bot_username?`: `string` ; `version?`: `string`  }

#### Defined in

dist/options.d.ts:59

___

### TDLibOptionsWritable

Ƭ **TDLibOptionsWritable**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `always_parse_markdown?` | `boolean` | If true, text entities will be automatically parsed in all inputMessageText objects |
| `animation_search_bot_username?` | `string` | Username of a bot which can be used in inline mode for animations search |
| `archive_and_mute_new_chats_from_unknown_users?` | `boolean` | If true, new chats from non-contacts will be automatically archived and muted. The option can be set only if the option “can_archive_and_mute_new_chats_from_unknown_users” is true. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device |
| `disable_animated_emoji?` | `boolean` | If true, animated emoji will be disabled and shown as plain emoji |
| `disable_contact_registered_notifications?` | `boolean` | If true, notifications about the user's contacts who have joined Telegram will be disabled. User will still receive the corresponding message in the private chat. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device |
| `disable_persistent_network_statistics?` | `boolean` | If true, persistent network statistics will be disabled, which significantly reduces disk usage |
| `disable_sent_scheduled_message_notifications?` | `boolean` | If true, notifications about outgoing scheduled messages that were sent will be disabled |
| `disable_time_adjustment_protection?` | `boolean` | If true, protection from external time adjustment will be disabled, which significantly reduces disk usage |
| `disable_top_chats?` | `boolean` | If true, support for top chats and statistics collection is disabled |
| `ignore_background_updates?` | `boolean` | If true, allows to skip all updates received while the TDLib instance was not running. The option does nothing if the database or secret chats are used |
| `ignore_default_disable_notification?` | `boolean` | If true, the disable_notification value specified in the request will be always used instead of the default value |
| `ignore_inline_thumbnails?` | `boolean` | If true, prevents file thumbnails sent by the server along with messages from being saved on the disk |
| `ignore_platform_restrictions?` | `boolean` | If true, chat and message restrictions specific to the currently used operating system will be ignored |
| `ignore_sensitive_content_restrictions?` | `boolean` | If true, sensitive content will be shown on all user devices. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device |
| `is_location_visible?` | `boolean` | If true, other users will be allowed to see the current user's location. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device |
| `language_pack_database_path?` | `string` | Path to a database for storing language pack strings, so that this database can be shared between different accounts. By default, language pack strings are stored only in memory. Changes of value of this option will be applied only after TDLib restart, so it should be set before call to setTdlibParameters. |
| `language_pack_id?` | `string` | Identifier of the currently used language pack from the current localization target |
| `localization_target?` | `string` | Name for the current localization target (currently supported: “android”, “android_x”, “ios”, “macos” and “tdesktop”) |
| `message_unload_delay?` | [`integer`](index._internal_.md#integer) | The maximum time messages are stored in memory before they are unloaded, 60-86400; in seconds. Defaults to 60 for users and 1800 for bots |
| `notification_group_count_max?` | [`integer`](index._internal_.md#integer) | Maximum number of notification groups to be shown simultaneously, 0-25 |
| `notification_group_size_max?` | [`integer`](index._internal_.md#integer) | Maximum number of simultaneously shown notifications in a group, 1-25. Defaults to 10 |
| `online?` | `boolean` | Online status of the current user |
| `prefer_ipv6?` | `boolean` | If true, IPv6 addresses will be preferred over IPv4 addresses |
| `use_pfs?` | `boolean` | If true, Perfect Forward Secrecy will be enabled for interaction with the Telegram servers for cloud chats |
| `use_quick_ack?` | `boolean` | If true, quick acknowledgement will be enabled for outgoing messages |
| `use_storage_optimizer?` | `boolean` | If true, the background storage optimizer will be enabled |
| `utc_time_offset?` | [`integer`](index._internal_.md#integer) | A UTC time offset used for splitting messages by days. The option is reset automatically on each TDLib instance launch, so it needs to be set manually only if the time offset is changed during execution. |

#### Defined in

dist/options.d.ts:3

___

### Unsubscribe

Ƭ **Unsubscribe**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

dist/event-bus.d.ts:2

___

### Waiter

Ƭ **Waiter**<`T`, `A`\>: `T` \| (...`parameters`: `A`) => `T` \| `PromiseLike`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] = [] |

#### Defined in

dist/auth.d.ts:7

___

### WritableKeys

Ƭ **WritableKeys**: [`AnyKeyof`](index._internal_.md#anykeyof)<[`TDLibOptionsWritable`](index._internal_.md#tdliboptionswritable)\>

#### Defined in

dist/options.d.ts:128

___

### integer

Ƭ **integer**: `bigint`

#### Defined in

dist/options.d.ts:2
