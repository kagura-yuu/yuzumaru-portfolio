import fs from "fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const templatePath = path.join(__dirname, "ogp-template.html");
const outPath = path.join(root, "public", "ogp.jpg");
const profileSrc = path.join(root, "public", "hero", "profile.webp");
const yuzuSrc = path.join(root, "public", "profile-yuzu.png");

async function main() {
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { width: 1200px; height: 630px; overflow: hidden; }
    body {
      font-family: "Yu Gothic", "YuGothic", "Meiryo", sans-serif;
      background: linear-gradient(135deg, #fffbeb 0%, #ffedd5 45%, #fed7aa 100%);
      color: #334155;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 72px 80px;
    }
    .copy { max-width: 640px; }
    .kicker { font-size: 22px; font-weight: 700; letter-spacing: 0.28em; color: #ea580c; margin-bottom: 18px; }
    h1 { font-size: 72px; line-height: 1.1; font-weight: 700; color: #1f2937; margin-bottom: 24px; }
    p { font-size: 28px; line-height: 1.55; color: #475569; }
    .portrait {
      width: 340px; height: 340px; border-radius: 48px; overflow: hidden;
      box-shadow: 0 24px 60px rgba(249, 115, 22, 0.28);
      background: #fff7ed; position: relative;
    }
    .portrait img.profile { width: 100%; height: 100%; object-fit: cover; }
    .yuzu { position: absolute; right: -12px; bottom: -8px; width: 88px; height: 88px; }
  </style>
</head>
<body>
  <div class="copy">
    <div class="kicker">PORTFOLIO</div>
    <h1>YuzumaruWorks</h1>
    <p>QAエンジニアの視点と、デザイン・Web・アプリづくりの実践。</p>
  </div>
  <div class="portrait">
    <img class="profile" src="${pathToFileURL(profileSrc).href}" alt="" />
    <img class="yuzu" src="${pathToFileURL(yuzuSrc).href}" alt="" />
  </div>
</body>
</html>`;

  await fs.writeFile(templatePath, html, "utf8");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--lang=ja-JP"],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(templatePath).href, { waitUntil: "networkidle0" });
    await page.screenshot({ path: outPath, type: "jpeg", quality: 86 });
    const stat = await fs.stat(outPath);
    console.log(`saved public/ogp.jpg (${Math.round(stat.size / 1024)}KB)`);
  } finally {
    await browser.close();
    await fs.unlink(templatePath).catch(() => {});
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
