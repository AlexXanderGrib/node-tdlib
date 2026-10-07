export type ClientId = number;
export type Client = { __type: "TDLibClient" };

export type Addon = {
  td_client_create(
    timeoutSec: number,
    maxQueuedResponses?: number,
    maxQueuedBytes?: number
  ): Client;
  td_client_send(client: Client, json: string): void;
  td_client_receive(client: Client): Promise<string | null>;
  td_client_execute(client: Client | null, json: string): string | null;
  td_client_destroy(client: Client): Promise<void>;
  td_json_client_create(timeoutSec: number): Client;
  td_json_client_send(client: Client, json: string): void;
  td_json_client_receive(client: Client): Promise<string | null>;
  td_json_client_execute(client: Client | null, json: string): string | null;
  td_json_client_destroy(client: Client): void;
  td_set_log_message_callback(
    level: number,
    callback: null | ((verbosityLevel: number, errorMessage: string) => void)
  ): void;
  td_create_client_id(): ClientId;
  td_send(client: ClientId, json: string): void;
  td_receive(): Promise<string | null>;
  td_execute(json: string): string | null;
  tdn_init(timeoutSec: number): void;
  tdn_ref(): void;
  tdn_unref(): void;

  load_tdjson(path: string): boolean;
  load_tdjson_dynamic(path: string): boolean;
  get_loading_mode(): "dynamic";
  is_td_loaded(): boolean;
  unload_tdjson(): void;
};

declare const addon: Addon;
export { addon };
