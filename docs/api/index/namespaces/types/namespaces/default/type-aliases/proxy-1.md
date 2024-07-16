[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / proxy

# Type Alias: proxy

> **proxy**: `object`

Contains information about a proxy server

## Type declaration

### \_

> **\_**: `"proxy"`

### id

> **id**: [`int32`](int32-1.md)

Unique identifier of the proxy

### is\_enabled

> **is\_enabled**: [`Bool`](Bool.md)

True, if the proxy is enabled now

### last\_used\_date

> **last\_used\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the proxy was last used; 0 if never

### port

> **port**: [`int32`](int32-1.md)

Proxy server port

### server

> **server**: `string`

Proxy server domain or IP address

### type

> **type**: [`ProxyType`](ProxyType.md)

Type of the proxy

## Defined in

dist/generated/types.d.ts:50835
