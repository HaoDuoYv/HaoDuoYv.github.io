# 🔄 CC Switch

> The All-in-One Manager for Claude Code, Codex, Gemini CLI, OpenCode & OpenClaw

一个桌面端应用，统一管理多个 AI 编程 CLI 工具的 Provider 配置、MCP 服务器和 Skills。告别手动编辑 JSON / TOML / .env 配置文件。

---

## 💡 为什么需要 CC Switch

> 现代 AI 编程依赖 Claude Code、Codex、Gemini CLI 等 CLI 工具，但每个工具配置格式不同。切换 Provider 意味着手动编辑配置文件，MCP 和 Skills 也无法统一管理。

CC Switch 用一个可视化界面解决所有问题：**50+ 内置 Provider 预设**，一键切换；**统一 MCP 面板**，跨应用同步；**系统托盘快速切换**，无需打开主窗口。

---

## 🎯 核心功能

### 🔑 Provider 管理

| 特性 | 说明 |
|------|------|
| 🛠️ 5 CLI 工具 | Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw |
| 📦 50+ 预设 | AWS Bedrock、NVIDIA NIM 及社区中转服务 |
| ⚡ 一键切换 | 系统托盘快速切换、拖拽排序、导入导出 |
| 🔗 通用 Provider | 一次配置同步到多个应用 |

### 🛡️ 代理与故障转移

| 特性 | 说明 |
|------|------|
| 🌐 本地代理 | 热切换、格式转换、自动故障转移 |
| ⚠️ 熔断机制 | Provider 健康监控、请求矫正 |
| 🎛️ 应用级代理 | 可独立代理 Claude / Codex / Gemini |

### 🧩 MCP、Prompts 与 Skills

| 特性 | 说明 |
|------|------|
| 📡 统一 MCP 面板 | 跨 4 个应用管理 MCP 服务器，支持双向同步和 Deep Link 导入 |
| ✏️ Prompts 编辑器 | Markdown 编辑，跨应用同步 CLAUDE.md / AGENTS.md / GEMINI.md |
| 📥 Skills 管理 | 从 GitHub 仓库或 ZIP 一键安装，支持 symlink 和文件复制 |

### 📊 用量追踪与会话管理

| 特性 | 说明 |
|------|------|
| 📈 用量仪表盘 | 追踪花费、请求数、Token 使用量，趋势图表 + 请求日志 |
| 💬 会话管理 | 浏览、搜索、恢复所有应用的对话历史 |
| 🏷️ 自定义定价 | 按模型配置价格，精确计算费用 |

### ⚙️ 系统特性

- ☁️ **云同步** — Dropbox / OneDrive / iCloud / WebDAV
- 🔗 **Deep Link** — `ccswitch://` 协议导入 Provider、MCP、Prompts、Skills
- 🖥️ **跨平台** — Windows / macOS / Linux（基于 Tauri 2）
- 🎨 **主题** — 深色 / 浅色 / 跟随系统
- 🔒 **安全** — 原子写入、自动备份、自动更新

---

## 📥 下载安装

| 平台 | 安装包 | 说明 |
|------|--------|------|
| 🪟 **Windows** | `.msi` / `.exe` | 标准安装包 |
| 🍎 **macOS** | `.dmg` | 已签名公证，直接安装 |
| 🐧 **Linux** | `.deb` / `.AppImage` / Flatpak | 多种格式可选 |

---

## 📋 项目信息

| | |
|------|------|
| 🔗 **GitHub** | [farion1231/cc-switch](https://github.com/farion1231/cc-switch) |
| ⭐ **Stars** | 58.9k+ |
| 📄 **许可证** | MIT |
| 🔧 **技术栈** | Tauri 2 + React + TypeScript |
| 📦 **下载** | [Releases](https://github.com/farion1231/cc-switch/releases) |
