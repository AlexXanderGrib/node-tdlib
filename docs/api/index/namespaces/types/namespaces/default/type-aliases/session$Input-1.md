[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / session$Input

# Type Alias: session$Input

> **session$Input**: `object`

Version of [session](session-1.md) for method parameters.

Contains information about one session in a Telegram application used by the current user. Sessions must be shown to the user in the returned order

## Type declaration

### \_

> `readonly` **\_**: `"session"`

### api\_id?

> `readonly` `optional` **api\_id**: [`int32`](int32-1.md)

Telegram API identifier, as provided by the application

### application\_name?

> `readonly` `optional` **application\_name**: `string`

Name of the application, as provided by the application

### application\_version?

> `readonly` `optional` **application\_version**: `string`

The version of the application, as provided by the application

### can\_accept\_calls?

> `readonly` `optional` **can\_accept\_calls**: [`Bool$Input`](Bool$Input.md)

True, if incoming calls can be accepted by the session

### can\_accept\_secret\_chats?

> `readonly` `optional` **can\_accept\_secret\_chats**: [`Bool$Input`](Bool$Input.md)

True, if incoming secret chats can be accepted by the session

### device\_model?

> `readonly` `optional` **device\_model**: `string`

Model of the device the application has been run or is running on, as provided by the application

### id?

> `readonly` `optional` **id**: [`int64$Input`](int64$Input-1.md)

Session identifier

### ip\_address?

> `readonly` `optional` **ip\_address**: `string`

IP address from which the session was created, in human-readable format

### is\_current?

> `readonly` `optional` **is\_current**: [`Bool$Input`](Bool$Input.md)

True, if this session is the current session

### is\_official\_application?

> `readonly` `optional` **is\_official\_application**: [`Bool$Input`](Bool$Input.md)

True, if the application is an official application or uses the api_id of an official application

### is\_password\_pending?

> `readonly` `optional` **is\_password\_pending**: [`Bool$Input`](Bool$Input.md)

True, if a 2-step verification password is needed to complete authorization of the session

### is\_unconfirmed?

> `readonly` `optional` **is\_unconfirmed**: [`Bool$Input`](Bool$Input.md)

True, if the session wasn't confirmed from another session

### last\_active\_date?

> `readonly` `optional` **last\_active\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the session was last used

### location?

> `readonly` `optional` **location**: `string`

A human-readable description of the location from which the session was created, based on the IP address

### log\_in\_date?

> `readonly` `optional` **log\_in\_date**: [`int32`](int32-1.md)

Point in time (Unix timestamp) when the user has logged in

### platform?

> `readonly` `optional` **platform**: `string`

Operating system the application has been run or is running on, as provided by the application

### system\_version?

> `readonly` `optional` **system\_version**: `string`

Version of the operating system the application has been run or is running on, as provided by the application

### type?

> `readonly` `optional` **type**: [`SessionType$Input`](SessionType$Input.md)

Session type based on the system and application version, which can be used to display a corresponding icon

## Defined in

dist/generated/types.d.ts:46797
