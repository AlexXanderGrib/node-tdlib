[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / networkStatisticsEntryCall

# Type Alias: networkStatisticsEntryCall

> **networkStatisticsEntryCall**: `object`

Contains information about the total amount of data that was used for calls

## Type declaration

### \_

> **\_**: `"networkStatisticsEntryCall"`

### duration

> **duration**: [`double`](double.md)

Total call duration, in seconds

### network\_type

> **network\_type**: [`NetworkType`](NetworkType.md)

Type of the network the data was sent through. Call setNetworkType to maintain the actual network type

### received\_bytes

> **received\_bytes**: [`int53`](int53.md)

Total number of bytes received

### sent\_bytes

> **sent\_bytes**: [`int53`](int53.md)

Total number of bytes sent

## Defined in

dist/generated/types.d.ts:51137
