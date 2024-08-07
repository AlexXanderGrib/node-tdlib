[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessInfo$Input

# Type Alias: businessInfo$Input

> **businessInfo$Input**: `object`

Version of [businessInfo](businessInfo-1.md) for method parameters.

Contains information about a Telegram Business account

## Type declaration

### \_

> `readonly` **\_**: `"businessInfo"`

### away\_message\_settings?

> `readonly` `optional` **away\_message\_settings**: [`businessAwayMessageSettings$Input`](businessAwayMessageSettings$Input-1.md) \| `null`

The away message; may be null if none or the Business account is not of the current user

### greeting\_message\_settings?

> `readonly` `optional` **greeting\_message\_settings**: [`businessGreetingMessageSettings$Input`](businessGreetingMessageSettings$Input-1.md) \| `null`

The greeting message; may be null if none or the Business account is not of the current user

### local\_opening\_hours?

> `readonly` `optional` **local\_opening\_hours**: [`businessOpeningHours$Input`](businessOpeningHours$Input-1.md) \| `null`

Opening hours of the business in the local time; may be null if none. The hours are guaranteed to be valid and has already been split by week days.

- Local time zone identifier will be empty. An updateUserFullInfo update is not triggered when value of this field changes

### location?

> `readonly` `optional` **location**: [`businessLocation$Input`](businessLocation$Input-1.md) \| `null`

Location of the business; may be null if none

### next\_close\_in?

> `readonly` `optional` **next\_close\_in**: [`int32`](int32-1.md)

Time left before the business will close the next time, in seconds; 0 if unknown. An updateUserFullInfo update is not triggered when value of this field changes

### next\_open\_in?

> `readonly` `optional` **next\_open\_in**: [`int32`](int32-1.md)

Time left before the business will open the next time, in seconds; 0 if unknown. An updateUserFullInfo update is not triggered when value of this field changes

### opening\_hours?

> `readonly` `optional` **opening\_hours**: [`businessOpeningHours$Input`](businessOpeningHours$Input-1.md) \| `null`

Opening hours of the business; may be null if none. The hours are guaranteed to be valid and has already been split by week days

### start\_page?

> `readonly` `optional` **start\_page**: [`businessStartPage$Input`](businessStartPage$Input-1.md) \| `null`

Information about start page of the account; may be null if none

## Defined in

dist/generated/types.d.ts:7031
