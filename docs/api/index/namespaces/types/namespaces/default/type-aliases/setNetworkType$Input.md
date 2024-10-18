[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setNetworkType$Input

# Type Alias: setNetworkType$Input

> **setNetworkType$Input**: `object`

Sets the current network type. Can be called before authorization. Calling this method forces all network connections to reopen, mitigating the delay in switching between different networks,

- so it must be called whenever the network is changed, even if the network type remains the same. Network type is used to check whether the library can use the network at all and also for collecting detailed network data usage statistics

## Type declaration

### \_

> `readonly` **\_**: `"setNetworkType"`

### type?

> `readonly` `optional` **type**: [`NetworkType$Input`](NetworkType$Input.md) \| `null`

The new network type; pass null to set network type to networkTypeOther

## Defined in

dist/generated/types.d.ts:101744
