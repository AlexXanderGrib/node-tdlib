[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageSendingStateFailed$Input

# Type Alias: messageSendingStateFailed$Input

> **messageSendingStateFailed$Input**: `object`

Version of [messageSendingStateFailed](messageSendingStateFailed.md) for method parameters.

The message failed to be sent

## Type declaration

### \_

> `readonly` **\_**: `"messageSendingStateFailed"`

### can\_retry?

> `readonly` `optional` **can\_retry**: [`Bool$Input`](Bool$Input.md)

True, if the message can be re-sent

### error?

> `readonly` `optional` **error**: [`error$Input`](error$Input-1.md)

The cause of the message sending failure

### need\_another\_reply\_quote?

> `readonly` `optional` **need\_another\_reply\_quote**: [`Bool$Input`](Bool$Input.md)

True, if the message can be re-sent only if another quote is chosen in the message that is replied by the given message

### need\_another\_sender?

> `readonly` `optional` **need\_another\_sender**: [`Bool$Input`](Bool$Input.md)

True, if the message can be re-sent only on behalf of a different sender

### need\_drop\_reply?

> `readonly` `optional` **need\_drop\_reply**: [`Bool$Input`](Bool$Input.md)

True, if the message can be re-sent only if the message to be replied is removed. This will be done automatically by resendMessages

### retry\_after?

> `readonly` `optional` **retry\_after**: [`double`](double-1.md)

Time left before the message can be re-sent, in seconds. No update is sent when this field changes

## Defined in

dist/generated/types.d.ts:13021
