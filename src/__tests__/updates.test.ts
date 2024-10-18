import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { TDLibAddon } from "../addon";
import { Client } from "../client";
import type { Update } from "../generated/types";
import "dotenv/config";

let adapter: TDLibAddon;

describe("Updates", () => {
  let client: Client;

  beforeAll(async () => {
    adapter ??= await TDLibAddon.create(process.env.TDLIB_PATH);
    Client.execute(adapter, "setLogVerbosityLevel", { new_verbosity_level: 0 });

    expect(adapter.name).toBe("addon");
    adapter.setLogFatalErrorCallback(console.error);

    client = new Client(adapter);
    client.start();
  });

  afterAll(async () => {
    await client.api.close({});
    // client.destroy();
  });

  test("Updates", async () => {
    const apiHash = process.env.TELEGRAM_API_HASH || "";
    const version = await client.api.getOption({ name: "version" });

    await client.invoke("setTdlibParameters", {
      api_hash: apiHash,
      api_id: Number.parseInt(process.env.TELEGRAM_API_ID || "0"),
      system_language_code: "ru",
      device_model: "Server github.com/AlexXanderGrib/node-tdlib",
      application_version: `Build for TDLib-${
        version._ === "optionValueString" ? version.value : ""
      }`,
      database_directory: ".td/db",
      database_encryption_key: apiHash,
      files_directory: ".td/files",
      system_version: "0.0.0",
      use_test_dc: false
    });

    const update = await new Promise<Update>((resolve) => {
      const unsubscribe = client.updates.subscribe((update) => {
        resolve(update);
        unsubscribe();
      });
    });

    expect(update._.startsWith("update")).toBeTruthy();
  });

  test("Options", async () => {
    expect(typeof (await client.tdlibOptions.get("unix_time"))).toBe("bigint");

    await client.tdlibOptions.assign({
      x_custom: 33
    });

    expect(await client.tdlibOptions.get("x_custom")).toBe(33n);
    await client.tdlibOptions.delete("x_custom");
  });
});
