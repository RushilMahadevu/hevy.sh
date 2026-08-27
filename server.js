const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, api-key");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  const url = req.url.split("?")[0];

  if (url === "/" || url === "/index.html") {
    fs.readFile(FILE, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        return res.end("Error loading dashboard");
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else if (url === "/api/config" || url === "/api/key") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        hasEnvKey: Boolean(process.env.HEVY_API_KEY),
        apiKey: process.env.HEVY_API_KEY || null,
      })
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`⚡ Hevy Tracker Dashboard live at http://localhost:${PORT}`);
});
