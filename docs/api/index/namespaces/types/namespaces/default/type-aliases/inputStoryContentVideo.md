[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / inputStoryContentVideo

# Type Alias: inputStoryContentVideo

> **inputStoryContentVideo**: `object`

A video story

## Type declaration

### \_

> **\_**: `"inputStoryContentVideo"`

### added\_sticker\_file\_ids

> **added\_sticker\_file\_ids**: [`vector`](vector.md)\<[`int32`](int32-1.md)\>

File identifiers of the stickers added to the video, if applicable

### duration

> **duration**: [`double`](double-1.md)

Precise duration of the video, in seconds; 0-60

### is\_animation

> **is\_animation**: [`Bool`](Bool.md)

True, if the video has no sound

### video

> **video**: [`InputFile`](InputFile.md)

Video to be sent. The video size must be 720x1280. The video must be streamable and stored in MPEG4 format, after encoding with x265 codec and key frames added each second

## Defined in

dist/generated/types.d.ts:32561
