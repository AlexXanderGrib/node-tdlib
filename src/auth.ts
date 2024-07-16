import { Client } from "./client";
import {
  setTdlibParameters$DirectInput,
  phoneNumberAuthenticationSettings$Input,
  authenticationCodeInfo,
  emailAddressAuthenticationCodeInfo,
  registerUser$DirectInput,
  TermsOfService,
  AuthorizationState,
  AuthorizationState$Type,
  Update$Type,
  typename
} from "./generated/types";

type AuthenticateOptions = {
  readonly signal?: AbortSignal;
};

type Waiter<T, A extends readonly unknown[] = []> =
  | T
  | ((...parameters: A) => T | PromiseLike<T>);

/**
 *
 *
 * @template {string|object|number|boolean} T
 * @template {unknown[]} A
 *
 * @param {Waiter<T, A>} waiter
 * @param {...A} parameters
 * @returns {Promise<T>}
 */
async function wait<
  T extends string | object | number | boolean,
  A extends readonly unknown[]
>(waiter: Waiter<T, A>, ...parameters: A): Promise<T> {
  if (typeof waiter === "function") {
    return await waiter(...parameters);
  }

  return waiter;
}

type AuthenticatorState = {
  parameters: Waiter<setTdlibParameters$DirectInput>;
  phone: Waiter<string>;
  token: Waiter<string>;
  phoneSettings: Waiter<phoneNumberAuthenticationSettings$Input>;
  email: Waiter<string>;
  otherDevice: Waiter<string, [link: string]>;
  code: Waiter<string, [info: authenticationCodeInfo]>;
  emailCode: Waiter<string, [info: emailAddressAuthenticationCodeInfo]>;
  password: Waiter<string, [hint: string]>;
  register: Waiter<registerUser$DirectInput, [tos: TermsOfService]>;
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export interface StageTDLibParameters {
  tdlibParameters(parameters: AuthenticatorState["parameters"]): StageSelect;
}

export interface StageSelect {
  token(token: AuthenticatorState["token"]): StageAuthenticate;
  phone(
    phone: AuthenticatorState["phone"],
    settings?: AuthenticatorState["phoneSettings"]
  ): StageUser;
}

export interface StageAuthenticate {
  authenticate(options?: AuthenticateOptions): Promise<void>;
}

export interface StageUser extends StageAuthenticate {
  email(email: AuthenticatorState["email"]): StageUser;
  code(email: AuthenticatorState["code"]): StageUser;
  emailCode(email: AuthenticatorState["emailCode"]): StageUser;
  password(password: AuthenticatorState["password"]): StageUser;
  register(data: AuthenticatorState["register"]): StageUser;
}

/**
 *
 *
 * @export
 * @class Authenticator
 * @implements {StageTDLibParameters}
 * @implements {StageSelect}
 * @implements {StageAuthenticate}
 * @implements {StageUser}
 */
export class Authenticator
  implements StageTDLibParameters, StageSelect, StageAuthenticate, StageUser
{
  /**
   *
   *
   * @static
   * @param {Client} client
   * @returns {StageTDLibParameters}  {StageTDLibParameters}
   * @memberof Authenticator
   */
  static create(client: Client): StageTDLibParameters {
    return new Authenticator(client);
  }

  private readonly _client: Client;
  private readonly _state: Partial<AuthenticatorState> = {};

  /**
   * Creates an instance of Authenticator.
   * @param {Client} client
   * @memberof Authenticator
   */
  private constructor(client: Client) {
    this._client = client;
  }

  /**
   *
   *
   * @private
   * @param {AuthorizationState} state
   * @param {function(): void} resolve
   * @returns {Promise<void>}  {Promise<void>}
   * @memberof Authenticator
   */
  private async _handleUpdate(
    state: AuthorizationState,
    resolve: () => void
  ): Promise<void> {
    switch (state._) {
      case AuthorizationState$Type.Ready: {
        resolve();
        return;
      }

      case AuthorizationState$Type.Closed:
      case AuthorizationState$Type.Closing:
      case AuthorizationState$Type.LoggingOut: {
        throw new Error("Closing");
      }

      case AuthorizationState$Type.WaitCode: {
        if (!this._state.code) {
          return;
        }

        await this._client.api.checkAuthenticationCode({
          code: await wait(this._state.code, state.code_info)
        });
        return;
      }
      case AuthorizationState$Type.WaitEmailAddress: {
        if (!this._state.email) {
          return;
        }

        await this._client.api.setAuthenticationEmailAddress({
          email_address: await wait(this._state.email)
        });
        return;
      }

      case AuthorizationState$Type.WaitEmailCode: {
        if (!this._state.emailCode) {
          return;
        }

        await this._client.api.checkAuthenticationEmailCode({
          code: {
            [typename]: "emailAddressAuthenticationCode",
            code: await wait(this._state.emailCode, state.code_info)
          }
        });
        return;
      }

      case AuthorizationState$Type.WaitOtherDeviceConfirmation: {
        if (!this._state.otherDevice) {
          return;
        }

        await wait(this._state.otherDevice, state.link);
        return;
      }

      case AuthorizationState$Type.WaitPassword: {
        if (!this._state.password) {
          return;
        }

        await this._client.api.checkAuthenticationPassword({
          password: await wait(this._state.password, state.password_hint)
        });
        return;
      }
      case AuthorizationState$Type.WaitPhoneNumber: {
        if (this._state.token) {
          await this._client.api.checkAuthenticationBotToken({
            token: await wait(this._state.token)
          });
          return;
        }

        if (this._state.phone) {
          await this._client.api.setAuthenticationPhoneNumber({
            phone_number: await wait(this._state.phone),
            settings: this._state.phoneSettings
              ? await wait(this._state.phoneSettings)
              : undefined
          });
        }

        return;
      }

      case AuthorizationState$Type.WaitTdlibParameters: {
        if (!this._state.parameters) {
          return;
        }

        await this._client.api.setTdlibParameters(
          await wait(this._state.parameters)
        );
        return;
      }

      case AuthorizationState$Type.WaitRegistration: {
        if (!this._state.register) {
          return;
        }

        await this._client.api.registerUser(
          await wait(this._state.register, state.terms_of_service)
        );
        return;
      }

      default:
    }
  }

  /**
   *
   *
   * @param {AuthenticateOptions} [options]
   * @returns {Promise<void>}  {Promise<void>}
   * @throws {TDError} if underlying method call throws
   * @throws {Error} if authentication state changes to closed before authentication completes
   * @throws {Error} whatever is reason of cancellation token
   * @memberof Authenticator
   */
  async authenticate(options?: AuthenticateOptions): Promise<void> {
    let unsubscribe: (() => void) | undefined;

    const promise = new Promise<void>((resolve, reject) => {
      unsubscribe = this._client.updates.subscribe((update) => {
        if (update._ !== Update$Type.AuthorizationState) {
          return;
        }

        this._handleUpdate(update.authorization_state, resolve).catch(reject);
      });

      options?.signal?.addEventListener("abort", reject, { once: true });
    });

    try {
      return await promise;
    } finally {
      unsubscribe?.();
    }
  }

  /**
   *
   *
   * @param {*} parameters
   * @returns {StageSelect}  {StageSelect}
   * @memberof Authenticator
   */
  tdlibParameters(parameters: AuthenticatorState["parameters"]): StageSelect {
    this._state.parameters = parameters;
    return this;
  }

  /**
   *
   *
   * @param {Waiter<string>} token
   * @returns {StageSelect}  {StageSelect}
   * @memberof Authenticator
   */
  token(token: AuthenticatorState["token"]): StageAuthenticate {
    this._state.token = token;
    return this;
  }

  /**
   *
   *
   * @param {Waiter<string>} phone
   * @param {*} settings
   * @returns {StageUser}  {StageUser}
   * @memberof Authenticator
   */
  phone(
    phone: AuthenticatorState["phone"],
    settings?: AuthenticatorState["phoneSettings"]
  ): StageUser {
    this._state.phone = phone;
    this._state.phoneSettings = settings;
    return this;
  }

  /**
   *
   *
   * @param {Waiter<string>} email
   * @returns {StageUser}  {StageUser}
   * @memberof Authenticator
   */
  email(email: AuthenticatorState["email"]): StageUser {
    this._state.email = email;
    return this;
  }

  /**
   *
   *
   * @param {Waiter<string>} code
   * @returns {StageUser}  {StageUser}
   * @memberof Authenticator
   */
  code(code: AuthenticatorState["code"]): StageUser {
    this._state.code = code;
    return this;
  }

  /**
   *
   *
   * @param {Waiter<string>} emailCode
   * @returns {StageUser}  {StageUser}
   * @memberof Authenticator
   */
  emailCode(emailCode: AuthenticatorState["emailCode"]): StageUser {
    this._state.emailCode = emailCode;
    return this;
  }

  /**
   *
   *
   * @param {Waiter<string>} password
   * @returns {StageUser}  {StageUser}
   * @memberof Authenticator
   */
  password(password: AuthenticatorState["password"]): StageUser {
    this._state.password = password;
    return this;
  }

  /**
   *
   *
   * @param {*} data
   * @returns {StageUser}  {StageUser}
   * @memberof Authenticator
   */
  register(data: AuthenticatorState["register"]): StageUser {
    this._state.register = data;
    return this;
  }
}
