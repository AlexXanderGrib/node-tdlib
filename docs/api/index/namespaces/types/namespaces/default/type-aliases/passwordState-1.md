[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / passwordState

# Type Alias: passwordState

> **passwordState**: `object`

Represents the current state of 2-step verification

## Type declaration

### \_

> **\_**: `"passwordState"`

### has\_passport\_data

> **has\_passport\_data**: [`Bool`](Bool.md)

True, if some Telegram Passport elements were saved

### has\_password

> **has\_password**: [`Bool`](Bool.md)

True, if a 2-step verification password is set

### has\_recovery\_email\_address

> **has\_recovery\_email\_address**: [`Bool`](Bool.md)

True, if a recovery email is set

### login\_email\_address\_pattern

> **login\_email\_address\_pattern**: `string`

Pattern of the email address set up for logging in

### password\_hint

> **password\_hint**: `string`

Hint for the password; may be empty

### pending\_reset\_date

> **pending\_reset\_date**: [`int32`](int32-1.md)

If not 0, point in time (Unix timestamp) after which the 2-step verification password can be reset immediately using resetPassword

### recovery\_email\_address\_code\_info

> **recovery\_email\_address\_code\_info**: [`emailAddressAuthenticationCodeInfo`](emailAddressAuthenticationCodeInfo-1.md) \| `null`

Information about the recovery email address to which the confirmation email was sent; may be null

## Defined in

dist/generated/types.d.ts:3505
