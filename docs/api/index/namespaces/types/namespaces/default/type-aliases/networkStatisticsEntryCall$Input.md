[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / networkStatisticsEntryCall$Input

# Type Alias: networkStatisticsEntryCall$Input

> **networkStatisticsEntryCall$Input**: `object`

Version of [networkStatisticsEntryCall](networkStatisticsEntryCall.md) for method parameters.

Contains information about the total amount of data that was used for calls

## Type declaration

### \_

> `readonly` **\_**: `"networkStatisticsEntryCall"`

### duration?

> `readonly` `optional` **duration**: [`double`](double-1.md)

Total call duration, in seconds

### network\_type?

> `readonly` `optional` **network\_type**: [`NetworkType$Input`](NetworkType$Input.md)

Type of the network the data was sent through. Call setNetworkType to maintain the actual network type

### received\_bytes?

> `readonly` `optional` **received\_bytes**: [`int53`](int53-1.md)

Total number of bytes received

### sent\_bytes?

> `readonly` `optional` **sent\_bytes**: [`int53`](int53-1.md)

Total number of bytes sent

## Defined in

dist/generated/types.d.ts:49581
