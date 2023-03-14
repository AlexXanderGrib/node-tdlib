export type TDLibClient = { __type: "TDLibClient" };

export interface TDLib {
  readonly _isTDLib: true;
  readonly name: string;

  create(): TDLibClient;
  destroy(client: TDLibClient): void;
  execute(client: null | TDLibClient, json: string): string | null;
  receive(client: TDLibClient, timeout: number): Promise<string | null>;
  send(client: TDLibClient, json: string): void;
  setLogFatalErrorCallback(callback: null | ((errorMessage: string) => void)): void;
}
