[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / autoDownloadSettings

# Type Alias: autoDownloadSettings

> **autoDownloadSettings**: `object`

Contains auto-download settings

## Type declaration

### \_

> **\_**: `"autoDownloadSettings"`

### is\_auto\_download\_enabled

> **is\_auto\_download\_enabled**: [`Bool`](Bool.md)

True, if the auto-download is enabled

### max\_other\_file\_size

> **max\_other\_file\_size**: [`int53`](int53-1.md)

The maximum size of other file types to be auto-downloaded, in bytes

### max\_photo\_file\_size

> **max\_photo\_file\_size**: [`int32`](int32-1.md)

The maximum size of a photo file to be auto-downloaded, in bytes

### max\_video\_file\_size

> **max\_video\_file\_size**: [`int53`](int53-1.md)

The maximum size of a video file to be auto-downloaded, in bytes

### preload\_large\_videos

> **preload\_large\_videos**: [`Bool`](Bool.md)

True, if the beginning of video files needs to be preloaded for instant playback

### preload\_next\_audio

> **preload\_next\_audio**: [`Bool`](Bool.md)

True, if the next audio track needs to be preloaded while the user is listening to an audio file

### preload\_stories

> **preload\_stories**: [`Bool`](Bool.md)

True, if stories needs to be preloaded

### use\_less\_data\_for\_calls

> **use\_less\_data\_for\_calls**: [`Bool`](Bool.md)

True, if "use less data for calls" option needs to be enabled

### video\_upload\_bitrate

> **video\_upload\_bitrate**: [`int32`](int32-1.md)

The maximum suggested bitrate for uploaded videos, in kbit/s

## Defined in

dist/generated/types.d.ts:49641
