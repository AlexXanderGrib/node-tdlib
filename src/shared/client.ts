declare const TDLibClient: unique symbol;
export type TDLibClient = typeof TDLibClient;

export interface TDLib {
  readonly name: string;

  create(): TDLibClient;
  destroy(client: TDLibClient): void;
  execute(client: null | TDLibClient, json: string): string | null;
  receive(client: TDLibClient, timeout: number): Promise<string | null>;
  send(client: TDLibClient, json: string): void;
  setLogFatalErrorCallback(callback: null | ((errorMessage: string) => void)): void;
}
