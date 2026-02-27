import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const QUALITY = 80;

const imagesToOptimize = [
  { src: 'public/hero/header-bg.png', dest: 'public/hero/header-bg.webp', width: 1920 },
  { src: 'public/hero/profile.png', dest: 'public/hero/profile.webp', width: 640 },
  { src: 'public/profile-yuzu-transparent.png', dest: 'public/profile-yuzu-transparent.webp', width: 128 },
  { src: 'public/works/line-icon.png', dest: 'public/works/line-icon.webp', width: 64 },
];

async function optimizeImage({ src, dest, width }) {
  try {
    const srcPath = path.resolve(src);
    const destPath = path.resolve(dest);
    
    const stats = await fs.stat(srcPath);
    const originalSize = stats.size;
    
    await sharp(srcPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(destPath);
    
    const newStats = await fs.stat(destPath);
    const newSize = newStats.size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✓ ${src}`);
    console.log(`  ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (-${reduction}%)`);
    console.log(`  → ${dest}`);
    return { src, originalSize, newSize, reduction };
  } catch (err) {
    console.error(`✗ ${src}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('=== Image Optimization ===\n');
  
  const results = [];
  for (const img of imagesToOptimize) {
    const result = await optimizeImage(img);
    if (result) results.push(result);
    console.log('');
  }
  
  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalReduction = ((1 - totalNew / totalOriginal) * 100).toFixed(1);
  
  console.log('=== Summary ===');
  console.log(`Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalNew / 1024 / 1024).toFixed(2)}MB (-${totalReduction}%)`);
}

main();
