[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatStatisticsChannel$Input

# Type Alias: chatStatisticsChannel$Input

> **chatStatisticsChannel$Input**: `object`

Version of [chatStatisticsChannel](chatStatisticsChannel.md) for method parameters.

A detailed statistics about a channel chat

## Type declaration

### \_

> `readonly` **\_**: `"chatStatisticsChannel"`

### enabled\_notifications\_percentage?

> `readonly` `optional` **enabled\_notifications\_percentage**: [`double`](double-1.md)

A percentage of users with enabled notifications for the chat; 0-100

### instant\_view\_interaction\_graph?

> `readonly` `optional` **instant\_view\_interaction\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of views of associated with the chat instant views

### join\_by\_source\_graph?

> `readonly` `optional` **join\_by\_source\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of new member joins per source

### join\_graph?

> `readonly` `optional` **join\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of members joined and left the chat

### language\_graph?

> `readonly` `optional` **language\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of users viewed chat messages per language

### mean\_message\_reaction\_count?

> `readonly` `optional` **mean\_message\_reaction\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Mean number of times reactions were added to the recently sent messages

### mean\_message\_share\_count?

> `readonly` `optional` **mean\_message\_share\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Mean number of times the recently sent messages were shared

### mean\_message\_view\_count?

> `readonly` `optional` **mean\_message\_view\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Mean number of times the recently sent messages were viewed

### mean\_story\_reaction\_count?

> `readonly` `optional` **mean\_story\_reaction\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Mean number of times reactions were added to the recently sent stories

### mean\_story\_share\_count?

> `readonly` `optional` **mean\_story\_share\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Mean number of times the recently sent stories were shared

### mean\_story\_view\_count?

> `readonly` `optional` **mean\_story\_view\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Mean number of times the recently sent stories were viewed

### member\_count?

> `readonly` `optional` **member\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Number of members in the chat

### member\_count\_graph?

> `readonly` `optional` **member\_count\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of members in the chat

### message\_interaction\_graph?

> `readonly` `optional` **message\_interaction\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of chat message views and shares

### message\_reaction\_graph?

> `readonly` `optional` **message\_reaction\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of reactions on messages

### mute\_graph?

> `readonly` `optional` **mute\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of members muted and unmuted the chat

### period?

> `readonly` `optional` **period**: [`dateRange$Input`](dateRange$Input-1.md)

A period to which the statistics applies

### recent\_interactions?

> `readonly` `optional` **recent\_interactions**: [`vector$Input`](vector$Input.md)\<[`chatStatisticsInteractionInfo$Input`](chatStatisticsInteractionInfo$Input-1.md)\>

Detailed statistics about number of views and shares of recently sent messages and stories

### story\_interaction\_graph?

> `readonly` `optional` **story\_interaction\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of story views and shares

### story\_reaction\_graph?

> `readonly` `optional` **story\_reaction\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of reactions on stories

### view\_count\_by\_hour\_graph?

> `readonly` `optional` **view\_count\_by\_hour\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of message views in a given hour in the last two weeks

### view\_count\_by\_source\_graph?

> `readonly` `optional` **view\_count\_by\_source\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of message views per source

## Defined in

dist/generated/types.d.ts:51687
