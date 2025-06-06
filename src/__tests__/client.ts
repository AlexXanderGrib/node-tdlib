import { TDLibAddon } from "../addon";
import { Client } from "../client";

let addon: TDLibAddon;

export async function getTestClient() {
  addon ??= await setupAddon();
  return new Client(addon);
}

async function setupAddon(): Promise<TDLibAddon> {
  const addon = await TDLibAddon.create(process.env.TDLIB_PATH);
  Client.disableLogs(addon);

  return addon;
}
