[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / proxy$Input

# Type Alias: proxy$Input

> **proxy$Input**: `object`

Version of [proxy](proxy-1.md) for method parameters.

Contains information about a proxy server

## Type declaration

### \_

> `readonly` **\_**: `"proxy"`

### id?

> `readonly` `optional` **id**: [`int32`](int32-1.md)

Unique identifier of the proxy

### is\_enabled?

> `readonly` `optional` **is\_enabled**: [`Bool$Input`](Bool$Input.md)

True, if the proxy is enabled now

### last\_used\_date?

> `readonly` `optional` **last\_used\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the proxy was last used; 0 if never

### port?

> `readonly` `optional` **port**: [`int32`](int32-1.md)

Proxy server port

### server?

> `readonly` `optional` **server**: `string`

Proxy server domain or IP address

### type?

> `readonly` `optional` **type**: [`ProxyType$Input`](ProxyType$Input.md)

Type of the proxy

## Defined in

dist/generated/types.d.ts:50873
