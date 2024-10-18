[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / updateTermsOfService

# Type Alias: updateTermsOfService

> **updateTermsOfService**: `object`

New terms of service must be accepted by the user. If the terms of service are declined, then the deleteAccount method must be called with the reason "Decline ToS update"

## Type declaration

### \_

> **\_**: `"updateTermsOfService"`

### terms\_of\_service

> **terms\_of\_service**: [`termsOfService`](termsOfService.md)

The new terms of service

### terms\_of\_service\_id

> **terms\_of\_service\_id**: `string`

Identifier of the terms of service

## Defined in

dist/generated/types.d.ts:58113
