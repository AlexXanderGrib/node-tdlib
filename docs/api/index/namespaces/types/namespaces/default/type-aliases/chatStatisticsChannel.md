[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatStatisticsChannel

# Type Alias: chatStatisticsChannel

> **chatStatisticsChannel**: `object`

A detailed statistics about a channel chat

## Type declaration

### \_

> **\_**: `"chatStatisticsChannel"`

### enabled\_notifications\_percentage

> **enabled\_notifications\_percentage**: [`double`](double.md)

A percentage of users with enabled notifications for the chat; 0-100

### instant\_view\_interaction\_graph

> **instant\_view\_interaction\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of views of associated with the chat instant views

### join\_by\_source\_graph

> **join\_by\_source\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of new member joins per source

### join\_graph

> **join\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of members joined and left the chat

### language\_graph

> **language\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of users viewed chat messages per language

### mean\_message\_reaction\_count

> **mean\_message\_reaction\_count**: [`statisticalValue`](statisticalValue.md)

Mean number of times reactions were added to the recently sent messages

### mean\_message\_share\_count

> **mean\_message\_share\_count**: [`statisticalValue`](statisticalValue.md)

Mean number of times the recently sent messages were shared

### mean\_message\_view\_count

> **mean\_message\_view\_count**: [`statisticalValue`](statisticalValue.md)

Mean number of times the recently sent messages were viewed

### mean\_story\_reaction\_count

> **mean\_story\_reaction\_count**: [`statisticalValue`](statisticalValue.md)

Mean number of times reactions were added to the recently sent stories

### mean\_story\_share\_count

> **mean\_story\_share\_count**: [`statisticalValue`](statisticalValue.md)

Mean number of times the recently sent stories were shared

### mean\_story\_view\_count

> **mean\_story\_view\_count**: [`statisticalValue`](statisticalValue.md)

Mean number of times the recently sent stories were viewed

### member\_count

> **member\_count**: [`statisticalValue`](statisticalValue.md)

Number of members in the chat

### member\_count\_graph

> **member\_count\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of members in the chat

### message\_interaction\_graph

> **message\_interaction\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of chat message views and shares

### message\_reaction\_graph

> **message\_reaction\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of reactions on messages

### mute\_graph

> **mute\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of members muted and unmuted the chat

### period

> **period**: [`dateRange`](dateRange.md)

A period to which the statistics applies

### recent\_interactions

> **recent\_interactions**: [`vector`](vector.md)\<[`chatStatisticsInteractionInfo`](chatStatisticsInteractionInfo.md)\>

Detailed statistics about number of views and shares of recently sent messages and stories

### story\_interaction\_graph

> **story\_interaction\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of story views and shares

### story\_reaction\_graph

> **story\_reaction\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of reactions on stories

### view\_count\_by\_hour\_graph

> **view\_count\_by\_hour\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of message views in a given hour in the last two weeks

### view\_count\_by\_source\_graph

> **view\_count\_by\_source\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of message views per source

## Defined in

dist/generated/types.d.ts:53185
