const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const outputDirectory = path.join(__dirname, "out");
const port = process.env.PORT || 3000;

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function getFilePath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  const relativePath = pathname.replace(/^\/+/, "");
  const requestedPath = path.resolve(outputDirectory, relativePath);

  if (requestedPath !== outputDirectory && !requestedPath.startsWith(`${outputDirectory}${path.sep}`)) {
    return null;
  }

  if (pathname.endsWith("/")) {
    return path.join(requestedPath, "index.html");
  }

  if (path.extname(requestedPath)) {
    return requestedPath;
  }

  return path.join(requestedPath, "index.html");
}

const server = http.createServer((request, response) => {
  let filePath;

  try {
    filePath = getFilePath(request.url || "/");
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": filePath.endsWith(".html") ? "no-cache" : "public, max-age=31536000, immutable",
    });
    response.end(content);
  });
});

server.listen(port, () => {
  console.log(`Static export server listening on port ${port}`);
});