import { TDLibClient } from "../shared/client";

export type Addon = {
  td_client_create(
    timeoutSec: number,
    maxQueuedResponses?: number,
    maxQueuedBytes?: number
  ): TDLibClient;
  td_client_send(client: TDLibClient, json: string): void;
  td_client_receive(client: TDLibClient): Promise<string | null>;
  td_client_execute(client: TDLibClient | null, json: string): string | null;
  td_client_destroy(client: TDLibClient): Promise<void>;
  td_json_client_create(timeoutSec: number): TDLibClient;
  td_json_client_send(client: TDLibClient, json: string): void;
  td_json_client_receive(client: TDLibClient): Promise<string | null>;
  td_json_client_execute(client: TDLibClient | null, json: string): string | null;
  td_json_client_destroy(client: TDLibClient): void;
  td_set_log_message_callback(
    level: number,
    callback: null | ((verbosityLevel: number, errorMessage: string) => void)
  ): void;
  td_create_client_id(): number;
  td_send(client: number, json: string): void;
  td_receive(): Promise<string | null>;
  td_execute(json: string): string | null;
  tdn_init(timeoutSec: number): void;
  tdn_ref(): void;
  tdn_unref(): void;
  load_tdjson(path: string): boolean;
  load_tdjson_dynamic(path: string): boolean;
  is_td_loaded(): boolean;
  get_loading_mode(): "dynamic";
  unload_tdjson(): void;
};
