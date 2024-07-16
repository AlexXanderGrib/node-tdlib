[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / networkStatisticsEntryFile

# Type Alias: networkStatisticsEntryFile

> **networkStatisticsEntryFile**: `object`

Contains information about the total amount of data that was used to send and receive files

## Type declaration

### \_

> **\_**: `"networkStatisticsEntryFile"`

### file\_type

> **file\_type**: [`FileType`](FileType.md) \| `null`

Type of the file the data is part of; pass null if the data isn't related to files

### network\_type

> **network\_type**: [`NetworkType`](NetworkType.md)

Type of the network the data was sent through. Call setNetworkType to maintain the actual network type

### received\_bytes

> **received\_bytes**: [`int53`](int53-1.md)

Total number of bytes received

### sent\_bytes

> **sent\_bytes**: [`int53`](int53-1.md)

Total number of bytes sent

## Defined in

dist/generated/types.d.ts:49499
