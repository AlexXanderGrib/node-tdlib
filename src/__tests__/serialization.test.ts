import { TDLibAddon } from "../addon";
import { Client } from "../client";
import { randomBytes } from "crypto";
import { Meta } from "../generated/meta";

describe("Client Serialization", () => {
  let client: Client;

  beforeAll(async () => {
    const adapter = await TDLibAddon.create();
    client = new Client(adapter);
    client.start();
    await client.invoke("setLogVerbosityLevel", { new_verbosity_level: 0 });
  });

  const string = 'Test {"_": "Passed"}';
  const int32 = 2 << 30;
  const int64 = "36893488147419103232";
  const bytes = randomBytes(8).toString("base64");

  test("testCallBytes", async () => {
    const result = await client.invoke("testCallBytes", { x: bytes });
    expect(result).toEqual({ _: "testBytes", value: bytes });
  });

  test("testCallEmpty", async () => {
    const result = await client.invoke("testCallEmpty", { x: bytes });
    expect(result).toEqual({ _: "ok" });
  });

  test("testCallString", async () => {
    const result = await client.invoke("testCallString", { x: string });
    expect(result).toEqual({ _: "testString", value: string });
  });

  test("testCallVectorInt", async () => {
    const result = await client.invoke("testCallVectorInt", { x: [int32] });
    expect(result).toEqual({ _: "testVectorInt", value: [int32] });
  });

  test("testVectorString", async () => {
    const result = await client.invoke("testCallVectorString", {
      x: [string, int64]
    });
    expect(result).toEqual({ _: "testVectorString", value: [string, int64] });
  });

  test("version", async () => {
    const version = await client.invoke("getOption", { name: "version" });
    expect(version).toEqual({ _: "optionValueString", value: Meta.version });

    const commitHash = await client.invoke("getOption", { name: "commit_hash" });
    expect(commitHash).toEqual({ _: "optionValueString", value: Meta.commitHash });
  });
});
