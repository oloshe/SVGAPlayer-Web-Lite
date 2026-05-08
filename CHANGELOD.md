# 更新日志

## 2026-05-08

- 优化渲染路径解析：将 Bezier path 的解析结果缓存在 path 对象上，减少逐帧渲染时重复字符串解析和临时对象分配。
- 每次绘制 shape 时重置 canvas 的虚线状态，避免上一条路径的 `lineDash` 样式影响后续绘制。
- 动画调度复用已绑定的帧回调，减少每帧 `bind` 带来的函数分配。
- 创建解析器和动画 worker 后及时释放 Blob URL，降低内存占用。
- 缓存播放器主画布的 2D context，并在 container 变化时失效缓存。
- 重置播放器配置时先断开旧的 `IntersectionObserver`，避免重复 observer 实例。
- 在重新挂载和销毁播放器时清理缓存帧，支持关闭 `ImageBitmap`，并释放 bitmap 引用。
- 图片加载失败时让 `mount` 返回 rejected promise，避免加载异常时 Promise 一直悬挂。
- 仅在下载总大小可计算时回调下载进度，避免出现 `NaN` 或 `Infinity` 进度值。
- 修复当前 Rollup 4 构建链路下 TypeScript 文件未先转译导致 `pnpm build` 失败的问题，并补齐 `.ts` 扩展解析。
