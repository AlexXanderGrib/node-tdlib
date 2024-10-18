[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pollOption

# Type Alias: pollOption

> **pollOption**: `object`

Describes one answer option of a poll

## Type declaration

### \_

> **\_**: `"pollOption"`

### is\_being\_chosen

> **is\_being\_chosen**: [`Bool`](Bool.md)

True, if the option is being chosen by a pending setPollAnswer request

### is\_chosen

> **is\_chosen**: [`Bool`](Bool.md)

True, if the option was chosen by the user

### text

> **text**: [`formattedText`](formattedText.md)

Option text; 1-100 characters. Only custom emoji entities are allowed

### vote\_percentage

> **vote\_percentage**: [`int32`](int32.md)

The percentage of votes for this option; 0-100

### voter\_count

> **voter\_count**: [`int32`](int32.md)

Number of voters for this option, available only for closed or voted polls

## Defined in

dist/generated/types.d.ts:4607
