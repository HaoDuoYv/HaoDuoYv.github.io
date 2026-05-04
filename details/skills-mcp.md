# 🧰 个人 Skills 与 MCP 推荐

> 以下 Skills 均为 Claude Code / Codex 等 Agent 环境下的可安装技能，用于扩展 AI 编程助手的能力边界。

---

## ⚡ Superpowers 系列

> 一套完整的 AI 编程工作流技能体系，覆盖从构思到交付的全生命周期。
> 🔗 **原项目**: [obra/superpowers](https://github.com/obra/superpowers)

📌 **请为智能体提供原项目地址，帮助安装（链接中已提供）。**

### 🚪 入口与总览（1 个）

| 技能 | 说明 |
|------|------|
| **using-superpowers** | 技能系统入口，确保每次对话开始前检查并调用合适的技能 |

### 💭 需求与设计阶段（2 个）

| 技能 | 说明 |
|------|------|
| **brainstorming** | 将模糊想法转化为完整设计方案，逐步提问 → 多方案对比 → 输出规格文档 |
| **writing-plans** | 将设计规格拆解为可执行的实现计划，每步含完整代码和测试命令 |

### 🏗️ 执行阶段（4 个）

| 技能 | 说明 |
|------|------|
| **executing-plans** | 按计划逐步执行，每个阶段设置检查点进行人工审核 |
| **subagent-driven-development** | 派发独立子 Agent 执行，自动进行规格合规 + 代码质量双重审查 |
| **dispatching-parallel-agents** | 2+ 独立任务自动派发多个 Agent 并行处理 |
| **using-git-worktrees** | 创建隔离 Git 工作区，避免在主分支直接开发 |

### ✅ 代码质量阶段（5 个）

| 技能 | 说明 |
|------|------|
| **test-driven-development** | 先写失败测试，再写最小实现使其通过，强制 TDD 循环 |
| **systematic-debugging** | 系统性定位根因：假设生成 → 验证 → 排除 |
| **verification-before-completion** | 声称完成前强制运行验证命令，防止虚假完成 |
| **requesting-code-review** | 完成任务后发起代码审查，验证实现是否满足需求 |
| **receiving-code-review** | 以技术严谨性评估审查反馈，避免盲目执行不明确建议 |

### 🏁 收尾阶段（2 个）

| 技能 | 说明 |
|------|------|
| **finishing-a-development-branch** | 引导选择合并方式（merge / PR / rebase），完成分支收尾 |
| **skill-creator** | 创建、修改和测试新 Skills，含性能评估和触发准确度优化 |

---

## 🧠 Understand-Anything 系列

> 代码库知识图谱工具链，通过多阶段分析将代码转化为可查询的知识图谱。
> 🔗 **原项目**: [Understand-Anything](https://github.com/philmcpherson/understand-anything)

📌 **请为智能体提供原项目地址，帮助安装（链接中已提供）。**

| 技能 | 说明 |
|------|------|
| 🔍 **project-scanner** | 扫描代码库目录，生成文件清单、语言检测、框架识别和复杂度估算 |
| 📄 **file-analyzer** | 批量分析源文件，提取函数、类、导入关系，生成知识图谱节点和边 |
| 🏛️ **architecture-analyzer** | 分析文件结构和导入关系，识别逻辑架构层，为每个文件分配层级 |
| 🏢 **domain-analyzer** | 提取业务领域知识——域、业务流、流程步骤，生成业务逻辑流向图 |
| 📝 **article-analyzer** | 分析 Markdown 文件，提取实体、声明和隐含关系 |
| ✅ **graph-reviewer** | 验证知识图谱的正确性、完整性和质量 |
| 🔧 **assemble-reviewer** | 审查图谱合并输出，恢复丢失的节点/边，填补批次间空白 |
| 🗺️ **knowledge-graph-guide** | 引导理解、查询和使用知识图谱 |
| 🎓 **tour-builder** | 设计代码库引导式学习路径（5-15 步），按逻辑顺序讲解架构 |
| 🌐 **localize-understand-graph** | 知识图谱本地化和语言规范化 |

---

## 🎨 其他实用 Skills

### 🖼️ 前端与设计（4 个）

| 技能 | 说明 |
|------|------|
| **frontend-design** | 创建高质量前端界面，避免通用 AI 美学，产出有设计感的代码 |
| **ui-ux-pro-max** | UI/UX 设计数据库：67 种样式、96 个调色板、57 种字体搭配、99 条 UX 指南 |
| **webapp-testing** | Playwright 测试本地 Web 应用：功能验证、截图、日志查看 |
| **guizang-ppt-skill** | 单文件 HTML 翻页 PPT，风格为"电子杂志 x 电子墨水" |

### 📑 文档与内容处理（5 个）

| 技能 | 说明 |
|------|------|
| **docx** | Word 文档读写编辑，支持目录、页眉页脚、批注修订 |
| **pdf** | PDF 全能：读取、合并、拆分、旋转、水印、加密、OCR |
| **pptx** | PowerPoint 演示文稿创建和编辑 |
| **defuddle** | 从网页提取干净 Markdown，去除导航广告，比 WebFetch 更省 Token |
| **humanizer** | 去除 AI 生成文本痕迹，让内容更自然有人味 |

### 📒 Obsidian 生态（4 个）

| 技能 | 说明 |
|------|------|
| **obsidian-cli** | 命令行管理 Obsidian 知识库，支持插件开发调试 |
| **obsidian-markdown** | Obsidian 风格 Markdown：wikilinks、嵌入、callouts、frontmatter |
| **obsidian-bases** | Obsidian Bases 数据库视图：表格、卡片、筛选器、公式 |
| **json-canvas** | JSON Canvas 可视化画布：节点、连线、分组 |

### 🔧 Skill 工具链（3 个）

| 技能 | 说明 |
|------|------|
| **writing-skills** | 编写和优化 Skills 内容及触发描述 |
| **find-skills** | 发现和安装新的 Agent Skills |
| **cache-components** | Next.js 缓存组件和部分预渲染（PPR）指南 |

---

## 🔌 MCP 推荐

> MCP (Model Context Protocol) 服务器为 AI Agent 提供外部工具能力。

| MCP 服务器 | 说明 |
|------------|------|
| 📖 **context7** | 实时查询任意库/框架的最新文档和代码示例 |
| 🐙 **GitHub MCP** | GitHub API 全功能：仓库、Issues、PR、代码搜索 |
| 📁 **Filesystem MCP** | 安全文件系统访问：目录遍历、读写、搜索、批量操作 |
| 🎭 **Playwright MCP** | 浏览器自动化：导航、截图、表单填写、HTTP 请求 |
| 🧠 **Memory MCP** | 持久化知识图谱存储，跨会话记忆实体和关系 |
| 💭 **Sequential Thinking** | 结构化思考链：分支、回溯、假设验证 |
