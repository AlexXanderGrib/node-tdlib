export type ClientId = number;

export type Addon = {
  td_json_client_create(timeoutSec: number): ClientId;
  td_json_client_send(client: ClientId, json: string): void;
  td_json_client_receive(client: ClientId): Promise<string | null>;
  td_json_client_execute(client: ClientId | null, json: string): string | null;
  td_json_client_destroy(client: ClientId): void;
  td_set_log_message_callback(
    level: number,
    callback: null | ((errorMessage: string) => void)
  ): void;
  td_create_client_id(): ClientId;
  td_send(client: ClientId, json: string): void;
  td_receive(): Promise<string | null>;
  td_execute(json: string): string;
  tdn_init(timeoutSec: number): void;
  tdn_ref(): void;
  tdn_unref(): void;

  load_tdjson(path: string): void;
  load_tdjson_dynamic(path: string): void;
  load_tdjson_static(path: string): void;
  get_loading_mode(): "static" | "dynamic";
  is_td_loaded(): boolean;
  unload_tdjson(): void;
};

declare const addon: Addon;
export { addon };
