[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / setTdlibParameters$DirectInput

# Type Alias: setTdlibParameters$DirectInput

> **setTdlibParameters$DirectInput**: `object`

Sets the parameters for TDLib initialization. Works only when the current authorization state is authorizationStateWaitTdlibParameters

## Type declaration

### api\_hash?

> `readonly` `optional` **api\_hash**: `string`

Application identifier hash for Telegram API access, which can be obtained at https://my.telegram.org

### api\_id?

> `readonly` `optional` **api\_id**: [`int32`](int32.md)

Application identifier for Telegram API access, which can be obtained at https://my.telegram.org

### application\_version?

> `readonly` `optional` **application\_version**: `string`

Application version; must be non-empty

### database\_directory?

> `readonly` `optional` **database\_directory**: `string`

The path to the directory for the persistent database; if empty, the current working directory will be used

### database\_encryption\_key?

> `readonly` `optional` **database\_encryption\_key**: [`bytes$Input`](bytes$Input.md)

Encryption key for the database. If the encryption key is invalid, then an error with code 401 will be returned

### device\_model?

> `readonly` `optional` **device\_model**: `string`

Model of the device the application is being run on; must be non-empty

### files\_directory?

> `readonly` `optional` **files\_directory**: `string`

The path to the directory for storing files; if empty, database_directory will be used

### system\_language\_code?

> `readonly` `optional` **system\_language\_code**: `string`

IETF language tag of the user's operating system language; must be non-empty

### system\_version?

> `readonly` `optional` **system\_version**: `string`

Version of the operating system the application is being run on. If empty, the version is automatically detected by TDLib

### use\_chat\_info\_database?

> `readonly` `optional` **use\_chat\_info\_database**: [`Bool$Input`](Bool$Input.md)

Pass true to keep cache of users, basic groups, supergroups, channels and secret chats between restarts. Implies use_file_database

### use\_file\_database?

> `readonly` `optional` **use\_file\_database**: [`Bool$Input`](Bool$Input.md)

Pass true to keep information about downloaded and uploaded files between application restarts

### use\_message\_database?

> `readonly` `optional` **use\_message\_database**: [`Bool$Input`](Bool$Input.md)

Pass true to keep cache of chats and messages between restarts. Implies use_chat_info_database

### use\_secret\_chats?

> `readonly` `optional` **use\_secret\_chats**: [`Bool$Input`](Bool$Input.md)

Pass true to enable support for secret chats

### use\_test\_dc?

> `readonly` `optional` **use\_test\_dc**: [`Bool$Input`](Bool$Input.md)

Pass true to use Telegram test environment instead of the production environment

## Defined in

dist/generated/types.d.ts:75155
