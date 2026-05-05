# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

纯静态个人资源导航网站，托管在 GitHub Pages（HaoDuoYv.github.io）。无构建系统、无框架、无 npm 依赖。直接编辑 HTML/CSS/JS 文件即可。

## 开发方式

无需构建步骤。直接在浏览器中打开 `index.html`，或使用本地 HTTP 服务器（因为 `fetch` 加载 markdown 需要 HTTP 协议）：

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

## 架构

**数据层** — `js/data.js`：定义 `NAV_DATA` 全局数组，每个元素是一个分类（含 `name`、`icon`、`links`）。每条 link 可选 `badge`（显示 hot/new 标签）、`detail`（指向 `details/` 下的 markdown 文件路径）和 `favicon`（本地 SVG 图标路径）。

**渲染层** — `js/render.js`：`renderCategories(data)` 遍历 `NAV_DATA` 动态生成 DOM。链接优先使用 `link.favicon` 字段加载本地 SVG 图标，无则回退到 Google Favicon API。带 `detail` 的链接渲染为 `<button>` 而非 `<a>`，点击后 fetch markdown 并通过 `marked.js` 在 modal 中展示。

**交互层** — `js/app.js`：入口文件，`DOMContentLoaded` 时依次初始化 lucide 图标、分类渲染、语录、搜索、主题切换、弹窗、时钟。

**语录模块** — `js/quote.js`：通过 JSONP 方式调用外部 API 获取语录，带打字机动画效果，失败时使用本地 fallback 语录。

**样式** — `css/style.css`：CSS 变量驱动的主题系统（`[data-theme="dark"]`），浅色/深色/跟随系统三种模式。响应式断点在 768px。

**详情页** — `details/*.md`：markdown 格式的资源说明，通过 modal 弹窗展示。

## 外部依赖（CDN）

- Lucide 图标库（`unpkg.com/lucide`）
- marked.js（Markdown 渲染）
- Google Fonts（Inter 字体）

## 添加新资源

在 `js/data.js` 的 `NAV_DATA` 对应分类的 `links` 数组中添加条目，可选字段：`badge`（hot/new 标签）、`detail`（详情 markdown 路径）、`favicon`（本地 SVG 图标路径）。如需详情弹窗，在 `details/` 下创建 `.md` 文件。

## 注意事项

- 所有 JS 文件使用 `var` 声明和 ES5 函数语法（兼容性考虑）
- 语录模块使用 JSONP + `document.write` 劫持方式获取数据，修改时需注意清理逻辑
- CSS 主题通过 `data-theme` 属性和 CSS 变量切换，新增样式需同时适配亮/暗主题
- 每条 link 可设置 `favicon` 字段指向 `favicons/` 下的 SVG 图标，未设置时回退到 Google Favicon API
