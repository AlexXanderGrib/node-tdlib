export type TDLibClient = { __type: "TDLibClient" };

export type TDLib = {
  readonly _isTDLib: true;
  readonly name: string;

  create(timeout: number): TDLibClient;
  destroy(client: TDLibClient): Promise<void>;
  execute(client: null | TDLibClient, json: string): string | null;
  receive(client: TDLibClient): Promise<string | null>;
  send(client: TDLibClient, json: string): void;
  setLogMessageCallback(level: number, callback: null | ((errorMessage: string) => void)): void;
};
