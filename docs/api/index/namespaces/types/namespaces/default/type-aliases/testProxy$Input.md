[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / testProxy$Input

# Type Alias: testProxy$Input

> **testProxy$Input**: `object`

Sends a simple network request to the Telegram servers via proxy; for testing only. Can be called before authorization

## Type declaration

### \_

> `readonly` **\_**: `"testProxy"`

### dc\_id?

> `readonly` `optional` **dc\_id**: [`int32`](int32-1.md)

Identifier of a datacenter with which to test connection

### port?

> `readonly` `optional` **port**: [`int32`](int32-1.md)

Proxy server port

### server?

> `readonly` `optional` **server**: `string`

Proxy server domain or IP address

### timeout?

> `readonly` `optional` **timeout**: [`double`](double-1.md)

The maximum overall timeout for the request

### type?

> `readonly` `optional` **type**: [`ProxyType$Input`](ProxyType$Input.md)

Proxy type

## Defined in

dist/generated/types.d.ts:102186
