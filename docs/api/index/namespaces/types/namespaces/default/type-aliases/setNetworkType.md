[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setNetworkType

# Type Alias: setNetworkType()

> **setNetworkType**: (`parameters`) => [`Ok`](Ok-1.md)

Sets the current network type. Can be called before authorization. Calling this method forces all network connections to reopen, mitigating the delay in switching between different networks,

- so it must be called whenever the network is changed, even if the network type remains the same. Network type is used to check whether the library can use the network at all and also for collecting detailed network data usage statistics

## Parameters

• **parameters**: [`setNetworkType$Input`](setNetworkType$Input.md)

[setNetworkType$Input](setNetworkType$Input.md)

## Returns

[`Ok`](Ok-1.md)

[Ok](Ok-1.md)

## Defined in

dist/generated/types.d.ts:101772
