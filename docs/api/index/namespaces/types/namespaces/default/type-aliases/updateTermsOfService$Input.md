[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateTermsOfService$Input

# Type Alias: updateTermsOfService$Input

> **updateTermsOfService$Input**: `object`

Version of [updateTermsOfService](updateTermsOfService.md) for method parameters.

New terms of service must be accepted by the user. If the terms of service are declined, then the deleteAccount method must be called with the reason "Decline ToS update"

## Type declaration

### \_

> `readonly` **\_**: `"updateTermsOfService"`

### terms\_of\_service?

> `readonly` `optional` **terms\_of\_service**: [`termsOfService$Input`](termsOfService$Input.md)

The new terms of service

### terms\_of\_service\_id?

> `readonly` `optional` **terms\_of\_service\_id**: `string`

Identifier of the terms of service

## Defined in

dist/generated/types.d.ts:58131
