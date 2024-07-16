[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / connectedWebsite$Input

# Type Alias: connectedWebsite$Input

> **connectedWebsite$Input**: `object`

Version of [connectedWebsite](connectedWebsite-1.md) for method parameters.

Contains information about one website the current user is logged in with Telegram

## Type declaration

### \_

> `readonly` **\_**: `"connectedWebsite"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

User identifier of a bot linked with the website

### browser?

> `readonly` `optional` **browser**: `string`

The version of a browser used to log in

### domain\_name?

> `readonly` `optional` **domain\_name**: `string`

The domain name of the website

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

Website identifier

### ip\_address?

> `readonly` `optional` **ip\_address**: `string`

IP address from which the user was logged in, in human-readable format

### last\_active\_date?

> `readonly` `optional` **last\_active\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when obtained authorization was last used

### location?

> `readonly` `optional` **location**: `string`

Human-readable description of a country and a region from which the user was logged in, based on the IP address

### log\_in\_date?

> `readonly` `optional` **log\_in\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the user was logged in

### platform?

> `readonly` `optional` **platform**: `string`

Operating system the browser is running on

## Defined in

dist/generated/types.d.ts:47034
