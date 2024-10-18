[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLinkSubscriptionInfo$Input

# Type Alias: chatInviteLinkSubscriptionInfo$Input

> **chatInviteLinkSubscriptionInfo$Input**: `object`

Version of [chatInviteLinkSubscriptionInfo](chatInviteLinkSubscriptionInfo.md) for method parameters.

Contains information about subscription plan that must be paid by the user to use a chat invite link

## Type declaration

### \_

> `readonly` **\_**: `"chatInviteLinkSubscriptionInfo"`

### can\_reuse?

> `readonly` `optional` **can\_reuse**: [`Bool$Input`](Bool$Input.md)

True, if the user has already paid for the subscription and can use joinChatByInviteLink to join the subscribed chat again

### form\_id?

> `readonly` `optional` **form\_id**: [`int64$Input`](int64$Input.md)

Identifier of the payment form to use for subscription payment; 0 if the subscription can't be paid

### pricing?

> `readonly` `optional` **pricing**: [`starSubscriptionPricing$Input`](starSubscriptionPricing$Input.md)

Information about subscription plan that must be paid by the user to use the link

## Defined in

dist/generated/types.d.ts:11376
