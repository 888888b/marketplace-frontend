import { createServer } from "https";
import { parse } from "url";
import { readFileSync } from "fs";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: readFileSync("C:/Windows/System32/localhost-key.pem"),
  cert: readFileSync("C:/Windows/System32/localhost.pem"),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(3000, () => {
    console.log("🚀 Servidor Next.js rodando em: https://localhost:3000");
  });
});
