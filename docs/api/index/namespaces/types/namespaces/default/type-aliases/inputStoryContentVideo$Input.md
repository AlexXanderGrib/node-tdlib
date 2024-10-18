[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputStoryContentVideo$Input

# Type Alias: inputStoryContentVideo$Input

> **inputStoryContentVideo$Input**: `object`

Version of [inputStoryContentVideo](inputStoryContentVideo.md) for method parameters.

A video story

## Type declaration

### \_

> `readonly` **\_**: `"inputStoryContentVideo"`

### added\_sticker\_file\_ids?

> `readonly` `optional` **added\_sticker\_file\_ids**: [`vector$Input`](vector$Input.md)\<[`int32`](int32.md)\>

File identifiers of the stickers added to the video, if applicable

### cover\_frame\_timestamp?

> `readonly` `optional` **cover\_frame\_timestamp**: [`double`](double.md)

Timestamp of the frame, which will be used as video thumbnail

### duration?

> `readonly` `optional` **duration**: [`double`](double.md)

Precise duration of the video, in seconds; 0-60

### is\_animation?

> `readonly` `optional` **is\_animation**: [`Bool$Input`](Bool$Input.md)

True, if the video has no sound

### video?

> `readonly` `optional` **video**: [`InputFile$Input`](InputFile$Input.md)

Video to be sent. The video size must be 720x1280. The video must be streamable and stored in MPEG4 format, after encoding with x265 codec and key frames added each second

## Defined in

dist/generated/types.d.ts:33862
