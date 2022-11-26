import { TDLibAddon } from "../addon";
import { Client } from "../client";
import type { Update } from "../generated/types";
import "dotenv/config";

describe("Updates", () => {
  let client: Client;

  beforeAll(async () => {
    const adapter = await TDLibAddon.create();
    client = new Client(adapter);
    client.start();
    await client.invoke("setLogVerbosityLevel", { new_verbosity_level: 0 });
  });

  test("Updates", async () => {
    const apiHash = process.env.TELEGRAM_API_HASH || "";
    const version = await client.invoke("getOption", { name: "version" });
    console.log({ version });

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
      enable_storage_optimizer: true,
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
});
