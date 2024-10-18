[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / chatInviteLinkSubscriptionInfo

# Type Alias: chatInviteLinkSubscriptionInfo

> **chatInviteLinkSubscriptionInfo**: `object`

Contains information about subscription plan that must be paid by the user to use a chat invite link

## Type declaration

### \_

> **\_**: `"chatInviteLinkSubscriptionInfo"`

### can\_reuse

> **can\_reuse**: [`Bool`](Bool.md)

True, if the user has already paid for the subscription and can use joinChatByInviteLink to join the subscribed chat again

### form\_id

> **form\_id**: [`int64`](int64.md)

Identifier of the payment form to use for subscription payment; 0 if the subscription can't be paid

### pricing

> **pricing**: [`starSubscriptionPricing`](starSubscriptionPricing.md)

Information about subscription plan that must be paid by the user to use the link

## Defined in

dist/generated/types.d.ts:11353
