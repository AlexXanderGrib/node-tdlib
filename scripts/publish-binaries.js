const { execFileSync, spawnSync } = require("node:child_process");
const { readdirSync } = require("node:fs");
const path = require("node:path");

const packages = path.resolve(__dirname, "../packages");
const platforms = readdirSync(packages).filter((name) => name.startsWith("tdjson-"));

// Publish the dispatcher last so its optional dependencies are already available.
for (const directory of [...platforms, "tdjson"]) {
  const cwd = path.join(packages, directory);
  const { name, version } = require(path.join(cwd, "package.json"));
  const specifier = `${name}@${version}`;
  const published = spawnSync("npm", ["view", specifier, "version", "--json"], {
    encoding: "utf8"
  });
  if (published.error) throw published.error;
  if (published.status === 0) {
    if (JSON.parse(published.stdout) !== version) {
      throw new Error(`Unexpected registry version for ${specifier}`);
    }
    console.log(`Already published: ${specifier}`);
    continue;
  }
  // Fail on auth/network errors; only a missing version is safe to publish.
  if (!published.stderr.includes("E404")) {
    throw new Error(published.stderr || `Registry lookup failed for ${specifier}`);
  }
  if (directory !== "tdjson") {
    execFileSync("bash", ["download.sh"], { cwd, stdio: "inherit" });
  }
  console.log(`Publishing ${specifier}`);
  execFileSync(
    "npm",
    ["publish", "--access", "public", "--provenance", "--tag", "latest"],
    {
      cwd,
      stdio: "inherit"
    }
  );
}
