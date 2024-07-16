[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / translateText$Input

# Type Alias: translateText$Input

> **translateText$Input**: `object`

Translates a text to the given language. If the current user is a Telegram Premium user, then text formatting is preserved

## Type declaration

### \_

> `readonly` **\_**: `"translateText"`

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Text to translate

### to\_language\_code?

> `readonly` `optional` **to\_language\_code**: `string`

Language code of the language to which the message is translated. Must be one of

- "af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "zh-CN", "zh", "zh-Hans", "zh-TW", "zh-Hant", "co", "hr", "cs", "da", "nl", "en", "eo", "et",

- "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "he", "iw", "hi", "hmn", "hu", "is", "ig", "id", "in", "ga", "it", "ja", "jv", "kn", "kk", "km", "rw", "ko",

- "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "ny", "or", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr",

- "st", "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tl", "tg", "ta", "tt", "te", "th", "tr", "tk", "uk", "ur", "ug", "uz", "vi", "cy", "xh", "yi", "ji", "yo", "zu"

## Defined in

dist/generated/types.d.ts:77802
