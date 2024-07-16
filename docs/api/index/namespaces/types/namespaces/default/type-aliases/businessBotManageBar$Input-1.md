[**TDLib**](../../../../../../README.md) • **Docs**

***

[TDLib](../../../../../../modules.md) / [index](../../../../../README.md) / [types](../../../README.md) / [default](../README.md) / businessBotManageBar$Input

# Type Alias: businessBotManageBar$Input

> **businessBotManageBar$Input**: `object`

Version of [businessBotManageBar](businessBotManageBar-1.md) for method parameters.

Contains information about a business bot that manages the chat

## Type declaration

### \_

> `readonly` **\_**: `"businessBotManageBar"`

### bot\_user\_id?

> `readonly` `optional` **bot\_user\_id**: [`int53`](int53-1.md)

User identifier of the bot

### can\_bot\_reply?

> `readonly` `optional` **can\_bot\_reply**: [`Bool$Input`](Bool$Input.md)

True, if the bot can reply

### is\_bot\_paused?

> `readonly` `optional` **is\_bot\_paused**: [`Bool$Input`](Bool$Input.md)

True, if the bot is paused. Use toggleBusinessConnectedBotChatIsPaused to change the value of the field

### manage\_url?

> `readonly` `optional` **manage\_url**: `string`

URL to be opened to manage the bot

## Defined in

dist/generated/types.d.ts:16217
