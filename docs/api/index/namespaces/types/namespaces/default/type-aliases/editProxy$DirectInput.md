[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editProxy$DirectInput

# Type Alias: editProxy$DirectInput

> **editProxy$DirectInput**: `object`

Edits an existing proxy server for network requests. Can be called before authorization

## Type declaration

### enable?

> `readonly` `optional` **enable**: [`Bool$Input`](Bool$Input.md)

Pass true to immediately enable the proxy

### port?

> `readonly` `optional` **port**: [`int32`](int32-1.md)

Proxy server port

### proxy\_id?

> `readonly` `optional` **proxy\_id**: [`int32`](int32-1.md)

Proxy identifier

### server?

> `readonly` `optional` **server**: `string`

Proxy server domain or IP address

### type?

> `readonly` `optional` **type**: [`ProxyType$Input`](ProxyType$Input.md)

Proxy type

## Defined in

dist/generated/types.d.ts:101475
