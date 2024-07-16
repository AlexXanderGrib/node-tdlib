[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / proxyTypeHttp$Input

# Type Alias: proxyTypeHttp$Input

> **proxyTypeHttp$Input**: `object`

Version of [proxyTypeHttp](proxyTypeHttp.md) for method parameters.

A HTTP transparent proxy server

## Type declaration

### \_

> `readonly` **\_**: `"proxyTypeHttp"`

### http\_only?

> `readonly` `optional` **http\_only**: [`Bool$Input`](Bool$Input.md)

Pass true if the proxy supports only HTTP requests and doesn't support transparent TCP connections via HTTP CONNECT method

### password?

> `readonly` `optional` **password**: `string`

Password for logging in; may be empty

### username?

> `readonly` `optional` **username**: `string`

Username for logging in; may be empty

## Defined in

dist/generated/types.d.ts:50790
