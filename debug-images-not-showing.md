# [OPEN] images-not-showing

## Symptoms
- 首屏照片不显示。
- 精彩照片不显示。

## Scope
- `src/components/Hero.tsx`
- `src/components/Gallery.tsx`
- `public/gallery`
- 静态导出产物与部署路径

## Hypotheses
1. 代码中的图片路径与 `public/gallery` 中的实际文件名不一致。
2. `next build` / `output: 'export'` 的导出产物中未包含对应图片文件。
3. 部署后的静态资源请求路径与站点根路径不匹配，导致浏览器请求了错误 URL。
4. 文件名历史重命名后，代码、产物、浏览器缓存三者之一仍在引用旧文件名。

## Evidence Log
- `Hero.tsx` 与 `Gallery.tsx` 的运行时埋点表明浏览器在本地开发环境成功加载图片。
- `.dbg/trae-debug-log-images-not-showing.ndjson` 中多条 `Gallery image loaded` 记录显示 `/gallery/bosque-popular-el-prado-1.jpg` 到 `-18.jpg` 均可加载。
- `Invoke-WebRequest http://localhost:3000/gallery/bosque-popular-el-prado-1.jpg` 与 `-4.jpg` 返回 `200`。
- 修复前的 `next.config.ts` 同时配置了 `output: 'export'` 和 `distDir: 'out'`，导致 `out` 被当作构建缓存目录使用，目录中缺少 `index.html` 与 `gallery/` 静态资源。
- 修复后移除 `distDir: 'out'`，重新构建后已生成 `out/index.html` 与 `out/gallery/bosque-popular-el-prado-4.jpg` 等静态资源。
- 在 `http://localhost:8000/zh.html` 的导出站点中，首屏图 `naturalWidth=4032`，滚动到画廊后前 8 张图片均 `complete=true` 且具备正常尺寸。

## Next Step
- 等待用户确认部署后页面是否恢复正常；确认后再清理调试埋点与调试文件。
