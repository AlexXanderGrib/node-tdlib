[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / passwordState$Input

# Type Alias: passwordState$Input

> **passwordState$Input**: `object`

Version of [passwordState](passwordState-1.md) for method parameters.

Represents the current state of 2-step verification

## Type declaration

### \_

> `readonly` **\_**: `"passwordState"`

### has\_passport\_data?

> `readonly` `optional` **has\_passport\_data**: [`Bool$Input`](Bool$Input.md)

True, if some Telegram Passport elements were saved

### has\_password?

> `readonly` `optional` **has\_password**: [`Bool$Input`](Bool$Input.md)

True, if a 2-step verification password is set

### has\_recovery\_email\_address?

> `readonly` `optional` **has\_recovery\_email\_address**: [`Bool$Input`](Bool$Input.md)

True, if a recovery email is set

### login\_email\_address\_pattern?

> `readonly` `optional` **login\_email\_address\_pattern**: `string`

Pattern of the email address set up for logging in

### password\_hint?

> `readonly` `optional` **password\_hint**: `string`

Hint for the password; may be empty

### pending\_reset\_date?

> `readonly` `optional` **pending\_reset\_date**: [`int32`](int32-1.md)

If not 0, point in time (Unix timestamp) after which the 2-step verification password can be reset immediately using resetPassword

### recovery\_email\_address\_code\_info?

> `readonly` `optional` **recovery\_email\_address\_code\_info**: [`emailAddressAuthenticationCodeInfo$Input`](emailAddressAuthenticationCodeInfo$Input-1.md) \| `null`

Information about the recovery email address to which the confirmation email was sent; may be null

## Defined in

dist/generated/types.d.ts:3548
