[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / session

# Type Alias: session

> **session**: `object`

Contains information about one session in a Telegram application used by the current user. Sessions must be shown to the user in the returned order

## Type declaration

### \_

> **\_**: `"session"`

### api\_id

> **api\_id**: [`int32`](int32.md)

Telegram API identifier, as provided by the application

### application\_name

> **application\_name**: `string`

Name of the application, as provided by the application

### application\_version

> **application\_version**: `string`

The version of the application, as provided by the application

### can\_accept\_calls

> **can\_accept\_calls**: [`Bool`](Bool.md)

True, if incoming calls can be accepted by the session

### can\_accept\_secret\_chats

> **can\_accept\_secret\_chats**: [`Bool`](Bool.md)

True, if incoming secret chats can be accepted by the session

### device\_model

> **device\_model**: `string`

Model of the device the application has been run or is running on, as provided by the application

### id

> **id**: [`int64`](int64.md)

Session identifier

### ip\_address

> **ip\_address**: `string`

IP address from which the session was created, in human-readable format

### is\_current

> **is\_current**: [`Bool`](Bool.md)

True, if this session is the current session

### is\_official\_application

> **is\_official\_application**: [`Bool`](Bool.md)

True, if the application is an official application or uses the api_id of an official application

### is\_password\_pending

> **is\_password\_pending**: [`Bool`](Bool.md)

True, if a 2-step verification password is needed to complete authorization of the session

### is\_unconfirmed

> **is\_unconfirmed**: [`Bool`](Bool.md)

True, if the session wasn't confirmed from another session

### last\_active\_date

> **last\_active\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the session was last used

### location

> **location**: `string`

A human-readable description of the location from which the session was created, based on the IP address

### log\_in\_date

> **log\_in\_date**: [`int32`](int32.md)

Point in time (Unix timestamp) when the user has logged in

### platform

> **platform**: `string`

Operating system the application has been run or is running on, as provided by the application

### system\_version

> **system\_version**: `string`

Version of the operating system the application has been run or is running on, as provided by the application

### type

> **type**: [`SessionType`](SessionType.md)

Session type based on the system and application version, which can be used to display a corresponding icon

## Defined in

dist/generated/types.d.ts:48225
