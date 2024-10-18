[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / downloadedFileCounts$Input

# Type Alias: downloadedFileCounts$Input

> **downloadedFileCounts$Input**: `object`

Version of [downloadedFileCounts](downloadedFileCounts.md) for method parameters.

Contains number of being downloaded and recently downloaded files found

## Type declaration

### \_

> `readonly` **\_**: `"downloadedFileCounts"`

### active\_count?

> `readonly` `optional` **active\_count**: [`int32`](int32.md)

Number of active file downloads found, including paused

### completed\_count?

> `readonly` `optional` **completed\_count**: [`int32`](int32.md)

Number of completed file downloads found

### paused\_count?

> `readonly` `optional` **paused\_count**: [`int32`](int32.md)

Number of paused file downloads found

## Defined in

dist/generated/types.d.ts:15346
