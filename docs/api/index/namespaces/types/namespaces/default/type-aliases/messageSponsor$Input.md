[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageSponsor$Input

# Type Alias: messageSponsor$Input

> **messageSponsor$Input**: `object`

Version of [messageSponsor](messageSponsor.md) for method parameters.

Information about the sponsor of a message

## Type declaration

### \_

> `readonly` **\_**: `"messageSponsor"`

### info?

> `readonly` `optional` **info**: `string`

Additional optional information about the sponsor to be shown along with the message

### photo?

> `readonly` `optional` **photo**: [`photo$Input`](photo$Input.md) \| `null`

Photo of the sponsor; may be null if must not be shown

### url?

> `readonly` `optional` **url**: `string`

URL of the sponsor to be opened when the message is clicked

## Defined in

dist/generated/types.d.ts:14966
