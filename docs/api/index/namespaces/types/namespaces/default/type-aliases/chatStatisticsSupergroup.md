[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatStatisticsSupergroup

# Type Alias: chatStatisticsSupergroup

> **chatStatisticsSupergroup**: `object`

A detailed statistics about a supergroup chat

## Type declaration

### \_

> **\_**: `"chatStatisticsSupergroup"`

### action\_graph

> **action\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of different actions in the chat

### day\_graph

> **day\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing distribution of message views per hour

### join\_by\_source\_graph

> **join\_by\_source\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of new member joins per source

### join\_graph

> **join\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of members joined and left the chat

### language\_graph

> **language\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing distribution of active users per language

### member\_count

> **member\_count**: [`statisticalValue`](statisticalValue-1.md)

Number of members in the chat

### member\_count\_graph

> **member\_count\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing number of members in the chat

### message\_content\_graph

> **message\_content\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing distribution of sent messages by content type

### message\_count

> **message\_count**: [`statisticalValue`](statisticalValue-1.md)

Number of messages sent to the chat

### period

> **period**: [`dateRange`](dateRange-1.md)

A period to which the statistics applies

### sender\_count

> **sender\_count**: [`statisticalValue`](statisticalValue-1.md)

Number of users who sent messages to the chat

### top\_administrators

> **top\_administrators**: [`vector`](vector.md)\<[`chatStatisticsAdministratorActionsInfo`](chatStatisticsAdministratorActionsInfo-1.md)\>

List of most active administrators in the last week

### top\_inviters

> **top\_inviters**: [`vector`](vector.md)\<[`chatStatisticsInviterInfo`](chatStatisticsInviterInfo-1.md)\>

List of most active inviters of new members in the last week

### top\_senders

> **top\_senders**: [`vector`](vector.md)\<[`chatStatisticsMessageSenderInfo`](chatStatisticsMessageSenderInfo-1.md)\>

List of users sent most messages in the last week

### viewer\_count

> **viewer\_count**: [`statisticalValue`](statisticalValue-1.md)

Number of users who viewed messages in the chat

### week\_graph

> **week\_graph**: [`StatisticalGraph`](StatisticalGraph.md)

A graph containing distribution of message views per day of week

## Defined in

dist/generated/types.d.ts:51395
