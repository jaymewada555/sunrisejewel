const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const source = path.join(projectRoot, "web.config");
const destination = path.join(projectRoot, "out", "web.config");

fs.copyFileSync(source, destination);
console.log("Copied web.config to out/");