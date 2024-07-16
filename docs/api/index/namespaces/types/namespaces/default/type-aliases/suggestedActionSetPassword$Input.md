[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / suggestedActionSetPassword$Input

# Type Alias: suggestedActionSetPassword$Input

> **suggestedActionSetPassword$Input**: `object`

Version of [suggestedActionSetPassword](suggestedActionSetPassword.md) for method parameters.

Suggests the user to set a 2-step verification password to be able to log in again

## Type declaration

### \_

> `readonly` **\_**: `"suggestedActionSetPassword"`

### authorization\_delay?

> `readonly` `optional` **authorization\_delay**: [`int32`](int32-1.md)

The number of days to pass between consecutive authorizations if the user declines to set password; if 0, then the user is advised to set the password for security reasons

## Defined in

dist/generated/types.d.ts:50460
