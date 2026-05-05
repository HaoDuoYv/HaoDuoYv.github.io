# 🤖 Claude Code 安装指南

> Anthropic 官方推出的命令行工具，在终端中直接与 Claude 交互，完成代码编写、调试、重构等任务。

---

## 📋 系统要求

| 项目 | 要求 |
|------|------|
| 💻 操作系统 | macOS 10.15+、Windows 10/11、Linux (Ubuntu 20.04+) |
| ⚙️ Node.js | 18.0 或更高版本 |
| 🧠 内存 | 建议 4GB 以上 |

---

## ⚡ 一键安装（推荐）

### 🍎 macOS / 🐧 Linux

```bash
source <(curl -fsSL https://claude-zh.cn/scripts/install.sh)
```

### 🪟 Windows (PowerShell)

```powershell
& ([scriptblock]::Create((New-Object Net.WebClient).DownloadString("https://claude-zh.cn/scripts/install.ps1")))
```

> 📌 脚本会自动：检测并安装 Node.js → 安装 Claude Code → 配置 settings.json → 引导配置 API 密钥

---

## 🔧 手动安装

### 第 1 步：安装 Node.js

| 平台 | 命令 |
|------|------|
| 🍎 macOS | `brew install node` |
| 🪟 Windows | `winget install OpenJS.NodeJS.LTS` 或从 [nodejs.org](https://nodejs.org/) 下载 |
| 🐧 Linux | `curl -fsSL https://deb.nodesource.com/setup_20.x \| sudo -E bash -` 然后 `sudo apt-get install -y nodejs` |

### 第 2 步：安装 Claude Code

```bash
# 设置国内镜像源（加速下载）
npm config set registry https://registry.npmmirror.com

# 安装稳定版本
npm install -g @anthropic-ai/claude-code@2.1.112

# 切回官方源（重要：避免自动更新时拉到不完整的平台包）
npm config set registry https://registry.npmjs.org
```

### 第 3 步：配置 API 密钥

将以下内容添加到 `~/.bashrc` 或 `~/.zshrc`：

```bash
# 1. 中转站 API 地址
export ANTHROPIC_BASE_URL="https://cn.luckyapi.chat"

# 2. 你的中转 API Key
export ANTHROPIC_AUTH_TOKEN="sk-xxxxxxx"

# 3. 清空官方 Key（必须为空，防止冲突）
export ANTHROPIC_API_KEY=""

# 4. （可选）指定模型
export ANTHROPIC_MODEL="claude-sonnet-4-6"
```

> ⚠️ `ANTHROPIC_AUTH_TOKEN` 是中转站密钥，`ANTHROPIC_API_KEY` 必须设为空字符串

### 第 4 步：配置 settings.json

编辑 `~/.claude/settings.json`：

```json
{
  "hasCompletedOnboarding": true,
  "env": {
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  },
  "includeCoAuthoredBy": false
}
```

| 配置项 | 说明 |
|--------|------|
| `hasCompletedOnboarding` | 跳过首次引导流程 |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | 禁用遥测等非必要网络请求 |
| `includeCoAuthoredBy` | 禁用 commit 中的 co-authored-by 标记 |

### 第 5 步：启动

```bash
claude
```

> 💡 按 `Shift+Tab` 可随时切换权限确认模式

---

## 📖 常用命令

| 命令 | 说明 |
|------|------|
| `claude` | 启动交互式会话 |
| `claude "你的问题"` | 直接提问 |
| `claude --help` | 查看帮助信息 |

---

## 🪟 Windows 用户须知

- ✅ Claude Code 完全支持 Windows 原生环境，**无需安装 WSL**
- 使用 PowerShell 或 Windows Terminal（推荐）
- 如遇到脚本执行限制，运行：

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 🔄 卸载与重装

```bash
# 卸载
npm uninstall -g @anthropic-ai/claude-code

# 重新安装
npm install -g @anthropic-ai/claude-code@2.1.112
```

> 💡 重装后环境变量和 settings.json 会保留，无需重新配置

---

## ❓ 常见问题

| 问题 | 解决方案 |
|------|----------|
| "API key not found" | 确保 `ANTHROPIC_AUTH_TOKEN` 已设置，`ANTHROPIC_API_KEY` 为空 |
| 连接超时 | 检查 `ANTHROPIC_BASE_URL` 是否为 `https://cn.luckyapi.chat` |

---

🔗 **GitHub**: [anthropics/claude-code](https://github.com/anthropics/claude-code)
📖 **中文文档**: [claude-zh.cn](https://claude-zh.cn/guide/getting-started)
