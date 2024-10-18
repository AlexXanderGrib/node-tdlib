[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / addProxy$Input

# Type Alias: addProxy$Input

> **addProxy$Input**: `object`

Adds a proxy server for network requests. Can be called before authorization

## Type declaration

### \_

> `readonly` **\_**: `"addProxy"`

### enable?

> `readonly` `optional` **enable**: [`Bool$Input`](Bool$Input.md)

Pass true to immediately enable the proxy

### port?

> `readonly` `optional` **port**: [`int32`](int32.md)

Proxy server port

### server?

> `readonly` `optional` **server**: `string`

Proxy server domain or IP address

### type?

> `readonly` `optional` **type**: [`ProxyType$Input`](ProxyType$Input.md)

Proxy type

## Defined in

dist/generated/types.d.ts:104307
