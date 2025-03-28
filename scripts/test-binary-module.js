const assert = require("assert");
const { family } = require("detect-libc");
const { builds, downloader } = require("./lib");
const { writeFile } = require("fs/promises");
const path = require("path");
const { tmpdir } = require("os");

(async function main() {
  const libc = (await family()) ?? undefined;
  const build = builds.find(
    (b) => b.cpu === process.arch && b.os === process.platform && b.libc === libc
  );

  assert(
    build,
    `Build not found for this platform ${process.platform} ${process.arch} libc - ${libc}`
  );

  let name = `tdjson-${build.os}-${build.cpu}`;

  if (build.libc) {
    name += `-${build.libc}`;
  }

  const meta = await downloader.get("meta.yml");

  const { tdlibPath, commit, version } = require(`${process.cwd()}/packages/${name}`);
  const metaContent = `version: ${version}\ncommit-hash: ${commit}`;

  assert.equal(metaContent, meta.toString('ascii').trim());

  console.log(tdlibPath);
})();
