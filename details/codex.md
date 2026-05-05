# 🧪 Codex CLI 安装指南

> OpenAI 推出的 AI 代码助手命令行工具，在终端中与 AI 对话，帮你写代码、调试问题、解释代码。

---

## 🎯 核心能力

| 特性 | 说明 |
|------|------|
| 💬 命令行交互 | 直接在终端中与 AI 对话 |
| ✍️ 代码生成 | 根据需求生成代码片段 |
| 📖 代码解释 | 解释复杂代码的逻辑 |
| 🐛 调试辅助 | 帮助定位和修复 bug |
| 🔄 多模型支持 | 支持 GPT、Claude、Gemini 等多种模型 |

---

## 🤖 支持的模型

| 模型 | 说明 | 推荐场景 |
|------|------|----------|
| ⭐ gpt-5.4 | OpenAI 最新模型，推理能力强 | 主力模型（推荐） |
| 🔧 gpt-5.3-codex-xhigh | 代码专精模型 | 编程任务 |
| 🧠 claude-opus-4-6 | Claude 最强模型 | 复杂推理 |
| ⚡ claude-sonnet-4-6 | 性价比之选 | 日常对话 |

---

## 📋 系统要求

| 项目 | 要求 |
|------|------|
| ⚙️ Node.js | 16.0+ |
| 📦 npm | 7.0+ |

> ⚠️ **Windows 用户**：不推荐原生环境运行，建议使用 WSL2 或 VS Code 插件

---

## ⚡ 一键配置（推荐）

```bash
curl -fsSL https://claude-zh.cn/scripts/codex-config.sh | bash
```

> 📌 脚本自动完成：检测 Node.js → 安装 Codex → 创建配置目录 → 引导输入 API Key → 生成配置文件

---

## 🔧 分步配置

### 第 1 步：安装 Codex CLI

```bash
npm install -g @openai/codex
codex --version
```

> 📌 包名是 `@openai/codex`，不是 `codex-cli`

### 第 2 步：创建配置目录

```bash
mkdir -p ~/.codex
```

### 第 3 步：创建 auth.json

`~/.codex/auth.json`：

```json
{
  "OPENAI_API_KEY": "sk-你的密钥"
}
```

### 第 4 步：创建 config.toml

`~/.codex/config.toml`：

```toml
model_provider = "luckyapi"
model = "gpt-5.4"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.luckyapi]
name = "luckyapi"
base_url = "https://cn.luckyapi.chat/v1"
wire_api = "responses"
```

| 配置项 | 说明 |
|--------|------|
| `model_provider` | API 提供商 |
| `model` | 使用的模型 |
| `model_reasoning_effort` | 推理强度：low / medium / high |
| `disable_response_storage` | 禁用响应存储，保护隐私 |
| `base_url` | API 基础 URL |

---

## 🪟 Windows VS Code 插件方式

### 1️⃣ 创建配置文件

PowerShell 运行：

```powershell
irm https://claude-zh.cn/scripts/codex-config.ps1 | iex
```

或手动创建 `%USERPROFILE%\.codex\` 下的 `auth.json` 和 `config.toml`。

### 2️⃣ 安装 VS Code 插件

扩展商店搜索 `codex`，安装 **Codex – OpenAI's coding agent**。

### 3️⃣ 登录

插件启动后 → 点击"使用 API 密钥" → 填入 LuckyAPI Key → 确定。

---

## 📖 基本用法

```bash
codex                                    # 启动交互式对话
codex "如何在 Python 中读取 JSON 文件？"    # 直接提问
codex "写一个 React 组件，显示用户列表"     # 生成代码
codex explain main.py                    # 解释代码
codex debug "为什么这段代码报错？"          # 调试代码
```

---

## 🔄 切换模型

编辑 `~/.codex/config.toml` 中的 `model` 字段：

```toml
model = "gpt-5.4"              # GPT-5.4
model = "claude-opus-4-6"      # Claude Opus
model = "gpt-5.3-codex-xhigh"  # 代码专精
```

---

## 💡 进阶技巧

### 设置别名

```bash
alias c="codex"
alias ce="codex explain"
alias cdb="codex debug"
```

### 管道使用

```bash
ls -la | codex "解释这个目录结构"
cat error.log | codex "找出错误原因"
```

### 结合 Git

```bash
git diff | codex "为这些改动写一个 commit message"
git diff main | codex "审查这些代码改动"
```

---

## ❓ 常见问题

| 问题 | 解决方案 |
|------|----------|
| 配置文件位置 | Linux/macOS: `~/.codex/`，Windows: `%USERPROFILE%\.codex\` |
| 权限问题 | 使用 `sudo npm install -g @openai/codex` |
| 保护 API Key | `chmod 600 ~/.codex/auth.json`，不要提交到 Git |

---

🔗 **GitHub**: [openai/codex](https://github.com/openai/codex)
📖 **中文文档**: [claude-zh.cn](https://claude-zh.cn/guide/codex.html)
