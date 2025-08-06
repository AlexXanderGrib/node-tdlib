import { TDLibClient } from "../shared/client";

export type Addon = {
  td_json_client_create(timeoutSec: number): TDLibClient;
  td_json_client_send(client: TDLibClient, json: string): void;
  td_json_client_receive(client: TDLibClient): Promise<string | null>;
  td_json_client_execute(client: TDLibClient | null, json: string): string | null;
  td_json_client_destroy(client: TDLibClient): void;
  td_set_log_message_callback(
    level: number,
    callback: null | ((errorMessage: string) => void)
  ): void;
  td_create_client_id(): TDLibClient;
  td_send(client: TDLibClient, json: string): void;
  td_receive(): Promise<string | null>;
  td_execute(json: string): string;
  tdn_init(timeoutSec: number): void;
  tdn_ref(): void;
  tdn_unref(): void;
  load_tdjson(path: string): void;
};
