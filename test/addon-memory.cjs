// Synthetic peak queue benchmark; accepts an alternative addon for comparison.
const { execFileSync } = require("node:child_process");
const { mkdirSync } = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const addonPath = path.resolve(
  process.argv[2] || path.join(root, "build/Release/td.node")
);
const directory = path.join(root, ".cache/addon-benchmark");
const library = path.join(
  directory,
  process.platform === "darwin" ? "tdjson.dylib" : "tdjson.so"
);
mkdirSync(directory, { recursive: true });
execFileSync(process.env.CXX || "c++", [
  "-std=c++17",
  "-shared",
  "-fPIC",
  "-pthread",
  "-DNO_REGISTRATION_LOG",
  path.join(__dirname, "fixtures/tdjson.cpp"),
  "-o",
  library
]);
const source = `
  const addon = require(${JSON.stringify(addonPath)});
  addon.load_tdjson(${JSON.stringify(library)});
  addon.td_set_log_message_callback(3, () => {});
  const before = process.memoryUsage().rss;
  addon.td_execute('flood');
  const peak = process.memoryUsage().rss;
  console.log(JSON.stringify({
    messages: 10000, messageBytes: 32768,
    rssGrowthMiB: (peak - before) / 2 ** 20
  }));
  // The measurement finishes before JS drains any queued messages.
  process.exit(0);
`;
process.stdout.write(
  execFileSync(process.execPath, ["-e", source], { encoding: "utf8" })
);
