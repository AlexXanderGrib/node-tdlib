[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / storageStatisticsFast$Input

# Type Alias: storageStatisticsFast$Input

> **storageStatisticsFast$Input**: `object`

Version of [storageStatisticsFast](storageStatisticsFast-1.md) for method parameters.

Contains approximate storage usage statistics, excluding files of unknown file type

## Type declaration

### \_

> `readonly` **\_**: `"storageStatisticsFast"`

### database\_size?

> `readonly` `optional` **database\_size**: [`int53`](int53-1.md)

Size of the database

### file\_count?

> `readonly` `optional` **file\_count**: [`int32`](int32-1.md)

Approximate number of files

### files\_size?

> `readonly` `optional` **files\_size**: [`int53`](int53-1.md)

Approximate total size of files, in bytes

### language\_pack\_database\_size?

> `readonly` `optional` **language\_pack\_database\_size**: [`int53`](int53-1.md)

Size of the language pack database

### log\_size?

> `readonly` `optional` **log\_size**: [`int53`](int53-1.md)

Size of the TDLib internal log

## Defined in

dist/generated/types.d.ts:49374
