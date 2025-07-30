import { describe, test, expect } from "vitest";
import "dotenv/config";
import { getTestClient } from "./client";
import path from "path";
import { rm } from "fs/promises";
import { Authenticator } from "../auth";

describe("Updates", () => {
  test(
    "Auth",
    { skip: process.env.TELEGRAM_BOT_TOKEN === undefined, timeout: 10_000 },
    async () => {
      await rm(path.resolve(".td"), { recursive: true, force: true });

      const client = await getTestClient();

      const authenticator = Authenticator.create(client)
        .tdlibParameters(async () => {
          const version = await client.api.getOption({ name: "version" });
          const apiHash = process.env.TELEGRAM_API_HASH || "";

          return {
            api_hash: apiHash,
            api_id: Number.parseInt(process.env.TELEGRAM_API_ID || "0"),
            system_language_code: "ru",
            device_model: "Test Server github.com/AlexXanderGrib/node-tdlib",
            application_version: `Build for TDLib-${
              version._ === "optionValueString" ? version.value : ""
            }`,
            database_directory: path.resolve(".td/db"),
            database_encryption_key: apiHash,
            files_directory: path.resolve(".td/files"),
            system_version: "0.0.0",
            use_test_dc: false
          };
        })
        .token(process.env.TELEGRAM_BOT_TOKEN as string);

      await Promise.all([client.start(), authenticator.authenticate()]);

      expect(typeof (await client.tdlibOptions.get("unix_time"))).toBe("bigint");

      await client.tdlibOptions.assign({
        x_custom: 33
      });

      expect(await client.tdlibOptions.get("x_custom")).toBe(33n);
      await client.tdlibOptions.delete("x_custom");

      const id = await client.tdlibOptions.get("my_id");
      expect(id).toBeTypeOf("bigint");

      await client.api.close({});
      await client.destroy();
    }
  );
});
