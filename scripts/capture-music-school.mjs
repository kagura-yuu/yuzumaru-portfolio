import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, "../public/works");
const url = "https://tanakakumiko-music-school.com/";

async function dismissOverlays(page) {
  await page.evaluate(() => {
    const clickIf = (re) => {
      const el = [...document.querySelectorAll("button, a")].find((node) =>
        re.test((node.textContent || "").trim()),
      );
      el?.click();
    };
    clickIf(/同意する|同意|Accept|OK/);
    for (const el of document.querySelectorAll("[role='dialog'], [class*='cookie'], [id*='cookie']")) {
      const text = el.textContent || "";
      if (/Cookie|同意|プライバシー/.test(text)) el.remove();
    }
  });
}

async function shot(page, filename, options = {}) {
  const dest = path.join(outDir, filename);
  await page.screenshot({ path: dest, type: "jpeg", quality: 82, ...options });
  const stat = await fs.stat(dest);
  console.log(`saved ${filename} (${Math.round(stat.size / 1024)}KB)`);
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--lang=ja-JP"],
  });
  const page = await browser.newPage();

  try {
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
    await page.waitForSelector("h1", { timeout: 15000 });
    await dismissOverlays(page);
    await new Promise((r) => setTimeout(r, 800));

    await page.evaluate(() => window.scrollTo(0, 0));
    await shot(page, "piano-school-pc.jpg");

    await page.evaluate(() => {
      const heading = [...document.querySelectorAll("h2, h3")].find((h) =>
        (h.textContent || "").includes("講師紹介"),
      );
      heading?.scrollIntoView({ block: "start" });
    });
    await new Promise((r) => setTimeout(r, 400));
    await shot(page, "piano-school-pc-instructor.jpg");

    await page.evaluate(() => {
      const heading = [...document.querySelectorAll("h2, h3")].find((h) =>
        (h.textContent || "").includes("こんな方"),
      );
      heading?.scrollIntoView({ block: "start" });
    });
    await new Promise((r) => setTimeout(r, 400));
    await shot(page, "piano-school-pc-features.jpg");

    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise((r) => setTimeout(r, 600));
    await dismissOverlays(page);
    await shot(page, "piano-school-sp.jpg");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
