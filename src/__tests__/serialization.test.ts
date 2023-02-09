import { TDLibAddon } from "../addon";
import { Client, TDError } from "../client";
import { randomBytes } from "crypto";
import { Meta } from "../generated/meta";

describe("Client Serialization", () => {
  let client: Client;

  beforeAll(async () => {
    const adapter = await TDLibAddon.create();

    client = new Client(adapter);
    client.start();
    await client.api.setLogVerbosityLevel({ new_verbosity_level: 0 });
  });

  const string = 'Test {"_": "Passed"}';
  const int32 = 2 << 30;
  const int64 = "36893488147419103232";
  const bytes = randomBytes(8);

  test("testCallBytes", async () => {
    const resultHex = await client.api.testCallBytes({
      x: bytes.toString("hex")
    });

    expect(resultHex).toEqual({ _: "testBytes", value: bytes.toString("hex") });

    const resultBase64 = await client.api.testCallBytes({
      x: bytes.toString("base64")
    });

    expect(resultBase64).toEqual({
      _: "testBytes",
      value: bytes.toString("base64")
    });
  });

  test("testCallEmpty", async () => {
    const result = await client.api.testCallEmpty({ x: bytes });
    expect(result).toEqual({ _: "ok" });
  });

  test("testCallString", async () => {
    const result = await client.api.testCallString({ x: string });
    expect(result).toEqual({ _: "testString", value: string });
  });

  test("testCallVectorInt", async () => {
    const result = await client.api.testCallVectorInt({ x: [int32] });
    expect(result).toEqual({ _: "testVectorInt", value: [int32] });
  });

  test("testVectorString", async () => {
    const result = await client.api.testCallVectorString({
      x: [string, int64]
    });
    expect(result).toEqual({ _: "testVectorString", value: [string, int64] });
  });

  test("testVectorString", async () => {
    const code = int32;
    const message = string;

    try {
      await client.api.testReturnError({
        error: { _: "error", code, message }
      });

      expect(false).toBe("Error should be thrown");
    } catch (error: any) {
      expect(error).toBeInstanceOf(TDError);
      expect(error.code).toBe(code);
      expect(error.message).toBe(message);
      expect(error.method).toBe("testReturnError");
      expect(error.parameters).toEqual({
        error: { _: "error", code, message }
      });
    }
  });

  test("version", async () => {
    const version = await client.api.getOption({ name: "version" });
    expect(version).toEqual({ _: "optionValueString", value: Meta.version });

    const commitHash = await client.api.getOption({ name: "commit_hash" });
    expect(commitHash).toEqual({ _: "optionValueString", value: Meta.commitHash });
  });
});
