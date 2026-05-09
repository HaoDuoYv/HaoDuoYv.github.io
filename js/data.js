const NAV_DATA = [
  {
    name: "AI 开发工具",
    icon: "code-2",
    links: [
      { name: "GitHub", url: "https://github.com", desc: "代码托管平台", favicon: "favicons/github.svg" },
      { name: "VS Code", url: "https://code.visualstudio.com", desc: "代码编辑器", favicon: "favicons/vscode.svg" },
      { name: "Claude Code 安装", url: "https://code.claude.com/docs/zh-CN/overview", desc: "Claude Code 安装指南", favicon: "favicons/claude.svg" },
      { name: "Deepseek", url: "https://www.deepseek.com/", desc: "Deeoseek AI 助手", favicon: "favicons/deepseek.svg" },
      { name: "CC Switch", url: "https://www.runoob.com/ai-agent/cc-switch.html", desc: "多 Agent 统一管理工具", favicon: "favicons/cc-switch.svg" },
      { name: "Codex 安装", url: "https://docs.codex-for.me/tutorial/", desc: "OpenAI Codex 安装教程", favicon: "favicons/codex.svg" },
      { name: "Trae", url: "https://www.trae.cn/", desc: "字节跳动免费 AI 编程工具", badge: "new", favicon: "favicons/trae.svg" }
    ]
  },
  {
    name: "参考文档",
    icon: "graduation-cap",
    links: [
      { name: "Docker 文档", url: "https://docs.docker.com/manuals/", desc: "Docker 官方文档", favicon: "favicons/docker.svg" },
      { name: "JDK 文档", url: "https://file.uhsea.com/2605/1bc52f0e1061e59638cd6ce2da0d3b94O6.chm", desc: "Java 开发工具包文档" }
    ]
  },
  {
    name: "设计资源",
    icon: "palette",
    links: [
      { name: "Figma", url: "https://figma.com", desc: "协作设计工具", favicon: "favicons/figma.svg" }
    ]
  },
  {
    name: "效率工具",
    icon: "zap",
    links: [
      { name: "DocSmall", url: "https://docsmall.com", desc: "免费在线图片与 PDF 处理", favicon: "favicons/docSmall.png" }
    ]
  },
  {
    name: "个人工具",
    icon: "lightbulb",
    links: [
      {
        name: "Skills & MCP 推荐", url: "https://file.uhsea.com/2605/6742d22837d96b180125bf4396475af8N8.zip", desc: "个人 Skills 和 MCP 服务器推荐", detail: "guide.html?file=skills-mcp", favicon: "favicons/mcp.svg", intro: "整理了个人在 Claude Code、OpenCode 等 AI 编程工具中常用的 Skills 和 MCP 服务器，包含代码审查、自动测试、文档生成等多种效率提升工具。", size: "2.8 MB", format: "ZIP", skills: [
          {
            category: "Superpowers 系列", icon: "zap", items: [
              { name: "brainstorming", desc: "将模糊想法转化为完整设计方案" },
              { name: "writing-plans", desc: "将设计规格拆解为可执行实现计划" },
              { name: "executing-plans", desc: "按计划逐步执行，设置检查点" },
              { name: "subagent-driven-development", desc: "派发独立子 Agent 执行" },
              { name: "dispatching-parallel-agents", desc: "并行派发多个 Agent 处理任务" },
              { name: "using-git-worktrees", desc: "创建隔离 Git 工作区" },
              { name: "test-driven-development", desc: "先写失败测试再写实现" },
              { name: "systematic-debugging", desc: "系统性定位根因" },
              { name: "verification-before-completion", desc: "完成前强制验证" },
              { name: "requesting-code-review", desc: "发起代码审查" },
              { name: "receiving-code-review", desc: "评估审查反馈" },
              { name: "finishing-a-development-branch", desc: "完成分支收尾" },
              { name: "skill-creator", desc: "创建和测试新 Skills" }
            ]
          },
          {
            category: "Understand-Anything 系列", icon: "brain", items: [
              { name: "project-scanner", desc: "扫描代码库目录" },
              { name: "file-analyzer", desc: "批量分析源文件" },
              { name: "architecture-analyzer", desc: "分析架构层级" },
              { name: "domain-analyzer", desc: "提取业务领域知识" },
              { name: "article-analyzer", desc: "分析 Markdown 文件" },
              { name: "graph-reviewer", desc: "验证知识图谱" },
              { name: "assemble-reviewer", desc: "审查图谱合并" },
              { name: "knowledge-graph-guide", desc: "引导使用知识图谱" },
              { name: "tour-builder", desc: "设计学习路径" },
              { name: "localize-understand-graph", desc: "本地化知识图谱" }
            ]
          },
          {
            category: "前端与设计", icon: "palette", items: [
              { name: "frontend-design", desc: "创建高质量前端界面" },
              { name: "ui-ux-pro-max", desc: "UI/UX 设计数据库" },
              { name: "webapp-testing", desc: "Playwright 测试" },
              { name: "guizang-ppt-skill", desc: "电子杂志风格 PPT" }
            ]
          },
          {
            category: "文档处理", icon: "file-text", items: [
              { name: "docx", desc: "Word 文档读写编辑" },
              { name: "pdf", desc: "PDF 全能处理" },
              { name: "pptx", desc: "PowerPoint 演示文稿" },
              { name: "defuddle", desc: "提取干净 Markdown" },
              { name: "humanizer", desc: "去除 AI 文本痕迹" }
            ]
          },
          {
            category: "Obsidian 生态", icon: "book", items: [
              { name: "obsidian-cli", desc: "命令行管理知识库" },
              { name: "obsidian-markdown", desc: "Obsidian 风格 Markdown" },
              { name: "obsidian-bases", desc: "数据库视图" },
              { name: "json-canvas", desc: "可视化画布" }
            ]
          },
          {
            category: "MCP 服务器", icon: "plug", items: [
              { name: "context7", desc: "实时查询最新文档" },
              { name: "GitHub MCP", desc: "GitHub API 全功能" },
              { name: "Filesystem MCP", desc: "安全文件系统访问" },
              { name: "Playwright MCP", desc: "浏览器自动化" },
              { name: "Memory MCP", desc: "持久化知识图谱" },
              { name: "Sequential Thinking", desc: "结构化思考链" }
            ]
          }
        ]
      }
    ]
  }
];
