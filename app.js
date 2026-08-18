// app.js
const isWindows = process.platform === "win32";
const nextCommand = isWindows ? "next.cmd" : "next";

const nextBin = path.join(
  __dirname,
  "node_modules",
  ".bin",
  nextCommand
);

const server = spawn(nextBin, ["start"], {
  cwd: __dirname,
  env: {
    ...process.env,
    NODE_ENV: "production",
  },
  stdio: "inherit",
});

server.on("error", (error) => {
  console.error("Failed to start Next.js server:", error);
  process.exit(1);
});

server.on("exit", (code, signal) => {
  if (signal) {
    console.error(`Next.js server stopped by signal: ${signal}`);
  } else {
    console.log(`Next.js server stopped with code: ${code}`);
  }

  process.exit(code || 0);
});