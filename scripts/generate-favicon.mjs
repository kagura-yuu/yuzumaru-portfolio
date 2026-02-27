import path from "path";
import sharp from "sharp";

async function main() {
  const srcPng =
    "C:/Users/colde/.cursor/projects/c-yuzumaru-portfolio/assets/c__Users_colde_AppData_Roaming_Cursor_User_workspaceStorage_8d7d5cec9ae0941bcb556f39864f9f67_images_icon-7b443fc2-a2e4-424d-a072-9a116b981216.png";
  const destPng = path.resolve("src/app/icon.png");

  console.log("Generating app icon from:", srcPng);

  await sharp(srcPng)
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(destPng);

  console.log("Icon written to", destPng);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


