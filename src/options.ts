import {
  $AsyncApi,
  OptionValue,
  OptionValue$Type,
  typename
} from "./generated/types";
import { warnOnce } from "./warn";

/**
 * To update this types run scripts/scrape-tdlib-options.js
 * on https://core.telegram.org/tdlib/options
 *
 * and copy `readable` and `writable` here
 *
 */

type integer = bigint;
type TDLibOptionsWritable = {
  /** If true, text entities will be automatically parsed in all inputMessageText objects */
  readonly always_parse_markdown?: boolean;
  /** If true, animated emoji will be disabled and shown as plain emoji */
  readonly disable_animated_emoji?: boolean;
  /** If true, notifications about the user's contacts who have joined Telegram will be disabled. User will still receive the corresponding message in the private chat. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device */
  readonly disable_contact_registered_notifications?: boolean;
  /** Since TDLib 1.8.24. If true, then network statistics will be completely disabled */
  readonly disable_network_statistics?: boolean;
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
  /** Since TDLib 1.8.24. If true, document file names will be ignored and numerical names will be used instead */
  readonly ignore_file_names?: boolean;
  /** If true, prevents file thumbnails sent by the server along with messages from being saved on the disk */
  readonly ignore_inline_thumbnails?: boolean;
  /** If true, chat and message restrictions specific to the currently used operating system will be ignored */
  readonly ignore_platform_restrictions?: boolean;
  /** If true, sensitive content will be shown on all user devices. getOption needs to be called explicitly to fetch the latest value of the option, changed from another device */
  readonly ignore_sensitive_content_restrictions?: boolean;
  /** TDLib 1.8.36-1.8.44. If true, added paid reactions are anonymous by default. If false, they are non-anonymous. */
  readonly is_paid_reaction_anonymous?: boolean;
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
  /** Since TDLib 1.8.24. If true, then all pinned messages will be treated as mentions even posted without notification of chat members */
  readonly process_pinned_messages_as_mentions?: boolean;
  /** If true, Perfect Forward Secrecy will be enabled for interaction with the Telegram servers for cloud chats */
  readonly use_pfs?: boolean;
  /** If true, quick acknowledgement will be enabled for outgoing messages */
  readonly use_quick_ack?: boolean;
  /** If true, the background storage optimizer will be enabled */
  readonly use_storage_optimizer?: boolean;
  /** A UTC time offset used for splitting messages by days. The option is reset automatically on each TDLib instance launch, so it needs to be set manually only if the time offset is changed during execution. */
  readonly utc_time_offset?: integer;
}

type TDLibOptionsReadable = TDLibOptionsWritable & {
  /** Since TDLib 1.8.24. The maximum number of active stories posted by the current user */
  readonly active_story_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of added shareable chat folders for the current user */
  readonly added_shareable_chat_folder_count_max?: integer;
  /** Since TDLib 1.8.41. The maximum commission that can be used for an affiliate program */
  readonly affiliate_program_commission_per_mille_max?: integer;
  /** Since TDLib 1.8.41. The minimum commission that can be used for an affiliate program */
  readonly affiliate_program_commission_per_mille_min?: integer;
  /** Username of a bot which can be used in inline mode for animations search */
  readonly animation_search_bot_username?: string;
  /** Since TDLib 1.8.24. User identifier of the Telegram Anti-Spam bot */
  readonly anti_spam_bot_user_id?: integer;
  /** An authentication token to be used on subsequent authorizations */
  readonly authentication_token?: string;
  /** Point in time (Unix timestamp) when authorization was received */
  readonly authorization_date?: integer;
  /** Maximum number of members in a basic group */
  readonly basic_group_size_max?: integer;
  /** Since TDLib 1.8.24. The maximum allowed length of the current user's bio */
  readonly bio_length_max?: integer;
  /** Since TDLib 1.8.34. The maximum number of media previews that can be added for a bot */
  readonly bot_media_preview_count_max?: integer;
  /** Since TDLib 1.8.42. The maximum length of custom description for verification provided by a third-party organization */
  readonly bot_verification_custom_description_length_max?: integer;
  /** Since TDLib 1.8.28. The maximum number of created short chat links by a Telegram Business account */
  readonly business_chat_link_count_max?: integer;
  /** Since TDLib 1.8.28. The maximum allowed length of the start page message of a Telegram Business account */
  readonly business_start_page_message_length_max?: integer;
  /** Since TDLib 1.8.28. The maximum allowed length of the start page title of a Telegram Business account */
  readonly business_start_page_title_length_max?: integer;
  /** Maximum time to wait for call connection creation to be passed to libtgvoip */
  readonly call_connect_timeout_ms?: integer;
  /** Maximum time to wait for call packet delivery to be passed to libtgvoip */
  readonly call_packet_timeout_ms?: integer;
  /** Since TDLib 1.8.48. If true, the user can accept calls from this device */
  readonly can_accept_calls?: boolean;
  /** If true, the option “archive_and_mute_new_chats_from_unknown_users” can be changed */
  readonly can_archive_and_mute_new_chats_from_unknown_users?: boolean;
  /** Since TDLib 1.8.46. If true, the user can enable paid messages */
  readonly can_enable_paid_messages?: boolean;
  /** Since TDLib 1.8.34. If true, Telegram Stars can be gifted to other users */
  readonly can_gift_stars?: boolean;
  /** If true, the option “ignore_sensitive_content_restrictions” can be changed */
  readonly can_ignore_sensitive_content_restrictions?: boolean;
  /** Since TDLib 1.8.34. If true, the current weather must be preloaded before adding the media area to the story. Otherwise, weather must be loaded only after the user has chosen weather media area. */
  readonly can_preload_weather?: boolean;
  /** Since TDLib 1.8.28. If true, then the current user can change privacy settings for new chats */
  readonly can_set_new_chat_privacy_settings?: boolean;
  /** Since TDLib 1.8.24. If true, then the current user can use text entities in story captions */
  readonly can_use_text_entities_in_story_caption?: boolean;
  /** Since TDLib 1.8.28. If true, then revenue from sponsored messages in chats can be withdrawn */
  readonly can_withdraw_chat_revenue?: boolean;
  /** Identifier of the bot which is shown as the sender of messages sent on behalf of channels when viewed from an outdated client */
  readonly channel_bot_user_id?: integer;
  /** Since TDLib 1.8.24. The maximum number of manually chosen reactions for a chat */
  readonly chat_available_reaction_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum boost level available to a chat */
  readonly chat_boost_level_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of always included or excluded chats in a chat folder for the current user */
  readonly chat_folder_chosen_chat_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of chat folders that the current user can have */
  readonly chat_folder_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of shareable chat folders with owned invite links */
  readonly chat_folder_invite_link_count_max?: integer;
  /** Since TDLib 1.8.24. The minimum interval between calls to getChatFolderNewChats in shareable chat folders */
  readonly chat_folder_new_chats_update_period?: integer;
  /** Since TDLib 1.8.24. If known, the hash of the source code commit that was used to build TDLib. Can be received synchronously. */
  readonly commit_hash?: string;
  /** Identifier of the enabled proxy */
  readonly enabled_proxy_id?: integer;
  /** If true, access to Telegram is likely blocked for the user */
  readonly expect_blocking?: boolean;
  /** Since TDLib 1.8.30. The maximum allowed length of a fact-check */
  readonly fact_check_length_max?: integer;
  /** Maximum number of favorite stickers */
  readonly favorite_stickers_limit?: integer;
  /** Maximum number of forwarded messages per one request */
  readonly forwarded_message_count_max?: integer;
  /** Since TDLib 1.8.24. If true, then a suggestion to gift Telegram Premium needs to be shown in the attachment menu if appropriate */
  readonly gift_premium_from_attachment_menu?: boolean;
  /** Since TDLib 1.8.24. If true, then a suggestion to gift Telegram Premium needs to be shown in the input field if appropriate */
  readonly gift_premium_from_input_field?: boolean;
  /** Since TDLib 1.8.49. The amount of Telegram Stars received by the user for each 1000 Telegram Stars paid for gifts bought from them */
  readonly gift_resale_earnings_per_mille?: integer;
  /** Since TDLib 1.8.49. The maximum price in Telegram Stars for a gift that is available for resale */
  readonly gift_resale_star_count_max?: integer;
  /** Since TDLib 1.8.49. The minimum price in Telegram Stars for a gift that is available for resale */
  readonly gift_resale_star_count_min?: integer;
  /** Since TDLib 1.8.38. The number of seconds after gift receiving for which it can be sold for Telegram Stars */
  readonly gift_sell_period?: integer;
  /** Since TDLib 1.8.37. The maximum length of a message added to a sent gift */
  readonly gift_text_length_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of additional chats that can be added to a giveaway */
  readonly giveaway_additional_chat_count_max?: integer;
  /** Since TDLib 1.8.24. The number of boosts that received by the channel for each giveaway prize */
  readonly giveaway_boost_count_per_premium?: integer;
  /** Since TDLib 1.8.24. The maximum number of countries that can be added to a giveaway */
  readonly giveaway_country_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of additional chats that can be added to a giveaway */
  readonly giveaway_duration_max?: integer;
  /** Identifier of the bot which is shown as the sender of anonymous messages in groups when viewed from an outdated client */
  readonly group_anonymous_bot_user_id?: integer;
  /** Since TDLib 1.8.48. The maximum number of participants in a group call that is not bound to a chat */
  readonly group_call_participant_count_max?: integer;
  /** Since TDLib 1.8.24. If true, then the current user subscribed to Telegram Premium */
  readonly is_premium?: boolean;
  /** Since TDLib 1.8.24. If true, then the current user can subscribe to Telegram Premium. Otherwise, all premium-related features must be hidden */
  readonly is_premium_available?: boolean;
  /** Maximum length of a message caption */
  readonly message_caption_length_max?: integer;
  /** Since TDLib 1.8.24. The maximum length of quote from the replied message */
  readonly message_reply_quote_length_max?: integer;
  /** Maximum length of a message text */
  readonly message_text_length_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of stories that can be posted per month by the current user */
  readonly monthly_sent_story_count_max?: integer;
  /** Identifier of the current user */
  readonly my_id?: integer;
  /** Since TDLib 1.8.24. The maximum number of saved notification sounds */
  readonly notification_sound_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum duration of an audio that can be used as a notification sound */
  readonly notification_sound_duration_max?: integer;
  /** Since TDLib 1.8.24. The maximum size of the audio file that can be used as a notification sound */
  readonly notification_sound_size_max?: integer;
  /** Since TDLib 1.8.32. The maximum price of a paid post in Telegram Stars */
  readonly paid_media_message_star_count_max?: integer;
  /** Since TDLib 1.8.46. The maximum number of Telegram Stars that can be set as the price for paid messages */
  readonly paid_message_star_count_max?: integer;
  /** Since TDLib 1.8.46. The amount of Telegram Stars received by the user or the supergroup for each 1000 Telegram Stars paid for their incoming messages */
  readonly paid_message_earnings_per_mille?: integer;
  /** Since TDLib 1.8.35. The maximum number of Telegram Stars that can be added as paid reaction to a message in one request */
  readonly paid_reaction_star_count_max?: integer;
  /** Maximum number of pinned cloud chats in the Archive chat list for the current user. The same amount of secret chats can be pinned locally */
  readonly pinned_archived_chat_count_max?: integer;
  /** Maximum number of pinned cloud chats in the Main chat list for the current user. The same amount of secret chats can be pinned locally */
  readonly pinned_chat_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of pinned forum topics */
  readonly pinned_forum_topic_count_max?: integer;
  /** Since TDLib 1.8.46. The maximum number of pinned unique gifts */
  readonly pinned_gift_count_max?: integer;
  /** Since TDLib 1.8.24. The maximum number of pinned topics in Saved Messages for the current user */
  readonly pinned_saved_messages_topic_count_max?: integer;
  /** Since TDLib 1.8.29. The maximum number of pinned stories on a chat page */
  readonly pinned_story_count_max?: integer;
  /** Username of a bot which can be used in inline mode for photos search */
  readonly photo_search_bot_username?: string;
  /** Since TDLib 1.8.28. Approximate number of times file download speed will increase if the user subscribes to Telegram Premium */
  readonly premium_download_speedup?: integer;
  /** Since TDLib 1.8.24. The number of boosts that is obtained by gifting Telegram Premium to another user */
  readonly premium_gift_boost_count?: integer;
  /** Since TDLib 1.8.28. Approximate number of times file upload speed will increase if the user subscribes to Telegram Premium */
  readonly premium_upload_speedup?: integer;
  /** Since TDLib 1.8.28. The maximum number of quick reply shortcuts that can be created by a Telegram Business account */
  readonly quick_reply_shortcut_count_max?: integer;
  /** Since TDLib 1.8.28. The maximum number of messages that can be added to a quick reply shortcut by a Telegram Business account */
  readonly quick_reply_shortcut_message_count_max?: integer;
  /** Identifier of the @replies bot */
  readonly replies_bot_chat_id?: integer;
  /** Since TDLib 1.8.31. The minimum number of Telegram Stars that can be withdrawn */
  readonly star_withdrawal_count_min?: integer;
  /** Since TDLib 1.8.24. The maximum length of story caption for the current user */
  readonly story_caption_length_max?: integer;
  /** Since TDLib 1.8.31. The maximum number of link areas that can be added to a story by Telegram Premium users */
  readonly story_link_area_count_max?: integer;
  /** Since TDLib 1.8.24. The number of seconds that must pass between before Stealth Mode can be enabled again */
  readonly story_stealth_mode_cooldown_period?: integer;
  /** Since TDLib 1.8.24. The number of seconds in the future the Stealth Mode will last */
  readonly story_stealth_mode_future_period?: integer;
  /** Since TDLib 1.8.24. The number of seconds in the past during which all views of stories from the current user will be hidden if Stealth Mode is enabled */
  readonly story_stealth_mode_past_period?: integer;
  /** Since TDLib 1.8.24. The maximum number of suggested reaction areas that can be added to a story */
  readonly story_suggested_reaction_area_count_max?: integer;
  /** Since TDLib 1.8.24. The number of seconds after story expiration date for which story viewers still can be received */
  readonly story_viewers_expiration_delay?: integer;
  /** Since TDLib 1.8.35. The maximum number of Telegram Stars that can be asked for monthly subscription to a chat */
  readonly subscription_star_count_max?: integer;
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
  /** Since TDLib 1.8.35. The number of US dollars that can be received by withdrawing 1000 Telegram Stars */
  readonly thousand_star_to_usd_rate?: integer;
  /** Since TDLib 1.8.45. A prefix of the URL that can be used to get information about a TON blockchain address */
  readonly ton_blockchain_explorer_url?: string;
  /** An estimation of the current Unix timestamp. The option will not be updated automatically unless the difference between the previous estimation and the locally available monotonic clocks changes significantly */
  readonly unix_time?: integer;
  /** Since TDLib 1.8.35. The number of US dollars needed to buy 1000 Telegram Stars */
  readonly usd_to_thousand_star_rate?: integer;
  /** Username of a bot which can be used in inline mode for venues search */
  readonly venue_search_bot_username?: string;
  /** Since TDLib 1.8.37. Identifier of the Verification Codes chat with codes from Telegram Gateway */
  readonly verification_codes_bot_chat_id?: integer;
  /** TDLib version. This options is guaranteed to come before all other updates. Can be received synchronously. */
  readonly version?: string;
  /** Since TDLib 1.8.32. A space-separated list of URL protocols that are allowed to be open by the call to web_app_open_link from Web Apps. */
  readonly web_app_allowed_protocols?: string;
  /** Since TDLib 1.8.24. The maximum number of stories that can be posted per week by the current user */
  readonly weekly_sent_story_count_max?: integer;
}

type AnyKeyof<T extends {}> = keyof T | (string & {});
type Extendable<T extends {}> = T &
  Readonly<Record<string, string | boolean | bigint | number | undefined>>;

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
   * **Waits for `setTdlibParameters` to be called to respond.**
   * Exception: "version", "commit_hash"
   *
   * @see {@link https://t.me/tdlibchat/155412}
   * @see {@link https://core.telegram.org/tdlib/options}
   * @template {Keys} T
   * @param {T} key
   * @returns {Promise<*>}  {Promise<TelegramOptionsExtended[T]>}
   * @memberof TDLibOptions
   */
  async get<T extends Keys>(key: T): Promise<OptionsReadable[T]> {
    const warner = setTimeout(() => {
      warnOnce(
        "W001",
        "tdlibOptions.get() takes too long to respond. This method waits for tdlibParameters to be passed. Use api.setTdlibParameters()"
      );
    }, 1000);

    const value = await this._api
      .getOption({ name: key })
      .catch((): OptionValue => ({ [typename]: OptionValue$Type.Empty }))
      .finally(() => clearTimeout(warner));

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
   * **Waits for `setTdlibParameters` to be called to respond.**
   *
   * @see {@link https://t.me/tdlibchat/155412}
   * @see {@link https://core.telegram.org/tdlib/options}
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

    const warner = setTimeout(() => {
      warnOnce(
        "W002",
        "tdlibOptions.set() takes too long to respond. This method waits for tdlibParameters to be passed. Use api.setTdlibParameters()"
      );
    }, 1000);

    await this._api
      .setOption({ name: key, value: option })
      .finally(() => clearTimeout(warner));
  }

  /**
   * **Waits for `setTdlibParameters` to be called to respond.**
   *
   * @see {@link https://t.me/tdlibchat/155412}
   * @see {@link https://core.telegram.org/tdlib/options}
   * @param {Keys} key
   * @memberof TDLibOptions
   * @returns {Promise<void>}
   */
  async delete(key: Keys): Promise<void> {
    await this.set(key, undefined);
  }

  /**
   * **Waits for `setTdlibParameters` to be called to respond.**
   *
   * @see {@link https://t.me/tdlibchat/155412}
   * @see {@link https://core.telegram.org/tdlib/options}
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
