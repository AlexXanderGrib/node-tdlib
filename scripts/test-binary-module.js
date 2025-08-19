// @ts-check
const assert = require("assert");
const { downloader, PlatformLibrary } = require("./lib");
const { writeFile } = require("fs/promises");

(async function main() {
  const { platform, arch, libc, build } = PlatformLibrary.getCurrentBuild();

  assert(
    build,
    `Build not found for this platform ${platform} ${arch} libc - ${libc}`
  );

  const meta = await downloader.get("meta.yml");
  const content = await downloader.get(build.tdlib);

  const { tdlibPath, commit, version } = require(
    `${process.cwd()}/packages/${build.tdlibPackageName}`
  );
  const metaContent = `version: ${version}\ncommit-hash: ${commit}`;
  assert.equal(metaContent, meta.toString("ascii").trim());

  await writeFile(tdlibPath, content);

  console.log(tdlibPath);
})();
