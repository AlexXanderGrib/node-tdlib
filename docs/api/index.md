[**TDLib Native**](README.md)

***

[TDLib Native](modules.md) / index

# index

## Classes

### Authenticator

Defined in: [auth.ts:92](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L92)

#### Export

Authenticator

#### Implements

#### Implements

#### Implements

#### Implements

#### Implements

- `StageTDLibParameters`
- `StageSelect`
- `StageAuthenticate`
- `StageUser`

#### Constructors

##### Constructor

> `private` **new Authenticator**(`client`): [`Authenticator`](#authenticator)

Defined in: [auth.ts:115](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L115)

Creates an instance of Authenticator.

###### Parameters

###### client

[`Client`](#client)

###### Returns

[`Authenticator`](#authenticator)

###### Memberof

Authenticator

#### Properties

##### \_client

> `private` `readonly` **\_client**: [`Client`](#client)

Defined in: [auth.ts:107](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L107)

##### \_state

> `private` `readonly` **\_state**: `Partial`\<`AuthenticatorState`\> = `{}`

Defined in: [auth.ts:108](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L108)

#### Methods

##### \_handleUpdate()

> `private` **\_handleUpdate**(`state`, `resolve`): `Promise`\<`void`\>

Defined in: [auth.ts:128](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L128)

###### Parameters

###### state

[`AuthorizationState`](types/README.md#authorizationstate)

###### resolve

() => `void`

###### Returns

`Promise`\<`void`\>

{Promise<void>}

###### Memberof

Authenticator

##### authenticate()

> **authenticate**(`options?`): `Promise`\<`void`\>

Defined in: [auth.ts:254](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L254)

###### Parameters

###### options?

`AuthenticateOptions`

###### Returns

`Promise`\<`void`\>

{Promise<void>}

###### Throws

if underlying method call throws

###### Throws

if authentication state changes to closed before authentication completes

###### Throws

whatever is reason of cancellation token

###### Memberof

Authenticator

###### Implementation of

`StageAuthenticate.authenticate`

##### code()

> **code**(`code`): `StageUser`

Defined in: [auth.ts:336](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L336)

###### Parameters

###### code

`Waiter`\<`string`, \[[`authenticationCodeInfo`](types/README.md#authenticationcodeinfo)\]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.code`

##### email()

> **email**(`email`): `StageUser`

Defined in: [auth.ts:324](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L324)

###### Parameters

###### email

`Waiter`\<`string`, \[\]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.email`

##### emailCode()

> **emailCode**(`emailCode`): `StageUser`

Defined in: [auth.ts:348](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L348)

###### Parameters

###### emailCode

`Waiter`\<`string`, \[[`emailAddressAuthenticationCodeInfo`](types/README.md#emailaddressauthenticationcodeinfo)\]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.emailCode`

##### password()

> **password**(`password`): `StageUser`

Defined in: [auth.ts:360](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L360)

###### Parameters

###### password

`Waiter`\<`string`, \[`string`\]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.password`

##### phone()

> **phone**(`phone`, `settings?`): `StageUser`

Defined in: [auth.ts:308](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L308)

###### Parameters

###### phone

`Waiter`\<`string`, \[\]\>

###### settings?

`Waiter`\<[`phoneNumberAuthenticationSettings$Input`](types/README.md#phonenumberauthenticationsettingsinput), \[\]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageSelect.phone`

##### register()

> **register**(`data`): `StageUser`

Defined in: [auth.ts:372](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L372)

###### Parameters

###### data

`Waiter`\<[`registerUser$DirectInput`](types/README.md#registeruserdirectinput), \[[`termsOfService`](types/README.md#termsofservice)\]\>

###### Returns

`StageUser`

{StageUser}

###### Memberof

Authenticator

###### Implementation of

`StageUser.register`

##### tdlibParameters()

> **tdlibParameters**(`parameters`): `StageSelect`

Defined in: [auth.ts:283](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L283)

###### Parameters

###### parameters

`Waiter`\<[`setTdlibParameters$DirectInput`](types/README.md#settdlibparametersdirectinput), \[\]\>

###### Returns

`StageSelect`

{StageSelect}

###### Memberof

Authenticator

###### Implementation of

`StageTDLibParameters.tdlibParameters`

##### token()

> **token**(`token`): `StageAuthenticate`

Defined in: [auth.ts:295](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L295)

###### Parameters

###### token

`Waiter`\<`string`, \[\]\>

###### Returns

`StageAuthenticate`

{StageSelect}

###### Memberof

Authenticator

###### Implementation of

`StageSelect.token`

##### create()

> `static` **create**(`client`): `StageTDLibParameters`

Defined in: [auth.ts:103](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/auth.ts#L103)

###### Parameters

###### client

[`Client`](#client)

###### Returns

`StageTDLibParameters`

{StageTDLibParameters}

###### Static

###### Memberof

Authenticator

***

### Client

Defined in: [client.ts:86](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L86)

#### Export

Client

#### Constructors

##### Constructor

> **new Client**(`adapter`): [`Client`](#client)

Defined in: [client.ts:98](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L98)

Creates an instance of Client.

###### Parameters

###### adapter

`TDLib`

###### Returns

[`Client`](#client)

###### Memberof

Client

#### Properties

##### \_adapter

> `private` `readonly` **\_adapter**: `TDLib`

Defined in: [client.ts:90](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L90)

##### \_client

> `private` `readonly` **\_client**: `TDLibClient`

Defined in: [client.ts:87](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L87)

##### \_requests

> `private` `readonly` **\_requests**: `Map`\<`number`, `PromiseWithResolvers`\<`any`\>\>

Defined in: [client.ts:88](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L88)

##### \_running

> `private` **\_running**: `undefined` \| `Promise`\<`void`\>

Defined in: [client.ts:252](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L252)

##### \_state

> `private` **\_state**: `ClientState` = `ClientState.PAUSED`

Defined in: [client.ts:91](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L91)

##### \_tdlibOptions

> `readonly` **\_tdlibOptions**: [`TDLibOptions`](#tdliboptions-1)

Defined in: [client.ts:106](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L106)

##### \_updates

> `private` `readonly` **\_updates**: `EventBus`\<[`Update`](types/README.md#update)\>

Defined in: [client.ts:89](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L89)

##### api

> `readonly` **api**: [`$AsyncApi`](types/README.md#asyncapi)

Defined in: [client.ts:104](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L104)

##### syncApi

> `readonly` **syncApi**: [`$SyncApi`](types/README.md#syncapi)

Defined in: [client.ts:105](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L105)

#### Accessors

##### tdlibOptions

###### Get Signature

> **get** **tdlibOptions**(): [`TDLibOptions`](#tdliboptions-1)

Defined in: [client.ts:326](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L326)

###### See

https://core.telegram.org/tdlib/options

###### Memberof

Client

###### Returns

[`TDLibOptions`](#tdliboptions-1)

##### updates

###### Get Signature

> **get** **updates**(): `Observable`\<[`Update`](types/README.md#update)\>

Defined in: [client.ts:337](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L337)

###### Memberof

Client

###### Returns

`Observable`\<[`Update`](types/README.md#update)\>

#### Methods

##### \_thread()

> `private` **\_thread**(): `Promise`\<`void`\>

Defined in: [client.ts:261](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L261)

###### Returns

`Promise`\<`void`\>

###### Memberof

Client

##### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [client.ts:381](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L381)

###### Returns

`Promise`\<`void`\>

###### Memberof

Client

##### execute()

> **execute**\<`T`\>(`method`, `parameters`): `ReturnType`\<[`$SyncApi`](types/README.md#syncapi)\[`T`\]\>

Defined in: [client.ts:245](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L245)

###### Type Parameters

###### T

`T` *extends* keyof [`$SyncApi`](types/README.md#syncapi)

###### Parameters

###### method

`T`

###### parameters

`OmitType`\<`Parameters`\<[`$MethodsDict`](types/README.md#methodsdict)\[`T`\]\>\[`0`\]\>

###### Returns

`ReturnType`\<[`$SyncApi`](types/README.md#syncapi)\[`T`\]\>

{Promise<ReturnType<$SyncApi[T]>>}

###### Throws

- [TDError](#tderror)

###### Memberof

Client

##### invoke()

> **invoke**\<`T`\>(`method`, `parameters`): `Promise`\<`ReturnType`\<[`$MethodsDict`](types/README.md#methodsdict)\[`T`\]\>\>

Defined in: [client.ts:118](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L118)

###### Type Parameters

###### T

`T` *extends* keyof [`$AsyncApi`](types/README.md#asyncapi)

###### Parameters

###### method

`T`

###### parameters

`Parameters`\<[`$AsyncApi`](types/README.md#asyncapi)\[`T`\]\>\[`0`\]

###### Returns

`Promise`\<`ReturnType`\<[`$MethodsDict`](types/README.md#methodsdict)\[`T`\]\>\>

{Promise<ReturnType<$AsyncApi[T]>>}

###### Throws

- [TDError](#tderror)

###### Memberof

Client

##### pause()

> **pause**(): `Promise`\<`void`\>

Defined in: [client.ts:365](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L365)

###### Returns

`Promise`\<`void`\>

###### Memberof

Client

##### start()

> **start**(): `Promise`\<`void`\>

Defined in: [client.ts:347](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L347)

###### Returns

`Promise`\<`void`\>

###### Memberof

Client

##### disableLogs()

> `static` **disableLogs**(`lib`): `void`

Defined in: [client.ts:153](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L153)

Disables logging of TDLib instance

###### Parameters

###### lib

`TDLib`

###### Returns

`void`

###### Static

###### Memberof

Client

##### execute()

> `static` **execute**\<`T`\>(`executor`, `method`, `parameters`): `ReturnType`\<[`$SyncApi`](types/README.md#syncapi)\[`T`\]\>

Defined in: [client.ts:168](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L168)

###### Type Parameters

###### T

`T` *extends* keyof [`$SyncApi`](types/README.md#syncapi)

###### Parameters

###### executor

`TDLib` | [`Client`](#client)

###### method

`T`

###### parameters

`Parameters`\<[`$SyncApi`](types/README.md#syncapi)\[`T`\]\>\[`0`\]

###### Returns

`ReturnType`\<[`$SyncApi`](types/README.md#syncapi)\[`T`\]\>

{Promise<ReturnType<$SyncMethodsDict[T]>>}

###### Throws

- [TDError](#tderror)

###### Memberof

Client

***

### TDError

Defined in: [client.ts:37](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L37)

#### Export

TDError

#### Implements

#### Extends

- `Error`

#### Implements

- [`error`](types/README.md#error-2)

#### Constructors

##### Constructor

> **new TDError**(`message`, `options?`): [`TDError`](#tderror)

Defined in: [client.ts:51](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L51)

Creates an instance of TDError.

###### Parameters

###### message

`string`

###### options?

###### code?

`number` = `Number.NaN`

###### method?

`string` = `"unknown method"`

###### parameters?

`unknown` = `...`

###### Returns

[`TDError`](#tderror)

###### Memberof

TDError

###### Overrides

`Error.constructor`

#### Properties

##### \_

> `readonly` **\_**: `"error"` = `"error"`

Defined in: [client.ts:38](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L38)

###### Implementation of

`error._`

##### code

> `readonly` **code**: `number`

Defined in: [client.ts:39](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L39)

Error code; subject to future changes. If the error code is 406, the error message must not be processed in any way and must not be displayed to the user

###### Implementation of

`error.code`

##### method

> `readonly` **method**: `string`

Defined in: [client.ts:40](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L40)

##### name

> **name**: `string` = `"TDError"`

Defined in: [client.ts:43](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L43)

###### Overrides

`Error.name`

##### parameters

> `readonly` **parameters**: `unknown`

Defined in: [client.ts:41](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L41)

#### Methods

##### toJSON()

> **toJSON**(): `object`

Defined in: [client.ts:67](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/client.ts#L67)

###### Returns

`object`

###### \_

> **\_**: `string`

###### code

> **code**: `number`

###### message

> **message**: `string`

###### method

> **method**: `string`

###### name

> **name**: `string`

###### parameters

> **parameters**: `unknown`

###### Memberof

TDError

***

### TDLibOptions

Defined in: [options.ts:306](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L306)

#### See

https://core.telegram.org/tdlib/options

#### Export

TDLibOptions

#### Constructors

##### Constructor

> **new TDLibOptions**(`api`): [`TDLibOptions`](#tdliboptions-1)

Defined in: [options.ts:327](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L327)

Creates an instance of TDLibOptions.

###### Parameters

###### api

[`$AsyncApi`](types/README.md#asyncapi)

###### Returns

[`TDLibOptions`](#tdliboptions-1)

###### Memberof

TDLibOptions

#### Properties

##### \_api

> `private` `readonly` **\_api**: [`$AsyncApi`](types/README.md#asyncapi)

Defined in: [options.ts:320](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L320)

#### Methods

##### assign()

> **assign**(`values`): `Promise`\<`void`\>

Defined in: [options.ts:442](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L442)

**Waits for `setTdlibParameters` to be called to respond.**

###### Parameters

###### values

`OptionsWritable`

###### Returns

`Promise`\<`void`\>

###### See

 - [https://t.me/tdlibchat/155412](https://t.me/tdlibchat/155412)
 - [https://core.telegram.org/tdlib/options](https://core.telegram.org/tdlib/options)

###### Memberof

TDLibOptions

##### delete()

> **delete**(`key`): `Promise`\<`void`\>

Defined in: [options.ts:429](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L429)

**Waits for `setTdlibParameters` to be called to respond.**

###### Parameters

###### key

`Keys`

###### Returns

`Promise`\<`void`\>

###### See

 - [https://t.me/tdlibchat/155412](https://t.me/tdlibchat/155412)
 - [https://core.telegram.org/tdlib/options](https://core.telegram.org/tdlib/options)

###### Memberof

TDLibOptions

##### get()

> **get**\<`T`\>(`key`): `Promise`\<`OptionsReadable`\[`T`\]\>

Defined in: [options.ts:342](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L342)

**Waits for `setTdlibParameters` to be called to respond.**
Exception: "version", "commit_hash"

###### Type Parameters

###### T

`T` *extends* `Keys`

###### Parameters

###### key

`T`

###### Returns

`Promise`\<`OptionsReadable`\[`T`\]\>

{Promise<TelegramOptionsExtended[T]>}

###### See

 - [https://t.me/tdlibchat/155412](https://t.me/tdlibchat/155412)
 - [https://core.telegram.org/tdlib/options](https://core.telegram.org/tdlib/options)

###### Memberof

TDLibOptions

##### set()

> **set**\<`T`\>(`key`, `value`): `Promise`\<`void`\>

Defined in: [options.ts:381](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L381)

**Waits for `setTdlibParameters` to be called to respond.**

###### Type Parameters

###### T

`T` *extends* `WritableKeys`

###### Parameters

###### key

`T`

###### value

`OptionsWritable`\[`T`\]

###### Returns

`Promise`\<`void`\>

{Promise<void>}

###### See

 - [https://t.me/tdlibchat/155412](https://t.me/tdlibchat/155412)
 - [https://core.telegram.org/tdlib/options](https://core.telegram.org/tdlib/options)

###### Memberof

TDLibOptions

##### ~~for()~~

> `static` **for**(`api`): [`TDLibOptions`](#tdliboptions-1)

Defined in: [options.ts:316](https://github.com/AlexXanderGrib/node-tdlib/blob/8e963d3ee48e8d4dae2160204f179278bbc5626e/src/options.ts#L316)

###### Parameters

###### api

[`$AsyncApi`](types/README.md#asyncapi)

###### Returns

[`TDLibOptions`](#tdliboptions-1)

{TDLibOptions}

###### Static

###### Memberof

TDLibOptions

###### Deprecated

Removed instance caching, use `new TDLibOptions()` instead

## References

### default

Renames and re-exports [Client](#client)

***

### markup

Re-exports [markup](markup.md)

***

### Markup

Renames and re-exports [markup](markup.md)

***

### types

Re-exports [types](types/README.md)
