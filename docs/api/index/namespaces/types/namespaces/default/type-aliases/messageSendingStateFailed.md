[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / messageSendingStateFailed

# Type Alias: messageSendingStateFailed

> **messageSendingStateFailed**: `object`

The message failed to be sent

## Type declaration

### \_

> **\_**: `"messageSendingStateFailed"`

### can\_retry

> **can\_retry**: [`Bool`](Bool.md)

True, if the message can be re-sent

### error

> **error**: [`error`](error-1.md)

The cause of the message sending failure

### need\_another\_reply\_quote

> **need\_another\_reply\_quote**: [`Bool`](Bool.md)

True, if the message can be re-sent only if another quote is chosen in the message that is replied by the given message

### need\_another\_sender

> **need\_another\_sender**: [`Bool`](Bool.md)

True, if the message can be re-sent only on behalf of a different sender

### need\_drop\_reply

> **need\_drop\_reply**: [`Bool`](Bool.md)

True, if the message can be re-sent only if the message to be replied is removed. This will be done automatically by resendMessages

### retry\_after

> **retry\_after**: [`double`](double-1.md)

Time left before the message can be re-sent, in seconds. No update is sent when this field changes

## Defined in

dist/generated/types.d.ts:12983
