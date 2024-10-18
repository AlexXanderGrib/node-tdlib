import { describe, test, expect, beforeAll, afterAll } from "vitest";
import { Client } from "../client";
import type { Update } from "../generated/types";
import "dotenv/config";
import { getTestClient } from "./client";

describe("Updates", () => {
  let client: Client;

  beforeAll(async () => {
    client = await getTestClient();
    await client.start();
  });

  afterAll(async () => {
    await client.api.close({});
    await client.destroy();
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
