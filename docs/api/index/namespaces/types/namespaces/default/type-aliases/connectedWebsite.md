[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / connectedWebsite

# Type Alias: connectedWebsite

> **connectedWebsite**: `object`

Contains information about one website the current user is logged in with Telegram

## Type declaration

### \_

> **\_**: `"connectedWebsite"`

### bot\_user\_id

> **bot\_user\_id**: [`int53`](int53.md)

User identifier of a bot linked with the website

### browser

> **browser**: `string`

The version of a browser used to log in

### domain\_name

> **domain\_name**: `string`

The domain name of the website

### id

> **id**: [`int64`](int64.md)

Website identifier

### ip\_address

> **ip\_address**: `string`

IP address from which the user was logged in, in human-readable format

### last\_active\_date

> **last\_active\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when obtained authorization was last used

### location

> **location**: `string`

Human-readable description of a country and a region from which the user was logged in, based on the IP address

### log\_in\_date

> **log\_in\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the user was logged in

### platform

> **platform**: `string`

Operating system the browser is running on

## Defined in

dist/generated/types.d.ts:48507
