import {
  $AsyncApi,
  OptionValue,
  OptionValue$Type,
  typename
} from "./generated/types";

type integer = bigint;
type TDLibOptionsWritable = {
  /** If true, text entities will be automatically parsed in all inputMessageText objects */
  readonly always_parse_markdown?: boolean;
  /** If true, new chats from non-contacts will be automatically archived and muted. The option can be set only if the option “can_archive_and_mute_new_chats_from_unknown_users” is true. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device */
  readonly archive_and_mute_new_chats_from_unknown_users?: boolean;
  /** If true, animated emoji will be disabled and shown as plain emoji */
  readonly disable_animated_emoji?: boolean;
  /** If true, notifications about the user's contacts who have joined Telegram will be disabled. User will still receive the corresponding message in the private chat. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device */
  readonly disable_contact_registered_notifications?: boolean;
  /** If true, persistent network statistics will be disabled, which significantly reduces disk usage */
  readonly disable_persistent_network_statistics?: boolean;
  /** If true, notifications about outgoing scheduled messages that were sent will be disabled */
  readonly disable_sent_scheduled_message_notifications?: boolean;
  /** If true, protection from external time adjustment will be disabled, which significantly reduces disk usage */
  readonly disable_time_adjustment_protection?: boolean;
  /** If true, support for top chats and statistics collection is disabled */
  readonly disable_top_chats?: boolean;
  /** If true, allows to skip all updates received while the TDLib instance was not running. The option does nothing if the database or secret chats are used */
  readonly ignore_background_updates?: boolean;
  /** If true, the disable_notification value specified in the request will be always used instead of the default value */
  readonly ignore_default_disable_notification?: boolean;
  /** If true, prevents file thumbnails sent by the server along with messages from being saved on the disk */
  readonly ignore_inline_thumbnails?: boolean;
  /** If true, chat and message restrictions specific to the currently used operating system will be ignored */
  readonly ignore_platform_restrictions?: boolean;
  /** If true, sensitive content will be shown on all user devices. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device */
  readonly ignore_sensitive_content_restrictions?: boolean;
  /** If true, other users will be allowed to see the current user's location. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device */
  readonly is_location_visible?: boolean;
  /** Path to a database for storing language pack strings, so that this database can be shared between different accounts. By default, language pack strings are stored only in memory. Changes of value of this option will be applied only after TDLib restart, so it should be set before call to setTdlibParameters. */
  readonly language_pack_database_path?: string;
  /** Identifier of the currently used language pack from the current localization target */
  readonly language_pack_id?: string;
  /** Name for the current localization target (currently supported: “android”, “android_x”, “ios”, “macos” and “tdesktop”) */
  readonly localization_target?: string;
  /** The maximum time messages are stored in memory before they are unloaded, 60-86400; in seconds. Defaults to 60 for users and 1800 for bots */
  readonly message_unload_delay?: integer;
  /** Maximum number of notification groups to be shown simultaneously, 0-25 */
  readonly notification_group_count_max?: integer;
  /** Maximum number of simultaneously shown notifications in a group, 1-25. Defaults to 10 */
  readonly notification_group_size_max?: integer;
  /** Online status of the current user */
  readonly online?: boolean;
  /** If true, IPv6 addresses will be preferred over IPv4 addresses */
  readonly prefer_ipv6?: boolean;
  /** If true, Perfect Forward Secrecy will be enabled for interaction with the Telegram servers for cloud chats */
  readonly use_pfs?: boolean;
  /** If true, quick acknowledgement will be enabled for outgoing messages */
  readonly use_quick_ack?: boolean;
  /** If true, the background storage optimizer will be enabled */
  readonly use_storage_optimizer?: boolean;
  /** A UTC time offset used for splitting messages by days. The option is reset automatically on each TDLib instance launch, so it needs to be set manually only if the time offset is changed during execution. */
  readonly utc_time_offset?: integer;
  /** Username of a bot which can be used in inline mode for animations search */
  readonly animation_search_bot_username?: string;
};

type TDLibOptionsReadable = TDLibOptionsWritable & {
  /** An authentication token to be used on subsequent authorizations and received when logging out */
  readonly authentication_token?: string;
  /** Point in time (Unix timestamp) when authorization was received */
  readonly authorization_date?: integer;
  /** Maximum number of members in a basic group */
  readonly basic_group_size_max?: integer;
  /** Maximum time to wait for call connection creation to be passed to libtgvoip */
  readonly call_connect_timeout_ms?: integer;
  /** Maximum time to wait for call packet delivery to be passed to libtgvoip */
  readonly call_packet_timeout_ms?: integer;
  /** If true, the option “archive_and_mute_new_chats_from_unknown_users” can be changed */
  readonly can_archive_and_mute_new_chats_from_unknown_users?: boolean;
  /** If true, the option “ignore_sensitive_content_restrictions” can be changed */
  readonly can_ignore_sensitive_content_restrictions?: boolean;
  /** Identifier of the bot which is shown as the sender of messages sent on behalf of channels when viewed from an outdated client */
  readonly channel_bot_user_id?: integer;
  /** Identifier of the enabled proxy */
  readonly enabled_proxy_id?: integer;
  /** If true, access to Telegram is likely blocked for the user */
  readonly expect_blocking?: boolean;
  /** Maximum number of favorite stickers */
  readonly favorite_stickers_limit?: integer;
  /** Maximum number of forwarded messages per one request */
  readonly forwarded_message_count_max?: integer;
  /** Identifier of the bot which is shown as the sender of anonymous messages in groups when viewed from an outdated client */
  readonly group_anonymous_bot_user_id?: integer;
  /** Maximum length of a message caption */
  readonly message_caption_length_max?: integer;
  /** Maximum length of a message text */
  readonly message_text_length_max?: integer;
  /** Identifier of the current user */
  readonly my_id?: integer;
  /** Maximum number of pinned cloud chats in the Archive chat list. The same amount of secret chats can be pinned locally */
  readonly pinned_archived_chat_count_max?: integer;
  /** Maximum number of pinned cloud chats in the Main chat list. The same amount of secret chats can be pinned locally */
  readonly pinned_chat_count_max?: integer;
  /** Username of a bot which can be used in inline mode for photos search */
  readonly photo_search_bot_username?: string;
  /** Identifier of the @replies bot */
  readonly replies_bot_chat_id?: integer;
  /** Identifier of the language pack, suggested for the user by the server */
  readonly suggested_language_pack_id?: string;
  /** Suggested bit rate for audio encoding in video notes, in kbit/s */
  readonly suggested_video_note_audio_bitrate?: integer;
  /** Suggested width and height of the video in video notes */
  readonly suggested_video_note_length?: integer;
  /** Suggested bit rate for video encoding in video notes, in kbit/s */
  readonly suggested_video_note_video_bitrate?: integer;
  /** Maximum number of members in a supergroup */
  readonly supergroup_size_max?: integer;
  /** Current value of t.me URL, i.e. https://t.me/ */
  readonly t_me_url?: string;
  /** Identifier of the Telegram Service Notifications chat */
  readonly telegram_service_notifications_chat_id?: integer;
  /** If true, the test environment is being used instead of the production environment */
  readonly test_mode?: boolean;
  /** An estimation of the current Unix timestamp. The option will not be updated automatically unless the difference between the previous estimation and the locally available monotonic clocks changes significantly */
  readonly unix_time?: integer;
  /** Username of a bot which can be used in inline mode for venues search */
  readonly venue_search_bot_username?: string;
  /** TDLib version. This options is guaranteed to come before all other updates since TDLib 1.4.0 */
  readonly version?: string;
};

type AnyKeyof<T extends {}> = keyof T | (string & {});
type Extendable<T extends {}> = T & Readonly<Record<string, string | boolean | bigint | number | undefined>>;

type Keys = AnyKeyof<TDLibOptionsReadable>;
type WritableKeys = AnyKeyof<TDLibOptionsWritable>;

type OptionsReadable = Extendable<TDLibOptionsReadable>;
type OptionsWritable = Extendable<TDLibOptionsWritable>;

/**
 *
 * @see https://core.telegram.org/tdlib/options
 * @export
 * @class TDLibOptions
 */
export class TDLibOptions {
  /**
   *
   *
   * @static
   * @param {$AsyncApi} api
   * @returns {*}  {TDLibOptions}
   * @memberof TDLibOptions
   * @deprecated Removed instance caching, use `new TDLibOptions()` instead
   */
  static for(api: $AsyncApi): TDLibOptions {
    return new TDLibOptions(api);
  }

  private readonly _api: $AsyncApi;

  /**
   * Creates an instance of TDLibOptions.
   * @param {$AsyncApi} api
   * @memberof TDLibOptions
   */
  constructor(api: $AsyncApi) {
    this._api = api;
  }

  /**
   *
   *
   * @template {Keys} T
   * @param {T} key
   * @returns {Promise<*>}  {Promise<TelegramOptionsExtended[T]>}
   * @memberof TDLibOptions
   */
  async get<T extends Keys>(key: T): Promise<OptionsReadable[T]> {
    const value = await this._api
      .getOption({ name: key })
      .catch((): OptionValue => ({ [typename]: OptionValue$Type.Empty }));

    switch (value._) {
      case OptionValue$Type.Integer: {
        return BigInt(value.value) as any;
      }

      case OptionValue$Type.Empty: {
        return undefined;
      }

      default: {
        return value.value as any;
      }
    }
  }

  /**
   *
   *
   * @template {Keys} T
   * @param {T} key
   * @param {*} value
   * @returns {Promise<void>}  {Promise<void>}
   * @memberof TDLibOptions
   */
  async set<T extends WritableKeys>(
    key: T,
    value: OptionsWritable[T]
  ): Promise<void> {
    let option: OptionValue = { [typename]: OptionValue$Type.Empty };

    switch (typeof value) {
      case "number":
      case "bigint": {
        option = {
          [typename]: OptionValue$Type.Integer,
          value: BigInt(value).toString()
        };
        break;
      }

      case "boolean": {
        option = { [typename]: OptionValue$Type.Boolean, value };
        break;
      }

      case "string": {
        option = { [typename]: OptionValue$Type.String, value };
        break;
      }
    }

    await this._api.setOption({ name: key, value: option });
  }

  /**
   *
   *
   * @param {Keys} key
   * @memberof TDLibOptions
   * @returns {Promise<void>}
   */
  async delete(key: Keys): Promise<void> {
    await this.set(key, undefined);
  }

  /**
   *
   *
   * @param {OptionsWritable} values
   * @memberof TDLibOptions
   * @returns {Promise<void>}
   */
  async assign(values: OptionsWritable): Promise<void> {
    const promises = Object.entries(values).map(([key, value]) =>
      this.set(key, value)
    );

    await Promise.all(promises);
  }
}
