[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatStatisticsSupergroup$Input

# Type Alias: chatStatisticsSupergroup$Input

> **chatStatisticsSupergroup$Input**: `object`

Version of [chatStatisticsSupergroup](chatStatisticsSupergroup.md) for method parameters.

A detailed statistics about a supergroup chat

## Type declaration

### \_

> `readonly` **\_**: `"chatStatisticsSupergroup"`

### action\_graph?

> `readonly` `optional` **action\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of different actions in the chat

### day\_graph?

> `readonly` `optional` **day\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing distribution of message views per hour

### join\_by\_source\_graph?

> `readonly` `optional` **join\_by\_source\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of new member joins per source

### join\_graph?

> `readonly` `optional` **join\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of members joined and left the chat

### language\_graph?

> `readonly` `optional` **language\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing distribution of active users per language

### member\_count?

> `readonly` `optional` **member\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Number of members in the chat

### member\_count\_graph?

> `readonly` `optional` **member\_count\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing number of members in the chat

### message\_content\_graph?

> `readonly` `optional` **message\_content\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing distribution of sent messages by content type

### message\_count?

> `readonly` `optional` **message\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Number of messages sent to the chat

### period?

> `readonly` `optional` **period**: [`dateRange$Input`](dateRange$Input-1.md)

A period to which the statistics applies

### sender\_count?

> `readonly` `optional` **sender\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Number of users who sent messages to the chat

### top\_administrators?

> `readonly` `optional` **top\_administrators**: [`vector$Input`](vector$Input.md)\<[`chatStatisticsAdministratorActionsInfo$Input`](chatStatisticsAdministratorActionsInfo$Input-1.md)\>

List of most active administrators in the last week

### top\_inviters?

> `readonly` `optional` **top\_inviters**: [`vector$Input`](vector$Input.md)\<[`chatStatisticsInviterInfo$Input`](chatStatisticsInviterInfo$Input-1.md)\>

List of most active inviters of new members in the last week

### top\_senders?

> `readonly` `optional` **top\_senders**: [`vector$Input`](vector$Input.md)\<[`chatStatisticsMessageSenderInfo$Input`](chatStatisticsMessageSenderInfo$Input-1.md)\>

List of users sent most messages in the last week

### viewer\_count?

> `readonly` `optional` **viewer\_count**: [`statisticalValue$Input`](statisticalValue$Input-1.md)

Number of users who viewed messages in the chat

### week\_graph?

> `readonly` `optional` **week\_graph**: [`StatisticalGraph$Input`](StatisticalGraph$Input.md)

A graph containing distribution of message views per day of week

## Defined in

dist/generated/types.d.ts:51483
