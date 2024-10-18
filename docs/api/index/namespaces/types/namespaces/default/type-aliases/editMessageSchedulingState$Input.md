[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / editMessageSchedulingState$Input

# Type Alias: editMessageSchedulingState$Input

> **editMessageSchedulingState$Input**: `object`

Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded together with the message will be also changed

## Type declaration

### \_

> `readonly` **\_**: `"editMessageSchedulingState"`

### chat\_id?

> `readonly` `optional` **chat\_id**: [`int53`](int53.md)

The chat the message belongs to

### message\_id?

> `readonly` `optional` **message\_id**: [`int53`](int53.md)

Identifier of the message. Use messageProperties.can_edit_scheduling_state to check whether the message is suitable

### scheduling\_state?

> `readonly` `optional` **scheduling\_state**: [`MessageSchedulingState$Input`](MessageSchedulingState$Input.md) \| `null`

The new message scheduling state; pass null to send the message immediately

## Defined in

dist/generated/types.d.ts:81393
