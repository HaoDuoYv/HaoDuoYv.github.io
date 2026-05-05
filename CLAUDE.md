# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

纯静态个人资源导航网站，托管在 GitHub Pages（HaoDuoYv.github.io）。无构建系统、无框架、无 npm 依赖。纯 HTML/CSS/JS 构成。

## 开发方式

直接在浏览器中打开 `index.html`，或使用本地 HTTP 服务器：

```bash
python -m http.server 8000
npx serve .
```

## 架构

**数据层** — `js/data.js`：定义 `NAV_DATA` 全局数组，每个元素是一个分类（含 `name`、`icon`、`links`）。每条 link 可选 `badge`（显示 hot/new 标签）、`detail`（指向教程页的路径）和 `favicon`（本地 SVG 图标路径）。

**渲染层** — `js/render.js`：`renderCategories(data)` 遍历 `NAV_DATA` 动态生成 DOM。链接优先使用 `link.favicon` 字段加载本地 SVG 图标，无则回退到 Google Favicon API。带 `detail` 的链接渲染为指向教程页的 `<a>` 标签。

**交互层** — `js/app.js`：入口文件，`DOMContentLoaded` 时依次初始化 lucide 图标、分类渲染、语录、搜索、主题切换、时钟。

**语录模块** — `js/quote.js`：通过 JSONP 方式调用外部 API 获取语录，带打字机动画效果，失败时使用本地 fallback 语录。

**样式** — `css/style.css`：CSS 变量驱动的主题系统（`[data-theme="dark"]`），浅色/深色/跟随系统三种模式。响应式断点在 768px。

**教程页** — `guide.html` + `js/guide.js`：通过 URL 参数 `?file=xxx` 加载 `details/xxx.md`，使用 marked.js 渲染为 HTML。布局为 sticky header + 左侧 TOC 目录 + 右侧文章内容。支持 emoji 前缀识别的 callout 提示框（📌/⚠️/💡）。样式在 `css/guide.css`。

## 外部依赖（CDN）

- Lucide 图标库（`unpkg.com/lucide`）
- Marked.js（`unpkg.com/marked@12`，仅 guide.html 使用）
- Google Fonts（Inter + JetBrains Mono）

## 添加新资源

在 `js/data.js` 的 `NAV_DATA` 对应分类的 `links` 数组中添加条目，可选字段：`badge`（hot/new 标签）、`detail`（教程页路径）、`favicon`（本地 SVG 图标路径）。如需教程页，在 `details/` 下创建 MD 文件，并设置 `detail: "guide.html?file=xxx"`。

## 注意事项

- 所有 JS 文件使用 `var` 声明和 ES5 函数语法（兼容性考虑）
- 语录模块使用 JSONP + `document.write` 劫持方式获取数据，修改时需注意清理逻辑
- CSS 主题通过 `data-theme` 属性和 CSS 变量切换，新增样式需同时适配亮/暗主题
- 每条 link 可设置 `favicon` 字段指向 `favicons/` 下的 SVG 图标，未设置时回退到 Google Favicon API
- 教程页使用 marked.js 渲染 markdown，callout 通过 blockquote 中的 emoji 前缀识别
