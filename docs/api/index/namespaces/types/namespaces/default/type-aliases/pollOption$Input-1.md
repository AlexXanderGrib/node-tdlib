[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / pollOption$Input

# Type Alias: pollOption$Input

> **pollOption$Input**: `object`

Version of [pollOption](pollOption-1.md) for method parameters.

Describes one answer option of a poll

## Type declaration

### \_

> `readonly` **\_**: `"pollOption"`

### is\_being\_chosen?

> `readonly` `optional` **is\_being\_chosen**: [`Bool$Input`](Bool$Input.md)

True, if the option is being chosen by a pending setPollAnswer request

### is\_chosen?

> `readonly` `optional` **is\_chosen**: [`Bool$Input`](Bool$Input.md)

True, if the option was chosen by the user

### text?

> `readonly` `optional` **text**: [`formattedText$Input`](formattedText$Input-1.md)

Option text; 1-100 characters. Only custom emoji entities are allowed

### vote\_percentage?

> `readonly` `optional` **vote\_percentage**: [`int32`](int32-1.md)

The percentage of votes for this option; 0-100

### voter\_count?

> `readonly` `optional` **voter\_count**: [`int32`](int32-1.md)

Number of voters for this option, available only for closed or voted polls

## Defined in

dist/generated/types.d.ts:4594
