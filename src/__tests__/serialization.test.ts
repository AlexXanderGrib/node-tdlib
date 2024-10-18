import { describe, test, expect, beforeAll, assert, afterAll } from "vitest";
import { Client, TDError } from "../client";
import { randomBytes } from "crypto";
import { Meta } from "../generated/meta";
import type { error, optionValueString } from "../generated/types";
import { getTestClient } from "./client";

describe("Client Serialization (async)", () => {
  let client: Client;

  beforeAll(async () => {
    client = await getTestClient();
    await client.start();
  });

  afterAll(async () => {
    await client.api.close({});
    await client.destroy();
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

    const resultRaw = await client.api.testCallBytes({
      x: bytes
    });

    expect(resultRaw).toEqual({
      _: "testBytes",
      value: bytes.toString("base64")
    });

    const resultUint8 = await client.api.testCallBytes({
      x: new Uint8Array(bytes)
    });

    expect(resultUint8).toEqual({
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
    expect(commitHash._).toBe("optionValueString");
    expect([Meta.commitHash, "GITDIR-NOTFOUND"]).toContain(
      (commitHash as optionValueString).value
    );
  });

  test("error", async () => {
    const input: error = {
      _: "error",
      code: 1337,
      message: "Test"
    };

    try {
      await client.api.testReturnError({ error: input });

      assert.fail("Should throw error");
    } catch (error) {
      expect(error).toBeInstanceOf(TDError);
      expect(error).toMatchObject(input);
    }
  });
});

describe("Client Serialization (sync)", () => {
  let client: Client;

  beforeAll(async () => {
    client = await getTestClient();
    await client.start();
  });

  afterAll(async () => {
    await client.api.close({});
    await client.destroy();
  });

  test("version", () => {
    const version = client.syncApi.getOption({ name: "version" });
    expect(version).toEqual({ _: "optionValueString", value: Meta.version });

    const commitHash = client.syncApi.getOption({ name: "commit_hash" });
    expect(commitHash).toEqual({ _: "optionValueString", value: Meta.commitHash });
  });

  test("error", () => {
    const input: error = {
      _: "error",
      code: 1337,
      message: "Test"
    };

    try {
      client.syncApi.testReturnError({ error: input });
      assert.fail("Should throw error");
    } catch (error) {
      expect(error).toBeInstanceOf(TDError);
      expect(error).toMatchObject(input);
    }
  });
});
