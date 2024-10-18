[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / networkStatisticsEntryFile$Input

# Type Alias: networkStatisticsEntryFile$Input

> **networkStatisticsEntryFile$Input**: `object`

Version of [networkStatisticsEntryFile](networkStatisticsEntryFile.md) for method parameters.

Contains information about the total amount of data that was used to send and receive files

## Type declaration

### \_

> `readonly` **\_**: `"networkStatisticsEntryFile"`

### file\_type?

> `readonly` `optional` **file\_type**: [`FileType$Input`](FileType$Input.md) \| `null`

Type of the file the data is part of; pass null if the data isn't related to files

### network\_type?

> `readonly` `optional` **network\_type**: [`NetworkType$Input`](NetworkType$Input.md)

Type of the network the data was sent through. Call setNetworkType to maintain the actual network type

### received\_bytes?

> `readonly` `optional` **received\_bytes**: [`int53`](int53.md)

Total number of bytes received

### sent\_bytes?

> `readonly` `optional` **sent\_bytes**: [`int53`](int53.md)

Total number of bytes sent

## Defined in

dist/generated/types.d.ts:51111
